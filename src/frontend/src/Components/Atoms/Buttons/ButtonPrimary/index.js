import React from "react";
import "./ButtonPrimary.scss";

const ButtonPrimary = ({ content, handleClick }) => (
  <button className="buttonPrimary" type="button" onClick={handleClick}>
    {content}
  </button>
);

export default ButtonPrimary;
