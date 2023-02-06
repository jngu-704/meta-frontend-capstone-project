import { HStack, Image, Text, VStack } from "@chakra-ui/react";

const SpecialsCard = ({ title, price, description, imageSrc }) => {
  return (
    <VStack
      bg="white"
      borderTopRadius={16}
      width="250px"
      height="360px"
      backgroundColor="#EDEFEE"
    >
      <Image
        src={imageSrc}
        borderTopRadius={16}
        width="250px"
        height="150px"
      ></Image>
      <VStack align="flex-start" padding={3}>
        <HStack>
          <Text as="b" color="black">
            {title}
          </Text>
          <Text color="#EE9972">{price}</Text>
        </HStack>
        <Text color="gray">{description}</Text>
        <Text fontSize="sm" color="black" textAlign="left">
          Order a delivery
        </Text>
      </VStack>
    </VStack>
  );
};

export default SpecialsCard;
