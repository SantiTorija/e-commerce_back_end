const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");

const jwtcheck = checkJwt({ secret: process.env.CLAVE_SECRETA, algorithms: ["HS256"] });

userRoutes.post("/", userController.store);
userRoutes.post("/token", userController.token);
userRoutes.get("/", userController.index);
userRoutes.get("/:id", jwtcheck, userController.show);
userRoutes.delete("/:id", jwtcheck, userController.destroy);
userRoutes.patch("/:id", jwtcheck, userController.update);

module.exports = userRoutes;
