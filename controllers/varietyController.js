const Wine = require("../models/Wine");
const Variety = require("../models/Variety");

module.exports = {
  index: async function (req, res) {
    const varieties = await Variety.find();
    res.json(varieties);
  },
  store: async function (req, res) {
    const variety = await Variety.create({
      name: req.body.name,
      code: req.body.code,
    });
    res.json(variety);
  },
  destroy: async function (req, res) {
    const variety = await Variety.findById(req.params.id);
    if (variety) {
      await variety.deleteOne({ _id: variety._id });
      return res.status(200).json("la variety fue borrada con exito");
    }
    return res.status(400).json("la variety no ha sido encontrada");
  },
  show: async function (req, res) {
    const variety = await Variety.findById(req.params.id);
    if (variety) {
      return res.json(variety);
    }
    return res.status(400);
  },
  update: async function (req, res) {
    const variety = await Variety.findById(req.params.id);
    if (variety) {
      await Variety.findByIdAndUpdate(
        { _id: variety._id },
        {
          name: req.body.name,
          code: req.body.code,
        },
      );
      return res.status(200).json("la variety fue modificada con exito");
    }
    return res.status(400).json("la variety no ha sido en contada");
  },
};
