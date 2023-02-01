import "./font.css";
import greek from "./assets/greek salad.jpg";
import bruchetta from "./assets/bruchetta.svg";
import dessert from "./assets/lemon dessert.jpg";
import SpecialsCard from "./SpecialsCard";
import { HStack, VStack, Heading, Button, Box } from "@chakra-ui/react";

const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    imgSrc: greek,
  },
  {
    title: "Bruchetta",
    price: "$10.99",
    description:
      " Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    imgSrc: bruchetta,
  },
  {
    title: "Lemon Dessert",
    price: "$4.99",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    imgSrc: dessert,
  },
];

function Specials() {
  return (
    <VStack paddingBottom="50px">
      <HStack
        marginLeft="auto"
        marginRight="auto"
        alignItems="center"
        justifyContent="center"
        spacing="350px"
      >
        <Box>
          <Heading as="h2">This weeks specials!</Heading>
        </Box>
        <Box>
          <Button
            aria-label="Online Menu"
            backgroundColor="#f4ce14"
            borderRadius="16px"
            fontSize="14"
            fontWeight="bolder"
            padding="7px"
            height="50px"
            width="150px"
            border="none"
            margin="35px"
          >
            Online Menu
          </Button>
        </Box>
      </HStack>
      <HStack
        marginLeft="auto"
        marginRight="auto"
        alignItems="center"
        justifyContent="center"
        spacing="25px"
      >
        {specials.map((special) => (
          <SpecialsCard
            key={special.title}
            title={special.title}
            price={special.price}
            description={special.description}
            imageSrc={special.imgSrc}
          />
        ))}
      </HStack>
    </VStack>
  );
}

export default Specials;
