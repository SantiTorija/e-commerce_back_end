require("dotenv").config();
const cors = require("cors");
const express = require("express");
//const routes = require("./routes/publicRoutes");
const methodOverride = require("method-override");
const dbInitialSetup = require("./dbInitialSetup");
const APP_PORT = process.env.APP_PORT || 8000;
const app = express();

const { User } = require("./models");

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

//app.use(routes);

//dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
});
