import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function Update() {
  let { index } = useParams();

  const [transaction, setTransaction] = useState({
    itemName: "",
    date: "",
    amount: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setTransaction({...transaction, [event.target.id]: event.target.value})
  }

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
    .then((res) => res.json())
    .then((transaction) => {
      setTransaction(transaction)
    })
    .catch(() => navigate("*"))
  })

  const updateTransaction = () => {
    const httpOptions = {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(`${API}/transactions/${index}`, httpOptions)
    .then(() => {
      alert(`${transaction.itemName} has been updated!`)
      navigate(`/transactions/${index}`)
    })
    .catch((error) => console.error(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  }

  return (
    <div className="updateTransaction">
      <h2>Update Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Transaction Name:</label>
        <input
          id="itemName"
          type="text"
          value={transaction.itemName}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          value={transaction.date}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder="enter amount"
          required
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="who this transaction was with"
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          value={transaction.category}
          onChange={handleTextChange}
          placeholder="what category does this fall into"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default Update;