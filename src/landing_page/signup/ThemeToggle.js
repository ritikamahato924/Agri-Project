import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';
import Navbar from "../Navbar";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 3. On reload, load the saved theme automatically
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.body.classList.add('dark-mode');
    }
    // 4. Default theme remains the current existing theme (light) if not set
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // 1. Add a simple toggle button
  return (
    <>
      <Navbar/>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDark ? '☀️' : '🌙'}
      </button>
    </>
  );
};

export default ThemeToggle;
