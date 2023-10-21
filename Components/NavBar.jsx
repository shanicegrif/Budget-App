import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top border-bottom">
      <h1 className="mx-3">
        <Link to="/transactions">Budgeting App</Link>
      </h1>
      <button className="navButton">
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </nav>
  );
}
