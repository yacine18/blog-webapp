import {
  Box,
  Flex,
  Spacer,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { FcMenu } from "react-icons/fc";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex p={3} m={3}>
      <Box fontSize="3xl" fontWeight="bold">
        <Link to="/">
          Read.
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
        <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="red.400" fontSize="2rem"  />

          <MenuList>
            <Link to="/register">
              <MenuItem>Register</MenuItem>
            </Link>
            <Link to="/login">
              <MenuItem>Login</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
