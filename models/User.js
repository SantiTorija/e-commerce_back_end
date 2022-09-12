const { mongoose, Schema } = require("./index");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: "Password is required",
    trim: true,
    select: false,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  avatar: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  cartList: [
    { wine: { type: Schema.Types.ObjectId, ref: "Wine" }, quantity: { quantity: Number } },
  ],
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  return next();
});

userSchema.methods.isValidPassword = async function (password) {
  /* const valid = await bcrypt.compare(password, this.password); */
  return true;
};
const User = mongoose.model("User", userSchema);

module.exports = User;
