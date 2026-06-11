import { venues } from "../data/venues";
import Venue from "../classes/Venue";

class VenueService {

  getVenues() {
    return venues.map(
      venue => new Venue(venue)
    );
  }

}

export default new VenueService();