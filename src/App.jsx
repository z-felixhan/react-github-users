import {
  AppBar,
  Button,
  CssBaseline,
  Container,
  Grid,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  AccountCircle,
  Error,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import { theme, useStyles } from "./styles";
import React, { useState } from "react";
import Users from "./components/Users";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);

  const classes = useStyles();

  const fetchData = async () => {
    setLoading(true);

    const perPage = 6;
    const random = Math.floor(Math.random() * (94329972 - perPage));
    const url = `https://api.github.com/users?per_page=${perPage}&since=${random}`; // Max is 94329972

    try {
      const usersResponse = await fetch(url);
      const usersData = await usersResponse.json();
      console.log(usersResponse.status);

      const result = await usersData.map(async (user, index) => {
        const userDetailsResponse = await fetch(user.url);
        const userDetails = await userDetailsResponse.json();

        usersData[index] = { ...usersData[index], userDetails };

        if (index == usersData.length - 1) {
          setLoading(false);
        }
      });

      setUsers(usersData);
      setCurrentUsers(usersData);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  const clearUser = (id) => {
    setCurrentUsers(currentUsers.filter((user) => user.id !== id));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative" elevation={0}>
          <Toolbar>
            <AccountCircle className={classes.logo} />
            <Typography title="Material UI" variant="h6">
              MUI
            </Typography>
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
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => fetchData()}
                    >
                      Get New Users
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => setCurrentUsers(users)}
                    >
                      Reset Current
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => setCurrentUsers([])}
                    >
                      Clear All
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          {!error ? (
            <Users
              loading={loading}
              classes={classes}
              currentUsers={currentUsers}
              clearUser={clearUser}
            />
          ) : (
            <Container
              className={classes.cardGrid}
              maxWidth="md"
              style={{ height: "25vh" }}
            >
              <Typography>
                <Error /> An error was encountered. Please try again later.
              </Typography>
            </Container>
          )}
        </main>
        <footer className={classes.footer}>
          <div className="container">
            <Grid
              container
              spacing={2}
              justifyContent="center"
              style={{ margin: 0, width: "100%" }}
            >
              <Grid item>
                <Link href="https://facebook.com" target="_blank">
                  <Facebook color="textSecondary" />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://instagram.com" target="_blank">
                  <Instagram color="textSecondary" />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://youtube.com" target="_blank">
                  <YouTube color="textSecondary" />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://twitter.com" target="_blank">
                  <Twitter color="textSecondary" />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://linkedin.com" target="_blank">
                  <LinkedIn color="textSecondary" />
                </Link>
              </Grid>
            </Grid>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
            >
              © Felix
            </Typography>
          </div>
        </footer>
      </ThemeProvider>
    </>
  );
};

export default App;
