import { Link } from "react-router-dom";
import "./Card.css";

function Card({ venue }) {
  return (
    <Link
      to={`/venue/${venue.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div className="card">
  {venue.featured && (
    <div className="featured-badge">
      ⭐ Featured
    </div>
  )}

  <img src={venue.image} alt={venue.name} />

        <h1>{venue.name}</h1>
        <p className="card-category">{venue.category}</p>
        <p>
          ⭐ {venue.rating} ({venue.reviews} reviews)
        </p>

        <p>📍 {venue.location}</p>

        <p>👥 Up to {venue.capacity} guests</p>

        <p>💵 ${venue.price}</p>
      </div>
    </Link>
  );
}

export default Card;
