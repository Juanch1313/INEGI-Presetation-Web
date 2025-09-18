import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal ({ isOpen, onClose, children } : ModalProps) {
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 mx-auto flex items-center justify-center bg-opacity-50 w-80 md:w-2xl">
      <div className="bg-red-200 p-6 rounded-lg w-full text-center shadow-2xl">
        {children}

        <button
          onClick={onClose}
          className="hover:cursor-pointer px-4 py-2 bg-red-500 hover:bg-red-600 border border-black rounded-2xl"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default Modal;