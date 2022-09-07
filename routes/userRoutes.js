const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");

userRoutes.post("/token", userController.token);
userRoutes.post("/", userController.store);
userRoutes.get("/", userController.index);
userRoutes.get("/:id", userController.show);
userRoutes.delete("/:id", userController.destroy);
userRoutes.patch("/:id", userController.update); // falta hacer

module.exports = userRoutes;
