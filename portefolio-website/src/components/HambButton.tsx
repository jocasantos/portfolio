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
        bgColor={"black"}
        color={"white"}
        _expanded={{ bg: "black", border: "1px" }}
        _focus={{ bg: "black" }}
      />
      <MenuList bgColor={"black"}>
        <MenuItem justifyContent={"center"} bgColor={"black"}>
          Home
        </MenuItem>
        <MenuItem justifyContent={"center"} bgColor={"black"}>
          About
        </MenuItem>
        <MenuItem justifyContent={"center"} bgColor={"black"}>
          Projects
        </MenuItem>
        <MenuItem justifyContent={"center"} bgColor={"black"}>
          Contacts
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HambButton;
