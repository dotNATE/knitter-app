import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../../Context/auth-context";

const NavBar = () => {
  const context = useContext(AuthContext);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
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
