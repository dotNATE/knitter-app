import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import AuthPage from "../../../Pages/Auth/Auth";
import NavBar from "../NavBar";
import ButtonPrimary from "../../Atoms/Buttons/ButtonPrimary/index";
import { AuthProvider } from "./../../../Context/auth-context";

const Routing = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const logIn = (token, userId) => {
    setToken(token);
    setUserId(userId);
  };

  const logOut = () => {
    setToken(null);
    setUserId(null);
  };

  return (
    <Router>
      <AuthProvider
        value={{ token: token, userId: userId, logIn: logIn, logOut: logOut }}
      >
        <Switch>
          {!token && <Route exact path="/auth" component={AuthPage} />}

          <div>
            <NavBar />
            {!token && <Redirect from="/" to="/auth" exact />}
            {token && <Redirect from="/auth" to="/" exact />}

            <Route exact path="/" component={ButtonPrimary} />
          </div>
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default Routing;
