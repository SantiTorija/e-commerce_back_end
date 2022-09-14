const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wineSchema = new Schema({
  name: { type: String },
  picture: { type: String },
  variety: { type: String },
  type: { type: Number },
  country: { type: String },
  region: { type: String },
  harvest: { type: String },
  cellar: { type: String },
  capacity: { type: String },
  tastingNote: { type: String },
  description: { type: String },
  price: { type: Number },
  stock: { type: Number },
  highlighted: { type: Boolean },
  slug: { type: String },
});

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;
