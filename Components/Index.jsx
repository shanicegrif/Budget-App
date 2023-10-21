import { useEffect, useState } from "react";
import Transaction from "./Transaction";
const API = import.meta.env.VITE_BASE_URL;

function Index() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((res) => res.json())
      .then((transactions) => {
        const formattedData = transactions.map((transaction) => ({
          ...transaction,
          date: formatTransactionDate(transaction.date),
        }));
        setTransactions(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data.", error);
      });
  }, []);

  const formatTransactionDate = (dateString) => {
    const options = { month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="Transactions">
      <h2>All Transactions</h2>
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <Transaction
                key={index}
                transaction={transaction}
                index={index}
                formattedDate={formatTransactionDate(transaction.date)}
              />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Index;
