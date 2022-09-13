const Administrator = require("../models/Administrator");

module.exports = async () => {
  const admin = await Administrator.create({
    firstname: "Jose",
    lastname: "Admin",
    password: "password",
    email: "admin@gmail.com",
  });
  admin.save();
};
