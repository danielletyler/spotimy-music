import React from "react";
import { Box, Link, Text, Image } from "@chakra-ui/react";

const SongBox = ({ index, href, image, name, artist }) => {
  return (
    <Link
      href={href}
      isExternal
      key={index}
      ml={[index === 0 && 2, index === 0 && 2, index === 0 && 2, 0]}
    >
      <Box>
        <Box boxSize={["150px", "200px"]}>
          <Image src={image} borderRadius="xl" shadow={"xl"} />
        </Box>
        <Text mt={2} noOfLines={1}>
          {name}
        </Text>
        <Text color="rgba(0,0,0,.5)" noOfLines={1}>
          {artist}
        </Text>
      </Box>
    </Link>
  );
};

export default SongBox;
