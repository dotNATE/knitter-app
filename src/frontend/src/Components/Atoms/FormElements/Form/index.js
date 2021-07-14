import React from "react";
import "./Form.scss";

const Form = ({ children, className, submitHandler }) => (
  <form className={className} onSubmit={submitHandler}>
    {children}
  </form>
);

export default Form;
