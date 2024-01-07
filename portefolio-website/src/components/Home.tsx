import { Box, Image, Stack } from "@chakra-ui/react";
import joca from "../assets/joca.jpeg";

const Home = () => {
  return (
    <Stack align={"center"} direction={"column"}>
      <Image
        objectFit="cover"
        boxSize={200}
        borderRadius="full"
        src={joca}
        alt="Joao Santos"
      />
    </Stack>
  );
};

export default Home;
