import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import Logo from '../images/logo.png';
import { links } from '../data';
import { FaBars } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav>
      <div className='container nav__container'>
        <Link to="/" className='logo' onClick={() => { setIsNavShowing(false); scrollToTop(); }}>
          <img src={Logo} alt="Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} onClick={() => { setIsNavShowing(prev => !prev); scrollToTop(); }}>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <button className='nav__button' onClick={() => setIsNavShowing(prev => !prev)}>
          {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
