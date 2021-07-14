import React from "react";
import Header1 from "../Components/Atoms/Headers/Header1";
import Header2 from "./../Components/Atoms/Headers/Header2";
import AuthButtons from "../Components/Molecules/AuthButtons";
import SignUpForm from "../Components/Organisms/Forms/SignUpForm";

const AuthPage = () => {
  return (
    <div>
      <Header1 content="Sign Up Page" />
      <Header2 content="Join Knitter today!" />
      <AuthButtons />
      <SignUpForm />
    </div>
  );
};

export default AuthPage;
