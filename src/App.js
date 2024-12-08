import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage'; // Replace with your actual home page component
import Signup from './components/Signup'; // Ensure the correct path
import Login from './components/Login';
import Profile from './components/Profile';
import AdminPage from './components/Admin';
import Programmes from './components/Programmes';
import PublicEngagement from './components/PublicEngagement';
import Research from './components/Research';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publicengagement" element={<PublicEngagement />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
