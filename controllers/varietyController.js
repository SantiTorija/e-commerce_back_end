const { Wine, Variety } = require("../models");

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
      return res.status(200);
    }
    return res.status(400);
  },
  show: async function (req, res) {
    const variety = await Variety.findById(req.params.id);
    if (variety) {
      return res.json(variety);
    }
    return res.status(400);
  },
  update: async function (req, res) {
    const id = req.params.id;
    const variety = await Variety.findByIdAndUpdate(
      { id },
      {
        name: req.body.name,
        code: req.body.code,
      },
    );
    res.json(variety);
  },
};
