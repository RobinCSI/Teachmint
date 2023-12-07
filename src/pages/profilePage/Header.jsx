import React from "react";

function Header({user}) {
      const { name, address, username, company, email, phone } = user;


  return (
    <>
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
    </>
  );
}

export default Header;
