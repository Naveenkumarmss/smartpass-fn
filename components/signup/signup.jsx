import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    aadharid: "",
    Password: "",
    address: "",
    age: "",
  });
  const nav = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, aadharid, Password,address,age } = formData;

  const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        name: name,
        aadharid: aadharid,
        password: Password,
        address: address,   
        age: age,
        }),
        credentials: "include",
  });
      const content = await response.json();
        console.log(content);
        
    //   .post(
    //     "http://localhost:8080/api/auth/signup",
    //     {
    //     name: name,
    //     aadharid: aadharid,
    //     password: Password,
    //     address: address,   
    //     age: age,
    //     },
    //     {
    //       withCredentials: true,
    //     }
    //   )
    //   .then((res) => {
    //     res.json();
    //     nav("/home");
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data);
    //   });
    // console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign-Up</h1>
        <form onSubmit={handleSignup}>
          <h5>User Name</h5>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <h5>Aadharid</h5>
          <input
            placeholder="0123456789"
            name="aadharid"
            value={formData.aadharid}
            onChange={handleChange}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            />
        <h5>Address</h5>
        <input
            type="text"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            />
        <h5>Age</h5>    
        <input
            type="text"
            placeholder="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            />
          <div className="login-link">
            Already have an account? <Link to="/"> Sign in</Link>
          </div>
          <button className="signup-button" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;