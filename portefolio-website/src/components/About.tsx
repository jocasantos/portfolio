import { Stack, Image, Card, CardBody, Flex } from "@chakra-ui/react";
import jocagray from "../assets/joca_blackandwhite.webp";
import { Text } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";

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
        mb={2}
      />
      <Card mb={1} w="360px" bg="white" color="black">
        <CardBody>
          <Flex justifyContent="center" mb={1}>
            <FaCode />
          </Flex>
          <Flex flexDirection="column" align="center">
            <Text mb={1} as="b">
              Carrer Change
            </Text>
            <Text fontSize="sm" color="RGBA(0, 0, 0, 0.50)">
              Decided to change carrers at 2023, from a Fitness Instructor with
              a Masters Degree at Sports Science. Worked for 5+ years in a small
              team enviroment, without a boss presence. As a hobby I'm a Futsal
              Coach for kids for 10+ years.
            </Text>
          </Flex>
        </CardBody>
      </Card>
      <Card w="360px" bg="white" color="black">
        <CardBody>
          <Flex justifyContent="center" mb={1}>
            <FaCode />
          </Flex>
          <Flex flexDirection="column" align="center">
            <Text mb={1} as="b">
              Coding
            </Text>
            <Text fontSize="sm" color="RGBA(0, 0, 0, 0.50)">
              I'm a self-learner, with focus on front-end development. After I
              learn React, just started to...
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default About;
