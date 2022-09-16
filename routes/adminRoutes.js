const express = require("express");
const adminRoutes = express.Router();
const adminController = require("../controllers/adminController");
const { expressjwt: checkJwt } = require("express-jwt");

/* const jwtcheck = checkJwt({ secret: process.env.CLAVE_SECRETA, algorithms: ["HS256"] }); */

adminRoutes.post("/token", adminController.token);
adminRoutes.post("/", adminController.store);
adminRoutes.get("/", adminController.index);
adminRoutes.delete("/:id", adminController.destroy);
adminRoutes.patch("/:id", adminController.update);

module.exports = adminRoutes;
