import React, { useEffect, useState } from 'react';

import "./App.css";
import heroImage from "./assets/heroImage.png";
import headLight from "./assets/Role.png";
import Navbar from "./Navbar.jsx";

const HeroSection = () => {
  const [showHeadlight, setShowHeadlight] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowHeadlight(true);
      
    },3000)
;
return()=> clearTimeout(timer);  },[])



  return (
    <div className={`HeroSection ${showHeadlight ? "active" : ""}`}>
      <div className='Head'>
      <Navbar/>
        
          <h4>THIS IS</h4>
          
          <h1>FARJANA</h1>


      <div className='Hero_image_wrapper'> 
        <div className='Hero_image'>
         
          <img src={showHeadlight ? headLight : heroImage}></img>
        </div>
      </div>
      </div>

  </div>
  );
};

export default HeroSection;