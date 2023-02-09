import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Flex,
  Button,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { getUserTop } from "../../Controllers/spotify";
import { Menu } from "@chakra-ui/react";
import { MenuButton } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import { MenuList } from "@chakra-ui/react";
import { MenuItem } from "@chakra-ui/react";

const Stats = () => {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [menuTime, setMenuTime] = useState("Past 4-weeks");
  const [queryTime, setQueryTime] = useState("short_term");
  const [type, setType] = useState("Songs");
  const [isMobile] = useMediaQuery("(max-width: 700px)");

  useEffect(() => {
    getUserTop("tracks", queryTime, "20").then((res) => setTracks(res.items));
    getUserTop("artists", queryTime, "20").then((res) => setArtists(res.items));
  }, [queryTime]);

  return (
    <Box pb={12}>
      <Flex
        ml={[4, 10]}
        py={8}
        gridColumnGap={8}
        flexDir={isMobile ? "column" : "row"}
      >
        <Heading mb={4}>Trends</Heading>
        <Flex columnGap={4}>
          <Menu>
            <MenuButton fontSize={15} as={Button} rightIcon={<FaAngleDown />}>
              {menuTime}
            </MenuButton>
            <MenuList color="black">
              <MenuItem
                onClick={() => {
                  setMenuTime("Past 4-weeks");
                  setQueryTime("short_term");
                }}
              >
                Past 4-weeks
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setMenuTime("Past 6 months");
                  setQueryTime("medium_term");
                }}
              >
                Past 6 months
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setMenuTime("All Time");
                  setQueryTime("long_term");
                }}
              >
                All Time
              </MenuItem>
            </MenuList>
          </Menu>
          {isMobile && (
            <Menu>
              <MenuButton fontSize={15} as={Button} rightIcon={<FaAngleDown />}>
                {type}
              </MenuButton>
              <MenuList color="black">
                <MenuItem
                  onClick={() => {
                    setType("Songs");
                  }}
                >
                  Songs
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setType("Artists");
                  }}
                >
                  Artists
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Flex>
      <Flex columnGap={36}>
        {(!isMobile || type === "Songs") && (
          <Box ml={isMobile ? 6 : 12}>
            <Text fontWeight="bold" mb={2}>
              Top Songs
            </Text>
            <Box>
              {tracks.map((item, index) => {
                return (
                  <Flex
                    key={index}
                    py={2}
                    borderRadius="xl"
                    gridColumnGap={4}
                    flexDir="column"
                  >
                    <Flex>
                      <Text w={6}>{index + 1}.</Text>

                      <Text>{item.name}</Text>
                    </Flex>
                    <Text ml={6} color="gray.400">
                      {item.artists[0].name}
                    </Text>
                  </Flex>
                );
              })}
            </Box>
          </Box>
        )}
        {(!isMobile || type === "Artists") && (
          <Box mr={10} ml={isMobile && 6}>
            <Text fontWeight="bold" mb={2}>
              Top Artists
            </Text>
            <Box>
              {artists.map((item, index) => {
                return (
                  <Flex
                    key={index}
                    py={2}
                    borderRadius="xl"
                    align="left"
                    gridColumnGap={4}
                    flexDir="column"
                  >
                    <Flex align="center">
                      <Box>
                        <Flex>
                          <Text w={6}>{index + 1}.</Text>
                          <Text>{item.name}</Text>
                        </Flex>
                        <Text ml={6} color="gray.400">
                          {item.genres[0]}
                        </Text>
                      </Box>
                    </Flex>
                  </Flex>
                );
              })}
            </Box>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Stats;
