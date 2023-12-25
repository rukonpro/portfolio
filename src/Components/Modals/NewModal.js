import React from 'react';

const NewModal = ({ isOpen, setIsOpen, children }) => {
    const modalClassName = isOpen
        ? 'fixed inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-0'
        : 'transform -translate-y-full transition-transform duration-300';
    return (
        <div className={`modal ${modalClassName}`}>
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
                onClick={() => setIsOpen(state => !state)}></div>

            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">{children}</div>
            </div>
        </div>
    );
};

export default NewModal;