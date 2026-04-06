import React from 'react';
import './ThemeToggle.css';
import Navbar from "../Navbar";
import { useTheme } from '../../context/ThemeContext'; 

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  // 1. Add a simple toggle button
  return (
    <>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDark ? '☀️' : '🌙'}
      </button>
    </>
  );
};

export default ThemeToggle;
