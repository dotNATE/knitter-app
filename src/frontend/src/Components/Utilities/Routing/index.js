import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AuthPage from "../../../Pages/Auth";
import NavBar from "../NavBar";
import ButtonPrimary from "../../Atoms/Buttons/ButtonPrimary/index";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/auth" component={AuthPage} />
        <div>
          <NavBar />
          <Route exact path="/" component={ButtonPrimary} />
        </div>
      </Switch>
    </Router>
  );
};

export default Routing;
