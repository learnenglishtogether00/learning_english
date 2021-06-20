import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import avatar from "../../public/avatar.jpg";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    signature: {
      width: "100%",
      textAlign: "center",
      position: "absolute",
      bottom: 0,
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-between">
        <Typography variant="h5" gutterBottom>
          Learning English Together
        </Typography>
        <Typography variant="body1" gutterBottom>
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Typography>
      </Grid>

      <Grid container direction="column" justify="center" alignItems="center">
        <Avatar className={classes.avatar} alt="avatar" src={avatar} />

        <Typography variant="h5" gutterBottom>
          Hi! Eri Huỳnh
        </Typography>
      </Grid>
      <div>{children}</div>
      <Typography variant="body2" gutterBottom className={classes.signature}>
        Created By Eri Huỳnh, 2021
      </Typography>
    </div>
  );
};

export default Layout;
