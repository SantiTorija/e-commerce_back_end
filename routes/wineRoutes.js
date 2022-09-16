const express = require("express");
const wineRoutes = express.Router();
const wineController = require("../controllers/wineController");
const { expressjwt: checkJwt } = require("express-jwt");

const jwtcheck = checkJwt({ secret: process.env.CLAVE_SECRETA, algorithms: ["HS256"] });

wineRoutes.get("/", wineController.index);
wineRoutes.get("/:slug", wineController.show);
wineRoutes.post("/", wineController.store);
wineRoutes.patch("/:id", wineController.update);
wineRoutes.delete("/:id", wineController.destroy);
wineRoutes.get("/filter/:type", wineController.showType);

module.exports = wineRoutes;
