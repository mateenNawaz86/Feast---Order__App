import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const overlayElement = document.getElementById("overlays");
  return (
    <>
      {/* react-portal used for ensure the HTML code is not overlay on complete react-app */}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        overlayElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayElement
      )}
    </>
  );
};

export default Modal;
