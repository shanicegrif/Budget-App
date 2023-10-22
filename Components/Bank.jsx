import { useEffect, useState } from "react";
const API = import.meta.env.VITE_BASE_URL;

function Bank({ transactions, totalCalculator }) {
  const [bankTotal, setBankTotal] = useState(0);
  const [goalAmount, setGoalAmount] = useState(3000);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const total = totalCalculator(transactions);
    setBankTotal(total);
    const calculatedProgress = (total / goalAmount) * 100;
    setProgress(calculatedProgress);
  }, [transactions, totalCalculator, goalAmount]);

  const handleGoalChange = (event) => {
    const newGoalAmount = parseFloat(event.target.value);
    setGoalAmount(newGoalAmount);
  };

  return (
    <div className="bankAccount">
      <h5>Bank Account Total: ${bankTotal.toFixed(2)}</h5>
      <div>
        <label>Set your bank goal: $</label>
        <input type="number" value={goalAmount} onChange={handleGoalChange} />
      </div>
      <div>
        <p>Progress towards your goal: {progress.toFixed(2)}%</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Bank;
