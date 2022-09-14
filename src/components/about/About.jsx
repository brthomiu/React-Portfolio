import React from 'react'
import './about.css'
import ME from "../../assets/squareIcePortrait.png"
import {BsAwardFill} from 'react-icons/bs'


const About = () => {
  return (
    <section id="about">

      <h2>About Me</h2>

      <div className="container about__container">
      <div className="about__me">

        <div className="about__me-image">
          <img src={ME} alt="about me" />
        </div>

      </div>

        <div className="about__content">

          <div className="about__cards">

            <article className="about__card">
              <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>Not a lot</small>
            </article>

            <article className="about__card">
              <BsAwardFill className='about__icon'/>
              <h5>Favorite Smells</h5>
              <small>Gasoline and glue</small>
            </article>

            <article className="about__card">
              <BsAwardFill className='about__icon'/>
              <h5>Favorite Number</h5>
              <small>Don't have one</small>
            </article>

          </div>

          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni consequatur corporis nostrum quasi, doloremque laboriosam velit dolores consequuntur exercitationem veniam libero! Quas labore, officiis veritatis eaque illum obcaecati aliquam.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
    </div>

    </section>
  )
}

export default About