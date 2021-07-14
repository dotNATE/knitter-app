import React from "react";
import Label from "./../../../Atoms/FormElements/Label";
import TextInput from "./../../../Atoms/FormElements/Inputs/TextInput";
import "./TextInputMolecule.scss";

const TextInputMolecule = ({ id, label, placeholder }) => {
  return (
    <div className="textInput">
      <Label htmlFor={id} content={label} />
      <TextInput id={id} placeholder={placeholder} />
    </div>
  );
};

export default TextInputMolecule;
