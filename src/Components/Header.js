import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          {/* Placeholder Logo, replace with image */}
          <NavLink to="/">Logo</NavLink>
        </div>
        <ul className="nav-link-container">
          <NavLink to="/action">
            <li>Action</li>
          </NavLink>
          <NavLink to="/science-fiction">
            <li>Scifi</li>
          </NavLink>
          <NavLink to="/drama">
            <li>Drama</li>
          </NavLink>
          <NavLink to="/horror">
            <li>Horror</li>
          </NavLink>
        </ul>
        <div className="login">
          <NavLink to="Login">Login</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
