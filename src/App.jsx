import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "../Components/Home";
import ErrorMessage from "../Components/ErrorMessage";
import NavBar from "../Components/NavBar";
import Index from "../Components/Index";
import New from "../Components/New";
import Show from "../Components/Show";
import Update from "../Components/Update";
import Bank from "../Components/Bank";
const API = import.meta.env.VITE_BASE_URL;

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((res) => res.json())
      .then((transactions) => {
        setTransactions(transactions)
        totalCalculator(transactions);
      })
      .catch((error) => {
        console.error("Error fetching data.", error);
      });
  }, [transactions]);

  const totalCalculator = (transactionData) => {
    const total = transactionData.reduce(
      (sum, transaction) => sum + Number(transaction.amount),
      0
    );
    return total;
  };
  // Example file: src/App.js
console.log(`${API}`);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Bank transactions={transactions} totalCalculator={totalCalculator}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/:index/edit" element={<Update />} />
            <Route path="/404" element={<ErrorMessage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
