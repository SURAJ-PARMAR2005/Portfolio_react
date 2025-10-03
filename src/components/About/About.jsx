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
            <img src={assets.about_profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae delectus ea dolores accusamus nihil suscipit saepe commodi sit veniam doloremque, reprehenderit laborum totam pariatur incidunt error, dolorum obcaecati modi?</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti corrupti repellat repudiandae mollitia cupiditate, eos ipsa, aperiam unde quidem odio, delectus minima incidunt sit praesentium ut ad debitis ipsum.</p>
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
