import React from 'react'
import './header.css'
import CTA from './CTA'
import ME1 from '../../assets/squareIconPortrait.png'
import ME2 from '../../assets/skillsImage.png'
import ME3 from '../../assets/skillsImage2.png'

import HeaderSocials from './HeaderSocials'

// import Swiper core and required modules

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
     
        <h1>Brad Thompson</h1>
        <h5 className="text-light">Software, Data, & Operations Specialist</h5>
      
        <CTA />

        <HeaderSocials />

        <div className="me">
        <Swiper 
              modules={[Autoplay]} 
              slidesPerView={1} 
              autoplay={{delay: 4000}}
              instanceName='headerSwiper'
              className="me__swiper">

                <SwiperSlide><img src={ME1} alt="Me" /></SwiperSlide>
                <SwiperSlide><img src={ME2} alt="My skills" /></SwiperSlide>
                <SwiperSlide><img src={ME3} alt="More of my skills" /></SwiperSlide>
              
              </Swiper>
        </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>


      </div>
    </header>
  )
}

export default Header