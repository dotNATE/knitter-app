import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import { AuthProvider } from "./../../../Context/auth-context";

import AuthPage from "../../../Pages/Auth/Auth";
import HomePage from "./../../../Pages/Home/Home";

const Routing = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const logIn = (token, userId) => {
    setToken(token);
    localStorage.setItem("token", `Bearer ${token}`);
    setUserId(userId);
  };

  const logOut = () => {
    setToken(null);
    localStorage.removeItem("token");
    setUserId(null);
  };

  return (
    <Router>
      <AuthProvider
        value={{ token: token, userId: userId, logIn: logIn, logOut: logOut }}
      >
        <Switch>
          {!token && <Redirect from="/" to="/auth" exact />}
          {token && <Redirect from="/auth" to="/" exact />}

          {token && <Route exact path="/" component={HomePage} />}
          {!token && <Route exact path="/auth" component={AuthPage} />}
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default Routing;
