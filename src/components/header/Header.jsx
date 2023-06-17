import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/raymond.jpg'
import HeaderSocial from './HeaderSocials'


const Header = () => {
  return (
  <header>
    <div className="container header_container">
      <h5> Hello  I'm</h5>
      <h1> Kongnyuy Raymond Afoni</h1> 
      <h5 className="text-light">Software Engineering Student</h5>
      <CTA />
      <HeaderSocial />
      


      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll__down'> Scroll Down</a>
      
    </div>
     </header>

  )
}

export default Header