import "./Header.css";
import Nav from "./Nav";
import logo from "./assets/Logo.svg"

function Header() {
  return (
    <header className="header-container">
      <img src={logo} alt="Little Lemon Logo"/>
      <Nav></Nav>
    </header>
  );
}

export default Header;