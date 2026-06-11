import { useParams } from "react-router-dom";
import venueService from "../../services/venueService";

function VenueDetails() {
  const { id } = useParams();

  const venues = venueService.getVenues();

  const venue = venues.find(
    (venue) => venue.id === Number(id)
  );

  if (!venue) {
    return <h1>Venue not found</h1>;
  }

  return (
  <div
    style={{
      background: "#0A0B0F",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      maxWidth: "1400px",
      margin: "0 auto",
    }}
  >
    <img
      src={venue.image}
      alt={venue.name}
      style={{
        width: "100%",
        height: "550px",
        objectFit: "cover",
        borderRadius: "24px",
        marginBottom: "40px",
      }}
    />

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "60px",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          flex: 2,
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "15px",
          }}
        >
          {venue.name}
          <p
  style={{
    color: "#C9A86A",
    fontWeight: "600",
    marginBottom: "12px",
  }}
>
  {venue.category}
</p>

<p
  style={{
    color: "#B8BDD6",
    marginBottom: "20px",
  }}
>
  ⭐ {venue.rating} · {venue.reviews} reviews
</p>
        </h1>

        <p
          style={{
            color: "#B8BDD6",
            fontSize: "16px",
            marginBottom: "20px",
          }}
        >
         📍 {venue.location} · 👥 {venue.capacity} Guests
</p>


        <p
          style={{
            lineHeight: "1.8",
            fontSize: "18px",
            maxWidth: "800px",
          }}
        >
          {venue.description}
        </p>

<div
  style={{
    marginTop: "40px",
  }}
>
  <h3
    style={{
      marginBottom: "20px",
      color: "#F8F6F2",
    }}
  >
    Amenities
  </h3>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
    }}
  >
    {venue.amenities?.map((amenity) => (
      <div
        key={amenity}
        style={{
          background: "#121318",
          border: "1px solid rgba(201,168,106,0.25)",
          color: "#F8F6F2",
          padding: "10px 16px",
          borderRadius: "999px",
        }}
      >
        {amenity}
      </div>
    ))}
  </div>
</div>

        
      </div>

      <div
        style={{
          flex: 1,
          background: "#1e1b3a",
          padding: "30px",
          borderRadius: "24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Booking Details
        </h2>

        <p
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >



<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  }}
>
  {venue.amenities?.map((amenity) => (
    <div
      key={amenity}
      style={{
        background: "#121318",
        border: "1px solid rgba(201,168,106,0.25)",
        padding: "10px 16px",
        borderRadius: "999px",
      }}
    >
      {amenity}
    </div>
  ))}
</div>

          ${venue.price}
        </p>

        <div
          style={{
            marginBottom: "30px",
            color: "#B8BDD6",
          }}
        >
          Available for weddings, corporate events and private celebrations.
        </div>

        <button
          style={{
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "14px",
            background: "white",
            color: "#111222",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "12px",
          }}
        >
          Request Booking
        </button>

        <button
          style={{
            width: "100%",
            padding: "16px",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "14px",
            background: "transparent",
            color: "white",
            cursor: "pointer",
          }}
        >
          Save Venue
        </button>
      </div>
    </div>
  </div>
);
}

export default VenueDetails;