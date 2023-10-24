import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    aadharId: "",
    Password: "",
  });
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { aadharId, Password } = formData;

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          aadharid: aadharId,
          password: Password,
        }),
        credentials: "include",
    });
        

      if (!response.ok) {
        throw new Error("Login failed");
      }
    //   toast.info("Successfully logged in!");
      nav("/home");
    } catch (error) {
        //   toast.error(error.message);
        console.log(error.message)
    }
    // console.log(formData)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign-In</h1>

        <form>
          <h5>AadharId</h5>
          <input
            placeholder="0123456789"
            name="aadharId"
            value={formData.aadharId}
            onChange={handleInputChange}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            name="Password"
            value={formData.Password}
            onChange={handleInputChange}
          />
          <button className="login-button" onClick={handleLogin}>
            Continue
          </button>
        </form>
        <Link to="/signup">
          <button className="register-button">Create your Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;