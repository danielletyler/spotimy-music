import React, { useState, useEffect } from "react";
import { Box, Text, Heading, Flex, Image, Link } from "@chakra-ui/react";
import {
  getDiscoverWeekly,
  getFeaturedPlaylists,
  getNewReleases,
} from "../../Controllers/spotify";
import { useNavigate } from "react-router-dom";
import SongBox from "../Shared/song-box";
import PlaylistBox from "../Shared/playlist-box";
import AlbumBox from "../Shared/album-box";

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
    <Box overflowX={"hidden"} px={[0, 0, 8]}>
      <Heading w="max-content" mx={8} mb={8} mt={4}>
        Discover
      </Heading>
      <Box mb={8}>
        <Box px={[null, null, 8]} overflowX="hidden">
          <Heading fontSize={17} pb={8} pl={[8, 8, 0]}>
            Recommended For You
          </Heading>
          {/* map songs with cover title and artist */}
          <Flex
            gridColumnGap={8}
            overflowX="scroll"
            borderRadius={[null, null, "xl"]}
          >
            {recs.map((item, index) => {
              return (
                <SongBox
                  index={index}
                  href={item.track.external_urls.spotify}
                  image={item.track.album.images[0].url}
                  name={item.track.artists[0].name}
                  artist
                />
              );
            })}
          </Flex>
        </Box>
        <Flex align={"center"} gridColumnGap={4} mt={12}>
          <Flex
            ml={8}
            mb={8}
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
          <Box borderRadius={[null, null, "xl"]} overflowX="scroll" px={8}>
            <Flex gridColumnGap={8}>
              {featured.map((playlist) => {
                return <PlaylistBox playlist={playlist} />;
              })}
            </Flex>
          </Box>
        ) : (
          <Box overflowX="scroll" px={8}>
            <Flex gridColumnGap={8}>
              {releases.map((album) => {
                return <AlbumBox album={album} />;
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
