import React from "react";
import { Box, Link, Text, Image } from "@chakra-ui/react";

const SongBox = ({ index, href, image, name, artist }) => {
  return (
    <Link
      href={href}
      isExternal
      key={index}
      ml={[index === 0 && 8, index === 0 && 8, 0]}
    >
      <Box>
        <Box boxSize={["150px", "200px", "2xs"]}>
          <Image src={image} borderRadius="xl" />
        </Box>
        <Text mt={2} noOfLines={1}>
          {name}
        </Text>
        <Text color="gray.400" noOfLines={1}>
          {artist}
        </Text>
      </Box>
    </Link>
  );
};

export default SongBox;
