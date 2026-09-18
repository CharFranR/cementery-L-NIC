// ==========================================================================
// El Guasimal · Cemetery Data
// Data extracted from "RESULTADOS DEL ESTUDIO ARQUITECTÓNICO"
// ==========================================================================

import type { Cemetery, Tomb } from "./types";

export const CEMETERY: Cemetery = {
  name: "El Guasimal",
  tagline: "Registro de Patrimonio Funerario",
  period: "1800 – 2026",
  founded: "1888",
  rebuilt: "1979",
  ageAtStudy: "138 años",
  tombsCount: "8",
  heroImage: "assets/img/baltazar-bravo-1909.jpg",
  aboutImage: "assets/img/rosalia-velazquez-1927.jpg",
  aboutLead:
    "Un camposanto fundado en 1888 que custodia, entre fosas directas al suelo, una de las colecciones más representativas de arquitectura funeraria popular de la región.",
  aboutText:
    "El estudio arquitectónico documenta la transición de la piedra labrada hacia el cemento industrializado, a través de monumentos que van del minimalismo prerrománico al Art Déco, el historicismo ecléctico y el racionalismo moderno. Cada pieza conserva la memoria de una familia y una fe.",
  documents: [
    "Acta de fundación de la directiva",
    "Testamento de entrega del terreno por la Comunidad Indígena de Sutiaba",
  ],
};

export const TOMBS: Tomb[] = [
  {
    slug: "baltazar-bravo-1909",
    image: "assets/img/baltazar-bravo-1909.jpg",
    id: "G.1",
    title: "Lápida de Baltazar Bravo",
    years: "1909",
    style: "Minimalista Prerrománico / Clásico Simplificado",
    brief:
      "Lápida horizontal de losa sepulcral plana, una de las expresiones más primitivas y perennes del rito funerario, que cierra el sepulcro a ras del suelo.",
    sections: [
      {
        heading: "Estilo Arquitectónico",
        paragraphs: [
          "La losa se adscribe a un estilo Minimalista Prerrománico / Clásico Simplificado de carácter puramente vernáculo. Renuncia a cualquier ornamentación superpuesta, relieves esculpidos o molduras perimetrales complejas, priorizando la función de sellado y memoria sobre la estridencia estética.",
          "La composición se fía por completo a la tipografía y a la pureza del plano geométrico, evocando las lápidas paleocristianas o las losas de los cementerios monásticos medievales, donde la horizontalidad absoluta representa la igualdad del ser humano ante la muerte.",
        ],
      },
      {
        heading: "Elementos Constructivos",
        paragraphs: [
          "Se trata de un prisma rectangular bidimensional dominante (losa plana) con una ligera disminución de su sección en los bordes perimetrales (biselado simple) para facilitar el desagüe de la escorrentía pluvial.",
          "El epitafio fue grabado directamente in situ en el material en estado plástico, con caracteres en mayúsculas serifas de ejecución artesanal: «AQUÍ EXISTEN LOS RESTOS DEL FINADO BALTAZAR BRAVO, MURIÓ EL 21 DE ENERO DE 1909».",
          "La losa está confeccionada en una mezcla monolítica de concreto primitivo o mortero de cemento y cal de alta densidad. Presenta desportillamientos, fracturas incipientes en las esquinas superiores y una pátina grisácea-terrosa por fricción y sedimentación.",
        ],
      },
      {
        heading: "Simbolismo",
        paragraphs: [
          "La horizontalidad y el contacto con la tierra simbolizan la sentencia bíblica del Memento mori: «Polvo eres y en polvo te convertirás», representando el retorno absoluto del cuerpo al vientre de la tierra.",
          "La losa actúa como la «piedra del sepulcro»: su peso y masividad resguardan los restos y simbolizan el descanso eterno inalterable. La ausencia de iconografía traslada todo el peso sagrado a la palabra escrita, que actúa como registro notarial del tránsito del alma.",
        ],
      },
    ],
    facts: {
      Tipología: "Lápida horizontal de cubierta / losa sepulcral plana",
      Difunto: "Baltazar Bravo",
      Fecha: "21 de enero de 1909",
      Material: "Concreto primitivo / mortero de cemento y cal",
    },
  },

  {
    slug: "ignacio-camacho-1926",
    image: "assets/img/ignacio-camacho-1926.jpg",
    id: "G.2",
    title: "Monumento de Ignacio Camacho",
    years: "1926",
    style: "Art Déco Temprano vernáculo",
    brief:
      "Monumento de cabecera tipo atril o repisa, con remate en arco de medio punto y cartelas de clara inspiración Art Déco.",
    sections: [
      {
        heading: "Estilo Arquitectónico",
        paragraphs: [
          "Se adscribe al Art Déco Temprano con fuerte arraigo vernáculo o popular. Para 1926, la influencia de la Exposición Internacional de Artes Decorativas de París (1925) se traduce en la simplificación de las formas geométricas y el abandono de los órdenes clásicos complejos en favor de líneas depuradas y volumetría compacta.",
          "El remate en arco de medio punto ya no emula la fachada academicista decimonónica, sino que se integra como terminación orgánica de un bloque prismático continuo, buscando funcionalidad y modernidad.",
        ],
      },
      {
        heading: "Elementos Constructivos",
        paragraphs: [
          "Se configura como un prisma rectangular de base recta cuyo plano superior está truncado en sección inclinada (tipo atril o pupitre), con una pendiente de aproximadamente 45° que optimiza la ergonomía de lectura.",
          "La cartela superior, integrada en el remate semicircular, resguarda el epitafio principal grabado en bajorrelieve: «Ignacio Camacho + el 28 d. Octubre de 1926». La cartela inferior, con esquinas cóncavas de inspiración Art Déco, contiene la dedicatoria «Un recuerdo de sus hijos».",
          "La pieza está ejecutada mediante vaciado en molde de concreto armado o mortero de cemento, con capas de policromía en tonos turquesa, terracota y blanco en los fondos de las cartelas.",
        ],
      },
      {
        heading: "Simbolismo",
        paragraphs: [
          "La cruz latina se reduce aquí a un monograma o relieve minimalista inserto en el corazón del epitafio, funcionando como sello de fe que consagra el bloque como espacio de descanso sagrado.",
          "La tipología de atril imita el ambón o atril litúrgico, exponiendo la vida del difunto como un libro abierto imperecedero. La cartela de los hijos subraya la piedad filial y perpetúa el linaje familiar en el espacio público.",
        ],
      },
    ],
    facts: {
      Tipología: "Monumento de cabecera tipo atril / repisa",
      Difunto: "Ignacio Camacho",
      Fecha: "28 de octubre de 1926",
      Material: "Concreto armado / mortero de cemento policromado",
    },
  },

  {
    slug: "rosalia-velazquez-1927",
    image: "assets/img/rosalia-velazquez-1927.jpg",
    id: "G.3",
    title: "Estela de Rosalía Velázquez",
    years: "1927",
    style: "Historicismo Ecléctico / Neogótico y Neobarroco popular",
    brief:
      "Monumento en torre o estela escalonada de cuatro cuerpos, rematado por una monumental cruz patada o floronada.",
    sections: [
      {
        heading: "Estilo Arquitectónico",
        paragraphs: [
          "Se define bajo el Historicismo Ecléctico con marcadas reminiscencias del Neogótico y el Neobarroco Popular. El componente neogótico se manifiesta en los perfiles apuntados y remates curvos sinuosos, mientras que la hibridación barroca aparece en los perfiles acampanados y siluetas sinuosas.",
        ],
      },
      {
        heading: "Elementos Constructivos",
        paragraphs: [
          "La estructura se organiza de manera simétrica y ascendente en cuatro cuerpos diferenciados: un basamento paralelepípedo, el dado del epitafio con cartela en altorrelieve («Rosalía Velázquez… 1927…»), un pedestal acampanado con las iniciales talladas «H L Z», y el remate en cruz patada o floronada con los años «1849» y «1932».",
          "Toda la obra está ejecutada en concreto y mortero de cemento modelado con encofrados artesanales, con restos de capas de policromía previas (tonos rosados y azul turquesa) y una pátina grisácea-verdosa por humedad.",
        ],
      },
      {
        heading: "Simbolismo",
        paragraphs: [
          "El arco apuntado (ojiva) simboliza unas manos en oración y funciona como arco de triunfo espiritual que celebra el ingreso del alma al reino celestial.",
          "La cruz patada o floronada, de extremos curvos y expandidos, emula los pétalos de una flor y simboliza la vida que florece después de la muerte. La silueta acampanada del pedestal evoca un cáliz litúrgico, transformando la tumba en un altar de conmemoración.",
        ],
      },
    ],
    facts: {
      Tipología: "Monumento en torre / estela escalonada",
      Difunta: "Rosalía Velázquez",
      Fecha: "1927 (con adiciones 1849 y 1932)",
      Material: "Concreto y mortero de cemento policromado",
    },
  },

  {
    slug: "jose-bravo-1929",
    image: "assets/img/jose-bravo-1929.jpg",
    id: "G.4",
    title: "Monumento de José Bravo",
    years: "1929",
    style: "Historicismo Ecléctico / Neoclásico y Barroco popular",
    brief:
      "Monumento fúnebre de aguja o torre coronado por un crucifijo exento, con frontón triangular apuntado.",
    sections: [
      {
        heading: "Estilo Arquitectónico",
        paragraphs: [
          "Se define dentro del Historicismo Ecléctico con influjo Neoclásico y Barroco Popular. La estructura neoclásica se rige por los principios de simetría axial y superposición de cuerpos escalonados, mientras que el crucificado rompe la rigidez mediante líneas curvas y una carga dramática (pathos) de tradición barroca.",
        ],
      },
      {
        heading: "Elementos Constructivos",
        paragraphs: [
          "El conjunto se organiza de forma piramidal: una losa plana de cimentación, un basamento con cartela semicircular dedicada a «Juana B. de Bravo… Recuerdo de su hijo», un segundo cuerpo con el epitafio principal «JOSÉ BRAVO + 1925», un frontón triangular apuntado y, en la cúspide, un crucifijo exento con la inscripción INRI.",
          "Está ejecutado mediante vaciado y modelado de concreto y mortero de cemento blanco, recubierto históricamente con capas de cal o pintura blanca para mitigar el intemperismo.",
        ],
      },
      {
        heading: "Simbolismo",
        paragraphs: [
          "El ascenso a través de bloques decrecientes simboliza la escala espiritual o el tránsito gradual del alma desde el plano terrenal hacia la esfera celestial.",
          "El crucifijo actúa como elemento sacro definitivo, representando la Redención; el frontón triangular remite a la Trinidad y actúa como flecha hacia el cielo, reforzando la tensión vertical del monumento.",
        ],
      },
    ],
    facts: {
      Tipología: "Monumento de aguja / torre con crucifijo exento",
      Difunto: "José Bravo (y Juana B. de Bravo)",
      Fecha: "1925 / 1929",
      Material: "Concreto y mortero de cemento blanco",
    },
  },

  {
    slug: "juana-r-bravo-1931",
    image: "assets/img/juana-r-bravo-1931.jpg",
    id: "G.5",
    title: "Estela de Juana R. de Bravo",
    years: "1931",
    style: "Historicismo Ecléctico con bases Neoclásicas",
    brief:
      "Monumento tipo torre o estela escalonada que registra la memoria familiar de José Bravo (1925) y Juana R. de Bravo (1931).",
    sections: [
      {
        heading: "Estilo Arquitectónico",
        paragraphs: [
          "Se inserta firmemente dentro del Historicismo Ecléctico con bases Neoclásicas, con una volumetría rigurosamente simétrica que organiza la superposición rítmica de cuerpos cúbicos decrecientes.",
          "La obra representa la consolidación de los modelos arquitectónicos del periodo republicano, adaptados por maestros artesanos a la plasticidad del cemento.",
        ],
      },
      {
        heading: "Elementos Constructivos",
        paragraphs: [
          "Se compone de un zócalo inferior con la inscripción «JUANA R. DE BRAVO + 1931 - RECUERDO DE SU HIJO», un bloque intermedio con el nombre grabado de «JOSÉ BRAVO + 1925» flanqueado por relieves florales, y un coronamiento frontonado que sirve de zapata para la cruz o crucifijo exento.",
          "La totalidad de la tumba está construida en concreto y mortero de cemento vaciado, con capas seculares de pintura o enlucido blanco destinadas a proteger el núcleo de hormigón.",
        ],
      },
      {
        heading: "Simbolismo",
        paragraphs: [
          "La cruz inclinada o yacente del interior de la cartela simboliza el descanso del cristiano tras haber cargado con sus propias cruces, representando la paz alcanzada tras el tránsito de la muerte.",
          "La estructura escalonada representa la inmortalidad del alma y la elevación espiritual, mientras que la superposición de los epitafios convierte la torre en un monumento de continuidad y altar familiar.",
        ],
      },
    ],
    facts: {
      Tipología: "Monumento en torre / estela escalonada",
      Difunta: "Juana R. de Bravo (y José Bravo)",
      Fecha: "1925 / 1931",
      Material: "Concreto y mortero de cemento vaciado",
    },
  },

  {
    slug: "familia-tellez-1946-1956",
    image: "assets/img/familia-tellez-1946-1956.jpg",
    id: "G.6",
    title: "Tumba-Túmulo de la Familia Téllez",
    years: "1946 – 1956",
    style: "Modernismo Racionalista / vernáculo con detalles Art Déco",
    brief:
      "Monumento-libro abierto sobre túmulo bajo revestido en azulejería azul celeste. Registro CF-N-1946-1956-MT.",
    sections: [
      {
        heading: "Estilo Arquitectónico",
        paragraphs: [
          "Se define bajo un estilo Modernista Racionalista con hibridación Vernácula y detalles Art Déco. La tumba rompe con los esquemas del siglo XIX y abraza una geometría pragmática, cúbica y de líneas rectas asociada al funcionalismo de posguerra.",
          "La incorporación de azulejos cerámicos acerca la sepultura a las estéticas higienistas y coloridas de la arquitectura civil de la época, dotando al luto de un carácter más accesible.",
        ],
      },
      {
        heading: "Elementos Constructivos",
        paragraphs: [
          "El cuerpo principal es una estructura prismática horizontal (túmulo) revestida con azulejos cerámicos vidriados azul celeste y blanco. En la cabecera se eleva una base escalonada de dos niveles que sostiene el elemento focal: un gran bloque de concreto modelado en forma de libro abierto.",
          "Las inscripciones ocupan las páginas del libro, grabadas en bajorrelieve: «Aquí se encuentran los restos de Miguel Téllez Z., fallecido el 24 de agosto de 1956» y «Mercedes […] Téllez, fallecida el 19/6/1946», acompañadas de una cita bíblica adaptada (Romanos 6:17).",
          "El estado superficial muestra un intemperismo avanzado, con pérdida casi total del enlucido blanco del libro y fracturas en las esquinas de la azulejería.",
        ],
      },
      {
        heading: "Simbolismo",
        paragraphs: [
          "El libro abierto representa el «Libro de la Vida» (Apocalipsis 20:12) y simboliza la historia vitalizada de los difuntos, exponiendo sus nombres y virtudes como una obra concluida.",
          "La cita de Romanos 6:17 convierte la tumba en un ambón litúrgico permanente que evangeliza al visitante. El azul celeste del revestimiento remite al manto de la Virgen María y al reino de los cielos, actuando como sudario protector.",
        ],
      },
    ],
    facts: {
      Tipología: "Sepultura horizontal tipo túmulo con cabecera en libro abierto",
      Difuntos: "Miguel Téllez Z. y Mercedes Téllez",
      Fecha: "1946 – 1956",
      Registro: "CF-N-1946-1956-MT",
    },
  },

  {
    slug: "maria-del-rosario-delgadillo-1957",
    image: "assets/img/maria-del-rosario-delgadillo-1957.jpg",
    id: "G.8",
    title: "Monumento de María del Rosario Delgadillo",
    years: "1957",
    style: "Art Déco Tardío vernáculo",
    brief:
      "Lápida de cabecera tipo atril rematada por una esfera celeste; testimonio del «Rito de Entierro de Angelitos». Registro CF-N-1957-MDR.",
    sections: [
      {
        heading: "Estilo Arquitectónico",
        paragraphs: [
          "Se clasifica dentro del Art Déco Tardío con un fuerte arraigo Vernáculo / Popular. La pieza rompe con los órdenes clásicos decimonónicos y recurre a planos limpios, líneas angulares oblicuas y volumetrías elementales (el prisma y la esfera).",
        ],
      },
      {
        heading: "Elementos Constructivos",
        paragraphs: [
          "Se define como un prisma rectangular inclinado en su cara frontal (tipo atril), coronado por un perfil cilíndrico y una esfera perfecta de bulto redondo como remate cenital.",
          "El epitafio, grabado en bajorrelieve, reza: «MARIA DEL ROSARIO DELGADILLO O. ✶ EL 3 OCT ✚ EL 7 OCT 1957». La brevedad entre el nacimiento (estrella) y el deceso (cruz) delata que el monumento fue erigido para una recién nacida.",
          "La pieza presenta múltiples capas de policromía popular superpuestas, con un tono azul turquesa o celeste que recubre la esfera, los cantos y las letras sobre fondo blanco.",
        ],
      },
      {
        heading: "Simbolismo",
        paragraphs: [
          "La esfera es el símbolo de la perfección absoluta y del alma inmortal; teñida de azul, simboliza el retorno de un alma pura y sin pecado directamente al firmamento.",
          "La estrella (✶) simboliza el nacimiento y la cruz (✚) la redención; la proximidad de ambos símbolos (apenas cuatro días) enfatiza la tragedia de la mortalidad infantil. La policromía celeste y blanca se asocia a la Virgen María y a la pureza de los niños.",
        ],
      },
    ],
    facts: {
      Tipología: "Lápida de cabecera tipo atril con esfera",
      Difunta: "María del Rosario Delgadillo O.",
      Fecha: "Octubre de 1957",
      Registro: "CF-N-1957-MDR",
    },
  },

  {
    slug: "roque-ramos-lopez-1972",
    image: "assets/img/roque-ramos-lopez-1972.jpg",
    id: "G.9",
    title: "Edícula de Roque Ramos López",
    years: "1972",
    style: "Neo-historicista Clásico / vernáculo",
    brief:
      "Edícula o pequeño templo que resguarda la escultura de un ángel querubín con cruz al pecho y corona de flores.",
    sections: [
      {
        heading: "Estilo Arquitectónico",
        paragraphs: [
          "Se define bajo un estilo Neo-historicista Clásico con carácter popular / vernáculo, recuperando la tipología clásica del naiskos griego o la edícula romana: un pequeño templo destinado a resguardar una entidad celestial.",
          "Aunque la composición busca el orden y la simetría clásica, la ejecución material denota una manufactura artesanal de gran valor antropológico.",
        ],
      },
      {
        heading: "Elementos Constructivos",
        paragraphs: [
          "La estructura se compone de un basamento troncocónico con la cartela del epitafio en altorrelieve: «Roque Ramos López * 1960 - Falleció en la paz del Señor el 23 de Dic. de 1972. Recuerdo amoroso de sus padres y hermanos».",
          "Sobre el pedestal descansa el tabernáculo, con dos pilastras de fuste liso que soportan un arco de medio punto peraltado. El nicho conserva los restos de una reja de hierro forjado parcialmente oxidada.",
          "El conjunto está ejecutado en concreto y mortero de cemento, con la escultura del ángel realizada mediante vaciado en molde y posteriormente retocada a mano.",
        ],
      },
      {
        heading: "Simbolismo",
        paragraphs: [
          "El ángel infantil o querubín sostiene con su mano derecha una pequeña cruz pegada al pecho (símbolo de fe inquebrantable) y con la izquierda una corona o ramo de flores (pureza, brevedad de la vida y triunfo del alma sobre la muerte).",
          "La edícula simboliza un espacio celestial autónomo; el arco de medio punto evoca la bóveda del cielo. La estrella del epitafio, junto al año de nacimiento, representa la luz que guía a las almas y la esperanza del reencuentro.",
        ],
      },
    ],
    facts: {
      Tipología: "Edícula / naiskos con escultura de ángel",
      Difunto: "Roque Ramos López",
      Fecha: "23 de diciembre de 1972",
      Material: "Concreto, mortero de cemento y reja de hierro",
    },
  },
];
