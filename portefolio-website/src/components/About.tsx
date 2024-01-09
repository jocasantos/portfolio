import { Stack, Image } from "@chakra-ui/react";
import jocagray from "../assets/joca_blackandwhite.webp";
import { Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Stack bg="white" h="100vh" pt={32} align={"center"} direction={"column"}>
      <Text as={"b"} fontSize={"medium"} mt={7} color={"RGBA(0, 0, 0, 0.36)"}>
        Get To Know More
      </Text>
      <Text fontSize={"xx-large"} as={"b"} color={"black"}>
        About Me
      </Text>
      <Image
        mt={6}
        objectFit="contain"
        boxSize={140}
        borderRadius={40}
        src={jocagray}
        alt="Joao Santos"
      />
    </Stack>
  );
};

export default About;
