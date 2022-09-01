import './Footer.css';
///////////use Link instead of NavLink
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Facebook from "../img/facebook.png";
import Twitter from "../img/twitter.png";
import LinkedIn from "../img/linkedin.png";
import Instagram from "../img/instagram.png";
import YouTube from "../img/youtube.png";

function Footer() {
  return (
    <nav className="footer-navbar">
      <ul className="nav-link-container">
        <li>
          <NavLink to="/inprint">Imprint</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">About us</NavLink>
        </li>
        <li>
          <NavLink to="/help">Help</NavLink>
        </li>
        <li>
          <a href="https://m.facebook.com/" HTMLtarget="_blank"><img src={Facebook} alt="www.flaticon.com" width="30" /></a>
        </li>
        <li>
          <a href="https://twitter.com/" HTMLtarget="_blank"><img src={Twitter} alt="www.flaticon.com" width="30" /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/" HTMLtarget="_blank"><img src={LinkedIn} alt="www.flaticon.com" width="30" /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/" HTMLtarget="_blank"><img src={Instagram} alt="www.flaticon.com" width="30" /></a>
        </li>
        <li>
          <a href="https://www.youtube.com/" HTMLtarget="_blank"><img src={YouTube} alt="www.flaticon.com" width="30" /></a>
        </li>
      </ul>
    </nav>
  )
}

export default Footer;

