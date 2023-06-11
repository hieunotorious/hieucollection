import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components: {
    Text: {
      variants: {
        h1: {
          fontSize: "16px",
          color: "#41332C",
          fontFamily: "Balsamiq Sans, sans-serif",
          cursor: "pointer",
          fontWeight: 700,
        },
        h2: {
          fontSize: "100px",
          color: "#41332C",
          fontFamily: "Quicksand",
          textTransform: "capitalize",
          fontWeight: 700,
        },
        h3: {
          fontSize: "100px",
          color: "#EAA234",
          fontFamily: "Quicksand",
          textTransform: "capitalize",
          fontWeight: 700,
        },
        h2_mobile: {
          fontSize: "40px",
          color: "#41332C",
          fontFamily: "Quicksand",
          textTransform: "capitalize",
          fontWeight: 700,
        },
        h3_mobile: {
          fontSize: "40px",
          color: "#EAA234",
          fontFamily: "Quicksand",
          textTransform: "capitalize",
          fontWeight: 700,
        },
        h4: {
          fontSize: "20px",
          color: "#41332C",
          fontFamily: "Balsamiq Sans, sans-serif",
          fontWeight: 700,
          cursor: "pointer",
        },
        h5: {
          fontSize: "50px",
          color: "#EAA234",
          fontFamily: "Balsamiq Sans, sans-serif",
          fontWeight: 700,
          cursor: "pointer",
        },
        h6: {
          fontSize: "40px",
          color: "#41332C",
          fontFamily: "Balsamiq Sans, sans-serif",
          fontWeight: 700,
          cursor: "pointer",
        },
      },
    },
  },
});

export default theme;
