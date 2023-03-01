import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack color="black" backgroundColor="#fff" borderRadius="15px" spacing="4">
        <Image src={imageSrc} borderRadius="15px"/>
        <VStack align="left" padding="4" spacing="2">
          <Heading justifyContent={"left"} fontSize="xl">{title}</Heading>
          <Text fontSize="17px" color="grey">{description}</Text>
         <HStack spacing="4">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>        
      </VStack>
    </VStack>
  );
};

export default Card;
