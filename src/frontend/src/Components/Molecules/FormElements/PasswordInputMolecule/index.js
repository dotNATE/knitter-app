import React from "react";
import Label from "./../../../Atoms/FormElements/Label";
import PasswordInput from "./../../../Atoms/FormElements/Inputs/PasswordInput";
import "./PasswordInputMolecule.scss";

const PasswordInputMolecule = ({ id, label, placeholder }) => {
  return (
    <div className="passwordInput">
      <Label htmlFor={id} content={label} />
      <PasswordInput id={id} placeholder={placeholder} />
    </div>
  );
};

export default PasswordInputMolecule;
