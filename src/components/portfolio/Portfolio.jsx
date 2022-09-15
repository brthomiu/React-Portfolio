import React from 'react'
import './portfolio.css'
import taskList1 from '../../assets/taskList1.png'
import taskList2 from '../../assets/taskList2.png'
import taskList3 from '../../assets/taskList3.png'



// import Swiper core and required modules

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const Portfolio = () => {
  return (

    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="portfolio">

        <div className="container portfolio__container">

            <article className="portfolio__item">
              <Swiper 
              modules={[Navigation]} 
              slidesPerView={1} 
              navigation

              className="portfolio__item-image">

                <SwiperSlide><img src={taskList1} alt="Task list 1" /></SwiperSlide>
                <SwiperSlide><img src={taskList2} alt="Task list 2" /></SwiperSlide>
                <SwiperSlide><img src={taskList3} alt="Task list 3" /></SwiperSlide>
              
              </Swiper>
              <h2>MERN Task List</h2>
              <h4>Corporis nostrum quasiLorem ipsum dolor sit amet consectetur isicing elit. Enim magni consequatur corporis nostrum quasi</h4>
              <div className="portfolio__buttons">
                <a href="https://github.com/brthomiu/TaskList" className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href="https://restfulmern2022.herokuapp.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
        </div>

        <div className="container portfolio__container">

            <article className="portfolio__item">
            <Swiper 
              modules={[Navigation]} 
              slidesPerView={1} 
              navigation

              className="portfolio__item-image">

                <SwiperSlide><img src={taskList1} alt="Task list 1" /></SwiperSlide>
                <SwiperSlide><img src={taskList2} alt="Task list 2" /></SwiperSlide>
                <SwiperSlide><img src={taskList3} alt="Task list 3" /></SwiperSlide>
              
              </Swiper>
              <h2>MERN Task List</h2>
              <h4>Corporis nostrum quasiLorem ipsum dolor sit amet consectetur isicing elit. Enim magni consequatur corporis nostrum quasi</h4>
              <div className="portfolio__buttons">
                <a href="https://github.com/brthomiu/TaskList" className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href="https://restfulmern2022.herokuapp.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>

        </div>

      </div>     

    </section>

  )
}

export default Portfolio