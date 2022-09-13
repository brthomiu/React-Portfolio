import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {RiMailFill} from 'react-icons/ri'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/brthomiu/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/brthomiu" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="#contact" target="_blank" rel="noreferrer"><RiMailFill /></a>
    </div>
  )
}

export default HeaderSocials