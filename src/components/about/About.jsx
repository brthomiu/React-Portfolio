import React from 'react'
import './about.css'
import ME from "../../assets/iconPortrait.png"
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
              <small>• Frontend<br/>• Backend<br/>• Operations<br/>• Design</small>
            </article>

            <article className="about__card">
              <BsAwardFill className='about__icon'/>
              <h5>Languages</h5>
              <small>• HTML<br/>• CSS<br/>• JavaScript<br/>• Python</small>
            </article>

            <article className="about__card">
              <BsAwardFill className='about__icon'/>
              <h5>Hobbies</h5>
              <small>• Music<br/>• Cooking<br/>• Gardening<br/>• Gaming</small>
            </article>

          </div>

          <p>
          Whether writing code, designing webapps, or creating multimedia content, my passion is using technology to turn ideas into reality. <br/><br/>
          
          I also enjoy creating digital art and music. I love using new tools and software, and I am fascinated by AI and generative art.<br/><br/>
          
          When I'm not at the computer you can find me in the kitchen cooking and baking, in the garden pulling weeds, or in the garage tinkering with tools and electronics. 
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
    </div>

    </section>
  )
}

export default About