import React from 'react';
import Hero from './Hero';
import FAQ from './FAQ';
import Navbar from '../Navbar';
import Footer from '../Footer';
import "./image.css";
function HomePage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <FAQ/>
            <Footer/>
        </>
     );
}

export default HomePage;