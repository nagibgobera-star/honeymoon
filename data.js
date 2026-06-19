// =============================================================
//  VIAJE EUROPA 2026  —  Datos del viaje (ES Module)
//  Usado por seed.js para poblar Firestore en el primer uso.
//
//  Modelo: { id, day, order, done, date, city, time, title,
//            description, mapsUrl, pdfUrl, type }
//
//  order: posición dentro del día (0, 1, 2…) para ordenar
//  done:  false por defecto (gestionado en Firestore en runtime)
// =============================================================

export const TRIP_DATA = [

  // ── DÍA 1 ─ 9 abril, jueves ─ PARÍS ─────────────────────
  {
    id: "d1-vuelo", day: 1, order: 0, done: false,
    date: "9 abril, jueves", city: "París", time: "9:50",
    title: "Vuelo Barcelona → París",
    description: "Vuelo Vueling VY8004 desde Barcelona.\n\nLlegada al aeropuerto de París Orly a las 11:40.\n\nRecuerden pasar por el control de seguridad con tiempo y llevar el pasaporte a mano.",
    mapsUrl: null, pdfUrl: null, type: "transporte"
  },
  {
    id: "d1-hotel", day: 1, order: 1, done: false,
    date: "9 abril, jueves", city: "París", time: "12:00",
    title: "Check-in Hotel en París",
    description: "Llegada al hotel y registro.\n\nPara llegar desde el aeropuerto de Orly: aproximadamente 45 minutos en metro con una combinación.\n\nGuarden bien las llaves de la habitación y aprovechen para dejar el equipaje antes del almuerzo.",
    mapsUrl: "https://maps.app.goo.gl/9AapWd5daMLKuUpk7", pdfUrl: null, type: "hotel"
  },
  {
    id: "d1-almuerzo", day: 1, order: 2, done: false,
    date: "9 abril, jueves", city: "París", time: "13:30",
    title: "Almuerzo en París",
    description: "Sugerencias de restaurantes cercanos al hotel:\n\n• Bouillon Pigalle — restaurante tradicional francés, muy animado y asequible\n• La Villa des Abbesses — ambiente tranquilo en el barrio de Montmartre",
    mapsUrl: null, pdfUrl: null, type: "almuerzo"
  },
  {
    id: "d1-tour-montmartre", day: 1, order: 3, done: false,
    date: "9 abril, jueves", city: "París", time: "16:00",
    title: "Free Tour por Montmartre",
    description: "Tour guiado gratuito por el histórico barrio de Montmartre. Duración aproximada: 2 horas y media (hasta las 18:30).\n\nPunto de encuentro: frente al Starbucks de Montmartre.\n\nRecuerden llevar calzado cómodo — hay muchas escaleras en este barrio con mucho encanto.",
    mapsUrl: null, pdfUrl: null, type: "tour"
  },
  {
    id: "d1-sacre-coeur", day: 1, order: 4, done: false,
    date: "9 abril, jueves", city: "París", time: "18:30",
    title: "Basílica del Sacré-Cœur",
    description: "Tras el tour, visita a la magnífica Basílica del Sacré-Cœur en lo alto de la colina de Montmartre. La entrada es gratuita.\n\nDesde aquí se tiene una de las mejores vistas panorámicas de todo París. Vale la pena subir hasta la cúpula si se encuentran con energía.",
    mapsUrl: null, pdfUrl: null, type: "visita"
  },
  {
    id: "d1-cena", day: 1, order: 5, done: false,
    date: "9 abril, jueves", city: "París", time: "20:00",
    title: "Cena en Montmartre",
    description: "Sugerencias de restaurantes en el barrio de Montmartre:\n\n• Le Potager du Père Thierry — cocina francesa casera, ambiente acogedor\n• Au Virage Lepic — bistró clásico parisino con terraza",
    mapsUrl: null, pdfUrl: null, type: "cena"
  },

  // ── DÍA 2 ─ 10 abril, viernes ─ PARÍS ───────────────────
  {
    id: "d2-louvre", day: 2, order: 0, done: false,
    date: "10 abril, viernes", city: "París", time: "10:00",
    title: "Museo del Louvre",
    description: "Visita al museo más grande del mundo. ¡Las entradas ya están compradas e incluyen audioguía!\n\nPara llegar: metro desde el hotel, aproximadamente 25–30 minutos. Es recomendable llegar puntual para evitar las colas.\n\nNo se pierdan: la Mona Lisa, la Venus de Milo y la Victoria de Samotracia.",
    mapsUrl: "https://maps.app.goo.gl/irTusraVQutmNAf29", pdfUrl: null, type: "visita"
  },
  {
    id: "d2-almuerzo", day: 2, order: 1, done: false,
    date: "10 abril, viernes", city: "París", time: "13:00",
    title: "Almuerzo cerca del Louvre",
    description: "Sugerencias de restaurantes cerca del Museo del Louvre:\n\n• Le Bistro des Augustins — cocina francesa tradicional a buen precio\n• Bistrot Victoires — ambiente parisino auténtico, muy popular entre los locales",
    mapsUrl: null, pdfUrl: null, type: "almuerzo"
  },
  {
    id: "d2-free-tour", day: 2, order: 2, done: false,
    date: "10 abril, viernes", city: "París", time: "16:00",
    title: "Free Tour Esencial de París",
    description: "Tour guiado gratuito por los principales monumentos e historia de París. Duración: hasta las 18:30 aproximadamente.\n\nUn recorrido perfecto para entender la historia y la cultura de la ciudad de la luz.",
    mapsUrl: null, pdfUrl: null, type: "tour"
  },

  // ── DÍA 3 ─ 11 abril, sábado ─ PARÍS ────────────────────
  {
    id: "d3-crucero-almuerzo", day: 3, order: 0, done: false,
    date: "11 abril, sábado", city: "París", time: "13:00",
    title: "Crucero por el Sena con Menú Francés",
    description: "Almuerzo especial a bordo de un crucero por el río Sena con menú francés completo.\n\nPrecio: 79 EUR por persona.\n\nUna experiencia única y memorable navegando por el corazón de París mientras disfrutáis de la mejor gastronomía francesa.",
    mapsUrl: null, pdfUrl: null, type: "almuerzo"
  },
  {
    id: "d3-crucero-turistico", day: 3, order: 1, done: false,
    date: "11 abril, sábado", city: "París", time: "15:30",
    title: "Crucero turístico por el Sena — 1 hora",
    description: "Crucero turístico de 1 hora por el río Sena, saliendo desde la Torre Eiffel.\n\nPrecio: 17 EUR por persona.\n\nVeréis los principales monumentos de París desde el río: Notre-Dame, el Louvre, el Musée d'Orsay y muchos más.",
    mapsUrl: null, pdfUrl: null, type: "tour"
  },
  {
    id: "d3-torre-eiffel", day: 3, order: 2, done: false,
    date: "11 abril, sábado", city: "París", time: "17:00",
    title: "Torre Eiffel y Champ-de-Mars",
    description: "Visita a la Torre Eiffel y paseo por el jardín del Champ-de-Mars.\n\nEl icono más reconocible de París. Podéis admirarla desde abajo o subir a alguno de sus pisos (taquilla en el lugar). El jardín Champ-de-Mars es perfecto para un paseo tranquilo.",
    mapsUrl: null, pdfUrl: null, type: "visita"
  },
  {
    id: "d3-trocadero", day: 3, order: 3, done: false,
    date: "11 abril, sábado", city: "París", time: "18:00",
    title: "Plaza del Trocadéro",
    description: "Subir a la Plaza del Trocadéro para disfrutar de la vista más completa e icónica de la Torre Eiffel.\n\nEste es el mejor punto fotográfico de París. Al atardecer la luz es absolutamente espectacular.",
    mapsUrl: null, pdfUrl: null, type: "visita"
  },
  {
    id: "d3-arco-triunfo", day: 3, order: 4, done: false,
    date: "11 abril, sábado", city: "París", time: "18:45",
    title: "Arco del Triunfo",
    description: "Visita al majestuoso Arco del Triunfo al final de los Campos Elíseos.\n\nDesde el Trocadéro: 25 minutos caminando o 3 paradas de autobús.\n\nSe puede subir a la terraza para una vista panorámica de la ciudad y de los 12 bulevares que confluyen aquí.",
    mapsUrl: "https://maps.app.goo.gl/hLK1m6N5LNB26wY48", pdfUrl: null, type: "visita"
  },
  {
    id: "d3-champs-elysees", day: 3, order: 5, done: false,
    date: "11 abril, sábado", city: "París", time: "19:30",
    title: "Avenida de los Campos Elíseos",
    description: "Paseo por la avenida más famosa del mundo, desde el Arco del Triunfo hacia la Plaza de la Concordia.\n\nMás de 2 km de tiendas, cafés y restaurantes. Perfecta para el paseo del atardecer y para cenar por la zona.",
    mapsUrl: null, pdfUrl: null, type: "libre"
  },

  // ── DÍA 4 ─ 12 abril, domingo ─ PARÍS → ZÚRICH ──────────
  {
    id: "d4-manana-libre", day: 4, order: 0, done: false,
    date: "12 abril, domingo", city: "París", time: "09:00",
    title: "Mañana libre en París",
    description: "Última mañana en París para visitar algo que haya quedado pendiente o volver a un lugar favorito.\n\nLas maletas se pueden guardar en el hotel. Aprovechen para hacer las últimas compras o simplemente disfrutar de un café parisino en la terraza.",
    mapsUrl: null, pdfUrl: null, type: "libre"
  },
  {
    id: "d4-tren-zurich", day: 4, order: 1, done: false,
    date: "12 abril, domingo", city: "París → Zúrich", time: "16:22",
    title: "Tren París → Zúrich",
    description: "Salida desde la Gare de Lyon (Estación de Lyon) a las 16:22.\n\nLlegada a Zúrich Hauptbahnhof (Zúrich HB) a las 21:00.\n\nPara llegar al hotel desde la estación: tomar el tram 51 dirección Bhf. Altstetten Nord y bajar en la parada Technopark.",
    mapsUrl: "https://maps.app.goo.gl/BTZhdXAewjg6HR667", pdfUrl: null, type: "transporte"
  },

  // ── DÍA 5 ─ 13 abril, lunes ─ ZÚRICH ────────────────────
  {
    id: "d5-free-tour-zurich", day: 5, order: 0, done: false,
    date: "13 abril, lunes", city: "Zúrich", time: "10:30",
    title: "Free Tour por el Casco Antiguo de Zúrich",
    description: "Tour guiado gratuito por el histórico casco antiguo de Zúrich. Duración: hasta las 12:30 aproximadamente.\n\nPunto de encuentro: entrada principal del edificio UBS en la Paradeplatz. Buscar al guía con mochila roja Victorinox y prenda roja.\n\n¡Llegar 5 minutos antes!",
    mapsUrl: null, pdfUrl: null, type: "tour"
  },
  {
    id: "d5-almuerzo-zurich", day: 5, order: 1, done: false,
    date: "13 abril, lunes", city: "Zúrich", time: "13:00",
    title: "Almuerzo en Zúrich",
    description: "Pedir recomendación de restaurante directamente a la guía del Free Tour.\n\nLos guías locales siempre conocen los mejores sitios auténticos y asequibles que no aparecen en las guías turísticas.",
    mapsUrl: null, pdfUrl: null, type: "almuerzo"
  },
  {
    id: "d5-lago-zurich", day: 5, order: 2, done: false,
    date: "13 abril, lunes", city: "Zúrich", time: "14:30",
    title: "Paseo en barco por el lago de Zúrich",
    description: "Relajante paseo en barco por el hermoso lago de Zúrich.\n\nPrecio: aproximadamente 5–10 EUR por persona.\n\nMás información y horarios: www.zsg.ch/en/\n\nEn días despejados se pueden ver los Alpes al fondo. Una experiencia muy tranquila y reconfortante.",
    mapsUrl: null, pdfUrl: null, type: "visita"
  },
  {
    id: "d5-lindt", day: 5, order: 3, done: false,
    date: "13 abril, lunes", city: "Zúrich", time: "17:00",
    title: "Museo Lindt del Chocolate",
    description: "Visita al fascinante Museo Lindt del Chocolate, el museo de chocolate más grande del mundo.\n\nUna experiencia muy especial con degustaciones incluidas. Perfecto para los amantes del chocolate suizo de calidad.",
    mapsUrl: null, pdfUrl: null, type: "visita"
  },

  // ── DÍA 6 ─ 14 abril, martes ─ ZÚRICH → MÚNICH ──────────
  {
    id: "d6-fifa", day: 6, order: 0, done: false,
    date: "14 abril, martes", city: "Zúrich", time: "10:00",
    title: "Museo FIFA",
    description: "Visita al Museo FIFA, dedicado a la historia del fútbol mundial.\n\nPrecio: 27,50 EUR por persona.\n\nUn museo interactivo y muy entretenido con exposiciones sobre los Mundiales, los mejores jugadores de la historia y la evolución del deporte más popular del mundo.",
    mapsUrl: null, pdfUrl: null, type: "visita"
  },
  {
    id: "d6-jardin-botanico", day: 6, order: 1, done: false,
    date: "14 abril, martes", city: "Zúrich", time: "12:00",
    title: "Jardín Botánico de Zúrich",
    description: "Paseo tranquilo por el hermoso Jardín Botánico de la Universidad de Zúrich.\n\nEntrada gratuita. Un lugar muy sereno y bonito, especialmente colorido y agradable en primavera.",
    mapsUrl: "https://maps.app.goo.gl/qmn8jNmAQgULN5cq8", pdfUrl: null, type: "visita"
  },
  {
    id: "d6-tren-munich", day: 6, order: 2, done: false,
    date: "14 abril, martes", city: "Zúrich → Múnich", time: "15:32",
    title: "Tren Zúrich → Múnich",
    description: "Salida desde Zúrich Hauptbahnhof (Zúrich HB) a las 15:32.\n\nLlegada a Múnich a las 19:16.\n\nEl hotel se encuentra a solo 8 minutos caminando desde la estación central de Múnich.",
    mapsUrl: "https://maps.app.goo.gl/J4iWyUtr9x3YVx8R8", pdfUrl: null, type: "transporte"
  },
  {
    id: "d6-cena-munich", day: 6, order: 3, done: false,
    date: "14 abril, martes", city: "Múnich", time: "20:00",
    title: "Cena en Múnich",
    description: "Primera cena en Múnich. Sugerencias de restaurantes tradicionales bávaros:\n\n• Andy's Krablergarten — jardín de cerveza típico bávaro\n• Gaststätte Bavaria — cocina tradicional alemana auténtica\n• Augustiner Drei Mühlen — cervecería histórica con excelente cocina local",
    mapsUrl: null, pdfUrl: null, type: "cena"
  },

  // ── DÍA 7 ─ 15 abril, miércoles ─ MÚNICH ─────────────────
  {
    id: "d7-free-tour-munich", day: 7, order: 0, done: false,
    date: "15 abril, miércoles", city: "Múnich", time: "10:45",
    title: "Free Tour por Múnich",
    description: "Tour guiado gratuito por el centro histórico de Múnich. Duración: hasta las 13:15.\n\nConoceréis la Marienplatz, la Frauenkirche, el Viktualienmarkt y la fascinante historia de la ciudad.",
    mapsUrl: null, pdfUrl: null, type: "tour"
  },
  {
    id: "d7-almuerzo-munich", day: 7, order: 1, done: false,
    date: "15 abril, miércoles", city: "Múnich", time: "13:30",
    title: "Almuerzo en Múnich",
    description: "Pedir recomendación de restaurante directamente al guía del Free Tour.\n\nLos guías locales siempre conocen los mejores y más auténticos rincones gastronómicos de la ciudad.",
    mapsUrl: null, pdfUrl: null, type: "almuerzo"
  },
  {
    id: "d7-comprar-desayuno", day: 7, order: 2, done: false,
    date: "15 abril, miércoles", city: "Múnich", time: "17:00",
    title: "Comprar desayuno para mañana ⚠️",
    description: "Importante: comprar algo para desayunar el día siguiente antes de cenar.\n\nEl motivo es que mañana se visita el Campo de Concentración de Dachau y NO está permitido comer dentro del recinto.\n\nEs fundamental desayunar bien en el hotel antes de salir por la mañana.",
    mapsUrl: null, pdfUrl: null, type: "libre"
  },
  {
    id: "d7-hofbrauhaus", day: 7, order: 3, done: false,
    date: "15 abril, miércoles", city: "Múnich", time: "20:00",
    title: "Cena en Hofbräuhaus München",
    description: "Cena en la cervecería más famosa del mundo: el histórico Hofbräuhaus München.\n\nIr a la planta baja — no hace falta reserva.\n\nUna experiencia única con música en directo, la tradicional cerveza bávara y cocina alemana auténtica. ¡Un clásico absolutamente imprescindible de Múnich!",
    mapsUrl: null, pdfUrl: null, type: "cena"
  },

  // ── DÍA 8 ─ 16 abril, jueves ─ MÚNICH ────────────────────
  {
    id: "d8-dachau", day: 8, order: 0, done: false,
    date: "16 abril, jueves", city: "Múnich", time: "8:45",
    title: "Tour al Campo de Concentración de Dachau",
    description: "Tour guiado al Campo de Concentración de Dachau. Duración: de 8:45 a 13:45.\n\nPunto de encuentro: bajo el arco de Karlstor, en Karlsplatz. Llegar 15–20 minutos antes.\n\nEl guía ayudará a comprar el ticket de tren para llegar a Dachau.\n\nRecordatorio importante: no está permitido comer dentro del recinto. Desayunar bien en el hotel antes de salir y llevar agua.",
    mapsUrl: null, pdfUrl: null, type: "tour"
  },

  // ── DÍA 9 ─ 17 abril, viernes ─ MÚNICH → VIENA ───────────
  {
    id: "d9-tren-viena", day: 9, order: 0, done: false,
    date: "17 abril, viernes", city: "Múnich → Viena", time: "9:28",
    title: "Tren Múnich → Viena",
    description: "Salida desde München Hauptbahnhof (Múnich HBF) a las 9:28.\n\nLlegada a Wien Hauptbahnhof (Viena) a las 13:32.\n\nTarden en salir del tren con calma, hay tiempo de sobra para instalarse en el hotel.",
    mapsUrl: null, pdfUrl: null, type: "transporte"
  },

  // ── DÍA 10 ─ 18 abril, sábado ─ VIENA ────────────────────
  {
    id: "d10-free-tour-viena", day: 10, order: 0, done: false,
    date: "18 abril, sábado", city: "Viena", time: "10:45",
    title: "Free Tour por Viena",
    description: "Tour guiado gratuito por el centro histórico de Viena. Duración: hasta las 12:45.\n\nPunto de encuentro: plaza junto al «monumento contra la guerra y el fascismo».\n\nConoceréis la Ópera Estatal, la Catedral de San Esteban, el Palacio Hofburg y la magnífica historia imperial de la ciudad.",
    mapsUrl: null, pdfUrl: null, type: "tour"
  },

  // ── DÍA 11 ─ 19 abril, domingo ─ VIENA → PRAGA ───────────
  {
    id: "d11-tren-praga", day: 11, order: 0, done: false,
    date: "19 abril, domingo", city: "Viena → Praga", time: "17:10",
    title: "Tren Viena → Praga",
    description: "Salida desde Wien Hauptbahnhof (Viena HBF) a las 17:10.\n\nLlegada a Praga a las 21:23.\n\nPara llegar al hotel desde la estación de Praga: 14 minutos caminando o en metro.",
    mapsUrl: "https://maps.app.goo.gl/1KYq2e3Pc2V2pDmu6", pdfUrl: null, type: "transporte"
  },

  // ── DÍA 12 ─ 20 abril, lunes ─ PRAGA ─────────────────────
  {
    id: "d12-free-tour-praga", day: 12, order: 0, done: false,
    date: "20 abril, lunes", city: "Praga", time: "10:00",
    title: "Free Tour: Ciudad Vieja, Barrio Judío y Reloj Astronómico",
    description: "Free Tour por la Ciudad Vieja de Praga, el histórico Barrio Judío y el famoso Reloj Astronómico.\n\nMás información y reserva en: guruwalk.com — «Free tour bienvenida a Praga, ciudad vieja, barrio judío y reloj astronómico».\n\nUno de los cascos históricos mejor conservados de toda Europa. ¡No os lo perdáis!",
    mapsUrl: null, pdfUrl: null, type: "tour"
  },

  // ── DÍA 13 ─ 21 abril, martes ─ PRAGA ────────────────────
  {
    id: "d13-castillo-praga", day: 13, order: 0, done: false,
    date: "21 abril, martes", city: "Praga", time: "10:00",
    title: "Tour Castillo de Praga, Malá Strana y Puente de Carlos",
    description: "Tour completo por el Castillo de Praga, el encantador barrio de Malá Strana y el icónico Puente de Carlos.\n\nMás información y reserva en: guruwalk.com — «Castillo de Praga al completo con Malá Strana y Puente de Carlos».\n\nEl Castillo de Praga es el castillo medieval más grande del mundo. Una visita absolutamente impresionante.",
    mapsUrl: null, pdfUrl: null, type: "tour"
  },

  // ── DÍA 14 ─ 22 abril, miércoles ─ PRAGA ─────────────────
  {
    id: "d14-libre", day: 14, order: 0, done: false,
    date: "22 abril, miércoles", city: "Praga", time: "",
    title: "Día libre en Praga",
    description: "Último día del viaje para disfrutar con calma de Praga o visitar lo que haya quedado pendiente.\n\nSugerencias: pasear por el barrio de Malá Strana, explorar el mercado de Havelské tržiště, visitar el Museo Nacional, o simplemente sentarse en una terraza a saborear una cerveza checa y disfrutar de la ciudad.",
    mapsUrl: null, pdfUrl: null, type: "libre"
  }

];

// ── City metadata ────────────────────────────────────────────
export const CITY_INFO = {
  "París":  { emoji: "🗼", color: "#C4793A", days: [1,2,3,4]  },
  "Zúrich": { emoji: "🏔️", color: "#4A7FA5", days: [5,6]     },
  "Múnich": { emoji: "🍺", color: "#D4860A", days: [7,8,9]    },
  "Viena":  { emoji: "🎼", color: "#7B5EA7", days: [10,11]    },
  "Praga":  { emoji: "🏰", color: "#2C6E49", days: [12,13,14] }
};

export const TYPE_LABELS = {
  transporte: "Transporte",
  visita:     "Visita",
  almuerzo:   "Almuerzo",
  cena:       "Cena",
  hotel:      "Hotel",
  tour:       "Tour",
  libre:      "Libre"
};
