import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container text-center text-md-start">
        <div className="row">
          
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We connect people with modern farming techniques and resources to
              help build a stronger agricultural community across India.
            </p>
          </div>

        
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">About</a></li>
              <li><a href="#" className="text-white text-decoration-none">Support</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

         
          <div className="col-md-4 mb-3 text-center">
            <h5>Follow Us</h5>
            <div>
              <a href="#" className="text-white me-3 fs-4"><FaFacebook /></a>
              <a href="#" className="text-white me-3 fs-4"><FaInstagram /></a>
              <a href="#" className="text-white me-3 fs-4"><FaLinkedin /></a>
              <a href="#" className="text-white fs-4"><FaTwitter /></a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} AgriConnect. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
