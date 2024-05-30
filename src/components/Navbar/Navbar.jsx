import { useState } from "react";
import "./Navbar.css"
import logo from "./../../assets/images/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  const [active, setactive] = useState(false);
  const navToggle = () => {
    setactive(!active);
  };
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav className="navbar">
        <div className='logo'>
          <img src={logo} alt="logo" />
          <span>Digital marketing agency</span>
        </div>
        <ul className={active ? "listActive list" : "list1 list"}>
          <li><a href="#" id="home" className={activeLink === 'Home' ? 'active' : ''}
            onClick={() => handleLinkClick('Home')}>Home</a></li>
          <li><a href="#Services" id="services" className={activeLink === 'services' ? 'active' : ''}
            onClick={() => handleLinkClick('services')}>Services</a></li>
          <li><a href="#Porttfolio" id="protfolio" className={activeLink === 'Porttfolio' ? 'active' : ''}
            onClick={() => handleLinkClick('Porttfolio')}>Portfolio</a></li>
          <li>
            <a href="#Clients" id="clients" className={activeLink === 'Clients' ? 'active' : ''}
              onClick={() => handleLinkClick('Clients')}>Clients &amp; Partners</a>
          </li>
          <li class="about">
            <a href="#About" id="about" className={activeLink === 'About' ? 'active' : ''}
              onClick={() => handleLinkClick('About')}>About Us</a>  <FontAwesomeIcon icon={faChevronDown} className="arrowabout" />
          </li>
          <li>
            <a href="#LetsTalk" id="talk" className={activeLink === 'LetsTalk' ? 'active' : ''}
              onClick={() => handleLinkClick('LetsTalk')}>Let's Talk</a>
          </li>
        </ul>
        <div onClick={navToggle} className={active ? "toggleActive" : "toggle"} >
          <FontAwesomeIcon icon={faBars} className="bars" />
        </div>
      </nav>
    </>
  );
}
export default Navbar