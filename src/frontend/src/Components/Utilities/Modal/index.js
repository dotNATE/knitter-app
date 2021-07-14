import React from "react";
import "./Modal.scss";

const Modal = ({ show, children }) => {
  const showHideClassName = show ? "modal displayBlock" : "modal displayNone";

  return (
    <div className={showHideClassName}>
      <section className="modalMain">{children}</section>
    </div>
  );
};

export default Modal;
