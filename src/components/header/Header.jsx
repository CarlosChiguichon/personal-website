import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Hero from './Hero'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Carlos Chiguichón</h1>
        <h5 className='text-light'>Web developer && IT specialist</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <Hero/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header