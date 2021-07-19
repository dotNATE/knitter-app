import React, { useContext } from "react";

import Form from "../../../Atoms/FormElements/Form";
import EmailInputMolecule from "../../../Molecules/FormElements/EmailInputMolecule";
import PasswordInputMolecule from "./../../../Molecules/FormElements/PasswordInputMolecule";
import FormButtonCancel from "../../../Atoms/FormElements/Buttons/FormButtonCancel";
import FormButtonPrimary from "./../../../Atoms/FormElements/Buttons/FormButtonPrimary/index";
import Header2Centered from "../../../Atoms/Headers/Header2Centered";
import TextInputMolecule from "./../../../Molecules/FormElements/TextInputMolecule";

import signUp from "../../../../APIFunctions/signUp";
import logIn from "./../../../../APIFunctions/logIn";

import "./SignUpForm.scss";
import AuthContext from "../../../../Context/auth-context";

const SignUpForm = ({ cancelHandler }) => {
  const authContext = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const formValues = {
      fName: e.target[0].value,
      lName: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
      passwordConf: e.target[4].value,
    };

    if (formValues.email.length === 0 || formValues.password.length === 0) {
      console.log("Invalid email or password");
      return;
    }

    if (formValues.password !== formValues.passwordConf) {
      console.log("Password does not match");
      return;
    }

    const signUpData = await signUp(formValues);

    if (signUpData.errors) {
      signUpData.errors.forEach((error) => {
        console.log(error.message);
      });
      return;
    }

    const logInData = await logIn(formValues);

    if (logInData.errors) {
      logInData.errors.forEach((error) => {
        console.log(error.message);
      });
      return;
    }

    authContext.logIn(logInData.data.login.token, logInData.data.login.userId);
  };

  return (
    <Form className="signUpForm" onSubmit={submitHandler}>
      <Header2Centered content="Sign Up" />
      <TextInputMolecule
        id="fName"
        label="First Name: "
        placeholder="Your first name"
      />
      <TextInputMolecule
        id="lName"
        label="Last Name: "
        placeholder="Your last name"
      />
      <EmailInputMolecule
        id="email"
        label="Email: "
        placeholder="Enter your email address"
      />
      <PasswordInputMolecule
        id="password"
        label="Password: "
        placeholder="Enter your password"
      />
      <PasswordInputMolecule
        id="passwordConf"
        label="Confirm Password: "
        placeholder="Confirm your password"
      />
      <div className="formActionButtons">
        <FormButtonPrimary />
        <FormButtonCancel handleClick={cancelHandler} />
      </div>
    </Form>
  );
};

export default SignUpForm;
