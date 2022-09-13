const User = require("../models/User");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");

module.exports = {
  token: async function (req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email" });
    }
    const passOk = await user.isValidPassword(password);
    if (!passOk) {
      return res.status(401).json({ error: "Invalid password" });
    }
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.CLAVE_SECRETA,
    );
    res.json(token);
  },
  store: async function (req, res) {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(401).json({ error: "Email already in use!" });
    }
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      avatar:
        req.body.avatar ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      address: req.body.address,
      phone: req.body.phone,
      orders: [],
      cartList: req.body.cartList,
    });
    if (user) return res.status(200).json(user);
    return res.status(400).json("El usuario no ha sido creado");
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
    const user = await User.findById(req.params.id);
    if (user) {
      await User.deleteOne({ _id: user._id });
      return res.status(200).json("El usuario ha sido borrado con exito");
    }
    return res.status(400).json("el usuario no ha sido encontrado");
  },
  show: async function (req, res) {
    const user = await User.findById(req.params.id).populate("orders").populate("cartList");
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(400).json("El usuario no ha sido encontrado");
  },
  index: async function (req, res) {
    const users = await User.find();
    if (users) {
      return res.status(200).json(users);
    }
    return res.status(400).json("El usuario no ha sido encontrado");
  },
};
