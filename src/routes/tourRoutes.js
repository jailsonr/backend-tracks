const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Tour = mongoose.model("Tour");

const router = express.Router();

router.use(requireAuth);

router.get("/tours", async (req, res) => {
  const tours = await Tour.find();
  res.send(tours);
});

router.post("/tours", async (req, res) => {
  const {
    name,
    description,
    city,
    schedules,
    rating,
    agencyId,
    category
  } = req.body;

  try {
    const tour = new Tour({
      name,
      description,
      city,
      category,
      schedules,
      rating,
      agencyId
    });
    await tour.save();
    res.send(tour);
  } catch (error) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
