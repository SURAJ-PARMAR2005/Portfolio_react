import './Hero.css';
import { assets } from '../../assets/assets';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Hero = () => {
  useGSAP(() =>{
    gsap.from
  })
  return (
    <div id='home' className='hero'>
      <div className="profile_wrapper"> <img src={assets.profile_img} alt=" " className="profile_img" /></div>
     
      <h1><span>I'm Suraj Parmar,</span>Full Stack Developer Based In India.</h1>
      <p>I am a student at G.L.BAJAJ Insitute of technology and management.</p>
      <div className="hero-action">
        <div className="hero-connect">
            {/* <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact With Me</AnchorLink> */}
          <a className='anchor-link' href='https://github.com/SURAJ-PARMAR2005'>Github</a>
        </div>
        <a href={assets.resume} download={assets.resume} className="hero-resume">My Resume</a>
          
        
      </div>
    </div>
  )
}

export default Hero
