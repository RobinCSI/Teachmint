import React, { useContext } from "react";
import styles from "./Modal.module.css";
import { ModalContext } from "../../context/modalContext";

function Modal({selectedPost}) {
    const {title, content}=selectedPost
  // console.log("Modal component");
  const [isOpen, setIsOpen]=useContext(ModalContext)
  // console.log("Modal", isOpen);
  if(!isOpen) return null

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)}>
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>{title}</h5>
            </div>
            {/* <button> */}
              <span
                onClick={() => {
                  console.log("Close button");
                  setIsOpen(false);
                  console.log(selectedPost);
                }}
                style={{ marginBottom: "-3px" }}
                className={styles.closeBtn}
              >
                ❌
              </span>
            {/* </button> */}
            <div className={styles.modalContent}>
                {content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
