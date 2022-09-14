const Wine = require("../models/Wine");

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
    if (wine) {
      return res.status(200).json("el vino ha sido creado con exito");
    }
    return res.status(400).json("el vino no se ha creado");
  },
  destroy: async function (req, res) {
    const wine = await Wine.findById(req.params.id);
    if (wine) {
      await Wine.deleteOne({ _id: wine._id });
      console.log("lo borre");
      return res.status(200).json("El vino ha sido borrado con exito");
    }
    return res.status(400).json("El vino no ha sido encontrado");
  },
  show: async function (req, res) {
    const wine = await Wine.findOne({ slug: req.params.slug }).populate("variety");
    if (wine) {
      return res.json(wine);
    }
    return res.status(400).json("el vino no se encuentra");
  },
  update: async function (req, res) {
    const wine = await Wine.findById(req.params.id);
    if (wine) {
      await Wine.findOneAndUpdate(
        { _id: wine._id },
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
    }

    if (wine) {
      return res.status(200).json("el vino ha sido modificado con exito");
    }
    return res.status(400).json("el vino no ha sido encontrado");
  },
  showType: async function (req, res) {
    console.log(req.params.type);
    const tipo = parseInt(req.params.type);
    if (tipo === 0) {
      const allWines = await Wine.find();
      if (allWines) return res.json(allWines);
      return res.status(400).json("el vino no ha sido encontrado");
    }
    const wines = await Wine.find({ type: tipo });
    console.log(wines);
    if (wines) return res.json(wines);
    return res.status(400).json("el vino no ha sido encontrado");
  },
};
