const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

function validateEmail(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

const userSchema = new Schema({
  firstname: {
    type: String,
    required: "First name is required",
    trim: true,
  },
  lastname: {
    type: String,
    required: "Last name is required",
    trim: true,
  },
  password: {
    type: String,
    required: "Password is required",
    trim: true,
    minLength: 8,
    select: false,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
  },
  avatar: {
    type: String,
    trim: true,
  },
  adress: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  return next();
});

userSchema.methods.isValidPassword = async function (password) {
  const user = await User.findOne({ username: this.username }).select("password");
  const valid = await bcrypt.compare(password, user.password);
  return valid;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
