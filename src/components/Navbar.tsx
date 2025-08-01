import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import HambButton from "./HambButton";
import { Link } from "react-scroll";
import { Link as ChakraLink } from "@chakra-ui/react";

const menu = ["Home", "About", "Ebook", "Projects", "Contact"];

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
          menu.map((i) => {
            // Handle external link for Ebook
            if (i === "Ebook") {
              return (
                <ChakraLink
                  key={i}
                  href="https://ebook.jocasantos.com"
                  isExternal
                >
                  <Text
                    color={"white"}
                    cursor="pointer"
                    _hover={{ transform: "scale(1.1)", textDecoration: "none" }}
                    px={4}
                  >
                    {i}
                  </Text>
                </ChakraLink>
              );
            }
            
            // Regular scroll navigation for other items
            return (
              <Link
                to={i}
                spy={true}
                smooth={true}
                offset={-160}
                duration={500}
                key={i}
              >
                <Text
                  color={"white"}
                  cursor="pointer"
                  _hover={{ transform: "scale(1.1)" }}
                  px={4}
                >
                  {i}
                </Text>
              </Link>
            );
          })
        ) : (
          <HambButton />
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
