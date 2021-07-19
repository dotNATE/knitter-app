import React, { useContext } from "react";

import Form from "../../../Atoms/FormElements/Form";
import EmailInputMolecule from "../../../Molecules/FormElements/EmailInputMolecule";
import PasswordInputMolecule from "./../../../Molecules/FormElements/PasswordInputMolecule";
import FormButtonCancel from "../../../Atoms/FormElements/Buttons/FormButtonCancel";
import FormButtonPrimary from "./../../../Atoms/FormElements/Buttons/FormButtonPrimary/index";
import Header2Centered from "../../../Atoms/Headers/Header2Centered";

import "./LogInForm.scss";
import logIn from "../../../../APIFunctions/logIn";
import AuthContext from "../../../../Context/auth-context";

const LogInForm = ({ cancelHandler }) => {
  const authContext = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const formValues = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    if (formValues.email.length === 0 || formValues.password.length === 0) {
      console.log("Invalid email or password");
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
    <Form className="logInForm" submitHandler={submitHandler}>
      <Header2Centered content="Log In" />
      <EmailInputMolecule
        id="emailLogin"
        label="Email: "
        placeholder="Enter your email address"
      />
      <PasswordInputMolecule
        id="passwordLogin"
        label="Password: "
        placeholder="Enter your password"
      />
      <div className="formActionButtons">
        <FormButtonPrimary />
        <FormButtonCancel handleClick={cancelHandler} />
      </div>
    </Form>
  );
};

export default LogInForm;
