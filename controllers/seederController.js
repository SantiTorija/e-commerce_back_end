const { mongoose } = require("../dbInitialSetup");
const seeders = require("../seeders");

module.exports = {
  destroy: async function (req, res) {
    mongoose.connection.dropCollection("wines");
    mongoose.connection.dropCollection("types");
    mongoose.connection.dropCollection("administrators");
    mongoose.connection.dropCollection("orders");
    mongoose.connection.dropCollection("users");
    seeders();
    res.json({ response: "base de datos reseteada" });
  },
};
