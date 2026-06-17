import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        <Link to="/" className="navbar-logo">
          <h1>VF</h1>

          <div>
            <span>Venue Finder</span>
            <p>Luxury Event Marketplace</p>
          </div>
        </Link>

        <div className="navbar-right">
          <nav className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/venues">Explore Venues</Link>
            <Link to="/">About Us</Link>
          </nav>

          <button className="navbar-menu">☰</button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;