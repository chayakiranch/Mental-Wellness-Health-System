import React, { useState, useEffect } from "react";
import "./Profile.css";
import Header from "./Header";
import Footer from "./Footer";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
    emergencyName: "",
    emergencyPhone: "",
  });

  // Simulating fetching user data (this would typically come from an API)
  useEffect(() => {
    const fetchUserData = () => {
      const userData = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "1234567890",
        dob: "1990-01-01",
        gender: "male",
        password: "password123", // Avoid showing the actual password in a real app
        emergencyName: "Jane Doe",
        emergencyPhone: "0987654321",
      };
      setFormData(userData);
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", formData);
    alert("Profile updated successfully!");
    // Add code to send updated data to the server
  };

  return (
    <>
      <Header />
      <div className="profile-container">
        <h1 className="profile-title">Profile Management</h1>
        <form className="profile-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
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
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="emergencyName">Emergency Contact Name</label>
          <input
            type="text"
            id="emergencyName"
            name="emergencyName"
            value={formData.emergencyName}
            onChange={handleChange}
            required
          />

          <label htmlFor="emergencyPhone">Emergency Contact Phone</label>
          <input
            type="tel"
            id="emergencyPhone"
            name="emergencyPhone"
            value={formData.emergencyPhone}
            onChange={handleChange}
            required
          />

          <button type="submit" className="profile-button">
            Update Profile
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
