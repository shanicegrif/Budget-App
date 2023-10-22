import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function Show() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
    .then((res) => {
      if (!res.ok) {
        navigate("/404");
      }
      return res.json();
    })
      .then((transaction) => {
        setTransaction(transaction);
        console.log(transaction);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [index, navigate]);

  const handleDelete = () => {
    const httpOptions = { method: "DELETE" };

    fetch(`${API}/transactions/${index}`, httpOptions)
      .then((res) => {
        console.log(res);
        alert(`${transaction.itemName} transaction was deleted!`);
        navigate("/transactions");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="showTransaction">
      <h2>Transaction</h2>
      <article>
        <div className="transac-info">
          <h3>Transaction: {transaction.itemName}</h3>
          <p>Date: {transaction.date}</p>
          <p>Amount: ${transaction.amount}</p>
          <p>From: {transaction.from}</p>
          <p>Category: {transaction.category}</p>
        </div>
        <div className="showNav row align-items-center" style={{marginLeft:"40px", marginRight:"40px"}}>
          <div className="col">
            <Link to={"/transactions"}>
              <button>Back</button>
            </Link>
          </div>
          <div className="col">
            <Link to={`/transactions/${index}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div className="col">
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Show;
