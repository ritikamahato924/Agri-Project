import React from 'react';

function Navbar() {
    return (
        
            <nav class="navbar navbar-expand-lg bg-dark border-bottom fixed-top">
                <div class="container p-2">
                    <a class="navbar-brand" href="#">LOGO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Signup</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Log in</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Problem</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Solution</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        
    );
}

export default Navbar;