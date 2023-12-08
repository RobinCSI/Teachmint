import React, { useContext, useState } from "react";
import styles from "./PostCard.module.css";
import Modal from "../modal/Modal";
import { ModalContext } from "../../context/modalContext";

function PostCard({ title, content, setSelectedPost }) {
  const [isOpen, setIsOpen] = useContext(ModalContext);
  console.log("Post Card component");

  function modalPrint() {
    console.log("Modal");
    // console.log(isOpen);
    return true;
  }
  return (
    <div className={styles.PostCard}
      onClick={() => {
        setIsOpen(true);
        setSelectedPost({title: title, content:content});
      }}
    >
      <h4 style={{ textAlign: "center" }}>{title}</h4>
      <p style={{}}>{content}</p>
      {/* {isOpen && <Modal title={title} content={content}/>} */}

      {/* {(isOpen && modalPrint()) && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />} */}
    </div>
  );
}

export default PostCard;
