import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Venue Finder</div>

      <div className="navbar-links">
        <a href="#">Explore</a>
        <a href="#">For venues</a>
        <a href="#">Contact</a>
      </div>

      <button className="navbar-button">List your venue</button>
    </nav>
  );
}

export default Navbar;