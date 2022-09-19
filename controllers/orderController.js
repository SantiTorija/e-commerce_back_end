const Order = require("../models/Order");
const User = require("../models/User");
const Wine = require("../models/Wine");

module.exports = {
  store: async function (req, res) {
    const myUser = await User.findById(req.auth.id);
    if (myUser) {
      const order = await Order.create({
        email: myUser.email,
        total: req.body.total,
        Date: Date(),
        user: myUser._id,
        products: req.body.products,
        state: "pagada",
        address: req.body.address,
      });
      await User.findOneAndUpdate(
        { _id: myUser._id },
        {
          orders: [...myUser.orders, order._id],
        },
      );
      for (const wine of req.body.products) {
        await Wine.findOneAndUpdate(
          { _id: wine._id },
          {
            stock: wine.stock - wine.cartQuantity,
          },
        );
      }
      return res.status(200).json("la order fue creada con exito");
    }
    return res.status(400).json("la order no fue creada");
  },
  update: async function (req, res) {
    const order = await Order.findById(req.params.id);
    if (order) {
      await Order.findOneAndUpdate(
        { _id: order._id },
        {
          total: req.body.total,
          products: [req.body.products],
          state: req.body.state,
        },
      );
      return res.status(200).json("el order ha sido modificado con exito");
    }
    return res.status(400).json("el order no ha sido encontrado");
  },
  index: async function (req, res) {
    const orders = await Order.find();
    if (orders) return res.status(200).json(orders);
    return res.status(400).json({ error: "no se encontraron ordenes" });
  },
};
