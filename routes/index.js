const orderRoutes = require("./orderRoutes");
const userRoutes = require("./userRoutes");
const wineRoutes = require("./wineRoutes");
const varietyRoutes = require("./varietyRoutes");

module.exports = (app) => {
  app.use("/orders", orderRoutes);
  app.use("/varieties", varietyRoutes);
  app.use("/wines", wineRoutes);
  app.use("/users", userRoutes);
};
