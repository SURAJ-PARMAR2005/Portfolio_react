import './Hero.css';
import { assets } from '../../assets/assets';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={assets.profile_img} alt=" " className="profile_img" />
      <h1><span>I'm Suraj Parmar,</span>Full Stack Developer Based In India.</h1>
      <p>I am a student at G.L.BAJAJ Insitute of technology and management.</p>
      <div className="hero-action">
        <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact With Me</AnchorLink>
        </div>
        <a href={assets.resume} download={assets.resume} className="hero-resume">My Resume</a>
          
        
      </div>
    </div>
  )
}

export default Hero
