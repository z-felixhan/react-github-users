import {
  AppBar,
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Container,
  Grid,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { theme, useStyles } from "./styles";
import React from "react";

const App = () => {
  const classes = useStyles();

  return (
    <>
      {" "}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative" elevation={0}>
          <Toolbar>
            <AccountCircle className={classes.icon} />
            <Typography variant="h6">MUI</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                GitHub Users
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                A small collection of users fetched from GitHub's API using
                React JS and designed with Material UI.
              </Typography>
              <div className={classes.mainButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Get Users
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Reset
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card} align="center">
                  <CardMedia className={classes.cardMedia} title="Image">
                    <Avatar
                      className={classes.avatar}
                      src="https://avatars.githubusercontent.com/u/1?v=4"
                    />
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Login
                    </Typography>
                    <Typography>URL</Typography>
                  </CardContent>
                  <CardActions className={classes.root}>
                    <ButtonGroup variant="text">
                      <Button
                        size="small"
                        color="primary"
                        className={classes.cardButtons}
                      >
                        View
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        className={classes.cardButtons}
                      >
                        Clear
                      </Button>
                    </ButtonGroup>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center">
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            © Felix
          </Typography>
        </footer>{" "}
      </ThemeProvider>
    </>
  );
};

export default App;
