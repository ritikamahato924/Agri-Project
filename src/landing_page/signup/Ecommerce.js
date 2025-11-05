import React from "react";
import "./Ecommerce.css";
import Navbar from "../Navbar";

function Ecommerce() {
  return (
    <>
    <Navbar/>
    <div className="ecommerce-page mt-5">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Agri E-Commerce 🌾</h1>
        <p>
          Discover high-quality seeds, fertilizers, and modern farming tools from trusted sellers.
          Empowering farmers with technology and transparency.
        </p>
        <button className="explore-btn">Explore Products</button>
      </section>

      {/* Products Preview Section */}
      <section className="products">
        <h2>Top Categories</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2909/2909766.png" alt="Seeds" />
            <h3>Seeds</h3>
            <p>Buy premium-quality crop seeds for higher yield.</p>
          </div>

          <div className="product-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1027/1027650.png" alt="Fertilizer" />
            <h3>Fertilizers</h3>
            <p>Organic and chemical fertilizers to boost growth.</p>
          </div>

          <div className="product-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3082/3082031.png" alt="Tools" />
            <h3>Tools</h3>
            <p>Modern tools and equipment for efficient farming.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>🌱Quality Guaranteed</h3>
            <p>Only certified sellers and government-approved products.</p>
          </div>
          <div className="feature-item">
            <h3>🚚 Fast Delivery</h3>
            <p>Quick delivery across India with reliable logistics partners.</p>
          </div>
          <div className="feature-item">
            <h3>💳 Secure Payments</h3>
            <p>Pay safely with UPI, Debit/Credit Cards, or Net Banking.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Agri E-Commerce | Built with ❤️ for Indian Farmers</p>
      </footer>
    </div>
    </>
  );
}

export default Ecommerce;
