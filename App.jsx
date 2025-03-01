import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";

import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/pages/Home";
import Login from "./Components/Login";
import LoginPage from "./Components/pages/LoginPage";
import SignupPage from "./Components/pages/SignupPage";
import ProfilePage from "./Components/pages/ProfilePage";
import SocialMediaPage from "./Components/pages/SocialMediaPage";





const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };


  const router = new createBrowserRouter([
{path: "/", 
  element:<Home/>
},


{path: "/login", 
  element:<LoginPage/>
},

{path: "/signup", 
  element:<SignupPage/>
},

{path: "/profile", 
  element:<ProfilePage/>
},
{path: "/SocialMediaPage", 
  element:<SocialMediaPage/>
},


  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
