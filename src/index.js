import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from "./landing_page/home/HomePage";
import FormNew from "./FormNew";
import PageSolution from './PageSolution';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/signup/Login';
import Ecommerce from './landing_page/signup/Ecommerce';
import ThemeToggle from './landing_page/signup/ThemeToggle';
import DetectDisease from './landing_page/signup/DetectDisease';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<FormNew/>} />
        <Route path="/solution" element={<PageSolution/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/detect-disease" element={<DetectDisease/>} />

      </Routes>
    </BrowserRouter>
    </ThemeProvider> 
  </React.StrictMode>
);

