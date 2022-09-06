const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  email: String,
  total: Number,
  Date: Date,
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  products: [{ type: Schema.Types.ObjectId, ref: "Wine", quantity: Number }],
  state: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
