const mongoose = require("mongoose");

const agencySchema = new mongoose.Schema({
  name: String,
  run: String
});

mongoose.model("Agency", agencySchema);
