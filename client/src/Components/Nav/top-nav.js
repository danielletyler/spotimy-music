import React, { useEffect } from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { logout, getAccessToken } from "../../Controllers/auth";
import { Box } from "@chakra-ui/react";

const TopNav = ({ token, setToken }) => {
  useEffect(() => {
    setToken(getAccessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box borderBottomColor="gray.700" borderBottomWidth="1px" bg="gray.800">
      <Flex p={4} justify="space-between">
        <Heading
          bgGradient="linear(to-l, #ff9cfe,
        #dd93ff,
        #b58cff)"
          bgClip="text"
        >
          SpotiMy Music
        </Heading>
        {token ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Button>
            <a className="App-link" href="http://localhost:4000/login">
              Login
            </a>
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default TopNav;
