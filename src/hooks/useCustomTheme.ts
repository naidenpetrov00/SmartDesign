import { useMemo } from "react";

import { createTheme, type Theme } from "@mui/material";

// const minCharcoal = '#73787C';
// const minGray = '#C5C6C7';
// const minPaleBlue = '#D7E5F0';
// const minBeige = '#C9AD93';
const colorPallete = {
  black: "#181C14",
  lightGrey: "#dcdbd9",
  grey: "#545454",
  green: "#697565",
  white: "#ECDFCC",
};

export const useCustomTheme = (): Theme => {
  return useMemo(() => {
    return createTheme({
      typography: {
        fontFamily: "Moderustic",
      },
      palette: {
        primary: { main: colorPallete.grey },
        secondary: { main: colorPallete.lightGrey },
        background: { paper: colorPallete.grey },
        text: { primary: "#ffff", secondary: colorPallete.black },
      },
    });
  }, []);
};

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme()`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }
