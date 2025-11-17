import React, { useState } from 'react';

import "./App.css";
import heroImage from "./assets/HeroImage.png";
import headLight from "./assets/Role.png";
import Navbar from "./Navbar.jsx";

const HeroSection = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick  = () => setClicked(!clicked);

  return (
    <div className= {`HeroSection ${clicked ? "active" : ""}`}>
      <div className='Head'>
      <Navbar/>
        
          <h4>THIS IS</h4>
          
          <h1>FARJANA</h1>


        
      <div className='Hero_image' onClick={handleClick}>
        {clicked && <h4 className="letterA">A</h4>}
        <img src={clicked ? headLight : heroImage}></img>

      </div>
      </div>

  </div>
  );
};

export default HeroSection;