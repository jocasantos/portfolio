import { IconButton, Menu, MenuButton } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

const HambButton = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Menu"
        icon={<RxHamburgerMenu />}
        fontSize={30}
      />
    </Menu>
  );
};

export default HambButton;
