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
import { FaGithub, FaLinkedin, FaCalendarAlt } from "react-icons/fa";
import flag from "../assets/portugal-07.svg";
import { Link as Scroll } from "react-scroll";
import { Link as ChakraLink } from "@chakra-ui/react";
import saa from "../assets/saa.png";
import astronaut from "../assets/kubestronaut.png";
import EbookPopup from "./EbookPopup";

const Hero = () => {
  return (
    <Stack id="Home" bg="white" h="100%" align={"center"} direction={"column"}>
      {/* Profile Image with Floating Button */}
      <Box position="relative" display="inline-block">
        <Image
          objectFit="cover"
          boxSize={200}
          borderRadius="full"
          src={joca}
          alt="Joao Santos"
        />
        
        {/* Floating Schedule Button */}
        <Button
          as={ChakraLink}
          href="https://stan.store/jocasantos"
          isExternal
          position="absolute"
          top={2}
          right={-4}
          size="md"
          leftIcon={<FaCalendarAlt />}
          bg="green.500"
          color="white"
          borderRadius="full"
          px={4}
          py={3}
          fontSize="sm"
          fontWeight="600"
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"
          _hover={{
            bg: "green.600",
            transform: "scale(1.05)",
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
            textDecoration: "none",
          }}
          _active={{
            transform: "scale(0.98)",
          }}
          transition="all 0.2s ease"
          zIndex={2}
          animation="float 3s ease-in-out infinite"
          sx={{
            "@keyframes float": {
              "0%, 100%": {
                transform: "translateY(0px)",
              },
              "50%": {
                transform: "translateY(-6px)",
              },
            },
          }}
        >
          1:1 Call
        </Button>
      </Box>
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

      <Stack direction="row" spacing={8} align="center">
        <ChakraLink href="https://www.credly.com/badges/fe8af054-4f1b-49a5-b4f6-35d7ecaec7f9/public_url" isExternal>
            <Image  
            src={astronaut}
            width={120}
            />
          </ChakraLink>
        <ChakraLink href="https://www.credly.com/badges/4cf88c21-3a01-4988-a36b-c6b4882bc84d" isExternal>
            <Image  
            src={saa}
            width={112}
            />
          </ChakraLink>
      </Stack>

      <Box mt={7} />

      {/* <HStack> */}
        {/* <Button
          as={ChakraLink}
          href="https://rxresu.me/joaopcsantos1/joao-santos-cv"
          isExternal
        

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
        </Button> */}
        {/* <Scroll
          to="Contact"
          spy={true}
          smooth={true}
          offset={-160}
          duration={500}
          key={"Contact2"}
        >
          <Button
            color="white"
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
      </HStack> */}
      <HStack  spacing={10}>
        <Link
          _hover={{ transform: "scale(1.1)" }}
          isExternal
          href="https://www.linkedin.com/in/jocasantos/"
        >
          <FaLinkedin size={40} color="black" />
        </Link>
        <Scroll
          to="Contact"
          spy={true}
          smooth={true}
          offset={-160}
          duration={500}
          key={"Contact3"}
        >
          <Button
            color="white"
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
        <Link
          _hover={{ transform: "scale(1.1)" }}
          isExternal
          href="https://github.com/jocasantos"
        >
          <FaGithub size={40} color="black" />
        </Link>
      </HStack>
      
      {/* Ebook Popup Component */}
      <EbookPopup />
    </Stack>
  );
};

//

export default Hero;
