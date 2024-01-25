import { Flex, Link, Text, useMediaQuery } from "@chakra-ui/react";
import HambButton from "./HambButton";

const menu = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const [isMdScreen] = useMediaQuery("(min-width: 48em)");
  return (
    <Flex
      w="100%"
      zIndex="sticky"
      position="fixed"
      bg="black"
      justifyContent="space-around"
      height={20}
      align={"center"}
    >
      <Text letterSpacing={1} color={"white"} fontSize="xl">
        João Santos
      </Text>
      <Flex>
        {isMdScreen ? (
          menu.map((i) => (
            <Link key={i} px={4}>
              {i}
            </Link>
          ))
        ) : (
          <HambButton />
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
