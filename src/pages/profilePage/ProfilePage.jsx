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
function ProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams();

  // console.log("id", typeof(id)); //String
  const userList = useContext(UserContext);
  // console.log(userList);
  // console.log(typeof(userList[0].id)) //Number
  const postsList = useContext(PostsContext);
  const [user] = userList?.filter((user) => user.id == id);
  // console.log(user);
  const { name, address, username, company, email, phone } = user;
  const posts = postsList.filter((post) => post.userId == id);

  const [selectedPost, setSelectedPost]=useState({})

  function handleBackClick() {
    navigate("/");
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <button onClick={handleBackClick}>Back</button>
        <CountryDropdown />
        {/* <Clock/> */}
      </div>
      <h1 style={{ textAlign: "center" }}>Profile Page</h1>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "0.5em",
          // padding: "1em 1em",
          margin: "1em",
          // backgroundColor: "lightblue",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1.2em",
            margin: "0px 1em",
            // border: "1px solid black"
          }}
        >
          <h3>{name}</h3>
          <p>
            {address.suite}, {address.street}, {address.city}, {address.zipcode}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 1em",
            fontSize: "1.2em",
            // border: "1px solid black"
          }}
        >
          <p>
            {username} | {company.catchPhrase}
          </p>
          <p>
            {email} | {phone}
          </p>
        </div>
      </div>
      <ModalBox>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            border:"1px solid black"
          }}
        >
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
          <Modal selectedPost={selectedPost}/>
          {/* {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />} */}
        </div>
      </ModalBox>
    </div>
  );
}

export default ProfilePage;
