import { createTheme } from "@mui/material";

export const theme = createTheme({
  // palette values for light mode
  palette: {
    primary: {
      main: "#F7F7F7",
      contrastText: "rgb(255, 255, 255)",
    },
    secondary: {
      main: "#FBEAE3",
      contrastText: "rgb(15, 20, 25)",
      light: "#3577F0",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: { ":hover": { backgroundColor: "#000000" } },
      },
    },
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 1.5,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
