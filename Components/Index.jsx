import { useEffect, useState } from "react";
import Transaction from "./Transaction";
const API = import.meta.env.VITE_BASE_URL;

function Index() {
  const [transactions, setTransactions] = useState([]);
  const [bankTotal, setBankTotal] = useState(0)

  useEffect(() => {
    fetch(`${API}/transactions`)
    .then((res) => res.json())
    .then((transactions) => setTransactions(transactions))
    .catch((error) => {
      console.error("Error fetching data.", error)
    })
  })

    return (
      <div className="Transactions">
        <h2>Index</h2>
        <section>
          <h3>Bank Account Total: ${bankTotal}</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) =>( 
                <Transaction key={index} transaction={transaction} id = {index}/>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
  
  export default Index;