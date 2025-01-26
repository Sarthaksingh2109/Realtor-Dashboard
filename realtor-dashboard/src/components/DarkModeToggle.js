import React from "react";
import { motion } from "framer-motion";
import "../styles/DarkModeToggle.css";

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <motion.button
      className="dark-mode-toggle"
      onClick={() => setDarkMode(!darkMode)} 
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </motion.button>
  );
};

export default DarkModeToggle;
