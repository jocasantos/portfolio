import { Stack, Image, Card, CardBody, Flex } from "@chakra-ui/react";
import jocacolor from "../assets/joca_color3.webp";
import { Text } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";

const About = () => {
  return (
    <Stack id="About" bg="white" h="100%" align={"center"} direction={"column"}>
      <Text
        fontWeight="500"
        letterSpacing={-1}
        fontSize={"medium"}
        color={"RGBA(0, 0, 0, 0.36)"}
      >
        Get To Know More
      </Text>
      <Text
        mt={-2}
        letterSpacing={1}
        fontSize={"xx-large"}
        as={"b"}
        color={"black"}
      >
        About Me
      </Text>
      <Image
        mt={6}
        objectFit="contain"
        boxSize={140}
        borderRadius={40}
        src={jocacolor}
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
            <Text textAlign="justify" fontSize="sm" color="RGBA(0, 0, 0, 0.50)">
              I decided to change my career in the summer of 2023. Previously, I
              was a Fitness Instructor with 5+ years of experience and a
              Master's degree in Sports Science. During that time, I also
              coached kid's futsal for over 10 years.
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
            <Text textAlign="justify" fontSize="sm" color="RGBA(0, 0, 0, 0.50)">
              I'm a self-learner, after I learned HTML, CSS and JavaScript, I
              started to learn <b>React + TypeScript</b>. I did love it! Already
              tried different UI libraries, like <b>Shadcn/UI</b>,{" "}
              <b>Chakra UI</b>,<b> Bootstrap</b> and <b>Tailwind</b>. Right now
              I'm building a full stack project with <b>Next.JS</b>.
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default About;
