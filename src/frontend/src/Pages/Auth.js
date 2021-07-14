import React, { useState } from "react";
import Header1 from "../Components/Atoms/Headers/Header1";
import Header2 from "./../Components/Atoms/Headers/Header2";
import AuthButtons from "../Components/Molecules/AuthButtons";
import SignUpForm from "../Components/Organisms/Forms/SignUpForm";
import Modal from "../Components/Utilities/Modal";

const AuthPage = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLogInForm, setShowLogInForm] = useState(false);

  const showSignUpModal = (e) => {
    setShowSignUpForm(true);
  };

  const hideSignUpModal = () => {
    setShowSignUpForm(false);
  };

  const showLogInModal = (e) => {
    setShowLogInForm(true);
  };

  const hideLogInModal = () => {
    setShowLogInForm(false);
  };

  return (
    <main>
      <Header1 content="Sign Up Page" />
      <Header2 content="Join Knitter today!" />
      <AuthButtons
        signUpClicker={showSignUpModal}
        logInClicker={showLogInModal}
      />
      <Modal show={showSignUpForm} handleClose={hideSignUpModal}>
        <SignUpForm />
      </Modal>
      <Modal show={showLogInForm} handleClose={hideLogInModal}>
        <p>Login</p>
      </Modal>
    </main>
  );
};

export default AuthPage;
