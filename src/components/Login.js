import React, { useState } from "react";
import "./Login.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const Login = () => {
  // State variables to manage email, password, and error/success messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Make a POST request to the backend API
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      // Handle success
      if (response.data.success) {
        setMessage("Login successful!");
        // Redirect or perform further actions here
      } else {
        setMessage("Login failed: " + response.data.message);
      }
    } catch (error) {
      // Handle error
      setMessage(
        "An error occurred. Please check your credentials and try again."
      );
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <h1>Login</h1>
        {message && <p className="message">{message}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-redirect">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
        <p className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Login;
