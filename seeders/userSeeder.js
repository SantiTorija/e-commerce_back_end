const User = require("../models/User");

module.exports = async () => {
  const user = await User.create({
    firstname: "Carlos",
    lastname: "Perez",
    password: "password",
    email: "carlosperez@gmail.com",
    avatar: "https://i.postimg.cc/gjWvx26P/avataaars.png",
    address: "Avenida Rivera 5403",
    phone: "09837428",
  });
  user.save();

  const user2 = await User.create({
    firstname: "Carla",
    lastname: "Sarasa",
    password: "password",
    email: "carlasarasa@gmail.com",
    avatar: "https://i.postimg.cc/MHSFzx6n/avataaars-1.png",
    address: "Avenida Italia 4324",
    phone: "0954395",
  });
  user2.save();

  const user3 = await User.create({
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
