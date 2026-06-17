import { useState } from "react";
import venueService from "../../services/venueService";
import Card from "../../components/Card/Card";
import "./Venues.css";

function Venues() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const venues = venueService.getVenues();

  const categories = ["All", ...new Set(venues.map((venue) => venue.category))];

  const filteredVenues = venues.filter((venue) => {
    const searchText = searchTerm.toLowerCase();

    const matchesSearch =
      venue.name.toLowerCase().includes(searchText) ||
      venue.location.toLowerCase().includes(searchText) ||
      venue.category.toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === "All" || venue.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="venues-page">
      <section className="venues-hero">
        <p className="venues-kicker">Curated luxury spaces</p>
        <h1>Explore Venues</h1>
        <p>
          Discover exclusive beachfront venues, private estates, and luxury
          resorts for unforgettable events.
        </p>
      </section>

      <section className="venues-controls">
        <input
          className="venues-search"
          type="text"
          placeholder="Search by name, location, or category..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <div className="venues-filters">
          {categories.map((category) => (
            <button
              className={
                selectedCategory === category
                  ? "filter-button active"
                  : "filter-button"
              }
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="venues-grid">
        {filteredVenues.map((venue) => (
          <Card key={venue.id} venue={venue} />
        ))}
      </section>
    </main>
  );
}

export default Venues;
