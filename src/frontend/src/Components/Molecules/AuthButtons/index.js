import React from "react";
import ButtonPrimary from "../../Atoms/Buttons/ButtonPrimary";
import ButtonSecondary from "../../Atoms/Buttons/ButtonSecondary";
import "./AuthButtons.scss";

const AuthButtons = () => {
  return (
    <div className="authButtons">
      <ButtonPrimary content="Sign Up" />
      <ButtonSecondary content="Log In" />
    </div>
  );
};

export default AuthButtons;
