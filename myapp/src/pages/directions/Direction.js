import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './direction.css';

const Direction = () => {
 

  return (
    <section>
      <div className="container direction__container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8537146595086!2d73.07296877495467!3d19.070168302156105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1eff0c2b683%3A0x7acfea1c20881b62!2sEKRAM%20HERITAGE%2C%20Vande%20Mataram%20Path%2C%20Sector%2035E%2C%20Kharghar%2C%20Navi%20Mumbai%2C%20Maharashtra%20410210!5e0!3m2!1sen!2sin!4v1698119293787!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

     
      
    </section>
  );
};

export default Direction;
