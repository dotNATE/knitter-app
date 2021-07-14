import React from "react";
import Label from "./../../../Atoms/FormElements/Label";
import PasswordInput from "./../../../Atoms/FormElements/Inputs/PasswordInput";

const PasswordInputMolecule = ({ id, label, placeholder }) => {
  return (
    <React.Fragment>
      <Label htmlFor={id} content={label} />
      <PasswordInput id={id} placeholder={placeholder} />
    </React.Fragment>
  );
};

export default PasswordInputMolecule;
