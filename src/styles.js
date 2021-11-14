import { createTheme, makeStyles } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1",
    },
    secondary: {
      main: "#2196f3",
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
  },

  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

  icon: {
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

  cardMedia: {
    paddingTop: "20px",
  },

  avatar: {
    height: "100px",
    width: "100px",
  },

  cardContent: {
    flexGrow: 1,
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
}));
