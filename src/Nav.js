import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Homepage";
import BookingPage from "./BookingPage";

function Nav() {
  return (
    <nav>
      <ul >
        <li><a href="/#home">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#menu">Menu</a></li>
        <li><a href="/#reservations">Reservations</a></li>
        <li><a href="/#order-online">Order Online</a></li>
        <li><a href="/#login">Login</a></li>

      </ul>
    </nav>
  );
}

export default Nav;

