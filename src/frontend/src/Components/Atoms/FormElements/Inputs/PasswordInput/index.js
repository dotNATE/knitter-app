import React from "react";
import "./PasswordInput.scss";

const PasswordInput = ({ id, placeholder }) => (
  <input
    className="passwordInputField"
    id={id}
    type="password"
    placeholder={placeholder}
  />
);

export default PasswordInput;
