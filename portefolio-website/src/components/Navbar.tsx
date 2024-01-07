import { Flex, Text } from "@chakra-ui/react";
import HambButton from "./HambButton";

const Navbar = () => {
  return (
    <Flex
      w="100%"
      pos="fixed"
      bg="black"
      justifyContent="space-around"
      height={20}
      align={"center"}
    >
      <Text letterSpacing={1} color={"white"} fontSize="xl">
        João Santos
      </Text>
      <HambButton />
    </Flex>
  );
};

export default Navbar;
