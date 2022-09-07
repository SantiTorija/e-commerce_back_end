const mongoose = require("mongoose");

module.exports = async () => {
  // Borrar base de datos:
  await mongoose.connection.dropDatabase();
  console.log("[Database] La base de datos fue vaciada");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/userSeeder")();
  await require("./seeders/adminSeeder")();
  await require("./seeders/wineSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
