import venueService from "../../services/venueService";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  const venues = venueService.getVenues();

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#0A0B0F",
          minHeight: "100vh",
          padding: "40px",
        }}
      >
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "80px",
            padding: "80px 0 120px",
          }}
        >
          <div style={{ flex: 1 }}>
            <h1
              style={{
                color: "white",
                fontSize: "56px",
                lineHeight: "1.1",
                marginBottom: "20px",
              }}
            >
              Find the perfect venue
              <br />
              for your next event
            </h1>

            <p
              style={{
                fontSize: "20px",
                color: "#B8BDD6",
                marginBottom: "30px",
                maxWidth: "600px",
              }}
            >
              Discover unique spaces for weddings, corporate events and
              unforgettable celebrations.
            </p>

            <button
              style={{
                background: "#C9A86A",
                color: "#0A0B0F",
                border: "none",
                borderRadius: "999px",
                padding: "16px 28px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Explore Venues
            </button>
          </div>

          <div style={{ flex: 1 }}>
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
              alt="Venue Hero"
              style={{
                width: "100%",
                borderRadius: "32px",
                objectFit: "cover",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
            />
          </div>
        </section>

        <section style={{ marginBottom: "70px" }}>
          <h2
            style={{
              color: "white",
              fontSize: "36px",
              marginBottom: "12px",
            }}
          >
            Browse by Category
          </h2>

          <p
            style={{
              color: "#B8BDD6",
              marginBottom: "24px",
            }}
          >
            Explore venues by event style and experience.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              "Wedding Venues",
              "Corporate Events",
              "Luxury Villas",
              "Beachfront Venues",
              "Private Events",
            ].map((category) => (
              <button
                key={category}
                style={{
                  background: "#121318",
                  color: "#F8F6F2",
                  border: "1px solid rgba(201, 168, 106, 0.35)",
                  borderRadius: "999px",
                  padding: "12px 20px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <div style={{ marginBottom: "40px" }}>
          <h2
            style={{
              color: "white",
              fontSize: "36px",
              marginBottom: "10px",
            }}
          >
            Featured Venues
          </h2>

          <p style={{ color: "#B8BDD6" }}>
            Hand-picked locations for unforgettable events.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {venues.map((venue) => (
            <Card key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
