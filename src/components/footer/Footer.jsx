/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'



const Footer = () => {
  return (

      <div className="footer__bar">

      <div className="footer__bar-left">

        <a href="https://www.linkedin.com/in/brthomiu/" target="_blank" rel="noreferrer" className='footer__bar-link'>
          <BsLinkedin className='footer__bar-icon'/>
          <h5 className='footer__bar-text'>LinkedIn</h5>
        </a>

        <a href="https://github.com/brthomiu" target="_blank" rel="noreferrer" className='footer__bar-link'>
          <BsGithub className='footer__bar-icon'/>
          <h5 className='footer__bar-text'>GitHub</h5>
        </a>

      </div>

      <div className="footer__bar-right">

        <a href="#contact" className='footer__bar-link'>
          <h5 className='footer__bar-text'>Brad Thompson 2022</h5>
        </a>

      </div>

      </div>

  )
}

export default Footer