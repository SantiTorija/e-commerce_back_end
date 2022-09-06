const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const axios = require("axios");
const path = require("path");
const fs = require("fs");

faker.locale = "en";

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 100; i++) {
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    users.push({
      firstname: firstname,
      lastname: lastname,
      username: faker.internet.userName(firstname, lastname),
      password: "password",
      email: faker.internet.email(firstname, lastname),
      bio: faker.lorem.paragraph(),
      avatar: "",
      banner: "",
      tweets: [],
      followers: [],
      following: [],
    });
  }

  for (const user of users) {
    // Avatar
    const imagePath = path.join(__dirname, "../public/img/", `${user.username}.jpg`);
    const url = faker.image.avatar(500, 500);
    axios({
      method: "get",
      url: url,
      responseType: "stream",
    }).then((response) => {
      response.data.pipe(fs.createWriteStream(imagePath));
    });
    user.avatar = `${user.username}.jpg`;

    // Banner
    const imagePathBanner = path.join(__dirname, "../public/img/", `banner_${user.username}.jpg`);
    const urlBanner = faker.image.image(1500, 500);
    axios({
      method: "get",
      url: urlBanner,
      responseType: "stream",
    }).then((response) => {
      response.data.pipe(fs.createWriteStream(imagePathBanner));
    });
    user.banner = `banner_${user.username}.jpg`;
  }

  const createdUsers = await User.insertMany(users);
  for (let [index, user] of createdUsers.entries()) {
    const numeroDeFollowers = Math.floor(Math.random() * createdUsers.length);
    const listaAgregados = [index];
    for (let i = 0; i < numeroDeFollowers; i++) {
      const indexUser = Math.floor(Math.random() * createdUsers.length);
      if (listaAgregados.includes(indexUser)) {
        continue;
      }
      listaAgregados.push(indexUser);
      await user.updateOne({ $push: { followers: createdUsers[indexUser] } });
      await createdUsers[indexUser].updateOne({ $push: { following: user } });
    }
    user.save();
  }
  console.log("[Database] Se corrió el seeder de User.");
};
