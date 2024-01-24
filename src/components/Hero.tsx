import { Box, HStack, Image, Img, Link, Stack, Text } from "@chakra-ui/react";
import joca from "../assets/joca.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import DoubleButton from "./DoubleButton";
import flag from "../assets/portugal-07.svg";

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
        fontWeight="500"
        letterSpacing={-1}
        fontSize={"medium"}
        mt={7}
        color={"RGBA(0, 0, 0, 0.36)"}
      >
        Hello, I'm
      </Text>
      <HStack mt={-3}>
        <Img boxSize={9} src={flag} />
        <Text letterSpacing={1} fontSize={"xx-large"} as={"b"} color={"black"}>
          Joca
        </Text>
      </HStack>
      <Text fontWeight="600" fontSize={"x-large"} color={"RGBA(0, 0, 0, 0.36)"}>
        React Developer
      </Text>

      <Box mt={10} />
      <DoubleButton text="Download CV" text2="Contact Info" />
      <HStack mt={8} spacing={10}>
        <Link
          _hover={{ transform: "scale(1.1)" }}
          isExternal
          href="https://www.linkedin.com/in/jo%C3%A3o-santos-b10bbb295/"
        >
          <FaLinkedin size={40} color="black" />
        </Link>
        <Link
          _hover={{ transform: "scale(1.1)" }}
          isExternal
          href="https://github.com/jocasantos"
        >
          <FaGithub size={40} color="black" />
        </Link>
      </HStack>
    </Stack>
  );
};

export default Hero;
