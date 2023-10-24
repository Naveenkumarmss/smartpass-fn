import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "../components/signup/signup";
import Home from "../components/home/home";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Home />,
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />

)
