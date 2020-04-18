const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Agency = mongoose.model("Agency");

const router = express.Router();

router.use(requireAuth);

router.get("/agencies", async (req, res) => {
  console.log(res.data);
  const agencies = await Agency.find();
  res.send(agencies);
});

router.post("/agencies", async (req, res) => {
  const { name, run } = req.body;
  console.log(req.body);
  if (!name || !run) {
    return res.status(422).send({ error: "You must provide a name and run" });
  }
  try {
    const agency = new Agency({
      name,
      run
    });
    await agency.save();
    res.send(agency);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
