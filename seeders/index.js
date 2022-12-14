const mongoose = require("mongoose");

module.exports = async () => {
  // Borrar base de datos:

  //await mongoose.connection.dropDatabase();
  //console.log("[Database] La base de datos fue vaciada");
  console.log("corri_seeders");
  // Ejecutar seeders (datos de prueba):
  await require("./typeSeeder")();
  await require("./userSeeder")();
  await require("./adminSeeder")();
  await require("./wineSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
