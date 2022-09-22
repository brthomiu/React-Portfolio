/* eslint-disable jsx-a11y/anchor-is-valid */
import './nav.css'
import {FaUserAlt, FaBook, FaListAlt} from 'react-icons/fa'
import {RiMailFill} from 'react-icons/ri'
import { React, useState} from 'react'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    
    <nav className='floatingNav'>


      <a href="#" 
      onClick={() => setActiveNav('#')} 
      className={activeNav === '#' ? 'active' : ''}>
        <FaUserAlt />
      </a>

      <a href="#experience" 
      onClick={() => setActiveNav('#experience')} 
      className={activeNav === '#experience' ? 'active' : ''}>
        <FaListAlt />
      </a>

      <a href="#portfolio" 
      onClick={() => setActiveNav('#portfolio')} 
      className={activeNav === '#portfolio' ? 'active' : ''}>
        <FaBook />
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