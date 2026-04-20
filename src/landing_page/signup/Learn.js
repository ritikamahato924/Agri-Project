import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Learn() {
    return (
        <>
            <div>
            <Navbar />
            <div className="container text-center mb-5" style={{ marginTop: "100px" }}>
                <div className="hover-underline heading">
                Learn Smart Farming<br></br>
            </div>
            <p className="hero-subtitle">
                Explore educational resources on crop selection, disease prevention, and weather management to enhance your smart farming knowledge.
            </p>
            <div className="row up-image">
                <div className="col-6 text-center" id="img">
                    <div className="img-card">
                        <img
                            src="/media/images/croplearning.jpg"
                            alt="Crop Learning"
                            style={{ width: "18rem", height: "12rem", objectFit: "cover" }}
                        />
                        <h5 className="img-title mt-2">Crop Learning</h5>
                        <p className="img-desc">
                            Learn about optimal crop choices tailored to your soil, climate, and market conditions for smarter farming decisions.
                        </p>
                        <Link to="/new" className="btn btn-success btn-md px-3 py-2 fs-6 shadow rounded-pill mt-2" style={{ fontWeight: 600, transition: 'all 0.3s ease-in-out' }} onMouseOver={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.3)'; }} onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'; }}>
                            Explore More
                        </Link>
                    </div>
                </div>
                <div className="col-6 ps-3" id="img">
                    <div className="img-card">
                        <img
                            src="/media/images/diseaseawareness.jpg"
                            alt="Disease Awareness"
                            style={{ width: "18rem", height: "12rem", objectFit: "cover" }}
                        />
                        <h5 className="img-title mt-2">Disease Awareness</h5>
                        <p className="img-desc">
                            Gain knowledge on common plant diseases, early detection methods, and effective treatment strategies using AI technology.
                        </p>
                        <Link to="/new" className="btn btn-success btn-md px-3 py-2 fs-6 shadow rounded-pill mt-2" style={{ fontWeight: 600, transition: 'all 0.3s ease-in-out' }} onMouseOver={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.3)'; }} onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'; }}>
                            Explore More
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row down-image justify-content-center">
                <div className="col-6" id="img">
                    <div className="img-card">
                        <img
                            src="/media/images/weathertips.jpg"
                            alt="Weather Tips"
                            style={{ width: "18rem", height: "12rem", objectFit: "cover" }}
                        />
                        <h5 className="img-title mt-2">Weather Tips</h5>
                        <p className="img-desc">
                            Discover practical tips on interpreting weather forecasts, historical data, and planning your farming activities accordingly.
                        </p>
                        <Link to="/new" className="btn btn-success btn-md px-3 py-2 fs-6 shadow rounded-pill mt-2" style={{ fontWeight: 600, transition: 'all 0.3s ease-in-out' }} onMouseOver={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.3)'; }} onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'; }}>
                            Explore More
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

export default Learn;