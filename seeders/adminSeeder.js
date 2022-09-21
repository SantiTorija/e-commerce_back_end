const Administrator = require("../models/Administrator");

module.exports = async () => {
  const admin = await new Administrator({
    firstname: "Jose",
    lastname: "Admin",
    password: "password",
    email: "admin@gmail.com",
  });
  admin.save();
};
