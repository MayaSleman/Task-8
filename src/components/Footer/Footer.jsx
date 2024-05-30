import "./Footer.css"
import logo from "./../../assets/images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
function Footer() {
    return (
        <>
            <footer className="footer container" id="LetsTalk">
                <div className="footerContent">
                    <div className="headOffice">
                        <div className="focalAgency">
                            <img src={logo} alt="" />
                            <span>.agency</span>
                        </div>
                        <h3>Head Office</h3>
                        <p>Syria - Latakia - grh2+hjx</p>
                        <span> 35.5199518</span>
                    </div>
                    <div>
                        <h3>Sales</h3>
                        <p>contact@focal-x.com</p>
                        <a href="tel:+963 953 666 056">+963 953 666 056</a>
                        <h3>Public Relations</h3>
                        <p>pr@focal-x.com</p>
                        <a href="tel:+963 953 666 052">+963 953 666 052</a>
                    </div>
                    <div>
                        <h3>Customer Support</h3>
                        <p>info@focal-x.com</p>
                        <a href="tel:+963 953 666 054">+963 953 666 054</a>
                        <h3>Human Resources</h3>
                        <p>hr@focal-x.com</p>
                    </div>
                    <div>
                        <h3>Useful Links</h3>
                        <ul className="UsefulLinks">
                            <li>Clients & Partners</li>
                            <li>Check Certificat ID</li>
                            <li>Check for employee</li>
                            <li>Our Brand ID guidlines</li>
                        </ul>
                    </div>
                    <div className="keepInTouch">
                        <h3>Keep In Touch</h3>
                        <div className="icons">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} className="ficon" /></a>
                            <a href="#"><FontAwesomeIcon icon={faBehance} className="ficon" /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="ficon" /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} className="ficon" /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} className="ficon" /></a>
                        </div>
                    </div>
                </div>
                <div className="copyRight">
                    <p> &copy; 2021 - 2023 focal X L.L.C All Right Reserved</p>
                    <div className="line"></div>
                </div>
            </footer>
        </>
    );
}
export default Footer