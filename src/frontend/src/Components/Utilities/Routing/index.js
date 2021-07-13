import React from "react";
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import AuthPage from "../../../Pages/Auth";

const Routing = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Switch>
        <Redirect exact from="/" to="/auth" />
        <Route exact path="/auth" component={AuthPage} />
      </Switch>
    </Router>
  );
};

export default Routing;
