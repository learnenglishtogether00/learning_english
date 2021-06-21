import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import SubmitPage from "./pages/SubmitPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/user" component={UserPage} />
        <Route path="/games" component={GamePage} />
        <Route path="/submit" component={SubmitPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </main>
  );
};

export default Main;
