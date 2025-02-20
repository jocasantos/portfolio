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
import { Link as ChakraLink } from "@chakra-ui/react";
import saa from "../assets/saa.png";

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
        DevOps / Cloud Engineer
      </Text>

      <Box mt={4} />

      <Stack direction="row" spacing={8}>
        <ChakraLink href="https://www.credly.com/badges/4cf88c21-3a01-4988-a36b-c6b4882bc84d" isExternal>
            <Image  
            src={saa}
            />
          </ChakraLink>
      </Stack>

      <Box mt={7} />

      <HStack>
        <Button
          as={ChakraLink}
          href="/João Santos CV.pdf"
          download="João Santos CV.pdf"

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
            textDecoration: "none",
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
          href="https://www.linkedin.com/in/jocasantos/"
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
