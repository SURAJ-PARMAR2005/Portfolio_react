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
 useGSAP(() =>{

 })
  const follow = (dets) => {
    gsap.to(mouseRef.current,{
      x:dets.clientX,
      y:dets.clientY,
      duration:0.6,
      // ease:"power3.out",
    });
  }

  return (
    <div className='main' onMouseMove={follow} >
      <div className='cursor' ref={mouseRef} ></div>
      <Navbar/>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
