import React from "react";
import Label from "./../../../Atoms/FormElements/Label";
import EmailInput from "./../../../Atoms/FormElements/Inputs/EmailInput";
import "./EmailInputMolecule.scss";

const EmailInputMolecule = ({ id, label, placeholder }) => {
  return (
    <div className="emailInput">
      <Label htmlFor={id} content={label} />
      <EmailInput id={id} placeholder={placeholder} />
    </div>
  );
};

export default EmailInputMolecule;
