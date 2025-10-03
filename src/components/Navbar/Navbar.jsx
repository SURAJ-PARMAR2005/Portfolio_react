import './Navbar.css';
import {useRef, useState} from "react";
import {assets} from '../../assets/assets';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right="0";
  }
    const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
        <img src={assets.logo} className='nav-logo' alt=" " />
        <img src={assets.menu_open}  onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef}  className='nav-menu'>
          <img src={assets.menu_close} onClick={closeMenu} className='nav-mob-close' alt="" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home") }>Home</p></AnchorLink>{menu==="home"?<img src={assets.underline} alt="" />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about") }>About</p></AnchorLink>{menu==="about"?<img src={assets.underline} alt="" />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={() => setMenu("Projects") }>Projects</p></AnchorLink>{menu==="Projects"?<img src={assets.underline} alt="" />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("Contact") }>Contact</p></AnchorLink>{menu==="Contact"?<img src={assets.underline} alt="" />:<></>}</li>
        </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact With Me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
