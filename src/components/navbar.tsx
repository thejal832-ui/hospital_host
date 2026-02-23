{/* <nav className="navbar">
  <div className="nav-links">
    <a href="/">Home</a>
    <a href="/alldoctors">All Doctors</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </div>

  <button className="create-btn">
    Create Account
  </button>
</nav> */}

import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 40px",
      background: "#0a3d62",
      color: "white"
    }}>
      <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
        <img src={logo} alt="logo" width="40" />
        <h2>CityCare</h2>
      </div>

      <div style={{display:"flex", gap:"20px"}}>
        <NavLink to="/" style={{color:"white"}}>Home</NavLink>
        <NavLink to="/about" style={{color:"white"}}>About</NavLink>
        <NavLink to="/doctors" style={{color:"white"}}>Doctors</NavLink>
        <NavLink to="/contact" style={{color:"white"}}>Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;