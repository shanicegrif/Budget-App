import { Link } from "react-router-dom";

function Transaction({transaction, index, formattedDate}) {
    return (
        <tr>
        <td>
          {formattedDate}
        </td>
        <td>
         <Link to={`/transactions/${index}`}>{transaction.itemName}</Link>
        </td>
        <td>
        <p>${transaction.amount}</p>
        </td>
      </tr>
    );
  }
  
  export default Transaction;