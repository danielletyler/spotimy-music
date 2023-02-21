import React, { useState, useEffect } from "react";
import { Box, useMediaQuery, Heading, Flex, Icon } from "@chakra-ui/react";
import {
  getDiscoverWeekly,
  getFeaturedPlaylists,
  getNewReleases,
} from "../../Controllers/spotify";
import SongBox from "../Shared/song-box";
import PlaylistBox from "../Shared/playlist-box";
import AlbumBox from "../Shared/album-box";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Discover = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const [featured, setFeatured] = useState([]);
  const [featMessage, setFeatMessage] = useState("");
  const [releases, setReleases] = useState([]);
  const [recs, setRecs] = useState([]);
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const ref3 = React.useRef();

  const handleScroll = ({ offset, ref }) => {
    if (ref.current) {
      ref.current.scrollLeft += offset * 700;
    }
  };

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

  return (
    <Flex justify="center" py={8}>
      <Flex
        w={["100%", "100%", "100%", "75%", "75%"]}
        flexDir="column"
        rowGap={2}
      >
        <Box mb={8}>
          <Box overflowX="hidden">
            <Heading fontSize={17} py={4} pl={[4, 4, 4, 8]}>
              New Releases
            </Heading>
            <Flex>
              {!isMobile && (
                <Flex
                  onClick={() => handleScroll({ offset: -1, ref: ref1 })}
                  bg="white"
                  style={{ cursor: "pointer" }}
                  borderRadius="md"
                  align="center"
                  justify="center"
                  h="max"
                  p={2}
                  mt={24}
                  mr={-2}
                  zIndex={"overlay"}
                >
                  <Icon color="zpink" as={FaAngleLeft} />
                </Flex>
              )}
              <Flex
                gridColumnGap={8}
                overflowX="scroll"
                sx={{
                  "&::-webkit-scrollbar": {
                    width: "16px",
                    borderRadius: "8px",
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                  },
                }}
                ref={ref1}
              >
                {releases.map((album, index) => {
                  return <AlbumBox album={album} index={index} />;
                })}
              </Flex>
              {!isMobile && (
                <Flex
                  onClick={() => handleScroll({ offset: +1, ref: ref1 })}
                  bg="white"
                  style={{ cursor: "pointer" }}
                  borderRadius="md"
                  align="center"
                  justify="center"
                  h="max"
                  p={2}
                  mt={24}
                  ml={-2}
                  zIndex={"overlay"}
                >
                  <Icon color="zpink" as={FaAngleRight} />
                </Flex>
              )}
            </Flex>
          </Box>
          <Box overflowX="hidden">
            <Heading fontSize={17} py={4} pl={[4, 4, 4, 8]}>
              Recommended For You
            </Heading>
            <Flex>
              {!isMobile && (
                <Flex
                  onClick={() => handleScroll({ offset: -1, ref: ref2 })}
                  bg="white"
                  style={{ cursor: "pointer" }}
                  borderRadius="md"
                  align="center"
                  justify="center"
                  h="max"
                  p={2}
                  mt={24}
                  mr={-2}
                  zIndex={"overlay"}
                >
                  <Icon color="zpink" as={FaAngleLeft} />
                </Flex>
              )}
              <Flex
                gridColumnGap={8}
                overflowX="scroll"
                sx={{
                  "&::-webkit-scrollbar": {
                    width: "16px",
                    borderRadius: "8px",
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                  },
                }}
                ref={ref2}
              >
                {recs.map((item, index) => {
                  return (
                    <SongBox
                      index={index}
                      href={item.track.external_urls.spotify}
                      image={item.track.album.images[0].url}
                      artist={item.track.artists[0].name}
                      name={item.track.name}
                    />
                  );
                })}
              </Flex>
              {!isMobile && (
                <Flex
                  onClick={() => handleScroll({ offset: +1, ref: ref2 })}
                  bg="white"
                  style={{ cursor: "pointer" }}
                  borderRadius="md"
                  align="center"
                  justify="center"
                  h="max"
                  p={2}
                  mt={24}
                  ml={-2}
                  zIndex={"overlay"}
                >
                  <Icon color="zpink" as={FaAngleRight} />
                </Flex>
              )}
            </Flex>
          </Box>
          <Box overflowX="hidden">
            <Heading fontSize={17} py={4} pl={[4, 4, 4, 8]}>
              Featured - {featMessage}
            </Heading>
            <Flex>
              {!isMobile && (
                <Flex
                  onClick={() => handleScroll({ offset: -1, ref: ref3 })}
                  bg="white"
                  style={{ cursor: "pointer" }}
                  borderRadius="md"
                  align="center"
                  justify="center"
                  h="max"
                  p={2}
                  mt={24}
                  mr={-2}
                  zIndex={"overlay"}
                >
                  <Icon color="zpink" as={FaAngleLeft} />
                </Flex>
              )}
              <Flex
                gridColumnGap={8}
                overflowX="scroll"
                sx={{
                  "&::-webkit-scrollbar": {
                    width: "16px",
                    borderRadius: "8px",
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                  },
                }}
                ref={ref3}
              >
                {featured.map((playlist, index) => {
                  return <PlaylistBox playlist={playlist} index={index} />;
                })}
              </Flex>
              {!isMobile && (
                <Flex
                  onClick={() => handleScroll({ offset: +1, ref: ref3 })}
                  bg="white"
                  style={{ cursor: "pointer" }}
                  borderRadius="md"
                  align="center"
                  justify="center"
                  h="max"
                  p={2}
                  mt={24}
                  ml={-2}
                  zIndex={"overlay"}
                >
                  <Icon color="zpink" as={FaAngleRight} />
                </Flex>
              )}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Discover;
