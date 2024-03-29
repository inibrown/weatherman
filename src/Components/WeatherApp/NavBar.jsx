// NavBar.jsx

import React from 'react';
import './NavBar.css';

import rotatingSunIcon from '../Assets/images.png';

const NavBar = () => {
  const portfolioUrl = 'https://inibrown.com'; // Replace with your actual portfolio URL

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={rotatingSunIcon} alt="Rotating Sun" className="rotating-sun" />
        <h2>WILL D'WEATHERMAN</h2>
      </div>
      <div className="portfolio-link">
        <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
          <button>Portfolio</button>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
