const { mongoose } = require("../dbInitialSetup");
const seeders = require("../seeders");
const Admin = require("../models/Administrator");
const Wine = require("../models/Wine");
const Type = require("../models/Type");
const User = require("../models/User");
const Order = require("../models/Order");

module.exports = {
  reset: async function (req, res) {
    try {
      await Order.remove({});
      await Wine.remove({});
      await Type.remove({});
      await User.remove({});
      await Admin.remove({});
      await seeders();
      res.json({ response: "base de datos reseteada" });
    } catch (e) {
      res.json(e);
    }
  },
};
