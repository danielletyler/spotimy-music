import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Divider,
  Link,
} from "@chakra-ui/react";
import { getUserSaved } from "../../Controllers/spotify";
import LikeImage from "../../Images/liked.png";

const LikedPage = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getUserSaved().then((res) => {
      setTracks(res.items);
    });
  }, []);

  return (
    <Box w="90%">
      <Flex
        py={8}
        px={32}
        align="end"
        gridColumnGap={12}
        bgGradient="linear(to-t, gray.800,
            gray.700)"
      >
        <Box boxSize={"2xs"}>
          <Image src={LikeImage} borderRadius="xl" />
        </Box>
        <Box>
          <Heading w="max-content">Liked Songs</Heading>
        </Box>
      </Flex>
      <Box flex={1} m={8} px={24}>
        <Flex px={4} justify="space-between">
          <Flex>
            <Text w={10}>#</Text>
            <Box w={12} ml={12} mr={8}></Box>
            <Box>
              <Text>TITLE</Text>
            </Box>
          </Flex>
          <Flex>
            <Text mr={24} w={72}>
              ALBUM
            </Text>
            <Text>TIME</Text>
          </Flex>
        </Flex>
        <Divider my={2} />
        {tracks.map((item, index) => {
          const time = new Date(item.track.duration_ms);
          const min = time.getMinutes();
          const sec = String(time.getSeconds()).padStart(2, "0");
          return (
            <Link
              style={{ textDecoration: "none" }}
              href={item.track.external_urls.spotify}
              isExternal
            >
              <Flex
                key={index}
                px={4}
                py={2}
                justify="space-between"
                _hover={{ bg: "gray.700" }}
                borderRadius="xl"
              >
                <Flex align="center">
                  <Text w={10}>{index + 1}</Text>
                  <Box boxSize={12} ml={12} mr={8}>
                    <Image src={item.track.album.images[0].url} />
                  </Box>
                  <Box>
                    <Text>{item.track.name}</Text>
                    <Text color="gray.400">{item.track.artists[0].name}</Text>
                  </Box>
                </Flex>
                <Flex align="center">
                  <Text mr={24} w={72}>
                    {item.track.album.name}
                  </Text>
                  <Text>
                    {min}:{sec}
                  </Text>
                </Flex>
              </Flex>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default LikedPage;
