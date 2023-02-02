import React, { useState, useEffect } from "react";
import { Box, Text, Heading, Flex, Image, Link } from "@chakra-ui/react";
import {
  getDiscoverWeekly,
  getFeaturedPlaylists,
  getNewReleases,
} from "../../Controllers/spotify";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const nav = useNavigate();
  const [featured, setFeatured] = useState([]);
  const [featMessage, setFeatMessage] = useState("");
  const [releases, setReleases] = useState([]);
  const [recs, setRecs] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    getDiscoverWeekly().then((res) => setRecs(res.items));
    getFeaturedPlaylists().then((res) => {
      setFeatMessage(res.message);
      setFeatured(res.playlists.items);
    });
    getNewReleases().then((res) => {
      setReleases(res.albums.items);
    });
  }, []);

  //checking if all data populaated before rendering --> just looks cleaner
  return recs.length > 0 && featured.length > 0 && releases.length > 0 ? (
    <Box
      p={2}
      w="90%"
      bgGradient="linear(to-t, gray.800,
      gray.700)"
    >
      <Heading w="max-content" mx={8} mb={8} mt={4}>
        Discover
      </Heading>
      <Box>
        <Box
          borderRadius="xl"
          px={8}
          overflowX="scroll"
          sx={{
            "&::-webkit-scrollbar": {
              width: "16px",
              borderRadius: "8px",
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
          }}
        >
          <Text mb={2}>Recommended For You</Text>
          {/* map songs with cover title and artist */}
          <Flex gridColumnGap={8}>
            {recs.map((item) => {
              return (
                <Link
                  href={item.track.external_urls.spotify}
                  isExternal
                  key={item.track.id}
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
        <Flex align={"center"} gridColumnGap={4} mt={12}>
          <Flex
            ml={8}
            mb={3}
            borderRadius="xl"
            borderWidth="1px"
            borderColor="gray.700"
            w="max-content"
          >
            <Box
              borderRadius="xl"
              p={2}
              bg={!toggle && "gray.700"}
              as="button"
              onClick={() => setToggle(!toggle)}
            >
              <Text>New Releases</Text>
            </Box>
            <Box
              borderRadius="xl"
              p={2}
              bg={toggle && "gray.700"}
              as="button"
              onClick={() => setToggle(!toggle)}
            >
              <Text>Featured</Text>
            </Box>
          </Flex>
          {toggle && (
            <Text color="gray.400" mb={2}>
              {featMessage.toUpperCase()}
            </Text>
          )}
        </Flex>
        {toggle ? (
          <Box
            borderRadius={"xl"}
            overflowX="scroll"
            px={8}
            sx={{
              "&::-webkit-scrollbar": {
                width: "16px",
                borderRadius: "8px",
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
            }}
          >
            <Flex gridColumnGap={8}>
              {featured.map((playlist) => {
                return (
                  <Link
                    key={playlist.id}
                    onClick={() =>
                      nav("/playlist", {
                        state: {
                          playlist: playlist,
                        },
                      })
                    }
                  >
                    <Box>
                      <Box boxSize="2xs" borderRadius="xl">
                        <Image src={playlist.images[0].url} borderRadius="xl" />
                      </Box>
                    </Box>
                  </Link>
                );
              })}
            </Flex>
          </Box>
        ) : (
          <Box
            borderRadius={"xl"}
            overflowX="scroll"
            px={8}
            sx={{
              "&::-webkit-scrollbar": {
                width: "16px",
                borderRadius: "8px",
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
            }}
          >
            <Flex gridColumnGap={8}>
              {releases.map((album) => {
                return (
                  <Link
                    key={album.id}
                    href={album.external_urls.spotify}
                    isExternal
                  >
                    <Box>
                      <Box boxSize="2xs" borderRadius="xl">
                        <Image src={album.images[0].url} borderRadius="xl" />
                      </Box>
                      <Box mt={2}>
                        <Text noOfLines={1}>{album.name}</Text>
                        <Text color="gray.300" noOfLines={1}>
                          {album.artists[0].name}
                        </Text>
                      </Box>
                    </Box>
                  </Link>
                );
              })}
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  ) : (
    <Box
      p={2}
      w="90%"
      bgGradient="linear(to-t, gray.800,
      gray.700)"
    >
      <Heading w="max-content" mx={8} mb={8} mt={4}>
        Discover
      </Heading>
    </Box>
  );
};

export default Discover;
