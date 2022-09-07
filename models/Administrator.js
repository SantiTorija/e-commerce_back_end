const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function validateEmail(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

const adminSchema = new Schema({
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
});

adminSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  return next();
});

const Administrator = mongoose.model("Administrator", adminSchema);

module.exports = Administrator;
