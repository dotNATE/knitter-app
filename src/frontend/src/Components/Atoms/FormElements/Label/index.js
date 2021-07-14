import React from "react";

const Label = ({ content, htmlFor }) => (
  <label htmlFor={htmlFor}>{content}</label>
);

export default Label;
