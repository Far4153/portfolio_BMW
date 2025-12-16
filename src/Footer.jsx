
import React from 'react';
import "./Footer.css";

const Footer = () => {
  // Function to open Gmail compose in a new tab
  const openGmailCompose = (e) => {
    e.preventDefault();
    const email = "farjanashaik153@gmail.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className='Footer'>
      <div className='left_f'>
        <p>2025 © FARJANA'S PORTFOLIO | ALL RIGHTS RESERVED</p>
      </div>

      <div className='right_f'>
        <div className='mail-icon'>
        <a 
          href="mailto:farjanashaik153@gmail.com"
          onClick={openGmailCompose}
          style={{ pointerEvents: "auto", cursor: "pointer" }}
        >
          <i className="fa-regular fa-envelope" style={{color:"white"}}></i>
        </a>          
        </div>
        <p>CLICK ON ENVELOPE TO GET IN TOUCH WITH ME</p>
      </div>
    </div>
  );
};

export default Footer;