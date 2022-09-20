const orderRoutes = require("./orderRoutes");
const userRoutes = require("./userRoutes");
const wineRoutes = require("./wineRoutes");
const typeRoutes = require("./typeRoutes");
const adminRoutes = require("./adminRoutes");
const seederRoutes = require("./seederRoutes");

module.exports = (app) => {
  app.use("/orders", orderRoutes);
  app.use("/types", typeRoutes);
  app.use("/wines", wineRoutes);
  app.use("/users", userRoutes);
  app.use("/admin", adminRoutes);
  app.use("/reset", seederRoutes);
};
