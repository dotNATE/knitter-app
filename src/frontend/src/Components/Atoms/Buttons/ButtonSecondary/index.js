import React from "react";
import "./ButtonSecondary.scss";

const ButtonSecondary = ({ content, handleClick }) => (
  <button className="buttonSecondary" type="button" onClick={handleClick}>
    {content}
  </button>
);

export default ButtonSecondary;
