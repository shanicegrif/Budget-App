import { Link } from "react-router-dom";

function Transaction({ transaction, index, formattedDate }) {
  const amountClass = transaction.amount < 0 ? "negative" : "positive";

  return (
    <tr>
      <td>{formattedDate}</td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.itemName}</Link>
      </td>
      <td>
        <p>
          $ <span className={amountClass}> {transaction.amount} </span>
        </p>
      </td>
    </tr>
  );
}

export default Transaction;
