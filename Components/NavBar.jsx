import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/transactions">Budgets</Link>
      </h1>
      <button>
        <Link to="/transactions/new">New Budget</Link>
      </button>
    </nav>
  );
}