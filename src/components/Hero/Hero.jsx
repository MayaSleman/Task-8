import "./Hero.css"
import heroFooter from "./../../assets/images/fotter.svg"
import FooterMobile from "./../../assets/images/footer-mobile.png"
import gameBoy from "./../../assets/images/gameBoy-min.png"
import gamefor from "./../../assets/images/gamefor-mobile.png"
import pattren from "./../../assets/images/pattren.png"
import pressStart from "./../../assets/images/pressStart.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faComputerMouse } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
function Hero() {
    return (
        <>
            <div className="hero">
                <div className="heroText container">
                    <h1>Hey !! Mario still here, But don’t forget that</h1>
                    <p>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
                        Branding, Digital Marketing, Web/App Development, Ui/Ux
                        Content creation, Graphic design, Social media and More........
                        So you can take a tour in our website, OR just <span className="PressStart"> Press Start :)</span></p>
                </div>
                <a href="http://focal-x.com/mario" className="start">START</a>
                <img src={pattren} alt="pattren" className="pattrens" />
                <img src={gameBoy} alt="gameBoy" className="gameBoy" />
                <img src={gamefor} alt="gamefor" className="gamefor" />
                <img src={pressStart} alt="pressStart" className="pressStart" />
                <img src={heroFooter} alt="heroFooter" className="heroFooter" />
                <img src={FooterMobile} alt="FooterMobile" className="FooterMobile" />
                <div className="textFooter container">
                    <p className="experience">Get better experience Use web browser</p>
                    <div className="icons">
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} className="icon" /></a>
                        <a href="#"><FontAwesomeIcon icon={faBehance} className="icon" /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="icon" /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
                    </div>
                    <div className="scroll">
                        <FontAwesomeIcon icon={faComputerMouse} size="xl" />
                        <FontAwesomeIcon icon={faChevronDown} size="xl" />
                        <a href="#Services">Scroll To Discover</a>
                    </div>
                    <div className="copyRighthero">
                        <p>&copy; 2021 - 2022 focal X agency All Right Reserved</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Hero