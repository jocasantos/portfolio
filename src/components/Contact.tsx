import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdEmail, MdCopyright } from "react-icons/md";
import { Link } from "react-scroll";
import { Link as Link_chakra }  from "@chakra-ui/react";

const Contact = () => {
  return (
    <Stack
      id="Contact"
      bg="white"
      h="100%"
      align={"center"}
      direction={"column"}
    >
      <Text
        letterSpacing={-1}
        fontSize={"medium"}
        fontWeight="500"
        mt={7}
        color={"RGBA(0, 0, 0, 0.36)"}
      >
        Get in Touch
      </Text>
      <Text
        letterSpacing={1}
        mt={-2}
        fontSize={"xx-large"}
        as={"b"}
        color={"black"}
      >
        Contact Me
      </Text>
      <Flex
        direction="row"
        border="solid"
        borderColor="gray"
        borderRadius="22px"
        borderWidth="1px"
        height={16}
        align="center"
        mt={4}
        px={2}
      >
        <Button
          as = {Link_chakra}
          leftIcon={<MdEmail />}
          color="black"
          fontSize="sm"
          fontWeight={400}
          bg="white"
          _hover={{ transform: "scale(1.05)", textDecoration: "none" }}
          href="mailto:joaopcsantos1@gmail.com"
        >
          joaopcsantos1@gmail.com
        </Button>
        <Button
          as={Link_chakra}
          leftIcon={<MdEmail />}
          color="black"
          fontSize="sm"
          fontWeight={400}
          bg="white"
          _hover={{ transform: "scale(1.05)", textDecoration: "none" }}
          href="https://www.linkedin.com/in/jocasantos/"
          isExternal
          
        >
          LinkedIn
        </Button>
      </Flex>
      <Box height={40}></Box>
      <Stack cursor={"pointer"} direction="row" spacing={8}>
        <Link
          to="Home"
          spy={true}
          smooth={true}
          offset={-160}
          duration={500}
          key={"Home"}
        >
          <Text color="black" fontWeight={500}>
            Home
          </Text>
        </Link>
        <Link
          to="About"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          key={"About"}
        >
          <Text color="black" fontWeight={500}>
            About
          </Text>
        </Link>
        <Link
          to="Projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          key={"Projects"}
        >
          <Text color="black" fontWeight={500}>
            Projects
          </Text>
        </Link>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={-160}
          duration={500}
          key={"Contact"}
        >
          <Text color="black" fontWeight={500}>
            Contact
          </Text>
        </Link>
      </Stack>
      <HStack mt={4} mb={10}>
        <Text mr={-1} color="gray" fontSize={"x-small"}>
          Copyright
        </Text>
        <MdCopyright size={10} color="gray" />
        <Text ml={-1} color="gray" fontSize={"x-small"}>
          2023 João Santos. All Rights Reserved
        </Text>
      </HStack>
    </Stack>
  );
};

export default Contact;
