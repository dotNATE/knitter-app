import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import AuthPage from "../../../Pages/Auth";
import NavBar from "../NavBar";

const Routing = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Redirect exact from="/" to="/auth" />
        <Route exact path="/auth" component={AuthPage} />
      </Switch>
    </Router>
  );
};

export default Routing;
