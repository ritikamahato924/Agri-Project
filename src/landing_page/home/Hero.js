import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        
        <div className="container text-center mb-5" style={{ marginTop: "100px" }}>
            <div className="hover-underline heading">“Join India’s Growing Agri Community”<br></br>
                </div>
            <p className="hero-subtitle">
                A platform for farmers, students, and plant enthusiasts to learn, monitor crops, and make smarter decisions with weather insights.
            </p>
            <div className="row up-image">
                <div className="col-4 text-center" id="img">
                    <div className = "img-card">
                    <img 
                        src="/media/images/farm01.jpg" 
                        alt="Smart Farming with Technology" 
                        style={{ width: "18rem", height: "12rem" }} 
                    />
                    <h5 className="img-title mt-2">Smart Farming with Technology</h5>
                    <p className="img-desc">
                         Farmers using digital tools and data to monitor crops and make informed decisions for better productivity.
                    </p>
                    </div>
                </div>
                <div className="col-4 ps-3" id="img">
                    <div className = "img-card">
                    <img src="/media/images/farm02.jpg" 
                    alt="image02" style={{ width: "18rem", height: "12rem" }}></img>
                    <h5 className="img-title mt-2">Modern Agricultural Machinery</h5>
                    <p className="img-desc">
                        Advanced equipment helping farmers improve efficiency, reduce labor, and increase crop yield.
                    </p>
                    </div>
                </div>
                <div className="col-4 ps-4" id="img">
                    <div className = "img-card">
                    <img src="/media/images/farm03.jpg" 
                    alt="image03" style={{ width: "18rem", height: "12rem" }}></img>
                    <h5 className="img-title mt-2">Efficient Crop Harvesting</h5>
                    <p className="img-desc">
                        Large-scale harvesting techniques ensuring timely collection and reduced wastage.
                    </p>
                    </div>
                </div>
            </div>
            <div className="row down-image">
                <div className="col-4" id="img">
                    <div className = "img-card">
                    <img src="/media/images/farm04.jpeg" 
                    alt="image04" style={{ width: "18rem", height: "12rem" }}></img>
                    <h5 className="img-title mt-2">Traditional Farming Practices</h5>
                    <p className="img-desc">
                        Age-old farming methods that form the foundation of agriculture and support rural livelihoods.
                    </p>
                    </div>
                </div>
                <div className="col-4 ps-3" id="img">
                    <div className = "img-card">
                    <img src="/media/images/farm05.webp" 
                    alt="image05" style={{ width: "18rem", height: "12rem" }}></img>
                    <h5 className="img-title mt-2">Sustainable Agriculture</h5>
                    <p className="img-desc">
                        Farmers working together to share knowledge, improve techniques, and adopt better farming strategies.
                    </p>
                    </div>
                </div>
                <div className="col-4 ps-4" id="img">
                    <div className = "img-card">
                    <img src="/media/images/farm06.jpg" 
                    alt="image06" style={{ width: "18rem", height: "12rem" }}></img>
                    <h5 className="img-title mt-2">Sustainable Crop Growth</h5>
                    <p className="img-desc">
                        Nurturing plants with care to ensure healthy growth and environmentally friendly farming practices.
                    </p>
                    </div>
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <Link to="/new" className="btn btn-success btn-lg px-5 py-3 fs-5 shadow rounded-pill" style={{ fontWeight: 600, transition: 'all 0.3s ease-in-out' }} onMouseOver={(e) => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 6px 12px rgba(40, 167, 69, 0.3)'; }} onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'; }}>
                        Start Detecting Plant Disease &rarr;
                    </Link>
                </div>
            </div>
            <hr></hr>
        </div>
     );
}

export default Hero;