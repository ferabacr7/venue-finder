import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <h1>VF</h1>

          <div>
            <span>Venue Finder</span>
            <p>Luxury Event Marketplace</p>
          </div>
        </div>

        <div className="navbar-right">
          <nav className="navbar-links">
            <a href="#">Explore Venues</a>
            <a href="#">List Your Venue</a>
            <a href="#">About Us</a>
          </nav>

          <button className="navbar-menu">☰</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;