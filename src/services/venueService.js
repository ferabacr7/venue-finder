import { venues } from "../data/venues";
import Venue from "../classes/Venue";

class VenueService {
  getVenues() {
    return venues.map((venue) => new Venue(venue));
  }

  getFeaturedVenues() {
    return this.getVenues()
      .filter((venue) => venue.featured)
      .slice(0, 3);
  }
}

export default new VenueService();