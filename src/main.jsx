// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import CartList from "./COMP/Carts/Cartlist.jsx";
// import Signin from "./COMP/Signin/signin.jsx";
// import Signup from "./COMP/Signin/SignUp.jsx";
// import Profile from "./COMP/Profle/Profile.jsx";
// import { useState } from "react";


// const router = createBrowserRouter([
  
//   {
//     path: "/",
//     element: <App  />,
//   },
//   {
//     path: "/Cart",
//     element: <CartList  />,
//   },
// {
//   path:'/Signin',
//   element:<Signin/>
// },

// {
// path:'SignUp',
// element:<Signup/>,
// },
// {
//   path:'Profile',
//   element:<Profile/>,
//   }
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router}></RouterProvider>
//     {/* <App/> */}
//   </React.StrictMode>
// );
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
