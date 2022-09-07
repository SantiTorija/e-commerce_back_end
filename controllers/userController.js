const { User } = require("../models");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");

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
  update: async function (req, res) {
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: err });
      }

      const newInfo = {
        firstname: fields.firstname,
        lastname: fields.lastname,
      };

      if (files.avatar) {
        newInfo.avatar = files.avatar.newFilename;
      }
      const user = await User.findByIdAndUpdate(req.params.id, newInfo);
      res.json(user);
    });
  },
  destroy: async function (req, res) {
    const user = await User.findById(req.body.id);
    await User.deleteOne({ _id: user._id });
  },
  show: async function (req, res) {
    const user = await User.findById(req.params.id);
    res.json(user);
  },
};
