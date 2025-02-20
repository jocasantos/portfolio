import { Stack, Card, CardBody, Flex, Image, Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
import clf from "../assets/clf.png";
import { Link as ChakraLink } from "@chakra-ui/react";
import saa from "../assets/saa.png";

const Courses = () => {
  return (
    <Stack id="About" bg="white" h="100%" align={"center"} direction={"column"}>
      <Text
        fontWeight="500"
        letterSpacing={-1}
        fontSize={"medium"}
        color={"RGBA(0, 0, 0, 0.36)"}
      >
        Building
      </Text>
      <Text
        mt={-2}
        letterSpacing={1}
        fontSize={"xx-large"}
        as={"b"}
        color={"black"}
      >
        Expertise
      </Text>
      
{/*       <Card w="360px" bg="white" color="black" >
        <CardBody>
          <Flex justifyContent="center" mb={1}>
            <FaCode />
          </Flex>
          <Flex flexDirection="column" align="center">
            <Text mb={1} as="b">
              Courses
            </Text>
            <Text textAlign="justify" fontSize="sm" color="RGBA(0, 0, 0, 0.50)">
            DevOps Course - Abhishek Veeramalla <br />
            AWS Course - Abhishek Veeramalla <br />
            Terraform Course - Abhishek Veeramalla <br />
            Python for DevOps - Abhishek Veeramalla <br />
            AWS CLF Course - Andrew Brown<br />
            Next.JS Course - WebDevSimplified<br />
            React with TypeScript - Mosh Hamedani<br />
            JavaScript Full Course - SuperSimpleDev<br />
            Front End Development - freeCodeCamp
            </Text>
          </Flex>
        </CardBody>
      </Card>
      <Box mt={2} /> */}
      <Card w="360px" bg="white" color="black" shadow={""}>
        <CardBody>
          <Flex justifyContent="center" mb={1}>
            <FaCode />
          </Flex>
          <Flex flexDirection="column" align="center">
            <Text mb={1} as="b">
              Certifications
            </Text>
            <Box mt={4} />
            <Text textAlign="justify" fontSize="sm" color="RGBA(0, 0, 0, 0.50)">
            <Stack direction="column" spacing={4}>
              <ChakraLink href="https://www.credly.com/badges/4cf88c21-3a01-4988-a36b-c6b4882bc84d" isExternal>
                <Image  
                src={saa}
                />
              </ChakraLink>
              <ChakraLink href="https://www.credly.com/badges/63406fd3-4ae1-45dd-8955-dbe5aad099d7" isExternal>
          <Image  
          src={clf}
          />
        </ChakraLink>
      </Stack>
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default Courses;
