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
    <Box py={2} px={8}>
      <Heading w="max-content" mt={4} mb={8}>
        Library
      </Heading>
      <Box>
        <Flex flex={1} borderRadius="xl" py={4} flexDir="column" justify="left">
          <SimpleGrid columns={[2, 2, 3, 3, 4, 5]} spacing={8}>
            <Flex onClick={() => nav("/liked")} flexDir="column">
              <Flex
                borderRadius={"xl"}
                bgGradient="linear(to-r, #ff9cfe,
              #dd93ff,
              #b58cff)"
                as="button"
                flex={1}
                justify="center"
                align="center"
              >
                <Icon fontSize="5xl" as={FaHeart} />
              </Flex>
              <Text mt={1} ml={2}>
                Liked Songs
              </Text>
            </Flex>

            {playlists.map((item) => {
              return (
                <Link
                  onClick={() =>
                    nav("/playlist", {
                      state: { playlist: item },
                    })
                  }
                >
                  <Box boxSize={[null, null, null]}>
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
