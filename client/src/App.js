import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ChakraProvider, Flex, Heading, Box } from "@chakra-ui/react";
import theme from "./theme";
import Home from "./Components/Home/home";
import TopNav from "./Components/Nav/top-nav";
import Hamburger from "./Components/Nav/hamburger";
import Discover from "./Components/Discover/discover";
import Library from "./Components/Library/library";
import Stats from "./Components/Trends/trends";
import PlaylistPage from "./Components/Library/playlist_page";
import LikedPage from "./Components/Library/liked_page";

//fonts
import "@fontsource/hind/400.css";
import "@fontsource/montserrat/800.css";

function App() {
  const [token, setToken] = useState(null);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box
          color="white"
          bgGradient="linear(to-t, gray.800, gray.700)"
          // flexDirection="column"
          minH="100vh"
        >
          <Box>
            <Hamburger token={token} setToken={setToken} />
          </Box>
          <Box>
            {token ? (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/library" element={<Library />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/playlist" element={<PlaylistPage />} />
                <Route path="/liked" element={<LikedPage />} />
              </Routes>
            ) : (
              <Flex
                h="100vh"
                w="100%"
                align="center"
                justify={"center"}
                bgGradient="linear(to-t, gray.800,
                gray.700)"
              >
                <Heading>Please Login</Heading>
              </Flex>
            )}
          </Box>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
