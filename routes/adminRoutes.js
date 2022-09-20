const express = require("express");
const adminRoutes = express.Router();
const adminController = require("../controllers/adminController");
const { expressjwt: checkJwt } = require("express-jwt");

const jwtcheck = checkJwt({ secret: process.env.CLAVE_SECRETA, algorithms: ["HS256"] });

adminRoutes.post("/token", adminController.token);
adminRoutes.post("/", jwtcheck, adminController.store);
adminRoutes.get("/", jwtcheck, adminController.index);
adminRoutes.get("/:id", jwtcheck, adminController.show);
adminRoutes.delete("/:id", jwtcheck, adminController.destroy);
adminRoutes.patch("/:id", jwtcheck, adminController.update);

module.exports = adminRoutes;
