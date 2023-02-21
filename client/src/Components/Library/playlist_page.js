import React, { useEffect, useState } from "react";
import { Box, Heading, Flex, Image, Text, Divider } from "@chakra-ui/react";
import { getPlaylistTracks } from "../../Controllers/spotify";
import { useLocation } from "react-router-dom";

const PlaylistPage = () => {
  const location = useLocation();
  const id = location.state.playlist.id;
  const title = location.state.playlist.name;
  const [img, setImg] = useState("");

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getPlaylistTracks(id).then((res) => setTracks(res.items));
  }, [id]);

  useEffect(() => {
    if (tracks.length > 0) {
      if (location.state.playlist.images) {
        setImg(location.state.playlist.images[0].url);
      } else {
        setImg(tracks[0].track.album.images[0].url);
      }
    }
  }, [tracks]);

  return (
    <Flex justify="center" py={12} px={[4, 8, null]}>
      <Flex
        w={["100%", "100%", "75%", "75%", "50%"]}
        flexDir="column"
        rowGap={2}
      >
        <Flex
          py={8}
          gridColumnGap={12}
          align={["center", "end"]}
          flexDir={["column", "row"]}
        >
          <Box boxSize={"2xs"}>
            <Image src={img} borderRadius="xl" />
          </Box>
          <Heading mt={4} w="max-content">
            {title}
          </Heading>
        </Flex>
        <Divider mb={8} borderColor="#FF006E" />
        <Flex flexDir={"column"} rowGap={4}>
          {tracks.map((item, index) => {
            return (
              <Flex
                key={index}
                align="center"
                onClick={() =>
                  window
                    .open(item.track.external_urls.spotify, "_blank")
                    .focus()
                }
              >
                <Text width={8}>{index + 1}.</Text>

                <Image
                  mr={4}
                  boxSize={14}
                  src={item.track.album.images[0].url}
                />

                <Box flex={1}>
                  <Text>{item.track.name}</Text>
                  <Text noOfLines={1} fontSize={14} color="rgba(0,0,0, .5)">
                    {item.track.artists[0].name}, {item.track.album.name}
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PlaylistPage;
