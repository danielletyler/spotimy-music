import React, { useState, useEffect } from "react";
import { Box, Heading, Flex, Image, Text, Link } from "@chakra-ui/react";
import { getRecents } from "../../Controllers/spotify";
import { useNavigate } from "react-router-dom";
import USA from "../../Images/usa.png";
import Global from "../../Images/global.png";
import Viral from "../../Images/viral.png";

const Home = () => {
  const nav = useNavigate();
  const [recents, setRecents] = useState([]);

  useEffect(() => {
    getRecents().then((res) => setRecents(res.items));
  }, []);

  return recents.length > 0 ? (
    <Box
      p={2}
      bgGradient="linear(to-t, gray.800,
      gray.700)"
      w="90%"
    >
      <Heading w="max-content" mx={8} mt={4} mb={8}>
        Home
      </Heading>
      <Box>
        <Box borderRadius="xl" px={8} overflowX="scroll">
          <Text mb={2}>Your Recents</Text>
          <Flex overflowX="scroll" gridColumnGap={8}>
            {recents.map((item, index) => {
              return (
                <Link
                  href={item.track.external_urls.spotify}
                  isExternal
                  key={index}
                >
                  <Box>
                    <Box boxSize="2xs">
                      <Image
                        src={item.track.album.images[0].url}
                        borderRadius="xl"
                      />
                    </Box>
                    <Text mt={2} noOfLines={1}>
                      {item.track.name}
                    </Text>
                    <Text color="gray.400" noOfLines={1}>
                      {item.track.artists[0].name}
                    </Text>
                  </Box>
                </Link>
              );
            })}
          </Flex>
        </Box>
        <Box px={8} pt={14}>
          <Text pb={4}>What's Hot?</Text>
          <Flex gridColumnGap={8}>
            <Link
              onClick={() =>
                nav("/playlist", {
                  state: {
                    playlist: {
                      id: "37i9dQZEVXbLp5XoPON0wI",
                      name: "Top Songs in the USA",
                      images: [{ url: USA }],
                    },
                  },
                })
              }
              style={{
                textDecorationThickness: "1px",
                textUnderlineOffset: "4px",
              }}
            >
              <Flex flex={1} outline="1px solid white" borderRadius="xl">
                <Box
                  borderLeftRadius="xl"
                  boxSize={32}
                  bgGradient="linear(#ff8c8c, #8cbeff)"
                ></Box>
                <Flex align="end">
                  <Heading fontSize={24} p={4}>
                    Top Songs USA
                  </Heading>
                </Flex>
              </Flex>
            </Link>
            <Link
              onClick={() =>
                nav("/playlist", {
                  state: {
                    playlist: {
                      id: "37i9dQZEVXbNG2KDcFcKOF",
                      name: "Top Songs Global",
                      images: [{ url: Global }],
                    },
                  },
                })
              }
              style={{
                textDecorationThickness: "1px",
                textUnderlineOffset: "4px",
              }}
            >
              <Flex flex={1} outline="1px solid white" borderRadius="xl">
                <Box
                  borderLeftRadius="xl"
                  boxSize={32}
                  bgGradient="linear(#ffec8c, #ff8cd9)"
                ></Box>
                <Flex align="end">
                  <Heading fontSize={24} p={4}>
                    Top Songs Global
                  </Heading>
                </Flex>
              </Flex>
            </Link>
            <Link
              onClick={() =>
                nav("/playlist", {
                  state: {
                    playlist: {
                      id: "37i9dQZEVXbKuaTI1Z1Afx",
                      name: "Top Songs Viral",
                      images: [{ url: Viral }],
                    },
                  },
                })
              }
              style={{
                textDecorationThickness: "1px",
                textUnderlineOffset: "4px",
              }}
            >
              <Flex flex={1} outline="1px solid white" borderRadius="xl">
                <Box
                  borderLeftRadius="xl"
                  boxSize={32}
                  bgGradient="linear(#9d8cff, #8cffd7)"
                ></Box>
                <Flex align="end">
                  <Heading fontSize={24} p={4}>
                    Top Songs Viral
                  </Heading>
                </Flex>
              </Flex>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      p={2}
      bgGradient="linear(to-t, gray.800,
       gray.700)"
      w="90%"
    >
      <Heading w="max-content" mx={8} mt={4} mb={8}>
        Home
      </Heading>
    </Box>
  );
};

export default Home;
