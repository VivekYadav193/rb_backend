const mongoose = require("mongoose");

// Define the schema for the Restaurant model
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  contact: {
    type: String,
    required: true,
  },
  cuisine: [
    {
      type: String,
      required: true,
    },
  ],
  priceRange: {
    type: String,
    enum: ["$", "$$", "$$$", "$$$$"], // Example price range categories
    required: true,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  openingHours: {
    type: [String], // Array of strings representing opening hours
    required: true,
  },

  discounts: [
    {
      code: String,
      description: String,
      validityPeriod: {
        start: Date,
        end: Date,
      },
      termsConditions: String,
    },
  ],
  seatAvailability: {
    type: Number,
    default: 0,
  },
});

// Add a geospatial index for location field
restaurantSchema.index({ location: "2dsphere" });

// Create and export the Restaurant model
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
