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
  username: {
    type: String,
    required: "Username is required",
    trim: true,
    unique: true,
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
  bio: {
    type: String,
    trim: true,
  },
  avatar: {
    type: String,
    trim: true,
  },
  banner: {
    type: String,
    trim: true,
  },
  tweets: [{ type: Schema.Types.ObjectId, ref: "Tweet" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
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
