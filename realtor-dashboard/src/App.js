import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import PrivateRoute from "./auth/PrivateRoute";
import Property from "./components/Property";
import Footer from "./components/Footer";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      {user ? (
        <>
          <Navbar 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            logout={logout}  // Pass logout to Navbar
            darkMode={darkMode}  // Pass darkMode to Navbar
            setDarkMode={setDarkMode}  // Pass setDarkMode to Navbar
          />
          {currentPage === "Dashboard" && <PrivateRoute><Dashboard /></PrivateRoute>}
          {currentPage === "PropertyListings" && <PrivateRoute><Property /></PrivateRoute>}
        </>
      ) : (
        <Login />
      )}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
