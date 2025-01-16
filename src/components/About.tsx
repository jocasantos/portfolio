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
            I am a passionate self-learner with a strong foundation in <b>DevOps</b> and <b>Cloud Computing</b>, complemented by a solid background in web development (<b>Next.JS</b>). With hands-on experience in modern development practices, I specialize in integrating development and operations to deliver scalable, efficient, and reliable software solutions.<br></br>
<br></br> My technical expertise spans across a range of tools and technologies, including <b>AWS</b> services (<b>S3</b>, <b>EC2</b>, <b>VPC</b>, <b>IAM</b>, <b>Cost Management</b>, <b>CloudWatch</b>, <b>Lambda</b>, <b>DynamoDB</b>), containerization with <b>Docker</b>, and container orchestration using <b>Kubernetes</b>. I am proficient in <b>Terraform</b> for infrastructure as code, <b>Ansible</b> for configuration management, and CI/CD tools like <b>Jenkins</b> and <b>GitHub Actions</b> for automating deployment pipelines.<br></br>
<br></br> In addition, I have hands-on experience with monitoring and visualization tools like <b>Prometheus</b> and <b>Grafana</b>, as well as continuous deployment with <b>Argo CD</b>, ensuring seamless and reliable application delivery.<br></br>
<br></br> With a focus on continuous learning and problem-solving, I am eager to contribute to a dynamic team, leveraging my skills to improve operational efficiency, automate processes, and drive innovation in the DevOps space.

            </Text>
          </Flex>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default About;
