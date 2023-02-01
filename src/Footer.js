import "./App.css";
import { HStack, VStack, Heading, Image, Text } from "@chakra-ui/react";
import logo from "./assets/Asset 20@4x.png";
import Nav from "./Nav.js";

function Footer() {
  return (
    <HStack
      marginLeft="auto"
      marginRight="auto"
      justifyContent="center"
      spacing="80px"
      backgroundColor="#D9D9D9"
      alignItems="start"
      padding="50px"
    >
      <Image src={logo} width="150px" paddingTop="10px"></Image>
      <VStack alignItems="left" paddingTop="20px">
        <Heading as="h5" marginBottom="10px">
          Doormat Navigation
        </Heading>
        <Nav id="navbar" display="" flex="" padding="0px" margin="0px"></Nav>
      </VStack>
      <VStack alignItems="left" paddingTop="20px">
        <Heading as="h5" marginBottom="10px">
          Contact
        </Heading>
        <Text>Address: 123 Rainbow Rd</Text>
        <Text>Phone Number: 01234556789</Text>
        <Text>Email: LittleLemon@gmail.com</Text>
        <Text></Text>
      </VStack>
      <VStack alignItems="left" paddingTop="20px">
        <Heading as="h5" marginBottom="10px">
          Social Media
        </Heading>
        <Text>Facebook</Text>
        <Text>Twitter</Text>
        <Text>Instagram</Text>
      </VStack>
    </HStack>
  );
}

export default Footer;
