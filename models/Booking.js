const mongoose = require("mongoose");

// Define the schema for the Booking model
const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },

  cuisine: [
    {
      type: String,
      required: true,
    },
  ],

  reservationDateTime: {
    type: Date,
    required: true,
  },

  numberOfGuests: {
    type: Number,
    required: true,
  },

  specialRequests: String,

  status: {
    type: String,
    enum: ["confirmed", "pending", "canceled"],
    default: "pending",
  },
});

// Create and export the Booking model
const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
