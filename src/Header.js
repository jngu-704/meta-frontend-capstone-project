import Nav from "./Nav";
import logo from "./assets/Logo.svg";
import { HStack, Image } from "@chakra-ui/react";

function Header() {
  return (
    <HStack justifyContent="center" alignItems="center" alignContent="center">
      <Image src={logo} alt="Little Lemon Logo" />
      <Nav display="flex" flex="row" padding="10px" margin=""></Nav>
    </HStack>
  );
}

export default Header;
