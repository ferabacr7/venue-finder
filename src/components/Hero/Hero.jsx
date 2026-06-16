import "./Hero.css";
import heroImage from "../../assets/hero-villa.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(5, 5, 5, 0.50),
            rgba(5, 5, 5, 0.88)
          ),
          url(${heroImage})
        `,
      }}
    >
      <div className="hero-content">
        <p className="hero-subtitle">Luxury Event Marketplace</p>

        <h1 className="hero-title">
          Extraordinary Venues
          <br />
          for Extraordinary Events
        </h1>

        <p className="hero-description">
          Discover a curated collection of luxury venues designed for
          unforgettable weddings, corporate gatherings and private celebrations.
        </p>

        <button type="button" className="primary-button">
          Explore Venues
        </button>
      </div>
    </section>
  );
}

export default Hero;