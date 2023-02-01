import "./font.css";
import owners from "./assets/Mario and Adrian b.jpg";
import { HStack, VStack, Heading, Image } from "@chakra-ui/react";

function Chicago() {
  return (
    <>
      <HStack
        marginLeft="auto"
        marginRight="auto"
        padding="50px"
        alignItems="center"
        justifyContent="center"
        spacing="100px"
      >
        <VStack width="400px" alignItems="left" justifyContent="center">
          <Heading as="h1">Little Lemon</Heading>
          <Heading as="h2">Chicago</Heading>
          <br />
          <Heading as="h4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </Heading>
        </VStack>
        <Image
          src={owners}
          borderRadius={16}
          width="350px"
          height="250px"
        ></Image>
      </HStack>
    </>
  );
}

export default Chicago;
