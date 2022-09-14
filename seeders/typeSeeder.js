const Type = require("../models/Type");

module.exports = async () => {
  const type = await Type.create({
    name: "tinto",
    code: 1,
  });
  type.save();
  const type2 = await Type.create({
    name: "blanco",
    code: 2,
  });
  type2.save();
  const type3 = await Type.create({
    name: "rose",
    code: 3,
  });
  type3.save();
  const type4 = await Type.create({
    name: "espumante",
    code: 4,
  });
  type4.save();
  const type5 = await Type.create({
    name: "licoroso",
    code: 5,
  });
  type5.save();
};
