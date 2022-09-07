const express = require("express");
const jwt = require("jsonwebtoken");
const { expressjwt: checkJwt } = require("express-jwt");
const { User } = require("../models");
const publicRouter = express.Router();
const orderController = require("../controllers/orderController");
const wineController = require("../controllers/wineController");
const userController = require("../controllers/userController");
const varietyController = require("../controllers/varietyController");

// Rutas Públicas userController
publicRouter.post("/register", userController.store);
publicRouter.post("/token", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    const id = user.id;
    const token = jwt.sign({ id }, "claveSecreta");
    return res.json({ token });
  }
  return res.json("credenciales invalidas");
});
publicRouter.delete("/users", userController.destroy);
publicRouter.put("/users", userController.update);
publicRouter.get("/users", userController.index);
publicRouter.get("/users/:id", userController.show);

//Rutas con JWT
publicRouter.use(checkJwt({ secret: "claveSecreta", algorithms: ["HS256"] })); // cambiar clavae secreta

// Rutas Públicas orderController

publicRouter.post("/orders", orderController.store);
publicRouter.patch("/orders", orderController.update); // actualizar el estado
publicRouter.delete("/orders", orderController.destroy);

// Rutas Públicas wineController
publicRouter.get("/wines", wineController.index);
publicRouter.get("/wines/:id", wineController.show);
publicRouter.post("/wines", wineController.store);
publicRouter.patch("/wines", wineController.update);
publicRouter.delete("/wines", wineController.destroy);

// Rutas Públicas varietyController
publicRouter.get("/varieties", varietyController.index);
publicRouter.get("/varieties/:id", varietyController.show);
publicRouter.post("/varieties", varietyController.store);
publicRouter.patch("/varieties", varietyController.update);
publicRouter.delete("/varieties", varietyController.destroy);

module.exports = publicRouter;
