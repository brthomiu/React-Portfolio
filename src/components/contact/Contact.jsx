import React, { useRef } from "react";
import "./contact.css";
import { RiMailFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_swrskmv",
        "template_mklinln",
        form.current,
        "S15WfxHlhRKwh2DbG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <RiMailFill className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:brthomiu@gmail.com">brthomiu@gmail.com</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/brthomiu/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/brthomiu
            </a>
          </article>
        </div>
        <div className="contact__form">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="text" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
