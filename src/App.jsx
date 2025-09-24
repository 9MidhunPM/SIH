import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./homepage.jsx";
import FeaturePage from "./FeaturePage.jsx";
import ProfilePage from "./ProfilePage.jsx";
import MenuPage from "./MenuPage.jsx";

function App() {
  // Get the base URL from the Vite environment
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <div className="app">
      {/* Top bar */}
      <div className="top-bar">
        <span className="temple-name">Dwarkadhish Temple</span>
        <span className="arrow">▼</span>
      </div>

      {/* Routes */}
      <Routes>
        <Route path={baseUrl} element={<Homepage />} />
        <Route path={baseUrl + "features"} element={<FeaturePage />} />
        <Route path={baseUrl + "profile"} element={<ProfilePage />} />
        <Route path={baseUrl + "menu"} element={<MenuPage />} />
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
        <Link to={baseUrl}>🏠</Link>
        <Link to={baseUrl + "features"}>📍</Link>
        <Link to={baseUrl + "profile"}>👤</Link>
        <Link to={baseUrl + "menu"}>☰</Link>
      </div>
    </div>
  );
}

export default App;
