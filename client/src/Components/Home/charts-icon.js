import React from "react";
import { Box, Heading, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ChartsIcon = ({ color, playlist, label, image }) => {
  const nav = useNavigate();

  return (
    <Box
      onClick={() =>
        nav("/playlist", {
          state: {
            playlist: playlist,
          },
        })
      }
    >
      <Flex
        bg={color}
        borderRadius="md"
        maxW="max-content"
        pl={4}
        pt={4}
        columnGap={8}
        overflow="hidden"
      >
        <Heading fontSize={15}>{label}</Heading>
        <Image
          src={image}
          boxSize={20}
          borderRadius="xl"
          style={{ rotate: "30deg" }}
        />
      </Flex>
    </Box>
  );
};

export default ChartsIcon;
