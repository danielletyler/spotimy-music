import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const nav = useNavigate();

  return (
    <Box p={4} w="10%" borderRightColor="gray.800" borderRightWidth="1px">
      <Text fontWeight="bold" my={2}>
        App
      </Text>
      <Flex flexDir="column" align="start" gridRowGap={2}>
        <Text
          as="button"
          variant="unstyled"
          _hover={{ color: "white" }}
          color="whiteAlpha.700"
          borderBottomWidth={window.location.pathname === "/" && "1px"}
          borderBottomColor="whiteAlpha"
          onClick={() => nav("/")}
        >
          Browse
        </Text>
        <Text
          as="button"
          variant="unstyled"
          _hover={{ color: "white" }}
          color="whiteAlpha.700"
          borderBottomWidth={window.location.pathname === "/discover" && "1px"}
          borderBottomColor="whiteAlpha"
          onClick={() => nav("/discover")}
        >
          Discover
        </Text>
      </Flex>
      <Text fontWeight="bold" mt={8} mb={2}>
        My Music
      </Text>
      <Flex flexDir="column" align="start" gridRowGap={2}>
        <Text
          as="button"
          variant="unstyled"
          _hover={{ color: "white" }}
          color="whiteAlpha.700"
          borderBottomWidth={window.location.pathname === "/library" && "1px"}
          borderBottomColor="whiteAlpha"
          onClick={() => nav("/library")}
        >
          Library
        </Text>
        <Text
          as="button"
          variant="unstyled"
          _hover={{ color: "white" }}
          color="whiteAlpha.700"
          borderBottomWidth={window.location.pathname === "/stats" && "1px"}
          borderBottomColor="whiteAlpha"
          onClick={() => nav("/stats")}
        >
          Trends
        </Text>
      </Flex>
    </Box>
  );
};

export default SideNav;
