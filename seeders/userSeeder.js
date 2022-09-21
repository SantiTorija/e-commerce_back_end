const User = require("../models/User");

module.exports = async () => {
  const user = await new User({
    firstname: "Carlos",
    lastname: "Perez",
    password: "password",
    email: "username@gmail.com",
    avatar: "https://i.postimg.cc/gjWvx26P/avataaars.png",
    address: "Avenida Rivera 5403",
    phone: "09837428",
  });
  user.save();

  const user2 = await new User({
    firstname: "Carla",
    lastname: "Gonzalez",
    password: "password",
    email: "carlagonzalez@gmail.com",
    avatar: "https://i.postimg.cc/MHSFzx6n/avataaars-1.png",
    address: "Avenida Italia 4324",
    phone: "0954395",
  });
  user2.save();

  const user3 = await new User({
    firstname: "Marcelo",
    lastname: "Zalayeta",
    password: "password",
    email: "marcelodanubio1891@gmail.com",
    avatar: "https://i.postimg.cc/sDkdLFSZ/avataaars-2.png",
    address: "Bulevar Artigas 5435",
    phone: "094353",
  });
  user3.save();
};
