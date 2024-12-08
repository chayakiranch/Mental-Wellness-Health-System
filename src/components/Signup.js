import React, { useState } from "react";
import "./Signup.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const Signup = () => {
  // State variables for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    emergencyName: "",
    emergencyPhone: "",
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form data
  const validateForm = () => {
    // Password validation: min 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setMessage("Password must be at least 8 characters, include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.");
      return false;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return false;
    }

    // Phone number validation (must be 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setMessage("Phone number must be 10 digits.");
      return false;
    }

    // Date of birth validation (must be before today)
    const today = new Date();
    const dob = new Date(formData.dob);
    if (dob > today) {
      setMessage("Date of birth must be before today.");
      return false;
    }

    // Emergency contact name validation (only alphabets)
    const emergencyNameRegex = /^[A-Za-z\s]+$/;
    if (!emergencyNameRegex.test(formData.emergencyName)) {
      setMessage("Emergency contact name must contain only alphabets.");
      return false;
    }

    // Emergency contact phone validation (must be 10 digits)
    if (!phoneRegex.test(formData.emergencyPhone)) {
      setMessage("Emergency contact phone number must be 10 digits.");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) {
      return;
    }

    try {
      // Make a POST request to the backend
      const response = await axios.post("http://localhost:5000/api/signup", formData);

      if (response.data.success) {
        setMessage("Signup successful!");
        // Redirect or perform additional actions here
      } else {
        setMessage("Signup failed: " + response.data.message);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error("Signup error:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="signup-container">
        <div className="signup-table">
          <h1 className="signup-title">SIGN UP</h1>
          {message && <p className="message">{message}</p>}
          <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />

            <label htmlFor="gender">Gender Identity</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-Binary</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <label htmlFor="emergencyName">Emergency Contact Name</label>
            <input
              type="text"
              id="emergency-name"
              name="emergencyName"
              placeholder="Enter emergency contact's name"
              value={formData.emergencyName}
              onChange={handleChange}
              required
            />

            <label htmlFor="emergencyPhone">Emergency Contact Phone</label>
            <input
              type="tel"
              id="emergency-phone"
              name="emergencyPhone"
              placeholder="Enter emergency contact's phone number"
              value={formData.emergencyPhone}
              onChange={handleChange}
              required
            />

            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <p className="login-redirect">
            Already have an account? <a href="/Login">Login</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
