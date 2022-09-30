import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Icon,
  Flex,
  Image,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { getUserPlaylists } from "../../Controllers/spotify";
import { Center } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const nav = useNavigate();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getUserPlaylists().then((res) => {
      setPlaylists(res.items);
    });
  }, []);

  return playlists.length > 0 ? (
    <Box
      p={2}
      w="90%"
      overflowY="scroll"
      bgGradient="linear(to-t, gray.800,
      gray.700)"
    >
      <Heading w="max-content" m={4} ml={8} mb={8}>
        Library
      </Heading>
      <Box overflowY="scroll">
        <Flex
          as="button"
          onClick={() => nav("/liked")}
          flex={1}
          bgGradient="linear(to-r, #ff9cfe,
              #dd93ff,
              #b58cff)"
          borderRadius={"xl"}
          boxSize="2xs"
          px={4}
          mx={8}
          my={4}
          justify="center"
          align="center"
        >
          <Icon fontSize="5xl" as={FaHeart} />
        </Flex>

        <Center>
          <Divider my={8} />
        </Center>
        <Flex
          flex={1}
          mx={8}
          borderRadius="xl"
          py={4}
          flexDir="column"
          justify="left"
        >
          <SimpleGrid columns={4} gridGap={8}>
            {playlists.map((item) => {
              return (
                <Link
                  onClick={() =>
                    nav("/playlist", {
                      state: { playlist: item },
                    })
                  }
                >
                  <Box boxSize="2xs">
                    <Image src={item.images[0].url} borderRadius="xl" />
                  </Box>
                  <Text mt={1} ml={2}>
                    {item.name}
                  </Text>
                </Link>
              );
            })}
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  ) : (
    <Box
      p={2}
      w="90%"
      overflowY="scroll"
      bgGradient="linear(to-t, gray.800,
      gray.700)"
    >
      <Heading w="max-content" m={4} ml={8} mb={8}>
        Library
      </Heading>
    </Box>
  );
};

export default Library;
