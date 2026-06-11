class Venue {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.location = data.location;
    this.price = data.price;
    this.image = data.image;
    this.description = data.description;

    this.category = data.category;
    this.capacity = data.capacity;
    this.rating = data.rating;
    this.reviews = data.reviews;
    this.amenities = data.amenities;
    this.featured = data.featured;
  }
}

export default Venue;
