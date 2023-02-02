import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ChakraProvider, Flex, Heading, Icon } from "@chakra-ui/react";
import { FaRegSmileBeam } from "react-icons/fa";
import theme from "./theme";
import Home from "./Components/Home/home";
import TopNav from "./Components/Nav/top-nav";
import SideNav from "./Components/Nav/side-nav";
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
        <Flex color="white" bg="gray.800" flexDir="column" minH="100vh">
          <TopNav token={token} setToken={setToken} />
          <Flex>
            <SideNav />
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
                p={2}
                w="90%"
                justify="center"
                align="center"
                bgGradient="linear(to-t, gray.800, gray.700)"
                gridColumnGap={4}
              >
                <Heading>Please Login</Heading>
                <Icon align="center" fontSize="4xl" as={FaRegSmileBeam} />
              </Flex>
            )}
          </Flex>
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
