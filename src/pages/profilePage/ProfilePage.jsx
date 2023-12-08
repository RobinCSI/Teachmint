import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountryDropdown from "../../components/countryDropdown/CountryDropdown";
// import Clock from "../../components/clock/clock";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { PostsContext } from "../../context/postsContext";
import PostCard from "../../components/postCard/PostCard";
import Modal from "../../components/modal/Modal";
import ModalBox from "../../components/modal/ModalBox";
// import { ModalContext } from "../../context/modalContext";
import UserDetails from "./UserDetails";

import styles from './ProfilePage.module.css'

function ProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("Profile page component", id);

  // console.log("id", typeof(id)); //String
  const userList = useContext(UserContext);
  // console.log(typeof(userList[0].id)) //Number
  // console.log(userList)
  const postsList = useContext(PostsContext);
  const [user] = userList?.filter((user) => user.id == id);
  // console.log(user);
  const posts = postsList.filter((post) => post.userId == id);

  const [selectedPost, setSelectedPost] = useState({});

  function handleBackClick() {
    navigate("/");
  }
  return (
    <>
      <div className={styles.header} >
        <button
          style={{ margin: "0.5em 1em", fontSize: "1em", backgroundColor:"lightblue", borderRadius: "0.5em", padding: "0.5em" }}
          onClick={handleBackClick}
        >
          Back
        </button>
        <CountryDropdown />
        {/* <Clock/> */}
      </div>
      <UserDetails user={user} />
        <div className={styles.MainContent}>
      <ModalBox>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              setSelectedPost={setSelectedPost}
              // isOpen={isOpen}
              // setIsOpen={setIsOpen}
            />
          ))}
          {/* <ModalBox /> */}
          <Modal
            selectedPost={selectedPost}
            setSelectedPost={setSelectedPost}
          />
          {/* {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />} */}
      </ModalBox>
        </div>
    </>
  );
}

export default ProfilePage;
