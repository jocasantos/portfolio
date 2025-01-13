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
              Previously, I was a Fitness Instructor and a Futsal's Head Coach
              with a Master's degree in Sports Science. I'm a husband and father of two.
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
              development and a growing expertise in <b>DevOps</b> and <b>Cloud Computing</b>. 
              My journey began with mastering <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, 
              which laid the groundwork for building dynamic and responsive front-end applications. 
              I then advanced to <b>React</b> and <b>TypeScript</b>, honing my ability to create 
              robust, scalable user interfaces.<br></br>
              <br></br> To deepen my technical skillset, I explored backend development with <b>Next.js</b>, focusing on essential concepts such as <b>Authentication</b>, 
              server-side rendering, and database management with both <b>SQL</b> and <b>NoSQL</b> solutions.<br></br>
              <br></br> Currently, I am focused on expanding my knowledge in <b>DevOps</b> and <b>Cloud Computing</b> (certified), integrating modern development and deployment practices into 
              my skillset. My experience includes working with <b>AWS</b> services (<b>S3</b>, <b>EC2</b>, <b>VPC</b>, <b>IAM</b>, <b>Lambda</b>, <b>DynamoDB</b>), containerization with <b>Docker</b>, infrastructure 
              as code using <b>Terraform</b>, and configuration management with <b>Ansible</b>. 
              I have also gained hands-on expertise in CI/CD tools like <b>Jenkins</b> and <b>GitHub Actions</b>, scripting with <b>Bash</b>, and leveraging <b>Git</b> and <b>GitHub</b> for version control and collaboration.<br></br>
              <br></br> With a strong passion for continuous learning, I aim to bridge the gap 
              between development and operations, enabling seamless, efficient, and scalable 
              software delivery.
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default About;
