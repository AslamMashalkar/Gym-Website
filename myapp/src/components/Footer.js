import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../images/logo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>lorem20 wkjdhc we have tried to make our website at its best by applying various properties</p>
          <div className="footer__socials">
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebook /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter /></a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"><AiFillInstagram /></a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about" onClick={scrollToTop}>About</Link>
          <Link to="/plans" onClick={scrollToTop}>Plans</Link>
          <Link to="/trainers" onClick={scrollToTop}>Trainer</Link>
          <Link to="/gallery" onClick={scrollToTop}>Gallery</Link>
          <Link to="/contact" onClick={scrollToTop}>Contact</Link>
        </article>

        <article>
          <h4>Insights</h4>
          <Link to="/s" onClick={scrollToTop}>Blog</Link>
          <Link to="/s" onClick={scrollToTop}>Case Studies</Link>
          <Link to="/s" onClick={scrollToTop}>Events</Link>
          <Link to="/s" onClick={scrollToTop}>Communities</Link>
          <Link to="/s" onClick={scrollToTop}>FAQs</Link>
        </article>

        <article>
          <h4>Get In Touch</h4>
          <button onClick={() => { navigate('/contact'); scrollToTop(); }}>Contact Us</button>
          <button onClick={() => { navigate('/s'); scrollToTop(); }}>Support</button>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2023 ASLAM MASHALKAR &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
