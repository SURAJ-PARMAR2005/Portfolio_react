import './Projects.css'
import { assets } from '../../assets/assets'
const Projects = () => {
  return (
    <div id='projects' className='mywork'>
        <div className="title-box">
            <h1>My latest work</h1>
            <img src={assets.theme_pattern} alt="" />
        </div>

        <div className="mywork-container">
            <div className="project">
                <h2>Food Delivery Website</h2>
                <img src={assets.project1} alt="" />
                <div className="ancher-links">
                    <a href="https://food-del-frontend-cngi.onrender.com/" className="Live-Demo">LiveDemo</a>
                    <a href="https://github.com/SURAJ-PARMAR2005/food_delivery_website" className="github">GitHub</a>
                </div>
            </div>
            <div className="project">
                <h2>Medical Summarizer</h2>
                <img src={assets.project2} alt="" />
                <div className="ancher-links">
                    <a href="https://medical-summarizer-o9iw.onrender.com/" className="Live-Demo">LiveDemo</a>
                    <a href="https://github.com/SURAJ-PARMAR2005/Hack_LLM2" className="github">GitHub</a>
                </div>
            </div>
          
        </div>
      
    </div>
  )
}

export default Projects
