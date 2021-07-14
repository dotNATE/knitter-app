import React from "react";
import "./FormButtonCancel.scss";

const FormButtonCancel = ({ handleClick }) => {
  return (
    <button className="formButtonCancel" type="button" onClick={handleClick}>
      Cancel
    </button>
  );
};
export default FormButtonCancel;
