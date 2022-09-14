/* eslint-disable jsx-a11y/anchor-is-valid */
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt, FaBook, FaHandsHelping} from 'react-icons/fa'
import {RiMailFill} from 'react-icons/ri'
import { React, useState} from 'react'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    
    <nav className='floatingNav'>

      <a href="#"
      onClick={() => setActiveNav('#')}
      className={ activeNav === '#' ? 'active' : '' }>
        <AiFillHome />
      </a>

      <a href="#about" 
      onClick={() => setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active' : ''}>
        <FaUserAlt />
      </a>

      <a href="#experience" 
      onClick={() => setActiveNav('#experience')} 
      className={activeNav === '#experience' ? 'active' : ''}>
        <FaBook />
      </a>

      <a href="#portfolio" 
      onClick={() => setActiveNav('#portfolio')} 
      className={activeNav === '#portfolio' ? 'active' : ''}>
        <FaHandsHelping />
      </a>
      
      <a href="#contact" 
      onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}>
        <RiMailFill />
      </a>

    </nav>
  )
}

export default Nav