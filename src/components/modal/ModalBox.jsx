import React, { useState } from "react";
import Modal from "./Modal";
import { ModalContext } from "../../context/modalContext";

// function ModalBox() {
//   const [isOpen, setIsOpen] = useState(false);
//   return <>{isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}</>;
// }
// export default ModalBox;



const ModalBox = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalBox;
