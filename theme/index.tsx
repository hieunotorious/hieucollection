import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import COLOR from "app/constant/color";

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
          color: COLOR.secondary,
          fontFamily: "Balsamiq Sans, sans-serif",
          cursor: "pointer",
          fontWeight: 700,
        },
        h2: {
          fontSize: "100px",
          color: COLOR.secondary,
          fontFamily: "Quicksand",
          textTransform: "capitalize",
          fontWeight: 700,
        },
        h3: {
          fontSize: "100px",
          color: COLOR.tertiary,
          fontFamily: "Quicksand",
          textTransform: "capitalize",
          fontWeight: 700,
        },
        h2_mobile: {
          fontSize: "40px",
          color: COLOR.secondary,
          fontFamily: "Quicksand",
          textTransform: "capitalize",
          fontWeight: 700,
        },
        h3_mobile: {
          fontSize: "40px",
          color: COLOR.tertiary,
          fontFamily: "Quicksand",
          textTransform: "capitalize",
          fontWeight: 700,
        },
        h4: {
          fontSize: "20px",
          color: COLOR.secondary,
          fontFamily: "Balsamiq Sans, sans-serif",
          fontWeight: 700,
          cursor: "pointer",
        },
        h4_mobile: {
          fontSize: "13px",
          color: COLOR.secondary,
          fontFamily: "Balsamiq Sans, sans-serif",
          fontWeight: 700,
          cursor: "pointer",
        },
        h5: {
          fontSize: "50px",
          color: COLOR.tertiary,
          fontFamily: "Balsamiq Sans, sans-serif",
          fontWeight: 700,
          cursor: "pointer",
        },
        h5_mobile: {
          fontSize: "30px",
          color: COLOR.tertiary,
          fontFamily: "Balsamiq Sans, sans-serif",
          fontWeight: 700,
          cursor: "pointer",
        },
        h6: {
          fontSize: "40px",
          color: COLOR.secondary,
          fontFamily: "Balsamiq Sans, sans-serif",
          fontWeight: 700,
          cursor: "pointer",
        },
        h6_mobile: {
          fontSize: "20px",
          color: COLOR.secondary,
          fontFamily: "Balsamiq Sans, sans-serif",
          fontWeight: 700,
          cursor: "pointer",
        },
        h7: {
          fontSize: "12px",
          fontWeight: 700,
          fontFamily: "Be Vietnam Pro",
          color: COLOR.quaternary,
        },
      },
    },
  },
});

export default theme;
