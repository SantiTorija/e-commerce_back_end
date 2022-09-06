const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECTION);

const User = require("./User");
const Wine = require("./Wine");
const Order = require("./Order");
const Variety = require("./Variety");

module.exports = {
  User,
  Wine,
  Order,
  Variety,
};
