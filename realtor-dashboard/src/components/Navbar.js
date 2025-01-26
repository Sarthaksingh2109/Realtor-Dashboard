import React from "react";
import { useAuth } from "../auth/AuthContext";
import DarkModeToggle from "./DarkModeToggle";
import "../styles/Navbar.css";

const Navbar = ({ currentPage, setCurrentPage, logout, darkMode, setDarkMode }) => {
  const { user } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button
          className={currentPage === "Dashboard" ? "active" : ""}
          onClick={() => setCurrentPage("Dashboard")}
        >
          Dashboard
        </button>
        <button
          className={currentPage === "PropertyListings" ? "active" : ""}
          onClick={() => setCurrentPage("PropertyListings")}
        >
          Property Listings
        </button>
      </div>

      {user && (
        <div className="navbar-buttons">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
