import React, { useState } from 'react';

import "./Navbar.css";


const Navbar=()=>{
    return (
        <div className='Navbar'>
            <a href='https://www.linkedin.com/in/far413'>
            <i className="fa-brands fa-linkedin" style={{color: "white"}}></i>
            </a>
            <a href='https://github.com/Far4153'>
            <i className="fa-brands fa-github"></i>
            </a>
            <a href='https://leetcode.com/u/far4/'>
            <i class="fa-solid fa-code" style={{color: "#ffffff"}}></i>
            </a>
            
        </div>
    );

};

export default Navbar;