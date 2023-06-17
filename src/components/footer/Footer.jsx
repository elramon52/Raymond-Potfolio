import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaTelegram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Kongnyuy Raymond Afoni
      </a>
      <ul className="permalinks">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </ul>
      <div className="footer_socials">
        <a href="http://facebook.com">
          <FaFacebookF />
        </a>
        <a href="http://instagram.com">
          <FaInstagram />
        </a>
        <a href="http://twitter.com">
          <IoLogoTwitter />
        </a>
        <a href="https://telegram.me/elramon52">
          <FaTelegram />
        </a>
        <a href="https://wa.me/+237680727528">
          <FaWhatsapp />
        </a>
        <a href="https://github.com/elramon52">
          <FaGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; El-Ramon-King-Jr. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
