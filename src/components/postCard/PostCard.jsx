import React, { useContext, useState } from "react";
import styles from "./PostCard.module.css";
import Modal from "../modal/Modal";
import { ModalContext } from "../../context/modalContext";

function PostCard({ title, content, setSelectedPost }) {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  // console.log("Post Card component");

  function modalPrint() {
    console.log("Modal");
    // console.log(isOpen);
    return true;
  }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "1em",
        padding: "0.5em",
        margin: "3em 10em",
        maxWidth: "10vw",
        maxHeight: "20vh",
        overflow: "clip",
      }}
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
