const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Excursion = mongoose.model("Excursion");
const Tour = mongoose.model("Tour");
const Agency = mongoose.model("Agency");

const router = express.Router();

router.use(requireAuth);

router.get("/excursions", async (req, res) => {
  const excursions = await Excursion.find();
  console.log(`Excursions: ${excursions}`);

  for (let i = 0; i < excursions.length; i++) {
    const tours = await Tour.find({ _id: excursions[i].tourId });

    const agencies = await Agency.find({ _id: tours[0].agencyId });
    console.log(`Agencia ${agencies}`);
    const { name, description, rating, agencyId } = tours[0];

    const agencyName = agencies[0].name;
    console.log(agencyName);

    excursions[i].name = name;
    excursions[i].description = description;
    excursions[i].rating = rating;
    excursions[i].agencyId = agencyId;
    excursions[i].agencyName = agencyName;
  }

  res.send(excursions);
});

router.post("/excursions", async (req, res) => {
  const { tourId } = req.body;

  try {
    const excursion = new Excursion({
      tourId
    });
    await excursion.save();
    res.send(excursion);
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
});

module.exports = router;
