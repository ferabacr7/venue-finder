import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">VF</div>

          <div>
            <h2>Venue Finder</h2>
            <p>Luxury Event Marketplace</p>
          </div>
        </div>

        <nav className="footer-links">
          <h3>Navigation</h3>

          <a href="#">Explore Venues</a>
          <a href="#">List Your Venue</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>

      <div className="container footer-divider"></div>

      <div className="container footer-bottom">
        <p>© 2026 Venue Finder. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
