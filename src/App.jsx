import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { UserContext } from "./context/userContext";
import { PostsContext } from "./context/postsContext";
import ProfilePage from "./pages/profilePage/ProfilePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ModalContext } from "./context/modalContext";

// function initialUser(){
//   console.log("Runs")
//   return []
// }

function App() {
  const [userData, setUserData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/user/:id",
      element: <ProfilePage />,
    },
  ]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((jsonData) => setUserData(jsonData));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((jsonData) => setPostsData(jsonData));
  }, []);

  return (
    <div>
      <UserContext.Provider value={userData}>
        <PostsContext.Provider value={postsData}>
          <ModalContext.Provider value={[isOpen, setIsOpen]}>
            <RouterProvider router={router} />
          </ModalContext.Provider>
        </PostsContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
