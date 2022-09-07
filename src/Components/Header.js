import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import Logo from "../img/Logo.png";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to='/'><img src={Logo} alt="Movie Night" width="50" /></Link>
        </div>
        <ul className="nav-link-container">
          {/* <NavLink to="/action"> */}
          <NavLink to="/error">
            <li>Action</li>
          </NavLink>
          {/* <NavLink to="/science-fiction"> */}
          <NavLink to="/error">
            <li>Scifi</li>
          </NavLink>
          {/* <NavLink to="/drama"> */}
          <NavLink to="/error">
            <li>Drama</li>
          </NavLink>
          {/* <NavLink to="/horror"> */}
          <NavLink to="/error">
            <li>Horror</li>
          </NavLink>
        </ul>
        <div className="login">
          <NavLink to="/">Log out</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
