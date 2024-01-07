import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import joca from "../assets/joca.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <Stack mt={40} align={"center"} direction={"column"}>
      <Image
        objectFit="cover"
        boxSize={200}
        borderRadius="full"
        src={joca}
        alt="Joao Santos"
      />
      <Text as={"b"} fontSize={"medium"} mt={7} color={"RGBA(0, 0, 0, 0.36)"}>
        Hello, I'm
      </Text>
      <Text my={-1} fontSize={"xx-large"} as={"b"} color={"black"}>
        Joca
      </Text>
      <Text as={"b"} fontSize={"x-large"} color={"RGBA(0, 0, 0, 0.36)"}>
        React Developer
      </Text>
      <HStack mt={10}>
        <Button
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
        <Button
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
      </HStack>
      <HStack mt={8} spacing={10}>
        <FaLinkedin size={40} color="black" />
        <FaGithub size={40} color="black" />
      </HStack>
    </Stack>
  );
};

export default Home;
