import { useRef } from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';


gsap.registerPlugin(useGSAP);

const App = () => {

  const mouseRef = useRef(null);
  const follow = (dets) => {
    gsap.to(mouseRef.current,{
      x:dets.clientX,
      y:dets.clientY,
      duration:0.6,
      // ease:"power3.out",
    });
  };

  const cursorEnter = (text) => {
    gsap.to(mouseRef.current,{
      scale:3,
      duration:0.3,
      ease:"power3.out",
    });
     gsap.to(".cursor-text",{
      opacity:1,
      duration:0.2,
    });
    document.querySelector(".cursor-text").innerHTML = text;
  };

  const cursorLeave = (text) => {
    gsap.to(mouseRef.current,{
      scale:1,
      duration:0.3,
      ease:"power3.out"
    });
    gsap.to("cursor-text",{
      opacity:0,
      duration:0.2,
    });
    document.querySelector(".cursor-text").innerHTML = "";
    
  }

  return (
    <div className='main' onMouseMove={follow} >
      <div className='cursor' ref={mouseRef} >
        <span className='cursor-text'></span>
      </div>
      <Navbar cursorEnter = {cursorEnter}
        cursorLeave = {cursorLeave}
      />
      <Hero
      cursorEnter = {cursorEnter}
      cursorLeave = {cursorLeave}
      />
      <About />
      <Projects
      cursorEnter = {cursorEnter}
      cursorLeave = {cursorLeave}
       />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
