import { Flex, Text } from "@chakra-ui/react";
import HambButton from "./HambButton";

const Navbar = () => {
  return (
    <Flex justifyContent="space-around" mt={8}>
      <Text fontSize="xl">João Santos</Text>
      <HambButton />
    </Flex>
  );
};

export default Navbar;
