import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.body.classList.add('dark-mode');
    }
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

  return (
    <span
      onClick={toggleTheme}
      style={{
        cursor: "pointer",
        fontSize: "1.4rem",
        padding: "4px 8px",
        borderRadius: "6px",
        transition: "background 0.3s ease",
        display: "inline-flex",
        alignItems: "center",
      }}
      title={isDark ? "Light Mode" : "Dark Mode"}
      onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.1)"}
      onMouseLeave={(e) => e.target.style.background = "transparent"}
    >
      {isDark ? "☀️" : "🌙"}
    </span>
);
};

export default ThemeToggle;