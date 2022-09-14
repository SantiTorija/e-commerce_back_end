const express = require("express");
const wineRoutes = express.Router();
const wineController = require("../controllers/wineController");
const { expressjwt: checkJwt } = require("express-jwt");

const jwtcheck = checkJwt({ secret: process.env.CLAVE_SECRETA, algorithms: ["HS256"] });

wineRoutes.get("/", wineController.index);
wineRoutes.get("/:slug", wineController.show);
wineRoutes.post("/", jwtcheck, wineController.store);
wineRoutes.patch("/:id", jwtcheck, wineController.update);
wineRoutes.delete("/:id", jwtcheck, wineController.destroy);
wineRoutes.get("/filter/:type", wineController.showType);

module.exports = wineRoutes;
