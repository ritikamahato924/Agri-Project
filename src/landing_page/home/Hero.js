import React from 'react';

function Hero() {
    return ( 
        
        <div className="container text-center mb-5" style={{ marginTop: "100px" }}>
            <div className="hover-underline heading">“Join India’s Growing Agri Community”<br></br>
                </div>
            <div className="row up-image">
                <div className="col-4" id="img">
                    <img src="/media/images/farm01.jpg" 
                    alt="image01" style={{ width: "18rem", height: "12rem" }}></img>
                </div>
                <div className="col-4 ps-3" id="img">
                    <img src="/media/images/farm02.jpg" 
                    alt="image02" style={{ width: "18rem", height: "12rem" }}></img>
                </div>
                <div className="col-4 ps-4" id="img">
                    <img src="/media/images/farm03.avif" 
                    alt="image03" style={{ width: "18rem", height: "12rem" }}></img>
                </div>
            </div>
            <div className="row down-image">
                <div className="col-4" id="img">
                    <img src="/media/images/farm04.jpeg" 
                    alt="image04" style={{ width: "18rem", height: "12rem" }}></img>
                </div>
                <div className="col-4 ps-3" id="img">
                    <img src="/media/images/farm05.webp" 
                    alt="image05" style={{ width: "18rem", height: "12rem" }}></img>
                </div>
                <div className="col-4 ps-4" id="img">
                    <img src="/media/images/farm06.jpg" 
                    alt="image06" style={{ width: "18rem", height: "12rem" }}></img>
                </div>
            </div>

        </div>
     );
}

export default Hero;