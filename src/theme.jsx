import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#473bf0",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "capitalcase",
      fontSize: "1rem",
      fontWeight: 700,
    },
  },
});
