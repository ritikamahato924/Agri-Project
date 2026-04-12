import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Features() {
    return (
        <>
            <div>
            <Navbar />
            <div className="container text-center mb-5" style={{ marginTop: "100px" }}>
                <div className="hover-underline heading">
                Our Features<br></br>
            </div>
            <p className="hero-subtitle">
                Discover the tools below: intelligent crop recommendations, AI plant disease detection, weather insights for better planning, and a secure agricultural e-commerce marketplace.
            </p>
            <div className="row up-image">
                <div className="col-6 text-center" id="img">
                    <div className="img-card">
                        <img
                            src="/media/images/croprecommendation.jpg"
                            alt="Crop Recommendation"
                            style={{ width: "18rem", height: "12rem", objectFit: "cover" }}
                        />
                        <h5 className="img-title mt-2">Crop Recommendation</h5>
                        <p className="img-desc">
                            Get personalized crop recommendations based on soil type, climate, and market trends to optimize your farming decisions.
                        </p>
                        <Link to="/new" className="btn btn-success btn-md px-3 py-2 fs-6 shadow rounded-pill mt-2" style={{ fontWeight: 600, transition: 'all 0.3s ease-in-out' }} onMouseOver={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.3)'; }} onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'; }}>
                            Try Now
                        </Link>
                    </div>
                </div>
                <div className="col-6 ps-3" id="img">
                    <div className="img-card">
                        <img
                            src="/media/images/diseasedetection.jpg"
                            alt="Detect Disease"
                            style={{ width: "18rem", height: "12rem", objectFit: "cover" }}
                        />
                        <h5 className="img-title mt-2">Detect Disease</h5>
                        <p className="img-desc">
                            Upload plant images to detect diseases early using advanced AI technology and get treatment recommendations.
                        </p>
                        <Link to="/new" className="btn btn-success btn-md px-3 py-2 fs-6 shadow rounded-pill mt-2" style={{ fontWeight: 600, transition: 'all 0.3s ease-in-out' }} onMouseOver={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.3)'; }} onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'; }}>
                            Try Now
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row down-image">
                <div className="col-6" id="img">
                    <div className="img-card">
                        <img
                            src="/media/images/weatherinsights.jpg"
                            alt="Weather Insights"
                            style={{ width: "18rem", height: "12rem", objectFit: "cover" }}
                        />
                        <h5 className="img-title mt-2">Weather Insights</h5>
                        <p className="img-desc">
                            Access real-time weather forecasts, historical data, and insights to plan your farming activities effectively.
                        </p>
                        <Link to="/new" className="btn btn-success btn-md px-3 py-2 fs-6 shadow rounded-pill mt-2" style={{ fontWeight: 600, transition: 'all 0.3s ease-in-out' }} onMouseOver={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.3)'; }} onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'; }}>
                            Try Now
                        </Link>
                    </div>
                </div>
                <div className="col-6 ps-3" id="img">
                    <div className="img-card">
                        <img
                            src="/media/images/e-commerce.jpg"
                            alt="E-commerce"
                            style={{ width: "18rem", height: "12rem", objectFit: "cover" }}
                        />
                        <h5 className="img-title mt-2">E-commerce</h5>
                        <p className="img-desc">
                            Buy and sell agricultural products, tools, and equipment in our secure online marketplace for farmers.
                        </p>
                        <Link to="/new" className="btn btn-success btn-md px-3 py-2 fs-6 shadow rounded-pill mt-2" style={{ fontWeight: 600, transition: 'all 0.3s ease-in-out' }} onMouseOver={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.3)'; }} onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'; }}>
                            Try Now
                        </Link>
                    </div>
                </div>
            </div>

        </div>
        </div>
        <Footer />
        </>
    );
}

export default Features;
