import React from "react";
import { Box, Link, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PlaylistBox = ({ playlist, index }) => {
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
      <Box ml={[index === 0 && 2, index === 0 && 2, index === 0 && 2, 0]}>
        <Box boxSize={["150px", "200px"]} borderRadius="xl">
          <Image src={playlist.images[0].url} borderRadius="xl" shadow={"xl"} />
        </Box>
      </Box>
    </Link>
  );
};

export default PlaylistBox;
