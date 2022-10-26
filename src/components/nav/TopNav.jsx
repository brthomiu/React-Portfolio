/* eslint-disable jsx-a11y/anchor-is-valid */
import "./nav.css";
import { FaUserAlt, FaBook, FaListAlt } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import React from "react";

//Fixed top navbar for desktop and tablets.

const TopNav = () => {
  return (
    <nav className="topNav">
      <a href="#" className="topNavLink">
        <FaUserAlt />
        <h5 className="topNavText">About</h5>
      </a>

      <a href="#portfolio" className="topNavLink">
        <FaBook />
        <h5 className="topNavText">Projects</h5>
      </a>

      <a href="#experience" className="topNavLink">
        <FaListAlt />
        <h5 className="topNavText">Experience</h5>
      </a>

      <a href="#contact" className="topNavLink">
        <RiMailFill />
        <h5 className="topNavText">Contact</h5>
      </a>
    </nav>
  );
};

export default TopNav;
