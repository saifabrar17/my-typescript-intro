import React, { useState } from 'react';

type ModalProps = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-overlay" onClick={handleClose}></div>
          <div className="modal-content">
            <h2>{title}</h2>
            <button className="modal-close" onClick={handleClose}>
              X
            </button>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;