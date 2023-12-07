import React, { useState } from "react";
import Modal from "./Modal";
import { ModalContext } from "../../context/modalContext";

const ModalBox = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={[ isOpen, setIsOpen ]}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalBox;
