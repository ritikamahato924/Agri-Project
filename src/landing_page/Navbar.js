import React from 'react';
import { Link } from "react-router-dom";
import ThemeToggle from "./signup/ThemeToggle";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-xl bg-dark border-bottom fixed-top">
            <div className="container p-2">
                <a className="navbar-brand logo" href="/">
                    <img src='./krishilogobg.png' className='ps-4' alt="Logo"
                        style={{ width: "70px", height: "80px", marginRight: "8px" }} />
                    <Link className='home ps-4' to="/">Home</Link>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-links align-items-center gap-2">
                        <li className="nav-item">
                            <Link className="nav-link features-btn" to="/features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link learn-btn" to="/learn">Learn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link detect-btn" to="/detect-disease">Detect Disease</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link signup-btn" to="/signup">Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link login-btn" to="/login">Log in</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ecommerce-btn" to="/ecommerce">E-commerce</Link>
                        </li>
                    </ul>
                </div>
                <ThemeToggle />
            </div>
        </nav>
    );
}
export default Navbar;
