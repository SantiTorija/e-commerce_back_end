const { Order, User } = require("../models");

module.exports = {
  store: async function (req, res) {
    const myUser = await User.findById(req.auth.id);
    if (myUser) {
      const order = await Order.create({
        email: myUser.email,
        total: req.body.total,
        Date: Date(),
        user: myUser._id,
        products: [req.body.products],
        state: "sin pagar",
      });
      await User.findOneAndUpdate(
        { _id: myUser._id },
        {
          orders: [...myUser.orders, order._id],
        },
      );
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
    if (req.auth.id) {
      const orders = await Order.find({ user: req.auth.id });
      if (orders) return res.status(200).json(orders);
    }
    return res.status(400).json("error en el token");
  },
};
