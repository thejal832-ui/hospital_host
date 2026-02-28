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

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/doctors">Doctors</Link>
    </nav>
  );
};

export default Navbar;