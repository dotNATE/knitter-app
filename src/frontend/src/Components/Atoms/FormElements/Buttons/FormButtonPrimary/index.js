import React from "react";
import "./FormButtonPrimary.scss";

const FormButtonPrimary = ({ handleClick, content = "Submit" }) => {
  return (
    <button className="formButtonPrimary" type="submit" onClick={handleClick}>
      {content}
    </button>
  );
};
export default FormButtonPrimary;
