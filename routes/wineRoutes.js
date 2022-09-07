const express = require("express");
const wineRoutes = express.Router();
const wineController = require("../controllers/wineController");

wineRoutes.get("/", wineController.index);
wineRoutes.get("/:slug", wineController.show);
wineRoutes.post("/", wineController.store);
wineRoutes.patch("/:id", wineController.update);
wineRoutes.delete("/:id", wineController.destroy);

module.exports = wineRoutes;
