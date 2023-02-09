import React, { useState, useEffect } from "react";
import { Box, Heading, Flex, SimpleGrid } from "@chakra-ui/react";
import { getRecents } from "../../Controllers/spotify";
import ChartsIcon from "./charts-icon";
import SongBox from "../Shared/song-box";
import USA from "../../Images/usa.png";
import Global from "../../Images/global.png";
import Viral from "../../Images/viral.png";

const Home = () => {
  const [recents, setRecents] = useState([]);

  useEffect(() => {
    getRecents().then((res) => setRecents(res.items));
  }, []);

  return (
    <Box overflowX={"hidden"}>
      <Heading w="max-content" mx={8} mt={4} mb={8}>
        Home
      </Heading>
      <Box>
        <Box px={[null, null, 8]} overflowX={"hidden"} borderRadius="xl">
          <Heading fontSize={17} pb={8} pl={[8, 8, 0]}>
            Your Recents
          </Heading>
          {recents.length > 0 && (
            <Flex gridColumnGap={8} overflowX="scroll">
              {recents.map((item, index) => {
                return (
                  <SongBox
                    index={index}
                    href={item.track.external_urls.spotify}
                    image={item.track.album.images[0].url}
                    name={item.track.name}
                    artist={item.track.artists[0].name}
                  />
                );
              })}
            </Flex>
          )}
        </Box>
        <Box px={8} py={14}>
          <Heading fontSize={17} pb={8}>
            What's Hot?
          </Heading>
          <SimpleGrid
            spacing={8}
            columns={[2, 2, 3]}
            w={["100%", "100%", "90%", "80%", "60%"]}
          >
            <ChartsIcon
              playlist={{
                id: "37i9dQZEVXbLp5XoPON0wI",
                name: "Top Songs in the USA",
                images: [{ url: USA }],
              }}
              label="Top Songs USA"
              image={USA}
              color="red.300"
            />
            <ChartsIcon
              playlist={{
                id: "37i9dQZEVXbNG2KDcFcKOF",
                name: "Top Songs Global",
                images: [{ url: Global }],
              }}
              label="Top Songs Global"
              image={Global}
              color="pink.300"
            />
            <ChartsIcon
              playlist={{
                id: "37i9dQZEVXbKuaTI1Z1Afx",
                name: "Top Songs Viral",
                images: [{ url: Viral }],
              }}
              label="Top Songs Viral"
              image={Viral}
              color="blue.300"
            />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
