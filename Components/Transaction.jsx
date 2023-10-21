import { Link } from "react-router-dom";

function Transaction({ transaction, index, formattedDate }) {
  const amountClass = transaction.amount < 0 ? "negative" : "positive";

  return (
    <>
      <tr>
        <td>{formattedDate}</td>
        <td>
          <Link to={`/transactions/${index}`}>{transaction.itemName}</Link>
        </td>
        <td style={{ paddingTop: "5px" }}>
          $ <span className={amountClass}> {transaction.amount} </span>
        </td>
      </tr>
      <hr style={{marginRight:"-280px"}}/>
    </>
  );
}

export default Transaction;
