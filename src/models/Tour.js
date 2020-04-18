const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  schedule: String
});

const tourSchema = new mongoose.Schema({
  name: String,
  description: String,
  city: String,
  category: String,
  schedules: [scheduleSchema],
  rating: Number,
  agencyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agency"
  }
});

mongoose.model("Tour", tourSchema);
