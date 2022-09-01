import { NavLink, Link  } from 'react-router-dom';
import './Header.css';
import Logo from '../img/Logo.png';

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          {/* Placeholder Logo, replace with image */}
          <Link to='/'><img src={Logo} alt="Movie Night" width="50" /></Link>
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
