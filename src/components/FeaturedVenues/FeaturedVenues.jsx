import { Link } from "react-router-dom";
import venueService from "../../services/venueService";
import "./FeaturedVenues.css";

function FeaturedVenues() {
  const venues = venueService.getFeaturedVenues();

  return (
    <section className="featured-venues">
      <div className="container">
        <div className="featured-header">
          <h2 className="featured-title">Featured Venues</h2>

          <p className="featured-description">
            Hand-selected spaces for remarkable events.
          </p>
        </div>

        <div className="featured-grid">
          {venues.map((venue) => (
            <Link
              to={`/venue/${venue.id}`}
              className="featured-card"
              key={venue.id}
            >
              <img src={venue.image} alt={venue.name} />

              <div className="featured-card-content">
                <p className="featured-card-location">{venue.location}</p>

                <h3>{venue.name}</h3>

                <div className="featured-card-meta">
                  <span>{venue.capacity} Guests</span>
                  <span>From ${venue.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="featured-action">
          <Link to="/venues" className="featured-link">
            View All Venues →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedVenues;
