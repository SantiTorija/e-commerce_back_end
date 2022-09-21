const express = require("express");
const seederRoutes = express.Router();
const seederController = require("../controllers/seederController");

seederRoutes.get("/", seederController.reset);

module.exports = seederRoutes;
