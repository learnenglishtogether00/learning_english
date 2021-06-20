import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import SubmitPage from "./pages/SubmitPage";
import UserPage from "./pages/UserPage";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/user" component={UserPage} />
        <Route path="/games" component={GamePage} />
        <Route path="/submit" component={SubmitPage} />
      </Switch>
    </main>
  );
};

export default Main;
