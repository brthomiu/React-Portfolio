import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import CV from "../../assets/BradThompson2022Resume.pdf";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>React</h4>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>NodeJS</h4>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>SQL</h4>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Python</h4>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Docker</h4>
            </article>
          </div>
        </div>

        <div className="experience__cv">
          <h3>Other Experience</h3>

          <div className="experience__content-cv">
            <a
              href={"https://www.codecademy.com/profiles/brthomiu"}
              download
              className="btn_experience"
              target="_blank"
              rel="noreferrer"
            >
              Codecademy
            </a>

            <a href={CV} download className="btn_experience">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
