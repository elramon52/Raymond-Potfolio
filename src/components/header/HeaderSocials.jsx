import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { CgTwitter } from 'react-icons/cg';
import { FaTelegram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';


const headerSocials = () => {
  return (
    <div className='header__socials'>

        <a href="https://linkedin.com/elramon52" target="_blank" rel ="noopener noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/elramon52" target="_blank" rel ="noopener noreferrer" ><FaGithub /></a>
        <a href='https://telegram.me/elramon52' target='blank'><FaTelegram /></a>
      <a href='https://wa.me/+237680727528' target='blank'><FaWhatsapp /></a>

    </div>
  )
}

export default headerSocials