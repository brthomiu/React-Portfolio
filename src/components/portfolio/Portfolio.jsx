import React from 'react'
import './portfolio.css'
import taskList from '../../assets/taskList1.png'
import taskList2 from '../../assets/taskList2.png'
import taskList3 from '../../assets/taskList3.png'
import nextTech from '../../assets/nextTech.png'
import nextTech2 from '../../assets/nextTech2.png'

// import Swiper core and required modules

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Portfolio = () => {
  return (

    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="portfolio">

        <div className="container portfolio__container">

            
              
              <Swiper 
                modules={[Navigation, Pagination, A11y]} 
                slidesPerView={1} 
                nagivation
                pagination={{clickable: true}}
                instanceName='portfolioSwiper'
                className="portfolio__swiper">
              
                  <SwiperSlide>
                    <img src={taskList} className="portfolio__item-image" alt="Task list" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={taskList2} className="portfolio__item-image" alt="Task list" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={taskList3} className="portfolio__item-image" alt="Task list" />
                  </SwiperSlide>
              

              </Swiper>
              <article className="portfolio__item">
              <h2>Full Stack Task List</h2>
              <h4>Full stack task list webapp using NodeJS, React, Express API, and MongoDB. Uses Redux for state management and JWT for authentication.</h4>
              <div className="portfolio__buttons">
                <a href="https://github.com/brthomiu/Full-Stack-Task-List" className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href="https://restfulmern2022.herokuapp.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
        </div>

        <div className="container portfolio__container">

          <Swiper 
            modules={[Navigation, Pagination, A11y]} 
            slidesPerView={1} 
            nagivation
            pagination={{clickable: true}}
            instanceName='portfolioSwiper'
            className="portfolio__swiper">

            <SwiperSlide>
              <img src={nextTech} className="portfolio__item-image" alt="Responsive Webpage" />    
            </SwiperSlide>
            <SwiperSlide>
              <img src={nextTech2} className="portfolio__item-image" alt="Responsive Webpage" />    
            </SwiperSlide>

          </Swiper>
              
              <article className="portfolio__item">
              <h2>Responsive Webpage</h2>
              <h4>Responsive webpage made with HTML, CSS, and JavaScript.</h4>
              <div className="portfolio__buttons">
                <a href="https://github.com/brthomiu/Responsive-Webpage" className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href="https://brthomiu.github.io/Responsive-Webpage/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>

        </div>

      </div>     

    </section>

  )
}

export default Portfolio