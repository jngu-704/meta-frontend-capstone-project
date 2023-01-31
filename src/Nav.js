import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav aria-label="Navigation Bar">
        <ul>
          <li>
            <Link to="/" className="nav-item" aria-label="Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item" aria-label="About">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" className="nav-item" aria-label="Menu">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/booking" className="nav-item" aria-label="Reservations">
              Reservations
            </Link>
          </li>
          <li>
            <Link
              to="/order-online"
              className="nav-item"
              aria-label="Order Online"
            >
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-item" aria-label="Login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
