import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className='header_name'>About Us</h3>
          <p className='about_us'>Your go-to store for all festive needs. Shop with us for the latest trends and offers.</p>
        </div>
        
        <div className="footer-section links">
          <h3 className='header_name'>Quick Links</h3>
          <ul>
            <li className='links_name'><a href="#home">Home</a></li>
            <li className='links_name'><a href="#shop">Shop</a></li>
            <li className='links_name'><a href="#about">About</a></li>
            <li className='links_name'><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3 className='header_name'>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p >&copy; 2024 YourBrand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
