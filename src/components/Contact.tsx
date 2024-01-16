import { Stack, Text } from "@chakra-ui/react";

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
    </Stack>
  );
};

export default Contact;
