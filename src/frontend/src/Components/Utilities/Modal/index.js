import React from "react";
import "./Modal.scss";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal displayBlock" : "modal displayNone";

  return (
    <div className={showHideClassName}>
      <section className="modalMain">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
