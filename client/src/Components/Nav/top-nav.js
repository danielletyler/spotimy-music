import React, { useEffect } from "react";
import {
  Flex,
  Icon,
  Button,
  Text,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { logout, getAccessToken } from "../../Controllers/auth";
import { FaMusic, FaEllipsisH } from "react-icons/fa";

const TopNav = ({ token, setToken, isMobile }) => {
  const nav = useNavigate();
  useEffect(() => {
    setToken(getAccessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMobile ? (
    <Flex p={4} justify="space-between" align="center">
      <Icon as={FaMusic} fontSize={[24, 36, 42]} m={3} color="zpink" />
      <Menu>
        <MenuButton
          as={IconButton}
          fontSize={24}
          icon={<FaEllipsisH />}
          color="zpink"
        />
        <MenuList>
          <MenuItem onClick={() => nav("/")}>Charts</MenuItem>
          <MenuItem onClick={() => nav("/discover")}>Discover</MenuItem>
          <MenuItem onClick={() => nav("/library")}>Library</MenuItem>
          <MenuItem onClick={() => nav("/stats")}>Trends</MenuItem>
          <MenuItem>
            {token ? (
              <Text onClick={logout}>Logout</Text>
            ) : (
              <Text>
                <a className="App-link" href="http://localhost:4000/login">
                  Login
                </a>
              </Text>
            )}
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  ) : (
    <Flex p={4} justify="space-between" align="center">
      <Icon as={FaMusic} fontSize={[24, 36, 42]} m={3} color="zpink" />
      <Flex w="50%" justify="space-evenly" align="center">
        <Heading
          position="relative"
          fontSize={15}
          textDecor={window.location.pathname === "/" && "underline"}
          onClick={() => nav("/")}
          style={{ cursor: "pointer" }}
        >
          Charts
        </Heading>
        <Heading
          position="relative"
          fontSize={15}
          textDecor={window.location.pathname === "/discover" && "underline"}
          onClick={() => nav("/discover")}
          style={{ cursor: "pointer" }}
        >
          Discover
        </Heading>
        <Heading
          position="realtive"
          fontSize={15}
          textDecor={window.location.pathname === "/library" && "underline"}
          onClick={() => nav("/library")}
          style={{ cursor: "pointer" }}
        >
          Library
        </Heading>
        <Heading
          position="realtive"
          fontSize={15}
          textDecor={window.location.pathname === "/stats" && "underline"}
          onClick={() => nav("/stats")}
          style={{ cursor: "pointer" }}
        >
          Trends
        </Heading>
      </Flex>
      {token ? (
        <Button
          color="white"
          bg="zpink"
          onClick={logout}
          _hover={{ color: "black" }}
        >
          Logout
        </Button>
      ) : (
        <Button bg="zpink" color="white" _hover={{ color: "black" }}>
          <a className="App-link" href="http://localhost:4000/login">
            Login
          </a>
        </Button>
      )}
    </Flex>
  );
};

export default TopNav;
