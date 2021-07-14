import React from "react";
import Label from "./../../../Atoms/FormElements/Label";
import EmailInput from "./../../../Atoms/FormElements/Inputs/EmailInput";

const EmailInputMolecule = ({ id, label, placeholder }) => {
  return (
    <React.Fragment>
      <Label htmlFor={id} content={label} />
      <EmailInput id={id} placeholder={placeholder} />
    </React.Fragment>
  );
};

export default EmailInputMolecule;
