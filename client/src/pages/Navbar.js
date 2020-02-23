import React from "react";
import './Navbar.css';

function Navbar(){
    return(
        <div class = "menu-bar">
        
        <img id="imageLogo" src="https://i.imgur.com/h3g0P6f.png"></img>
       
        <a href="http://localhost:3000/volunteering">Volunteering </a>
        <a href="#staff">Staff </a>
        <a href="http://localhost:3000/contact">Contact Us </a>
        <a href="#about-us">About Us </a>
        <a href="#home">Home </a>
        
        <p>St Francis House, Inc</p>
      
      </div>
   
    );
}

export default Navbar;