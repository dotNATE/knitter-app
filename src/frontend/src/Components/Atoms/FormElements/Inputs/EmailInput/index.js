import React from "react";
import "./EmailInput.scss";

const EmailInput = ({ id, placeholder }) => (
  <input
    className="emailInputField"
    id={id}
    type="email"
    placeholder={placeholder}
  />
);

export default EmailInput;
