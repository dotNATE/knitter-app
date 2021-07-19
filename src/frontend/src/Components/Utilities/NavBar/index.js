import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../../Context/auth-context";

import "./NavBar.scss";

const NavBar = () => {
  const context = useContext(AuthContext);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/test">Test</NavLink>
        </li>
        <li>
          <NavLink to="/nope">Nope</NavLink>
        </li>
        {!context.token && (
          <li>
            <NavLink to="/auth">Auth</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
