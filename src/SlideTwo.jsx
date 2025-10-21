import React from "react";
import "./App.css";
import yellowCar from "./assets/YellowCar.png";

import "./SlideTwo.css"

const SlideTwo = () => {
  return (
    <div className="SlideTwo">
        <div className="skills">
            <h2>SKILLS</h2>
        </div>
      <div className="SlideTwo_Content">
        <img src={yellowCar} alt="Yellow Car" className="yellowCar" />
      </div>
      <div className="cards">
        <div className="card card1">
            <h2>FRONTEND</h2>
        </div>
        <div className="card card2">
            <h2>BACKEND</h2>

        </div>
        <div className="card card3">
            <h2>LANGUAGES</h2>

        </div>
        <div className="card card4">
            <h2>TOOLS</h2>

        </div>

      </div>
    </div>
  );
};

export default SlideTwo;
