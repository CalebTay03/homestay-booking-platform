import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "./Searchbar";
import logo from "../Images/Logo.jpg";

const NavBar = () => {
  return (
    <header className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Middle: Search Bar */}
      <div className="navbar-center">
        <SearchBar />
      </div>

      {/* Right: Nav Links */}
      <div className="navbar-right">
        <NavLink to="/About" className="nav-button">
          About Us
        </NavLink>
        <NavLink to="/Portfolio" className="nav-button">
          Portfolio
        </NavLink>
        <NavLink to="/Contact" className="nav-button">
          Contact
        </NavLink>
      </div>
    </header>
  );
};

export default NavBar;
