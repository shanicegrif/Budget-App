import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../Components/Home";
import ErrorMessage from "../Components/ErrorMessage";
import NavBar from "../Components/NavBar";
import Index from "../Components/Index";
import New from "../Components/New";
import Show from "../Components/Show";
import Update from "../Components/Update";
import Bank from "../Components/Bank";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Bank/>
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
