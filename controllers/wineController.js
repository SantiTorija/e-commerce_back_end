const { Wine } = require("../models");

module.exports = {
  index: async function (req, res) {
    const wines = await Wine.find();
    res.json(wines);
  },
  store: async function (req, res) {
    const wine = await Wine.create({
      name: req.body.name,
      picture: req.body.picture,
      type: req.body.type,
      variety: req.body.variety,
      country: req.body.country,
      region: req.body.region,
      harvest: req.body.harvest,
      cellar: req.body.cellar,
      capacity: req.body.capacity,
      tastingNote: req.body.tastingNote,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      highlighted: req.body.highlighted,
      slug: req.body.slug,
    });
    res.json(wine);
  },
  destroy: async function (req, res) {
    const wine = await Wine.findById(req.params.id);
    if (wine) {
      await Wine.deleteOne({ _id: wine._id });
      return res.status(200);
    }
    return res.status(400);
  },
  show: async function (req, res) {
    const wine = await Wine.findById(req.params.id);
    if (wine) {
      return res.json(wine);
    }
    return res.status(400);
  },
  update: async function (req, res) {
    const id = req.params.id;
    const wine = await Wine.findByIdAndUpdate(
      { id },
      {
        name: req.body.name,
        picture: req.body.picture,
        type: req.body.type,
        variety: req.body.variety,
        country: req.body.country,
        region: req.body.region,
        harvest: req.body.harvest,
        cellar: req.body.cellar,
        capacity: req.body.capacity,
        tastingNote: req.body.tastingNote,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        highlighted: req.body.highlighted,
        slug: req.body.slug,
      },
    );
    res.json(wine);
  },
};
