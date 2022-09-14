const { mongoose, Schema } = require("../dbInitialSetup");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    required: "Firstname is required",
  },
  lastname: {
    type: String,
    trim: true,
    required: "Lastname is required",
  },
  password: {
    type: String,
    required: "Password is required",
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  address: {
    type: String,
    trim: true,
    required: "Address is required",
  },
  phone: {
    type: String,
    trim: true,
    required: "Phone is required",
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

userSchema.methods.isValidPassword = async function (candidatePassword) {
  const match = await bcrypt.compare(candidatePassword, this.password);
  return match;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
