import React from 'react'
import './portfolio.css'
import taskList from '../../assets/taskList1.png'
import nextTech from '../../assets/nextTech.png'


const Portfolio = () => {
  return (

    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="portfolio">

        <div className="container portfolio__container">

            <article className="portfolio__item">
              <img src={taskList} className="portfolio__item-image" alt="Task list" />        
              <h2>Full Stack Task List</h2>
              <h4>Full stack task list webapp using NodeJS, React, Express API, and MongoDB. Uses Redux for state management and JWT for authentication.</h4>
              <div className="portfolio__buttons">
                <a href="https://github.com/brthomiu/Full-Stack-Task-List" className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href="https://restfulmern2022.herokuapp.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
        </div>

        <div className="container portfolio__container">

        <article className="portfolio__item">
              <img src={nextTech} className="portfolio__item-image" alt="Task list" />        
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