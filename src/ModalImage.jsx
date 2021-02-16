import { createPortal } from "react-dom";
import { memo } from "react";

const container = document.getElementById("modals");

function ModalImage({ src, toggleOpen }) {
  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <button className="modal-close" onClick={toggleOpen}>
          X
        </button>
        <img src={src} className="modal-img" />
      </div>
    </div>
  );
}

function ModalWrapper(props) {
  return props.isOpen
    ? createPortal(<ModalImage {...props} />, container)
    : null;
}

export default memo(ModalWrapper);
