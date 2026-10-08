import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const ModalHeader = ({ children, toggle }) => (
  <div className="modal-header">
    <div className="modal-title">{children}</div>
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
      onClick={toggle}
    ></button>
  </div>
);

const ModalBody = ({ children }) => (
  <div className="modal-body">{children}</div>
);

const ModalFooter = ({ children }) => (
  <div className="modal-footer">{children}</div>
);

const Modal = ({ isOpen, children }) => (
  <div
    className={cn('modal', { fade: isOpen, show: isOpen })}
    style={{ display: isOpen ? 'block' : 'none' }}
    role="dialog"
  >
    <div className="modal-dialog">
      <div className="modal-content">{children}</div>
    </div>
  </div>
);

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
// END
