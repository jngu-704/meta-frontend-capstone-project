import { VStack, Text, Image, HStack } from "@chakra-ui/react";

function CustomersSayCard({ rating, name, review, imgSrc }) {
  return (
    <VStack
      alignItems="left"
      padding="25px"
      backgroundColor="white"
      borderRadius={16}
    >
      <Text>Rating: {rating}</Text>
      <HStack>
        <Image src={imgSrc} width="100px" borderRadius={16}></Image>
        <Text>Name: {name}</Text>
      </HStack>
      <Text>Review: {review}</Text>
    </VStack>
  );
}

export default CustomersSayCard;
