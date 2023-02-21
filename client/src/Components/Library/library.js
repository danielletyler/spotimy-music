import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Icon,
  Flex,
  Image,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { getUserPlaylists } from "../../Controllers/spotify";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const nav = useNavigate();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getUserPlaylists().then((res) => {
      setPlaylists(res.items);
    });
  }, []);

  return (
    <Box py={2} px={8}>
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
  );
};

export default Library;
