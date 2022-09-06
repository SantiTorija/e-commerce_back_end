const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECTION);

const User = require("./User");
const Tweet = require("./Tweet");

module.exports = {
  User,
  Tweet,
};
