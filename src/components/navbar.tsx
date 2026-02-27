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


function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "20px" }}>About</Link>
      <Link to="/contact" style={{ marginRight: "20px" }}>Contact</Link>
      <Link to="/doctors" style={{ marginRight: "20px" }}>All Doctors</Link>
    </nav>
  );
}

export default Navbar;