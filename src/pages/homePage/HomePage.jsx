import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { PostsContext } from "../../context/postsContext";
import UserCard from "../../components/userCard/UserCard";

const HomePage = () => {
  const userList = useContext(UserContext);
  const postList = useContext(PostsContext);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(jsonData=>setUserList(jsonData));
  // }, [])



  return (
    <div>
      <h2>Directory</h2>
      {userList?.map((user, index) => (
        <UserCard
          key={user.id}
          name={user.name}
          id={user.id}
          postCount={postList.filter((post) => post.userId == user.id).length}
        ></UserCard>
      ))}
    </div>
  );
}

export default HomePage
