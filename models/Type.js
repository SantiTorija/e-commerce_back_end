const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const typeSchema = new Schema({
  name: { type: String },
  code: { type: String },
});

const Type = mongoose.model("Type", typeSchema);

module.exports = Type;
