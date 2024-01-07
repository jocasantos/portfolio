import { Image, Stack, Text } from "@chakra-ui/react";
import joca from "../assets/joca.jpeg";

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
    </Stack>
  );
};

export default Home;
