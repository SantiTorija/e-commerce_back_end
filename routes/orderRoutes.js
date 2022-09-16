const express = require("express");
const orderRouter = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const orderController = require("../controllers/orderController");

/* orderRouter.use(checkJwt({ secret: process.env.CLAVE_SECRETA, algorithms: ["HS256"] })); */

orderRouter.post("/", orderController.store);
orderRouter.patch("/:id", orderController.update);
orderRouter.get("/", orderController.index); // actualizar el estado

module.exports = orderRouter;
