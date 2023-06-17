import React from 'react';
import './navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FaBook } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';
import { BsFillStarFill } from 'react-icons/bs';
import { BiText } from 'react-icons/bi';
import { MdBackspace } from 'react-icons/md';
import { TiStar } from 'react-icons/ti';
import { useState } from 'react';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
            
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaBook/></a>
            <a href="#testimonial" onClick={() => setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}><BsFillStarFill/></a>
            
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
            <a href="#Footer" onClick={() => setActiveNav('#Footer')} className={activeNav === '#Footer' ? 'active' : ''}>
                <BiText />
                <MdBackspace />
                <TiStar />
            </a>
        </nav>
    );
};

export default Navbar;
