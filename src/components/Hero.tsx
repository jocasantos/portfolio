import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import joca from "../assets/joca.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import DoubleButton from "./DoubleButton";

const Hero = () => {
  return (
    <Stack bg="white" h="100%" align={"center"} direction={"column"}>
      <Image
        objectFit="cover"
        boxSize={200}
        borderRadius="full"
        src={joca}
        alt="Joao Santos"
      />
      <Text
        letterSpacing={-1}
        fontSize={"medium"}
        mt={7}
        color={"RGBA(0, 0, 0, 0.36)"}
      >
        Hello, I'm
      </Text>
      <Text
        mt={-1}
        letterSpacing={1}
        fontSize={"xx-large"}
        as={"b"}
        color={"black"}
      >
        Joca
      </Text>
      <Text as={"b"} fontSize={"x-large"} color={"RGBA(0, 0, 0, 0.36)"}>
        React Developer
      </Text>
      <Box mt={10} />
      <DoubleButton text="Download CV" text2="Contact Info" />
      <HStack mt={8} spacing={10}>
        <FaLinkedin size={40} color="black" />
        <FaGithub size={40} color="black" />
      </HStack>
    </Stack>
  );
};

export default Hero;
