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
              Life and Values
            </Text>
            <Text textAlign="justify" fontSize="sm" color="RGBA(0, 0, 0, 0.50)">
            In mid-2023, I made a <b>bold decision</b> to leave my career as a personal trainer and enter the tech world. With <b>zero programming background</b> and a limited budget, I relied entirely on <b>free resources</b> and determination. This while working <b>full-time</b> plus <b>wife</b> and <b>2 kids</b>, I did it!
            <br></br>
            <br></br>
            I really like to <b>guide and help other people</b>, and I know there is a lot of people out there like me… Who needs a job with more <b>flexibility</b>, so they can spend more <b>quality time with their family</b>. And yah, the <b>salaries usually are better</b> than others fields!
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
              What I Do
            </Text>
            <Text textAlign="justify" fontSize="sm" color="RGBA(0, 0, 0, 0.50)">
            I am a passionate professional with a strong foundation in <b>DevOps</b> and <b>Cloud Computing</b>, complemented by a solid background in <b>Web Development</b>. With hands-on experience in modern development practices, I specialize in integrating development and operations to deliver scalable, efficient, and reliable software solutions.<br></br>
<br></br> I work at <b>Scalabit.dev</b> as a <b>DevSecOps Engineer</b> where we empower teams to deliver high-quality value to their customers faster, securely, seamlessly through full automation. Basically, other companies hire mine to do <b>DevOps and Security</b> work on their projects.<br></br>
<br></br> I work mainly with <b>Cloud</b> (AWS, Azure, GCP), <b>Kubernetes</b>, <b>Terraform</b>, <b>Docker</b>, <b>CI/CD</b> (GitHub Actions, GitLab), <b>Taskfile</b>, <b>Security Tools</b> and ensure that security best practices are followed.<br></br>
<br></br> <b>Automate projects</b>, <b>cloud migrations</b>, <b>enhance security in pipelines</b>, and more!

            </Text>
          </Flex>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default About;
