const Wine = require("../models/Wine");
const Type = require("../models/Type");
const slugify = require("slugify");

module.exports = {
  index: async function (req, res) {
    const wines = await Wine.find().populate("type");
    res.json(wines);
  },
  store: async function (req, res) {
    console.log("lo cree");
    const types = await Type.find();
    let wineType;
    if (req.body.type === "Tinto") {
      wineType = types[0]._id;
    } else if (req.body.type === "Blanco") {
      wineType = types[1]._id;
    } else if (req.body.type === "Rose") {
      wineType = types[2]._id;
    } else {
      wineType = types[3].id;
    }
    function generatedSlug(info) {
      return slugify(info, {
        replacement: "-",
        remove: undefined,
        lower: true,
        remove: /[.]/g,
      });
    }
    const wine = await Wine.create({
      name: req.body.name,
      picture: req.body.picture,
      type: wineType,
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
      slug: generatedSlug(req.body.name),
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
      return res.status(200).json("El vino ha sido borrado con exito");
    }
    return res.status(400).json("El vino no ha sido encontrado");
  },
  show: async function (req, res) {
    const wine = await Wine.findOne({ slug: req.params.slug }).populate("type");
    if (wine) {
      return res.json(wine);
    }
    return res.status(400).json("el vino no se encuentra");
  },
  update: async function (req, res) {
    const wine = await Wine.findById(req.params.id);
    function generatedSlug(info) {
      return slugify(info, {
        replacement: "-",
        remove: undefined,
        lower: true,
        remove: /[.]/g,
      });
    }
    const types = await Type.find();
    let wineType;
    if (req.body.type === "Tinto") {
      wineType = types[0]._id;
    } else if (req.body.type === "Blanco") {
      wineType = types[1]._id;
    } else if (req.body.type === "Rose") {
      wineType = types[2]._id;
    } else {
      wineType = types[3].id;
    }

    if (wine) {
      await Wine.findOneAndUpdate(
        { _id: wine._id },
        {
          name: req.body.name,
          picture: req.body.picture,
          type: wineType,
          variety: req.body.variety,
          country: req.body.country,
          region: req.body.region,
          harvest: req.body.harvest,
          cellar: req.body.cellar,
          capacity: req.body.capacity,
          description: req.body.description,
          price: req.body.price,
          stock: req.body.stock,
          highlighted: req.body.highlighted,
          slug: generatedSlug(req.body.name),
        },
      );
    }

    if (wine) {
      return res.status(200).json("el vino ha sido modificado con exito");
    }
    return res.status(400).json("el vino no ha sido encontrado");
  },
  filter: async function (req, res) {
    if (req.params.type === "todos") {
      const wines = await Wine.find().populate("type");
      return res.json(wines);
    }
    const wines = await Wine.find().populate("type");
    if (wines) {
      const response = [];
      for (let i = 0; i < wines.length; i++) {
        if (wines[i].type.name === req.params.type) {
          response.push(wines[i]);
        }
      }
      return res.status(200).json(response);
    }
    return res.status(400).json("el vino no ha sido encontrado");
  },
  search: async function (req, res) {
    const buscar = req.params.wineName.toLowerCase();
    if (buscar) {
      const wines = await Wine.find().populate("type");
      const winesSearched = [];
      for (const wine of wines) {
        if (wine.name.toLowerCase().indexOf(buscar) === 0) {
          winesSearched.push(wine);
        }
      }
      return res.status(200).json(winesSearched);
    }
    return res.status(400).json({ error: "el vino no ha sido encontrado" });
  },
};
