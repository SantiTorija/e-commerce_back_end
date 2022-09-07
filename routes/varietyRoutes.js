const express = require("express");
const varietyRouter = express.Router();
const varietyController = require("../controllers/varietyController");

varietyRouter.get("/", varietyController.index);
varietyRouter.get("/:id", varietyController.show);
varietyRouter.post("/", varietyController.store);
varietyRouter.patch("/:id", varietyController.update);
varietyRouter.delete("/:id", varietyController.destroy);

module.exports = varietyRouter;
