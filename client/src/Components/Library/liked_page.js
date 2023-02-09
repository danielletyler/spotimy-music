import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  useMediaQuery,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Divider,
} from "@chakra-ui/react";
import { getUserSaved } from "../../Controllers/spotify";
import LikeImage from "../../Images/liked.png";

const LikedPage = () => {
  const [tracks, setTracks] = useState([]);
  const [isDesktop] = useMediaQuery("(min-width: 1000px)");

  useEffect(() => {
    getUserSaved().then((res) => {
      setTracks(res.items);
    });
  }, []);

  return (
    <Box px={[4, 8, 12]} pb={8}>
      <Flex
        py={8}
        gridColumnGap={12}
        align={["center", "end"]}
        flexDir={["column", "row"]}
      >
        <Box boxSize={"2xs"}>
          <Image src={LikeImage} borderRadius="xl" />
        </Box>
        <Heading mt={4} w="max-content">
          Liked Songs
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

export default LikedPage;
