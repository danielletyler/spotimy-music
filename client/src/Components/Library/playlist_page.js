import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Divider,
  Link,
} from "@chakra-ui/react";
import { getPlaylistTracks } from "../../Controllers/spotify";
import { useLocation } from "react-router-dom";

const PlaylistPage = () => {
  const location = useLocation();
  const id = location.state.playlist.id;
  const title = location.state.playlist.name;
  const img = location.state.playlist.images[0].url;

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getPlaylistTracks(id).then((res) => setTracks(res.items));
  }, [id]);

  return (
    <Box w="90%" overflowY={"scroll"}>
      <Flex
        py={8}
        px={32}
        bgImage={img}
        align="end"
        gridColumnGap={12}
        bgGradient="linear(to-t, gray.800,
            gray.700)"
      >
        <Box boxSize={"2xs"}>
          <Image src={img} borderRadius="xl" />
        </Box>
        <Box>
          <Heading w="max-content">{title}</Heading>
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

export default PlaylistPage;
