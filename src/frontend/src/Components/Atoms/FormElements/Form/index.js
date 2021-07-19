import React from "react";
import "./Form.scss";

const Form = ({ children, className, onSubmit }) => (
  <form className={className} onSubmit={onSubmit}>
    {children}
  </form>
);

export default Form;
