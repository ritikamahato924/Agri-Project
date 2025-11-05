import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from "./landing_page/home/HomePage";
import Solution from './landing_page/home/Solution';
import FormNew from "./FormNew";
import PageSolution from './PageSolution';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/signup/Login';
import Ecommerce from './landing_page/signup/Ecommerce';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<FormNew/>} />
        <Route path="/solution" element={<PageSolution/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/ecommerce" element={<Ecommerce/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

