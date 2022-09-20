const express = require("express");
const seederRoutes = express.Router();
const { mongoose } = require("../dbInitialSetup");
const seeders = require("../seeders");

seederRoutes.get("/", async function (req, res) {
  await mongoose.connection.dropCollection("users");
  await mongoose.connection.dropCollection("administrators");
  await mongoose.connection.dropCollection("wines");
  await mongoose.connection.dropCollection("types");
  await mongoose.connection.dropCollection("orders");
  seeders();
  res.json({ response: "base de datos reseteada" });
});

module.exports = seederRoutes;
