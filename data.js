// =============================================================
//  HONEYMOON INDONESIA + TOKYO 2026  —  Datos del viaje (ES Module)
//  Usado por seed.js para poblar Firestore en el primer uso.
//
//  Modelo activities: { id, tripId, day, order, done, date, city, time,
//            title, description, mapsUrl, pdfUrl, type, contacto }
//  contacto: { contactName, contactPhone } — contacto de guía/operador
//            relevante a esa actividad puntual (ej. pickups). null si
//            no aplica.
//  Modelo flights/accommodations/tours/dayNotes: ver estructura original
//  — cada uno conserva sus campos propios + tripId + pdfUrl (boletos/
//  comprobantes) + mapsUrl (accommodations/tours) + contacto (tours).
//
//  tripId: vincula cada documento a su entrada en TRIPS_DATA. Todos los
//          documentos seedeados aquí pertenecen a "honeymoon-indonesia".
//  order: posición dentro del día (0, 1, 2…) para ordenar
//  done:  false por defecto (gestionado en Firestore en runtime)
// =============================================================

// ── Trips — colección "trips" ─────────────────────────────────
// viewMode: "itinerary" (basado en fechas/días, como honeymoon) o
//           "categories" (sin fechas, agrupado por categoría, como Japón).
export const TRIPS_DATA = [
  {
    id: "honeymoon-indonesia",
    name: "Honeymoon Indonesia",
    type: "honeymoon",
    startDate: "2026-08-18",
    endDate: "2026-08-31",
    viewMode: "itinerary",
    photoUrl: "./assets/images/honeymoon-hero.jpg"
  },
  {
    id: "boda-mexico",
    name: "Boda",
    type: "wedding",
    startDate: "2026-07-30",
    endDate: "2026-08-13",
    viewMode: "itinerary",
    photoUrl: "./assets/images/boda-hero.jpg"
  },
  {
    id: "japon",
    name: "Japón",
    type: "ideas",
    startDate: null,
    endDate: null,
    viewMode: "categories",
    photoUrl: "https://images.unsplash.com/photo-1767127961298-337a7a922df4?q=80&w=1600&auto=format&fit=crop"
  }
];

export const TRIP_DATA = [

  // ── DÍA 1 ─ 18 agosto, martes — MEXICO CITY → VANCOUVER ───────
  {
    id: "d1-0", tripId: "honeymoon-indonesia", day: 1, order: 0, done: false,
    date: "18 agosto, martes", city: "Mexico City → Vancouver", time: "00:30",
    title: "Departure MEX (Flair F82821)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },


  // ── DÍA 2 ─ 19 agosto, miércoles — VANCOUVER LAYOVER ──────────
  {
    id: "d2-0", tripId: "honeymoon-indonesia", day: 2, order: 0, done: false,
    date: "19 agosto, miércoles", city: "Vancouver layover (20h 5m)", time: "Todo el día",
    title: "Personal time in Vancouver, visit friends",
    description: "", mapsUrl: null, pdfUrl: null, type: "libre",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d2-1", tripId: "honeymoon-indonesia", day: 2, order: 1, done: false,
    date: "19 agosto, miércoles", city: "Vancouver layover (20h 5m)", time: "01:25",
    title: "Departure YVR (Cathay CX865)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },


  // ── DÍA 3 ─ 20 agosto, jueves — HONG KONG → SURABAYA ──────────
  {
    id: "d3-0", tripId: "honeymoon-indonesia", day: 3, order: 0, done: false,
    date: "20 agosto, jueves", city: "Hong Kong → Surabaya", time: "05:35",
    title: "Arrive HKG (Cathay CX865)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d3-1", tripId: "honeymoon-indonesia", day: 3, order: 1, done: false,
    date: "20 agosto, jueves", city: "Hong Kong → Surabaya", time: "07:30",
    title: "Airport Express to Central",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d3-2", tripId: "honeymoon-indonesia", day: 3, order: 2, done: false,
    date: "20 agosto, jueves", city: "Hong Kong → Surabaya", time: "08:00",
    title: "Dim sum breakfast (Lin Heung Tea House or Tim Ho Wan)",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d3-3", tripId: "honeymoon-indonesia", day: 3, order: 3, done: false,
    date: "20 agosto, jueves", city: "Hong Kong → Surabaya", time: "09:00",
    title: "Star Ferry to Tsim Sha Tsui",
    description: "", mapsUrl: null, pdfUrl: null, type: "visita",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d3-4", tripId: "honeymoon-indonesia", day: 3, order: 4, done: false,
    date: "20 agosto, jueves", city: "Hong Kong → Surabaya", time: "10:00",
    title: "Avenue of Stars + Promenade",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Avenue%20of%20Stars%2C%20Tsim%20Sha%20Tsui%2C%20Hong%20Kong", pdfUrl: null, type: "visita",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d3-5", tripId: "honeymoon-indonesia", day: 3, order: 5, done: false,
    date: "20 agosto, jueves", city: "Hong Kong → Surabaya", time: "12:00",
    title: "Airport Express back to HKG",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d3-6", tripId: "honeymoon-indonesia", day: 3, order: 6, done: false,
    date: "20 agosto, jueves", city: "Hong Kong → Surabaya", time: "14:30",
    title: "Departure HKG (Cathay CX629)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d3-7", tripId: "honeymoon-indonesia", day: 3, order: 7, done: false,
    date: "20 agosto, jueves", city: "Hong Kong → Surabaya", time: "18:15",
    title: "Arrive SUB",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d3-8", tripId: "honeymoon-indonesia", day: 3, order: 8, done: false,
    date: "20 agosto, jueves", city: "Hong Kong → Surabaya", time: "19:00",
    title: "Pickup by East Java Paradise driver, drive 3hrs to Tosari",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },


  // ── DÍA 4 ─ 21 agosto, viernes — BROMO → LUMAJANG ─────────────
  {
    id: "d4-0", tripId: "honeymoon-indonesia", day: 4, order: 0, done: false,
    date: "21 agosto, viernes", city: "Bromo → Lumajang (Tumpak Sewu area)", time: "01:30",
    title: "Pickup at Jambuluwuk for Bromo sunrise",
    description: "", mapsUrl: null, pdfUrl: null, type: "tour",
    contacto: { contactName: "Abel (East Java Paradise)", contactPhone: "+62 851 4718 0805" }
  },
  {
    id: "d4-1", tripId: "honeymoon-indonesia", day: 4, order: 1, done: false,
    date: "21 agosto, viernes", city: "Bromo → Lumajang (Tumpak Sewu area)", time: "02:00",
    title: "Drive to jeep parking, transfer to 4WD",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d4-2", tripId: "honeymoon-indonesia", day: 4, order: 2, done: false,
    date: "21 agosto, viernes", city: "Bromo → Lumajang (Tumpak Sewu area)", time: "03:45",
    title: "Arrive Penanjakan 1 sunrise viewpoint (Tosari side)",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Penanjakan%201%20Viewpoint%2C%20Tosari%2C%20East%20Java%2C%20Indonesia", pdfUrl: null, type: "visita",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d4-3", tripId: "honeymoon-indonesia", day: 4, order: 3, done: false,
    date: "21 agosto, viernes", city: "Bromo → Lumajang (Tumpak Sewu area)", time: "05:30",
    title: "Sunrise — view of Mt. Bromo, Mt. Batok, Mt. Semeru",
    description: "", mapsUrl: null, pdfUrl: null, type: "visita",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d4-4", tripId: "honeymoon-indonesia", day: 4, order: 4, done: false,
    date: "21 agosto, viernes", city: "Bromo → Lumajang (Tumpak Sewu area)", time: "06:00",
    title: "Descent to Sea of Sand (Bromo Caldera)",
    description: "", mapsUrl: null, pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d4-5", tripId: "honeymoon-indonesia", day: 4, order: 5, done: false,
    date: "21 agosto, viernes", city: "Bromo → Lumajang (Tumpak Sewu area)", time: "06:30",
    title: "Trek to Bromo Crater rim",
    description: "", mapsUrl: null, pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d4-6", tripId: "honeymoon-indonesia", day: 4, order: 6, done: false,
    date: "21 agosto, viernes", city: "Bromo → Lumajang (Tumpak Sewu area)", time: "09:00",
    title: "Breakfast at hotel",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d4-7", tripId: "honeymoon-indonesia", day: 4, order: 7, done: false,
    date: "21 agosto, viernes", city: "Bromo → Lumajang (Tumpak Sewu area)", time: "11:00",
    title: "Drive to Lumajang area (3.5 hrs)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d4-8", tripId: "honeymoon-indonesia", day: 4, order: 8, done: false,
    date: "21 agosto, viernes", city: "Bromo → Lumajang (Tumpak Sewu area)", time: "13:00",
    title: "Lunch en route",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d4-9", tripId: "honeymoon-indonesia", day: 4, order: 9, done: false,
    date: "21 agosto, viernes", city: "Bromo → Lumajang (Tumpak Sewu area)", time: "16:00",
    title: "Arrive Arnez Tropical Cottage",
    description: "", mapsUrl: null, pdfUrl: null, type: "hotel",
    contacto: { contactName: null, contactPhone: null }
  },


  // ── DÍA 5 ─ 22 agosto, sábado — TUMPAK SEWU → BANYUWANGI ──────
  {
    id: "d5-0", tripId: "honeymoon-indonesia", day: 5, order: 0, done: false,
    date: "22 agosto, sábado", city: "Tumpak Sewu → Banyuwangi (Ijen Resort)", time: "05:30",
    title: "Pickup at Arnez",
    description: "", mapsUrl: null, pdfUrl: null, type: "tour",
    contacto: { contactName: "Abel (East Java Paradise)", contactPhone: "+62 851 4718 0805" }
  },
  {
    id: "d5-1", tripId: "honeymoon-indonesia", day: 5, order: 1, done: false,
    date: "22 agosto, sábado", city: "Tumpak Sewu → Banyuwangi (Ijen Resort)", time: "06:00-09:30",
    title: "Tumpak Sewu Panorama viewpoint + descent + Goa Tetes + Kabut Pelangi",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tumpak%20Sewu%20Waterfall%2C%20Lumajang%2C%20East%20Java%2C%20Indonesia", pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d5-2", tripId: "honeymoon-indonesia", day: 5, order: 2, done: false,
    date: "22 agosto, sábado", city: "Tumpak Sewu → Banyuwangi (Ijen Resort)", time: "09:30",
    title: "Return to vehicle",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d5-3", tripId: "honeymoon-indonesia", day: 5, order: 3, done: false,
    date: "22 agosto, sábado", city: "Tumpak Sewu → Banyuwangi (Ijen Resort)", time: "10:00",
    title: "Checkout + drive to Banyuwangi (~6 hrs on bad roads)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d5-4", tripId: "honeymoon-indonesia", day: 5, order: 4, done: false,
    date: "22 agosto, sábado", city: "Tumpak Sewu → Banyuwangi (Ijen Resort)", time: "13:00",
    title: "Lunch en route (Indonesian warung)",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d5-5", tripId: "honeymoon-indonesia", day: 5, order: 5, done: false,
    date: "22 agosto, sábado", city: "Tumpak Sewu → Banyuwangi (Ijen Resort)", time: "16:00-16:30",
    title: "Arrive Ijen Resort and Villas",
    description: "", mapsUrl: null, pdfUrl: null, type: "hotel",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d5-6", tripId: "honeymoon-indonesia", day: 5, order: 6, done: false,
    date: "22 agosto, sábado", city: "Tumpak Sewu → Banyuwangi (Ijen Resort)", time: "17:00",
    title: "Early dinner — LIGHT (no heavy food before Ijen trek)",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d5-7", tripId: "honeymoon-indonesia", day: 5, order: 7, done: false,
    date: "22 agosto, sábado", city: "Tumpak Sewu → Banyuwangi (Ijen Resort)", time: "19:30",
    title: "Sleep",
    description: "", mapsUrl: null, pdfUrl: null, type: "descanso",
    contacto: { contactName: null, contactPhone: null }
  },


  // ── DÍA 6 ─ 23 agosto, domingo — IJEN → BALI (UBUD) ───────────
  {
    id: "d6-0", tripId: "honeymoon-indonesia", day: 6, order: 0, done: false,
    date: "23 agosto, domingo", city: "Ijen → Bali (Ubud)", time: "00:30",
    title: "Pickup at Ijen Resort",
    description: "", mapsUrl: null, pdfUrl: null, type: "tour",
    contacto: { contactName: "Abel (East Java Paradise)", contactPhone: "+62 851 4718 0805" }
  },
  {
    id: "d6-1", tripId: "honeymoon-indonesia", day: 6, order: 1, done: false,
    date: "23 agosto, domingo", city: "Ijen → Bali (Ubud)", time: "01:30",
    title: "Arrive Paltuding (Ijen base)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d6-2", tripId: "honeymoon-indonesia", day: 6, order: 2, done: false,
    date: "23 agosto, domingo", city: "Ijen → Bali (Ubud)", time: "02:00",
    title: "Start 3 km hike to crater",
    description: "", mapsUrl: null, pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d6-3", tripId: "honeymoon-indonesia", day: 6, order: 3, done: false,
    date: "23 agosto, domingo", city: "Ijen → Bali (Ubud)", time: "02:30-04:00",
    title: "Reach rim, optional descent to Blue Fire (gas mask required)",
    description: "", mapsUrl: null, pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d6-4", tripId: "honeymoon-indonesia", day: 6, order: 4, done: false,
    date: "23 agosto, domingo", city: "Ijen → Bali (Ubud)", time: "05:30",
    title: "Sunrise at crater rim — turquoise acidic lake view",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kawah%20Ijen%2C%20Banyuwangi%2C%20East%20Java%2C%20Indonesia", pdfUrl: null, type: "visita",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d6-5", tripId: "honeymoon-indonesia", day: 6, order: 5, done: false,
    date: "23 agosto, domingo", city: "Ijen → Bali (Ubud)", time: "06:30",
    title: "Begin descent",
    description: "", mapsUrl: null, pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d6-6", tripId: "honeymoon-indonesia", day: 6, order: 6, done: false,
    date: "23 agosto, domingo", city: "Ijen → Bali (Ubud)", time: "08:00",
    title: "Leave Ijen",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d6-7", tripId: "honeymoon-indonesia", day: 6, order: 7, done: false,
    date: "23 agosto, domingo", city: "Ijen → Bali (Ubud)", time: "09:00",
    title: "Return to hotel, shower, breakfast",
    description: "", mapsUrl: null, pdfUrl: null, type: "descanso",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d6-8", tripId: "honeymoon-indonesia", day: 6, order: 8, done: false,
    date: "23 agosto, domingo", city: "Ijen → Bali (Ubud)", time: "11:00",
    title: "Depart to Ketapang ferry port",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d6-9", tripId: "honeymoon-indonesia", day: 6, order: 9, done: false,
    date: "23 agosto, domingo", city: "Ijen → Bali (Ubud)", time: "12:30",
    title: "Ferry crossing to Gilimanuk (45 min, IDR 16,500/pax)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d6-10", tripId: "honeymoon-indonesia", day: 6, order: 10, done: false,
    date: "23 agosto, domingo", city: "Ijen → Bali (Ubud)", time: "13:15",
    title: "Bali driver pickup at Gilimanuk",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d6-11", tripId: "honeymoon-indonesia", day: 6, order: 11, done: false,
    date: "23 agosto, domingo", city: "Ijen → Bali (Ubud)", time: "17:00",
    title: "Arrive Ubud Valley Boutique Resort",
    description: "", mapsUrl: null, pdfUrl: null, type: "hotel",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d6-12", tripId: "honeymoon-indonesia", day: 6, order: 12, done: false,
    date: "23 agosto, domingo", city: "Ijen → Bali (Ubud)", time: "19:00",
    title: "Dinner + sleep early",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },


  // ── DÍA 7 ─ 24 agosto, lunes — UBUD ───────────────────────────
  {
    id: "d7-0", tripId: "honeymoon-indonesia", day: 7, order: 0, done: false,
    date: "24 agosto, lunes", city: "Ubud", time: "06:30",
    title: "Depart hotel",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d7-1", tripId: "honeymoon-indonesia", day: 7, order: 1, done: false,
    date: "24 agosto, lunes", city: "Ubud", time: "07:15-09:00",
    title: "Tegallalang Rice Terraces (photo without crowds)",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tegallalang%20Rice%20Terrace%2C%20Gianyar%2C%20Bali%2C%20Indonesia", pdfUrl: null, type: "visita",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d7-2", tripId: "honeymoon-indonesia", day: 7, order: 2, done: false,
    date: "24 agosto, lunes", city: "Ubud", time: "09:30",
    title: "Tirta Empul Temple (optional purification)",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tirta%20Empul%20Temple%2C%20Tampaksiring%2C%20Bali%2C%20Indonesia", pdfUrl: null, type: "cultural",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d7-3", tripId: "honeymoon-indonesia", day: 7, order: 3, done: false,
    date: "24 agosto, lunes", city: "Ubud", time: "11:00",
    title: "Return to Ubud",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d7-4", tripId: "honeymoon-indonesia", day: 7, order: 4, done: false,
    date: "24 agosto, lunes", city: "Ubud", time: "11:30",
    title: "Monkey Forest",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sacred%20Monkey%20Forest%20Sanctuary%2C%20Ubud%2C%20Bali%2C%20Indonesia", pdfUrl: null, type: "visita",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d7-5", tripId: "honeymoon-indonesia", day: 7, order: 5, done: false,
    date: "24 agosto, lunes", city: "Ubud", time: "13:00",
    title: "Lunch at Watercress / Clear Café / Alchemy",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d7-6", tripId: "honeymoon-indonesia", day: 7, order: 6, done: false,
    date: "24 agosto, lunes", city: "Ubud", time: "15:00",
    title: "Campuhan Ridge Walk (1 hr, free)",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Campuhan%20Ridge%20Walk%2C%20Ubud%2C%20Bali%2C%20Indonesia", pdfUrl: null, type: "libre",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d7-7", tripId: "honeymoon-indonesia", day: 7, order: 7, done: false,
    date: "24 agosto, lunes", city: "Ubud", time: "16:30",
    title: "Cretya Ubud Jungle Pool (day pass IDR 350,000-500,000/pax)",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cretya%20Ubud%2C%20Bali%2C%20Indonesia", pdfUrl: null, type: "libre",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d7-8", tripId: "honeymoon-indonesia", day: 7, order: 8, done: false,
    date: "24 agosto, lunes", city: "Ubud", time: "19:00",
    title: "Dinner EARLY at Locavore / Hujan Locale",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d7-9", tripId: "honeymoon-indonesia", day: 7, order: 9, done: false,
    date: "24 agosto, lunes", city: "Ubud", time: "21:30",
    title: "Sleep early — Nusa Penida pickup at 5:20 AM!",
    description: "", mapsUrl: null, pdfUrl: null, type: "descanso",
    contacto: { contactName: null, contactPhone: null }
  },


  // ── DÍA 8 ─ 25 agosto, martes — NUSA PENIDA (DÍA COMPLETO) ────
  {
    id: "d8-0", tripId: "honeymoon-indonesia", day: 8, order: 0, done: false,
    date: "25 agosto, martes", city: "Nusa Penida day trip — CUSTOM West + East Coast", time: "04:30",
    title: "Wake up, quick coffee",
    description: "", mapsUrl: null, pdfUrl: null, type: "descanso",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d8-1", tripId: "honeymoon-indonesia", day: 8, order: 1, done: false,
    date: "25 agosto, martes", city: "Nusa Penida day trip — CUSTOM West + East Coast", time: "05:20",
    title: "EARLY pickup at Ubud Valley by Bali Yok (Justin)",
    description: "", mapsUrl: null, pdfUrl: null, type: "tour",
    contacto: { contactName: "Justin (Bali Yok)", contactPhone: null }
  },
  {
    id: "d8-2", tripId: "honeymoon-indonesia", day: 8, order: 2, done: false,
    date: "25 agosto, martes", city: "Nusa Penida day trip — CUSTOM West + East Coast", time: "06:30",
    title: "Arrive Sanur Port — first fast boat",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d8-3", tripId: "honeymoon-indonesia", day: 8, order: 3, done: false,
    date: "25 agosto, martes", city: "Nusa Penida day trip — CUSTOM West + East Coast", time: "07:30-08:00",
    title: "Arrive Banjar Nyuh Port, Nusa Penida",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d8-4", tripId: "honeymoon-indonesia", day: 8, order: 4, done: false,
    date: "25 agosto, martes", city: "Nusa Penida day trip — CUSTOM West + East Coast", time: "08:30-10:30",
    title: "Kelingking Beach T-Rex viewpoint (NO descent)",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kelingking%20Beach%2C%20Nusa%20Penida%2C%20Bali%2C%20Indonesia", pdfUrl: null, type: "visita",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d8-5", tripId: "honeymoon-indonesia", day: 8, order: 5, done: false,
    date: "25 agosto, martes", city: "Nusa Penida day trip — CUSTOM West + East Coast", time: "11:00-12:00",
    title: "Broken Beach + Angel Billabong",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Broken%20Beach%2C%20Nusa%20Penida%2C%20Bali%2C%20Indonesia", pdfUrl: null, type: "visita",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d8-6", tripId: "honeymoon-indonesia", day: 8, order: 6, done: false,
    date: "25 agosto, martes", city: "Nusa Penida day trip — CUSTOM West + East Coast", time: "12:00-13:00",
    title: "Lunch (add-on)",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d8-7", tripId: "honeymoon-indonesia", day: 8, order: 7, done: false,
    date: "25 agosto, martes", city: "Nusa Penida day trip — CUSTOM West + East Coast", time: "13:00-14:30",
    title: "Cross-island drive to East",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d8-8", tripId: "honeymoon-indonesia", day: 8, order: 8, done: false,
    date: "25 agosto, martes", city: "Nusa Penida day trip — CUSTOM West + East Coast", time: "14:30-15:30",
    title: "Diamond Beach viewpoint",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Diamond%20Beach%2C%20Nusa%20Penida%2C%20Bali%2C%20Indonesia", pdfUrl: null, type: "visita",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d8-9", tripId: "honeymoon-indonesia", day: 8, order: 9, done: false,
    date: "25 agosto, martes", city: "Nusa Penida day trip — CUSTOM West + East Coast", time: "15:45-16:15",
    title: "Atuh Beach viewpoint",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Atuh%20Beach%2C%20Nusa%20Penida%2C%20Bali%2C%20Indonesia", pdfUrl: null, type: "visita",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d8-10", tripId: "honeymoon-indonesia", day: 8, order: 10, done: false,
    date: "25 agosto, martes", city: "Nusa Penida day trip — CUSTOM West + East Coast", time: "16:30-17:00",
    title: "Drive back to Banjar Nyuh port",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d8-11", tripId: "honeymoon-indonesia", day: 8, order: 11, done: false,
    date: "25 agosto, martes", city: "Nusa Penida day trip — CUSTOM West + East Coast", time: "17:00",
    title: "Last fast boat back to Sanur from Banjar Nyuh",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d8-12", tripId: "honeymoon-indonesia", day: 8, order: 12, done: false,
    date: "25 agosto, martes", city: "Nusa Penida day trip — CUSTOM West + East Coast", time: "18:00-19:00",
    title: "Drop-off Ubud Valley",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },


  // ── DÍA 9 ─ 26 agosto, miércoles — UBUD → LABUAN BAJO ─────────
  {
    id: "d9-0", tripId: "honeymoon-indonesia", day: 9, order: 0, done: false,
    date: "26 agosto, miércoles", city: "Ubud → Labuan Bajo", time: "07:30",
    title: "Checkout Ubud Valley",
    description: "", mapsUrl: null, pdfUrl: null, type: "hotel",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d9-1", tripId: "honeymoon-indonesia", day: 9, order: 1, done: false,
    date: "26 agosto, miércoles", city: "Ubud → Labuan Bajo", time: "08:30",
    title: "Driver to DPS airport (1 hr)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d9-2", tripId: "honeymoon-indonesia", day: 9, order: 2, done: false,
    date: "26 agosto, miércoles", city: "Ubud → Labuan Bajo", time: "11:25",
    title: "Flight DPS → LBJ (AirAsia QZ646)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d9-3", tripId: "honeymoon-indonesia", day: 9, order: 3, done: false,
    date: "26 agosto, miércoles", city: "Ubud → Labuan Bajo", time: "12:40",
    title: "Arrive LBJ",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d9-4", tripId: "honeymoon-indonesia", day: 9, order: 4, done: false,
    date: "26 agosto, miércoles", city: "Ubud → Labuan Bajo", time: "13:00",
    title: "Drop bags at Diamond Hill Villa (5 min from airport)",
    description: "", mapsUrl: null, pdfUrl: null, type: "hotel",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d9-5", tripId: "honeymoon-indonesia", day: 9, order: 5, done: false,
    date: "26 agosto, miércoles", city: "Ubud → Labuan Bajo", time: "13:30",
    title: "Pickup by Alba Cruise for Rangko Cave tour",
    description: "", mapsUrl: null, pdfUrl: null, type: "tour",
    contacto: { contactName: "Alba Cruise", contactPhone: null }
  },
  {
    id: "d9-6", tripId: "honeymoon-indonesia", day: 9, order: 6, done: false,
    date: "26 agosto, miércoles", city: "Ubud → Labuan Bajo", time: "14:00",
    title: "Rangko Cave (cave with sunlight beam, swim)",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rangko%20Cave%2C%20Flores%2C%20Indonesia", pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d9-7", tripId: "honeymoon-indonesia", day: 9, order: 7, done: false,
    date: "26 agosto, miércoles", city: "Ubud → Labuan Bajo", time: "16:00",
    title: "Boleng Beach snorkel",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Boleng%20Beach%2C%20Labuan%20Bajo%2C%20Indonesia", pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d9-8", tripId: "honeymoon-indonesia", day: 9, order: 8, done: false,
    date: "26 agosto, miércoles", city: "Ubud → Labuan Bajo", time: "17:00",
    title: "Amelia Hill sunset panorama",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Amelia%20Hill%2C%20Labuan%20Bajo%2C%20Indonesia", pdfUrl: null, type: "visita",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d9-9", tripId: "honeymoon-indonesia", day: 9, order: 9, done: false,
    date: "26 agosto, miércoles", city: "Ubud → Labuan Bajo", time: "18:30",
    title: "Return to Diamond Hill Villa",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d9-10", tripId: "honeymoon-indonesia", day: 9, order: 10, done: false,
    date: "26 agosto, miércoles", city: "Ubud → Labuan Bajo", time: "20:00",
    title: "Dinner in Labuan Bajo town",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },


  // ── DÍA 10 ─ 27 agosto, jueves — KOMODO (LIVEABOARD DÍA 1) ─────
  {
    id: "d10-0", tripId: "honeymoon-indonesia", day: 10, order: 0, done: false,
    date: "27 agosto, jueves", city: "Komodo (Liveaboard Day 1) - Andalucia II", time: "08:30-09:30",
    title: "Pickup at Diamond Hill Villa for boat",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d10-1", tripId: "honeymoon-indonesia", day: 10, order: 1, done: false,
    date: "27 agosto, jueves", city: "Komodo (Liveaboard Day 1) - Andalucia II", time: "10:30",
    title: "Departure from KP3 Harbor on Andalucia II",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d10-2", tripId: "honeymoon-indonesia", day: 10, order: 2, done: false,
    date: "27 agosto, jueves", city: "Komodo (Liveaboard Day 1) - Andalucia II", time: "Tarde",
    title: "Manta Point snorkel (swim with manta rays)",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Manta%20Point%2C%20Komodo%20National%20Park%2C%20Indonesia", pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d10-3", tripId: "honeymoon-indonesia", day: 10, order: 3, done: false,
    date: "27 agosto, jueves", city: "Komodo (Liveaboard Day 1) - Andalucia II", time: "Tarde",
    title: "Taka Makassar (crescent sandbar in turquoise waters)",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Taka%20Makassar%2C%20Komodo%20National%20Park%2C%20Indonesia", pdfUrl: null, type: "visita",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d10-4", tripId: "honeymoon-indonesia", day: 10, order: 4, done: false,
    date: "27 agosto, jueves", city: "Komodo (Liveaboard Day 1) - Andalucia II", time: "Tarde",
    title: "Padar Island hike (afternoon/sunset)",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Padar%20Island%2C%20Komodo%20National%20Park%2C%20Indonesia", pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d10-5", tripId: "honeymoon-indonesia", day: 10, order: 5, done: false,
    date: "27 agosto, jueves", city: "Komodo (Liveaboard Day 1) - Andalucia II", time: "Noche",
    title: "Dinner on board, overnight anchored near Padar",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },


  // ── DÍA 11 ─ 28 agosto, viernes — KOMODO (LIVEABOARD DÍA 2) ────
  {
    id: "d11-0", tripId: "honeymoon-indonesia", day: 11, order: 0, done: false,
    date: "28 agosto, viernes", city: "Komodo (Liveaboard Day 2)", time: "04:30 (opcional)",
    title: "Padar sunrise hike (pending operator confirmation)",
    description: "", mapsUrl: null, pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d11-1", tripId: "honeymoon-indonesia", day: 11, order: 1, done: false,
    date: "28 agosto, viernes", city: "Komodo (Liveaboard Day 2)", time: "Mañana",
    title: "Komodo Island — Komodo dragon trekking with rangers",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Komodo%20Island%2C%20Komodo%20National%20Park%2C%20Indonesia", pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d11-2", tripId: "honeymoon-indonesia", day: 11, order: 2, done: false,
    date: "28 agosto, viernes", city: "Komodo (Liveaboard Day 2)", time: "Mediodía",
    title: "Pink Beach (paddleboarding, snorkel, swim)",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pink%20Beach%2C%20Komodo%20National%20Park%2C%20Indonesia", pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d11-3", tripId: "honeymoon-indonesia", day: 11, order: 3, done: false,
    date: "28 agosto, viernes", city: "Komodo (Liveaboard Day 2)", time: "Tarde",
    title: "Pengah Island snorkel",
    description: "", mapsUrl: null, pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d11-4", tripId: "honeymoon-indonesia", day: 11, order: 4, done: false,
    date: "28 agosto, viernes", city: "Komodo (Liveaboard Day 2)", time: "Tarde",
    title: "Pempe Island snorkel",
    description: "", mapsUrl: null, pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d11-5", tripId: "honeymoon-indonesia", day: 11, order: 5, done: false,
    date: "28 agosto, viernes", city: "Komodo (Liveaboard Day 2)", time: "Noche",
    title: "Kalong Island sunset — flying foxes spectacle",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kalong%20Island%2C%20Komodo%20National%20Park%2C%20Indonesia", pdfUrl: null, type: "visita",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d11-6", tripId: "honeymoon-indonesia", day: 11, order: 6, done: false,
    date: "28 agosto, viernes", city: "Komodo (Liveaboard Day 2)", time: "Noche",
    title: "Dinner on board, overnight anchored",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },


  // ── DÍA 12 ─ 29 agosto, sábado — KOMODO → BALI (ULUWATU) ───────
  {
    id: "d12-0", tripId: "honeymoon-indonesia", day: 12, order: 0, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Uluwatu)", time: "Mañana",
    title: "Kelor Island short trek + beach",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kelor%20Island%2C%20Komodo%20National%20Park%2C%20Indonesia", pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-1", tripId: "honeymoon-indonesia", day: 12, order: 1, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Uluwatu)", time: "Mañana",
    title: "Manjarite Island snorkel",
    description: "", mapsUrl: null, pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-2", tripId: "honeymoon-indonesia", day: 12, order: 2, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Uluwatu)", time: "12:00-13:00",
    title: "Return to Labuan Bajo (disembark)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-3", tripId: "honeymoon-indonesia", day: 12, order: 3, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Uluwatu)", time: "13:00",
    title: "Quick lunch / transfer to airport",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-4", tripId: "honeymoon-indonesia", day: 12, order: 4, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Uluwatu)", time: "15:30",
    title: "Check-in LBJ Airport",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-5", tripId: "honeymoon-indonesia", day: 12, order: 5, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Uluwatu)", time: "17:25",
    title: "Flight LBJ → DPS (AirAsia QZ649)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-6", tripId: "honeymoon-indonesia", day: 12, order: 6, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Uluwatu)", time: "18:35",
    title: "Arrive DPS",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-7", tripId: "honeymoon-indonesia", day: 12, order: 7, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Uluwatu)", time: "19:30",
    title: "Check-in Uluwatu hotel",
    description: "", mapsUrl: null, pdfUrl: null, type: "hotel",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-8", tripId: "honeymoon-indonesia", day: 12, order: 8, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Uluwatu)", time: "20:30",
    title: "Cliff sunset dinner (Single Fin / El Kabron / Sundara)",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },


  // ── DÍA 13 ─ 30 agosto, domingo — BALI → TOKYO (VIA SINGAPORE) ──
  {
    id: "d13-0", tripId: "honeymoon-indonesia", day: 13, order: 0, done: false,
    date: "30 agosto, domingo", city: "Bali → Tokyo (via Singapore)", time: "09:00",
    title: "Breakfast at hotel",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d13-1", tripId: "honeymoon-indonesia", day: 13, order: 1, done: false,
    date: "30 agosto, domingo", city: "Bali → Tokyo (via Singapore)", time: "09:30",
    title: "Checkout",
    description: "", mapsUrl: null, pdfUrl: null, type: "hotel",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d13-2", tripId: "honeymoon-indonesia", day: 13, order: 2, done: false,
    date: "30 agosto, domingo", city: "Bali → Tokyo (via Singapore)", time: "10:00",
    title: "Drive to DPS (30-40 min)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d13-3", tripId: "honeymoon-indonesia", day: 13, order: 3, done: false,
    date: "30 agosto, domingo", city: "Bali → Tokyo (via Singapore)", time: "11:20",
    title: "Flight DPS → SIN (Scoot TR 882)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d13-4", tripId: "honeymoon-indonesia", day: 13, order: 4, done: false,
    date: "30 agosto, domingo", city: "Bali → Tokyo (via Singapore)", time: "14:10",
    title: "Arrive Singapore (3h 05m layover at Changi)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d13-5", tripId: "honeymoon-indonesia", day: 13, order: 5, done: false,
    date: "30 agosto, domingo", city: "Bali → Tokyo (via Singapore)", time: "17:15",
    title: "Flight SIN → HND",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },


  // ── DÍA 14 ─ 31 agosto, lunes — TOKYO ──────────────────────────
  {
    id: "d14-0", tripId: "honeymoon-indonesia", day: 14, order: 0, done: false,
    date: "31 agosto, lunes", city: "Tokyo arrival", time: "01:05",
    title: "Arrive Tokyo Haneda — honeymoon ends, Tokyo life begins",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  }

];

// ── Destination metadata (used for nav + day section grouping) ──
export const CITY_INFO = {
  "Ciudad de México": { emoji: "🌆", color: "#C4793A", days: [1], photo: "https://images.unsplash.com/photo-1711025716267-e75c2a8598da?q=80&w=600&auto=format&fit=crop" },
  "Vancouver":         { emoji: "🏔️", color: "#4A7FA5", days: [2], photo: "https://images.unsplash.com/photo-1660143158587-bddffa026e06?q=80&w=600&auto=format&fit=crop" },
  "Hong Kong":         { emoji: "🌃", color: "#D4860A", days: [3], photo: "https://images.unsplash.com/photo-1569833172924-2324c41f2ec3?q=80&w=600&auto=format&fit=crop" },
  "Java":              { emoji: "🌋", color: "#B45309", days: [4, 5], photo: "https://images.unsplash.com/photo-1662114480912-05a338d79da3?q=80&w=600&auto=format&fit=crop" },
  "Bali":              { emoji: "🌴", color: "#2C6E49", days: [6, 7, 8, 12], photo: "https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=600&auto=format&fit=crop" },
  "Komodo":            { emoji: "🐉", color: "#0E7490", days: [9, 10, 11], photo: "https://images.unsplash.com/photo-1533339577339-9007cb316e9c?q=80&w=600&auto=format&fit=crop" },
  "Singapur":          { emoji: "🦁", color: "#9333EA", days: [13], photo: "https://images.unsplash.com/photo-1628866686613-6cf852bed925?q=80&w=600&auto=format&fit=crop" },
  "Tokio":             { emoji: "🗼", color: "#DC2626", days: [14], photo: "https://images.unsplash.com/photo-1762018824220-d4a9ebda2b28?q=80&w=600&auto=format&fit=crop" }
};

export const TYPE_LABELS = {
  transporte: "Transporte",
  visita:     "Visita",
  almuerzo:   "Almuerzo",
  cena:       "Cena",
  hotel:      "Hotel",
  tour:       "Tour",
  libre:      "Libre",
  comida:     "Comida",
  aventura:   "Aventura",
  descanso:   "Descanso",
  cultural:   "Cultural",
  boda:       "Boda"
};

// Maps an accommodation/tour id to its CITY_INFO destination key, so
// index.html can show each one inside the right destination tab.
export const ACCOM_CITY_MAP = {
  "accom-1": "Java",
  "accom-2": "Java",
  "accom-3": "Java",
  "accom-4": "Bali",
  "accom-7": "Bali",
  "accom-5": "Komodo",
  "accom-6": "Komodo"
};
export const TOUR_CITY_MAP = {
  "tour-1": "Java",
  "tour-2": "Bali",
  "tour-3": "Komodo",
  "tour-4": "Komodo"
};
// Same idea as ACCOM_CITY_MAP/TOUR_CITY_MAP, but for flights: keyed by the
// destination the flight ARRIVES at (its "to" city), not departs from —
// that's the trip leg that actually delivers you into that destination.
// Mexico City has no entry since it's the trip's origin, not a flight target.
export const FLIGHT_CITY_MAP = {
  "flight-1a": "Vancouver",
  "flight-1b": "Hong Kong",
  "flight-1c": "Java",
  "flight-2": "Komodo",
  "flight-3": "Bali",
  "flight-4a": "Singapur",
  "flight-4b": "Tokio"
};

// ── Boda México — destination metadata ──────────────────────────
export const BODA_CITY_INFO = {
  "Cancún":                   { emoji: "🏖️", color: "#0E7490", days: [1], photo: "https://images.unsplash.com/photo-1457537227909-08f41319e53c?q=80&w=600&auto=format&fit=crop" },
  "Tulum":                    { emoji: "🌴", color: "#C4793A", days: [2, 3, 4, 5], photo: "https://images.unsplash.com/photo-1664205543898-829ef8baa7ad?q=80&w=600&auto=format&fit=crop" },
  "Tulum (Boda)":             { emoji: "💍", color: "#DB2777", days: [6, 7, 8, 9], photo: "https://images.unsplash.com/photo-1740880978174-db9dddf6c58c?q=80&w=600&auto=format&fit=crop" },
  "Monterrey / Cd. Victoria": { emoji: "👨‍👩‍👧", color: "#2C6E49", days: [10, 11, 12, 13, 14], photo: "https://images.unsplash.com/photo-1600466892203-d84aae0aa4c1?q=80&w=600&auto=format&fit=crop" },
  "Querétaro":                { emoji: "🏡", color: "#7B5EA7", days: [15], photo: "https://images.unsplash.com/photo-1636300958497-42e3df244288?q=80&w=600&auto=format&fit=crop" }
};

export const BODA_ACCOM_CITY_MAP = {
  "boda-accom-1": "Cancún",
  "boda-accom-2": "Tulum",
  "boda-accom-3": "Tulum (Boda)",
  "boda-accom-4": "Monterrey / Cd. Victoria",
  "boda-accom-5": "Querétaro"
};

// ── Per-trip lookups — index.html uses these instead of hardcoding
// CITY_INFO/ACCOM_CITY_MAP/TOUR_CITY_MAP to a single trip. A trip with
// no entry here (e.g. "japon", viewMode "categories") falls back to a
// single Resumen tab with no destination breakdown.
export const DESTINATIONS_BY_TRIP = {
  "honeymoon-indonesia": CITY_INFO,
  "boda-mexico": BODA_CITY_INFO
};
export const ACCOM_CITY_MAP_BY_TRIP = {
  "honeymoon-indonesia": ACCOM_CITY_MAP,
  "boda-mexico": BODA_ACCOM_CITY_MAP
};
export const TOUR_CITY_MAP_BY_TRIP = {
  "honeymoon-indonesia": TOUR_CITY_MAP,
  "boda-mexico": {}
};
export const FLIGHT_CITY_MAP_BY_TRIP = {
  "honeymoon-indonesia": FLIGHT_CITY_MAP,
  "boda-mexico": {}
};

export const FLIGHTS_DATA = [
  {
    "id": "flight-1a",
    "tripId": "honeymoon-indonesia",
    "segment": "Outbound 1A",
    "type": "international",
    "from": {
      "code": "MEX",
      "name": "Aeropuerto Internacional de la Ciudad de México",
      "city": "Mexico City",
      "country": "Mexico"
    },
    "to": {
      "code": "YVR",
      "name": "Vancouver International Airport",
      "city": "Vancouver",
      "country": "Canada"
    },
    "departureDate": "2026-08-18",
    "departureTime": "00:30",
    "arrivalDate": "2026-08-18",
    "arrivalTime": "05:20",
    "duration": "5h 50m",
    "airline": "Flair Airlines",
    "flightNumber": "F82821",
    "class": "Economy",
    "status": "confirmed",
    "notes": "Self-transfer layover at YVR (20h 5m). Need to pick up and re-check bags. Not covered by travel protection.",
    "pdfUrl": null
  },
  {
    "id": "flight-1b",
    "tripId": "honeymoon-indonesia",
    "segment": "Outbound 1B",
    "type": "international",
    "from": {
      "code": "YVR",
      "name": "Vancouver International Airport",
      "city": "Vancouver",
      "country": "Canada"
    },
    "to": {
      "code": "HKG",
      "name": "Hong Kong International Airport",
      "city": "Hong Kong",
      "country": "Hong Kong"
    },
    "departureDate": "2026-08-19",
    "departureTime": "01:25",
    "arrivalDate": "2026-08-20",
    "arrivalTime": "05:35",
    "duration": "13h 10m",
    "airline": "Cathay Pacific",
    "flightNumber": "CX865",
    "class": "Economy",
    "status": "confirmed",
    "notes": "Layover at HKG: 8h 55m, covered by airline",
    "pdfUrl": null
  },
  {
    "id": "flight-1c",
    "tripId": "honeymoon-indonesia",
    "segment": "Outbound 1C",
    "type": "international",
    "from": {
      "code": "HKG",
      "name": "Hong Kong International Airport",
      "city": "Hong Kong",
      "country": "Hong Kong"
    },
    "to": {
      "code": "SUB",
      "name": "Juanda International Airport",
      "city": "Surabaya",
      "country": "Indonesia"
    },
    "departureDate": "2026-08-20",
    "departureTime": "14:30",
    "arrivalDate": "2026-08-20",
    "arrivalTime": "18:15",
    "duration": "4h 45m",
    "airline": "Cathay Pacific",
    "flightNumber": "CX629",
    "class": "Economy",
    "status": "confirmed",
    "pdfUrl": null
  },
  {
    "id": "flight-2",
    "tripId": "honeymoon-indonesia",
    "segment": "Domestic 1",
    "type": "domestic",
    "from": {
      "code": "DPS",
      "name": "Ngurah Rai International Airport",
      "city": "Denpasar",
      "country": "Indonesia"
    },
    "to": {
      "code": "LBJ",
      "name": "Komodo Airport",
      "city": "Labuan Bajo",
      "country": "Indonesia"
    },
    "departureDate": "2026-08-26",
    "departureTime": "11:25",
    "arrivalDate": "2026-08-26",
    "arrivalTime": "12:40",
    "duration": "1h 15m",
    "airline": "PT Indonesia AirAsia",
    "flightNumber": "QZ646",
    "class": "Economy",
    "status": "confirmed",
    "bookedVia": "Booking.com",
    "costPair": 292.4,
    "costCurrency": "EUR",
    "note": "Total €292.40 for both round-trip flights (DPS-LBJ-DPS), 2 travellers",
    "pdfUrl": null
  },
  {
    "id": "flight-3",
    "tripId": "honeymoon-indonesia",
    "segment": "Domestic 2",
    "type": "domestic",
    "from": {
      "code": "LBJ",
      "name": "Komodo Airport",
      "city": "Labuan Bajo",
      "country": "Indonesia"
    },
    "to": {
      "code": "DPS",
      "name": "Ngurah Rai International Airport",
      "city": "Denpasar",
      "country": "Indonesia"
    },
    "departureDate": "2026-08-29",
    "departureTime": "17:25",
    "arrivalDate": "2026-08-29",
    "arrivalTime": "18:35",
    "duration": "1h 10m",
    "airline": "PT Indonesia AirAsia",
    "flightNumber": "QZ649",
    "class": "Economy",
    "status": "confirmed",
    "bookedVia": "Booking.com",
    "pendingDecision": {
      "considering": "Change to morning flight (~07:00 AM) to gain full Bali day for Uluwatu Temple + Kecak Fire Dance",
      "estimatedChangeFee": "$65-200 USD",
      "contactMethod": "Booking.com customer service 800-953-1995"
    },
    "pdfUrl": null
  },
  {
    "id": "flight-4a",
    "tripId": "honeymoon-indonesia",
    "segment": "Departure 4A",
    "type": "international",
    "from": {
      "code": "DPS",
      "name": "Ngurah Rai International Airport (International Terminal)",
      "city": "Denpasar",
      "country": "Indonesia"
    },
    "to": {
      "code": "SIN",
      "name": "Changi Airport (Terminal 1)",
      "city": "Singapore",
      "country": "Singapore"
    },
    "departureDate": "2026-08-30",
    "departureTime": "11:20",
    "arrivalDate": "2026-08-30",
    "arrivalTime": "14:10",
    "duration": "6h 50m",
    "airline": "Scoot",
    "flightNumber": "TR 882",
    "aircraft": "B787-8",
    "class": "Economy",
    "fareClass": "D",
    "status": "confirmed",
    "notes": "Layover at SIN: 3h 05m",
    "pdfUrl": null
  },
  {
    "id": "flight-4b",
    "tripId": "honeymoon-indonesia",
    "segment": "Departure 4B",
    "type": "international",
    "from": {
      "code": "SIN",
      "name": "Changi Airport (Terminal 1)",
      "city": "Singapore",
      "country": "Singapore"
    },
    "to": {
      "code": "HND",
      "name": "Haneda Airport (Terminal 3)",
      "city": "Tokyo",
      "country": "Japan"
    },
    "departureDate": "2026-08-30",
    "departureTime": "17:15",
    "arrivalDate": "2026-08-31",
    "arrivalTime": "01:05",
    "duration": "7h 50m",
    "airline": "Scoot",
    "class": "Economy",
    "status": "confirmed",
    "pdfUrl": null
  }
];
export const ACCOMMODATIONS_DATA = [
  {
    "id": "accom-1",
    "tripId": "honeymoon-indonesia",
    "nightNumber": 1,
    "checkInDate": "2026-08-20",
    "checkOutDate": "2026-08-21",
    "name": "Jambuluwuk Bromo Resort",
    "type": "hotel",
    "address": "Jl. Wonosari, Wonopolo, Tosari, Pasuruan 67177",
    "region": "Tosari / Wonokitri (West entrance to Mount Bromo, Penanjakan side)",
    "province": "East Java",
    "country": "Indonesia",
    "reasonForChoice": "Strategic base for Penanjakan 1 sunrise viewpoint (Bromo + Semeru + Sea of Sand view)",
    "status": "confirmed",
    "bookedVia": "Booking.com",
    "cost": 83,
    "costCurrency": "EUR",
    "costUSD": 87,
    "cancellationPolicy": "Non-refundable",
    "note": "NOT Cemoro Lawang side. Driver must pickup/dropoff at Tosari area for Penanjakan 1 access.",
    "pdfUrl": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Jambuluwuk%20Bromo%20Resort%2C%20Jl.%20Wonosari%2C%20Wonopolo%2C%20Tosari%2C%20Pasuruan%2C%20East%20Java%2C%20Indonesia"
  },
  {
    "id": "accom-2",
    "tripId": "honeymoon-indonesia",
    "nightNumber": 2,
    "checkInDate": "2026-08-21",
    "checkOutDate": "2026-08-22",
    "name": "Arnez Tropical Cottage",
    "type": "homestay",
    "address": "QWHH+3HW, Krajan, Sidomulyo, Kec. Pronojiwo, Kabupaten Lumajang, Jawa Timur 67374",
    "region": "Sidomulyo / Pronojiwo (5-10 min from Tumpak Sewu)",
    "province": "East Java",
    "country": "Indonesia",
    "reasonForChoice": "5-10 min from Tumpak Sewu waterfall trailhead — allows early morning visit before crowds",
    "amenities": [
      "AC"
    ],
    "status": "confirmed",
    "bookedVia": "Booking.com",
    "cost": 29,
    "costCurrency": "EUR",
    "costUSD": 31,
    "cancellationPolicy": "Free cancellation",
    "pdfUrl": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Arnez%20Tropical%20Cottage%2C%20Sidomulyo%2C%20Pronojiwo%2C%20Lumajang%2C%20East%20Java%2C%20Indonesia"
  },
  {
    "id": "accom-3",
    "tripId": "honeymoon-indonesia",
    "nightNumber": 3,
    "checkInDate": "2026-08-22",
    "checkOutDate": "2026-08-23",
    "name": "Ijen Resort and Villas (The Hidden Paradise)",
    "type": "resort",
    "region": "Licin, Banyuwangi (west slopes of Mount Ijen)",
    "province": "East Java",
    "country": "Indonesia",
    "url": "https://www.booking.com/hotel/id/ijen-resort-and-villas.en-gb.html",
    "reasonForChoice": "Best balance of comfort + logistical position before night Ijen trek (~30-45 min drive to Paltuding). Strategic for ferry to Bali next morning.",
    "status": "confirmed",
    "bookedVia": "Booking.com",
    "cost": 122,
    "costCurrency": "EUR",
    "costUSD": 129,
    "cancellationPolicy": "Non-refundable",
    "pdfUrl": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ijen%20Resort%20and%20Villas%2C%20Licin%2C%20Banyuwangi%2C%20East%20Java%2C%20Indonesia"
  },
  {
    "id": "accom-4",
    "tripId": "honeymoon-indonesia",
    "nightNumbers": [
      4,
      5,
      6
    ],
    "checkInDate": "2026-08-23",
    "checkOutDate": "2026-08-26",
    "totalNights": 3,
    "name": "Ubud Valley Boutique Resort",
    "type": "boutique-resort",
    "address": "Jalan Raya Pejeng Kangin, 80552 Ubud",
    "region": "Pejeng Kangin / Tampaksiring area",
    "province": "Bali",
    "country": "Indonesia",
    "style": "Joglo wooden houses, infinity pool with valley view, honeymoon packages available",
    "reasonForChoice": "Boutique resort feel, central enough for Ubud activities, close to Tegallalang Rice Terraces. 3 nights = no need to move bags during Nusa Penida day trip.",
    "status": "confirmed",
    "bookedVia": "Booking.com",
    "cost": 392,
    "costCurrency": "EUR",
    "costUSD": 414,
    "perNightUSD": 138,
    "cancellationPolicy": "Non-refundable",
    "pdfUrl": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ubud%20Valley%20Boutique%20Resort%2C%20Jalan%20Raya%20Pejeng%20Kangin%2C%20Ubud%2C%20Bali%2C%20Indonesia"
  },
  {
    "id": "accom-5",
    "tripId": "honeymoon-indonesia",
    "nightNumber": 7,
    "checkInDate": "2026-08-26",
    "checkOutDate": "2026-08-27",
    "name": "Diamond Hill Villa",
    "type": "villa",
    "region": "Labuan Bajo (Pede Beach area, 1.9 miles from Komodo Airport)",
    "country": "Indonesia",
    "amenities": [
      "AC",
      "Private balcony with sea view",
      "Sunset view",
      "Kitchenette",
      "Shared pool",
      "Hot tub (some villas)",
      "Bicycle rental",
      "Concierge service",
      "Newly built"
    ],
    "reasonForChoice": "Best value/quality ratio. Private villa feel vs hotel. Sunset sea view from balcony.",
    "status": "confirmed",
    "bookedVia": "Booking.com",
    "cost": 110,
    "costCurrency": "EUR",
    "costUSD": 116,
    "cancellationPolicy": "Non-refundable",
    "specialRequest": "Confirm luggage storage during 2-night liveaboard (Aug 27-29) - planned but not yet confirmed with host",
    "pdfUrl": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Diamond%20Hill%20Villa%2C%20Labuan%20Bajo%2C%20Indonesia"
  },
  {
    "id": "accom-6",
    "tripId": "honeymoon-indonesia",
    "nightNumbers": [
      8,
      9
    ],
    "checkInDate": "2026-08-27",
    "checkOutDate": "2026-08-29",
    "totalNights": 2,
    "name": "Andalucia II Phinisi (Liveaboard)",
    "type": "liveaboard-boat",
    "region": "Komodo National Park",
    "country": "Indonesia",
    "bookingId": "INV-20260619001",
    "bookingDate": "2026-06-19",
    "verificationFormUrl": "https://kapalsantai.com/order-detail/feef6f82-7847-4a9b-96c9-2e5c5a5991c2/check-in",
    "verificationStatus": "Form completion REQUIRED before sailing - manifest/safety purposes",
    "boatDetails": {
      "type": "Phinisi luxury sailing vessel",
      "yearBuilt": 2020,
      "operationStart": 2022,
      "materials": "Ironwood + selected teak wood",
      "dimensions": "26.5m x 4.9m",
      "maxCapacity": "14+4 pax",
      "crew": 6,
      "safetyEquipment": [
        "GPS",
        "EPIRB",
        "SART",
        "AIS",
        "VHF radio",
        "Liferaft",
        "Lifejackets",
        "Fire extinguishers",
        "First aid kit"
      ],
      "amenities": [
        "AC cabins",
        "Sundeck",
        "1 kayak",
        "2 paddleboards",
        "Snorkeling gear",
        "Dining area",
        "Pantry corner",
        "5000L freshwater"
      ]
    },
    "cabinBooked": "Private Room 2 - Private Room",
    "tripType": "Open Trip",
    "guests": 2,
    "cost": 712,
    "costCurrency": "USD",
    "originalCost": "IDR 11,600,000",
    "includesPlatformFee": true,
    "status": "confirmed",
    "bookingPlatform": "kapalsantai.com",
    "url": "https://kapalsantai.com/en/product/open-trip-labuan-bajo-3-days-liveaboard-1-to-14-person-with-andalucia-ii-1749725893878",
    "includes": [
      "Cabin accommodation & bedding",
      "Local tour guide",
      "Trip documentation",
      "Full-board meals (2 breakfasts + 3 lunches + 2 dinners)",
      "Freeflow mineral water, tea & coffee",
      "Harbour transfers",
      "Snorkeling equipment"
    ],
    "excludes": [
      "Travel insurance",
      "Crew gratuities (~$40 USD recommended)",
      "Personal expenses",
      "Alcoholic beverages",
      "Komodo National Park entrance fee (~IDR 750K/pax = $92 USD pair)",
      "Fuel surcharge (if any)"
    ],
    "policies": {
      "reschedule": "One time only. Request via WhatsApp ≤60 days before trip; new date must be same calendar year. Fare difference paid by guest.",
      "arrival": "Must arrive in Labuan Bajo at least D-1 (Aug 26). Open Trips depart on time. Late = 100% forfeiture.",
      "foodAllergies": "Basic halal menu provided. Submit special diet/vegetarian/vegan/allergy requests via WhatsApp ≥7 days before departure.",
      "boatReplacement": "If original vessel unavailable, moved to equivalent boat. Extreme weather bans = automatic full refund.",
      "refunds": "Refunds only when entire booking is cancelled. Guest substitution allowed (send details ≥14 days before)."
    },
    "preTrippActions": [
      "Complete guest verification form online (URL above)",
      "Send dietary preferences via WhatsApp at least 7 days before departure",
      "Ask about optional Padar sunrise hike Day 2 morning at 4:30 AM"
    ],
    "pdfUrl": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Komodo%20National%20Park%2C%20Indonesia"
  },
  {
    "id": "accom-7",
    "tripId": "honeymoon-indonesia",
    "nightNumber": 10,
    "checkInDate": "2026-08-29",
    "checkOutDate": "2026-08-30",
    "name": "TBD — Uluwatu/Jimbaran cliff hotel",
    "region": "Uluwatu / Jimbaran",
    "province": "Bali",
    "country": "Indonesia",
    "topOptions": [
      {
        "name": "Renaissance Bali Uluwatu Resort & Spa",
        "brand": "Marriott",
        "estimatedCost": "$200-280/night",
        "reasonForChoice": "Marriott status applies (upgrade + breakfast). Roosterfish Beach Club for cliff dinner."
      },
      {
        "name": "Cliff villa Airbnb in Uluwatu/Pecatu",
        "estimatedCost": "$130-180/night",
        "reasonForChoice": "Private infinity pool with cliff view, more intimate"
      }
    ],
    "status": "pending",
    "dependsOn": "Flight change decision for Aug 29 (if morning flight, full Bali day; if 17:25 PM, only evening)",
    "pdfUrl": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Uluwatu%2C%20Bali%2C%20Indonesia"
  }
];
export const TOURS_DATA = [
  {
    "id": "tour-1",
    "tripId": "honeymoon-indonesia",
    "name": "Surabaya - Bromo - Tumpak Sewu - Ijen - Finish Bali (4D3N Private Tour)",
    "operator": "East Java Paradise Travel",
    "operatorContact": {
      "email": "javaparadisetravel@gmail.com",
      "phone": "+62 851 4718 0805",
      "website": "www.eastjavaparadise.com",
      "primaryContactPerson": "Abel",
      "address": "Buluagung Village No 54, Banyuwangi, East Java, Indonesia"
    },
    "startDate": "2026-08-20",
    "endDate": "2026-08-23",
    "duration": "4 days 3 nights (hotels NOT included)",
    "cost": {
      "amount": 575,
      "currency": "USD",
      "perPerson": 287.5,
      "totalForCouple": 575,
      "discountApplied": "10% off-peak season discount"
    },
    "paymentTerms": {
      "deposit": "30% via Wise to confirm",
      "balance": "70% on arrival, cash USD/IDR or bank transfer"
    },
    "includes": [
      "Private transport AC (4 days)",
      "Private jeep 4WD at Bromo",
      "Private guide (Ijen registered Forest Service guide, Tumpak Sewu local guide)",
      "Parking + highway fees",
      "Coffee break",
      "Unlimited mineral water",
      "Gas mask + headlamp (Ijen)",
      "Health certificate (required for Ijen)",
      "Ferry ticket Ketapang-Gilimanuk",
      "All entrance tickets (Bromo, Ijen, Tumpak Sewu, Goa Tetes)",
      "Bali driver at Gilimanuk → drop at Ubud Valley Boutique Resort"
    ],
    "excludes": [
      "Hotels",
      "Meals (breakfast, lunch, dinner)",
      "Travel insurance",
      "Personal expenses"
    ],
    "status": "partial",
    "statusNote": "Pagar 70% restante en efectivo a la llegada",
    "confirmedDetails": {
      "pickupTime": "19:00 at SUB airport with name sign 'Nagib Gobera'",
      "driverWillTrackFlight": true,
      "driverEnglishLevel": "Intermediate to good",
      "bromoEntrySide": "Tosari/Penanjakan 1 (NOT Cemoro Lawang)",
      "ijenGuide": "Local registered guide, basic English, mandatory for safety",
      "baliDropOff": "Ubud Valley Boutique Resort, Jalan Raya Pejeng Kangin"
    },
    "pendingConfirmations": [
      "Cancellation/refund policy if international flight delayed",
      "Tumpak Sewu registered guide",
      "Vehicle model and year"
    ],
    "pdfUrl": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Banyuwangi%2C%20East%20Java%2C%20Indonesia",
    "contacto": {
      "contactName": "Abel (East Java Paradise)",
      "contactPhone": "+62 851 4718 0805"
    }
  },
  {
    "id": "tour-2",
    "tripId": "honeymoon-indonesia",
    "name": "Nusa Penida Private Day Trip — Custom West + East Coast (Hybrid)",
    "operator": "Bali Yok",
    "operatorContact": {
      "primaryContactPerson": "Justin",
      "platform": "Seek Sophie",
      "url": "https://www.seeksophie.com/experiences/bali-nusa-penida-day-trip-island-hopping-o7mzxm315o"
    },
    "date": "2026-08-25",
    "duration": "~13 hours (5:20 AM - 19:00)",
    "type": "private-tour-customized",
    "status": "confirmed-custom-route",
    "cost": {
      "basePrice": 88,
      "eastCoastSupplement": 28,
      "eastCoastSupplementIDR": "IDR 450,000",
      "lunchAddon": 10,
      "tips": 15,
      "totalEstimate": 141,
      "currency": "USD",
      "note": "Custom hybrid East + West coast tour confirmed by Justin"
    },
    "customItinerary": [
      {
        "time": "05:20",
        "activity": "Pickup at Ubud Valley Boutique Resort (EARLY pickup to beat crowds)"
      },
      {
        "time": "06:30",
        "activity": "Arrive Sanur Port, take first fast boat"
      },
      {
        "time": "07:30-08:00",
        "activity": "Arrive Nusa Penida Port (Banjar Nyuh)"
      },
      {
        "time": "08:30-10:30",
        "activity": "Kelingking Beach (T-Rex viewpoint — iconic shot, NO descent to beach)"
      },
      {
        "time": "11:00-12:00",
        "activity": "Broken Beach + Angel Billabong combined"
      },
      {
        "time": "12:00-13:00",
        "activity": "Lunch (lunch add-on confirmed)"
      },
      {
        "time": "13:00-14:30",
        "activity": "Cross-island drive to East"
      },
      {
        "time": "14:30-15:30",
        "activity": "Diamond Beach viewpoint"
      },
      {
        "time": "15:45-16:15",
        "activity": "Atuh Beach viewpoint"
      },
      {
        "time": "16:30-17:00",
        "activity": "Drive back to Banjar Nyuh port (West side, has the most fast boat schedules)"
      },
      {
        "time": "17:00",
        "activity": "Last fast boat back to Sanur from Banjar Nyuh"
      },
      {
        "time": "18:00-19:00",
        "activity": "Drop-off Ubud Valley"
      }
    ],
    "intentionallySkipped": [
      "Crystal Bay",
      "Tembeling Beach",
      "Goa Giri Putri Temple",
      "Teletubbies Hill",
      "Seaweed Village"
    ],
    "spotsCovered": [
      "Kelingking Beach",
      "Broken Beach",
      "Angel Billabong",
      "Diamond Beach",
      "Atuh Beach"
    ],
    "includes": [
      "Fast boat ticket (round trip)",
      "Pickup and dropoff at Ubud hotel",
      "English-speaking driver guide in Nusa Penida",
      "English-speaking driver in Bali",
      "Car with AC in both islands",
      "All entrance fees (East + West)",
      "Gasoline + driver fee for East Coast extension"
    ],
    "ferryReturnPort": "Banjar Nyuh (has hourly departures and latest fast boat at 5:00 PM)",
    "justinNotes": "Pickup 5:20 AM is essential to beat traffic in Sanur, beat crowds at Kelingking, and cover all spots in one long day. Last fast boat from Banjar Nyuh at 5 PM = safety buffer if day runs late.",
    "preTrippActions": [
      "Confirm payment of IDR 450K supplement (cash on day or advance via WhatsApp)",
      "Get Justin's WhatsApp for day-of coordination",
      "Sleep early Aug 24 night (wake 4:30 AM Aug 25)"
    ],
    "pdfUrl": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nusa%20Penida%2C%20Bali%2C%20Indonesia",
    "contacto": {
      "contactName": "Justin (Bali Yok)",
      "contactPhone": null
    }
  },
  {
    "id": "tour-3",
    "tripId": "honeymoon-indonesia",
    "name": "Rangko Cave + Boleng Beach Snorkeling + Amelia Hill Sunset (Half Day)",
    "operator": "Alba Cruise",
    "operatorContact": {
      "platform": "Seek Sophie",
      "url": "https://www.seeksophie.com/experiences/labuan-bajo-rangko-cave-and-boleng-beach-snorkeling-ol2zenqqz7",
      "experience": "10 years",
      "rating": "4.4 stars (94 reviews)",
      "languages": [
        "English",
        "Chinese",
        "Bahasa"
      ]
    },
    "date": "2026-08-26",
    "timeslot": "13:30 - 18:00",
    "duration": "4.5 hours",
    "maxGuests": 12,
    "type": "shared-small-group",
    "cost": {
      "basePrice": "Rp 695,250/pax",
      "amountPerPerson": 42,
      "totalForCouple": 84,
      "lunchAddon": 10,
      "tipsEstimate": 12,
      "totalEstimate": 106,
      "currency": "USD"
    },
    "itinerary": [
      {
        "time": "13:30",
        "activity": "Pickup at Diamond Hill Villa"
      },
      {
        "time": "14:00",
        "activity": "Rangko Cave (limestone cave with sunlight beam, swim in turquoise interior pool)"
      },
      {
        "time": "16:00",
        "activity": "Boleng Beach snorkel (hidden spot)"
      },
      {
        "time": "17:00",
        "activity": "Amelia Hill sunset panorama"
      },
      {
        "time": "18:30",
        "activity": "Return to Diamond Hill Villa"
      }
    ],
    "includes": [
      "Pickup",
      "Boat to Rangko",
      "Cave entry",
      "Snorkel gear",
      "Driver/guide"
    ],
    "status": "request-sent-awaiting-confirmation",
    "criticalNote": "Flight CX629 lands LBJ 12:40 PM. Drop bags Diamond Hill 13:20. Ready for pickup 13:30. Sent message to operator asking them to wait if delayed.",
    "pdfUrl": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Rangko%20Cave%2C%20Flores%2C%20Indonesia",
    "contacto": {
      "contactName": "Alba Cruise",
      "contactPhone": null
    }
  },
  {
    "id": "tour-4",
    "tripId": "honeymoon-indonesia",
    "name": "Andalucia II Phinisi 3D2N Open Trip",
    "operator": "Kapalsantai (booking platform) / Andalucia II crew",
    "operatorContact": {
      "platform": "kapalsantai.com",
      "url": "https://kapalsantai.com/en/product/open-trip-labuan-bajo-3-days-liveaboard-1-to-14-person-with-andalucia-ii-1749725893878"
    },
    "bookingId": "INV-20260619001",
    "bookingDate": "2026-06-19",
    "startDate": "2026-08-27",
    "endDate": "2026-08-29",
    "duration": "3 days 2 nights",
    "departureTime": "10:30 AM",
    "returnTime": "12:00-13:00 PM",
    "type": "open-trip-shared",
    "maxGuests": 14,
    "status": "confirmed",
    "cost": {
      "amountPerCabin": 712,
      "originalCurrency": "IDR 11,600,000",
      "currency": "USD",
      "platformFeeIncluded": true,
      "parkFee": "IDR 750K/pax = $92 USD pair (NOT included)",
      "tipsRecommended": "$5-10/pax/day = ~$40 USD"
    },
    "itineraryByDay": [
      {
        "day": 1,
        "date": "2026-08-27",
        "spots": [
          "Manta Point (snorkel with manta rays)",
          "Taka Makassar (crescent sandbar)",
          "Padar Island hike (afternoon — possibly sunset)"
        ],
        "overnight": "Anchored near Padar"
      },
      {
        "day": 2,
        "date": "2026-08-28",
        "spots": [
          "OPTIONAL: Padar sunrise hike (pending confirmation)",
          "Komodo Island (Komodo dragon trekking with rangers)",
          "Pink Beach (paddleboarding, snorkeling)",
          "Pengah Island snorkel",
          "Pempe Island snorkel",
          "Kalong Island sunset (flying foxes / fruit bats)"
        ],
        "overnight": "Anchored"
      },
      {
        "day": 3,
        "date": "2026-08-29",
        "spots": [
          "Kelor Island (short trek + beach + swim)",
          "Manjarite Island snorkel"
        ],
        "returnTime": "12:00-13:00 PM to Labuan Bajo"
      }
    ],
    "totalSpots": 10,
    "includes": [
      "Cabin accommodation with AC",
      "Local tour guide",
      "Trip documentation",
      "Full-board meals (7 meals)",
      "Freeflow mineral water, tea, coffee",
      "Harbour transfers",
      "Snorkeling equipment"
    ],
    "excludes": [
      "Komodo National Park entrance fee (IDR 750K/pax)",
      "Travel insurance",
      "Crew gratuities (~$40 recommended)",
      "Alcoholic beverages",
      "Hotel accommodations"
    ],
    "preTrippActions": [
      "Complete guest verification form: https://kapalsantai.com/order-detail/feef6f82-7847-4a9b-96c9-2e5c5a5991c2/check-in",
      "Submit dietary preferences via WhatsApp ≥7 days before",
      "Ask about optional Padar sunrise hike Day 2 morning"
    ],
    "pdfUrl": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Komodo%20National%20Park%2C%20Indonesia",
    "contacto": {
      "contactName": "Kapalsantai / Andalucia II crew",
      "contactPhone": null
    }
  }
];
export const DAY_NOTES_DATA = [
  {
    "id": "day-1",
    "tripId": "honeymoon-indonesia",
    "day": 1,
    "summary": "Comienza el viaje internacional — vuelo MEX → YVR",
    "recommendations": "Llevar pasaporte y documentos de viaje a la mano para el control de seguridad. Flair Airlines es de bajo costo — revisar las políticas de equipaje antes de salir.",
    "criticalNote": ""
  },
  {
    "id": "day-2",
    "tripId": "honeymoon-indonesia",
    "day": 2,
    "summary": "Tiempo libre en Vancouver — visita a amigos",
    "recommendations": "Descansar bien antes del vuelo nocturno a Hong Kong (13h 10m). Llevar ropa cómoda y una almohada de viaje para dormir en el avión.",
    "criticalNote": ""
  },
  {
    "id": "day-3",
    "tripId": "honeymoon-indonesia",
    "day": 3,
    "summary": "Tour breve en el layover de HKG + llegada a Indonesia",
    "recommendations": "El conductor de East Java Paradise espera en el aeropuerto de Surabaya (SUB) con un letrero con el nombre 'Nagib Gobera'. Llevar efectivo en rupias (IDR) para el trayecto de 3 horas hasta Tosari.",
    "criticalNote": "Si llegan agotados del vuelo largo, considerar usar el Plaza Premium Lounge en HKG (duchas y cápsulas para dormir) en lugar del tour por la ciudad."
  },
  {
    "id": "day-4",
    "tripId": "honeymoon-indonesia",
    "day": 4,
    "summary": "Amanecer en Bromo + traslado a Lumajang",
    "recommendations": "Vestir capas abrigadoras para el amanecer en Penanjakan (3:45am, hace frío en altitud). Llevar zapatos cómodos y con buen agarre para la caminata por el Mar de Arena y el cráter.",
    "criticalNote": ""
  },
  {
    "id": "day-5",
    "tripId": "honeymoon-indonesia",
    "day": 5,
    "summary": "Trek a Tumpak Sewu + 6 horas de traslado a Banyuwangi",
    "recommendations": "Preparar la ropa y el equipo para el trek nocturno (linterna frontal, capas abrigadoras) antes de dormir, ya que el pickup es de madrugada.",
    "criticalNote": "CRÍTICO: esta noche solo habrá 3-4 horas de sueño antes del trek nocturno al Ijen. Hidratarse muy bien durante el día, evitar el alcohol y cenar ligero."
  },
  {
    "id": "day-6",
    "tripId": "honeymoon-indonesia",
    "day": 6,
    "summary": "Trek nocturno al Ijen + ferry a Bali + traslado a Ubud",
    "recommendations": "Llevar la máscara de gas (provista por el tour), capas abrigadoras para el borde del cráter y buen calzado de hiking. Tener efectivo en IDR para la tarifa del ferry (IDR 16,500/persona).",
    "criticalNote": ""
  },
  {
    "id": "day-7",
    "tripId": "honeymoon-indonesia",
    "day": 7,
    "summary": "Día completo en Ubud — el descanso nocturno es clave para el madrugón de Nusa Penida",
    "recommendations": "Llevar protector solar, sombrero y ropa ligera para el día completo caminando en Ubud. Llevar efectivo para el day pass de Cretya Ubud Jungle Pool.",
    "criticalNote": "Dormir temprano — el pickup para Nusa Penida es a las 5:20 AM."
  },
  {
    "id": "day-8",
    "tripId": "honeymoon-indonesia",
    "day": 8,
    "summary": "Excursión de un día a Nusa Penida — costa oeste y este",
    "recommendations": "Llevar traje de baño, protector solar y toalla. Tener efectivo en IDR para el suplemento de la costa este (IDR 450,000) y la comida incluida.",
    "criticalNote": "El pickup es a las 5:20 AM (NO 6:30 AM). Dormir temprano la noche del día anterior."
  },
  {
    "id": "day-9",
    "tripId": "honeymoon-indonesia",
    "day": 9,
    "summary": "Traslado de Ubud a Labuan Bajo + tour de Rangko Cave por la tarde",
    "recommendations": "Dejar las maletas en Diamond Hill Villa antes del pickup para el tour de Rangko Cave — no hace falta deshacer las maletas todavía.",
    "criticalNote": ""
  },
  {
    "id": "day-10",
    "tripId": "honeymoon-indonesia",
    "day": 10,
    "summary": "Embarque en el Andalucía II — Manta Point + Taka Makassar + Padar",
    "recommendations": "Llevar protector solar biodegradable (reef-safe), medicina para el mareo si es necesario, y efectivo en USD o IDR para la tarifa de entrada al Parque Nacional de Komodo (~$92 USD pareja) y las propinas para la tripulación (~$40 USD recomendado, en efectivo).",
    "criticalNote": ""
  },
  {
    "id": "day-11",
    "tripId": "honeymoon-indonesia",
    "day": 11,
    "summary": "Dragones de Komodo + Pink Beach + snorkel + atardecer en Kalong",
    "recommendations": "Reaplicar protector solar reef-safe durante el día. Llevar cámara o celular cargado para los dragones de Komodo y el atardecer de los murciélagos en Kalong Island.",
    "criticalNote": ""
  },
  {
    "id": "day-12",
    "tripId": "honeymoon-indonesia",
    "day": 12,
    "summary": "Desembarque + vuelo a Bali + cena de atardecer en Uluwatu",
    "recommendations": "Confirmar con la tripulación la hora exacta de desembarque la noche anterior. Llevar ropa más formal para la cena de atardecer en Uluwatu.",
    "criticalNote": ""
  },
  {
    "id": "day-13",
    "tripId": "honeymoon-indonesia",
    "day": 13,
    "summary": "Salida de Bali hacia Tokio vía Singapur",
    "recommendations": "Llegar con tiempo al aeropuerto de Denpasar para el vuelo internacional. El layover en Singapur es de 3h 05m — suficiente para comprar algo rápido en Changi, pero sin tiempo de sobra.",
    "criticalNote": ""
  },
  {
    "id": "day-14",
    "tripId": "honeymoon-indonesia",
    "day": 14,
    "summary": "Llegada a Tokio — comienza la vida en Japón",
    "recommendations": "La llegada es de madrugada (1:05 AM) — planear con anticipación el transporte desde el aeropuerto de Haneda hasta el alojamiento.",
    "criticalNote": ""
  }
];

// =============================================================
//  BODA MÉXICO 2026 — Datos del viaje
// =============================================================

export const BODA_TRIP_DATA = [
  {
    "id": "boda-d1-0",
    "tripId": "boda-mexico",
    "day": 1,
    "order": 0,
    "done": false,
    "date": "30 julio, jueves",
    "city": "Barcelona → Cancún (vía MEX)",
    "time": "14:45",
    "title": "Vuelo Barcelona → Ciudad de México (AM38)",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "transporte",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d1-1",
    "tripId": "boda-mexico",
    "day": 1,
    "order": 1,
    "done": false,
    "date": "30 julio, jueves",
    "city": "Barcelona → Cancún (vía MEX)",
    "time": "19:55",
    "title": "Vuelo Ciudad de México → Cancún (AM558)",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "transporte",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d1-2",
    "tripId": "boda-mexico",
    "day": 1,
    "order": 2,
    "done": false,
    "date": "30 julio, jueves",
    "city": "Barcelona → Cancún (vía MEX)",
    "time": "23:30",
    "title": "Check-in City Express by Marriott Cancún Aeropuerto",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "hotel",
    "isSuggestion": false,
    "contacto": {
      "contactName": "City Express by Marriott Cancún Aeropuerto",
      "contactPhone": "+52 998 702 4786"
    }
  },
  {
    "id": "boda-d2-0",
    "tripId": "boda-mexico",
    "day": 2,
    "order": 0,
    "done": false,
    "date": "31 julio, viernes",
    "city": "Cancún → Tulum",
    "time": "13:00",
    "title": "Checkout City Express Cancún",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "hotel",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d2-1",
    "tripId": "boda-mexico",
    "day": 2,
    "order": 1,
    "done": false,
    "date": "31 julio, viernes",
    "city": "Cancún → Tulum",
    "time": "",
    "title": "Traslado terrestre Cancún → Tulum",
    "description": "Tres opciones: (1) ADO bus directo — $12-22 USD/persona, ~2-2.5h, sale de la terminal ADO en el centro de Cancún; (2) Transfer privado — $75-150 USD/van completa, ~1.5-2h, recogida en hotel, opción recomendada por comodidad; (3) Colectivo (combi) — $7-10 USD/persona, ~2h, más aventurero. Reservar transfer con anticipación en temporada alta.",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "transporte",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d2-2",
    "tripId": "boda-mexico",
    "day": 2,
    "order": 2,
    "done": false,
    "date": "31 julio, viernes",
    "city": "Cancún → Tulum",
    "time": "15:00",
    "title": "Check-in Lux 1BR Condo in the Jungle (Tulum)",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "hotel",
    "isSuggestion": false,
    "contacto": {
      "contactName": "Host — Lux 1BR Condo",
      "contactPhone": "+52 442 145 8049"
    }
  },
  {
    "id": "boda-d3-0",
    "tripId": "boda-mexico",
    "day": 3,
    "order": 0,
    "done": false,
    "date": "1 agosto, sábado",
    "city": "Tulum",
    "time": "",
    "title": "Certificación de buceo — Día 1 (sugerencia)",
    "description": "Sugerencia: curso PADI/SSI Open Water (~3 días, $348-450 USD). Recomendado hacerlo del 31 jul - 2 ago para respetar la ventana sin vuelos antes del 8 de agosto. Alternativa más corta: certificación SSI Scuba Diver (menos inmersiones) si 3 días completos es muy ajustado.",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "aventura",
    "isSuggestion": true,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d4-0",
    "tripId": "boda-mexico",
    "day": 4,
    "order": 0,
    "done": false,
    "date": "2 agosto, domingo",
    "city": "Tulum",
    "time": "",
    "title": "Certificación de buceo — Día 2 (sugerencia)",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "aventura",
    "isSuggestion": true,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d5-0",
    "tripId": "boda-mexico",
    "day": 5,
    "order": 0,
    "done": false,
    "date": "3 agosto, lunes",
    "city": "Tulum",
    "time": "",
    "title": "Certificación de buceo — Día 3 (sugerencia)",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "aventura",
    "isSuggestion": true,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d5-1",
    "tripId": "boda-mexico",
    "day": 5,
    "order": 1,
    "done": false,
    "date": "3 agosto, lunes",
    "city": "Tulum",
    "time": "",
    "title": "Tiempo libre — opciones económicas zona Cancún (sugerencia)",
    "description": "Sugerencias económicas: Playa Delfines (gratis), ruinas de El Rey (~$13 USD), ferry a Isla Mujeres (~$8 USD por trayecto), día de cenote (~$10-25 USD entrada).",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "libre",
    "isSuggestion": true,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d6-0",
    "tripId": "boda-mexico",
    "day": 6,
    "order": 0,
    "done": false,
    "date": "4 agosto, martes",
    "city": "Tulum (Boda)",
    "time": "15:00",
    "title": "Check-in Villa TuluMar 💍 — lugar de la boda",
    "description": "Villa TuluMar es el venue donde se celebrará la boda.",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "hotel",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d7-0",
    "tripId": "boda-mexico",
    "day": 7,
    "order": 0,
    "done": false,
    "date": "5 agosto, miércoles",
    "city": "Tulum (Boda)",
    "time": "",
    "title": "Día libre — descanso y preparativos",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "libre",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d8-0",
    "tripId": "boda-mexico",
    "day": 8,
    "order": 0,
    "done": false,
    "date": "6 agosto, jueves",
    "city": "Tulum (Boda)",
    "time": "",
    "title": "💍 Celebración de la boda en Villa TuluMar",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "boda",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d9-0",
    "tripId": "boda-mexico",
    "day": 9,
    "order": 0,
    "done": false,
    "date": "7 agosto, viernes",
    "city": "Tulum (Boda)",
    "time": "",
    "title": "Último día en Tulum — tiempo libre",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "libre",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d10-0",
    "tripId": "boda-mexico",
    "day": 10,
    "order": 0,
    "done": false,
    "date": "8 agosto, sábado",
    "city": "Tulum → Monterrey",
    "time": "09:00",
    "title": "Checkout Villa TuluMar",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "hotel",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d10-1",
    "tripId": "boda-mexico",
    "day": 10,
    "order": 1,
    "done": false,
    "date": "8 agosto, sábado",
    "city": "Tulum → Monterrey",
    "time": "10:40",
    "title": "Vuelo Tulum → Monterrey (VB4213)",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "transporte",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d10-2",
    "tripId": "boda-mexico",
    "day": 10,
    "order": 2,
    "done": false,
    "date": "8 agosto, sábado",
    "city": "Tulum → Monterrey",
    "time": "12:05",
    "title": "Llegada a Monterrey — inicio de la visita familiar",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "libre",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d11-0",
    "tripId": "boda-mexico",
    "day": 11,
    "order": 0,
    "done": false,
    "date": "9 agosto, domingo",
    "city": "Monterrey / Cd. Victoria",
    "time": "",
    "title": "Tiempo en casa de la familia de Mariana",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "libre",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d12-0",
    "tripId": "boda-mexico",
    "day": 12,
    "order": 0,
    "done": false,
    "date": "10 agosto, lunes",
    "city": "Monterrey / Cd. Victoria",
    "time": "",
    "title": "Traslado terrestre Monterrey ↔ Ciudad Victoria",
    "description": "Autobús ETN o Diamante — $24-35 USD/persona/trayecto, ~4h de viaje. Terminal de autobuses en Monterrey: Central de Autobuses (Av. Colón). Comprar boletos con anticipación en ETN.com.mx o Clickbus. Viaje redondo durante la estancia en Monterrey/Cd. Victoria. NO RESERVADO TODAVÍA.",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "transporte",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d13-0",
    "tripId": "boda-mexico",
    "day": 13,
    "order": 0,
    "done": false,
    "date": "11 agosto, martes",
    "city": "Monterrey / Cd. Victoria",
    "time": "",
    "title": "Día en Ciudad Victoria con la familia",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "libre",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d14-0",
    "tripId": "boda-mexico",
    "day": 14,
    "order": 0,
    "done": false,
    "date": "12 agosto, miércoles",
    "city": "Monterrey / Cd. Victoria",
    "time": "",
    "title": "Regreso a Monterrey — NO RESERVADO TODAVÍA",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "transporte",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d15-0",
    "tripId": "boda-mexico",
    "day": 15,
    "order": 0,
    "done": false,
    "date": "13 agosto, jueves",
    "city": "Monterrey → Querétaro",
    "time": "21:15",
    "title": "Vuelo Monterrey → Querétaro (VB4208)",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "transporte",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  },
  {
    "id": "boda-d15-1",
    "tripId": "boda-mexico",
    "day": 15,
    "order": 1,
    "done": false,
    "date": "13 agosto, jueves",
    "city": "Monterrey → Querétaro",
    "time": "22:30",
    "title": "Llegada a casa de los papás de Nagib en Querétaro",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "hotel",
    "isSuggestion": false,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    }
  }
];

export const BODA_FLIGHTS_DATA = [
  {
    "id": "boda-flight-1",
    "tripId": "boda-mexico",
    "segment": "Outbound 1",
    "type": "international",
    "from": {
      "code": "BCN",
      "name": "Aeropuerto de Barcelona-El Prat",
      "city": "Barcelona",
      "country": "Spain"
    },
    "to": {
      "code": "MEX",
      "name": "Aeropuerto Internacional de la Ciudad de México",
      "city": "Mexico City",
      "country": "Mexico"
    },
    "departureDate": "2026-07-30",
    "departureTime": "14:45",
    "arrivalDate": "2026-07-30",
    "arrivalTime": "18:35",
    "duration": "11h 50m",
    "airline": "Aeroméxico",
    "flightNumber": "AM38",
    "seats": {
      "nagib": "28A",
      "mariana": "28B"
    },
    "notes": "Salida Terminal 1 (BCN), llegada Terminal 2 (MEX).",
    "status": "confirmed",
    "pdfUrl": null
  },
  {
    "id": "boda-flight-2",
    "tripId": "boda-mexico",
    "segment": "Outbound 2",
    "type": "domestic",
    "from": {
      "code": "MEX",
      "name": "Aeropuerto Internacional de la Ciudad de México",
      "city": "Mexico City",
      "country": "Mexico"
    },
    "to": {
      "code": "CUN",
      "name": "Aeropuerto Internacional de Cancún",
      "city": "Cancún",
      "country": "Mexico"
    },
    "departureDate": "2026-07-30",
    "departureTime": "19:55",
    "arrivalDate": "2026-07-30",
    "arrivalTime": "23:30",
    "duration": "2h 35m",
    "airline": "Aeroméxico",
    "flightNumber": "AM558",
    "seats": {
      "nagib": "18A",
      "mariana": "18B"
    },
    "notes": "Salida Terminal 2 (MEX), llegada Terminal 4 (CUN).",
    "status": "confirmed",
    "pdfUrl": null
  },
  {
    "id": "boda-flight-3",
    "tripId": "boda-mexico",
    "segment": "Tulum → Monterrey",
    "type": "domestic",
    "from": {
      "code": "TQO",
      "name": "Aeropuerto Internacional de Tulum",
      "city": "Tulum",
      "country": "Mexico"
    },
    "to": {
      "code": "MTY",
      "name": "Aeropuerto Internacional de Monterrey",
      "city": "Monterrey",
      "country": "Mexico"
    },
    "departureDate": "2026-08-08",
    "departureTime": "10:40",
    "arrivalDate": "2026-08-08",
    "arrivalTime": "12:05",
    "duration": "2h 25m",
    "airline": "Viva Aerobus",
    "flightNumber": "VB4213",
    "confirmationCode": "UD1C7M",
    "status": "confirmed",
    "pdfUrl": null
  },
  {
    "id": "boda-flight-4",
    "tripId": "boda-mexico",
    "segment": "Monterrey → Querétaro",
    "type": "domestic",
    "from": {
      "code": "MTY",
      "name": "Aeropuerto Internacional de Monterrey",
      "city": "Monterrey",
      "country": "Mexico"
    },
    "to": {
      "code": "QRO",
      "name": "Aeropuerto Intercontinental de Querétaro",
      "city": "Querétaro",
      "country": "Mexico"
    },
    "departureDate": "2026-08-13",
    "departureTime": "21:15",
    "arrivalDate": "2026-08-13",
    "arrivalTime": "22:30",
    "duration": "1h 15m",
    "airline": "Viva Aerobus",
    "flightNumber": "VB4208",
    "confirmationCode": "GYJC8C",
    "notes": "Salida Terminal C (MTY).",
    "status": "confirmed",
    "pdfUrl": null
  },
  {
    "id": "boda-flight-5",
    "tripId": "boda-mexico",
    "segment": "Cancún → Tulum (transporte terrestre)",
    "type": "ground-transport",
    "from": {
      "code": null,
      "name": null,
      "city": "Cancún",
      "country": "Mexico"
    },
    "to": {
      "code": null,
      "name": null,
      "city": "Tulum",
      "country": "Mexico"
    },
    "departureDate": "2026-07-31",
    "departureTime": null,
    "arrivalDate": "2026-07-31",
    "arrivalTime": null,
    "duration": "2-2.5h (ADO) / 1.5-2h (transfer privado)",
    "airline": null,
    "flightNumber": null,
    "notes": "Opciones: (1) ADO bus directo — $12-22 USD/persona, sale terminal ADO Cancún centro; (2) Transfer privado — $75-150 USD/van, recogida en hotel, RECOMENDADO; (3) Colectivo combi — $7-10 USD/persona. NO RESERVADO TODAVÍA.",
    "status": "pending",
    "pdfUrl": null
  },
  {
    "id": "boda-flight-6",
    "tripId": "boda-mexico",
    "segment": "Monterrey ↔ Ciudad Victoria (autobús ETN / Diamante)",
    "type": "ground-transport",
    "from": {
      "code": null,
      "name": null,
      "city": "Monterrey",
      "country": "Mexico"
    },
    "to": {
      "code": null,
      "name": null,
      "city": "Ciudad Victoria",
      "country": "Mexico"
    },
    "departureDate": null,
    "departureTime": null,
    "arrivalDate": null,
    "arrivalTime": null,
    "duration": "~4h cada trayecto",
    "airline": "ETN / Diamante",
    "flightNumber": null,
    "notes": "Autobús ETN o Diamante — $24-35 USD/persona. Terminal Monterrey: Central de Autobuses (Av. Colón). Reservar en ETN.com.mx o Clickbus. Viaje redondo ida 10 agosto, regreso 13 agosto aprox. NO RESERVADO TODAVÍA.",
    "status": "pending",
    "pdfUrl": null
  }
];

export const BODA_ACCOMMODATIONS_DATA = [
  {
    "id": "boda-accom-1",
    "tripId": "boda-mexico",
    "name": "City Express by Marriott Cancún Aeropuerto",
    "type": "hotel",
    "address": "Super Manzana 301 MZ03 LT03 UPE Boulevard, Luis Donaldo Colosio, Cancún, Q.ROO",
    "region": "Cancún",
    "province": "Quintana Roo",
    "country": "Mexico",
    "checkInDate": "2026-07-30",
    "checkOutDate": "2026-07-31",
    "contacto": {
      "contactName": "City Express by Marriott Cancún Aeropuerto",
      "contactPhone": "+52 998 702 4786"
    },
    "status": "confirmed",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Super%20Manzana%20301%20MZ03%20LT03%20UPE%20Boulevard%2C%20Luis%20Donaldo%20Colosio%2C%20Canc%C3%BAn%2C%20Quintana%20Roo%2C%20Mexico",
    "pdfUrl": null
  },
  {
    "id": "boda-accom-2",
    "tripId": "boda-mexico",
    "name": "Lux 1BR Condo in the Jungle w/ Beach Access",
    "type": "condo",
    "address": "7JC9+2C 77772 Balam Canché, Quintana Roo",
    "region": "Tulum",
    "province": "Quintana Roo",
    "country": "Mexico",
    "checkInDate": "2026-07-31",
    "checkOutDate": "2026-08-04",
    "bookingId": "HM5MQ2PX58",
    "contacto": {
      "contactName": "Host — Lux 1BR Condo",
      "contactPhone": "+52 442 145 8049"
    },
    "status": "confirmed",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=7JC9%2B2C%20Balam%20Canch%C3%A9%2C%20Quintana%20Roo%2C%20Mexico",
    "pdfUrl": null
  },
  {
    "id": "boda-accom-3",
    "tripId": "boda-mexico",
    "name": "Villa TuluMar",
    "type": "wedding-venue",
    "region": "Tulum",
    "province": "Quintana Roo",
    "country": "Mexico",
    "checkInDate": "2026-08-04",
    "checkOutDate": "2026-08-08",
    "note": "💍 Lugar de la boda — Villa TuluMar es el venue donde se celebrará la boda.",
    "status": "confirmed",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Villa%20TuluMar%2C%20Tulum%2C%20Quintana%20Roo%2C%20Mexico",
    "pdfUrl": null
  },
  {
    "id": "boda-accom-4",
    "tripId": "boda-mexico",
    "name": "Casa de mamá de Mar (suegra)",
    "type": "family-stay",
    "region": "Monterrey / Ciudad Victoria",
    "province": null,
    "country": "Mexico",
    "checkInDate": "2026-08-08",
    "checkOutDate": "2026-08-13",
    "cost": 0,
    "costCurrency": null,
    "note": "Estadía familiar — sin costo.",
    "status": "confirmed",
    "mapsUrl": null,
    "pdfUrl": null
  },
  {
    "id": "boda-accom-5",
    "tripId": "boda-mexico",
    "name": "Casa de los papás de Nagib",
    "type": "family-stay",
    "region": "Querétaro",
    "province": "Querétaro",
    "country": "Mexico",
    "checkInDate": "2026-08-13",
    "checkOutDate": null,
    "cost": 0,
    "costCurrency": null,
    "note": "Estadía familiar — sin costo. Fecha de salida abierta.",
    "status": "confirmed",
    "mapsUrl": null,
    "pdfUrl": null
  }
];

export const BODA_DAY_NOTES_DATA = [
  {
    "id": "boda-day-1",
    "tripId": "boda-mexico",
    "day": 1,
    "summary": "Día de viaje: Barcelona → Ciudad de México → Cancún",
    "recommendations": "Día de viaje largo (~16 horas con conexión). Si es posible, hacer check-in online y solicitar fast-track/prioridad en seguridad en BCN. En la conexión en MEX, considerar el fast-track de inmigración/aduana si está disponible. Llevar ropa cómoda y cargar los dispositivos electrónicos para el vuelo largo.",
    "criticalNote": ""
  },
  {
    "id": "boda-day-2",
    "tripId": "boda-mexico",
    "day": 2,
    "summary": "Traslado de Cancún a Tulum",
    "recommendations": "Confirmar el medio de transporte a Tulum con anticipación (ADO, transfer privado o auto de alquiler — pendiente de reservar). Llevar ropa de playa, ya que se llega directo al condo en la zona de playa.",
    "criticalNote": ""
  },
  {
    "id": "boda-day-3",
    "tripId": "boda-mexico",
    "day": 3,
    "summary": "Tulum — posible día 1 de certificación de buceo",
    "recommendations": "Si se confirma la certificación PADI/SSI Open Water, llevar traje de baño, protector solar reef-safe y una muda de ropa seca para después del buceo. Confirmar con la escuela de buceo los horarios exactos.",
    "criticalNote": ""
  },
  {
    "id": "boda-day-4",
    "tripId": "boda-mexico",
    "day": 4,
    "summary": "Tulum — posible día 2 de certificación de buceo",
    "recommendations": "Continuar hidratándose bien durante el curso de buceo. Recordar: no se puede volar dentro de las 18-24 horas después del último buceo, así que conviene terminar el curso con margen antes del vuelo del 8 de agosto.",
    "criticalNote": ""
  },
  {
    "id": "boda-day-5",
    "tripId": "boda-mexico",
    "day": 5,
    "summary": "Tulum — cierre de certificación de buceo o día libre con actividades económicas",
    "recommendations": "Si no se hace buceo, considerar las opciones económicas: Playa Delfines (gratis), ruinas de El Rey (~$13 USD), ferry a Isla Mujeres (~$8 USD por trayecto) o un día de cenote (~$10-25 USD). Llevar traje de baño y protector solar en cualquier caso.",
    "criticalNote": ""
  },
  {
    "id": "boda-day-6",
    "tripId": "boda-mexico",
    "day": 6,
    "summary": "Martes 4: Llegada a la casa por la tarde — Cena de Bienvenida y White Party",
    "recommendations": "Acomodo en habitaciones al llegar. Por la noche: Cena de Bienvenida y juegos para romper el hielo (White Party) — confirmar el código de vestimenta (ropa blanca) antes de llegar.",
    "criticalNote": ""
  },
  {
    "id": "boda-day-7",
    "tripId": "boda-mexico",
    "day": 7,
    "summary": "Miércoles 5: Alabanza y ejercicio en la mañana, Olimpiadas Familiares en la tarde, Bautizos y presentación de Luis Alfonso al atardecer",
    "recommendations": "Mañana de alabanza y ejercicio frente al mar — ropa cómoda. Tarde de Olimpiadas Familiares en la arena — llevar protector solar, sombrero/gorra y ropa que se pueda ensuciar. Al atardecer: Bautizos y Presentación de Luis Alfonso, seguido de cena especial.",
    "criticalNote": ""
  },
  {
    "id": "boda-day-8",
    "tripId": "boda-mexico",
    "day": 8,
    "summary": "Jueves 6 (El Gran Día): mañana libre, fotos formales a las 5pm, ceremonia y cena",
    "recommendations": "Mañana libre para descansar y prepararse con calma. 5:00pm: fotografías formales en familia (aprovechando la luz del sol). Después de las fotos: ceremonia de adoración y unión, seguida de la cena.",
    "criticalNote": "Tener el outfit de la boda listo y planchado ANTES de las 5pm. Llegar unos minutos antes a las fotos formales."
  },
  {
    "id": "boda-day-9",
    "tripId": "boda-mexico",
    "day": 9,
    "summary": "Viernes 7: Día de recuperación total — sin horarios",
    "recommendations": "Día libre sin horarios fijos — alberca, mar y descanso. Buen día para relajarse después de la boda, sin pendientes que cumplir.",
    "criticalNote": ""
  },
  {
    "id": "boda-day-10",
    "tripId": "boda-mexico",
    "day": 10,
    "summary": "Sábado 8: Desayuno en familia, despedidas y traslado al aeropuerto",
    "recommendations": "Desayuno en familia y despedidas. Confirmar con tiempo el traslado al aeropuerto de Tulum, considerando el vuelo de las 10:40am (VB4213) a Monterrey.",
    "criticalNote": "Confirmar la hora de checkout y la logística del equipaje desde la mañana, antes del desayuno."
  },
  {
    "id": "boda-day-11",
    "tripId": "boda-mexico",
    "day": 11,
    "summary": "Primer día en Monterrey — tiempo con la familia de Mariana",
    "recommendations": "Día de descanso y convivencia familiar en Monterrey. Buen momento para deshacer las maletas, ya que se está varias noches en la zona.",
    "criticalNote": ""
  },
  {
    "id": "boda-day-12",
    "tripId": "boda-mexico",
    "day": 12,
    "summary": "Traslado a Ciudad Victoria",
    "recommendations": "Confirmar el transporte para el viaje a Ciudad Victoria (pendiente de reservar). Llevar una maleta pequeña o bolso si no se hace el viaje completo de ida y vuelta en el mismo día.",
    "criticalNote": ""
  },
  {
    "id": "boda-day-13",
    "tripId": "boda-mexico",
    "day": 13,
    "summary": "Día en Ciudad Victoria con la familia",
    "recommendations": "",
    "criticalNote": ""
  },
  {
    "id": "boda-day-14",
    "tripId": "boda-mexico",
    "day": 14,
    "summary": "Regreso a Monterrey",
    "recommendations": "Confirmar el transporte de regreso a Monterrey (pendiente de reservar). Aprovechar para empacar con calma antes del vuelo del día siguiente a Querétaro.",
    "criticalNote": ""
  },
  {
    "id": "boda-day-15",
    "tripId": "boda-mexico",
    "day": 15,
    "summary": "Vuelo de Monterrey a Querétaro — llegada a casa de los papás de Nagib",
    "recommendations": "Confirmar el traslado al aeropuerto de Monterrey considerando el vuelo de las 21:15 (VB4208). Llegada nocturna a Querétaro (22:30) — coordinar quién recoge en el aeropuerto.",
    "criticalNote": ""
  }
];

// =============================================================
//  JAPÓN — Ideas curadas (colección "japanItems")
//  Modelo: { id, tripId, category, subcategory, title, description,
//            location, mapsUrl, tiktokUrl, contacto, done, pdfUrl, source }
//  done: aquí significa "visitado / probado", no una tarea de itinerario.
// =============================================================

// Lista fija de categorías — se usa para construir las pestañas de
// categoría incluso cuando una categoría todavía no tiene items.
export const JAPAN_CATEGORIES = [
  "Tokio por Distrito",
  "Fuera de Tokio (Japón)",
  "Restaurantes y Comida",
  "Naturaleza",
  "Hidden Gems",
  "Actividades y Experiencias",
  "Eventos Estacionales",
  "Otros Países (Asia)"
];

// Curated subcategory display order (not alphabetical) for the categories
// that have a fixed, meaningful grouping. Subcategories not listed here (or
// for categories without an entry) just sort alphabetically.
export const JAPAN_SUBCATEGORY_ORDER = {
  "Tokio por Distrito": [
    "Asakusa", "Ueno", "Yanaka", "Akihabara", "Shinjuku", "Shimokitazawa",
    "Kichijoji", "Harajuku", "Shibuya", "Daikanyama", "Nakameguro",
    "Sangenjaya", "Jiyugaoka", "Ginza", "Chiyoda", "Shiba", "Mita",
    "Ikebukuro", "Odaiba", "Hachioji", "Otros"
  ],
  "Fuera de Tokio (Japón)": [
    "Cerca de Tokio", "Monte Fuji", "Kanazawa-Toyama-Nagano-Matsumoto", "Esquí",
    "Hokkaido", "Kioto", "Osaka", "Koyasan-Nara", "Kobe-Himeji-Okayama",
    "Hiroshima-Miyajima", "Kyushu", "Okinawa", "Buceo", "Fuera de lo común"
  ],
  "Restaurantes y Comida": [
    "Sushi", "Ramen y Tsukemen", "Yakitori/Yakiniku/BBQ", "Izakaya",
    "China/Asia", "Italiana/Occidental", "Café y Postres",
    "Kagurazaka (zona de joyas escondidas)"
  ],
  "Naturaleza": ["Senderismo/Hikes", "Onsen", "Parques y Jardines"],
  "Actividades y Experiencias": [
    "Vistas y Atardeceres", "Experiencias culturales", "Spots fotográficos / Instagram"
  ]
};

export const JAPAN_ITEMS_DATA = [
  {
    "id": "japon-001",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Asakusa",
    "title": "Kappabashi (Japan's Kitchen Town)",
    "description": "Calle famosa por cuchillos y utensilios de cocina.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kappabashi%20(Japan's%20Kitchen%20Town)%2C%20Asakusa%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🔪",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-002",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Asakusa",
    "title": "Majimaya Confectionery Tool & Gear Shop",
    "description": "En Kappabashi. Moldes de repostería de todas las formas.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Majimaya%20Confectionery%20Tool%20%26%20Gear%20Shop%2C%20Asakusa%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🧁",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-003",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Asakusa",
    "title": "Ganso Sample",
    "description": "En Kappabashi. Comida de plástico para muestras de menús (shokuhin sample).",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ganso%20Sample%2C%20Asakusa%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🍱",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-004",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Asakusa",
    "title": "Nishi Sando Shopping Street",
    "description": "A Place Like an Ukiyo-e Painting.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nishi%20Sando%20Shopping%20Street%2C%20Asakusa%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏮",
    "priority": 7,
    "priceTier": "¥"
  },
  {
    "id": "japon-005",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Asakusa",
    "title": "Sensoji Temple",
    "description": "Templo budista más antiguo y popular de Asakusa.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sensoji%20Temple%2C%20Asakusa%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "⛩️",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-006",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Asakusa",
    "title": "Nakamise Dori",
    "description": "Shopping street justo afuera del templo Sensoji.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nakamise%20Dori%2C%20Asakusa%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🍡",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-007",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Asakusa",
    "title": "Sumida River",
    "description": "Crucero de Asakusa a Odaiba.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sumida%20River%2C%20Asakusa%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🚤",
    "priority": 8,
    "priceTier": "¥"
  },
  {
    "id": "japon-008",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Asakusa",
    "title": "Sumida Hokusai Museum",
    "description": "Museo dedicado al maestro del ukiyo-e Hokusai, con un edificio moderno diseñado por Kazuyo Sejima.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sumida%20Hokusai%20Museum%2C%20Asakusa%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🎨",
    "priority": 9,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-009",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Asakusa",
    "title": "Asahi Beer Headquarters",
    "description": "Edificio icónico con la 'llama dorada' de Philippe Starck, sede de la cervecera Asahi.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Asahi%20Beer%20Headquarters%2C%20Asakusa%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🍺",
    "priority": 10,
    "priceTier": "¥"
  },
  {
    "id": "japon-010",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Asakusa",
    "title": "Tokyo Skytree",
    "description": "Para la foto perfecta de la torre más alta de Japón. Sumo en mayo justo al lado.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tokyo%20Skytree%2C%20Asakusa%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🗼",
    "priority": 3,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-011",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ueno",
    "title": "Ueno Park",
    "description": "Uno de los parques más grandes y antiguos de Tokio, famoso por sus cerezos en primavera.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ueno%20Park%2C%20Ueno%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌳",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-012",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ueno",
    "title": "Tokyo National Museum",
    "description": "Abre 9:30.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tokyo%20National%20Museum%2C%20Ueno%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🏛️",
    "priority": 2,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-013",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ueno",
    "title": "Toshogu Shrine",
    "description": "Abre 9:00.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Toshogu%20Shrine%2C%20Ueno%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "⛩️",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-014",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ueno",
    "title": "Nezu Shrine",
    "description": "Miles de torii gates.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nezu%20Shrine%2C%20Ueno%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "⛩️",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-015",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ueno",
    "title": "Templo Benten-dō del Estanque Shinobazu",
    "description": "Pequeño templo en una isla en medio del Estanque Shinobazu, dentro de Ueno Park.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Templo%20Benten-d%C5%8D%20del%20Estanque%20Shinobazu%2C%20Ueno%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🛕",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-016",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ueno",
    "title": "Kiyomizu Kannon-dō",
    "description": "Circular branch. Abre 9:00.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kiyomizu%20Kannon-d%C5%8D%2C%20Ueno%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🛕",
    "priority": 7,
    "priceTier": "¥"
  },
  {
    "id": "japon-017",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ueno",
    "title": "Ameyoko",
    "description": "Calle de compras.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ameyoko%2C%20Ueno%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🛍️",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-018",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Akihabara",
    "title": "Origami Kaikan",
    "description": "Centro de origami con talleres y una pequeña galería, cerca de Akihabara.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Origami%20Kaikan%2C%20Akihabara%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "📄",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-019",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Akihabara",
    "title": "Tiendas de animé",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tiendas%20de%20anim%C3%A9%2C%20Akihabara%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🎮",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-020",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Akihabara",
    "title": "Yodobashi",
    "description": "Tienda de electrónicos.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Yodobashi%2C%20Akihabara%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🔌",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-021",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shinjuku",
    "title": "Shinjuku Station",
    "description": "La estación de tren más concurrida del mundo — 3M de pasajeros diarios. Comprar un bento box.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shinjuku%20Station%2C%20Shinjuku%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🚉",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-022",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shinjuku",
    "title": "Tokyo Metropolitan Government Building",
    "description": "Mirador gratis.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tokyo%20Metropolitan%20Government%20Building%2C%20Shinjuku%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🏢",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-023",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shinjuku",
    "title": "Omoide Yokocho",
    "description": "Callejón con bares e izakayas, mejor de noche.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Omoide%20Yokocho%2C%20Shinjuku%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🏮",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-024",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shinjuku",
    "title": "Shinjuku Gyoen",
    "description": "Incluye Rakuutei — ceremonia del té casual.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shinjuku%20Gyoen%2C%20Shinjuku%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌳",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-025",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shinjuku",
    "title": "Kabukicho",
    "description": "Distrito de entretenimiento, estatua de Godzilla.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kabukicho%2C%20Shinjuku%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🌃",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-026",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shinjuku",
    "title": "Golden Gai",
    "description": "Callejón de bares pequeños, dentro de Kabukicho.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Golden%20Gai%2C%20Shinjuku%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🍻",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-027",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shinjuku",
    "title": "Okubo (K-town)",
    "description": "Comida y maquillaje coreano.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Okubo%20(K-town)%2C%20Shinjuku%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🇰🇷",
    "priority": 7,
    "priceTier": "¥"
  },
  {
    "id": "japon-028",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Harajuku",
    "title": "Nezu Museum",
    "description": "Museo de arte privado con una destacada colección de arte asiático y un jardín tranquilo.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nezu%20Museum%2C%20Harajuku%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏛️",
    "priority": 4,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-029",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Harajuku",
    "title": "Takeshita Street",
    "description": "La calle peatonal más icónica de la moda joven y kawaii en Harajuku.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Takeshita%20Street%2C%20Harajuku%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🍭",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-030",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Harajuku",
    "title": "Tokyo Plaza",
    "description": "El espejo / mirror.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tokyo%20Plaza%2C%20Harajuku%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🪞",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-031",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Harajuku",
    "title": "Distrito de moda (Harajuku)",
    "description": "Calles y boutiques alrededor de Harajuku con las tendencias de moda más vanguardistas de Tokio.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Distrito%20de%20moda%20(Harajuku)%2C%20Harajuku%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "👗",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-032",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Harajuku",
    "title": "Yoyogi Park",
    "description": "Gran parque popular para picnics, música callejera y paseos, junto al Santuario Meiji.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Yoyogi%20Park%2C%20Harajuku%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌳",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-033",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Harajuku",
    "title": "Meiji Shrine",
    "description": "Camino en el bosque.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Meiji%20Shrine%2C%20Harajuku%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "⛩️",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-034",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shibuya",
    "title": "Hachiko Statue",
    "description": "Estatua del famoso perro leal Hachiko, punto de encuentro clásico en Shibuya.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hachiko%20Statue%2C%20Shibuya%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🐕",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-035",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shibuya",
    "title": "Shibuya Crossing",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shibuya%20Crossing%2C%20Shibuya%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🚦",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-036",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shibuya",
    "title": "Nintendo Store Tokyo",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nintendo%20Store%20Tokyo%2C%20Shibuya%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🎮",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-037",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ginza",
    "title": "300 Yen Bar",
    "description": "Bar económico con bebidas a 300 yenes, poco común en la elegante Ginza.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=300%20Yen%20Bar%2C%20Ginza%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🍺",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-038",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ginza",
    "title": "UNIQLO Ginza",
    "description": "12 pisos.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=UNIQLO%20Ginza%2C%20Ginza%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🛍️",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-039",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ginza",
    "title": "Kabukiza",
    "description": "Teatro kabuki. Pedir bento.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kabukiza%2C%20Ginza%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🎭",
    "priority": 1,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-040",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ginza",
    "title": "Ginza Mitsukoshi",
    "description": "Icónica tienda departamental de lujo, una de las más antiguas de Japón.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ginza%20Mitsukoshi%2C%20Ginza%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏬",
    "priority": 7,
    "priceTier": "¥"
  },
  {
    "id": "japon-041",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ginza",
    "title": "Tsukiji Market",
    "description": "Pescados y mariscos, de 5am a 12pm.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tsukiji%20Market%2C%20Ginza%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🐟",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-042",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ginza",
    "title": "Hamarikyu Gardens",
    "description": "Jardín tradicional con casa de té junto al mar, contraste tranquilo con el bullicio de Ginza.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hamarikyu%20Gardens%2C%20Ginza%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌳",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-043",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Chiyoda",
    "title": "Tokyo Station",
    "description": "Estación histórica con fachada de ladrillo restaurada al estilo de 1914.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tokyo%20Station%2C%20Chiyoda%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🚉",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-044",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Chiyoda",
    "title": "Imperial Palace",
    "description": "Incluye el jardín imperial — East Gardens.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Imperial%20Palace%2C%20Chiyoda%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "👑",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-045",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Chiyoda",
    "title": "Parque Chidorigafuchi",
    "description": "Uno de los mejores lugares de Tokio para ver los cerezos en flor, con paseos en bote.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Parque%20Chidorigafuchi%2C%20Chiyoda%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌸",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-046",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Chiyoda",
    "title": "Hie Shrine",
    "description": "Santuario con un túnel de torii rojos y vistas a los rascacielos de Nagatacho.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hie%20Shrine%2C%20Chiyoda%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "⛩️",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-047",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ikebukuro",
    "title": "Sunshine City Mall",
    "description": "Pokemon station.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sunshine%20City%20Mall%2C%20Ikebukuro%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏬",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-048",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ikebukuro",
    "title": "Arcade en estación de Ikebukuro",
    "description": "5 pisos.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Arcade%20en%20estaci%C3%B3n%20de%20Ikebukuro%2C%20Ikebukuro%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🕹️",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-049",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Odaiba",
    "title": "teamLab Borderless / Planets",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=teamLab%20Borderless%20%2F%20Planets%2C%20Odaiba%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "💡",
    "priority": 1,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-050",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Odaiba",
    "title": "Odaiba Beach",
    "description": "Playa artificial con vista a la Rainbow Bridge, más para pasear que para nadar.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Odaiba%20Beach%2C%20Odaiba%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏖️",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-051",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Odaiba",
    "title": "Rainbow Bridge",
    "description": "Para correr o caminar.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Rainbow%20Bridge%2C%20Odaiba%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🌉",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-052",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Otros",
    "title": "Toyosu Market",
    "description": "Mercado de atún, de 5am a 2:30pm. Comer sushi ahí mismo. Ver la subasta de atún, pescado vivo, erizo y camarones.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Toyosu%20Market%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🐟",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-053",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Otros",
    "title": "Tokyo Disneyland / DisneySea",
    "description": "Dos parques temáticos de Disney; DisneySea es único en el mundo y muy querido por su ambientación.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tokyo%20Disneyland%20%2F%20DisneySea%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🎢",
    "priority": 2,
    "priceTier": "¥¥¥"
  },
  {
    "id": "japon-054",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Otros",
    "title": "Museo Ghibli + Parque de Inokashira",
    "description": "Museo dedicado al Studio Ghibli en Mitaka, requiere boleto con fecha reservada con anticipación.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Museo%20Ghibli%20%2B%20Parque%20de%20Inokashira%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🎬",
    "priority": 3,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-055",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Nakameguro",
    "title": "Nakameguro",
    "description": "Paseo junto al río Meguro, icónico en temporada de sakura (marzo-abril), boutiques de moda — barrio elegante y muy fotogénico.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nakameguro%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌸",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-056",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Otros",
    "title": "Templo Gōtokuji",
    "description": "Colección más grande de 'lucky cats' (maneki-neko).",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Templo%20G%C5%8Dtokuji%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🐱",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-057",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Otros",
    "title": "TeamLab Tokyo",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TeamLab%20Tokyo%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "💡",
    "priority": 4,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-058",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Otros",
    "title": "Nakano Broadway",
    "description": "Edificio multipisos lleno de tiendas de coleccionables, manga y cultura otaku retro.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nakano%20Broadway%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🦸",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-059",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shimokitazawa",
    "title": "Shimokitazawa",
    "description": "\"Shimokita\" — capital indie de Tokio: ropa vintage, teatro fringe activo desde los 80s, música en vivo, ambiente bohemio.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shimokitazawa%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🎸",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-060",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Tren Tokyo → Kanazawa",
    "description": "Tokyo St 7:20 - Kanazawa St 9:54. 14,180 JPY + descuento estudiante.",
    "location": null,
    "mapsUrl": null,
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🚄",
    "priority": 13,
    "priceTier": "¥"
  },
  {
    "id": "japon-061",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Kenrokuen Garden",
    "description": "Jardín del clan samurái Maeda, uno de los 3 jardines más bellos de Japón. 7:00-18:00, 320 JPY.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kenrokuen%20Garden%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🌳",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-062",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Kanazawa Castle Park",
    "description": "7:00-18:00, 320 JPY.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kanazawa%20Castle%20Park%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🏯",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-063",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Nagamachi Samurai District",
    "description": "Incluye Nomura House Kanazawa, 8:30-16:30.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nagamachi%20Samurai%20District%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🏘️",
    "priority": 7,
    "priceTier": "¥"
  },
  {
    "id": "japon-064",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Higashi Chaya District",
    "description": "Distrito de geishas.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Higashi%20Chaya%20District%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🏮",
    "priority": 8,
    "priceTier": "¥"
  },
  {
    "id": "japon-065",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Shima Teahouse",
    "description": "En Higashi Chaya. 9:30-17:00, 500 JPY entrada, 500-700 JPY bebida+dulce.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shima%20Teahouse%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🍵",
    "priority": 14,
    "priceTier": "¥"
  },
  {
    "id": "japon-066",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Kaikaro Teahouse",
    "description": "En Higashi Chaya, más elegante/cara. 10:00-17:00, 700 JPY entrada, 1,000 JPY bebidas.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kaikaro%20Teahouse%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🍵",
    "priority": 15,
    "priceTier": "¥"
  },
  {
    "id": "japon-067",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Hakuza Gold Leaf",
    "description": "En Higashi Chaya District.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hakuza%20Gold%20Leaf%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "✨",
    "priority": 16,
    "priceTier": "¥"
  },
  {
    "id": "japon-068",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Omicho Fish Market",
    "description": "El mercado de pescado más importante de Kanazawa, ideal para probar mariscos frescos.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Omicho%20Fish%20Market%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🐟",
    "priority": 9,
    "priceTier": "¥"
  },
  {
    "id": "japon-069",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Myoryu-ji (Ninja) Temple",
    "description": "Templo con trampas y pasajes secretos, apodado 'templo ninja' aunque sin relación histórica real.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Myoryu-ji%20(Ninja)%20Temple%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🥷",
    "priority": 10,
    "priceTier": "¥"
  },
  {
    "id": "japon-070",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Ishikawa Prefectural Museum of Art",
    "description": "Extra. 36 artesanías tradicionales de la prefectura de Ishikawa: lacquerware, porcelana, teñido de seda, de la colección del clan Maeda.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ishikawa%20Prefectural%20Museum%20of%20Art%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🎨",
    "priority": 17,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-071",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Tren Kanazawa → Toyama",
    "description": "18:15-19:00, 1,240 JPY.",
    "location": null,
    "mapsUrl": null,
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🚄",
    "priority": 18,
    "priceTier": "¥"
  },
  {
    "id": "japon-072",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Tateyama-Kurobe Alpine Route",
    "description": "Ruta combinando tren, funicular, bus y teleférico a través de los Alpes japoneses, pasando por Murodo, Daikanbo, Kurobedaira y Kurobe Dam.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tateyama-Kurobe%20Alpine%20Route%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🏔️",
    "priority": 2,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-073",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Shomyo Falls",
    "description": "Parte de la Tateyama-Kurobe Alpine Route.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shomyo%20Falls%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "💧",
    "priority": 19,
    "priceTier": "¥"
  },
  {
    "id": "japon-074",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Nishi-No-Mon Sake Brewery (Nagano)",
    "description": "Visita 18:30.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nishi-No-Mon%20Sake%20Brewery%20(Nagano)%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🍶",
    "priority": 20,
    "priceTier": "¥"
  },
  {
    "id": "japon-075",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Jigokudani Monkey Park",
    "description": "Nagano St 6:15 - 8:30, 1,500 JPY. Duración 3 horas. Incluye caminata de 1h a Waku Waku Onsen.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Jigokudani%20Monkey%20Park%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🐒",
    "priority": 3,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-076",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Zenko-ji Temple",
    "description": "Uno de los templos budistas más antiguos e importantes de Japón. Tercer más grande. Hogar de la primera estatua budista traída a Japón. Visita 16:30.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Zenko-ji%20Temple%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🛕",
    "priority": 11,
    "priceTier": "¥"
  },
  {
    "id": "japon-077",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Tren Nagano → Matsumoto",
    "description": "16:16-17:50, 1,170 JPY + 43 min de caminata turística.",
    "location": null,
    "mapsUrl": null,
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🚄",
    "priority": 21,
    "priceTier": "¥"
  },
  {
    "id": "japon-078",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Nakamachi Street (Matsumoto)",
    "description": "Calle con almacenes tradicionales de paredes blancas en el centro de Matsumoto.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nakamachi%20Street%20(Matsumoto)%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏘️",
    "priority": 22,
    "priceTier": "¥"
  },
  {
    "id": "japon-079",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Matsumoto Castle",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Matsumoto%20Castle%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🏯",
    "priority": 4,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-080",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Yohashira Shrine",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Yohashira%20Shrine%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "⛩️",
    "priority": 23,
    "priceTier": "¥"
  },
  {
    "id": "japon-081",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Nawate Street",
    "description": "Calle peatonal junto al río con tiendas de antigüedades y puestos de comida en Matsumoto.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nawate%20Street%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏘️",
    "priority": 24,
    "priceTier": "¥"
  },
  {
    "id": "japon-082",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Matsumoto Timepiece Museum",
    "description": "Museo con una colección de relojes antiguos japoneses y extranjeros.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Matsumoto%20Timepiece%20Museum%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🕰️",
    "priority": 25,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-083",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Kamikochi",
    "description": "Bus 5:27-7:05, 2,570 JPY.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kamikochi%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🏔️",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-084",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kanazawa-Toyama-Nagano-Matsumoto",
    "title": "Daio Wasabi Farm",
    "description": "Tren desde Kamikochi a Hotaka St, 12:05-14:38, 3,040 JPY + 30 min caminata o 10 min bus (600 JPY).",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Daio%20Wasabi%20Farm%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌾",
    "priority": 12,
    "priceTier": "¥"
  },
  {
    "id": "japon-085",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Cerca de Tokio",
    "title": "Nikko (Old Nikko)",
    "description": "Templos y puente.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nikko%20(Old%20Nikko)%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🛕",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-086",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Cerca de Tokio",
    "title": "Nikko (Natural Nikko)",
    "description": "Lago, cascada y onsen.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nikko%20(Natural%20Nikko)%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "⛰️",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-087",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Cerca de Tokio",
    "title": "Kawagoe",
    "description": "Calle de dulces, templos, calle tradicional/clásica.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kawagoe%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🏘️",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-088",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Cerca de Tokio",
    "title": "Parque de Flores de Ashikaga",
    "description": "Prefectura de Tochigi. Festival de observación de glicinias (wisteria) del 18 de abril al 20 de mayo. Árboles de glicinias de 150 años, iluminados de noche. ~2 hrs de Tokio.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Parque%20de%20Flores%20de%20Ashikaga%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌸",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-089",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Cerca de Tokio",
    "title": "Yokohama",
    "description": "35 min desde Tokio. Incluye Minato Mirai, Cup Noodles Museum, Kirin Beer Village, Sankei-en Gardens y un gran Chinatown.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Yokohama%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌃",
    "priority": 7,
    "priceTier": "¥"
  },
  {
    "id": "japon-090",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Cerca de Tokio",
    "title": "Festival de Sanja",
    "description": "Tercer fin de semana completo de mayo. Tres días de fiestas primaverales en el templo Sensoji.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Festival%20de%20Sanja%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🎏",
    "priority": 8,
    "priceTier": "¥"
  },
  {
    "id": "japon-091",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Cerca de Tokio",
    "title": "Kamakura",
    "description": "1 hora desde Tokio. Templos y el Gran Buda.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kamakura%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🛕",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-092",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Cerca de Tokio",
    "title": "Hakone",
    "description": "Aguas termales y vistas del Monte Fuji. Incluye Open-Air Museum, volcán (comer huevo negro), barco pirata y Gyoza museum. También listado en Naturaleza / Onsen.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hakone%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "♨️",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-093",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Cerca de Tokio",
    "title": "Odawara Castle",
    "description": "75 min desde Tokyo Station, directo, ¥1,520. Castillo restaurado a partir de dibujos del periodo Edo. Incluye Odawara Fish Market Den y Tsujimura Botanical Gardens.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Odawara%20Castle%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏯",
    "priority": 11,
    "priceTier": "¥"
  },
  {
    "id": "japon-094",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Cerca de Tokio",
    "title": "Ushiku Daibutsu (Ibaraki)",
    "description": "90 min desde Tokyo Station, tren+bus, ¥1,690. Segundo Buda más grande del mundo.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ushiku%20Daibutsu%20(Ibaraki)%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🗿",
    "priority": 12,
    "priceTier": "¥"
  },
  {
    "id": "japon-095",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Cerca de Tokio",
    "title": "Enoshima",
    "description": "70 min desde Tokyo Station, ¥1,150. Playa popular e isla con santuarios, faro, jardines y cuevas.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Enoshima%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🏝️",
    "priority": 9,
    "priceTier": "¥"
  },
  {
    "id": "japon-096",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Cerca de Tokio",
    "title": "Nokogiriyama (Sawtooth Mountain)",
    "description": "120 min desde Tokyo Station, ¥1,980. Hike con vistas, canteras y el Templo Nihonji con el Buda más grande tallado en acantilado de Japón y la Diosa de la Misericordia de 30m. También listado en Naturaleza / Senderismo.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nokogiriyama%20(Sawtooth%20Mountain)%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🥾",
    "priority": 10,
    "priceTier": "¥"
  },
  {
    "id": "japon-097",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hokkaido",
    "title": "Museo de la Cerveza (Hokkaido)",
    "description": "Museo dedicado a la historia de la cervecera Sapporo, con degustaciones incluidas.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Museo%20de%20la%20Cerveza%20(Hokkaido)%2C%20Hokkaido%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🍺",
    "priority": 3,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-098",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hokkaido",
    "title": "Susukino",
    "description": "El mayor distrito de entretenimiento y vida nocturna.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Susukino%2C%20Hokkaido%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌃",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-099",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hokkaido",
    "title": "Parque de Maruyama (Hokkaido)",
    "description": "Parque popular para hanami junto a un zoológico y un santuario, en el centro de Sapporo.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Parque%20de%20Maruyama%20(Hokkaido)%2C%20Hokkaido%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🌳",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-100",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hokkaido",
    "title": "Pasaje subterráneo a Parque Odori",
    "description": "Pasaje peatonal subterráneo que conecta la estación de Sapporo con el Parque Odori.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Pasaje%20subterr%C3%A1neo%20a%20Parque%20Odori%2C%20Hokkaido%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🚶",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-101",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hokkaido",
    "title": "Hill of the Buddha (Makomanai Takino Cemetery)",
    "description": "1 hora.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hill%20of%20the%20Buddha%20(Makomanai%20Takino%20Cemetery)%2C%20Hokkaido%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🗿",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-102",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Okinawa Churaumi Aquarium",
    "description": "El acuario más importante de Japón. Tiburones ballena y vida marina diversa. Hora de comer de los peces en el mar de Kuroshio: 15:00-17:00. Sala Deep Sea Experience a 200m. Espectáculo de delfines al aire libre, 4-5 veces al día.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Okinawa%20Churaumi%20Aquarium%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🐋",
    "priority": 1,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-103",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Bise-Fukugi Tree Road",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Bise-Fukugi%20Tree%20Road%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🌳",
    "priority": 8,
    "priceTier": "¥"
  },
  {
    "id": "japon-104",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Emerald Beach / Akahaka Beach",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Emerald%20Beach%20%2F%20Akahaka%20Beach%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🏖️",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-105",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Nakagusuku Castle",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nakagusuku%20Castle%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏯",
    "priority": 9,
    "priceTier": "¥"
  },
  {
    "id": "japon-106",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Mihama American Village",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Mihama%20American%20Village%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🎡",
    "priority": 10,
    "priceTier": "¥"
  },
  {
    "id": "japon-107",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Okinawa World",
    "description": "Cueva de grutas.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Okinawa%20World%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🕳️",
    "priority": 4,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-108",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Valley of Gangala",
    "description": "Valle con una cueva natural y un café dentro de la jungla subtropical de Okinawa.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Valley%20of%20Gangala%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🌴",
    "priority": 11,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-109",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Miibaru Beach",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Miibaru%20Beach%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏖️",
    "priority": 12,
    "priceTier": "¥"
  },
  {
    "id": "japon-110",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Sefa-Utaki",
    "description": "Bosque sagrado.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sefa-Utaki%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌲",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-111",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Shuri Castle",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shuri%20Castle%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🏯",
    "priority": 2,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-112",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Makishi Public Market",
    "description": "Mercado de productos frescos y mariscos en el centro de Naha, con restaurantes en el segundo piso.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Makishi%20Public%20Market%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🐟",
    "priority": 13,
    "priceTier": "¥"
  },
  {
    "id": "japon-113",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Kokusai-dori",
    "description": "Calle de compras. Probar Habushu — bebida con una víbora dentro de la botella.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kokusai-dori%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🛍️",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-114",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Heiwa Dori",
    "description": "Galería cubierta frente a Kokusai-dori.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Heiwa%20Dori%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏪",
    "priority": 14,
    "priceTier": "¥"
  },
  {
    "id": "japon-115",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Mercado de productores (Ichiba-hondori)",
    "description": "Mercado local de productores al final de la calle Ichiba-hondori en Naha.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Mercado%20de%20productores%20(Ichiba-hondori)%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🥭",
    "priority": 15,
    "priceTier": "¥"
  },
  {
    "id": "japon-116",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Naminoue Beach",
    "description": "Playa urbana dentro de la ciudad de Naha, conveniente aunque pequeña.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Naminoue%20Beach%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏖️",
    "priority": 16,
    "priceTier": "¥"
  },
  {
    "id": "japon-117",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Okinawa",
    "title": "Ishigaki",
    "description": "Día 4 — volar a la isla.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ishigaki%2C%20Okinawa%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🏝️",
    "priority": 7,
    "priceTier": "¥"
  },
  {
    "id": "japon-118",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Monte Fuji",
    "title": "Bus directo Shinjuku → 5ª estación ruta Yoshida",
    "description": "2:30 hrs. Mejor principios de julio-agosto.",
    "location": null,
    "mapsUrl": null,
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🚌",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-119",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Monte Fuji",
    "title": "Fujikawaguchiko",
    "description": "Lagos, hikes, renta de bicis.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Fujikawaguchiko%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🗻",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-120",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Monte Fuji",
    "title": "Ropeway (Fujikawaguchiko)",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ropeway%20(Fujikawaguchiko)%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🚡",
    "priority": 3,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-121",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Monte Fuji",
    "title": "Kawaguchiko Sengen Shrine",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kawaguchiko%20Sengen%20Shrine%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "⛩️",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-122",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Monte Fuji",
    "title": "Ide Shuzo Sake Brewery",
    "description": "Pequeña destilería de sake con degustaciones, cerca del lago Kawaguchiko.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ide%20Shuzo%20Sake%20Brewery%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🍶",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-123",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kyushu",
    "title": "Fukuoka",
    "description": "Izakayas.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Fukuoka%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🍜",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-124",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kyushu",
    "title": "Arita / Imari / Karatsu",
    "description": "Pueblos de cerámica. Tressure Hunt en Arita.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Arita%20%2F%20Imari%20%2F%20Karatsu%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏺",
    "priority": 9,
    "priceTier": "¥"
  },
  {
    "id": "japon-125",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kyushu",
    "title": "Nagasaki",
    "description": "Ciudad con una historia única de comercio con Occidente y un profundo significado histórico por la bomba atómica.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nagasaki%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "⛪",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-126",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kyushu",
    "title": "Kurokawa Onsen",
    "description": "Uno de los pueblos de aguas termales más pintorescos y queridos de Japón.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kurokawa%20Onsen%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "♨️",
    "priority": 3,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-127",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kyushu",
    "title": "Beppu",
    "description": "Incluye los 'Hells' y los onsens de Kannawa.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Beppu%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "♨️",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-128",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kyushu",
    "title": "Kumamoto Castle",
    "description": "Uno de los castillos más impresionantes de Japón, reconstruido tras el terremoto de 2016.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kumamoto%20Castle%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🏯",
    "priority": 5,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-129",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kyushu",
    "title": "Takachiho",
    "description": "Incluye Takachiho Gorge (paseo en bote bajo cascada), Takachiho Shrine y Amanoiwato Shrine.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Takachiho%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌊",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-130",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kyushu",
    "title": "Kagoshima",
    "description": "Volcán Sakurajima y el jardín Sengan-en.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kagoshima%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌋",
    "priority": 7,
    "priceTier": "¥"
  },
  {
    "id": "japon-131",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kyushu",
    "title": "Yakushima",
    "description": "Ferry desde Kagoshima. Shiratani Unsui Gorge (bosque de musgo, hike), onsens, snorkel con tortugas.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Yakushima%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌲",
    "priority": 8,
    "priceTier": "¥"
  },
  {
    "id": "japon-132",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kyushu",
    "title": "Ibusuki",
    "description": "Sand bath onsen (baño de arena caliente).",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ibusuki%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "♨️",
    "priority": 10,
    "priceTier": "¥"
  },
  {
    "id": "japon-133",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Osaka",
    "title": "Umeda Sky Building",
    "description": "Floating garden observatory.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Umeda%20Sky%20Building%2C%20Osaka%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏙️",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-134",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Osaka",
    "title": "Umaiya (Takoyaki)",
    "description": "Cerca de Tenmangu Shrine.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Umaiya%20(Takoyaki)%2C%20Osaka%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🐙",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-135",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Osaka",
    "title": "Osaka Tenmangu Shrine",
    "description": "Santuario dedicado al dios del aprendizaje, popular entre estudiantes.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Osaka%20Tenmangu%20Shrine%2C%20Osaka%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "⛩️",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-136",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Osaka",
    "title": "Fue (Okonomiyaki)",
    "description": "Entre Tenmangu Shrine y el Castillo de Osaka.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Fue%20(Okonomiyaki)%2C%20Osaka%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🥞",
    "priority": 7,
    "priceTier": "¥"
  },
  {
    "id": "japon-137",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Osaka",
    "title": "Izakaya Toyo",
    "description": "A una cuadra de Fue. Pedir mejilla de atún a la parrilla / las 3 piezas del chef.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Izakaya%20Toyo%2C%20Osaka%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🍢",
    "priority": 8,
    "priceTier": "¥"
  },
  {
    "id": "japon-138",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Osaka",
    "title": "Castillo de Osaka + Parque",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Castillo%20de%20Osaka%20%2B%20Parque%2C%20Osaka%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🏯",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-139",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Osaka",
    "title": "Puente Dotonbori",
    "description": "Carteles de neón, ambiente nocturno animado.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Puente%20Dotonbori%2C%20Osaka%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🌃",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-140",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Osaka",
    "title": "Shinsaibashi-suji",
    "description": "Calle comercial, ocho manzanas.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shinsaibashi-suji%2C%20Osaka%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🛍️",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-141",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Osaka",
    "title": "Amerikamura",
    "description": "Zona donde los jóvenes modernos van a pasar el rato.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Amerikamura%2C%20Osaka%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🛹",
    "priority": 9,
    "priceTier": "¥"
  },
  {
    "id": "japon-142",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Osaka",
    "title": "Namba Yasaka Shrine",
    "description": "Santuario con cabeza de dragón.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Namba%20Yasaka%20Shrine%2C%20Osaka%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🐉",
    "priority": 10,
    "priceTier": "¥"
  },
  {
    "id": "japon-143",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Osaka",
    "title": "Tsurutontan Soemoncho",
    "description": "Udon, cerca de Dotonbori/Namba.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tsurutontan%20Soemoncho%2C%20Osaka%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🍜",
    "priority": 11,
    "priceTier": "¥"
  },
  {
    "id": "japon-144",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Koyasan-Nara",
    "title": "Koyasan",
    "description": "Centro del budismo japonés. 2h12min desde Osaka (Nankai Namba → Gokurakubashi → cable car a Koyasan). Hotel sugerido: Ekoin Temple.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Koyasan%2C%20Nara%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🛕",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-145",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Koyasan-Nara",
    "title": "Kongobuji Temple",
    "description": "Templo más importante de Koyasan. Incluye Banryutei, el jardín de rocas más grande de Japón.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kongobuji%20Temple%2C%20Nara%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🛕",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-146",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Koyasan-Nara",
    "title": "Danjo Garan",
    "description": "Complejo de templos y pagodas en el corazón de Koyasan, fundado por Kobo Daishi.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Danjo%20Garan%2C%20Nara%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🛕",
    "priority": 7,
    "priceTier": "¥"
  },
  {
    "id": "japon-147",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Koyasan-Nara",
    "title": "Okunoin Cemetery",
    "description": "El cementerio más grande de Japón.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Okunoin%20Cemetery%2C%20Nara%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🪦",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-148",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Koyasan-Nara",
    "title": "Nakatanidou (Nara)",
    "description": "Mochis — pedir yomogi mochi.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nakatanidou%20(Nara)%2C%20Nara%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🍡",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-149",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Koyasan-Nara",
    "title": "Kofuku-ji Temple",
    "description": "Templo con una icónica pagoda de cinco pisos, uno de los símbolos de Nara.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kofuku-ji%20Temple%2C%20Nara%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🛕",
    "priority": 8,
    "priceTier": "¥"
  },
  {
    "id": "japon-150",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Koyasan-Nara",
    "title": "Kasuga Taisha Shrine",
    "description": "Linternas de bronce.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kasuga%20Taisha%20Shrine%2C%20Nara%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "⛩️",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-151",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Koyasan-Nara",
    "title": "Nandaimon Gate",
    "description": "La puerta de entrada a templo más grande de Japón — puerta sur del Templo Todaiji.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nandaimon%20Gate%2C%20Nara%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🚪",
    "priority": 9,
    "priceTier": "¥"
  },
  {
    "id": "japon-152",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Koyasan-Nara",
    "title": "Todaiji Temple",
    "description": "Great Buddha Hall, la estructura de madera más grande del mundo y la estatua de Buda de bronce más grande del mundo. Pasar por el hoyo del templo da buena suerte.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Todaiji%20Temple%2C%20Nara%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🛕",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-153",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Koyasan-Nara",
    "title": "Tamukeyama Hachiman-gu Shrine",
    "description": "Pequeño santuario cerca de Todaiji, conocido por sus vistas y tranquilidad.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tamukeyama%20Hachiman-gu%20Shrine%2C%20Nara%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "⛩️",
    "priority": 10,
    "priceTier": "¥"
  },
  {
    "id": "japon-154",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Koyasan-Nara",
    "title": "Nigatsudo Temple",
    "description": "Templo en una colina con una terraza que ofrece vistas panorámicas de Nara.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nigatsudo%20Temple%2C%20Nara%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🛕",
    "priority": 11,
    "priceTier": "¥"
  },
  {
    "id": "japon-155",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Wajouryoumen Sugari",
    "description": "Motsu soba ramen.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Wajouryoumen%20Sugari%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🍜",
    "priority": 21,
    "priceTier": "¥"
  },
  {
    "id": "japon-156",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Yasohachi",
    "description": "Cena.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Yasohachi%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🍱",
    "priority": 22,
    "priceTier": "¥"
  },
  {
    "id": "japon-157",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Kibune",
    "description": "Restaurante en el río, 30 min en tren.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kibune%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🏞️",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-158",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Hirobun",
    "description": "Pescar soba (nagashi somen/soba en el río).",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hirobun%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🍜",
    "priority": 7,
    "priceTier": "¥"
  },
  {
    "id": "japon-159",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Ginkaku-ji (Pabellón de Plata)",
    "description": "Abre 8:30.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ginkaku-ji%20(Pabell%C3%B3n%20de%20Plata)%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🛕",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-160",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Camino de la Filosofía",
    "description": "Paseo peatonal entre los templos Ginkaku-ji y Nanzen-ji.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Camino%20de%20la%20Filosof%C3%ADa%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🚶",
    "priority": 8,
    "priceTier": "¥"
  },
  {
    "id": "japon-161",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Templo Eikando (Zenrinji)",
    "description": "Templo famoso por sus jardines de otoño y su estatua de Buda mirando hacia atrás.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Templo%20Eikando%20(Zenrinji)%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🛕",
    "priority": 23,
    "priceTier": "¥"
  },
  {
    "id": "japon-162",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Templo Nanzen-ji",
    "description": "Gran complejo de templos zen con un acueducto de ladrillo estilo romano poco común en Japón.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Templo%20Nanzen-ji%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🛕",
    "priority": 9,
    "priceTier": "¥"
  },
  {
    "id": "japon-163",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Nishiki Market",
    "description": "Mercado de comida.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nishiki%20Market%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🍢",
    "priority": 10,
    "priceTier": "¥"
  },
  {
    "id": "japon-164",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Kenninji Temple",
    "description": "Pinturas de dragón.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kenninji%20Temple%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🐉",
    "priority": 24,
    "priceTier": "¥"
  },
  {
    "id": "japon-165",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Pontocho",
    "description": "Barrio nocturno y de restaurantes.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Pontocho%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🏮",
    "priority": 11,
    "priceTier": "¥"
  },
  {
    "id": "japon-166",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Maccha House",
    "description": "Matcha tiramisú.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Maccha%20House%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🍵",
    "priority": 25,
    "priceTier": "¥"
  },
  {
    "id": "japon-167",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Sanjūsangen-dō",
    "description": "Miles de estatuas de Buda.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sanj%C5%ABsangen-d%C5%8D%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🛕",
    "priority": 12,
    "priceTier": "¥"
  },
  {
    "id": "japon-168",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Kawai Kanjiro Memorial House",
    "description": "Antigua residencia de un alfarero mingei, joya escondida de la zona.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kawai%20Kanjiro%20Memorial%20House%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏺",
    "priority": 26,
    "priceTier": "¥"
  },
  {
    "id": "japon-169",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Templo Kiyomizudera",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Templo%20Kiyomizudera%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🛕",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-170",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Hōkan-ji Temple",
    "description": "También conocido como la Pagoda Yasaka, un símbolo del barrio de Higashiyama.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=H%C5%8Dkan-ji%20Temple%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏯",
    "priority": 27,
    "priceTier": "¥"
  },
  {
    "id": "japon-171",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Fushimi Inari Shrine",
    "description": "El santuario de torii gates más importante — dios del arroz. Se llega en tren.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Fushimi%20Inari%20Shrine%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "⛩️",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-172",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Santuario Shimogamo-jinja",
    "description": "Uno de los más antiguos de Kioto.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Santuario%20Shimogamo-jinja%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "⛩️",
    "priority": 28,
    "priceTier": "¥"
  },
  {
    "id": "japon-173",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Distrito Textil de Nishijin",
    "description": "Centro Textil de Nishijin — kimonos.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Distrito%20Textil%20de%20Nishijin%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🧵",
    "priority": 29,
    "priceTier": "¥"
  },
  {
    "id": "japon-174",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Kyoto State Guest House",
    "description": "Residencia de estado usada para recibir a líderes extranjeros, con visitas guiadas limitadas.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kyoto%20State%20Guest%20House%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏛️",
    "priority": 30,
    "priceTier": "¥"
  },
  {
    "id": "japon-175",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Palacio Imperial y Jardín",
    "description": "Antigua residencia de la familia imperial japonesa, con extensos jardines abiertos al público.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Palacio%20Imperial%20y%20Jard%C3%ADn%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "👑",
    "priority": 13,
    "priceTier": "¥"
  },
  {
    "id": "japon-176",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Castillo Nijo",
    "description": "De la época feudal.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Castillo%20Nijo%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🏯",
    "priority": 14,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-177",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Higashi Honganji Temple",
    "description": "Uno de los templos budistas más grandes de Kioto, con una imponente puerta de madera.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Higashi%20Honganji%20Temple%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🛕",
    "priority": 31,
    "priceTier": "¥"
  },
  {
    "id": "japon-178",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Toji Temple",
    "description": "Templo con la pagoda de madera más alta de Japón, declarado Patrimonio de la Humanidad.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Toji%20Temple%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🛕",
    "priority": 15,
    "priceTier": "¥"
  },
  {
    "id": "japon-179",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Hozugawa River Boat Ride (Hozugawa Kudari)",
    "description": "9:00 AM, 52 min desde el hotel. Comer algo de matcha.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hozugawa%20River%20Boat%20Ride%20(Hozugawa%20Kudari)%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🚣",
    "priority": 16,
    "priceTier": "¥"
  },
  {
    "id": "japon-180",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Adashino Nenbutsuji Temple",
    "description": "Piedras en forma de personas.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Adashino%20Nenbutsuji%20Temple%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🪦",
    "priority": 32,
    "priceTier": "¥"
  },
  {
    "id": "japon-181",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Tenryu-ji",
    "description": "Templo budista muy importante, con jardín.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tenryu-ji%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🛕",
    "priority": 17,
    "priceTier": "¥"
  },
  {
    "id": "japon-182",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Gio-ji Temple",
    "description": "Pequeño templo cubierto de musgo, tranquilo y poco visitado en Arashiyama.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Gio-ji%20Temple%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🛕",
    "priority": 33,
    "priceTier": "¥"
  },
  {
    "id": "japon-183",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Arashiyama Bamboo Grove",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Arashiyama%20Bamboo%20Grove%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🎋",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-184",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Arashiyama Monkey Park Iwatayama",
    "description": "Parque en la cima de una montaña con monos salvajes y vistas panorámicas de Kioto.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Arashiyama%20Monkey%20Park%20Iwatayama%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🐒",
    "priority": 18,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-185",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Katsura River",
    "description": "Río que atraviesa Arashiyama, popular para paseos en bote y vistas desde el puente Togetsukyo.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Katsura%20River%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🛶",
    "priority": 34,
    "priceTier": "¥"
  },
  {
    "id": "japon-186",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Togetsukyo Bridge",
    "description": "Puente icónico de Arashiyama con vistas a las montañas, especialmente bonito en otoño.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Togetsukyo%20Bridge%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌉",
    "priority": 19,
    "priceTier": "¥"
  },
  {
    "id": "japon-187",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Kimono Forest",
    "description": "Instalación de cientos de postes con telas de kimono iluminadas, cerca de la estación de Arashiyama.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kimono%20Forest%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🎐",
    "priority": 20,
    "priceTier": "¥"
  },
  {
    "id": "japon-188",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Kinkakuji Temple",
    "description": "Cierra a las 5pm.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kinkakuji%20Temple%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🛕",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-189",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kioto",
    "title": "Daitokuji",
    "description": "Casas de té, jardines japoneses, tumbas de antiguos guerreros, pinturas en fusuma y otros lugares históricos.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Daitokuji%2C%20Kyoto%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🛕",
    "priority": 35,
    "priceTier": "¥"
  },
  {
    "id": "japon-190",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kobe-Himeji-Okayama",
    "title": "Kobe Beef",
    "description": "https://daichi.koubegyuu.com/course/",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kobe%20Beef%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🥩",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-191",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kobe-Himeji-Okayama",
    "title": "Himeji Castle",
    "description": "Incluye jardín.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Himeji%20Castle%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🏯",
    "priority": 1,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-192",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kobe-Himeji-Okayama",
    "title": "Kurashiki Ivy Square",
    "description": "Antiguo complejo textil de ladrillo cubierto de hiedra, hoy convertido en hoteles y tiendas.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kurashiki%20Ivy%20Square%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🌿",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-193",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kobe-Himeji-Okayama",
    "title": "Kurashiki Bikan Historical Quarter",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kurashiki%20Bikan%20Historical%20Quarter%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🏘️",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-194",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kobe-Himeji-Okayama",
    "title": "Kurashiki Denim Street",
    "description": "Calle especializada en mezclilla artesanal, ya que Kurashiki es famosa por su producción de denim.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kurashiki%20Denim%20Street%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "👖",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-195",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kobe-Himeji-Okayama",
    "title": "Okayama Korakuen",
    "description": "Uno de los 3 jardines más grandiosos de Japón. Abre 7:30am.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Okayama%20Korakuen%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🌳",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-196",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Kobe-Himeji-Okayama",
    "title": "Okayama Castle",
    "description": "Solo se ve por fuera.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Okayama%20Castle%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏯",
    "priority": 7,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-197",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hiroshima-Miyajima",
    "title": "Hiroshima Peace Memorial Museum",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hiroshima%20Peace%20Memorial%20Museum%2C%20Hiroshima%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🕊️",
    "priority": 1,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-198",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hiroshima-Miyajima",
    "title": "Okonomimura",
    "description": "Edificio lleno de restaurantes de okonomiyaki estilo Hiroshima.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Okonomimura%2C%20Hiroshima%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🥞",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-199",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hiroshima-Miyajima",
    "title": "Hiroshima Peace Memorial Park",
    "description": "Incluye las grullas de origami.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hiroshima%20Peace%20Memorial%20Park%2C%20Hiroshima%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🕊️",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-200",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hiroshima-Miyajima",
    "title": "Atomic Bomb Dome",
    "description": "",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Atomic%20Bomb%20Dome%2C%20Hiroshima%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "🏛️",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-201",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hiroshima-Miyajima",
    "title": "Hiroshima Castle",
    "description": "Castillo reconstruido tras la bomba atómica, conocido como el 'Castillo de las Carpas'.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hiroshima%20Castle%2C%20Hiroshima%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🏯",
    "priority": 8,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-202",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hiroshima-Miyajima",
    "title": "Itsukushima Shrine (Miyajima)",
    "description": "Se llega por el muelle Motoyasubashi desde Hiroshima.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Itsukushima%20Shrine%20(Miyajima)%2C%20Hiroshima%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 5,
    "emoji": "⛩️",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-203",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hiroshima-Miyajima",
    "title": "Miyajima Omotesone Arcade",
    "description": "Calle comercial principal de Miyajima, con tiendas de momiji manju y ciervos sueltos.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Miyajima%20Omotesone%20Arcade%2C%20Hiroshima%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🦌",
    "priority": 9,
    "priceTier": "¥"
  },
  {
    "id": "japon-204",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hiroshima-Miyajima",
    "title": "Daisho-in",
    "description": "Templo budista en la ladera del Monte Misen, con cientos de estatuas de Buda y ruedas de oración.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Daisho-in%2C%20Hiroshima%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🛕",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-205",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hiroshima-Miyajima",
    "title": "Monte Misen",
    "description": "Hike, cumbre a 2 horas desde el pueblo.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Monte%20Misen%2C%20Hiroshima%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🥾",
    "priority": 7,
    "priceTier": "¥"
  },
  {
    "id": "japon-206",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Hiroshima-Miyajima",
    "title": "Shukkei-en",
    "description": "Jardín en Hiroshima.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shukkei-en%2C%20Hiroshima%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 3,
    "emoji": "🌳",
    "priority": 10,
    "priceTier": "¥"
  },
  {
    "id": "japon-207",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Yakitori/Yakiniku/BBQ",
    "title": "Kobe Beef",
    "description": "Yakiniku / carne de Kobe — ¥¥¥ — https://daichi.koubegyuu.com/course/ — también listado en Fuera de Tokio / Kobe-Himeji-Okayama.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kobe%20Beef%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🥩",
    "priority": 1,
    "priceTier": "¥¥¥"
  },
  {
    "id": "japon-208",
    "tripId": "japon",
    "category": "Eventos Estacionales",
    "subcategory": null,
    "title": "Parque de Flores de Ashikaga (Festival de Glicinias)",
    "description": "Prefectura de Tochigi. Del 18 de abril al 20 de mayo. Árboles de glicinias de 150 años, iluminados de noche. ~2 hrs de Tokio. También listado en Fuera de Tokio / Cerca de Tokio.",
    "location": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Parque%20de%20Flores%20de%20Ashikaga%20(Festival%20de%20Glicinias)%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia (ITINERARIOS_TOKYO.pdf / VIAJES_JAPÓN.pdf)",
    "rating": 4,
    "emoji": "🎏",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-209",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Arabic Cafe & Deli Abu Essam",
    "description": "Árabe — ¥1-2k — 997 reseñas en Google",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Arabic%20Cafe%20%26%20Deli%20Abu%20Essam%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 5,
    "emoji": "🧆",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-210",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "EUREKA!",
    "description": "Bar de sake / izakaya moderno — El dueño es famoso en el mundo del sake — gran maridaje con la comida",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=EUREKA!%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 5,
    "emoji": "🍶",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-211",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "炭焼ジンギスカン浅鞍",
    "description": "Yakiniku / Jingisukan (BBQ mongol)",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=%E7%82%AD%E7%84%BC%E3%82%B8%E3%83%B3%E3%82%AE%E3%82%B9%E3%82%AB%E3%83%B3%E6%B5%85%E9%9E%8D%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 5,
    "emoji": "🍖",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-212",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Toriaroma",
    "description": "Yakitori — ¥10k+",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Toriaroma%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 5,
    "emoji": "🍢",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-213",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "神楽坂 囲炉裏 肉よろず",
    "description": "Enfocado en carne, parrilla irori — Solo con reserva — ideal para grupos de 4-5, ambiente tranquilo, irori (parrilla) en el centro de la mesa, curso de ~8000 yenes/persona",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=%E7%A5%9E%E6%A5%BD%E5%9D%82%20%E5%9B%B2%E7%82%89%E8%A3%8F%20%E8%82%89%E3%82%88%E3%82%8D%E3%81%9A%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🔥",
    "priority": 8,
    "priceTier": "¥"
  },
  {
    "id": "japon-214",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Nihonryōri Seizan",
    "description": "Kaiseki — ¥10k+",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nihonry%C5%8Dri%20Seizan%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 5,
    "emoji": "🍵",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-215",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "WAYANA Wine Bar",
    "description": "Bar de vinos",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=WAYANA%20Wine%20Bar%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 5,
    "emoji": "🍷",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-216",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Okonomiyaki yakou",
    "description": "Okonomiyaki — ¥1k (económico)",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Okonomiyaki%20yakou%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🥞",
    "priority": 9,
    "priceTier": "¥"
  },
  {
    "id": "japon-217",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Hachioji",
    "title": "Hachiōji Ukai-tei",
    "description": "Teppanyaki — El mejor teppanyaki — caro, pedir el curso con arroz al ajo, edificio e interior impresionantes",
    "location": "Hachioji, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hachi%C5%8Dji%20Ukai-tei%2C%20Hachioji%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 5,
    "emoji": "🥩",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-218",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "神楽坂 鉄板焼 向日葵",
    "description": "Teppanyaki — ¥10k+",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=%E7%A5%9E%E6%A5%BD%E5%9D%82%20%E9%89%84%E6%9D%BF%E7%84%BC%20%E5%90%91%E6%97%A5%E8%91%B5%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍳",
    "priority": 10,
    "priceTier": "¥"
  },
  {
    "id": "japon-219",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Yakiniku Kunimoto Honten",
    "description": "Yakiniku — ¥10k+",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Yakiniku%20Kunimoto%20Honten%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🥩",
    "priority": 11,
    "priceTier": "¥"
  },
  {
    "id": "japon-220",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Yakiyasai Isoya",
    "description": "Izakaya",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Yakiyasai%20Isoya%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍢",
    "priority": 12,
    "priceTier": "¥"
  },
  {
    "id": "japon-221",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "ANTICA OSTERIA CARNEYA",
    "description": "Italiana — ¥10k+",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=ANTICA%20OSTERIA%20CARNEYA%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍝",
    "priority": 13,
    "priceTier": "¥"
  },
  {
    "id": "japon-222",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Arakicho Rokkan",
    "description": "Izakaya — ¥10k+",
    "location": "Arakicho, Tokyo (cerca de Kagurazaka)",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Arakicho%20Rokkan%2C%20Arakicho%2C%20Shinjuku%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 5,
    "emoji": "🍶",
    "priority": 7,
    "priceTier": "¥"
  },
  {
    "id": "japon-223",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Yamataro Onigiri",
    "description": "Onigiri — Buen onigiri y sopa de miso",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Yamataro%20Onigiri%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍙",
    "priority": 14,
    "priceTier": "¥"
  },
  {
    "id": "japon-224",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Tsukiji Yaki Uo Ishikawa",
    "description": "Mariscos",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tsukiji%20Yaki%20Uo%20Ishikawa%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🐟",
    "priority": 15,
    "priceTier": "¥"
  },
  {
    "id": "japon-225",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Masaru",
    "description": "Casquería (offal)",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Masaru%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍢",
    "priority": 16,
    "priceTier": "¥"
  },
  {
    "id": "japon-226",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Isomatsu",
    "description": "",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Isomatsu%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍽️",
    "priority": 17,
    "priceTier": "¥"
  },
  {
    "id": "japon-227",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Onikai",
    "description": "Izakaya",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Onikai%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍢",
    "priority": 18,
    "priceTier": "¥"
  },
  {
    "id": "japon-228",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Kagurazaka Tareyakinikunonki",
    "description": "Yakiniku",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kagurazaka%20Tareyakinikunonki%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🥩",
    "priority": 19,
    "priceTier": "¥"
  },
  {
    "id": "japon-229",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Ginza",
    "title": "Ginza Asami",
    "description": "Kaiseki — Tai chazuke ¥2000 — solo almuerzo, solo con reserva",
    "location": "Ginza, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ginza%20Asami%2C%20Ginza%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍚",
    "priority": 4,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-230",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Designo",
    "description": "Francesa — ¥10k+",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Designo%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍷",
    "priority": 20,
    "priceTier": "¥"
  },
  {
    "id": "japon-231",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Yakiniku Jambo Hongo",
    "description": "Yakiniku — ¥10k+",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Yakiniku%20Jambo%20Hongo%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🥩",
    "priority": 21,
    "priceTier": "¥"
  },
  {
    "id": "japon-232",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shibuya",
    "title": "Tofu Cuisine Sorano Shibuya",
    "description": "Tofu — Interior muy bonito también",
    "location": "Shibuya, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tofu%20Cuisine%20Sorano%20Shibuya%2C%20Shibuya%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍲",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-233",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Safu",
    "description": "Café — Bonita vista al jardín",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Safu%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 3,
    "emoji": "☕",
    "priority": 28,
    "priceTier": "¥"
  },
  {
    "id": "japon-234",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "L'HABITUDE",
    "description": "Francesa",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=L'HABITUDE%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🥐",
    "priority": 22,
    "priceTier": "¥"
  },
  {
    "id": "japon-235",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Carmine Italian Restaurant: Casual",
    "description": "Italiana",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Carmine%20Italian%20Restaurant%3A%20Casual%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍝",
    "priority": 23,
    "priceTier": "¥"
  },
  {
    "id": "japon-236",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "醤 hishio",
    "description": "Japonesa",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=%E9%86%A4%20hishio%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍱",
    "priority": 24,
    "priceTier": "¥"
  },
  {
    "id": "japon-237",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Sakai",
    "description": "Yakitori",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sakai%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍢",
    "priority": 25,
    "priceTier": "¥"
  },
  {
    "id": "japon-238",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Chiyoda",
    "title": "Hibiya Mon Cher Ton Ton at The Peninsula",
    "description": "Teppanyaki — ¥10k+",
    "location": "Hibiya, Chiyoda, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hibiya%20Mon%20Cher%20Ton%20Ton%20at%20The%20Peninsula%2C%20Hibiya%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🥩",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-239",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Asakusa",
    "title": "Asakusa Ichimon",
    "description": "Izakaya — En el Asakusa profundo, ambiente retro — dato curioso: aparece filmado en una película de Ultraman",
    "location": "Asakusa, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Asakusa%20Ichimon%2C%20Asakusa%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 3,
    "emoji": "🏮",
    "priority": 11,
    "priceTier": "¥"
  },
  {
    "id": "japon-240",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "名物よだれ鶏と濃厚鶏白湯麺 MATSURIKA",
    "description": "Ramen — El ramen favorito de mi amiga — pedir el ticket de pollo picante, el chef hace el ramen con mucho cuidado",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=%E5%90%8D%E7%89%A9%E3%82%88%E3%81%A0%E3%82%8C%E9%B6%8F%E3%81%A8%E6%BF%83%E5%8E%9A%E9%B6%8F%E7%99%BD%E6%B9%AF%E9%BA%BA%20MATSURIKA%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍜",
    "priority": 26,
    "priceTier": "¥"
  },
  {
    "id": "japon-241",
    "tripId": "japon",
    "category": "Hidden Gems",
    "subcategory": "Cafés",
    "title": "Jubilee Coffee and Roaster",
    "description": "Café — Económico",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Jubilee%20Coffee%20and%20Roaster%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "☕",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-242",
    "tripId": "japon",
    "category": "Hidden Gems",
    "subcategory": "Cafés",
    "title": "Kosoan",
    "description": "Café tradicional con dulces japoneses — Café de estilo japonés en un edificio tradicional",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kosoan%2C%20Kagurazaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍡",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-243",
    "tripId": "japon",
    "category": "Hidden Gems",
    "subcategory": "Cafés especiales",
    "title": "Onibus Coffee",
    "description": "Café sin pretensiones pero de gran calidad, escondido entre casas y un parque local en las calles traseras de Shibuya.",
    "location": "Shibuya backstreets, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Onibus%20Coffee%2C%20Shibuya%20backstreets%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación web",
    "rating": 5,
    "emoji": "☕",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-244",
    "tripId": "japon",
    "category": "Hidden Gems",
    "subcategory": "Cafés especiales",
    "title": "Koffee Mameya",
    "description": "Local minimalista tipo 'hole-in-the-wall', solo para llevar, cerca de Omotesando. Los granos se presentan como una tabla periódica — suele haber fila.",
    "location": "Cerca de Omotesando, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Koffee%20Mameya%2C%20Cerca%20de%20Omotesando%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación web",
    "rating": 5,
    "emoji": "☕",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-245",
    "tripId": "japon",
    "category": "Hidden Gems",
    "subcategory": "Cafés especiales",
    "title": "Fuglen",
    "description": "Pionero del café de 'tercera ola' en Tokio. Espacio reducido pero acogedor, madera expuesta — un clásico de los locales desde hace años.",
    "location": "Oku-Shibu (Shibuya interior), Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Fuglen%2C%20Oku-Shibu%20(Shibuya%20interior)%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación web",
    "rating": 4,
    "emoji": "☕",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-246",
    "tripId": "japon",
    "category": "Hidden Gems",
    "subcategory": "Cafés especiales",
    "title": "%Arabica",
    "description": "Flat whites excelentes y confiables. Originario de Kioto, con varias ubicaciones — buena opción de respaldo cuando se explora lejos de un lugar favorito conocido.",
    "location": "Varias ubicaciones, Japón",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=%25Arabica%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación web",
    "rating": 4,
    "emoji": "☕",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-247",
    "tripId": "japon",
    "category": "Hidden Gems",
    "subcategory": "Cafés especiales",
    "title": "Leaves Coffee Roasters",
    "description": "Fundado por un ex campeón de boxeo convertido en campeón de tostado de café. Espacio de tostadora industrial cerca de Asakusa.",
    "location": "Cerca de Asakusa, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Leaves%20Coffee%20Roasters%2C%20Cerca%20de%20Asakusa%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación web",
    "rating": 5,
    "emoji": "☕",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-248",
    "tripId": "japon",
    "category": "Hidden Gems",
    "subcategory": "Cafés especiales",
    "title": "Kielo Coffee",
    "description": "Café de especialidad de calidad poco común en un barrio de maid cafes y tiendas de anime.",
    "location": "Akihabara, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kielo%20Coffee%2C%20Akihabara%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación web",
    "rating": 4,
    "emoji": "☕",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-249",
    "tripId": "japon",
    "category": "Hidden Gems",
    "subcategory": "Restaurantes escondidos",
    "title": "Omoide Yokocho (\"Memory Lane\")",
    "description": "Callejón angosto lleno de pequeños puestos de yakitori e izakayas. Ambiente local muy animado a pesar de ser conocido por los turistas.",
    "location": "Shinjuku, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Omoide%20Yokocho%20(%22Memory%20Lane%22)%2C%20Shinjuku%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación web",
    "rating": 5,
    "emoji": "🏮",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-250",
    "tripId": "japon",
    "category": "Hidden Gems",
    "subcategory": "Restaurantes escondidos",
    "title": "Shimbashi",
    "description": "Barrio de oficinistas (salaryman) para después del trabajo, mucho menos turístico que Shinjuku o Shibuya. Bueno para un recorrido de izakayas auténtico.",
    "location": "Shimbashi, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shimbashi%2C%20Shimbashi%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación web",
    "rating": 4,
    "emoji": "🍶",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-251",
    "tripId": "japon",
    "category": "Eventos Estacionales",
    "subcategory": null,
    "title": "Mashiko Pottery Fair (Otoño)",
    "description": "Festival bianual desde 1966 — ~50 tiendas + 500 puestos. Se puede hablar directamente con los alfareros, divertido incluso sin comprar. Probar la comida del festival (takoyaki/okonomiyaki). Fechas 2026: 31 oct - 3 nov, ~2 horas desde Tokio.",
    "location": "Mashiko, Distrito de Haga, Tochigi",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Mashiko%20Pottery%20Fair%20(Oto%C3%B1o)%2C%20Mashiko%2C%20Distrito%20de%20Haga%2C%20Tochigi",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación web",
    "rating": 5,
    "emoji": "🏺",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-252",
    "tripId": "japon",
    "category": "Eventos Estacionales",
    "subcategory": null,
    "title": "Design Festa Tokyo",
    "description": "Festival de arte con boletos, gran variedad de estilos. Concurrido pero vale la pena por la densidad de arte exhibido.",
    "location": "Tokyo Big Sight, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tokyo%20Big%20Sight%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación web",
    "rating": 4,
    "emoji": "🎨",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-253",
    "tripId": "japon",
    "category": "Eventos Estacionales",
    "subcategory": null,
    "title": "Tokyo Ramen Food Festival",
    "description": "Festival gastronómico dedicado al ramen en Shinjuku Okubo Park. Fechas 2026: 8 de octubre - 24 de noviembre.",
    "location": "Shinjuku Okubo Park, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tokyo%20Ramen%20Food%20Festival%2C%20Shinjuku%20Okubo%20Park%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación web",
    "rating": 4,
    "emoji": "🍜",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-254",
    "tripId": "japon",
    "category": "Eventos Estacionales",
    "subcategory": null,
    "title": "Tori no Ichi",
    "description": "Festival tradicional en el que se compra un kumade (rastrillo decorado) para pedir buena fortuna y prosperidad. La versión más espectacular se celebra en el santuario Ohtori Jinja y el templo Chokoku-ji, en Asakusa. Fechas 2026: 7 y 19 de noviembre.",
    "location": "Ohtori Jinja / Chokoku-ji, Asakusa, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tori%20no%20Ichi%2C%20Ohtori%20Jinja%20%2F%20Chokoku-ji%2C%20Asakusa%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación web",
    "rating": 4,
    "emoji": "🎍",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-255",
    "tripId": "japon",
    "category": "Eventos Estacionales",
    "subcategory": null,
    "title": "Tokyo Yosakoi (Fukuro Matsuri)",
    "description": "Festival de baile que cierra el Fukuro Matsuri de Ikebukuro — más de 100 equipos de todo Japón con trajes tradicionales bailando yosakoi. Octubre 2026.",
    "location": "Ikebukuro, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tokyo%20Yosakoi%20(Fukuro%20Matsuri)%2C%20Ikebukuro%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación web",
    "rating": 3,
    "emoji": "💃",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-256",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Ryūhō",
    "description": "China — ¥1-2k — 2418 reseñas en Google",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ry%C5%ABh%C5%8D%2C%20Kagurazaka%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 3,
    "emoji": "🥟",
    "priority": 29,
    "priceTier": "¥"
  },
  {
    "id": "japon-257",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Tonchinkan",
    "description": "Tonkatsu — ¥1-2k — 3007 reseñas en Google",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tonchinkan%2C%20Kagurazaka%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 3,
    "emoji": "🍱",
    "priority": 30,
    "priceTier": "¥"
  },
  {
    "id": "japon-258",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Montana",
    "description": "Ramen — ¥1-2k — 320 reseñas en Google",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Montana%2C%20Kagurazaka%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 2,
    "emoji": "🍜",
    "priority": 34,
    "priceTier": "¥"
  },
  {
    "id": "japon-259",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Noie",
    "description": "Izakaya — ¥1-2k — 232 reseñas en Google",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Noie%2C%20Kagurazaka%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 4,
    "emoji": "🍶",
    "priority": 27,
    "priceTier": "¥"
  },
  {
    "id": "japon-260",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Chugokusai Zenrakubou",
    "description": "China — ¥1-2k — 384 reseñas en Google",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Chugokusai%20Zenrakubou%2C%20Kagurazaka%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 3,
    "emoji": "🥟",
    "priority": 31,
    "priceTier": "¥"
  },
  {
    "id": "japon-261",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Haguruma",
    "description": "Izakaya / restaurante — Visible en el mapa de mi amiga cerca de Kagurazaka, sin más detalle — Sin calificación de Google — 3★ provisional (placeholder sin confirmar)",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Haguruma%2C%20Kagurazaka%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 3,
    "emoji": "🍢",
    "priority": 32,
    "priceTier": "¥"
  },
  {
    "id": "japon-262",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Kagurazaka (zona de joyas escondidas)",
    "title": "Teppan-ya",
    "description": "Teppanyaki — ¥6000-9000 — 198 reseñas en Google",
    "location": "Kagurazaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Teppan-ya%2C%20Kagurazaka%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Recomendación de amiga — lista curada de Kagurazaka",
    "rating": 3,
    "emoji": "🍳",
    "priority": 33,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-263",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Sushi",
    "title": "Sushi Dai",
    "description": "Institución legendaria en Toyosu Market — omakase de 12 piezas ~$37, líneas desde las 2am, abre 5:30am, sin reservaciones — ¥¥",
    "location": "Toyosu Market, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sushi%20Dai%2C%20Toyosu%20Market%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación — críticos y blogs gastronómicos",
    "rating": 5,
    "emoji": "🍣",
    "priority": 1,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-264",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Sushi",
    "title": "Sukiyabashi Jiro",
    "description": "El sushi-ya hecho famoso por el documental \"Jiro Dreams of Sushi\" — extremadamente difícil de reservar, solo para ocasión especial — ¥¥¥",
    "location": "Ginza, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sukiyabashi%20Jiro%2C%20Ginza%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación — críticos y blogs gastronómicos",
    "rating": 5,
    "emoji": "🍣",
    "priority": 2,
    "priceTier": "¥¥¥"
  },
  {
    "id": "japon-265",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Sushi",
    "title": "Uogashi Nihon-Ichi",
    "description": "Sushi de pie — excelente relación calidad-precio, ve a los chefs trabajar de cerca. Varias sucursales: Shibuya, Akihabara, Shinjuku — ¥",
    "location": "Varias sucursales (Shibuya/Akihabara/Shinjuku), Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Uogashi%20Nihon-Ichi%2C%20Shibuya%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación — críticos y blogs gastronómicos",
    "rating": 4,
    "emoji": "🍣",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-266",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Sushi",
    "title": "Sushi-ya",
    "description": "Omakase de almuerzo en Ginza — 12-14 platos a precio de almuerzo, gran valor — ¥¥",
    "location": "Ginza, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sushi-ya%2C%20Ginza%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación — críticos y blogs gastronómicos",
    "rating": 4,
    "emoji": "🍣",
    "priority": 4,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-267",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Ramen y Tsukemen",
    "title": "Fuunji",
    "description": "Tsukemen — caldo de pollo y bonito cocido 38 horas, sin cerdo, ración grande gratis, ~¥1200 — ¥",
    "location": "Shinjuku/Yoyogi, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Fuunji%2C%20Shinjuku%2FYoyogi%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación — críticos y blogs gastronómicos",
    "rating": 5,
    "emoji": "🍜",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-268",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Ramen y Tsukemen",
    "title": "Kagari",
    "description": "Toripaitan (caldo de pollo) cremoso, ahora muy conocido internacionalmente — ¥",
    "location": "Ginza, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kagari%2C%20Ginza%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación — críticos y blogs gastronómicos",
    "rating": 5,
    "emoji": "🍜",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-269",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Ramen y Tsukemen",
    "title": "Konjiki Hototogisu",
    "description": "Shoyu/shio — solo 7 asientos, ambiente cálido — ¥",
    "location": "Shinjuku, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Konjiki%20Hototogisu%2C%20Shinjuku%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación — críticos y blogs gastronómicos",
    "rating": 4,
    "emoji": "🍜",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-270",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Ramen y Tsukemen",
    "title": "Rokurinsha",
    "description": "Tsukemen — ojo con las filas; hay sucursal en Tokyo Skytree con menos cola — ¥",
    "location": "Tokyo Station Ramen Street, Tokyo (también en Tokyo Skytree)",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Rokurinsha%2C%20Tokyo%20Station%2C%20Tokyo%2C%20Japan",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación — críticos y blogs gastronómicos",
    "rating": 4,
    "emoji": "🍜",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-271",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Ramen y Tsukemen",
    "title": "Gonokami Seisakusho",
    "description": "Tsukemen de camarón, única en su tipo — fila desde 1 hora antes de abrir — ¥",
    "location": "Shinjuku, cerca de Takashimaya, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Gonokami%20Seisakusho%2C%20Shinjuku%2C%20cerca%20de%20Takashimaya%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación — críticos y blogs gastronómicos",
    "rating": 4,
    "emoji": "🍤",
    "priority": 6,
    "priceTier": "¥"
  },
  {
    "id": "japon-272",
    "tripId": "japon",
    "category": "Naturaleza",
    "subcategory": "Senderismo/Hikes",
    "title": "Mt. Takao",
    "description": "El más accesible — 1 hora desde Shinjuku vía Keio Line a Takaosanguchi, 2-3 horas ida y vuelta, vistas al Fuji en días claros. Muy popular (2.6M visitantes/año) — ir temprano o en semana",
    "location": "Mt. Takao, Hachioji, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Mt.%20Takao%2C%20Mt.%20Takao%2C%20Hachioji%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia",
    "rating": 5,
    "emoji": "🥾",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-273",
    "tripId": "japon",
    "category": "Naturaleza",
    "subcategory": "Senderismo/Hikes",
    "title": "Mt. Mitake (Okutama)",
    "description": "2 horas desde Tokio, teleférico hasta 929m, santuario Musashi Mitake — bueno para principiantes, hermoso en otoño",
    "location": "Mt. Mitake, Okutama, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Mt.%20Mitake%20(Okutama)%2C%20Mt.%20Mitake%2C%20Okutama%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia",
    "rating": 4,
    "emoji": "🥾",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-274",
    "tripId": "japon",
    "category": "Naturaleza",
    "subcategory": "Senderismo/Hikes",
    "title": "Mt. Mitake → Mt. Otake (extensión)",
    "description": "2-3 horas extra desde Mt. Mitake, pasa por las cataratas Ayahiro — nivel intermedio",
    "location": "Mt. Otake, Okutama, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Mt.%20Mitake%20%E2%86%92%20Mt.%20Otake%20(extensi%C3%B3n)%2C%20Mt.%20Otake%2C%20Okutama%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia",
    "rating": 4,
    "emoji": "🥾",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-275",
    "tripId": "japon",
    "category": "Naturaleza",
    "subcategory": "Senderismo/Hikes",
    "title": "Kamakura hiking trails",
    "description": "Red de senderos sobre los templos de Kamakura, 1 hora desde Tokio — forma alternativa de conectar los templos",
    "location": "Kamakura, Kanagawa",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kamakura%20hiking%20trails%2C%20Kamakura%2C%20Kanagawa",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia",
    "rating": 4,
    "emoji": "🥾",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-276",
    "tripId": "japon",
    "category": "Naturaleza",
    "subcategory": "Senderismo/Hikes",
    "title": "Mt. Nokogiriyama (Chiba)",
    "description": "Antigua cantera de piedra con un Buda de 31m tallado en la pared y el mirador \"Hell Lookout\" para fotos — loop de 3hrs/5km desde la estación Hama-Kanaya. También listado en Fuera de Tokio / Cerca de Tokio",
    "location": "Mt. Nokogiriyama, Chiba",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Mt.%20Nokogiriyama%20(Chiba)%2C%20Mt.%20Nokogiriyama%2C%20Chiba",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia",
    "rating": 4,
    "emoji": "🥾",
    "priority": 5,
    "priceTier": "¥"
  },
  {
    "id": "japon-277",
    "tripId": "japon",
    "category": "Naturaleza",
    "subcategory": "Onsen",
    "title": "Hakone",
    "description": "1.5hrs desde Tokio — onsen con vista al Fuji, lago Ashi en barco, museo de arte al aire libre, huevos negros de Owakudani. También listado en Fuera de Tokio / Cerca de Tokio",
    "location": "Hakone, Kanagawa",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hakone%2C%20Hakone%2C%20Kanagawa",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia",
    "rating": 5,
    "emoji": "♨️",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-278",
    "tripId": "japon",
    "category": "Naturaleza",
    "subcategory": "Onsen",
    "title": "Kusatsu Onsen",
    "description": "3hrs desde Tokio — yubatake icónico (canal de agua termal), mejor como overnight, presupuesto accesible",
    "location": "Kusatsu, Gunma",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kusatsu%20Onsen%2C%20Kusatsu%2C%20Gunma",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia",
    "rating": 4,
    "emoji": "♨️",
    "priority": 3,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-279",
    "tripId": "japon",
    "category": "Naturaleza",
    "subcategory": "Onsen",
    "title": "Hottarakashi Onsen",
    "description": "Vista al Fuji desde el baño al aire libre — espectacular al amanecer/atardecer, cielo estrellado de noche, 2hrs desde Tokio",
    "location": "Yamanashi",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hottarakashi%20Onsen%2C%20Yamanashi",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia",
    "rating": 5,
    "emoji": "♨️",
    "priority": 2,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-280",
    "tripId": "japon",
    "category": "Naturaleza",
    "subcategory": "Onsen",
    "title": "Oku Nikko Onsen",
    "description": "1200+ años de historia, menos de 3hrs desde Tokio, agua 100% natural en algunos spots — cerca de Nikko (ver también Fuera de Tokio / Cerca de Tokio)",
    "location": "Oku Nikko, Tochigi",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Oku%20Nikko%20Onsen%2C%20Oku%20Nikko%2C%20Tochigi",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia",
    "rating": 4,
    "emoji": "♨️",
    "priority": 4,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-281",
    "tripId": "japon",
    "category": "Naturaleza",
    "subcategory": "Parques y Jardines",
    "title": "Parques principales de Tokio",
    "description": "Los parques principales de Tokio están en sus distritos correspondientes (ver Tokio por Distrito) — esta sección es para naturaleza fuera de la ciudad.",
    "location": null,
    "mapsUrl": null,
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": null,
    "rating": null,
    "emoji": "📋",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-282",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Jiyugaoka",
    "title": "Mont Blanc (pastelería original)",
    "description": "La pastelería que inventó el mont blanc japonés en 1933 — sigue vendiendo el postre original en su tienda de Jiyugaoka",
    "location": "Jiyugaoka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Mont%20Blanc%20(pasteler%C3%ADa%20original)%2C%20Jiyugaoka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje",
    "rating": 4,
    "emoji": "🍰",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-283",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Daikanyama",
    "title": "Daikanyama T-SITE (Tsutaya Books)",
    "description": "Librería de diseño icónica — pabellones de cristal conectados por pasarelas, café Starbucks integrado, referencia de arquitectura/diseño japonés",
    "location": "Daikanyama, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Daikanyama%20T-SITE%20(Tsutaya%20Books)%2C%20Daikanyama%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje",
    "rating": 4,
    "emoji": "📚",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-284",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Kichijoji",
    "title": "Harmonica Yokocho",
    "description": "Callejón estrecho de bares y puestos diminutos cerca de la estación de Kichijoji — Inokashira Park y el Museo Ghibli (en Mitaka) están a poca distancia",
    "location": "Kichijoji, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Harmonica%20Yokocho%2C%20Kichijoji%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje",
    "rating": 4,
    "emoji": "🏮",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-285",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Yanaka",
    "title": "Yanaka Ginza",
    "description": "Calle comercial shitamachi llena de tiendas tradicionales y gatos sueltos — el corazón de \"Cat Town\", rodeada de más de 70 templos",
    "location": "Yanaka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Yanaka%20Ginza%2C%20Yanaka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje",
    "rating": 4,
    "emoji": "🐱",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-286",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shiba",
    "title": "Tokyo Tower",
    "description": "La torre roja y blanca icónica de 1958 — a 10 minutos caminando de tu apartamento, espectacular de noche",
    "location": "Shiba, Minato, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tokyo%20Tower%2C%20Shiba%2C%20Minato%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje",
    "rating": 5,
    "emoji": "🗼",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-287",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shiba",
    "title": "Zojoji Temple",
    "description": "Templo histórico de la familia Tokugawa justo bajo la Tokyo Tower — gran contraste fotográfico entre lo tradicional y lo moderno",
    "location": "Shiba, Minato, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Zojoji%20Temple%2C%20Shiba%2C%20Minato%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje",
    "rating": 4,
    "emoji": "🛕",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-288",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shiba",
    "title": "Shiba Park",
    "description": "Parque tranquilo junto a Zojoji y la Tokyo Tower, bueno para paseos cortos cerca de casa",
    "location": "Shiba, Minato, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shiba%20Park%2C%20Shiba%2C%20Minato%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje",
    "rating": 3,
    "emoji": "🌳",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-289",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Shiba",
    "title": "Supermercados 24h cerca de tu apartamento",
    "description": "Maruetsu Petit Mita y Life Musubu Tamachi — los dos súper 24h más cercanos al apartamento",
    "location": "Mita/Tamachi, Minato, Tokyo",
    "mapsUrl": null,
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje",
    "rating": null,
    "emoji": "🛒",
    "priority": 4,
    "priceTier": "¥"
  },
  {
    "id": "japon-290",
    "tripId": "japon",
    "category": "Tokio por Distrito",
    "subcategory": "Mita",
    "title": "Keio University Mita Campus",
    "description": "Campus histórico de Keio (conexión de pregrado) — tu campus real de posgrado es Hiyoshi, Yokohama, marcado por separado en el mapa",
    "location": "Mita, Minato, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Keio%20University%20Mita%20Campus%2C%20Mita%2C%20Minato%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje",
    "rating": 3,
    "emoji": "🎓",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-291",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Sushi",
    "title": "Sushi Saito",
    "description": "Extremadamente exclusivo — solo se consigue mesa por conexión/recomendación, no es reservable directamente. Mencionado por contexto, no como plan realista — ¥¥¥",
    "location": "Roppongi, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sushi%20Saito%2C%20Roppongi%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — críticos y blogs gastronómicos",
    "rating": 3,
    "emoji": "🍣",
    "priority": 7,
    "priceTier": "¥¥¥"
  },
  {
    "id": "japon-292",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Sushi",
    "title": "Tachiqui Sushi Akira",
    "description": "Barra de pie en Shinbashi — solo 6-7 lugares, menú que cambia diario, $60-90/persona — ¥¥",
    "location": "Shinbashi, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tachiqui%20Sushi%20Akira%2C%20Shinbashi%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — críticos y blogs gastronómicos",
    "rating": 4,
    "emoji": "🍣",
    "priority": 5,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-293",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Sushi",
    "title": "Sugita",
    "description": "Barra de ciprés de 9 asientos en Kakigaracho — omakase metódico, alta gama — ¥¥¥",
    "location": "Kakigaracho, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sugita%2C%20Kakigaracho%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — críticos y blogs gastronómicos",
    "rating": 4,
    "emoji": "🍣",
    "priority": 6,
    "priceTier": "¥¥¥"
  },
  {
    "id": "japon-294",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Ramen y Tsukemen",
    "title": "Tsuta",
    "description": "El primer ramen con estrella Michelin del mundo — creativo, con toques de trufa — ¥",
    "location": "Sugamo, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tsuta%2C%20Sugamo%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — críticos y blogs gastronómicos",
    "rating": 5,
    "emoji": "🍜",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-295",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Ramen y Tsukemen",
    "title": "Jun Teuchi Men to Mirai",
    "description": "Fideos mochi-mochi gruesos hechos a mano en Shimokitazawa — muy querido por locales, no por turistas — ¥",
    "location": "Shimokitazawa, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Jun%20Teuchi%20Men%20to%20Mirai%2C%20Shimokitazawa%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — críticos y blogs gastronómicos",
    "rating": 4,
    "emoji": "🍜",
    "priority": 7,
    "priceTier": "¥"
  },
  {
    "id": "japon-296",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Ramen y Tsukemen",
    "title": "Ramen Jiro (Mita, original)",
    "description": "La tienda original de la cadena de culto Ramen Jiro — porciones gigantes e intensas, no es para todos pero es de visita obligada para fans del ramen. Está en Mita, cerca de tu zona — ¥",
    "location": "Mita, Minato, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ramen%20Jiro%20(Mita%2C%20original)%2C%20Mita%2C%20Minato%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — críticos y blogs gastronómicos",
    "rating": 4,
    "emoji": "🍜",
    "priority": 8,
    "priceTier": "¥"
  },
  {
    "id": "japon-297",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Yakitori/Yakiniku/BBQ",
    "title": "Torishiki",
    "description": "Yakitori de alta gama en Ebisu — omakase de pollo, muy recomendado por críticos gastronómicos — ¥¥",
    "location": "Ebisu, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Torishiki%2C%20Ebisu%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — críticos y blogs gastronómicos",
    "rating": 4,
    "emoji": "🍢",
    "priority": 2,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-298",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Izakaya",
    "title": "Sankaku Chitai",
    "description": "Yokocho tradicional en Sangenjaya — ambiente nostálgico, mucho menos turístico que Omoide Yokocho — ¥",
    "location": "Sangenjaya, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sankaku%20Chitai%2C%20Sangenjaya%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — críticos y blogs gastronómicos",
    "rating": 4,
    "emoji": "🏮",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-299",
    "tripId": "japon",
    "category": "Restaurantes y Comida",
    "subcategory": "Café y Postres",
    "title": "Mont Blanc (Jiyugaoka)",
    "description": "La pastelería que inventó el mont blanc japonés en 1933 — también listado en Tokio por Distrito / Jiyugaoka — ¥",
    "location": "Jiyugaoka, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Mont%20Blanc%20(Jiyugaoka)%2C%20Jiyugaoka%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — críticos y blogs gastronómicos",
    "rating": 4,
    "emoji": "🍰",
    "priority": 1,
    "priceTier": "¥"
  },
  {
    "id": "japon-300",
    "tripId": "japon",
    "category": "Actividades y Experiencias",
    "subcategory": "Vistas y Atardeceres",
    "title": "Shibuya Sky",
    "description": "Mirador 360° desde la azotea de un rascacielos sobre Shibuya Crossing — mejor al atardecer, reservar con anticipación — ¥¥",
    "location": "Shibuya, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shibuya%20Sky%2C%20Shibuya%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — recomendaciones recurrentes de viajeros experimentados",
    "rating": 5,
    "emoji": "🌇",
    "priority": 1,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-301",
    "tripId": "japon",
    "category": "Actividades y Experiencias",
    "subcategory": "Vistas y Atardeceres",
    "title": "Mirador del Tokyo Metropolitan Government Building",
    "description": "Mirador GRATIS en Shinjuku — vistas casi tan buenas como el Skytree (que es de pago). También listado en Tokio por Distrito / Shinjuku — ¥ (gratis)",
    "location": "Shinjuku, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Mirador%20del%20Tokyo%20Metropolitan%20Government%20Building%2C%20Shinjuku%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — recomendaciones recurrentes de viajeros experimentados",
    "rating": 4,
    "emoji": "🏢",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-302",
    "tripId": "japon",
    "category": "Actividades y Experiencias",
    "subcategory": "Vistas y Atardeceres",
    "title": "Fotografía nocturna en Omoide Yokocho",
    "description": "No es exactamente una \"vista\", pero la fotografía nocturna en este callejón de Shinjuku es icónica — neones, vapor de los puestos de yakitori, ambiente. También listado en Hidden Gems — ¥ (gratis)",
    "location": "Shinjuku, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Fotograf%C3%ADa%20nocturna%20en%20Omoide%20Yokocho%2C%20Shinjuku%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — recomendaciones recurrentes de viajeros experimentados",
    "rating": 4,
    "emoji": "📸",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-303",
    "tripId": "japon",
    "category": "Actividades y Experiencias",
    "subcategory": "Experiencias culturales",
    "title": "Onsen/ryokan con yukata",
    "description": "Probar un onsen o ryokan con yukata (kimono casual) puesto — muchos onsen lo prestan, experiencia clásica japonesa — ¥¥",
    "location": null,
    "mapsUrl": null,
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — recomendaciones recurrentes de viajeros experimentados",
    "rating": 4,
    "emoji": "👘",
    "priority": 1,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-304",
    "tripId": "japon",
    "category": "Actividades y Experiencias",
    "subcategory": "Experiencias culturales",
    "title": "Ceremonia de té casual en Rakuutei",
    "description": "Rakuutei, la casa de té dentro de Shinjuku Gyoen, ofrece ceremonia de té casual sin reserva — manera fácil de probar la experiencia sin comprometerse a una ceremonia formal larga. También listado en Tokio por Distrito / Shinjuku (Shinjuku Gyoen) — ¥",
    "location": "Shinjuku Gyoen, Shinjuku, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ceremonia%20de%20t%C3%A9%20casual%20en%20Rakuutei%2C%20Shinjuku%20Gyoen%2C%20Shinjuku%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — recomendaciones recurrentes de viajeros experimentados",
    "rating": 4,
    "emoji": "🍵",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-305",
    "tripId": "japon",
    "category": "Actividades y Experiencias",
    "subcategory": "Experiencias culturales",
    "title": "Teatro Kabuki en Kabukiza",
    "description": "Pedir un bento y ver solo un acto (hay entradas de \"un acto\" sin comprometerse a la obra completa) — manera accesible de probar el kabuki. También listado en Tokio por Distrito / Ginza — ¥¥",
    "location": "Ginza, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Teatro%20Kabuki%20en%20Kabukiza%2C%20Ginza%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — recomendaciones recurrentes de viajeros experimentados",
    "rating": 4,
    "emoji": "🎭",
    "priority": 3,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-306",
    "tripId": "japon",
    "category": "Actividades y Experiencias",
    "subcategory": "Spots fotográficos / Instagram",
    "title": "Shibuya Crossing desde arriba (Shibuya Sky)",
    "description": "La toma clásica del cruce de Shibuya desde el mirador — también listado en Vistas y Atardeceres — ¥¥",
    "location": "Shibuya, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shibuya%20Crossing%20desde%20arriba%20(Shibuya%20Sky)%2C%20Shibuya%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — recomendaciones recurrentes de viajeros experimentados",
    "rating": 5,
    "emoji": "📸",
    "priority": 1,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-307",
    "tripId": "japon",
    "category": "Actividades y Experiencias",
    "subcategory": "Spots fotográficos / Instagram",
    "title": "Río Meguro en temporada de sakura",
    "description": "Cerezos iluminados de noche a lo largo del río en Nakameguro — uno de los spots de sakura más fotografiados de Tokio. También listado en Tokio por Distrito / Nakameguro — ¥ (gratis)",
    "location": "Nakameguro, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=R%C3%ADo%20Meguro%20en%20temporada%20de%20sakura%2C%20Nakameguro%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — recomendaciones recurrentes de viajeros experimentados",
    "rating": 5,
    "emoji": "🌸",
    "priority": 2,
    "priceTier": "¥"
  },
  {
    "id": "japon-308",
    "tripId": "japon",
    "category": "Actividades y Experiencias",
    "subcategory": "Spots fotográficos / Instagram",
    "title": "Senso-ji + Skytree desde Sumida Park",
    "description": "La combinación clásica: el templo Senso-ji en primer plano y el Tokyo Skytree de fondo, vista desde Sumida Park al otro lado del río — ¥ (gratis)",
    "location": "Sumida Park, Asakusa, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Senso-ji%20%2B%20Skytree%20desde%20Sumida%20Park%2C%20Sumida%20Park%2C%20Asakusa%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — recomendaciones recurrentes de viajeros experimentados",
    "rating": 5,
    "emoji": "📸",
    "priority": 3,
    "priceTier": "¥"
  },
  {
    "id": "japon-309",
    "tripId": "japon",
    "category": "Actividades y Experiencias",
    "subcategory": "Spots fotográficos / Instagram",
    "title": "teamLab Borderless/Planets",
    "description": "Arte inmersivo altamente instagrameable — también listado en Tokio por Distrito / Odaiba — ¥¥",
    "location": "Odaiba, Tokyo",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=teamLab%20Borderless%2FPlanets%2C%20Odaiba%2C%20Tokyo",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — recomendaciones recurrentes de viajeros experimentados",
    "rating": 5,
    "emoji": "💡",
    "priority": 4,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-310",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Esquí",
    "title": "Niseko",
    "description": "El destino de esquí más internacional de Japón — polvo profundo consistente, vida nocturna activa en Hirafu, caro pero la opción más fácil para primera vez. Temporada: finales nov-principios mayo — ¥¥¥",
    "location": "Niseko, Hokkaido",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Niseko%2C%20Niseko%2C%20Hokkaido",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje y bloggers especializados",
    "rating": 5,
    "emoji": "🎿",
    "priority": 1,
    "priceTier": "¥¥¥"
  },
  {
    "id": "japon-311",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Esquí",
    "title": "Hakuba Valley",
    "description": "2.5hrs en tren bala desde Tokio — 10 resorts conectados, terreno más variado/avanzado que Niseko, mejor precio, se siente más \"Japón auténtico\". Buena opción de día/fin de semana desde Tokio — ¥¥",
    "location": "Hakuba, Nagano",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hakuba%20Valley%2C%20Hakuba%2C%20Nagano",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje y bloggers especializados",
    "rating": 5,
    "emoji": "🎿",
    "priority": 2,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-312",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Esquí",
    "title": "Nozawa Onsen",
    "description": "Pueblo de esquí con pueblo de onsen real integrado — festival del fuego el 15 de enero, ambiente más tradicional que Hakuba/Niseko — ¥¥",
    "location": "Nozawa Onsen, Nagano",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Nozawa%20Onsen%2C%20Nozawa%20Onsen%2C%20Nagano",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje y bloggers especializados",
    "rating": 4,
    "emoji": "⛷️",
    "priority": 3,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-313",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Esquí",
    "title": "Myoko Kogen",
    "description": "Hidden gem — nieve profundísima, mucho menos internacional que Hakuba, sensación más auténtica — ¥¥",
    "location": "Myoko, Nagano/Niigata",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Myoko%20Kogen%2C%20Myoko%2C%20Nagano%2FNiigata",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje y bloggers especializados",
    "rating": 4,
    "emoji": "🎿",
    "priority": 4,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-314",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Buceo",
    "title": "Okinawa / Islas Kerama",
    "description": "La mejor opción de buceo en Japón — agua cálida todo el año, coral sano, mantarrayas en Ishigaki. Certificación PADI/SSI 3-4 días ~¥60,000-100,000. Mejor época: primavera-otoño — ¥¥",
    "location": "Islas Kerama, Okinawa",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Okinawa%20%2F%20Islas%20Kerama%2C%20Islas%20Kerama%2C%20Okinawa",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje y bloggers especializados",
    "rating": 5,
    "emoji": "🤿",
    "priority": 1,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-315",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Buceo",
    "title": "Ishigaki (buceo)",
    "description": "400km al suroeste de Okinawa — una de las mejores zonas del mundo para buceo con mantarrayas salvajes, visibles desde 6-7m de profundidad. También listado en Okinawa (visión general de la isla) — ¥¥¥",
    "location": "Ishigaki, Okinawa",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ishigaki%20(buceo)%2C%20Ishigaki%2C%20Okinawa",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje y bloggers especializados",
    "rating": 5,
    "emoji": "🐠",
    "priority": 2,
    "priceTier": "¥¥¥"
  },
  {
    "id": "japon-316",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Buceo",
    "title": "Izu Peninsula",
    "description": "Opción de buceo más cercana a Tokio (2-3hrs) — agua más fría, buena para certificarse sin volar tan lejos, pero entrenamiento más difícil que Okinawa — ¥¥",
    "location": "Izu Peninsula, Shizuoka",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Izu%20Peninsula%2C%20Izu%20Peninsula%2C%20Shizuoka",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje y bloggers especializados",
    "rating": 3,
    "emoji": "🤿",
    "priority": 3,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-317",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Fuera de lo común",
    "title": "Shikoku (Valle de Iya)",
    "description": "Puente de enredaderas colgante, paisajes remotos, peregrinación de 88 templos — mucho menos turístico que Honshu. Requiere auto/transporte privado — ¥¥",
    "location": "Valle de Iya, Tokushima",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Shikoku%20(Valle%20de%20Iya)%2C%20Valle%20de%20Iya%2C%20Tokushima",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje y bloggers especializados",
    "rating": 5,
    "emoji": "🌉",
    "priority": 1,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-318",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Fuera de lo común",
    "title": "Naoshima (\"Isla del Arte\")",
    "description": "Calabazas de Yayoi Kusama, museos de arte contemporáneo diseñados por Tadao Ando — day trip desde Okayama — ¥¥",
    "location": "Naoshima, Kagawa",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Naoshima%20(%22Isla%20del%20Arte%22)%2C%20Naoshima%2C%20Kagawa",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje y bloggers especializados",
    "rating": 5,
    "emoji": "🎨",
    "priority": 2,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-319",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Fuera de lo común",
    "title": "Tohoku (Sendai/Matsushima/Ginzan Onsen)",
    "description": "Región menos visitada — Matsushima Bay es una de las 3 vistas más bellas de Japón, Ginzan Onsen inspiró escenarios de Ghibli, mucho menos turismo que Kansai/Kanto — ¥¥",
    "location": "Tohoku (Sendai/Matsushima/Yamagata)",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tohoku%20(Sendai%2FMatsushima%2FGinzan%20Onsen)%2C%20Tohoku%20(Sendai%2FMatsushima%2FYamagata)",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje y bloggers especializados",
    "rating": 4,
    "emoji": "🏔️",
    "priority": 3,
    "priceTier": "¥¥"
  },
  {
    "id": "japon-320",
    "tripId": "japon",
    "category": "Fuera de Tokio (Japón)",
    "subcategory": "Fuera de lo común",
    "title": "Hakodate",
    "description": "Mercado matutino, vistas nocturnas top 3 de Japón, onsen Yunokawa, fuerte en mariscos — ¥¥",
    "location": "Hakodate, Hokkaido",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Hakodate%2C%20Hakodate%2C%20Hokkaido",
    "tiktokUrl": null,
    "contacto": {
      "contactName": null,
      "contactPhone": null
    },
    "done": false,
    "pdfUrl": null,
    "source": "Investigación propia — cross-referencia de guías de viaje y bloggers especializados",
    "rating": 4,
    "emoji": "🦑",
    "priority": 4,
    "priceTier": "¥¥"
  }
];

export const TOKYO_DISTRICT_SUMMARIES = [
  {
    "name": "Asakusa",
    "photo": "https://images.unsplash.com/photo-1664716083755-1333cdc24fd0?q=80&w=600&auto=format&fit=crop",
    "emoji": "🏯",
    "theme": "Histórico / Tradicional",
    "description": "Shitamachi auténtico, templos, el más fotogénico de noche, base económica.",
    "budget": "Económico",
    "bestFor": "Cultura"
  },
  {
    "name": "Shibuya",
    "photo": "https://images.unsplash.com/photo-1532274804934-6572ef1581e9?q=80&w=600&auto=format&fit=crop",
    "emoji": "🛍️",
    "theme": "Moda joven / Energía",
    "description": "Cruce icónico, tendencias, vida nocturna.",
    "budget": "Medio",
    "bestFor": "Compras"
  },
  {
    "name": "Shinjuku",
    "photo": "https://images.unsplash.com/photo-1531164442814-c81a813fd9a4?q=80&w=600&auto=format&fit=crop",
    "emoji": "🌃",
    "theme": "Vida nocturna / Conveniencia",
    "description": "Estación más grande del mundo, Golden Gai, Kabukicho, muy bien conectado.",
    "budget": "Medio",
    "bestFor": "Vida nocturna"
  },
  {
    "name": "Harajuku",
    "photo": "https://images.unsplash.com/photo-1774660012462-d5d94b30fadf?q=80&w=600&auto=format&fit=crop",
    "emoji": "👗",
    "theme": "Moda alternativa",
    "description": "Takeshita Street, Meiji Shrine al lado, mejor de día.",
    "budget": "Medio",
    "bestFor": "Compras"
  },
  {
    "name": "Ginza",
    "photo": "https://images.unsplash.com/photo-1560360482-d5588f13d530?q=80&w=600&auto=format&fit=crop",
    "emoji": "💎",
    "theme": "Lujo / Compras",
    "description": "Tiendas de alta gama, arquitectura europea, caro.",
    "budget": "Caro",
    "bestFor": "Compras"
  },
  {
    "name": "Akihabara",
    "photo": "https://images.unsplash.com/photo-1683995259187-54142c49338b?q=80&w=600&auto=format&fit=crop",
    "emoji": "🎮",
    "theme": "Otaku / Tecnología",
    "description": "Anime, electrónicos, maid cafes.",
    "budget": "Medio",
    "bestFor": "Cultura"
  },
  {
    "name": "Ueno",
    "photo": "https://images.unsplash.com/photo-1584443800406-b3be34385344?q=80&w=600&auto=format&fit=crop",
    "emoji": "🏛️",
    "theme": "Museos / Cultura",
    "description": "Parque grande, museos, económico.",
    "budget": "Económico",
    "bestFor": "Cultura"
  },
  {
    "name": "Ikebukuro",
    "photo": "https://images.unsplash.com/photo-1763530054615-08f3acd38876?q=80&w=600&auto=format&fit=crop",
    "emoji": "🎯",
    "theme": "Mix urbano",
    "description": "Menos turístico, buena vida nocturna local.",
    "budget": "Económico",
    "bestFor": "Vida nocturna"
  },
  {
    "name": "Odaiba",
    "photo": "https://images.unsplash.com/photo-1567597714138-3bdc30f4f493?q=80&w=600&auto=format&fit=crop",
    "emoji": "🌉",
    "theme": "Moderno / Futurista",
    "description": "TeamLab, vistas al puente, isla artificial.",
    "budget": "Medio",
    "bestFor": "Arte"
  },
  {
    "name": "Chiyoda",
    "photo": "https://images.unsplash.com/photo-1715905680339-6958d7632430?q=80&w=600&auto=format&fit=crop",
    "emoji": "👑",
    "theme": "Gubernamental / Histórico",
    "description": "Palacio Imperial, jardines.",
    "budget": "Económico",
    "bestFor": "Cultura"
  },
  {
    "name": "Jiyugaoka",
    "emoji": "🇫🇷",
    "theme": "\"La Pequeña Europa de Tokio\"",
    "description": "Boutiques, reposterías artesanales (cuna del mont blanc japonés desde 1933), calles arboladas, ambiente relajado y fotogénico.",
    "budget": "Medio",
    "bestFor": "Postres"
  },
  {
    "name": "Nakameguro",
    "emoji": "🌸",
    "theme": "Río y moda",
    "description": "Paseo junto al río Meguro, icónico en sakura (marzo-abril), boutiques de moda, Starbucks Reserve Roastery Tokyo (el más grande del mundo).",
    "budget": "Medio",
    "bestFor": "Fotografía"
  },
  {
    "name": "Daikanyama",
    "emoji": "🏙️",
    "theme": "\"La Pequeña Brooklyn de Tokio\"",
    "description": "Boutiques de diseño, galerías de arte, cafés sofisticados, justo al lado de Shibuya.",
    "budget": "Medio",
    "bestFor": "Compras"
  },
  {
    "name": "Shimokitazawa",
    "emoji": "🎸",
    "theme": "Capital indie de Tokio",
    "description": "\"Shimokita\" — ropa vintage, teatro fringe activo desde los 80s, música en vivo, ambiente bohemio.",
    "budget": "Económico",
    "bestFor": "Vida nocturna"
  },
  {
    "name": "Kichijoji",
    "emoji": "🌳",
    "theme": "El más habitable de Tokio",
    "description": "Inokashira Park, Museo Ghibli cerca (en Mitaka), Harmonica Yokocho (callejón de bares) — consistentemente votado el lugar más habitable de Tokio.",
    "budget": "Medio",
    "bestFor": "Cultura"
  },
  {
    "name": "Yanaka",
    "emoji": "🏘️",
    "theme": "Shitamachi auténtico / \"Cat Town\"",
    "description": "Uno de los pocos barrios que sobrevivió la Segunda Guerra Mundial intacto — más de 70 templos, conocido como \"Cat Town\".",
    "budget": "Económico",
    "bestFor": "Cultura"
  },
  {
    "name": "Sangenjaya",
    "emoji": "🍺",
    "theme": "Nostálgico y local",
    "description": "Izakayas acogedoras, cafés retro, ambiente nostálgico — menos turístico que sus vecinos.",
    "budget": "Económico",
    "bestFor": "Vida nocturna"
  },
  {
    "name": "Shiba",
    "emoji": "🏠",
    "theme": "Tu zona",
    "description": "Tu apartamento está aquí, cerca de Tamachi/Mita Station. Zona de negocios con calma residencial — Tokyo Tower y Zojoji Temple a 10 min caminando, Shiba Park para paseos, supermercados 24h cerca. Tranquilo de noche, bien conectado (9 min a Tokyo Station, Shinagawa una parada).",
    "budget": "Medio",
    "bestFor": "🏠 Tu zona"
  },
  {
    "name": "Mita",
    "emoji": "🎓",
    "theme": "Campus y residencial",
    "description": "Keio Mita Campus está aquí (tu campus de posgrado real es Hiyoshi, Yokohama — ya marcado en el mapa). Zona residencial tranquila; el Ramen Jiro original está aquí.",
    "budget": "Económico",
    "bestFor": "Cultura"
  }
];

// ── Per-subcategory note shown once at the top of the expanded panel.
export const JAPAN_SUBCATEGORY_NOTES = {
  "Kagurazaka (zona de joyas escondidas)": "📍 Una de las mejores zonas de Tokio para descubrir restaurantes escondidos — explora varias noches, hay demasiados lugares buenos para un solo recorrido.",
  "Izakaya": "🏮 Omoide Yokocho (el cluster de izakayas más icónico de Tokio) está listado en Hidden Gems, no aquí, para no duplicar.",
  "Café y Postres": "🍰 Jiyugaoka es considerado la meca de postres de Tokio — vale la pena explorar todas sus calles, no solo el ítem listado aquí."
};
