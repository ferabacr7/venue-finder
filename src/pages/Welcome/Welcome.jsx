import { Link } from "react-router-dom";

function Welcome() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(10, 11, 15, 0.65), rgba(10, 11, 15, 0.85)), url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#F8F6F2",
        display: "flex",
        alignItems: "center",
        padding: "60px",
      }}
    >
      <section
        style={{
          maxWidth: "760px",
        }}
      >
        <p
          style={{
            color: "#C9A86A",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontWeight: "600",
            marginBottom: "24px",
          }}
        >
          Venue Finder
        </p>

        <h1
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "76px",
            lineHeight: "1.05",
            marginBottom: "24px",
          }}
        >
          Extraordinary spaces for unforgettable events.
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#A8B0C0",
            maxWidth: "560px",
            lineHeight: "1.7",
            marginBottom: "40px",
          }}
        >
          Discover curated venues for weddings, corporate gatherings and private
          celebrations.
        </p>

        <Link
          to="/"
          style={{
            display: "inline-block",
            background: "#C9A86A",
            color: "#0A0B0F",
            padding: "16px 30px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "700",
          }}
        >
          Explore Venues
        </Link>
      </section>
    </main>
  );
}

export default Welcome;