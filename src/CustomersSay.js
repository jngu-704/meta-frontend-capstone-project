import CustomersSayCard from "./CustomersSayCard";
import { HStack, Heading, VStack } from "@chakra-ui/react";
import person from "./assets/17474.png";

const testimonials = [
  {
    rating: "5/5",
    name: "John",
    review: "Food is amazing",
    imgSrc: person,
  },
  {
    rating: "5/5",
    name: "Smith",
    review: "Food is amazing",
    imgSrc: person,
  },
  {
    rating: "5/5",
    name: "Alan",
    review: "Food is amazing",
    imgSrc: person,
  },
  {
    rating: "5/5",
    name: "Ben",
    review: "Food is amazing",
    imgSrc: person,
  },
];

function CustomersSay() {
  return (
    <>
      <VStack backgroundColor="#D9D9D9" padding="50px">
        <Heading as="h2">Testimonials</Heading>
        <HStack
          alignContent="center"
          justifyContent="center"
          alignItems="center"
        >
          {testimonials.map((testimonial) => (
            <CustomersSayCard
              key={testimonial.id}
              rating={testimonial.rating}
              name={testimonial.name}
              review={testimonial.review}
              imgSrc={testimonial.imgSrc}
            />
          ))}
        </HStack>
      </VStack>
    </>
  );
}

export default CustomersSay;
