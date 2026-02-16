import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Hospital</div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/doctors">All Doctors</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <button className="btn">Create Account</button>
    </nav>
  );
}

export default Navbar;
