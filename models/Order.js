const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  email: { type: String },
  total: { type: Number },
  Date: { type: Date },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  products: [{ type: Schema.Types.ObjectId, ref: "Wine", quantity: Number }],
  state: { type: String },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
