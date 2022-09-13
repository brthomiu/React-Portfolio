import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/brthomiu/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/brthomiu" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials