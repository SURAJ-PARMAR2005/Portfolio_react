import './Hero.css';
import { assets } from '../../assets/assets';


import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
const Hero = ({cursorEnter,cursorLeave}) => {

 useGSAP(() => {
  gsap.from(".animate",{
    y:20,
    opacity:0,
    duration:0.5,
    delay:2.3,
    scale:0.2,
    display:"inline-block",
    transformOrigin:"left-bottom",
  })
 })

  return (
    <div id='home' className='hero'>
      <div className="profile_wrapper"> <img src={assets.profile_img} alt=" " className="profile_img" /></div>
     
      <h1><span className='animate'>I'm Suraj Parmar,</span>Full Stack Developer Based In India.</h1>
      <p>I am a student at G.L.BAJAJ Insitute of technology and management.</p>
      <div className="hero-action">
        <div className="hero-connect" onMouseEnter={() => cursorEnter("Github Profile")} onMouseLeave={cursorLeave}  >
            {/* <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact With Me</AnchorLink> */}
          <a className='anchor-link' href='https://github.com/SURAJ-PARMAR2005'>Github</a>
        </div>
        <a href={assets.resume} download={assets.resume} className="hero-resume" onMouseEnter={() => cursorEnter("See Resume")} onMouseLeave={cursorLeave}   >My Resume</a>
          
        
      </div>
    </div>
  )
}

export default Hero
