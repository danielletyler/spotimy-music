import React from "react";
import { Box, Link, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PlaylistBox = ({ playlist }) => {
  const nav = useNavigate();
  return (
    <Link
      key={playlist.id}
      onClick={() =>
        nav("/playlist", {
          state: {
            playlist: playlist,
          },
        })
      }
    >
      <Box>
        <Box boxSize={["150px", "200px", "2xs"]} borderRadius="xl">
          <Image src={playlist.images[0].url} borderRadius="xl" />
        </Box>
      </Box>
    </Link>
  );
};

export default PlaylistBox;
