const Wine = require("../models/Wine");
const Type = require("../models/Type");
const slugify = require("slugify");

module.exports = async () => {
  const types = await Type.find();
  const wine = await Wine.create({
    name: "19 CRIMES CABERNET SAUVIGNON",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663300244/ecommerce/19Crimes-tinto_rftahx.png",
    country: "Australia",
    type: types[0]._id,
    region: "South Eastern Australia",
    harvest: "2018",
    cellar: "Bodega Gold Coast",
    capacity: "750 ml",
    description:
      "Fueron 19 crímenes que convirtieron a los convictos en colonos. Tras ser declarados culpables, los rufianes británicos,culpables de al menos uno de los 19 crímenes, fueron condenados a vivir en Australia, en lugar de la pena de muerte. Para estos bravos prisioneros que llegaban a la costa de Australia, les esperaba un nuevo mundo. Como pioneros, en una colonia penal fronteriza, forjaron un nuevo país, forjaron sus nuevas vidas, paso a paso.",
    price: 40,
    stock: 10,
    highlighted: true,
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
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663301670/ecommerce/AMIRAL_DE_BEYCHEVELLE_dopkpg.png",
    country: "Francia",
    type: types[0]._id,
    region: "St. Julien",
    harvest: "2019",
    cellar: "Bodega Joseph 54",
    capacity: "750 ml",
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
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663301477/ecommerce/PENFOLDS_GRANGE_zom2sz.png",
    country: "Austalia",
    region: "South Australia",
    type: types[0]._id,
    harvest: "2015",
    cellar: "Bodega Penfolds",
    capacity: "750 ml",
    description:
      "Color negro opaco, con bordes rojo oscuro. En nariz es una erupción aromática, especias y mucha frambuesa fresca. Aparecen muy bien integrados los aromas de la barrica, respetando la fruta de la uva madura. Gran elegancia. En boca es formidable, sin vacíos, un vino continuo estructuralmente y densamente integrado",
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
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663301375/ecommerce/MONTES_CHERUB_ROSE_p2zzrr.png",
    country: "Chile",
    region: "Casablanca",
    type: types[2]._id,
    harvest: "2016",
    cellar: "Bodega Montes",
    capacity: "750 ml",
    description:
      "Montes Cherub es un vino seco, seductor y elegante, con un brillante color rosado. Es una excelente expresión de su terroir. En nariz y paladar se muestra el carácter distintivo del Syrah, con notas de frutillas, rosas y naranja.",
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
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663301851/ecommerce/ANTIGUA_BODEGA_PRIMA_DONNA_lniurv.png",
    country: "Uruguay",
    region: "Canelones",
    harvest: "2015",
    cellar: "Antigua Bodega",
    type: types[3]._id,
    capacity: "750 ml",
    description:
      "Color amarillo pálido con tonos verdosos. Aroma de maracuyá, manzana verde, ananá, frutos tropicales y flores frescas.",
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

  const wine7 = await Wine.create({
    name: "LOS VASCOS",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663302221/ecommerce/LOS_VASCOS_c6yfx7.png",
    country: "Chile",
    region: "Colchagua",
    type: types[0]._id,
    harvest: "2019",
    cellar: "Los Vascos",
    capacity: "750 ml",
    description:
      "Intenso color rojo. Nariz marcada por la presencia de aromas a frutas frescas tales como fresas, frambuesas, granadas y grosellas. Boca fresca, de buen carácter y final intenso, persistente y envolvente. Se recomienda beberlo lo antes posible para apreciar su juventud. Excelente como aperitivo o para acompañar comidas ligeramente condimentadas como gazpacho, pizza o paella.",
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
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663302589/ecommerce/ANTIGUA_BODEGA_DEL_PEDREGAL_TANNAT_gwvflq.png",
    country: "Uruguay",
    region: "Canelones",
    harvest: "2015",
    cellar: "Antigua Bodega",
    type: types[0]._id,
    capacity: "750 ml",
    description:
      "Con el pasar de los años la familia Stagnari Moise ha dedicado su vida, alma y pasión en descubrir los secretos de nuestras tierras y llevar sus vinos al mundo que son el resultado de conocimientos que se han transmitido de generación en generación. Intenso color rubí. Aromas a frutos del bosque y chocolate amargo",
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
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663302696/ecommerce/ANTIGUA_BODEGA_OSIRIS_MERLOT_ekzjgf.png",
    country: "Uruguay",
    region: "Canelones",
    harvest: "2011",
    cellar: "Antigua Bodega",
    type: types[0]._id,
    capacity: "750 ml",
    tastingNote: "",
    description:
      "Con el pasar de los años la familia Stagnari Moise ha dedicado su vida, alma y pasión en descubrir los secretos de nuestras tierras y llevar sus vinos al mundo que son el resultado de conocimientos que se han transmitido de generación en generación. Intenso color violáceo oscuro. Muestra aromas de cereza, moras y ciruelas con notas de café, chocolate y vainilla.",
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
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663303138/ecommerce/ALMA_NEGRA_ESPUMANTE_BRUT_cgnrvp.png",
    type: types[3]._id,
    country: "Argentina",
    region: "Mendoza",
    harvest: "2015",
    cellar: "Alma negra",
    capacity: "750 ml",
    description:
      "Intenso color Rosa. Muestra aromas de cereza, moras y ciruelas con notas de café, chocolate y vainilla.En nariz intensidad aromática, frutal y con notas a tostados. En boca es envolvente, con una acidez ligera que le brinda frescura. Su estructura es muy buena con taninos suaves y redondos y con un complejo y agradable final.",
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
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663303249/ecommerce/BIANCHI_FAMIGLIA_EXTRA_BRUT_a4vf8n.png",
    type: types[3]._id,
    country: "Argentina",
    region: "Mendoza",
    harvest: "2018",
    cellar: "Bianchi",
    capacity: "750 ml",
    description:
      "Impacta a los ojos con reflejos verde-limón. Es seductor, con fragancias florales y frutales, destacándose las notas de jazmín y durazno blanco. Fresco de carácter varietal único amalga perfectamente con notas minerales.",
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
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663303625/ecommerce/ALEJANDRO_FERN%C3%81NDEZ_PESQUERA_CRIANZA_noqmdw.png",
    type: types[0]._id,
    country: "Uruguay",
    region: "Juanico",
    harvest: "2011",
    cellar: "Familia Deicas",
    capacity: "750 ml",
    description:
      "Color dorado intenso capaz de evolucionar hasta ocre con la crianza. Nariz con aromas de damascos secos, lychee, rosas, miel y ananá. Boca con gran equilibrio de dulzura y acidez, con notas de fruta seca, miel y almendras.",
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
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663304516/ecommerce/i8j0k0o6chldthyymxdy.png",
    country: "Argentina",
    region: "Mendoza",
    type: types[1]._id,
    harvest: "2018",
    cellar: "Animal Organic",
    capacity: "750 ml",
    description:
      "Amarillo pálido con reflejos verdes. Cítrico con notas a pan tostado.Desde hace 4 generaciones, la familia Catena ha cultivado vinos a los pies de la Cordillera de los Andes en Mendoza, Argentina. En su búsqueda por hacer vinos que destaquen entre los mejores del mundo, Nicolás Catena identificó los mejores lotes y  filas en los viñedos de la familia Catena.",
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
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663304639/ecommerce/vb0fc6qdav3w4sog30iv.png",
    country: "Argentina",
    region: "Salta",
    type: types[1]._id,
    harvest: "2008",
    cellar: "Catena Zapata",
    capacity: "750 ml",
    description:
      "Aroma floral distintivo con una mineralidad terrosa en nariz y paladar.White Bones Chardonnay viene de una selecta hilera dentro del bloque 1 en el viñedo de Adrianna. El nombre refiere a los suelos debajo de estas hileras que está en capas con depósitos calcáreos y piedra caliza, así como huesos de animales fosilizados de un río qe solía pasar por la región.",
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
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663304851/ecommerce/lpnuvntr89s1wqw6mkct.png",
    country: "Uruguay",
    region: "Garzon",
    type: types[2]._id,
    harvest: "2015",
    cellar: "Antigua Bodega",
    capacity: "1500 ml",
    description:
      "Intenso color rosa con notas amarillentas. Muestra aromas de cereza, moras y ciruelas, ideal para acompañar postres o aperitivos. Rose Magnum es el resultado de años de experimentación con el Syrah, con el que fuimos pioneros en el Valle de Colchagua. Es un vino seco, seductor y elegante, con un brillante color rosado. Es una excelente expresión de su terroir.",
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

  const wine16 = await Wine.create({
    name: "ZUCCARDI Z",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663339368/ecommerce/ld7ll18t5pa7ovp5tu9v.png",
    country: "Argentina",
    region: "Mendoza",
    type: types[0]._id,
    harvest: 2010,
    cellar: "Familia Zuccardi",
    capacity: "750 ml",
    description:
      "Color violeta rojizo intenso y vivaz. Atractivo e intenso, con aromas especiados y frutos negros. A las notas de ciruelas, frutillas, arándanos y membrillos se suman toques a pimienta negra, tabaco, pimientos rojos asados, chocolate, trufas y moras le agregan complejidad.",
    price: 32,
    stock: 41,
    highlighted: false,
    slug: slugify("ZUCCARDI Z", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine16.save();

  const wine17 = await Wine.create({
    name: "STAGS LEAP CHARDONNAY",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663339694/ecommerce/zzpey6zxpm3hwlrrxjls.png",
    country: "Estados Unidos",
    region: "Napa Valley",
    type: types[1]._id,
    harvest: 2017,
    cellar: "STAGS LEAP",
    capacity: "750 ml",
    description:
      "Nuestro Chardonnay de Napa Valley se prensa suavemente con racimo entero para preservar los aromas frescos y florales que se producen naturalmente en la fruta. El 25% del vino se fermenta en acero inoxidable y permanece en el tanque hasta que se ensambla la mezcla final. Otro 25% es fermentado y envejecido en barricas nuevas de roble francés y el 50% restante en roble francés de segundo uso.",
    price: 89,
    stock: 15,
    highlighted: true,
    slug: slugify("STAGS LEAP CHARDONNAY", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine17.save();

  const wine18 = await Wine.create({
    name: "VICENTIN BLANC DE MALBEC",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663340187/ecommerce/vrm9lsrcktsp0kux353i.png",
    country: "Argentina",
    region: "Mendoza",
    type: types[2]._id,
    harvest: 2010,
    cellar: "Vicentin Family Wines",
    capacity: "750 ml",
    description:
      "Somos una familia con visión de progreso y trabajo. Hace más de un siglo que construímos futuro, desde Argentina, nuestra tierra. Comenzamos la aventura en el año 2009 con el viaje desde el litoral, desde las plantaciones de algodón y girasol hasta el desierto salvaje, frente a la Cordillera de los Andes, donde buscamos los viñedos de los productores más antiguos de las zonas vitivinícolas de Mendoza para contar con la mejor prima materia, la de los mejores taninos y los mejores frutos.",
    price: 17,
    stock: 23,
    highlighted: false,
    slug: slugify("VICENTIN BLANC DE MALBEC", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine18.save();

  const wine19 = await Wine.create({
    name: "VIÑA EDEN ESPUMANTE MÉTODO CHAMPENOISE",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663340419/ecommerce/dw3kd5jgypabi0ugaclt.png",
    country: "Uruguay",
    region: "Durazno",
    type: types[3]._id,
    harvest: 2015,
    cellar: "Viña Eden",
    capacity: "750 ml",
    description:
      "Sobre las pedregosas sierras de Pueblo Edén se hallan nuestros viñedos, el carácter mineral de sus suelos y la influencia oceánica, generan las condiciones ideales para la creación y producción sustentable de vinos de estilo único.",
    price: 39,
    stock: 31,
    highlighted: true,
    slug: slugify("VIÑA EDEN ESPUMANTE MÉTODO CHAMPENOISE", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine19.save();

  const wine20 = await Wine.create({
    name: "TIKAL AMORIO",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663340704/ecommerce/l9goffg0kdqq0wca0qnx.png",
    country: "Argentina",
    region: "Mendoza",
    type: types[0]._id,
    harvest: 2012,
    cellar: "Tikal Natural",
    capacity: "750 ml",
    description:
      "Rojo intenso y brillante. Tiene una expresión aromática que impacta en la primer nariz que luego mantiene y eso lo hace mas atractivo aun, porque cada vez que se lo vuelve a apreciar permite ir sumando mas notas aromáticas sin que las anteriores se vayan, lo que lo hace un vino complejo y gustoso. Notas de miel, caramelo, café;, algo de cuero, frutas negras como las moras y arándanos y notas terrosas y húmedas.",
    price: 71,
    stock: 45,
    highlighted: false,
    slug: slugify("TIKAL AMORIO", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine20.save();

  const wine21 = await Wine.create({
    name: "SANTA JULIA RESERVA CHARDONNAY",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663340852/ecommerce/yoktv75grqwa0boe6dea.png",
    country: "Argentina",
    region: "Mendoza",
    type: types[1]._id,
    harvest: 2017,
    cellar: "Santa Julia",
    capacity: "750 ml",
    description:
      "Amarillo verdoso brillante. Encontramos frutas blancas maduras, peras, manzanas y banana, frutas tropicales, con notas de la maduración en barricas sobre las borras como vainilla, coco, manteca y miel. Este vino reúne la frescura de aromas típicos del chardonnay con la estructura que brinda el paso por barricas. De textura cremosa y final refrescante.",
    price: 14,
    stock: 54,
    highlighted: false,
    slug: slugify("SANTA JULIA RESERVA CHARDONNAY", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine21.save();

  const wine22 = await Wine.create({
    name: "AMALAYA ROSÉ",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663341107/ecommerce/m9alocfvg8yhelbvspmw.png",
    country: "Argentina",
    region: "Valle Clachaqui, Salta",
    type: types[2]._id,
    harvest: 2020,
    cellar: "Amalaya",
    capacity: "750 ml",
    description:
      "Rosa salmón delicado y brillante. Ataque floral muy sutil con dejos de azahares que provienen del Torrontés y notas a cereza y frutilla, típicas del malbec.",
    price: 20,
    stock: 41,
    highlighted: false,
    slug: slugify("AMALAYA ROSÉ", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine22.save();

  const wine23 = await Wine.create({
    name: "MOET IMPERIAL",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663341241/ecommerce/ruglhi4izbrfyaysappl.png",
    country: "Francia",
    region: "Paris",
    type: types[3]._id,
    harvest: 2010,
    cellar: "Moet & Chandon",
    capacity: "750 ml",
    description:
      "Generosidad y sutileza: la deliciosa generosidad de las frutas blancas: peras, durazno, manzana. La caricia seductora de las finas burbujas. La suave vivacidad de frutas cítricas y los matices de grosella espinosa.",
    price: 54,
    stock: 24,
    highlighted: false,
    slug: slugify("MOET IMPERIAL", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine23.save();

  const wine24 = await Wine.create({
    name: "TERRITORIO CABERNET SAUVIGNON",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663341508/ecommerce/zgznvt61mywnjnxnkvgs.png",
    country: "Argentina",
    region: "Salta",
    type: types[0]._id,
    harvest: 2019,
    cellar: "Territorio",
    capacity: "750 ml",
    description:
      "Rojo profundo con matices violáceos brillantes. Aromas frutados donde predominan notas a ciruelas y vainillas y tostados.",
    price: 18,
    stock: 85,
    highlighted: true,
    slug: slugify("TERRITORIO CABERNET SAUVIGNON", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine24.save();

  const wine25 = await Wine.create({
    name: "MARICHAL RESERVE ",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663341648/ecommerce/at8exjnzp4hegcyvevw7.png",
    country: "Uruguay",
    region: "Canelones",
    type: types[1]._id,
    harvest: 2018,
    cellar: "Marichal",
    capacity: "750 ml",
    description:
      "Color amarillo oro. Nariz citrica y avainillada. En boca es agradable, de buen volumen nos recuerda a frutas blancas pomelo, ananá, coco y vainilla.",
    price: 16,
    stock: 65,
    highlighted: false,
    slug: slugify("MARICHAL RESERVE COLLECTION CHARDONNAY", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine25.save();

  const wine26 = await Wine.create({
    name: "ANDELUNA MALBEC ROSÉ",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663341810/ecommerce/yvvjdnfxtjqnmwbzojqz.png",
    country: "Argentina",
    region: "Mendoza",
    type: types[2]._id,
    harvest: 2020,
    cellar: "Andeluna",
    capacity: "750 ml",
    description:
      "Presenta un radiante y pálido matiz color salmón. Intensa expresión de frutos rojos como guinda y cereza, también se destacan aromas a rosas rojas. Se aprecian los gustos de fruto rojo pequeño en conjunto con una frescura proveniente de una equilibrada acidez. de cata ",
    price: 25,
    stock: 45,
    highlighted: false,
    slug: slugify("ANDELUNA MALBEC ROSÉ", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine26.save();

  const wine27 = await Wine.create({
    name: "MARÍA CODORNÍU BRUT",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663341989/ecommerce/gjhdsjag61z1lswudqaw.png",
    country: "Argentina",
    region: "Mendoza",
    type: types[3]._id,
    harvest: 2015,
    cellar: "Séptima",
    capacity: "750 ml",
    description:
      "Espumoso elaborado con uvas Chardonnay y Pinot Noir provenientes de diferentes viñedos ubicados en la región del valle de Uco, donde se combinan suelos franco-arcilloso, y pedregosos con incidencia calcárea.  Las condiciones de suelo dadas en estos valles de altura ubicados entre 1100 y 1400 m. s. n. m al pie de la Cordillera de los Andes.",
    price: 54,
    stock: 43,
    highlighted: true,
    slug: slugify("MARÍA CODORNÍU BRUT", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine27.save();

  const wine28 = await Wine.create({
    name: "SANTA JULIA RESERVA BONARDA",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663342221/ecommerce/bx2xhxpekfy7th6m65jb.png",
    country: "Argentina",
    region: "Mendoza",
    type: types[0]._id,
    harvest: 2009,
    cellar: "Santa Julia",
    capacity: "750 ml",
    description:
      "De un atractivo color rojo violáceo, vivaz y profundo. Notas de frutas negras como guindas, cerezas, grosellas y aromas propios de la maduración en madera como cacao, vainilla, tabaco y algunas especias.",
    price: 21,
    stock: 54,
    highlighted: true,
    slug: slugify("SANTA JULIA RESERVA BONARDA", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine28.save();

  const wine29 = await Wine.create({
    name: "RICCITELLI & FATHER",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663342342/ecommerce/d3sehahelrir5ws188iq.png",
    country: "Argentina",
    region: "Las compuertas, Luján de Cuyo",
    type: types[0]._id,
    harvest: 2014,
    cellar: "Matías Riccitelli",
    capacity: "750 ml",
    description:
      "Corte de gran intensidad aromática, frutos negros, regalíz, especies y flores de naríz. En el paladar notable equilibrio, con taninos firmes pero elegantes. Un vino delicado y eléctrico que representa muy bien dos generaciones de enólogos.",
    price: 34,
    stock: 33,
    highlighted: false,
    slug: slugify("RICCITELLI & FATHER", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine29.save();

  const wine30 = await Wine.create({
    name: "PUNTA DE FLECHAS MALBEC",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663342482/ecommerce/kydvnqz0a8fva4bujzdn.png",
    country: "Argentina",
    region: "Mendoza",
    type: types[0]._id,
    harvest: 2013,
    cellar: "Flechas de los Andes",
    capacity: "750 ml",
    description:
      "De color rojo límpido, intenso, con reflejos violáceos, es un vino fresco con notas a frutos rojos. De entrada amable de frescura aromática, es un vino untuoso, redondo y fácil de beber. Posee un final elegante y persistente.",
    price: 52,
    stock: 87,
    highlighted: true,
    slug: slugify("PUNTA DE FLECHAS MALBEC", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine30.save();

  const wine31 = await Wine.create({
    name: "COBOS MARCHIORI ",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663344639/ecommerce/qwzoimc63m48db1qstaz.png",
    country: "Argentina",
    region: "Mendoza",
    type: types[1]._id,
    harvest: 2018,
    cellar: "Cobos",
    capacity: "750 ml",
    description:
      "El color limpio y vibrante de este chardonnay nos prepara para un vino muy elegante, de gran frescura y vivacidad; amarillo pálido con tonos verdes y destellos dorados. En nariz encontramos un delicado bouquet floral, con notas sutiles a frutas tropicales, manzana verde y un acento herbal. Se destaca su mineralidad, al tiempo que nos deleita con aromas a pan tostado, manteca de cacao, chocolate blanco y vainilla.",
    price: 106,
    stock: 34,
    highlighted: true,
    slug: slugify("COBOS BRAMARE MARCHIORI VINEYARD CHARDONNAY", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine31.save();

  const wine32 = await Wine.create({
    name: "BOLLA PROSECCO",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663342967/ecommerce/kcuzyvleka1zs0r2zyd5.png",
    country: "Italia",
    region: "Veneto",
    type: types[3]._id,
    harvest: 2010,
    cellar: "Bolla",
    capacity: "750 ml",
    description:
      "Tiene un color pajizo pálido con aromas limpios de limón, manzana y un toque de melocotón. Muy refrescante en el paladar.",
    price: 25,
    stock: 65,
    highlighted: false,
    slug: slugify("BOLLA PROSECCO", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine32.save();

  const wine33 = await Wine.create({
    name: "LAGRIMA DE ORO BRUT ROSE",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663343133/ecommerce/wpvi6izhf5bp1clfxtop.png",
    country: "Uruguay",
    region: "Tacuarembó",
    type: types[3]._id,
    harvest: 2015,
    cellar: "Domaine de Larvol",
    capacity: "750 ml",
    description:
      "De color rosa pálido con tenue con reflejos piel de cebolla, nariz compleja donde se mezclan las levaduras, panetone, fruta roja, pan tostado y un leve vestigio floral. En boca su ingreso es muy sutil burbuja muy bien incorporada, acidez en equilibrio y con final prolongado.",
    price: 21,
    stock: 54,
    highlighted: false,
    slug: slugify("LAGRIMA DE ORO BRUT ROSE", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine33.save();

  const wine34 = await Wine.create({
    name: "MONTES CLASSIC CHARDONNAY",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663343294/ecommerce/a68rpynrkhfrwwqf5wfs.png",
    country: "Chile",
    region: "Curico",
    type: types[1]._id,
    harvest: 2016,
    cellar: "Montes",
    capacity: "750 ml",
    description:
      "Dorado pálido con tonalidades verdes. Su aroma combina mantequilla, toques de vainilla y frutas tropicales (sobretodo plátano).",
    price: 29,
    stock: 65,
    highlighted: true,
    slug: slugify("MONTES CLASSIC CHARDONNAY", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine34.save();

  const wine35 = await Wine.create({
    name: "MARICHAL BLANC DE NOIRS",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663343445/ecommerce/sfk0ma8zyheagug16mup.png",
    country: "Uruguay",
    region: "Canelones",
    type: types[2]._id,
    harvest: 2018,
    cellar: "Marichal",
    capacity: "750 ml",
    description:
      "Brillante, límpido y transparente con un color salmón con reflejos cobrizos que recuerdan a la piel de cebolla. Presenta notas características del Chardonnay como ser el ananá y el pomelo rosado, con notas de durazno fresco, en combinación con las notas características de los frutos rojos proporcionados por el Pinot Noir.",
    price: 12,
    stock: 99,
    highlighted: false,
    slug: slugify("MARICHAL RESERVE COLLECTION BLANC DE NOIRS", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine35.save();

  const wine36 = await Wine.create({
    name: "RICCITELLI HEY ROSÉ",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663343706/ecommerce/dv1ipy1affkhpzsutkyj.png",
    country: "Argentina",
    region: "Perdriel, Lujan de Cuyo",
    type: types[2]._id,
    harvest: 2019,
    cellar: "Matías Riccitelli",
    capacity: "750 ml",
    description:
      "De hermoso color rosado salmón. En naríz presenta aromas de flores blancas y cítricos. Un vino fresco y elegante perfecto para un atardecer de verano. ",
    price: 26,
    stock: 65,
    highlighted: false,
    slug: slugify("RICCITELLI HEY ROSE", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine36.save();

  const wine38 = await Wine.create({
    name: "RETO CABERNET SAUVIGNON",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663343855/ecommerce/vmj3tk2mmjrmzl3awyln.png",
    country: "Argentina",
    region: "Mendoza",
    type: types[0]._id,
    harvest: 2011,
    cellar: "Vicentin Family Wines",
    capacity: "750 ml",
    description:
      "Somos una familia con visión de progreso y trabajo. Hace más de un siglo que construímos futuro, desde Argentina, nuestra tierra. Comenzamos la aventura en el año 2009 con el viaje desde el litoral, desde las plantaciones de algodón y girasol hasta el desierto salvaje, frente a la Cordillera de los Andes.",
    price: 11,
    stock: 56,
    highlighted: false,
    slug: slugify("RETO CABERNET SAUVIGNON", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine38.save();

  const wine39 = await Wine.create({
    name: "MOUTON CADET KOSHER",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663343980/ecommerce/g3obfbil5to0yilluj51.png",
    country: "Francia",
    region: "Bordeaux",
    type: types[0]._id,
    harvest: 2016,
    cellar: "Baron Philippe de Rothschild",
    capacity: "750 ml",
    description:
      "Desde los inicios, la producción de Mouton Cadet se ha basado en las habilidades y la experiencia de los viticultores de Bordeaux para dar al vino su identidad única. Los enólogos de Baron Philippe de Rothschild perpetúan esa experiencia eligiendo cuidadosamente las parcelas de viña por sus cualidades particulares. El resultado son vinos de reconocimiento mundial y su gran calidad.",
    price: 65,
    stock: 60,
    highlighted: false,
    slug: slugify("MOUTON CADET KOSHER", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine39.save();

  const wine40 = await Wine.create({
    name: "ANTIGUA BODEGA PRIMA DONNA SAUVIGNON BLANC",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663725081/ecommerce/cftwmaakdfjxbilmcsxw.png",
    country: "Uruguay",
    region: "Canelones",
    type: types[1]._id,
    harvest: 2015,
    cellar: "Antigua Bodega",
    capacity: " 750 ml",
    description:
      "Color amarillo pálido con tonos verdosos. Aroma de maracuyá, manzana verde, ananá, frutos tropicales y flores frescas.",
    price: 13,
    stock: 43,
    highlighted: false,
    slug: slugify("", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine40.save();

  const wine41 = await Wine.create({
    name: "COLOMÉ TORRONTÉS",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663725346/ecommerce/cqjewio44faufvlkif7r.png",
    country: "Argentina",
    region: "Salta",
    type: types[1]._id,
    harvest: 2020,
    cellar: "COLOMÉ",
    capacity: "750 ml",
    description:
      "Es un vino elegante, se destacan notas florales a jazmín y cítricas. En boca es fresco, redondo y de buen cuerpo. El final es largo y de una gran fineza.",
    price: 21,
    stock: 54,
    highlighted: true,
    slug: slugify("COLOMÉ TORRONTÉS", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine41.save();

  const wine42 = await Wine.create({
    name: "COBOS MARCHIORI VINEYARD CHARDONNAY",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663770401/ecommerce/giqmhgdhngtjnqrwd7mz.png",
    country: "Argentina",
    region: "Mendoza",
    type: types[1]._id,
    harvest: 2018,
    cellar: "Cobos",
    capacity: "750 ml",
    description:
      "El color limpio y vibrante de este chardonnay nos prepara para un vino muy elegante, de gran frescura y vivacidad; amarillo pálido con tonos verdes y destellos dorados. En nariz encontramos un delicado bouquet floral, con notas sutiles a frutas tropicales, manzana verde y un acento herbal. Se destaca su mineralidad, al tiempo que nos deleita con aromas a pan tostado, manteca de cacao, chocolate blanco y vainilla.",
    price: 123,
    stock: 98,
    highlighted: false,
    slug: slugify("COBOS MARCHIORI VINEYARD CHARDONNAY", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine42.save();

  const wine43 = await Wine.create({
    name: "SIERRA DE LAS PALMAS ALBARIÑO",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663725796/ecommerce/icyndp9dpepxvbiitw0v.png",
    country: "Uruguay",
    region: "Maldonado",
    type: types[1]._id,
    harvest: 2020,
    cellar: "Albariño",
    capacity: "750 ml",
    description:
      "Uva prensada, fermentación en fudres de 2000 litros de roble tirolés. Levaduras indígenas. Sin desborres ni batonajes. Crianza de 6 meses en los mismos fudres, sin rellenos ni desfangados. Embotellado en Setiembre de 2020.",
    price: 103,
    stock: 100,
    highlighted: false,
    slug: slugify("SIERRA DE LAS PALMAS ALBARIÑO 2020", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine43.save();

  const wine44 = await Wine.create({
    name: "KAIKEN ESTATE ROSE MALBEC",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663725971/ecommerce/plvfccpe7gqz3hhvukgx.png",
    country: "Argentina",
    region: "Mendoza",
    type: types[2]._id,
    harvest: 2019,
    cellar: "Kaiken",
    capacity: "750 ml",
    description:
      "Presenta un color rojo cereza, límpido y de gran intensidad. Con aromas frutales, de frutillas maceradas y elegantes notas de violetas que aumentan su complejidad. En boca es un vino con cuerpo, en perfecta armonía con su delicada acidez. Se muestra fresco, delicado y seductor, un perfecto compañero para diversos tipos de comidas.",
    price: 13,
    stock: 56,
    highlighted: false,
    slug: slugify("KAIKEN ESTATE ROSE MALBEC", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine44.save();

  const wine45 = await Wine.create({
    name: "MOUTON CADET ROSE",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663726089/ecommerce/lxyrbje7qu3ypmvwoup5.png",
    country: "Francia",
    region: "Bordeaux",
    type: types[2]._id,
    harvest: 2016,
    cellar: "Philippe de Rothschild",
    capacity: "750 ml",
    description:
      "Desde los inicios, la producción de Mouton Cadet se ha basado en las habilidades y la experiencia de los viticultores de Bordeaux para dar al vino su identidad única. Los enólogos de Baron Philippe de Rothschild perpetúan esa experiencia eligiendo cuidadosamente las parcelas de viña por sus cualidades particulares. El resultado son vinos de reconocimiento mundial y su gran calidad.",
    price: 54,
    stock: 65,
    highlighted: false,
    slug: slugify("MOUTON CADET ROSE", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine45.save();

  const wine46 = await Wine.create({
    name: "MIOLO CUVEE TRADITION ESPUMANTE BRUT",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663726530/ecommerce/lkagkake7qof7f5an4u6.png",
    country: "Brasil",
    region: "Vale Dos Vinhedos",
    type: types[3]._id,
    harvest: 2020,
    cellar: "Miolo",
    capacity: "750 ml",
    description:
      "De color dorado tenue con reflejos verdes, nariz compleja donde se mezclan las levaduras, panetone, fruta abrillantada, pan tostado y un leve vestigio cítrico. En boca su ingreso es muy sutil burbuja muy bien incorporada, acidez en equilibrio y con final prolongado.",
    price: 54,
    stock: 38,
    highlighted: false,
    slug: slugify("MIOLO CUVEE TRADITION ESPUMANTE BRUT", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine46.save();

  const wine47 = await Wine.create({
    name: "BANFI VIGNE REGALI ASTI ESPUMANTE",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663726300/ecommerce/zqdlatxzfculsgqo77qz.png",
    country: "Italia",
    region: "Milán",
    type: types[3]._id,
    harvest: 2017,
    cellar: "Castello Banfi",
    capacity: "750 ml",
    description:
      "Intenso y frutal con una expresión elegante de aromas típicos Moscato, salvia y flor de durazno. Dulce, crujiente, aromático y armoniosamente delicado en el paladar.",
    price: 21,
    stock: 65,
    highlighted: false,
    slug: slugify("BANFI VIGNE REGALI ASTI ESPUMANTE", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine47.save();

  const wine48 = await Wine.create({
    name: "VICENTIN ESPUMANTE ROSE",
    picture:
      "https://res.cloudinary.com/dazcipdps/image/upload/v1663726410/ecommerce/dldx3p3tcju05ambtw2k.png",
    country: "Argentina",
    region: "Mendoza",
    type: types[3]._id,
    harvest: 2019,
    cellar: "Vicentin Family Wines",
    capacity: "750 ml",
    description:
      "Somos una familia con visión de progreso y trabajo. Hace más de un siglo que construímos futuro, desde Argentina, nuestra tierra. Comenzamos la aventura en el año 2009 con el viaje desde el litoral, desde las plantaciones de algodón y girasol hasta el desierto salvaje, frente a la Cordillera de los Andes.",
    price: 16,
    stock: 53,
    highlighted: false,
    slug: slugify("VICENTIN ESPUMANTE ROSE", {
      replacement: "-",
      remove: undefined,
      lower: true,
      remove: /[.]/g,
    }),
  });
  wine48.save();
};
