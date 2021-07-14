import React from "react";
import ButtonPrimary from "../../Atoms/Buttons/ButtonPrimary";
import ButtonSecondary from "../../Atoms/Buttons/ButtonSecondary";
import "./AuthButtons.scss";

const AuthButtons = ({ signUpClicker, logInClicker }) => {
  return (
    <div className="authButtons">
      <ButtonPrimary content="Sign Up" handleClick={signUpClicker} />
      <ButtonSecondary content="Log In" handleClick={logInClicker} />
    </div>
  );
};

export default AuthButtons;
