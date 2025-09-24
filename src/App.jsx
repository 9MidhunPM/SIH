import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./homepage.jsx";
import FeaturePage from "./FeaturePage.jsx";
import ProfilePage from "./ProfilePage.jsx";
import MenuPage from "./MenuPage.jsx";

function App() {
  return (
    <div className="app">
      {/* Top bar */}
      <div className="top-bar">
        <span className="temple-name">Dwarkadhish Temple</span>
        <span className="arrow">▼</span>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<FeaturePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>

      {/* SOS Button */}
      <button 
        className="sos-btn" 
        onClick={() => alert("Emergency services have been notified. Help is on the way.")}
      >
        SOS
      </button>

      {/* Bottom nav */}
      <div className="bottom-nav">
        <Link to="/">🏠</Link>
        <Link to="/features">📍</Link>
        <Link to="/profile">👤</Link>
        <Link to="/menu">☰</Link>
      </div>
    </div>
  );
}

export default App;
