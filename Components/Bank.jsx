import { useEffect, useState } from "react";
const API = import.meta.env.VITE_BASE_URL;

function Bank({transactions, totalCalculator}) {
  const [bankTotal, setBankTotal] = useState(0);

  useEffect(() => {
    const total = totalCalculator(transactions);
    setBankTotal(total);
  }, [transactions, totalCalculator]);

  return (
    <div className="bankAccount">
      <h5>Bank Account Total: ${bankTotal}</h5>
    </div>
  );
}

export default Bank;