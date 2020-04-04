import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9C69E2",
    },
    secondary: {
      main: "#F063B8",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#212353",
    }
  },
  typography: {
    h3: {
      fontFamily: "Helvetica",
      fontWeight: "bold",
    },
    h4: {
      fontFamily: "Helvetica",
      fontWeight: "bold",
    },
    body1: {
      fontFamily: "Avenir",
    },
    button: {
      fontFamily: "Avenir",
      textTransform: "none",
    },
  },
});

export default theme;
