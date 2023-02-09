import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Divider,
  Link,
  useMediaQuery,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { getPlaylistTracks } from "../../Controllers/spotify";
import { useLocation } from "react-router-dom";

const PlaylistPage = () => {
  const location = useLocation();
  const id = location.state.playlist.id;
  const title = location.state.playlist.name;
  const img = location.state.playlist.images[0].url;
  const [isDesktop] = useMediaQuery("(min-width: 1000px)");

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getPlaylistTracks(id).then((res) => setTracks(res.items));
  }, [id]);

  return (
    <Box px={[4, 8, 12]} pb={8}>
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
      <Divider mb={8} />
      {isDesktop ? (
        <TableContainer>
          <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th borderColor="rgba(255, 255, 255, .2)">#</Th>
                <Th borderColor="rgba(255, 255, 255, .2)"></Th>
                <Th borderColor="rgba(255, 255, 255, .2)">Title</Th>
                <Th borderColor="rgba(255, 255, 255, .2)">Album</Th>
                <Th borderColor="rgba(255, 255, 255, .2)">Time</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tracks.map((item, index) => {
                const time = new Date(item.track.duration_ms);
                const min = time.getMinutes();
                const sec = String(time.getSeconds()).padStart(2, "0");
                return (
                  <Tr
                    onClick={() =>
                      window
                        .open(item.track.external_urls.spotify, "_blank")
                        .focus()
                    }
                  >
                    <Td borderColor="rgba(255, 255, 255, .2)" isNumeric>
                      {index + 1}
                    </Td>
                    <Td borderColor="rgba(255, 255, 255, .2)">
                      <Box boxSize={12}>
                        <Image src={item.track.album.images[0].url} />
                      </Box>
                    </Td>
                    <Td borderColor="rgba(255, 255, 255, .2)">
                      <Text>{item.track.name}</Text>
                    </Td>
                    <Td borderColor="rgba(255, 255, 255, .2)">
                      {item.track.album.name}
                    </Td>
                    <Td borderColor="rgba(255, 255, 255, .2)">
                      {" "}
                      {min}:{sec}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Flex flexDir={"column"} rowGap={4}>
          {tracks.map((item, index) => {
            return (
              <Flex
                columnGap={4}
                onClick={() =>
                  window
                    .open(item.track.external_urls.spotify, "_blank")
                    .focus()
                }
              >
                <Box boxSize={14}>
                  <Image src={item.track.album.images[0].url} />
                </Box>

                <Box>
                  <Text>{item.track.name}</Text>
                  <Text fontSize={14} color="rgba(255, 255, 255, .5)">
                    {item.track.album.name}
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </Flex>
      )}
    </Box>
  );
};

export default PlaylistPage;
