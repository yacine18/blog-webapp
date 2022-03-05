import {
  Box,
  Flex,
  Link,
  Spacer,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { FcMenu, FcAbout, FcHome } from "react-icons/fc";

const Navbar = () => {
  return (
    <Flex p={3} m={3}>
      <Box fontSize="3xl" fontWeight="bold">
        <Link href="/" color="red.400">
          Read.
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
        <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="red.400" fontSize="2rem"  />

          <MenuList>
            <Link href="/">
              <MenuItem icon={<FcHome />} >Home</MenuItem>
            </Link>
            <Link href="/">
              <MenuItem>Register</MenuItem>
            </Link>
            <Link href="/">
              <MenuItem>Login</MenuItem>
            </Link>
            <Link href="/">
              <MenuItem icon={<FcAbout />}>About</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
