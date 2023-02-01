import { Link } from "react-router-dom";
import { UnorderedList, ListItem } from "@chakra-ui/react";

function Nav({ display, flex, padding, margin }) {
  return (
    <nav aria-label="Navigation Bar">
      <UnorderedList
        listStyleType="none"
        padding={padding}
        margin={margin}
        display={display}
        flexDirection={flex}
        alignItems="center"
        lineHeight="30px"
      >
        <ListItem paddingRight="50px">
          <Link to="/" className="nav-item" aria-label="Home">
            Home
          </Link>
        </ListItem>
        <ListItem paddingRight="50px">
          <Link to="/about" className="nav-item" aria-label="About">
            About
          </Link>
        </ListItem>
        <ListItem paddingRight="50px">
          <Link to="/menu" className="nav-item" aria-label="Menu">
            Menu
          </Link>
        </ListItem>
        <ListItem paddingRight="50px">
          <Link to="/booking" className="nav-item" aria-label="Reservations">
            Reservations
          </Link>
        </ListItem>
        <ListItem paddingRight="50px">
          <Link
            to="/order-online"
            className="nav-item"
            aria-label="Order Online"
          >
            Order Online
          </Link>
        </ListItem>
        <ListItem paddingRight="50px">
          <Link to="/login" className="nav-item" aria-label="Login">
            Login
          </Link>
        </ListItem>
      </UnorderedList>
    </nav>
  );
}

export default Nav;
