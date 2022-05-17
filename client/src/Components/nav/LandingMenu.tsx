import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const LandingMenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        color="black"
      />
      <MenuList bgColor="white" color="black">
        <Link to="/chat"><MenuItem>Chat</MenuItem></Link>
        <Link to="/tokenomics"><MenuItem >Tokenomics</MenuItem></Link>
        <Link to="/events"><MenuItem>Events</MenuItem></Link>
      </MenuList>
    </Menu>
  );
};