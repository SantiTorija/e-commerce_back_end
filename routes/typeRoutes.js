const express = require("express");
const typeRouter = express.Router();
const typeController = require("../controllers/typeController");
const { expressjwt: checkJwt } = require("express-jwt");

typeRouter.use(checkJwt({ secret: process.env.CLAVE_SECRETA, algorithms: ["HS256"] }));

typeRouter.get("/", typeController.index);
typeRouter.post("/", typeController.store);
typeRouter.patch("/:id", typeController.update);
typeRouter.delete("/", typeController.destroy);

module.exports = typeRouter;
