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
            <div className="card-content">
              <p>HTML</p>
              <p>CSS</p>
              <p>REACT</p>
              <p>BOOTSTRAP</p>
            </div>
        </div>
        <div className="card card2">
            <h2>BACKEND</h2>
            <div className="card-content">
              <p>NODE.JS</p>
              <p>EXPRESS</p>
              <p>REST API'S</p>
              <p>SQL</p>
            </div>
        </div>
        <div className="card card3">
            <h2>LANGUAGES</h2>
            <div className="card-content">
              <p>PYTHON</p>
              <p>JAVASCRIPT</p>
              <p>C</p>
              <p>JAVA</p>
            </div>
        </div>
        <div className="card card4">
            <h2>TOOLS</h2>
            <div className="card-content">
              <p>GIT</p>
              <p>GITHUB</p>
              <p>VS CODE</p>
              <p>AWS</p>
              <p>FIGMA</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SlideTwo;