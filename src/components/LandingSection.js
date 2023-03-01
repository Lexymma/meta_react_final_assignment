import React from "react";
import { Avatar, Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Lexy!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <Box color="#20639B"
    backgroundColor="#f6d55c" 
    justifyContent="center"
    alignItems="center"
    borderRadius="20px">
    <VStack
    py={10}
    px={6}
    maxW="35rem"
    spacing={10}
    >
      <VStack>
      <Image
      borderRadius="full"
      boxSize="100px"
      src="https://i.pravatar.cc/150?img=7" alt="avatar"
      />    
      <Text as="b">{greeting}</Text>
      </VStack>
    <Heading as="h1" size="2xl" textAlign="center">{bio1} {bio2}</Heading>
    </VStack>
  </Box>
  </FullScreenSection>
);

export default LandingSection;
