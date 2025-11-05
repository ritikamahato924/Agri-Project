import React from 'react';
import "./index";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

function PageSolution() {
    return (
        <>
        <Navbar/>
        <div className='container mt-5'>
            <div className="maincontainer mt-5">
                <div className="back">
                    <h5>Symptoms:</h5>
                    <p>White powdery layer appears on leaves and stems, leaves turn yellow and fall early.
                        What farmers used: Sprays of Hexaconazole, Tebuconazole, or Propiconazole fungicides.
                        These stopped the fungal growth and cleared the white layer within 5–7 days.
                        Extra tip: Keep the crop spacing wide for good air flow, avoid too much nitrogen fertilizer, and in mild cases use neem oil or baking soda spray as an organic option.</p>
                </div>
                <div className="front">
                    <div className="image">
                        <img src="/media/images/sol1.jpg" />
                        <h6><i>Common in wheat, bajra, and vegetables</i></h6>
                    </div>
                </div>
            </div>

            <div className="maincontainer mt-5">
                <div className="back">
                    <h5>Symptoms:</h5>
                    <p>Brown or black spots on leaves and fruits, rotting starts, spreads fast during wet weather.
                        What farmers used: Mancozeb + Metalaxyl or Cymoxanil + Mancozeb fungicide mixtures.
                        They work both as protective and curative sprays.
                        Extra tip: Use healthy seed tubers, avoid waterlogging, remove infected plants, and spray before rainy periods
                        to prevent infection.</p>
                </div>
                <div className="front">
                    <div className="image">
                        <img src="/media/images/sol02new.jpg" />
                        <h6><i>Late Blight – Potato and Tomato disease</i></h6>
                    </div>
                </div>
            </div>

            <div className="maincontainer mt-5">
                <div className="back">
                    <h5>Symptoms:</h5>
                    <p>Dead heart (center leaf dries), holes in stem, panicle damage.
                        What farmers used: Sprays of Chlorantraniliprole (Coragen), Cartap hydrochloride, or Fipronil at the early larval stage.
                        Also used pheromone traps and released Trichogramma bio-agents to control egg-laying.
                        Extra tip: Keep fields drained for a few days, destroy stubble after harvest, and avoid unnecessary
                        chemical sprays unless pest level is high..</p>
                </div>
                <div className="front">
                    <div className="image">
                        <img src="/media/images/sol03new.jpg" />
                        <h6><i>Stem Borer – Rice (paddy)</i></h6>
                    </div>
                </div>
            </div>

            <div className="maincontainer second-card mt-4">
                <div className="back">
                    <h5>Symptoms:</h5>
                    <p>Leaves curl and become sticky due to “honeydew,” plant looks weak, sometimes transmits viral diseases.
                        What farmers used: Imidacloprid or Thiamethoxam insecticides gave fast control.
                        Some farmers used neem-based sprays (Azadirachtin) successfully to avoid harming beneficial insects.
                        Extra tip: Don’t overuse chemical sprays — protect natural enemies like ladybird beetles and lacewings.
                        Neem oil or soap water also helps in light attack.</p>
                </div>
                <div className="front">
                    <div className="image">
                        <img src="/media/images/sol04new.jpg" />
                        <h6><i>Aphids – Cotton, vegetables, and fruits</i></h6>
                    </div>
                </div>
            </div>

            <div className="maincontainer second-card mt-4">
                <div className="back">
                    <h5>Symptoms:</h5>
                    <p>New shoots dry, flowers fall off, fruits become deformed or hollow inside.
                        What farmers used: Boron fertilizers like Borax or Solubor through foliar spray (1–1.5 g per liter water).
                        This helped new flowers and fruits grow normally again.
                        Extra tip: Always do a soil test before applying — excess boron can cause toxicity.</p>
                </div>
                <div className="front">
                    <div className="image">
                        <img src="/media/images/sol07new.jpg" />
                        <h6><i>Boron Deficiency – Tomatoes, fruits, pulses, maize</i></h6>
                    </div>
                </div>
            </div>

            <div className="maincontainer seemore">
                <div className="back">
                    
                    <h3>Update soon!</h3>
                </div>
                <div className="front">
                    <div className="image">
                        <img src="/media/images/seemore.png" />
                        <h6><i></i></h6>
                    </div>
                </div>
            </div>


        </div>
        
        </>
    )
}

export default PageSolution;