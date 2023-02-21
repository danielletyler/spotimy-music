import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  ChakraProvider,
  useMediaQuery,
  Flex,
  Heading,
  Box,
} from "@chakra-ui/react";
import theme from "./theme";
import Home from "./Components/Home/home";
import Discover from "./Components/Discover/discover";
import Library from "./Components/Library/library";
import Stats from "./Components/Trends/trends";
import PlaylistPage from "./Components/Library/playlist_page";
import LikedPage from "./Components/Library/liked_page";

//fonts
import "@fontsource/hind/400.css";
import "@fontsource/montserrat/800.css";
import TopNav from "./Components/Nav/top-nav";

function App() {
  const [token, setToken] = useState(null);
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box color="#000000" bg="#f0f0f0" minH="100vh">
          <Box>
            <TopNav token={token} setToken={setToken} isMobile={isMobile} />
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
              <Flex align="center" justify={"center"}>
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
