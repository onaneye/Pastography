// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-7 rounded-lg relative">
        <button 
          onClick={onClose} 
          className="absolute top-0 right-2 bg-black/30 p-4 text-white hover:bg-red-600 my-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
        <img 
          src={image.url} 
          alt={image.title} 
          className="w-full h-auto max-w-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default Modal;