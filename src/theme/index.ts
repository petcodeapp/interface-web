import { theme } from "@chakra-ui/core";

import icons from "./icons";

import { DefaultTheme, ColorHues } from "@chakra-ui/core";

export default {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: '"Lilita One", sans-serif',
    body: '"Open Sans", sans-serif',
  },
  fontSizes: {
    ...theme.fontSizes,
    "7xl": "84px",
    "8xl": "108px",
    "9xl": "136px",
  },
  fontWeights: {
    ...theme.fontWeights,
    thin: 300,
  },
  colors: {
    ...theme.colors,
    petcode: {
      blue: {
        50: "#B5E3EF",
        100: "#9CD9EA",
        200: "#84D0E5",
        300: "#6BC6E0",
        400: "#51BCDA",
        500: "#2FAFD3",
        600: "#197a94",
        700: "#2693B1",
        800: "#1E768E",
        900: "#17586A",
      },
      yellow: {
        50: "#FDE6B7",
        100: "#FDDD9E",
        200: "#FCD586",
        300: "#FBCC6E",
        400: "#FBC658",
        500: "#F9B327",
        600: "#EA9E06",
        700: "#BC7F05",
        800: "#8D5F04",
        900: "#5E3F02",
      },
      teal: "#51CBCE",
      neutral: {
        100: "#F7FAFC",
        200: "#EDF2F7",
        300: "#E2E8F0",
        400: "#CBD5E0",
        500: "#A0AEC0",
        600: "#718096",
        700: "#4A5568",
      },
    },
  },
  icons: {
    ...theme.icons,
    ...icons,
  },
};

export interface PetCodeTheme extends DefaultTheme {
  colors: {
    transparent: string;
    current: string;
    black: string;
    white: string;
    whiteAlpha: ColorHues;
    blackAlpha: ColorHues;
    gray: ColorHues;
    red: ColorHues;
    orange: ColorHues;
    yellow: ColorHues;
    green: ColorHues;
    teal: ColorHues;
    blue: ColorHues;
    cyan: ColorHues;
    purple: ColorHues;
    pink: ColorHues;
    linkedin: ColorHues;
    facebook: ColorHues;
    messenger: ColorHues;
    whatsapp: ColorHues;
    twitter: ColorHues;
    telegram: ColorHues;
    petcode: {
      teal: string;
      blue: ColorHues;
      yellow: ColorHues;
      neutral: ColorHues;
    };
  };
}
