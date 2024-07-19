import React, { useState } from 'react';
import './Navbar.css';
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div className='navbar'>
      <div className='nav'>
        <p className='pf'>Portfolio</p>
        <div className={menuOpen ? 'navMenu' : ''}>
          <div className={`navElements ${menuOpen ? 'active' : ''}`}>
            <Link to='home' spy={true} smooth={true} offset={-200} duration={500} className='listItem' activeClass='active'>Home</Link>
            <Link to='about' spy={true} smooth={true} offset={-110} duration={500} className='listItem' activeClass='active'>About</Link>
            <Link to='skills' spy={true} smooth={true} offset={-80} duration={500} className='listItem' activeClass='active'>Skills</Link>
            <Link to='projects' spy={true} smooth={true} offset={-80} duration={500} className='listItem' activeClass='active'>Projects</Link>
            <Link to='contact' spy={true} smooth={true} offset={-80} duration={500} className='listItem' activeClass='active'>Contact</Link>
          </div>
        </div>
        <HiOutlineMenu className='menubtn' onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
