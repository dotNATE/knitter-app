import React from "react";
import Form from "../../../Atoms/FormElements/Form";
import EmailInputMolecule from "../../../Molecules/FormElements/EmailInputMolecule";
import PasswordInputMolecule from "./../../../Molecules/FormElements/PasswordInputMolecule";
import "./LogInForm.scss";
import FormButtonCancel from "../../../Atoms/FormElements/Buttons/FormButtonCancel";
import FormButtonPrimary from "./../../../Atoms/FormElements/Buttons/FormButtonPrimary/index";
import Header2 from "../../../Atoms/Headers/Header2";

const LogInForm = ({ submitHandler, cancelHandler }) => {
  return (
    <Form className="logInForm">
      <Header2 content="Log In" />
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
