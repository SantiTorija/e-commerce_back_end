const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const varietySchema = new Schema({
  name: String,
  code: String,
});

const Variety = mongoose.model("Variety", varietySchema);

module.exports = Variety;
