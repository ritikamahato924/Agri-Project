import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg bg-dark border-bottom fixed-top">
            <div class="container p-2">
                <a class="navbar-brand logo" href="/">
                    <img src='./krishilogobg.png' className='ps-4' alt="Logo"
                        style={{ width: "70px", height: "80px", marginRight: "8px" }}></img>

                    <Link className='home ps-4' to="/">Home</Link>

                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-links">
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Log in</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ecommerce">E-commerce</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    );
}

export default Navbar;