import React from 'react';
import Hero from './Hero';
import FAQ from './FAQ';
import Navbar from '../Navbar';
import Footer from '../Footer';
import "./image.css";
import Solution from './Solution';
import Space from './Space';


function HomePage() {

    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Space/>
            <Solution/>
            <FAQ/>
            <Footer/>
        </>
     );
}

export default HomePage;