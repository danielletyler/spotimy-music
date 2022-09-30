import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Hind', sans-serif`,
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        color: "black", // Normally, it is "semibold"
      },
      variants: {
        outline: {
          border: "1px solid white",
          color: "white",
          _hover: { bg: "gray.700" },
        },
      },
    },
    Link: {
      variants: {
        shadow: {
          _hover: {},
        },
      },
    },
  },
});

export default theme;
