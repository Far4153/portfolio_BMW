import React from "react";
import "./SlideThree.css"
import BMW_M3 from "./assets/M3.png";
import Bloodbank from "./assets/Blood-bank_Wallpaper.png";
import LocationTracker from "./assets/Location-tracker_Wallpaper.png";
import EBike from "./assets/E-bike_Wallpaper.png";
import Footer from "./Footer.jsx";



const SlideThree =()=>{
    return (
        <div className="SlideThree">
            <div className="projects">
            <h2>PROJECTS</h2>
            </div>
            <div className="SlideThree_Content">
                <div className="cards">
                    <div className="card cardA">
                        <h2>BLOODBANK</h2>
                        <div className="card-content">
                            <div className="thumbnails">
                                <img src={Bloodbank}></img>

                            </div>
                            <a className="links" href="https://far4153.github.io/Blood_bank1/">LINK</a>
                            
                        </div>
                    </div>
                    <div className="card cardB">
                        <h2>E-BIKE WEBSITE</h2>
                        <div className="card-content">
                            <div className="thumbnails">
                                <img src={EBike}></img>

                            </div>
                            <a className="links" href="https://far4153.github.io/E_Bike_2.0/">LINK</a>

                        </div>
                    </div>
                    <div className="card cardC">
                        <h2>LOCATION TRACKER</h2>
                        <div className="card-content">
                            <div className="thumbnails">
                                <img src={LocationTracker}></img>
                            </div>
                            <a className="links" href="https://zidio-49-location-tracker-app.netlify.app/">LINK</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="BMW_M3">
                <img src={BMW_M3}></img>

            </div>

        <Footer/>
        </div>
    )
}

export default SlideThree;