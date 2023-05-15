import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import me from '../../assets/raymond.jpg'
import HeaderSocial from './HeaderSocial' //import of headerSocial component
export const Header = () => {
return (
<header>
<div className='container header__container'>
<h5>Welcome.. with you here I am</h5>
<h1>KONGNYUY RAYMOND AFONI</h1>
<h5 className='text-light'>Network Engineer</h5>
<CTA/>
<HeaderSocial/>
<div className='my_image'>
<img src={me} alt='my image'/>
</div>
<a href='#contact' className='scroll__down'>Scroll down</a>
</div>
</header>
)
}
export default Header;