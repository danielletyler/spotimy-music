import React, { useState, useEffect } from "react";
import { Box, Heading, Flex, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaGlobeAmericas } from "react-icons/fa";

const Chart = ({ id, title, initial }) => {
  const nav = useNavigate();
  const [bgColor, setBg] = useState();

  useEffect(() => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setBg(color);
  }, []);

  return (
    <Box
      onClick={() =>
        nav("/playlist", {
          state: {
            playlist: {
              id: id,
              name: title,
            },
          },
        })
      }
      pl={4}
      pt={4}
      bg={bgColor}
      borderRadius={"md"}
      shadow={"xl"}
      h={["150px", "150px", "200px"]}
      color="white"
      overflow="hidden"
    >
      <Flex
        h="100%"
        mb={8}
        pb={8}
        _hover={{ cursor: "pointer" }}
        align="end"
        justify="space-between"
      >
        <Box h="100%" flex={1}>
          <Heading fontSize={[20, 20, 24]}>{title}</Heading>
        </Box>
        <Flex
          justify="center"
          align={"center"}
          boxSize={["50px", "75px", "100px"]}
          borderRadius="md"
          bg="white"
          style={{ rotate: "30deg" }}
        >
          {initial === "G" ? (
            <Icon
              fontSize={[24, 24, 36]}
              color={bgColor}
              as={FaGlobeAmericas}
            />
          ) : (
            <Heading color={bgColor}>{initial}</Heading>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Chart;
