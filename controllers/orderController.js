const { Order } = require("../models");

module.exports = {
  store: async function (req, res) {
    const myUser = await Users.findById(req.auth.id);
    const order = await Order.create({
      email: myUser.email,
      total: req.body.total,
      Date: Date(),
      user: myUser._id,
      products: [req.body.products],
      state: "sin pagar",
    });
  },
  update: async function (req, res) {
    const myUser = await Users.findById(req.auth.id);
    const id = req.params.id;
    const order = await Order.findByIdAndUpdate(
      { id },
      {
        email: myUser.email,
        total: req.body.total,
        Date: Date(),
        user: myUser._id,
        products: [req.body.products],
        state: req.body.state,
      },
    );
    res.json(order);
  },
  destroy: async function (req, res) {
    const order = await User.findById(req.body.id);
    await Order.deleteOne({ _id: order._id });
  },
};
