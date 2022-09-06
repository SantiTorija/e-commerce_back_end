const { User, Tweet } = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  token: async function (req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ $or: [{ username: username }, { email: username }] });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const valid = await user.isValidPassword(password);
    if (!valid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET,
    );
    const response = { token, username: user.username };
    res.json(response);
  },
  store: async function (req, res) {
    const userExists = await User.findOne({ username: req.body.username });
    if (userExists) {
      return res.status(401).json({ error: "Username already taken!" });
    }
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(401).json({ error: "Email already in use!" });
    }
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      avatar: "",
      banner: "",
    });
    return res.json(user);
  },
};
