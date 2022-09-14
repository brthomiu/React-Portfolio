/* eslint-disable jsx-a11y/anchor-is-valid */
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt, FaBook, FaHandsHelping} from 'react-icons/fa'
import {RiMailFill} from 'react-icons/ri'
import React from 'react'

const TopNav = () => {

     return (


      <nav className='topNav'>
    
         <a href="#" className='topNavLink'>
        <AiFillHome />
        <h5 className='topNavText'>Home</h5>
        </a>

        <a href="#about" className='topNavLink'>
          <FaUserAlt />
          <h5 className='topNavText'>About</h5>
        </a>
  
        <a href="#experience" className='topNavLink'>
          <FaBook />
          <h5 className='topNavText'>Experience</h5>
        </a>
  
        <a href="#portfolio" className='topNavLink'>
          <FaHandsHelping />
          <h5 className='topNavText'>Portfolio</h5>
        </a>
        
        <a href="#contact" className='topNavLink'>
          <RiMailFill />
          <h5 className='topNavText'>Contact</h5>
        </a>
  
      </nav>


    )
  }

export default TopNav

