import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import "./App.css";
import Layout from "./components/layout/Layout";
import Menu from "./components/layout/Menu";
import Main from "./Main";

const useStyles = makeStyles(() => {
  return {
    containerWrp: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#221E1D",
    },
    paperWrp: {
      height: "90vh",
      width: "90%",
      background: "#ECEAE0",
      position: "relative",
    },
  };
});

const App = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Menu />
      <div className={classes.containerWrp}>
        <Paper className={classes.paperWrp}>
          <Layout>
            <Main />
          </Layout>
        </Paper>
      </div>
    </Fragment>
  );
};

export default App;
