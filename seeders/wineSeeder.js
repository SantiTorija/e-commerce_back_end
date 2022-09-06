const { Wine } = require("../models");

module.exports = async () => {
  for (let i = 0; i < 11; i++) {
    const wine = await Wine.create({
      name: "19 CRIMES CABERNET SAUVIGNON",
      picture:
        "https://cdn.shopify.com/s/files/1/0042/8477/6517/products/19Crimes-CabSauv-VDM_2000x.jpg",
      type: "String",
      country: "Australia",
      region: "South Eastern Australia",
      harvest: "2018",
      cellar: "String",
      capacity: "750 ml",
      tasting:
        "De color rojo brillante a tonalidades carmesí, este vino presenta aromas intensos de vainilla, grosellas rojas, violetas y frutos negros. En la boca se presenta firme y lleno, con una dulzura sutil que da una sensación muy agradable. Los aromas de vainilla continúan en el paladar y complementan sutiles sabores de grosellas rojas, cerezas oscuras y chocolate. Los taninos suaves proporcionan un final persistente.",
      description:
        "Fueron 19 crímenes que convirtieron a los convictos en colonos. Tras ser declarados culpables, los rufianes británicos,culpables de al menos uno de los 19 crímenes, fueron condenados a vivir en Australia, en lugar de la pena de muerte. Para estos bravos prisioneros que llegaban a la costa de Australia, les esperaba un nuevo mundo. Como pioneros, en una colonia penal fronteriza, forjaron un nuevo país, forjaron sus nuevas vidas, paso a paso.",
      price: 40,
      stock: 10,
      highlighted: true,
      slug: "19-CRIMES-CABERNET-SAUVIGNON",
    });
    wine.save();
  }
};
