const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const varietySchema = new Schema({
  name: { type: String },
  code: { type: String },
});

const Variety = mongoose.model("Variety", varietySchema);

module.exports = Variety;
