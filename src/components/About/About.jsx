import './About.css';
import {assets} from "../../assets/assets"
const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
        <img src={assets.theme_pattern} alt="" />
      </div>

      <div className="about-section">
        <div className="about-left">
            <img src={assets.profile_img} alt="" />

        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m Suraj — a full-stack web developer who enjoys building user-centered websites and web apps. I prefer clean, maintainable code and fast performance, and I’m always iterating on UI details to make interfaces feel a little more human. I like working with HTML, CSS, and JavaScript and I’m constantly learning new libraries and tools to stay sharp.</p>
                 <p>When I need a break from the screen, I play basketball and explore new technologies — both keep my problem-solving fresh. If you want someone who can ship reliable front-end work and thinks about UX, performance, and scalability, let’s talk.</p>
            </div>
          
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p>
                    <hr style={{width:'70%'}} />
                </div>
                <div className="about-skill">
                    <p>Javascript</p>
                    <hr style={{width:'60%'}}/>            
                     </div>
                <div className="about-skill">
                    <p>React</p>
                    <hr style={{width:'70%'}} />
                </div>
                <div className="about-skill">
                    <p>Node js</p>
                    <hr style={{width:'60%'}} />
                </div>
                <div className="about-skill">
                    <p>Express js</p>
                    <hr style={{width:'70%'}} />
                </div>
                <div className="about-skill">
                    <p>MongoDB</p>
                    <hr style={{width:'50%'}} />
                </div>
                 <div className="about-skill">
                    <p>Socket.io</p>
                    <hr style={{width:'50%'}} />
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default About
