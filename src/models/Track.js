const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  timestamp: Number,
  coords: {
    latitute: Number,
    longitude: Number,
    altitud: Number,
    accuracy: Number,
    heding: Number,
    heading: Number,
    speed: Number
  }
});

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    default: ""
  },
  locations: [pointSchema]
});

mongoose.model("Track", trackSchema);
