const mongoose = require("mongoose");

const Schema = mongoose.Schema;

mongoose.connect(process.env.DB_CONNECTION);

module.exports = {
  mongoose,
  Schema,
};
