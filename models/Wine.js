const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wineSchema = new Schema({
  name: String,
  picture: String,
  type: String,
  variety: { type: Schema.Types.ObjectId, ref: "Variety", required: true },
  country: String,
  region: String,
  harvest: String,
  cellar: String,
  capacity: String,
  tastingNote: String,
  description: String,
  price: Number,
  stock: Number,
  highlighted: Boolean,
  slug: String,
});

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;
