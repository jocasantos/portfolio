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
              Master's degree in Sports Science. During that time, I also was a
              kid's futsal coach.
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
              I am a dedicated self-learner with a strong foundation in web
              development. My journey began with mastering <b>HTML</b>,{" "}
              <b>CSS</b> and <b>JavaScript</b>, which laid the groundwork for my
              skills. I then advanced to <b>React + TypeScript</b>, developing
              robust front-end applications.<br></br>
              <br></br> To deepen my knowledge, I explored the backend with{" "}
              <b>Next.JS</b>, focusing on critical aspects like{" "}
              <b>Authentication</b> and database management, both <b>SQL</b> and{" "}
              <b>NoSQL</b>.<br></br>
              <br></br> Currently, my primary focus is on expanding my expertise
              in <b>Cloud Computing</b> and <b>DevOps</b>, aiming to understand
              and integrate modern development and deployment practices.
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default About;
