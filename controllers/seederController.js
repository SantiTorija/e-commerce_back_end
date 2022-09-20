const { mongoose } = require("../dbInitialSetup");
const seeders = require("../seeders");
const Wine = require("../models/Wine");
const Type = require("../models/Type");
const User = require("../models/User");
const Order = require("../models/Order");
const Admin = require("../models/Administrator");

module.exports = {
  destroy: async function (req, res) {
    try {
      Order.remove({}, function (err) {});
      Wine.remove({}, function (err) {});
      Type.remove({}, function (err) {});
      User.remove({}, function (err) {});
      Admin.remove({}, function (err) {});
      await seeders();
      res.json({ response: "base de datos reseteada" });
    } catch (e) {
      res.json(e);
    }
  },
};
