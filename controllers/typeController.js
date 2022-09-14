const Wine = require("../models/Wine");
const Type = require("../models/Type");

module.exports = {
  index: async function (req, res) {
    const types = await Type.find();
    res.json(types);
  },
  store: async function (req, res) {
    const isType = await Type.findOne({ name: req.body.name.toLowerCase() });
    if (isType) return res.status(401).json({ error: "type already exist" });
    const type = await Type.create({
      name: req.body.name,
      code: req.body.code,
    });
    res.status(200).json(type);
  },
  destroy: async function (req, res) {
    const type = await Type.findById(req.body.id);
    if (type) {
      await type.deleteOne({ id: type._id });
      return res.status(200).json("remove type succes");
    }
    return res.status(400).json("type not found");
  },
  show: async function (req, res) {
    const type = await Type.findById(req.params.id);
    if (type) {
      return res.json(type);
    }
    return res.status(400);
  },
  update: async function (req, res) {
    try {
      const type = await Type.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        code: req.body.code,
      });
      return res.status(200).json("type update succes");
    } catch (error) {
      console.log(error);
      return res.status(400).json("type not found");
    }
  },
};
