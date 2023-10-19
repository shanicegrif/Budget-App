import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function New() {

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

  const addTransaction = () => {
    const httpOptions = {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: {
        "Content-type": "application/json",
      },
    }
    fetch(`${API}/transactions`, httpOptions)
    .then((res) => {
      console.log(res);
      alert(`${transaction.itemName} was added to the budget!`);
      navigate("/transactions");
    })
    .catch((error) => {
      console.log(transaction);
      console.error("Error adding data.", error)
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();
  }

    return (
      <div className="newTransaction">
        <h2>Add New Transaction</h2>
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
      </div>
    );
  }
  
  export default New;