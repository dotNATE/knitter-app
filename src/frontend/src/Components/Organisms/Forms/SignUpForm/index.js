import React from "react";
import Form from "../../../Atoms/FormElements/Form";
import EmailInputMolecule from "../../../Molecules/FormElements/EmailInputMolecule";
import PasswordInputMolecule from "./../../../Molecules/FormElements/PasswordInputMolecule";

const SignUpForm = () => {
  return (
    <Form>
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
    </Form>
  );
};

export default SignUpForm;
