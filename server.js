require("dotenv").config();
const cors = require("cors");
const express = require("express");
const routes = require("./routes");
require("./dbInitialSetup");
const seeders = require("./seeders");
const APP_PORT = process.env.APP_PORT || 8000;
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

routes(app);

//seeders(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
});
