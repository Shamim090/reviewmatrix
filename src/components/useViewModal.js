// useViewModal.js (example)
import React, { useState } from 'react';
// Assuming correct import path and setup

const useViewModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return { isOpen, handleOpenModal, handleCloseModal };
};

export default useViewModal;
