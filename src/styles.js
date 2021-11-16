import { createTheme, makeStyles } from "@material-ui/core/styles";

const primaryMain = "#0d47a1";
const secondaryMain = "#2196f3";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
  },

  logo: {
    marginRight: "20px",
  },

  mainButtons: {
    marginTop: "40px",
  },

  cardGrid: {
    padding: "20px 0",
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  cardButtons: {
    padding: "0 10px",
  },

  cardActions: {
    justifyContent: "center",
  },

  cardMedia: {
    paddingTop: "20px",
  },

  avatar: {
    height: "100px !important",
    width: "100px !important",
    overflow: "visible !important",
    zIndex: 0,

    "& img": {
      borderRadius: "50%",
    },

    "&::before": {
      borderRadius: "50%",
      content: "''",
      display: "block",
      position: "absolute",
      color: "#fff",
      backgroundColor: secondaryMain,
      height: "100%",
      width: "100%",
      top: "-0.25rem",
      right: "-0.5rem",
      zIndex: -1,
    },
  },

  icon: {
    color: "#fff",
    fontSize: "1.4rem",
    transform: "translateY(20%)",
  },

  iconSpan: {
    width: "2rem",
    height: "2rem",
    placeItems: "center",
    transform: "translate(-210%, -290%)",
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: secondaryMain,
  },

  cardContent: {
    flexGrow: 1,
  },

  footer: {
    padding: "50px 0",
  },
}));
