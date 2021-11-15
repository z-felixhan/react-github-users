import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { Work, WorkOff, WorkOutline } from "@material-ui/icons";

const Users = ({ loading, classes, currentUsers, clearUser }) => {
  return (
    <>
      {!loading ? (
        <Container className={classes.cardGrid} maxWidth="md">
          {console.log(loading)}
          {console.log(currentUsers)}
          <Grid container spacing={4}>
            {currentUsers.map((user) => {
              return (
                <Grid key={user.id} item xs={12} sm={6} md={4}>
                  <Card className={classes.card} align="center">
                    <CardMedia className={classes.cardMedia}>
                      <Avatar
                        className={classes.avatar}
                        src={user.avatar_url}
                      />
                      <span className={classes.iconSpan}>
                        {user.hasOwnProperty("userDetails") ? (
                          user.userDetails.hasOwnProperty("hireable") ? (
                            user.userDetails.hireable == true ? (
                              <Work className={classes.icon} />
                            ) : user.userDetails.hireable == false ? (
                              <WorkOff className={classes.icon} />
                            ) : (
                              <WorkOutline className={classes.icon} />
                            )
                          ) : (
                            <WorkOutline className={classes.icon} />
                          )
                        ) : (
                          <WorkOutline className={classes.icon} />
                        )}
                      </span>
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6">
                        {user.login}
                      </Typography>
                      <Typography>
                        {user.hasOwnProperty("userDetails")
                          ? user.userDetails.hasOwnProperty("bio") &
                            (user.userDetails.bio !== null)
                            ? user.userDetails.bio.length > 70
                              ? user.userDetails.bio.substring(
                                  0,
                                  user.userDetails.bio.lastIndexOf(" ", 70)
                                ) + "..."
                              : ""
                            : ""
                          : ""}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                      <ButtonGroup variant="text">
                        <Button
                          size="small"
                          color="primary"
                          className={classes.cardButtons}
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(
                              `https://github.com/${user.login}`,
                              "_blank"
                            );
                          }}
                          target="_blank"
                        >
                          View
                        </Button>
                        <Button
                          size="small"
                          color="primary"
                          className={classes.cardButtons}
                          onClick={() => clearUser(user.id)}
                        >
                          Clear
                        </Button>
                      </ButtonGroup>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      ) : (
        <Container
          className={classes.cardGrid}
          maxWidth="md"
          style={{ height: "25vh" }}
        ></Container>
      )}
    </>
  );
};

export default Users;
