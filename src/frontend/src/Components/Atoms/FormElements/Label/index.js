import React from "react";
import "./Label.scss";

const Label = ({ content, htmlFor }) => (
  <label htmlFor={htmlFor}>{content}</label>
);

export default Label;
