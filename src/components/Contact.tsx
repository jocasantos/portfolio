import { Box, Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { MdEmail, MdCopyright } from "react-icons/md";

const Contact = () => {
  return (
    <Stack bg="white" h="100%" align={"center"} direction={"column"}>
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
          leftIcon={<MdEmail />}
          color="black"
          fontSize="sm"
          fontWeight={400}
          bg="white"
          _hover={{ transform: "scale(1.05)" }}
        >
          joaopcsantos1@gmail.com
        </Button>
        <Button
          leftIcon={<MdEmail />}
          color="black"
          fontSize="sm"
          fontWeight={400}
          bg="white"
          _hover={{ transform: "scale(1.05)" }}
        >
          LinkedIn
        </Button>
      </Flex>
      <Box height={80}></Box>
      <Stack direction="row" spacing={8}>
        <Text color="black" fontWeight={500}>
          Home
        </Text>
        <Text color="black" fontWeight={500}>
          About
        </Text>
        <Text color="black" fontWeight={500}>
          Projects
        </Text>
        <Text color="black" fontWeight={500}>
          Contact
        </Text>
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
