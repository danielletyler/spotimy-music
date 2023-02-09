import React from "react";
import { Box, Link, Image, Text } from "@chakra-ui/react";

const AlbumBox = ({ album }) => {
  return (
    <Link key={album.id} href={album.external_urls.spotify} isExternal>
      <Box>
        <Box boxSize={["150px", "200px", "2xs"]} borderRadius="xl">
          <Image src={album.images[0].url} borderRadius="xl" />
        </Box>
        <Box pt={2}>
          <Text noOfLines={1}>{album.name}</Text>
          <Text color="gray.300" noOfLines={1}>
            {album.artists[0].name}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default AlbumBox;
