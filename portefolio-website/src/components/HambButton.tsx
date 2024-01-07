import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

const HambButton = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Menu"
        icon={<RxHamburgerMenu />}
        fontSize={30}
        bg={"black"}
        color={"white"}
        _expanded={{ bg: "black", border: "1px" }}
        _focus={{ bg: "black" }}
        _hover={{ bg: "black" }}
      />
      <MenuList bg={"black"}>
        <MenuItem justifyContent={"center"} bg={"black"}>
          Home
        </MenuItem>
        <MenuItem justifyContent={"center"} bg={"black"}>
          About
        </MenuItem>
        <MenuItem justifyContent={"center"} bg={"black"}>
          Projects
        </MenuItem>
        <MenuItem justifyContent={"center"} bg={"black"}>
          Contacts
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HambButton;
