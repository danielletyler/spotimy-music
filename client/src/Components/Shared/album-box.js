import React from "react";
import { Box, Link, Image, Text } from "@chakra-ui/react";

const AlbumBox = ({ album, index }) => {
  return (
    <Link
      key={album.id}
      id={index}
      href={album.external_urls.spotify}
      isExternal
    >
      <Box ml={[index === 0 && 2, index === 0 && 2, index === 0 && 2, 0]}>
        <Box boxSize={["150px", "200px"]} borderRadius="xl">
          <Image src={album.images[0].url} borderRadius="xl" shadow={"xl"} />
        </Box>
        <Box pt={2}>
          <Text noOfLines={1}>{album.name}</Text>
          <Text color="rgba(0,0,0,.5)" noOfLines={1}>
            {album.artists[0].name}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default AlbumBox;
