import React from 'react'
import './footer.css'
import { GrLinkedin, GrGithub, GrTwitter } from 'react-icons/gr'

const Footer = () => {
  return (
    <footer id='portfolio'>
      <h3>MENTE DIGITAL CO</h3>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfoliobuild">Portfolio</a></li>
        <li><a href="#jobexperience">Job Experience</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/carlos-chiguichon/"><GrLinkedin/></a>
        <a href="https://github.com/CarlosChiguichon"><GrGithub/></a>
        <a href="https://twitter.com/chiguichon_"><GrTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;MENTE DIGITAL. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer