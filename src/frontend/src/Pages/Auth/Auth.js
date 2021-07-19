import React, { useState } from "react";
import Header1Centered from "../../Components/Atoms/Headers/Header1Centered";
import Header2Centered from "../../Components/Atoms/Headers/Header2Centered";
import AuthButtons from "../../Components/Molecules/AuthButtons";
import SignUpForm from "../../Components/Organisms/Forms/SignUpForm";
import Modal from "../../Components/Utilities/Modal";
import LogInForm from "../../Components/Organisms/Forms/LogInForm";
import "./Auth.scss";

const AuthPage = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLogInForm, setShowLogInForm] = useState(false);

  const showSignUpModal = () => {
    setShowSignUpForm(true);
  };

  const hideSignUpModal = () => {
    setShowSignUpForm(false);
  };

  const showLogInModal = () => {
    setShowLogInForm(true);
  };

  const hideLogInModal = () => {
    setShowLogInForm(false);
  };

  return (
    <main className="authPage">
      <section className="authWindow">
        <Header1Centered content="Sign Up Page" />
        <Header2Centered content="Join Knitter today!" />
        <AuthButtons
          signUpClicker={showSignUpModal}
          logInClicker={showLogInModal}
        />
        <Modal show={showSignUpForm}>
          <SignUpForm cancelHandler={hideSignUpModal} />
        </Modal>
        <Modal show={showLogInForm}>
          <LogInForm cancelHandler={hideLogInModal} />
        </Modal>
      </section>
    </main>
  );
};

export default AuthPage;
