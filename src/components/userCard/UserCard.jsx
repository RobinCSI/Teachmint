import React from "react";
import {useNavigate} from 'react-router-dom'

function UserCard(props) {
    const navigate=useNavigate()
    const handleUserCardClick=()=>{
        navigate(`/user/${props.id}`)
    }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "0.5em",
        display: "flex",
        justifyContent: "space-between",
        padding: "0.2em 2em",
        margin: "1em",
        backgroundColor: "lightblue",
      }}
      onClick={handleUserCardClick}
    >
      <p>Name: {props.name}</p>
      <p>Posts: {props.postCount}</p>
    </div>
  );
}

export default UserCard;
