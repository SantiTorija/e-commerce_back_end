const User = require("../models/User");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");

module.exports = {
  token: async function (req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ error: "Credenciales invalidas" });
    }
    const passOk = await user.isValidPassword(password);
    if (!passOk) {
      return res.status(401).json({ error: "Credenciales invalidales" });
    }
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.CLAVE_SECRETA,
    );
    res.json({
      token,
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      address: user.address,
      phone: user.phone,
    });
  },
  store: async function (req, res) {
    try {
      const userExists = await User.findOne({ email: req.body.email });
      if (userExists) {
        return res.status(401).json({ error: "El email ya está en uso!" });
      }
      const user = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        phone: req.body.phone,
        orders: [],
        cartList: req.body.cartList,
      });
      if (user) return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: "Complete todos los campos" });
    }
  },
  update: async function (req, res) {
    const user = await User.findById(req.params.id);
    if (user) {
      await User.findOneAndUpdate(
        { _id: user._id },
        {
          firstname: req.body.firstname || user.firstname,
          lastname: req.body.lastname || user.lastname,
          password: req.body.password || user.password,
          email: req.body.email || user.email,
          address: req.body.address || user.address,
          phone: req.body.phone || user.phone,
        },
      );
      const updatedUser = await User.findById(req.params.id);
      return res.status(200).json(updatedUser);
    }
    return res.status(401).json({ error: "El usuario no fue encontrado" });
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
