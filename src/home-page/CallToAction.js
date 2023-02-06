import "../font.css";
import "./CallToAction.css";
import food from "../assets/restauranfood.jpg";
import { HStack, Box, Heading } from "@chakra-ui/react";

function CallToAction() {
  return (
    <div className="call-to-action-container">
      <div id="description">
        <HStack
          marginLeft="auto"
          marginRight="auto"
          alignItems="center"
          justifyContent="center"
          spacing="150px"
        >
          <Box paddingBottom={30}>
            <Heading as="h1">Little Lemon</Heading>
            <Heading as="h2">Chicago</Heading>
            <Heading as="h4" width="200px">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Heading>
            <button id="book-button" aria-label="Reserve a Table">
              Reserve a Table
            </button>
          </Box>
          <Box>
            <img src={food} id="food" alt="restaurant food"></img>
          </Box>
        </HStack>
      </div>
    </div>
  );
}

export default CallToAction;
