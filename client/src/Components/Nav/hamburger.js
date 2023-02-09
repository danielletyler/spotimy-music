import React, { useEffect } from "react";
import {
  Menu,
  Flex,
  MenuButton,
  IconButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { logout, getAccessToken } from "../../Controllers/auth";
import { FaBars } from "react-icons/fa";

const Hamburger = ({ token, setToken }) => {
  const nav = useNavigate();
  useEffect(() => {
    setToken(getAccessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Flex justify="end" w="100%" position="fixed" p={4} zIndex={"popover"}>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FaBars />}
          color="white"
          variant="outline"
          border="0px"
          fontSize={28}
        />
        <MenuList color="black">
          <MenuItem onClick={() => nav("/")}>Home</MenuItem>
          <MenuItem onClick={() => nav("/discover")}>Discover</MenuItem>
          <MenuItem onClick={() => nav("/library")}>Library</MenuItem>
          <MenuItem onClick={() => nav("/stats")}>Your Trends</MenuItem>
          {token ? (
            <MenuItem onClick={logout}>Logout</MenuItem>
          ) : (
            <MenuItem>
              <a className="App-link" href="http://localhost:4000/login">
                Login
              </a>
            </MenuItem>
          )}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Hamburger;
