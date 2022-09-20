const Admin = require("../models/Administrator");
const jwt = require("jsonwebtoken");

module.exports = {
  token: async function (req, res) {
    const { email, password } = req.body;
    console.log(req.body);
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      return res.status(401).json({ error: "Credenciales invalidas" });
    }
    /* const passOk = await admin.isValidPassword(password);
    if (!passOk) {
      return res.status(401).json({ error: "Credenciales invalidales" });
    } */
    const token = jwt.sign(
      {
        id: admin.id,
      },
      process.env.CLAVE_SECRETA,
    );
    res.json({
      token,
      id: admin._id,
      firstname: admin.firstname,
      lastname: admin.lastname,
      email: admin.email,
    });
  },
  store: async function (req, res) {
    try {
      const userExists = await Admin.findOne({ email: req.body.email });
      if (userExists) {
        return res.status(401).json({ error: "El email ya está en uso!" });
      }
      const admin = await Admin.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
      });
      if (admin) return res.status(200).json(admin);
    } catch (error) {
      return res.status(400).json({ error: "Complete todos los campos" });
    }
  },
  update: async function (req, res) {
    const newInfo = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    };
    const admin = await Admin.findByIdAndUpdate(req.params.id, newInfo);
    if (!admin) return res.status(400).json({ error: "Admin no encontrado" });
    res.json(admin);
  },

  index: async function (req, res) {
    const admins = await Admin.find();
    if (admins) {
      return res.status(200).json(admins);
    }
    return res.status(400).json("No se han encontrado admins");
  },
  destroy: async function (req, res) {
    const admin = await Admin.findById(req.params.id);
    if (admin) {
      await Admin.deleteOne({ id: admin._id });
      return res.status(200).json("El usuario ha sido borrado con exito");
    }
    return res.status(400).json("el usuario no ha sido encontrado");
  },
  show: async function (req, res) {
    const admin = await Admin.findById(req.params.id);
    if (admin) {
      return res.status(200).json(admin);
    }
    return res.status(400).json("el usuario no ha sido encontrado");
  },
};
