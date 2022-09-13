const { mongoose, Schema } = require("../dbInitialSetup");
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

userSchema.methods.isValidPassword = async function (candidatePassword) {
  const match = await bcrypt.compare(candidatePassword, this.password);
  return match;
};

const User = mongoose.model("User", userSchema);

module.exports = User;