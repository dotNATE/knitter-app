import React from "react";
import "./FormButtonPrimary.scss";

const FormButtonPrimary = ({ handleClick }) => {
  return (
    <button className="formButtonPrimary" type="submit" onClick={handleClick}>
      Submit
    </button>
  );
};
export default FormButtonPrimary;
