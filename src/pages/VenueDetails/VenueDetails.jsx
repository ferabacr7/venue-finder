import { useParams } from "react-router-dom";
import venueService from "../../services/venueService";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
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
    <main
      style={{
        background: "#050505",
        color: "#F8F6F2",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <section
        style={{
          position: "relative",
          height: "720px",
          maxWidth: "1400px",
          margin: "0 auto",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        <img
          src={venue.image}
          alt={venue.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 38%, rgba(0,0,0,0.15) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "56px",
            bottom: "64px",
            maxWidth: "620px",
            color: "#F8F6F2",
          }}
        >
          <p
            style={{
              color: "#C9A86A",
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontWeight: "700",
              marginBottom: "18px",
            }}
          >
            {venue.category}
          </p>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "0.95",
              marginBottom: "24px",
            }}
          >
            {venue.name}
          </h1>

          <p style={{ marginBottom: "16px" }}>📍 {venue.location}</p>

          <p style={{ color: "#C9A86A", marginBottom: "24px" }}>
            ⭐ {venue.rating} · {venue.reviews} reviews
          </p>

          <p style={{ fontSize: "32px", marginBottom: "32px" }}>
            Starting at ${venue.price}
          </p>

          <button
            style={{
              background: "#C9A86A",
              color: "#050505",
              border: "none",
              padding: "16px 32px",
              fontWeight: "700",
              letterSpacing: "1px",
              cursor: "pointer",
              marginRight: "16px",
            }}
          >
            INQUIRE NOW
          </button>

          <button
            style={{
              background: "transparent",
              color: "#F8F6F2",
              border: "1px solid #C9A86A",
              padding: "16px 32px",
              fontWeight: "700",
              letterSpacing: "1px",
              cursor: "pointer",
            }}
          >
            CHECK AVAILABILITY
          </button>
        </div>
      </section>

      <section
        style={{
          background: "#FFFFFF",
          color: "#111111",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px",
          borderRadius: "0 0 24px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "40px",
          }}
        >
          <div>
            <p
              style={{
                color: "#8A8A8A",
                fontSize: "12px",
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              CAPACITY
            </p>

            <h3>{venue.capacity} Guests</h3>
          </div>

          <div>
            <p
              style={{
                color: "#8A8A8A",
                fontSize: "12px",
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              LOCATION
            </p>

            <h3>{venue.location}</h3>
          </div>

          <div>
            <p
              style={{
                color: "#8A8A8A",
                fontSize: "12px",
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              BEST FOR
            </p>

            <h3>Luxury Events</h3>
          </div>

          <div>
            <p
              style={{
                color: "#8A8A8A",
                fontSize: "12px",
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              PRICE RANGE
            </p>

            <h3>${venue.price}</h3>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#050505",
          color: "#F8F6F2",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "100px 40px",
        }}
      >
        <p
          style={{
            color: "#C9A86A",
            letterSpacing: "3px",
            fontSize: "12px",
            fontWeight: "700",
            marginBottom: "16px",
          }}
        >
          GALLERY
        </p>

        <h2
          style={{
            fontSize: "48px",
            marginBottom: "40px",
          }}
        >
          A closer look at the experience
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "24px",
            height: "455px",
          }}
        >
          <img
            src={venue.image}
            alt={venue.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "24px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gap: "24px",
            }}
          >
            <img
              src={venue.image}
              alt={venue.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "24px",
              }}
            />

            <img
              src={venue.image}
              alt={venue.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "24px",
              }}
            />
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#050505",
          color: "#F8F6F2",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px 40px 100px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.7fr",
            gap: "60px",
            alignItems: "end",
          }}
        >
          <div>
            <p
              style={{
                color: "#C9A86A",
                letterSpacing: "3px",
                fontSize: "16px",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              ABOUT THE VENUE
            </p>

            <h2
              style={{
                fontSize: "42px",
                lineHeight: "1.05",
                marginBottom: "24px",
              }}
            >
              Where Luxury <br />
              Meets the Ocean
            </h2>

            <p
              style={{
                color: "#D8D8D8",
                lineHeight: "1.8",
                marginBottom: "32px",
                maxWidth: "320px",
              }}
            >
              {venue.description}
            </p>

            <button
              style={{
                background: "transparent",
                color: "#F8F6F2",
                border: "1px solid #C9A86A",
                padding: "16px 32px",
                fontWeight: "700",
                letterSpacing: "1px",
                cursor: "pointer",
              }}
            >
              VIEW VIRTUAL TOUR ▷
            </button>
          </div>

          <img
            src={venue.image}
            alt={venue.name}
            style={{
              width: "100%",
              height: "320px",
              objectFit: "cover",
              borderRadius: "0",
            }}
          />
        </div>
      </section>

      <section
        style={{
          background: "#FFFFFF",
          color: "#111111",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 60px",
        }}
      >
        <p
          style={{
            color: "#C9A86A",
            letterSpacing: "3px",
            fontSize: "12px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          AMENITIES & FEATURES
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "30px",
            marginTop: "40px",
          }}
        >
          {venue.amenities?.map((amenity) => {
            const Icon = amenityIcons[amenity];

            return (
              <div
                key={amenity}
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                {Icon && (
                  <Icon
                    size={28}
                    color="#C9A86A"
                    style={{
                      marginBottom: "12px",
                    }}
                  />
                )}

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {amenity}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default VenueDetails;
