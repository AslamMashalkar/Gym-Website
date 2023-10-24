import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/main_header.png';
import './MainHeader.css';

const MainHeader = () => {
  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>#100DaysOfWorkOut</h4>
          <h1>Lets Join to Fitness World</h1>
          <p>
            Being physically active can improve your health and body. Let's Join to Fitness World. You can improve your Strength.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className='main__header-right'>
          <div className='main__header-circle'></div>
          <div className='main__header-image'>
            <img src={Image} alt='Main Header Image' />
          </div>
        </div>
      </div>

      {/* Sticky "Visit Us" button with smooth scrolling */}
      <div className="sticky-visit-button">
        <Link to="/direction" onClick={scrollToTop} className='btn lg'>
          Visit Us
        </Link>
      </div>
    </header>
  );
}

export default MainHeader;
