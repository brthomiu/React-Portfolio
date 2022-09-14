import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/squareIcePortrait.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
     
        <h1>Brad Thompson</h1>
        <h5 className="text-light">Software, Data, & Operations Specialist</h5>
      
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>


      </div>
    </header>
  )
}

export default Header