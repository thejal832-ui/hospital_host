import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/doctors">All Doctors</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <button className="create-btn">Create Account</button>
    </nav>
  );
}
export default Navbar;
