import React from "react";
import ButtonPrimary from "../Components/Atoms/ButtonPrimary";
import ButtonSecondary from "./../Components/Atoms/ButtonSecondary/index";

const AuthPage = () => {
  return (
    <div>
      <ButtonPrimary content="Sign Up" />
      <ButtonSecondary content="Log In" />
    </div>
  );
};

export default AuthPage;
