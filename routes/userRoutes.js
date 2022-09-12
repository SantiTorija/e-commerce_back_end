const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");

userRoutes.post("/", userController.store);
userRoutes.post("/token", userController.token);
userRoutes.get("/", userController.index);
userRoutes.get("/:id", userController.show);
userRoutes.delete("/:id", userController.destroy);
userRoutes.patch("/:id", userController.update); // falta hacer

module.exports = userRoutes;
