import { useEffect, useState } from "react";
const API = import.meta.env.VITE_BASE_URL;

function Bank() {
  const [bankTotal, setBankTotal] = useState(0);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((res) => res.json())
      .then((transactions) => {
        totalCalculator(transactions);
      })
      .catch((error) => {
        console.error("Error fetching data.", error);
      });
  }, []);

  const totalCalculator = (transactionData) => {
    const total = transactionData.reduce(
      (sum, transaction) => sum + Number(transaction.amount),
      0
    );
    setBankTotal(total);
  };

  return (
    <div className="bankAccount">
      <h5>Bank Account Total: ${bankTotal}</h5>
    </div>
  );
}

export default Bank;
