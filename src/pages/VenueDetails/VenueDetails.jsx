import { useParams } from "react-router-dom";
import venueService from "../../services/venueService";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./VenueDetails.css";

import {
  Wifi,
  Car,
  Waves,
  Martini,
  Sunset,
  Building,
  Music,
  Wind,
  Users,
  Umbrella,
  Star,
  MapPin,
  DollarSign,
} from "lucide-react";

function VenueDetails() {
  const { id } = useParams();

  const venues = venueService.getVenues();
  const venue = venues.find((venue) => String(venue.id) === id);

  if (!venue) {
    return <h1>Venue not found</h1>;
  }

  const amenityIcons = {
    "Ocean View": Waves,
    "Private Bar": Martini,
    Parking: Car,
    WiFi: Wifi,
    "Sunset Deck": Sunset,
    "Infinity Pool": Umbrella,
    Catering: Building,
    "Sound System": Music,
    "Air Conditioning": Wind,
    "Event Coordination": Users,
  };

  return (
    <main className="venue-details-page">
      <Navbar />

      <section className="venue-details-hero">
        <img src={venue.image} alt={venue.name} className="venue-hero-image" />

        <div className="venue-hero-overlay" />

        <div className="venue-hero-content">
          <span className="venue-category">{venue.category}</span>

          <h1>{venue.name}</h1>

          <p className="venue-location">
            <MapPin size={18} />
            {venue.location}
          </p>

          <p className="venue-rating">
            <Star size={18} fill="currentColor" />
            {venue.rating} Rating
          </p>

          <div className="venue-hero-actions">
            <button className="primary-btn">Book This Venue</button>
            <button className="secondary-btn">Contact Venue</button>
          </div>
        </div>
      </section>

      <section className="venue-facts">
        <div className="fact-card">
          <Users size={32} />
          <span>Guest Capacity</span>
          <h3>{venue.capacity}</h3>
          <p>Guests</p>
        </div>

        <div className="fact-card">
          <DollarSign size={32} />
          <span>Price Range</span>
          <h3>${venue.price}</h3>
          <p>Starting price</p>
        </div>

        <div className="fact-card">
          <Star size={32} />
          <span>Rating</span>
          <h3>{venue.rating}</h3>
          <p>Luxury venue</p>
        </div>

        <div className="fact-card">
          <MapPin size={32} />
          <span>Location</span>
          <h3>{venue.location}</h3>
          <p>Costa Rica</p>
        </div>
      </section>

      <section className="venue-about">
        <div>
          <span className="section-label">About This Venue</span>
          <h2>
            Where Nature Meets <br /> Elegance
          </h2>

          <p>{venue.description}</p>

          <p>
            Designed for unforgettable weddings, private celebrations and
            high-end corporate experiences, this venue combines atmosphere,
            comfort and exclusivity.
          </p>
        </div>

        <img src={venue.image} alt={venue.name} />
      </section>

      <section className="venue-amenities">
        <span className="section-label">Amenities</span>

        <div className="amenities-list">
          {venue.amenities?.map((amenity) => {
            const Icon = amenityIcons[amenity];

            return (
              <div className="amenity-item" key={amenity}>
                {Icon ? (
                  <Icon size={16} />
                ) : (
                  <span className="amenity-fallback-icon">✓</span>
                )}
                <span>{amenity}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="venue-gallery">
        <span className="section-label">Gallery</span>

        <div className="gallery-grid">
          <img src={venue.image} alt={venue.name} className="gallery-large" />
          <img src={venue.image} alt={venue.name} />
          <img src={venue.image} alt={venue.name} />
          <img src={venue.image} alt={venue.name} />
          <img src={venue.image} alt={venue.name} />
        </div>
      </section>

      <section className="venue-final-cta">
        <div>
          <h2>
            Ready to host an <br /> unforgettable event?
          </h2>
          <p>
            Check availability, receive a personalized quote and start planning
            a luxury experience.
          </p>
        </div>

        <button className="primary-btn">Book This Venue</button>
      </section>

      <Footer />
    </main>
  );
}

export default VenueDetails;
