const { Wine } = require("../models");
const slugify = require("slugify");

module.exports = async () => {
  const wine = await Wine.create({
    name: "19 CRIMES CABERNET SAUVIGNON",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-astoria-017.png",
    type: "tinto",
    country: "Australia",
    region: "South Eastern Australia",
    harvest: "2018",
    cellar: "Bodega Gold Coast",
    capacity: "750 ml",
    tasting:
      "De color rojo brillante a tonalidades carmesí, este vino presenta aromas intensos de vainilla, grosellas rojas, violetas y frutos negros. En la boca se presenta firme y lleno, con una dulzura sutil que da una sensación muy agradable. Los aromas de vainilla continúan en el paladar y complementan sutiles sabores de grosellas rojas, cerezas oscuras y chocolate. Los taninos suaves proporcionan un final persistente.",
    description:
      "Fueron 19 crímenes que convirtieron a los convictos en colonos. Tras ser declarados culpables, los rufianes británicos,culpables de al menos uno de los 19 crímenes, fueron condenados a vivir en Australia, en lugar de la pena de muerte. Para estos bravos prisioneros que llegaban a la costa de Australia, les esperaba un nuevo mundo. Como pioneros, en una colonia penal fronteriza, forjaron un nuevo país, forjaron sus nuevas vidas, paso a paso.",
    price: 40,
    stock: 10,
    highlighted: false,
    slug: slugify("19 CRIMES CABERNET SAUVIGNON", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine.save();

  const wine2 = await Wine.create({
    name: "AMIRAL DE BEYCHEVELLE",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-mouton-cadet-rouge.png",
    type: "tinto",
    country: "Francia",
    region: "St. Julien",
    harvest: "2019",
    cellar: "Bodega Joseph 54",
    capacity: "750 ml",
    tasting:
      "A pesar de estar hecho de viñas jóvenes, Amiral de Beychevelle se beneficia de las mismas técnicas de cultivo, la clasificación meticulosa y el envejecimiento tradicional del barril. Es delicado y elegante pero revela su carácter más rápidamente, ofreciendo a los entusiastas del vino la plena vivacidad de su juventud. Puede conservarse hasta quince años, según la cosecha.",
    description:
      "Color violeta negro intenso. Se destacan en nariz aromas a ciruela, especias y pimiento rojo con delicadas notas a menta. En boca es un vino muy armónico, equilibrado, de taninos redondos y largo final.",
    price: 36,
    stock: 10,
    highlighted: false,
    slug: slugify("AMIRAL DE BEYCHEVELLE", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine2.save();

  const wine3 = await Wine.create({
    name: "PENFOLDS GRANGE",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-domaine-barondarques.png",
    type: "tinto",
    country: "Austalia",
    region: "South Australia",
    harvest: "2015",
    cellar: "Bodega Penfolds",
    capacity: "750 ml",
    tasting:
      "Color negro opaco, con bordes rojo oscuro. En nariz es una erupción aromática, especias y mucha frambuesa fresca. Aparecen muy bien integrados los aromas de la barrica, respetando la fruta de la uva madura. Gran elegancia. En boca es formidable, sin vacíos, un vino continuo estructuralmente y densamente integrado. No es enorme, no es masivo, pero si vibrante y potente. Frutos negros, regaliz, higos negros aparecen en capas bien marcadas. Un tsunami de sabores.",
    description:
      "Penfolds es actualmente uno de los exportadores más grandes de vino australiano, elaborando una amplia gama de los vinos donde el legendario Penfolds Grange es el más conocido y famoso vino australiano. Según indica Oz Clarke en su Enciclopedia del Vino, probablemente Penfolds ha hecho mucho más que cualquier otro vino por advertir al mundo la presencia del vino australiano.",
    price: 49,
    stock: 10,
    highlighted: true,
    slug: slugify("PENFOLDS GRANGE", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine3.save();

  const wine4 = await Wine.create({
    name: "MONTES CHERUB ROSE",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-dreamline-rose.png",
    type: "rose",
    country: "Chile",
    region: "Casablanca",
    harvest: "2016",
    cellar: "Bodega Montes",
    capacity: "750 ml",
    tasting:
      "Montes Cherub es un vino seco, seductor y elegante, con un brillante color rosado. Es una excelente expresión de su terroir. En nariz y paladar se muestra el carácter distintivo del Syrah, con notas de frutillas, rosas y naranja.",
    description:
      "Montes Cherub es el resultado de años de experimentación con el Syrah, con el que fuimos pioneros en el Valle de Colchagua. Es un vino seco, seductor y elegante, con un brillante color rosado. Es una excelente expresión de su terroir. En nariz y paladar se muestra el carácter distintivo del Syrah, con notas de frutillas, rosas y naranja. De gran concentración frutal, muestra su riqueza de textura en el paladar con un largo y delicioso final. Posee un fuerte soporte de acidez y una pequeña presencia de taninos que le dan una estructura muy definida.",
    price: 49,
    stock: 10,
    highlighted: true,
    slug: slugify("MONTES CHERUB ROSE", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine4.save();

  const wine5 = await Wine.create({
    name: "ANTIGUA BODEGA PRIMA DONNA",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-mapu-reserva-cabernet.png",
    type: "tinto",
    country: "Uruguay",
    region: "Canelones",
    harvest: "2015",
    cellar: "Antigua Bodega",
    capacity: "750 ml",
    tasting:
      "Color amarillo pálido con tonos verdosos. Aroma de maracuyá, manzana verde, ananá, frutos tropicales y flores frescas.",
    description:
      "Con el pasar de los años la familia Stagnari Moise ha dedicado su vida, alma y pasión en descubrir los secretos de nuestras tierras y llevar sus vinos al mundo que son el resultado de conocimientos que se han transmitido de generación en generación. Una misteriosa tradición cuyo procedimiento se remonta siglos atrás en tiempos de mitos y leyendas. Sus secretos han pasado de generación en generación y a través de océanos y mares llegaron al nuevo mundo donde los enólogos mantienen las antiguas técnicas de vinificación con el soporte de las últimas innovaciones tecnológicas.",
    price: 33,
    stock: 10,
    highlighted: true,
    slug: slugify("ANTIGUA BODEGA PRIMA DONNA", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine5.save();

  const wine6 = await Wine.create({
    name: "FAMILIA DEICAS LICOR DE TANNAT",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-montecastrillo.png",
    type: "licoroso",
    country: "Uruguay",
    region: "Canelones",
    harvest: "2015",
    cellar: "Familia Deicas",
    capacity: "750 ml",
    tasting:
      "Color negro intenso. En nariz se presenta aroma de higos maduros, menta y chocolate. En boca se muestra muy amable con un notable equilibrio frutal, dulce y tánico. Ideal para acompañar postres, especialmente de chocolate, así como quesos o como licor de sobremesa. ",
    description:
      "Este Licor de Tannat es el primero en ser producido en Uruguay a partir de las más concentradas uvas de la variedad Tannat y de acuerdo a las técnicas de elaboración del famoso Oporto Vintage. Fue elaborado por la tercera generación de la Familia Deicas, Santiago y Fernando Deicas, cuando estos tenían solo 15 y 13 años respectivamente.  Al usar alcohol neutro, sin aromas, se preservan los aromas de la uva, tal como si se estuviese degustando una uva de Tannat madura, de la misma viña.",
    price: 21,
    stock: 10,
    highlighted: true,
    slug: slugify("FAMILIA DEICAS LICOR DE TANNAT", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine6.save();

  const wine7 = await Wine.create({
    name: "LOS VASCOS",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-cabernet-paysdoc.png",
    type: "tinto",
    country: "Chile",
    region: "Colchagua",
    harvest: "2019",
    cellar: "Los Vascos",
    capacity: "750 ml",
    tasting:
      "Intenso color rojo. Nariz marcada por la presencia de aromas a frutas frescas tales como fresas, frambuesas, granadas y grosellas. Boca fresca, de buen carácter y final intenso, persistente y envolvente. Se recomienda beberlo lo antes posible para apreciar su juventud. Excelente como aperitivo o para acompañar comidas ligeramente condimentadas como gazpacho, pizza o paella. Servir frío entre 11 y 13 °C.",
    description:
      "El establecimiento Los Vascos perteneció a la Familia Echenique desde 1850, hasta que fue adquirido por Domaines Barons de Rothschild en 1988. Actualmente es una de las mayores propiedades vitivinicolas de Chile en superficie, abarcando unas 2200 hectareas totales, las que incluyen 220 hectareas de viñedos los cuales son manejados bajo el mando directo del Chateau Lafite Rothschild de Francia. A 130 metros de altitud y 40 km del Océano Pacífico, el viñedo goza de un microclima especialmente propicio para la producción de grandes vinos.",
    price: 11,
    stock: 54,
    highlighted: false,
    slug: slugify("LOS VASCOS", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine7.save();

  const wine8 = await Wine.create({
    name: "ANTIGUA BODEGA DEL PEDREGAL TANNAT",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-reserve-bourgogne.png",
    type: "tinto",
    country: "Uruguay",
    region: "Canelones",
    harvest: "2015",
    cellar: "Antigua Bodega",
    capacity: "750 ml",
    tasting: "Intenso color rubí. Aromas a frutos del bosque y chocolate amargo",
    description:
      "Con el pasar de los años la familia Stagnari Moise ha dedicado su vida, alma y pasión en descubrir los secretos de nuestras tierras y llevar sus vinos al mundo que son el resultado de conocimientos que se han transmitido de generación en generación. Una misteriosa tradición cuyo procedimiento se remonta siglos atrás en tiempos de mitos y leyendas. Sus secretos han pasado de generación en generación y a través de océanos y mares llegaron al nuevo mundo donde los enólogos mantienen las antiguas técnicas de vinificación con el soporte de las últimas innovaciones tecnológicas.",
    price: 19,
    stock: 24,
    highlighted: false,
    slug: slugify("ANTIGUA BODEGA DEL PEDREGAL TANNAT", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine8.save();

  const wine9 = await Wine.create({
    name: "ANTIGUA BODEGA OSIRIS MERLOT",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-syrah-paysdoc.png",
    type: "tinto",
    country: "Uruguay",
    region: "Canelones",
    harvest: "2011",
    cellar: "Antigua Bodega",
    capacity: "750 ml",
    tasting:
      "Intenso color violáceo oscuro. Muestra aromas de cereza, moras y ciruelas con notas de café, chocolate y vainilla.",
    description:
      "Con el pasar de los años la familia Stagnari Moise ha dedicado su vida, alma y pasión en descubrir los secretos de nuestras tierras y llevar sus vinos al mundo que son el resultado de conocimientos que se han transmitido de generación en generación. Una misteriosa tradición cuyo procedimiento se remonta siglos atrás en tiempos de mitos y leyendas. Sus secretos han pasado de generación en generación y a través de océanos y mares llegaron al nuevo mundo donde los enólogos mantienen las antiguas técnicas de vinificación con el soporte de las últimas innovaciones tecnológicas.",
    price: 39,
    stock: 34,
    highlighted: false,
    slug: slugify("ANTIGUA BODEGA OSIRIS MERLOT", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine9.save();
  const wine10 = await Wine.create({
    name: "ALMA NEGRA ESPUMANTE BRUT",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-astoria-sushi.png",
    type: "espumante",
    country: "Argentina",
    region: "Mendoza",
    harvest: "2015",
    cellar: "Alma negra",
    capacity: "750 ml",
    tasting:
      "Intenso color Rosa. Muestra aromas de cereza, moras y ciruelas con notas de café, chocolate y vainilla.",
    description:
      "En nariz intensidad aromática, frutal y con notas a tostados. En boca es envolvente, con una acidez ligera que le brinda frescura. Su estructura es muy buena con taninos suaves y redondos y con un complejo y agradable final.",
    price: 41,
    stock: 20,
    highlighted: false,
    slug: slugify("ALMA NEGRA ESPUMANTE BRUT", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine10.save();
  const wine11 = await Wine.create({
    name: "BIANCHI FAMIGLIA EXTRA BRUT",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-95astoria-rose2.png",
    type: "espumante",
    country: "Argentina",
    region: "Mendoza",
    harvest: "2018",
    cellar: "Bianchi",
    capacity: "750 ml",
    tasting:
      "Impacta a los ojos con reflejos verde-limón. Es seductor, con fragancias florales y frutales, destacándose las notas de jazmín y durazno blanco. Fresco de carácter varietal único amalga perfectamente con notas minerales.",
    description:
      "La línea Famiglia, reconocida internacionalmente, nos acerca una gama de vinos complejos e intensos que logran expresar de manera inigualable, las particularidades propias de los viñedos que la familia Bianchi posee en San Rafael y el Valle de Uco. ",
    price: 29,
    stock: 24,
    highlighted: false,
    slug: slugify("BIANCHI FAMIGLIA EXTRA BRUT", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine11.save();
  const wine12 = await Wine.create({
    name: "BOTRYTIS NOBLE",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-syrah-paysdoc.png",
    type: "licoroso",
    country: "Uruguay",
    region: "Juanico",
    harvest: "2011",
    cellar: "Familia Deicas",
    capacity: "750 ml",
    tasting:
      "Color dorado intenso capaz de evolucionar hasta ocre con la crianza. Nariz con aromas de damascos secos, lychee, rosas, miel y ananá. Boca con gran equilibrio de dulzura y acidez, con notas de fruta seca, miel y almendras.",
    description:
      "Cosecha Tardía elaborado a partir de racimos sobremadurados, que desarrollan Botrytis Cinerea, gran responsable de los famosos Sauternes y de los mejores Vinos Nobles del mundo. Su desarrollo es muy complejo y requiere microclimas como el de Juanicó, ni muy áridos ni muy cálidos. El preciso ataque de la “botrytis” concentra los granos de uva, haciendo prevalecer el sabor aportado por el hongo sobre el sabor de la variedad.",
    price: 15,
    stock: 44,
    highlighted: false,
    slug: slugify("BOTRYTIS NOBLE", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine12.save();
  const wine13 = await Wine.create({
    name: "ANIMAL ORGANIC CHARDONNAY",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-chardonnay-paysdoc.png",
    type: "blanco",
    country: "Argentina",
    region: "Mendoza",
    harvest: "2018",
    cellar: "Animal Organic",
    capacity: "750 ml",
    tasting: "Amarillo pálido con reflejos verdes. Cítrico con notas a pan tostado.",
    description:
      "Desde hace 4 generaciones, la familia Catena ha cultivado vinos a los pies de la Cordillera de los Andes en Mendoza, Argentina. En su búsqueda por hacer vinos que destaquen entre los mejores del mundo, Nicolás Catena identificó los mejores lotes y  filas en los viñedos de la familia Catena.",
    price: 42,
    stock: 14,
    highlighted: false,
    slug: slugify("ANIMAL ORGANIC CHARDONNAY", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine13.save();
  const wine14 = await Wine.create({
    name: "ADRIANNA VINEYARD WHITE BONES",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-sauvignonblanc-paysdoc.png",
    type: "blanco",
    country: "Argentina",
    region: "Salta",
    harvest: "2008",
    cellar: "Catena Zapata",
    capacity: "750 ml",
    tasting: "Aroma floral distintivo con una mineralidad terrosa en nariz y paladar. ",
    description:
      "White Bones Chardonnay viene de una selecta hilera dentro del bloque 1 en el viñedo de Adrianna. El nombre refiere a los suelos debajo de estas hileras que está en capas con depósitos calcáreos y piedra caliza, así como huesos de animales fosilizados de un río qe solía pasar por la región.",
    price: 151,
    stock: 10,
    highlighted: false,
    slug: slugify("ADRIANNA VINEYARD WHITE BONES", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine14.save();
  const wine15 = await Wine.create({
    name: "GARZON RESERVA PINOT NOIR ROSE",
    picture: "https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-bordeaux-rose2016.png",
    type: "rose",
    country: "Uruguay",
    region: "Garzon",
    harvest: "2015",
    cellar: "Antigua Bodega",
    capacity: "1500 ml",
    tasting:
      "Intenso color rosa con notas amarillentas. Muestra aromas de cereza, moras y ciruelas, ideal para acompañar postres o aperitivos.",
    description:
      "Rose Magnum es el resultado de años de experimentación con el Syrah, con el que fuimos pioneros en el Valle de Colchagua. Es un vino seco, seductor y elegante, con un brillante color rosado. Es una excelente expresión de su terroir. En nariz y paladar se muestra el carácter distintivo del Syrah, con notas de frutillas, rosas y naranja. De gran concentración frutal, muestra su riqueza de textura en el paladar con un largo y delicioso final. Posee un fuerte soporte de acidez y una pequeña presencia de taninos que le dan una estructura muy definida.",
    price: 20,
    stock: 40,
    highlighted: false,
    slug: slugify("GARZON RESERVA PINOT NOIR ROSE", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine15.save();
};
