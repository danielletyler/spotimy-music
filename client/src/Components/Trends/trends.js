import React, { useState, useEffect } from "react";
import { Box, Heading, Flex, Text, Icon, Image } from "@chakra-ui/react";
import { getUserTop } from "../../Controllers/spotify";
import { Menu } from "@chakra-ui/react";
import { MenuButton } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import { MenuList } from "@chakra-ui/react";
import { MenuItem } from "@chakra-ui/react";

const Stats = () => {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [menuTime, setMenuTime] = useState("4-weeks");
  const [queryTime, setQueryTime] = useState("short_term");
  const [type, setType] = useState("Songs");

  useEffect(() => {
    getUserTop("tracks", queryTime, "20").then((res) => setTracks(res.items));
    getUserTop("artists", queryTime, "20").then((res) => setArtists(res.items));
  }, [queryTime]);

  return (
    <Flex justify="center">
      <Box w={["100%", "100%", "75%", "50%", "50%"]} px={[8, 8, null]}>
        <Flex
          flexDir={["column", "column", "row"]}
          columnGap={4}
          align={[null, null, "center"]}
        >
          <Heading>Trends</Heading>
          <Flex columnGap={4} mt={[4, 4, 0]} h="max-content">
            <Menu flex={1}>
              <MenuButton
                py={1}
                px={2}
                bg="white"
                borderRadius={"md"}
                color="#8338EC"
              >
                <Flex columnGap={1} align="center">
                  <Text>{menuTime}</Text>
                  <Icon as={FaAngleDown} />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    setMenuTime("4-weeks");
                    setQueryTime("short_term");
                  }}
                >
                  4-weeks
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setMenuTime("6 months");
                    setQueryTime("medium_term");
                  }}
                >
                  6-months
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setMenuTime("All Time");
                    setQueryTime("long_term");
                  }}
                >
                  All time
                </MenuItem>
              </MenuList>
            </Menu>
            <Box
              as="button"
              py={1}
              px={2}
              bg={type === "Songs" ? "#8338EC" : "white"}
              color={type === "Songs" ? "white" : "rgba(0,0,0,0.5)"}
              borderRadius={"md"}
              onClick={() => setType("Songs")}
            >
              Songs
            </Box>
            <Box
              as="button"
              py={1}
              px={2}
              borderRadius={"md"}
              bg={type === "Artists" ? "#8338EC" : "white"}
              color={type === "Artists" ? "white" : "rgba(0,0,0,0.5)"}
              onClick={() => setType("Artists")}
            >
              Artists
            </Box>
          </Flex>
        </Flex>
        {type === "Songs" ? (
          <Box mt={8}>
            {tracks.map((track, index) => {
              return (
                <Flex align="center" my={4}>
                  <Text w={8}>{index + 1}</Text>
                  <Image mr={4} boxSize={14} src={track.album.images[0].url} />
                  <Box flex={1}>
                    <Text>{track.name}</Text>
                    <Text>{track.artists[0].name}</Text>
                  </Box>
                </Flex>
              );
            })}
          </Box>
        ) : (
          <Box mt={8}>
            {artists.map((artist, index) => {
              return (
                <Flex align="center" my={4}>
                  <Text w={8}>{index + 1}</Text>
                  <Image mr={4} boxSize={14} src={artist.images[0].url} />
                  <Box flex={1}>
                    <Text>{artist.name}</Text>
                    <Text>{artist.genres[0]}</Text>
                  </Box>
                </Flex>
              );
            })}
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default Stats;
