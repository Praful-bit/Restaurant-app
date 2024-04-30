/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ReactDom from "react-dom";
import classes from "./Modal.module.css";
import { Fragment } from "react";



const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById('overlays')

function Modal(props) {
 return(
    <Fragment>
   {ReactDom.createPortal(<Backdrop/>,portalElement)}
   {ReactDom.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,portalElement)}
    </Fragment>
 )
}

export default Modal;
