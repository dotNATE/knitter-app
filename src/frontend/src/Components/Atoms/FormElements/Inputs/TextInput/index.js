import React from "react";
import "./TextInput.scss";

const TextInput = ({ id, placeholder }) => (
  <input
    className="textInputField"
    id={id}
    type="text"
    placeholder={placeholder}
  />
);

export default TextInput;
