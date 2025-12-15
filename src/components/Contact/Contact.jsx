import './Contact.css'
import { assets } from '../../assets/assets'

const Contact = ({cursorEnter,cursorLeave}) => {

   const onSubmit = async (event) => {
    // console.log("form attempt to submit");
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9b5d327a-2d1e-493f-b220-f8b85ee23bc0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={assets.theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Lets Talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={assets.mail_icon} alt="" />
                    <p>ec23096@glbitm.ac.in</p>
                </div>
                <div className="contact-detail">
                    <img src={assets.call_icon} alt="" />
                    <p>+91 8708097515</p>
                </div>
                <div className="contact-detail">
                    <img src={assets.location_icon} alt="" />
                    <p>Greater Noida,UP,India</p>
                </div>
            </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder='Enter your name' name='name' required />
            <label htmlFor="email">Your Email</label>
            <input type="email"id="email" placeholder='Enter your gmail' name="email" required />
            <label htmlFor="message">Write Your Message Here</label>
            <textarea name="message" id="message" rows="8" placeholder='Enter your Message' required ></textarea>
            <button type="submit" className="contact-submit"  onMouseEnter={() => cursorEnter("Send It")} onMouseLeave={cursorLeave}>Submit now</button>
        </form>
      </div>
      </div>
  )
}

export default Contact
