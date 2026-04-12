import React from 'react';
import Hero from './Hero';
import FAQ from './FAQ';
import Navbar from '../Navbar';
import Footer from '../Footer';
import "./image.css";
import Solution from './Solution';
import Space from './Space';
import Contributors from '../Contributors';
import WeatherInsights from './services/WeatherInsights';


function HomePage() {

    return ( 
        <>
            <Navbar/>
            <Hero/>
            <WeatherInsights/>
            <Space/>
            <Solution/>
            <FAQ/>
            <Contributors/>
            <Footer/>
        </>
     );
}

export default HomePage;