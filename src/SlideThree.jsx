import React from "react";
import "./SlideThree.css"
import BMW_M3 from "./assets/BMW_M3.png";



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

                            </div>
                            <a className="links">LINK</a>
                            
                        </div>
                    </div>
                    <div className="card cardB">
                        <h2>E-BIKE WEBSITE</h2>
                        <div className="card-content">
                            <div className="thumbnails">

                            </div>
                            <a className="links">LINK</a>

                        </div>
                    </div>
                    <div className="card cardC">
                        <h2>LOCATION TRACKER</h2>
                        <div className="card-content">
                            <div className="thumbnails">

                            </div>
                            <a className="links">LINK</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="BMW_M3">
                <img src={BMW_M3}></img>

            </div>

        </div>
    )
}

export default SlideThree;