import Logo from "./ui/Logo";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Logo />
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies/create">Aggiungi</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
