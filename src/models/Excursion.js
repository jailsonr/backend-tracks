const mongoose = require("mongoose");

const excursionSchema = new mongoose.Schema({
  tourId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tour"
  },
  name: String,
  description: String,
  rating: String,
  schedule: String,
  agencyName: String
});

mongoose.model("Excursion", excursionSchema);
