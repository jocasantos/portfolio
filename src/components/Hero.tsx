import {
  Box,
  Button,
  HStack,
  Image,
  Img,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import joca from "../assets/joca.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import flag from "../assets/portugal-07.svg";
import { Link as Scroll } from "react-scroll";

const Hero = () => {
  return (
    <Stack id="Home" bg="white" h="100%" align={"center"} direction={"column"}>
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
        Full-Stack Developer / Cloud Engineer
      </Text>

      <Box mt={10} />
      <HStack>
        <Button
          bg="white"
          fontSize="sm"
          px="21px"
          height="53px"
          color="black"
          borderColor="black"
          border="1px"
          borderRadius="30px"
          _hover={{
            bg: "black",
            color: "white",
            transition: "0.2s",
            transform: "scale(0.98)",
          }}
        >
          Download CV
        </Button>
        <Scroll
          to="Contact"
          spy={true}
          smooth={true}
          offset={-160}
          duration={500}
          key={"Contact2"}
        >
          <Button
            color="white"
            ml={1}
            border="1px"
            borderRadius="30px"
            fontSize="sm"
            px="24px"
            height="54px"
            bg="RGBA(0, 0, 0, 0.50)"
            _hover={{
              bg: "black",
              color: "white",
              transition: "0.2s",
              transform: "scale(0.98)",
            }}
          >
            Contact Info
          </Button>
        </Scroll>
      </HStack>
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
