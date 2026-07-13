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
    endDate: "2026-08-17",
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
  },
  {
    id: "barcelona",
    name: "Barcelona",
    type: "ideas",
    startDate: null,
    endDate: null,
    viewMode: "categories",
    photoUrl: "https://images.unsplash.com/photo-1579127499243-5a4e2d01b786?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "viajes",
    name: "Viajes",
    type: "wedding",
    startDate: "2026-11-24",
    endDate: "2026-12-01",
    viewMode: "itinerary",
    photoUrl: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?q=80&w=1600&auto=format&fit=crop"
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
    date: "29 agosto, sábado", city: "Komodo → Bali (Kuta)", time: "Mañana",
    title: "Kelor Island short trek + beach",
    description: "", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kelor%20Island%2C%20Komodo%20National%20Park%2C%20Indonesia", pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-1", tripId: "honeymoon-indonesia", day: 12, order: 1, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Kuta)", time: "Mañana",
    title: "Manjarite Island snorkel",
    description: "", mapsUrl: null, pdfUrl: null, type: "aventura",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-2", tripId: "honeymoon-indonesia", day: 12, order: 2, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Kuta)", time: "12:00-13:00",
    title: "Return to Labuan Bajo (disembark)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-3", tripId: "honeymoon-indonesia", day: 12, order: 3, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Kuta)", time: "13:00",
    title: "Quick lunch / transfer to airport",
    description: "", mapsUrl: null, pdfUrl: null, type: "comida",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-4", tripId: "honeymoon-indonesia", day: 12, order: 4, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Kuta)", time: "15:30",
    title: "Check-in LBJ Airport",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-5", tripId: "honeymoon-indonesia", day: 12, order: 5, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Kuta)", time: "17:25",
    title: "Flight LBJ → DPS (AirAsia QZ649)",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-6", tripId: "honeymoon-indonesia", day: 12, order: 6, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Kuta)", time: "18:35",
    title: "Arrive DPS",
    description: "", mapsUrl: null, pdfUrl: null, type: "transporte",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-7", tripId: "honeymoon-indonesia", day: 12, order: 7, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Kuta)", time: "19:00-20:00",
    title: "Check-in Amnaya Resort Kuta",
    description: "Ventana de llegada aprobada: 19:00–20:00. Check-in desde las 15:00. Parking incluido.", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Amnaya+Resort+Kuta+Jl+Kartika+Plaza+Bali", pdfUrl: null, type: "hotel",
    contacto: { contactName: null, contactPhone: null }
  },
  {
    id: "d12-8", tripId: "honeymoon-indonesia", day: 12, order: 8, done: false,
    date: "29 agosto, sábado", city: "Komodo → Bali (Kuta)", time: "20:30",
    title: "Dinner in Kuta area (última noche en Bali)",
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
    title: "Drive to DPS (15-20 min from Kuta)",
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
  "Bali":              { emoji: "🌴", color: "#2C6E49", days: [6, 7, 8], photo: "https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=600&auto=format&fit=crop" },
  "Komodo":            { emoji: "🐉", color: "#0E7490", days: [9, 10, 11], photo: "https://images.unsplash.com/photo-1533339577339-9007cb316e9c?q=80&w=600&auto=format&fit=crop" },
  "Bali - Kuta":       { emoji: "🌅", color: "#C17F59", days: [12], photo: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop" },
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
  "accom-7": "Bali - Kuta",
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
  "flight-3": "Bali - Kuta",
  "flight-4a": "Singapur",
  "flight-4b": "Tokio"
};

// ── Boda México — destination metadata ──────────────────────────
export const BODA_CITY_INFO = {
  "Cancún":                   { emoji: "🏖️", color: "#0E7490", days: [1], photo: "https://images.unsplash.com/photo-1457537227909-08f41319e53c?q=80&w=600&auto=format&fit=crop" },
  "Tulum":                    { emoji: "🌴", color: "#C4793A", days: [2, 3, 4, 5], photo: "https://images.unsplash.com/photo-1664205543898-829ef8baa7ad?q=80&w=600&auto=format&fit=crop" },
  "Tulum (Boda)":             { emoji: "💍", color: "#DB2777", days: [6, 7, 8, 9], photo: "https://images.unsplash.com/photo-1740880978174-db9dddf6c58c?q=80&w=600&auto=format&fit=crop" },
  "Monterrey":               { emoji: "👨‍👩‍👧", color: "#2C6E49", days: [10], photo: "https://images.unsplash.com/photo-1600466892203-d84aae0aa4c1?q=80&w=600&auto=format&fit=crop" },
  "Ciudad Victoria":         { emoji: "🏡", color: "#2C6E49", days: [11, 12, 13, 14], photo: "https://images.unsplash.com/photo-1600466892203-d84aae0aa4c1?q=80&w=600&auto=format&fit=crop" },
  "Querétaro":                { emoji: "🏡", color: "#7B5EA7", days: [15, 16, 17, 18, 19], photo: "https://images.unsplash.com/photo-1636300958497-42e3df244288?q=80&w=600&auto=format&fit=crop" }
};

export const BODA_FLIGHT_CITY_MAP = {
  "boda-flight-3": "Monterrey",
  "boda-flight-4": "Querétaro"
};

export const BODA_ACCOM_CITY_MAP = {
  "boda-accom-1": "Cancún",
  "boda-accom-2": "Tulum",
  "boda-accom-3": "Tulum (Boda)",
  "boda-accom-4": "Monterrey",
  "boda-accom-5": "Querétaro"
};

// ── Viajes — Cancún Boda Yamile ─────────────────────────────────
export const VIAJES_CITY_INFO = {
  "Tokio → Cancún": { emoji: "✈️", color: "#0E7490", days: [1], photo: null },
  "Riviera Maya":   { emoji: "🌊", color: "#C4860A", days: [2, 3, 4, 5, 6, 7, 8], photo: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?q=80&w=600&auto=format&fit=crop" }
};
export const VIAJES_ACCOM_CITY_MAP = {
  "viajes-accom-1": "Riviera Maya"
};
export const VIAJES_TOUR_CITY_MAP = {};
export const VIAJES_FLIGHT_CITY_MAP = {
  "viajes-flight-1": "Tokio → Cancún",
  "viajes-flight-2": "Tokio → Cancún",
  "viajes-flight-3": "Riviera Maya",
  "viajes-flight-4": "Riviera Maya"
};

// ── Per-trip lookups — index.html uses these instead of hardcoding
// CITY_INFO/ACCOM_CITY_MAP/TOUR_CITY_MAP to a single trip. A trip with
// no entry here (e.g. "japon", viewMode "categories") falls back to a
// single Resumen tab with no destination breakdown.
export const DESTINATIONS_BY_TRIP = {
  "honeymoon-indonesia": CITY_INFO,
  "boda-mexico": BODA_CITY_INFO,
  "viajes": VIAJES_CITY_INFO
};
export const ACCOM_CITY_MAP_BY_TRIP = {
  "honeymoon-indonesia": ACCOM_CITY_MAP,
  "boda-mexico": BODA_ACCOM_CITY_MAP,
  "viajes": VIAJES_ACCOM_CITY_MAP
};
export const TOUR_CITY_MAP_BY_TRIP = {
  "honeymoon-indonesia": TOUR_CITY_MAP,
  "boda-mexico": {},
  "viajes": VIAJES_TOUR_CITY_MAP
};
export const FLIGHT_CITY_MAP_BY_TRIP = {
  "honeymoon-indonesia": FLIGHT_CITY_MAP,
  "boda-mexico": BODA_FLIGHT_CITY_MAP,
  "viajes": VIAJES_FLIGHT_CITY_MAP
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
    "totalNights": 1,
    "name": "Amnaya Resort Kuta",
    "type": "resort",
    "address": "Jl. Kartika Plaza, Gang Puspa Ayu No. 99, 80361 Kuta, Indonesia",
    "phone": "+62 895 4296 66000",
    "region": "Kuta",
    "province": "Bali",
    "country": "Indonesia",
    "room": "Deluxe Double or Twin Room",
    "guests": "Nagib Gobera, 2 adults, 1 night",
    "mealPlan": "Breakfast included",
    "bookingId": "6124064092",
    "pinCode": "7969",
    "status": "confirmed",
    "statusNote": "Reservado en Booking.com. Check-in aprobado 19:00–20:00. Cancelación gratuita hasta 7 ago 2026.",
    "bookedVia": "Booking.com",
    "cost": 80,
    "costCurrency": "EUR",
    "cancellationPolicy": "Free until Aug 7 2026, non-refundable after",
    "notes": "Parking incluido. Non-smoking. Balcón. Muy cerca del aeropuerto DPS — ideal para salida 11:20am del día siguiente. Check-out antes de las 12:00.",
    "pdfUrl": null,
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Amnaya+Resort+Kuta+Jl+Kartika+Plaza+Gang+Puspa+Ayu+No+99+Kuta+Bali"
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
    "summary": "Desembarque en Labuan Bajo + vuelo LBJ→DPS + última noche en Bali (Kuta)",
    "recommendations": "Confirmar con la tripulación la hora exacta de desembarque la noche anterior. Hotel Amnaya Resort Kuta está muy cerca del aeropuerto — ideal para la salida temprana del día siguiente.",
    "criticalNote": "Última noche en Bali — hotel cerca del aeropuerto, ideal para salida temprana mañana. Check-out antes de las 12:00 para llegar al aeropuerto a tiempo. Desayuno incluido. Vuelo DPS→SIN sale 11:20am."
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
    "id": "boda-d10-3",
    "tripId": "boda-mexico",
    "day": 10,
    "order": 3,
    "done": false,
    "date": "8 agosto, sábado",
    "city": "Tulum → Monterrey",
    "time": "",
    "title": "Traslado terrestre MTY → Cd. Victoria (pendiente, ~4h)",
    "description": "Traslado en auto desde el Aeropuerto de Monterrey hasta Ciudad Victoria — aprox. 4 horas. Pendiente de reservar.",
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
    "id": "boda-d11-0",
    "tripId": "boda-mexico",
    "day": 11,
    "order": 0,
    "done": false,
    "date": "9 agosto, domingo",
    "city": "Ciudad Victoria",
    "time": "",
    "title": "Día en familia en Casa de la mamá de Mar",
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
    "city": "Ciudad Victoria",
    "time": "",
    "title": "Día en familia en Casa de la mamá de Mar",
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
    "id": "boda-d13-0",
    "tripId": "boda-mexico",
    "day": 13,
    "order": 0,
    "done": false,
    "date": "11 agosto, martes",
    "city": "Ciudad Victoria",
    "time": "",
    "title": "Día en familia en Casa de la mamá de Mar",
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
    "city": "Ciudad Victoria",
    "time": "",
    "title": "Día en familia en Casa de la mamá de Mar",
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
    "id": "boda-d15-ground",
    "tripId": "boda-mexico",
    "day": 15,
    "order": 0,
    "done": false,
    "date": "13 agosto, jueves",
    "city": "Ciudad Victoria → Querétaro",
    "time": "",
    "title": "Traslado terrestre Cd. Victoria → Aeropuerto MTY (pendiente, ~4h)",
    "description": "Salida de Cd. Victoria hacia el Aeropuerto Internacional de Monterrey — aprox. 4 horas. Pendiente de reservar. Necesario llegar con tiempo antes del vuelo VB4208 a las 21:15.",
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
    "order": 1,
    "done": false,
    "date": "13 agosto, jueves",
    "city": "Ciudad Victoria → Querétaro",
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
    "order": 2,
    "done": false,
    "date": "13 agosto, jueves",
    "city": "Ciudad Victoria → Querétaro",
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
  },
  {
    "id": "boda-d16-0",
    "tripId": "boda-mexico",
    "day": 16,
    "order": 0,
    "done": false,
    "date": "14 agosto, viernes",
    "city": "Querétaro",
    "time": "",
    "title": "Día en familia en casa de los papás de Nagib",
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
    "id": "boda-d17-0",
    "tripId": "boda-mexico",
    "day": 17,
    "order": 0,
    "done": false,
    "date": "15 agosto, sábado",
    "city": "Querétaro",
    "time": "",
    "title": "Día en familia en casa de los papás de Nagib",
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
    "id": "boda-d18-0",
    "tripId": "boda-mexico",
    "day": 18,
    "order": 0,
    "done": false,
    "date": "16 agosto, domingo",
    "city": "Querétaro",
    "time": "",
    "title": "Día en familia en casa de los papás de Nagib",
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
    "id": "boda-d19-0",
    "tripId": "boda-mexico",
    "day": 19,
    "order": 0,
    "done": false,
    "date": "17 agosto, lunes",
    "city": "Querétaro",
    "time": "",
    "title": "Último día en Querétaro con la familia",
    "description": "",
    "mapsUrl": null,
    "pdfUrl": null,
    "type": "libre",
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

// ═══════════════════════════════════════════════════════
// BARCELONA
// ═══════════════════════════════════════════════════════

export const BARCELONA_CATEGORIES = [
  'Barcelona por Barrio',
  'Fuera de Barcelona',
  'Actividades y Experiencias',
  'Eventos'
];

export const BARCELONA_SUBCATEGORY_ORDER = {
  'Barcelona por Barrio': [
    'Gaudí y Modernismo',
    'Gòtic/Born/Raval',
    'Gràcia',
    'Eixample',
    'Sarrià-Sant Gervasi/Pedralbes',
    'Playa/Frente Marítimo',
    'Montjuïc/Sants',
    'Alta Cocina/Michelin',
    'Restaurantes y Bares Escondidos',
    'Mercados y Cultura Gastronómica',
    'Miradores y Naturaleza Urbana'
  ],
  'Fuera de Barcelona': [
    'Clásicos cercanos',
    'Costa Brava',
    'Cadaqués y Alrededores',
    'Cerdanya y Pirineos',
    'Hacia Valencia',
    'Valencia'
  ],
  'Actividades y Experiencias': [
    'Deportes y Aventura',
    'Vida Nocturna',
    'Cultural y Curioso',
    'Experiencias Gastronómicas',
    'Spots Instagram/Fotografía',
    'Transporte y Vistas Únicas'
  ],
  'Eventos': [
    'Julio 2026',
    'Enero-Junio 2027'
  ]
};

export const BARCELONA_ITEMS_DATA = [
  // ── Gaudí y Modernismo (bcn-001 – bcn-008) ──────────────────
  { id: "bcn-001", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gaudí y Modernismo", title: "Sagrada Família", description: "Torre de Jesucristo completada 2026. Reservar online con antelación — sin filas.", rating: 5, priceTier: "€€€", emoji: "⛪", done: false, priority: "alta", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-002", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gaudí y Modernismo", title: "Park Güell", description: "Mosaicos y terraza panorámica. Ir temprano (8am) para evitar multitudes.", rating: 5, priceTier: "€€", emoji: "🌈", done: false, priority: "alta", location: "Gràcia", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-003", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gaudí y Modernismo", title: "Casa Batlló", description: "Magic Nights nocturno espectacular con proyecciones. Reservar con antelación.", rating: 5, priceTier: "€€€", emoji: "🦎", done: false, priority: "alta", location: "Passeig de Gràcia", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-004", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gaudí y Modernismo", title: "La Pedrera / Casa Milà", description: "Azotea con esculturas de guerreros. Night Experience también disponible.", rating: 5, priceTier: "€€€", emoji: "🏛️", done: false, priority: "alta", location: "Passeig de Gràcia", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-005", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gaudí y Modernismo", title: "Casa Vicens", description: "Primera obra residencial de Gaudí. Menos masificada que las otras — joya escondida.", rating: 4, priceTier: "€€", emoji: "🏠", done: false, priority: "media", location: "Gràcia", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-006", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gaudí y Modernismo", title: "Palau Güell", description: "Interior impresionante, terrazas con chimeneas decoradas. Menos conocido.", rating: 4, priceTier: "€€", emoji: "🏰", done: false, priority: "media", location: "Raval", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-007", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gaudí y Modernismo", title: "Recinte Modernista Sant Pau", description: "Hospital modernista UNESCO. Extraordinario — posiblemente más impresionante que la Sagrada Família desde dentro.", rating: 5, priceTier: "€€", emoji: "🌺", done: false, priority: "alta", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-008", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gaudí y Modernismo", title: "Colònia Güell", description: "Pueblo industrial utópico diseñado por Gaudí. Cripta inacabada, auténtico y sin turistas.", rating: 3, priceTier: "€€", emoji: "🏘️", done: false, priority: "baja", location: "Santa Coloma de Cervelló", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Gòtic/Born/Raval (bcn-009 – bcn-020) ───────────────────
  { id: "bcn-009", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gòtic/Born/Raval", title: "Museu Picasso", description: "Colección cronológica en cinco palacios medievales. Especialmente impresionante la serie Las Meninas.", rating: 5, priceTier: "€€", emoji: "🎨", done: false, priority: "alta", location: "Born", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-010", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gòtic/Born/Raval", title: "Santa Maria del Mar", description: "Basílica gótica del siglo XIV. Perfecta, construida por el pueblo. Gratis. Mejor por la mañana con luz.", rating: 5, priceTier: "€", emoji: "⛪", done: false, priority: "alta", location: "Born", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-011", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gòtic/Born/Raval", title: "Plaça Reial", description: "Plaza porticada con restaurantes y bares. Farolas diseñadas por Gaudí joven.", rating: 4, priceTier: "€", emoji: "🏛️", done: false, priority: "media", location: "Gòtic", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-012", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gòtic/Born/Raval", title: "Mercat Santa Caterina", description: "Mercado modernista con techo de mosaico ondulado. Alternativa local a la Boqueria.", rating: 4, priceTier: "€", emoji: "🛒", done: false, priority: "media", location: "Sant Pere", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-013", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gòtic/Born/Raval", title: "Museu de la Xocolata", description: "Museo del chocolate con esculturas de cacao comestibles. Divertido en pareja.", rating: 3, priceTier: "€", emoji: "🍫", done: false, priority: "baja", location: "Born", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-014", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gòtic/Born/Raval", title: "Antic Teatre", description: "Patio jardín escondido con bar. Joya total — una de las terrazas secretas más bonitas de Barcelona.", rating: 4, priceTier: "€", emoji: "🌿", done: false, priority: "media", location: "Sant Pere", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-015", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gòtic/Born/Raval", title: "Catedral de Barcelona", description: "Catedral gótica con 13 ocas en el claustro. Torre accesible con vistas. Gratis por la mañana.", rating: 4, priceTier: "€", emoji: "⛪", done: false, priority: "media", location: "Gòtic", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-016", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gòtic/Born/Raval", title: "El Call (Barrio Judío)", description: "Barrio judío medieval con callejuelas medievales. Museu d'Història de Catalunya dentro.", rating: 4, priceTier: "€", emoji: "✡️", done: false, priority: "media", location: "Gòtic", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-017", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gòtic/Born/Raval", title: "Puente Carrer del Bisbe", description: "Puente neogótico fotogénico sobre la calle medieval. Foto imprescindible del Gòtic.", rating: 4, priceTier: "€", emoji: "🌉", done: false, priority: "media", location: "Gòtic", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-018", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gòtic/Born/Raval", title: "Plaça del Pi", description: "Plaza tranquila con iglesia gótica de Santa Maria del Pi. Mercadillo artesanal los fines de semana.", rating: 3, priceTier: "€", emoji: "🌳", done: false, priority: "baja", location: "Gòtic", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-019", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gòtic/Born/Raval", title: "Mercat de la Boqueria", description: "Mercado icónico de Las Ramblas. Llegar temprano (8-9am) para ver a los chefs comprando — evitar puestos de cortes de fruta en la entrada (trampa turística).", rating: 5, priceTier: "€", emoji: "🥩", done: false, priority: "alta", location: "Raval", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-020", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gòtic/Born/Raval", title: "MACBA", description: "Museo de Arte Contemporáneo en edificio Meier. Buena colección; plaza famosa por skaters.", rating: 3, priceTier: "€", emoji: "🖼️", done: false, priority: "baja", location: "Raval", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Gràcia (bcn-021 – bcn-026) ──────────────────────────────
  { id: "bcn-021", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gràcia", title: "Plaça del Sol", description: "Corazón de Gràcia. Ambiente local total — aperitivo en cualquier terraza alrededor.", rating: 4, priceTier: "€", emoji: "☀️", done: false, priority: "media", location: "Gràcia", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-022", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gràcia", title: "Mercat de l'Abaceria", description: "Mercado cubierto modernista de 1892. Menos turístico, más auténtico que la Boqueria.", rating: 3, priceTier: "€", emoji: "🛒", done: false, priority: "baja", location: "Gràcia", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-023", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gràcia", title: "Cinemes Verdi", description: "Cines de arte y ensayo en pleno Gràcia. Películas en versión original. Ambiente de barrio.", rating: 3, priceTier: "€", emoji: "🎬", done: false, priority: "baja", location: "Gràcia", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-024", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gràcia", title: "Vermut en Carrer de Verdi", description: "Calle llena de bares de vermut auténtico catalán. Ritual local del aperitivo dominical.", rating: 4, priceTier: "€", emoji: "🍷", done: false, priority: "media", location: "Gràcia", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-025", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gràcia", title: "Jardins de la Tamarita", description: "Jardines históricos privados abiertos al público. Tranquilos, con palmeras centenarias.", rating: 3, priceTier: "€", emoji: "🌴", done: false, priority: "baja", location: "Sant Gervasi", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-026", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Gràcia", title: "Plaça de la Vila de Gràcia", description: "Plaza principal de Gràcia con mercadillo. Torre del reloj del siglo XIX.", rating: 4, priceTier: "€", emoji: "🕰️", done: false, priority: "media", location: "Gràcia", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Eixample (bcn-027 – bcn-032) ────────────────────────────
  { id: "bcn-027", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Eixample", title: "Passeig de Gràcia", description: "La avenida más elegante. Manzana de la Discordia: Casa Batlló, Casa Amatller y Casa Lleó Morera frente a frente.", rating: 4, priceTier: "€€€", emoji: "🌟", done: false, priority: "media", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-028", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Eixample", title: "Casa Amatller", description: "Modernismo catalán con fachada neogótica. El Forn de Casa Amatller dentro sirve el mejor chocolate a la piedra.", rating: 4, priceTier: "€€", emoji: "🏛️", done: false, priority: "media", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-029", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Eixample", title: "Mercat del Ninot", description: "Mercado de barrio remodelado en 2015. Locales, fresco y sin hordas turísticas.", rating: 3, priceTier: "€", emoji: "🥬", done: false, priority: "baja", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-030", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Eixample", title: "Fundació Antoni Tàpies", description: "Museo dedicado al artista catalán más importante del siglo XX. Edificio modernista espectacular.", rating: 3, priceTier: "€", emoji: "🎭", done: false, priority: "baja", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-031", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Eixample", title: "Casa Calvet", description: "Primera obra en la ciudad de Gaudí. Solo fachada exterior — ahora es restaurante.", rating: 3, priceTier: "€", emoji: "🏠", done: false, priority: "baja", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-032", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Eixample", title: "Eixample Esquerra — vida nocturna", description: "El barrio LGBTQ+ de Barcelona ('Gayxample'). Bares, discotecas y ambiente festivo toda la semana.", rating: 4, priceTier: "€€", emoji: "🌈", done: false, priority: "media", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Sarrià-Sant Gervasi/Pedralbes (bcn-033 – bcn-042) ───────
  { id: "bcn-033", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Sarrià-Sant Gervasi/Pedralbes", title: "Bellesguard Tower", description: "Gaudí menos conocido. Castillo medieval convertido por Gaudí — pocos visitantes, guías apasionados.", rating: 4, priceTier: "€€", emoji: "🏰", done: false, priority: "media", location: "Sant Gervasi", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-034", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Sarrià-Sant Gervasi/Pedralbes", title: "Monestir de Pedralbes", description: "Monasterio gótico del siglo XIV con claustro triple de tres pisos. Extraordinariamente bien conservado.", rating: 4, priceTier: "€€", emoji: "⛪", done: false, priority: "media", location: "Pedralbes", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-035", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Sarrià-Sant Gervasi/Pedralbes", title: "Mercat de Sarrià", description: "Mercado de barrio auténtico y sin turistas. Buen sitio para desayunar con locales.", rating: 3, priceTier: "€", emoji: "🛒", done: false, priority: "baja", location: "Sarrià", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-036", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Sarrià-Sant Gervasi/Pedralbes", title: "Bar Tomàs", description: "Las mejores patatas bravas de Barcelona según los locales. Brava+alioli. Solo efectivo. Cola normal.", rating: 5, priceTier: "€", emoji: "🥔", done: false, priority: "alta", location: "Sarrià", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-037", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Sarrià-Sant Gervasi/Pedralbes", title: "CosmoCaixa", description: "Museo de ciencia con selva tropical interior de 1.000m² y meteorito de 4.500 millones de años.", rating: 4, priceTier: "€€", emoji: "🔬", done: false, priority: "media", location: "Sant Gervasi", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-038", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Sarrià-Sant Gervasi/Pedralbes", title: "Tibidabo + Temple del Sagrat Cor", description: "Cima de la ciudad a 512m. Tramvia Blau histórico. Parque de atracciones centenario. Vistas 360° de Barcelona.", rating: 4, priceTier: "€€", emoji: "⛪", done: false, priority: "media", location: "Tibidabo", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-039", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Sarrià-Sant Gervasi/Pedralbes", title: "Carretera de les Aigües", description: "Ruta 10km horizontal a media ladera de Collserola. Vistas panorámicas de toda la ciudad. Gratis, fácil, impresionante.", rating: 5, priceTier: "€", emoji: "🏃", done: false, priority: "alta", location: "Collserola", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-040", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Sarrià-Sant Gervasi/Pedralbes", title: "Plaça de Sarrià", description: "Plaza del pueblo de Sarrià, anexionado a Barcelona en 1921 pero conservando alma de pueblo.", rating: 3, priceTier: "€", emoji: "🌳", done: false, priority: "baja", location: "Sarrià", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-041", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Sarrià-Sant Gervasi/Pedralbes", title: "Les Tres Torres", description: "Barrio residencial tranquilo y adinerado. Bueno para paseos tranquilos lejos del turismo.", rating: 3, priceTier: "€", emoji: "🏘️", done: false, priority: "baja", location: "Sant Gervasi", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-042", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Sarrià-Sant Gervasi/Pedralbes", title: "Turó Parc", description: "Parque tranquilo y elegante entre Sarrià y el Eixample. Popular entre familias del barrio.", rating: 3, priceTier: "€", emoji: "🌿", done: false, priority: "baja", location: "Sant Gervasi", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Playa/Frente Marítimo (bcn-043 – bcn-048) ───────────────
  { id: "bcn-043", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Playa/Frente Marítimo", title: "Barceloneta beach", description: "Playa icónica a metros del centro. Llena en verano — mejor a primera hora o atardecer.", rating: 4, priceTier: "€", emoji: "🏖️", done: false, priority: "media", location: "Barceloneta", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-044", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Playa/Frente Marítimo", title: "Bogatell beach", description: "Playa más tranquila y menos turística que Barceloneta. Preferida por locales.", rating: 4, priceTier: "€", emoji: "🏖️", done: false, priority: "media", location: "Poblenou", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-045", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Playa/Frente Marítimo", title: "Beach clubs Poblenou", description: "Chiringuitos y clubs de playa en primera línea. Ambiente de verano mediterráneo total.", rating: 4, priceTier: "€€€", emoji: "🍹", done: false, priority: "media", location: "Poblenou", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-046", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Playa/Frente Marítimo", title: "Mirador Hotel Vela (W Barcelona)", description: "Vistas al mar desde el bar del hotel vela más icónico del skyline.", rating: 3, priceTier: "€", emoji: "⛵", done: false, priority: "baja", location: "Barceloneta", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-047", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Playa/Frente Marítimo", title: "Port Olímpic", description: "Puerto construido para los JJ.OO. de 1992. Bares, restaurantes y veleros.", rating: 3, priceTier: "€€", emoji: "⛵", done: false, priority: "baja", location: "Poblenou", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-048", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Playa/Frente Marítimo", title: "Nova Icaria beach", description: "Playa familiar y tranquila junto al Port Olímpic. Menos concurrida.", rating: 3, priceTier: "€", emoji: "🏖️", done: false, priority: "baja", location: "Poblenou", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Montjuïc/Sants (bcn-049 – bcn-054) ─────────────────────
  { id: "bcn-049", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Montjuïc/Sants", title: "Plaça d'Espanya — Fuentes Mágicas", description: "Espectáculo de luz y música frente al MNAC. Mejor al atardecer. Gratuito.", rating: 4, priceTier: "€", emoji: "⛲", done: false, priority: "media", location: "Montjuïc", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-050", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Montjuïc/Sants", title: "MNAC", description: "Museo Nacional de Arte de Cataluña. Arte románico mejor del mundo, más colección modernista.", rating: 4, priceTier: "€€", emoji: "🏛️", done: false, priority: "media", location: "Montjuïc", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-051", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Montjuïc/Sants", title: "Teatre Grec", description: "Teatro griego al aire libre excavado en la roca. Festival Grec todo julio.", rating: 3, priceTier: "€€", emoji: "🎭", done: false, priority: "baja", location: "Montjuïc", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-052", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Montjuïc/Sants", title: "Teleférico de Montjuïc", description: "Telecabina con vistas al puerto y la ciudad. Desde el Paral·lel con el funicular o desde Barceloneta.", rating: 4, priceTier: "€€", emoji: "🚡", done: false, priority: "media", location: "Montjuïc", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-053", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Montjuïc/Sants", title: "Castell de Montjuïc", description: "Fortaleza militar del siglo XVII con vistas al mar y la ciudad. Historia intensa.", rating: 4, priceTier: "€€", emoji: "🏰", done: false, priority: "media", location: "Montjuïc", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-054", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Montjuïc/Sants", title: "Jardí Botànic de Barcelona", description: "Jardín botánico mediterráneo con vistas. Bueno para una mañana tranquila.", rating: 3, priceTier: "€", emoji: "🌵", done: false, priority: "baja", location: "Montjuïc", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Alta Cocina/Michelin (bcn-055 – bcn-064) ────────────────
  { id: "bcn-055", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Alta Cocina/Michelin", title: "Disfrutar", description: "3 Estrellas Michelin. Top 2 mundo en 2024. Cocina de vanguardia de los discípulos de El Bulli. Reservar meses antes.", rating: 5, priceTier: "€€€", emoji: "⭐", done: false, priority: "alta", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-056", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Alta Cocina/Michelin", title: "Cocina Hermanos Torres", description: "3 Estrellas Michelin. En una antigua fábrica de gas reconvertida. Experiencia total.", rating: 5, priceTier: "€€€", emoji: "⭐", done: false, priority: "alta", location: "Sants-Montjuïc", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-057", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Alta Cocina/Michelin", title: "ABaC Restaurant", description: "3 Estrellas Michelin. Jardín de Sarrià. Alta cocina contemporánea catalana.", rating: 5, priceTier: "€€€", emoji: "⭐", done: false, priority: "alta", location: "Sarrià", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-058", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Alta Cocina/Michelin", title: "Lasarte", description: "3 Estrellas Michelin. Primer restaurante de Martin Berasategui en Barcelona.", rating: 5, priceTier: "€€€", emoji: "⭐", done: false, priority: "alta", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-059", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Alta Cocina/Michelin", title: "Enigma", description: "2 Estrellas Michelin de Albert Adrià. Viaje sensorial en 40+ pases. Solo 24 comensales por noche.", rating: 5, priceTier: "€€€", emoji: "⭐", done: false, priority: "alta", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-060", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Alta Cocina/Michelin", title: "Mont Bar", description: "1 Estrella Michelin. Cocina catalana de producto con técnica. Ambiente de bistró.", rating: 4, priceTier: "€€", emoji: "⭐", done: false, priority: "media", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-061", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Alta Cocina/Michelin", title: "Aleia", description: "1 Estrella Michelin en el Hotel Casa Fuster. Buena relación calidad-precio.", rating: 4, priceTier: "€€", emoji: "⭐", done: false, priority: "media", location: "Gràcia", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-062", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Alta Cocina/Michelin", title: "Kamikaze", description: "Michelin accesible. Japonés de alta calidad a precios razonables para la categoría.", rating: 4, priceTier: "€€", emoji: "⭐", done: false, priority: "media", location: "Gòtic", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-063", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Alta Cocina/Michelin", title: "Caelis — menú mediodía", description: "1 Estrella Michelin en el Grand Hotel Central. Menú mediodía = alta cocina a precio asequible.", rating: 4, priceTier: "€€", emoji: "⭐", done: false, priority: "media", location: "Gòtic", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-064", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Alta Cocina/Michelin", title: "Tickets", description: "Bar de tapas de los hermanos Adrià. Reservar meses antes. Tapas creativas de vanguardia accesible.", rating: 5, priceTier: "€€€", emoji: "🎟️", done: false, priority: "alta", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Restaurantes y Bares Escondidos (bcn-065 – bcn-077) ─────
  { id: "bcn-065", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Restaurantes y Bares Escondidos", title: "Bar Calders", description: "Vermutería de Sant Antoni. El lugar de referencia para el vermut de mediodía. Siempre lleno.", rating: 5, priceTier: "€", emoji: "🍷", done: false, priority: "alta", location: "Sant Antoni", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-066", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Restaurantes y Bares Escondidos", title: "Morro Fi", description: "Bar de copas pequeño y con encanto en Eixample. Cócteles de autor.", rating: 4, priceTier: "€", emoji: "🍸", done: false, priority: "media", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-067", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Restaurantes y Bares Escondidos", title: "El Jardí", description: "Terraza escondida en el patio del CCCB. Tranquila, con árboles, en pleno Raval.", rating: 4, priceTier: "€€", emoji: "🌿", done: false, priority: "media", location: "Raval", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-068", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Restaurantes y Bares Escondidos", title: "Ovella Negra Born", description: "Bar cervecero con ambiente festivo en Born. El clásico del estudiante Erasmus.", rating: 4, priceTier: "€", emoji: "🍺", done: false, priority: "media", location: "Born", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-069", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Restaurantes y Bares Escondidos", title: "Ovella Negra Raval", description: "La versión original en Raval. Enormes jarras de cerveza, mesas comunales, ambiente juerguista.", rating: 3, priceTier: "€", emoji: "🍺", done: false, priority: "baja", location: "Raval", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-070", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Restaurantes y Bares Escondidos", title: "Topik", description: "Restaurante de cocina española contemporánea. Buena carta de vinos.", rating: 3, priceTier: "€€", emoji: "🍽️", done: false, priority: "baja", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-071", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Restaurantes y Bares Escondidos", title: "Wookah Lounge", description: "Lounge bar con hookah y ambiente cosmopolita. Bueno para noches tranquilas.", rating: 3, priceTier: "€€", emoji: "💨", done: false, priority: "baja", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-072", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Restaurantes y Bares Escondidos", title: "La Raspa de Moragas", description: "Bar familiar escondido en Sarrià. Bodega natural, ración generosa, sin pretensiones.", rating: 4, priceTier: "€", emoji: "🐟", done: false, priority: "media", location: "Sarrià", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-073", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Restaurantes y Bares Escondidos", title: "La Xarxa Barcelona", description: "Las mejores croquetas de marisco de Barcelona según muchos locales. Buen marisco.", rating: 4, priceTier: "€€", emoji: "🦞", done: false, priority: "media", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-074", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Restaurantes y Bares Escondidos", title: "Granja Dulcinea", description: "Granja-cafetería desde 1941. Xurros amb xocolata auténticos. El desayuno clásico de Barcelona.", rating: 4, priceTier: "€", emoji: "🍩", done: false, priority: "media", location: "Gòtic", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-075", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Restaurantes y Bares Escondidos", title: "Bar Marsella", description: "El bar más antiguo de Barcelona (1820). Sirve absenta. Botellas con polvo en el techo. Icónico.", rating: 4, priceTier: "€", emoji: "🥃", done: false, priority: "media", location: "Raval", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-076", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Restaurantes y Bares Escondidos", title: "Bormuth", description: "Vermutería moderna en Born. La nueva generación del ritual del vermut. Muy concurrido.", rating: 4, priceTier: "€€", emoji: "🍷", done: false, priority: "media", location: "Born", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-077", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Restaurantes y Bares Escondidos", title: "El Xampanyet", description: "Bodega de cava y tapas desde 1929. El mejor xampanyet (cava casero) de la ciudad.", rating: 4, priceTier: "€", emoji: "🥂", done: false, priority: "media", location: "Born", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Mercados y Cultura Gastronómica (bcn-078 – bcn-079) ─────
  { id: "bcn-078", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Mercados y Cultura Gastronómica", title: "Menú del día", description: "€12-18 por un almuerzo de 3 platos con vino. La institución gastronómica española. Disponible L-V en casi todos los restaurantes de barrio.", rating: 4, priceTier: "€", emoji: "🍽️", done: false, priority: "media", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-079", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Mercados y Cultura Gastronómica", title: "Ritual del vermut dominical", description: "Domingo al mediodía: vermut con olivas y patatas fritas en cualquier terraza de barrio. El ritual más local de Barcelona.", rating: 4, priceTier: "€", emoji: "🫒", done: false, priority: "media", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Miradores y Naturaleza Urbana (bcn-080 – bcn-083) ───────
  { id: "bcn-080", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Miradores y Naturaleza Urbana", title: "Bunkers del Carmel / Turó de la Rovira", description: "Mejor vista 360° de Barcelona. Restos de la Guerra Civil. Llevar vino para el atardecer — el ritual más instagrameado de la ciudad.", rating: 5, priceTier: "€", emoji: "🌅", done: false, priority: "alta", location: "Horta-Guinardó", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-081", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Miradores y Naturaleza Urbana", title: "Parc del Laberint d'Horta", description: "El jardín histórico más antiguo de Barcelona (1791). Laberinto de cipreses. Tranquilo y romántico.", rating: 4, priceTier: "€", emoji: "🌿", done: false, priority: "media", location: "Horta-Guinardó", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-082", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Miradores y Naturaleza Urbana", title: "Parc Natural de Collserola", description: "El parque metropolitano natural más grande del mundo (8.000ha). Senderismo, MTB, silencio total a 20 min del centro.", rating: 4, priceTier: "€", emoji: "🏔️", done: false, priority: "media", location: "Collserola", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-083", tripId: "barcelona", category: "Barcelona por Barrio", subcategory: "Miradores y Naturaleza Urbana", title: "Jardins de Mossèn Costa i Llobera", description: "Jardín de cactus en la ladera de Montjuïc. La mayor colección de cactáceas al aire libre de Europa.", rating: 3, priceTier: "€", emoji: "🌵", done: false, priority: "baja", location: "Montjuïc", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ═══ FUERA DE BARCELONA ════════════════════════════════════

  // ── Clásicos cercanos (bcn-084 – bcn-089) ───────────────────
  { id: "bcn-084", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Clásicos cercanos", title: "Montserrat", description: "1h en tren+cremallera. Monasterio benedictino y formaciones rocosas únicas. Senderismo hasta la cima (Sant Joan). Imprescindible.", rating: 5, priceTier: "€€", emoji: "⛰️", done: false, priority: "alta", location: "Montserrat", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-085", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Clásicos cercanos", title: "Girona", description: "1-1.5h en tren. Casco medieval perfectamente conservado. Barrio judío, catedral, baños árabes. Escenario de Juego de Tronos.", rating: 5, priceTier: "€€", emoji: "🏛️", done: false, priority: "alta", location: "Girona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-086", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Clásicos cercanos", title: "Sitges", description: "35-40 min en tren. Pueblo costero con playas, arquitectura modernista y ambiente muy LGBTQ+ friendly.", rating: 4, priceTier: "€€", emoji: "🏖️", done: false, priority: "media", location: "Sitges", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-087", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Clásicos cercanos", title: "Tarragona", description: "1h en tren. Ruinas romanas UNESCO: anfiteatro, circo, foro. La segunda ciudad más importante del Imperio Romano en Hispania.", rating: 5, priceTier: "€€", emoji: "🏛️", done: false, priority: "alta", location: "Tarragona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-088", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Clásicos cercanos", title: "Vilafranca del Penedès", description: "45 min en tren. Capital del cava. Bodegas Codorníu y Freixenet. Castellers (torres humanas) de alto nivel.", rating: 4, priceTier: "€€", emoji: "🥂", done: false, priority: "media", location: "Penedès", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-089", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Clásicos cercanos", title: "Sant Cugat del Vallès", description: "30 min en FGC. Monasterio románico del siglo X con claustro doble bien conservado. Pueblo tranquilo.", rating: 3, priceTier: "€", emoji: "⛪", done: false, priority: "baja", location: "Vallès Occidental", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Costa Brava (bcn-090 – bcn-093) ─────────────────────────
  { id: "bcn-090", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Costa Brava", title: "Tossa de Mar", description: "2h en bus. Única villa medieval amurallada de la Costa Brava. Playas cristalinas.", rating: 5, priceTier: "€€", emoji: "🏰", done: false, priority: "alta", location: "Costa Brava", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-091", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Costa Brava", title: "Calella de Palafrugell", description: "2.5h. Pueblo de pescadores pintoresco con Festival de Habaneras en julio. Calas protegidas.", rating: 4, priceTier: "€€", emoji: "⚓", done: false, priority: "media", location: "Costa Brava", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-092", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Costa Brava", title: "Begur", description: "2.5h. Pueblo medieval en lo alto con castillo en ruinas y varias calas (Aiguafreda, Sa Riera). Turismo de calidad.", rating: 4, priceTier: "€€", emoji: "🏔️", done: false, priority: "media", location: "Costa Brava", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-093", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Costa Brava", title: "Pals", description: "2.5h. Pueblo medieval medieval casi intacto. El centro histórico es una joya del siglo XIV-XV.", rating: 4, priceTier: "€€", emoji: "🏘️", done: false, priority: "media", location: "Costa Brava", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Cadaqués y Alrededores (bcn-094 – bcn-096) ──────────────
  { id: "bcn-094", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Cadaqués y Alrededores", title: "Cadaqués", description: "2.5h en bus. El pueblo más bonito de España según muchos. Bugambilias blancas, calles empedradas, Cap de Creus al lado. Quedarse a dormir.", rating: 5, priceTier: "€€€", emoji: "🌸", done: false, priority: "alta", location: "Alt Empordà", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-095", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Cadaqués y Alrededores", title: "Casa-Museu Dalí Port Lligat", description: "La casa de Dalí y Gala. Solo 8-10 personas por visita — reservar con antelación. Íntimo y surrealista.", rating: 5, priceTier: "€€", emoji: "🎨", done: false, priority: "alta", location: "Cadaqués", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-096", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Cadaqués y Alrededores", title: "Teatre-Museu Dalí Figueres", description: "1.5h. El museo más visitado de España después del Prado. Diseñado por Dalí como mausoleo. Surrealismo total.", rating: 5, priceTier: "€€€", emoji: "🎭", done: false, priority: "alta", location: "Figueres", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Cerdanya y Pirineos (bcn-097 – bcn-103) ─────────────────
  { id: "bcn-097", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Cerdanya y Pirineos", title: "Puigcerdà", description: "2h. Capital de la Cerdanya. Lago artificial, campanario gótico, ambiente de montaña fronterizo con Francia.", rating: 4, priceTier: "€€", emoji: "🏔️", done: false, priority: "media", location: "Cerdanya", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-098", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Cerdanya y Pirineos", title: "Llívia", description: "Enclave español rodeado completamente por territorio francés. El pueblo-isla. Solo 2km².", rating: 4, priceTier: "€€", emoji: "🇪🇸", done: false, priority: "media", location: "Cerdanya", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-099", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Cerdanya y Pirineos", title: "La Molina", description: "2h. Estación de esquí más antigua de España (1943). También senderismo y MTB en verano.", rating: 4, priceTier: "€€€", emoji: "⛷️", done: false, priority: "media", location: "Ripollès", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-100", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Cerdanya y Pirineos", title: "Masella", description: "2h. La zona esquiable más grande de los Pirineos. Mejor infraestructura que La Molina, están conectadas.", rating: 4, priceTier: "€€€", emoji: "🎿", done: false, priority: "media", location: "Cerdanya", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-101", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Cerdanya y Pirineos", title: "Vall de Núria", description: "2.5h. Solo accesible en tren cremallera. Santuario mariano en un circo glacial a 1.967m.", rating: 5, priceTier: "€€", emoji: "🚞", done: false, priority: "alta", location: "Ripollès", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-102", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Cerdanya y Pirineos", title: "Parc Natural Cadí-Moixeró", description: "2h. El parque natural más cercano a Barcelona. Pared del Cadí, rutas de alta montaña, pueblos medievales.", rating: 4, priceTier: "€", emoji: "🏕️", done: false, priority: "media", location: "Alt Urgell", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-103", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Cerdanya y Pirineos", title: "Bellver de Cerdanya", description: "Pueblo medieval bien conservado con iglesia románica. Base tranquila para explorar la Cerdanya.", rating: 3, priceTier: "€", emoji: "🏘️", done: false, priority: "baja", location: "Cerdanya", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Hacia Valencia (bcn-104 – bcn-111) ──────────────────────
  { id: "bcn-104", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Hacia Valencia", title: "Vilanova i la Geltrú", description: "45 min en tren. Playa, museo Víctor Balaguer, ambiente de ciudad media con encanto.", rating: 3, priceTier: "€€", emoji: "🏖️", done: false, priority: "baja", location: "Garraf", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-105", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Hacia Valencia", title: "Reus", description: "1.5h. Ciudad natal de Gaudí y capital del vermut. Buena arquitectura modernista. Casa de Gaudí natal.", rating: 4, priceTier: "€€", emoji: "🏛️", done: false, priority: "media", location: "Baix Camp", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-106", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Hacia Valencia", title: "Salou", description: "1.5h. Playas Bandera Azul y PortAventura World (parque de atracciones). Turismo de playa masivo.", rating: 3, priceTier: "€€", emoji: "🎢", done: false, priority: "baja", location: "Tarragonès", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-107", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Hacia Valencia", title: "Tortosa", description: "2h. Catedral gótica impresionante, castillo-hotel parador encima del río Ebro. Ciudad con mucho carácter.", rating: 4, priceTier: "€€", emoji: "🏰", done: false, priority: "media", location: "Baix Ebre", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-108", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Hacia Valencia", title: "Miravet", description: "2h. Fortaleza templaria perfecta sobre el Ebro. Kayak en el río. Pueblo de alfarería.", rating: 4, priceTier: "€€", emoji: "🏰", done: false, priority: "media", location: "Terra Alta", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-109", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Hacia Valencia", title: "Delta de l'Ebre", description: "2.5h. Humedales únicos en Europa. Observación de aves, arrozales, playas vírgenes. Paisaje de otro mundo.", rating: 4, priceTier: "€", emoji: "🦅", done: false, priority: "media", location: "Montsià", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-110", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Hacia Valencia", title: "Peñíscola", description: "3h. Castillo Templario en una roca sobre el mar. Juego de Tronos (escenario Meereen). Absolutamente impresionante.", rating: 5, priceTier: "€€", emoji: "🏰", done: false, priority: "alta", location: "Castellón", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-111", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Hacia Valencia", title: "Castillo de Sagunto", description: "3h. Enorme fortaleza romana, árabe y cristiana sobre una colina. Vistas al mar. Anfiteatro romano.", rating: 3, priceTier: "€", emoji: "🏯", done: false, priority: "baja", location: "Valencia", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Valencia (bcn-112) ───────────────────────────────────────
  { id: "bcn-112", tripId: "barcelona", category: "Fuera de Barcelona", subcategory: "Valencia", title: "Valencia ciudad", description: "3h en tren AVE. Ciudad de las Artes y las Ciencias, cuna de la paella, mercado central modernista. Mejor como viaje 2-4 días que day-trip.", rating: 5, priceTier: "€€€", emoji: "🥘", done: false, priority: "alta", location: "Valencia", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ═══ ACTIVIDADES Y EXPERIENCIAS ════════════════════════════

  // ── Deportes y Aventura (bcn-113 – bcn-119) ─────────────────
  { id: "bcn-113", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Deportes y Aventura", title: "Camp Nou Experience", description: "El estadio más grande de Europa en plena reforma hasta 2026. Tour museo interactivo del FC Barcelona.", rating: 5, priceTier: "€€€", emoji: "⚽", done: false, priority: "alta", location: "Les Corts", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-114", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Deportes y Aventura", title: "Bridge jumping", description: "Salto desde puentes en ríos y embalses cerca de Barcelona. Operadores en Llinars del Vallès.", rating: 4, priceTier: "€€€", emoji: "🤸", done: false, priority: "media", location: "Vallès Oriental", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-115", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Deportes y Aventura", title: "Parasailing", description: "Vuelo en paravela sobre el mar Mediterráneo desde la playa. Vistas únicas de la ciudad desde el aire.", rating: 4, priceTier: "€€€", emoji: "🪂", done: false, priority: "media", location: "Costa Barcelonesa", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-116", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Deportes y Aventura", title: "Pádel", description: "El deporte nacional español. Canchas por toda la ciudad — buena forma de conocer locales.", rating: 4, priceTier: "€€", emoji: "🏸", done: false, priority: "media", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-117", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Deportes y Aventura", title: "Bubble football", description: "Fútbol dentro de bolas hinchables. Divertido en grupo. Varios operadores en la ciudad.", rating: 3, priceTier: "€€", emoji: "⚽", done: false, priority: "baja", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-118", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Deportes y Aventura", title: "Rooftop yoga al atardecer", description: "Clases de yoga en terrazas con vistas a la ciudad. Varios estudios ofrecen sesiones sunset.", rating: 4, priceTier: "€€", emoji: "🧘", done: false, priority: "media", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-119", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Deportes y Aventura", title: "Kayak/buceo en Costa Brava", description: "Excursiones de día a las calas de la Costa Brava. Kayak de mar entre formaciones rocosas o submarinismo en aguas cristalinas.", rating: 4, priceTier: "€€€", emoji: "🤿", done: false, priority: "media", location: "Costa Brava", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Vida Nocturna (bcn-120 – bcn-124) ───────────────────────
  { id: "bcn-120", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Vida Nocturna", title: "Casa Batlló Magic Nights", description: "Espectáculo nocturno de mapping y música en la fachada. Incluye cava en la terraza. Reservar online.", rating: 5, priceTier: "€€€", emoji: "✨", done: false, priority: "alta", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-121", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Vida Nocturna", title: "La Pedrera Night Experience", description: "Visita nocturna a la azotea de La Pedrera con música y cava. El skyline de Barcelona de noche.", rating: 5, priceTier: "€€€", emoji: "🌙", done: false, priority: "alta", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-122", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Vida Nocturna", title: "Razzmatazz", description: "El club emblemático de Barcelona. 5 salas con música diferente. Abre a las 1am — normal empezar a las 3am.", rating: 4, priceTier: "€€", emoji: "🎵", done: false, priority: "media", location: "Poblenou", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-123", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Vida Nocturna", title: "Jamboree Jazz Club", description: "Jazz en directo cada noche en un sótano bajo la Plaça Reial. Histórico — abierto desde 1960.", rating: 4, priceTier: "€€", emoji: "🎷", done: false, priority: "media", location: "Gòtic", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-124", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Vida Nocturna", title: "Bar crawl por el Passeig del Born", description: "La calle de bares más concentrada de Barcelona. El Xampanyet → Bormuth → El Born Bar → rooftop Terral.", rating: 4, priceTier: "€€", emoji: "🍻", done: false, priority: "media", location: "Born", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Cultural y Curioso (bcn-125 – bcn-132) ──────────────────
  { id: "bcn-125", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Cultural y Curioso", title: "Museo de Cera", description: "Museo de cera en el Passeig de la Banca desde 1973. Kitsch y entrañable — más personajes históricos que celebridades.", rating: 3, priceTier: "€€", emoji: "🗿", done: false, priority: "baja", location: "Gòtic", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-126", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Cultural y Curioso", title: "Museu de Cultures del Món", description: "Colección de culturas no-europeas en un palacio del Born. Poco conocido y vale mucho la pena.", rating: 4, priceTier: "€", emoji: "🌍", done: false, priority: "media", location: "Born", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-127", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Cultural y Curioso", title: "Escape rooms", description: "Barcelona tiene algunos de los mejores escape rooms de Europa. 'Sherlocked' y 'Room Escape Barcelona' destacan.", rating: 4, priceTier: "€€", emoji: "🔐", done: false, priority: "media", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-128", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Cultural y Curioso", title: "Nau Bostik", description: "Antigua fábrica de pegamento en Poblenou reconvertida en espacio de arte urbano y mercadillo creativo.", rating: 4, priceTier: "€", emoji: "🎨", done: false, priority: "media", location: "Poblenou", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-129", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Cultural y Curioso", title: "Life drawing sessions", description: "Clases de dibujo del natural con modelo en vivo. Varios estudios de arte ofrecen sesiones para no artistas.", rating: 3, priceTier: "€", emoji: "✏️", done: false, priority: "baja", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-130", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Cultural y Curioso", title: "Tour cloacas de Barcelona (Atlas Obscura)", description: "Visita guiada a las alcantarillas históricas de la ciudad. Rarísimo y fascinante para los curiosos.", rating: 3, priceTier: "€€", emoji: "🕳️", done: false, priority: "baja", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-131", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Cultural y Curioso", title: "Freemasonry history tour", description: "Tour por los edificios masónicos históricos de la ciudad. Historia oculta de Barcelona del siglo XIX.", rating: 3, priceTier: "€€", emoji: "🔺", done: false, priority: "baja", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-132", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Cultural y Curioso", title: "Teleférico del Puerto (Aeri del Port)", description: "Vuelo en cabina sobre el puerto desde Barceloneta hasta Montjuïc. Vistas únicas al atardecer.", rating: 4, priceTier: "€€", emoji: "🚡", done: false, priority: "media", location: "Barceloneta", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Experiencias Gastronómicas (bcn-133 – bcn-136) ──────────
  { id: "bcn-133", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Experiencias Gastronómicas", title: "Clase de paella + sangría", description: "Aprende a cocinar paella valenciana y sangría catalana con chefs locales. Clases de 3-4h con mercado.", rating: 4, priceTier: "€€", emoji: "🥘", done: false, priority: "media", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-134", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Experiencias Gastronómicas", title: "Tour tapas + espectáculo flamenco", description: "Ruta de bares de tapas seguida de espectáculo de flamenco. Turístico pero bien producido.", rating: 4, priceTier: "€€€", emoji: "💃", done: false, priority: "media", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-135", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Experiencias Gastronómicas", title: "AIRE Ancient Baths — baño de vino", description: "Spa termal en baños árabes históricos. El Ritual del Vino incluye inmersión en barrica con extracto de vid. Copa de vino incluida.", rating: 4, priceTier: "€€€", emoji: "🍷", done: false, priority: "media", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-136", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Experiencias Gastronómicas", title: "Tour mercado Boqueria + clase de cocina", description: "Compra ingredientes con el chef, luego cocina en taller. Una de las mejores formas de entender la cocina catalana.", rating: 4, priceTier: "€€", emoji: "👨‍🍳", done: false, priority: "media", location: "Raval", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Spots Instagram/Fotografía (bcn-137 – bcn-138) ──────────
  { id: "bcn-137", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Spots Instagram/Fotografía", title: "Carrer de Petritxol", description: "El callejón histórico de las chocolaterías del Gòtic. Piedras medievales, acogedoras granjas y confiterías.", rating: 4, priceTier: "€", emoji: "📸", done: false, priority: "media", location: "Gòtic", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-138", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Spots Instagram/Fotografía", title: "Calles del Born a golden hour", description: "El barrio se ilumina en tonos dorados. Las calles de canal del Born (Carrer del Parlament, Rec) en tarde.", rating: 4, priceTier: "€", emoji: "🌅", done: false, priority: "media", location: "Born", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Transporte y Vistas Únicas (bcn-139) ────────────────────
  { id: "bcn-139", tripId: "barcelona", category: "Actividades y Experiencias", subcategory: "Transporte y Vistas Únicas", title: "GoCar tour", description: "Coches eléctricos descubiertos con narración GPS incorporada. Ruta flexible por los principales puntos de la ciudad.", rating: 3, priceTier: "€€", emoji: "🚗", done: false, priority: "baja", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ═══ EVENTOS ═══════════════════════════════════════════════

  // ── Julio 2026 (bcn-140 – bcn-146) ──────────────────────────
  { id: "bcn-140", tripId: "barcelona", category: "Eventos", subcategory: "Julio 2026", title: "Tour de France Grand Départ — Barcelona 2026", description: "Primeras 3 etapas en Cataluña. Contrarreloj por equipos el 4 jul Fòrum→Montjuïc. Etapa 3 el 6 jul Granollers→Anglès. Entrada gratuita en carretera.", rating: 5, priceTier: "€", emoji: "🚴", done: false, priority: "alta", location: "Barcelona y Cataluña", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-141", tripId: "barcelona", category: "Eventos", subcategory: "Julio 2026", title: "Cruïlla Festival", description: "8-11 julio. Parc del Fòrum. Headliners 2026: Halsey, Pixies, Garbage. Festival de rock-pop con mucho ambiente.", rating: 4, priceTier: "€€€", emoji: "🎸", done: false, priority: "media", location: "Poblenou", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-142", tripId: "barcelona", category: "Eventos", subcategory: "Julio 2026", title: "BARTS Festival", description: "28 jun - 24 jul. Poble Espanyol. ZZ Top y Belle & Sebastian confirmados. Festival ecléctico al aire libre.", rating: 4, priceTier: "€€€", emoji: "🎵", done: false, priority: "media", location: "Montjuïc", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-143", tripId: "barcelona", category: "Eventos", subcategory: "Julio 2026", title: "Pride Barcelona", description: "Desfile el 19 julio. El orgullo más grande del Mediterráneo. Semana de eventos previos en el Eixample.", rating: 4, priceTier: "€", emoji: "🌈", done: false, priority: "media", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-144", tripId: "barcelona", category: "Eventos", subcategory: "Julio 2026", title: "Festa Major del Raval", description: "Fiesta de barrio del Raval. Castellers, gegants, música en la calle. Auténtica fiesta popular gratuita.", rating: 3, priceTier: "€", emoji: "🎉", done: false, priority: "baja", location: "Raval", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-145", tripId: "barcelona", category: "Eventos", subcategory: "Julio 2026", title: "Festival del Grec", description: "Todo julio. Teatro, danza y música en el Teatro Grec y otros escenarios de la ciudad.", rating: 4, priceTier: "€€", emoji: "🎭", done: false, priority: "media", location: "Montjuïc", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-146", tripId: "barcelona", category: "Eventos", subcategory: "Julio 2026", title: "Sala Montjuïc — cine al aire libre", description: "Todo julio. Películas bajo las estrellas frente al Castell de Montjuïc. Picnic, ambiente mágico.", rating: 4, priceTier: "€€", emoji: "🎬", done: false, priority: "media", location: "Montjuïc", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },

  // ── Enero-Junio 2027 (bcn-147 – bcn-157) ────────────────────
  { id: "bcn-147", tripId: "barcelona", category: "Eventos", subcategory: "Enero-Junio 2027", title: "Cavalcada de Reis", description: "5-6 enero 2027. Los Reyes Magos llegan en barco al puerto. La mayor cabalgata de España — miles de niños. Gratuito.", rating: 4, priceTier: "€", emoji: "👑", done: false, priority: "media", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-148", tripId: "barcelona", category: "Eventos", subcategory: "Enero-Junio 2027", title: "Festa de Santa Eulàlia", description: "Febrero 2027. Fiestas patronales de invierno. Castellers, correfocs (fuego), gegants y actividades gratuitas.", rating: 4, priceTier: "€", emoji: "🔥", done: false, priority: "media", location: "Gòtic", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-149", tripId: "barcelona", category: "Eventos", subcategory: "Enero-Junio 2027", title: "Barcelona Half Marathon", description: "Febrero 2027. Media maratón por el paseo marítimo y el centro histórico. Inscripción abre meses antes.", rating: 3, priceTier: "€", emoji: "🏃", done: false, priority: "baja", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-150", tripId: "barcelona", category: "Eventos", subcategory: "Enero-Junio 2027", title: "Llum BCN", description: "Febrero 2027. Festival de la luz en el Poblenou. Instalaciones lumínicas interactivas gratis en la calle.", rating: 4, priceTier: "€", emoji: "💡", done: false, priority: "media", location: "Poblenou", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-151", tripId: "barcelona", category: "Eventos", subcategory: "Enero-Junio 2027", title: "Maratón de Barcelona", description: "~14 marzo 2027 (fecha estimada, por confirmar). Uno de los maratones más rápidos de Europa.", rating: 3, priceTier: "€", emoji: "🏅", done: false, priority: "baja", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-152", tripId: "barcelona", category: "Eventos", subcategory: "Enero-Junio 2027", title: "Sant Jordi — Día del Libro", description: "23 abril 2027. El día más bonito de Barcelona: rosas y libros en la calle. Las Ramblas llenas de puestos. Gratuito.", rating: 5, priceTier: "€", emoji: "🌹", done: false, priority: "alta", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-153", tripId: "barcelona", category: "Eventos", subcategory: "Enero-Junio 2027", title: "Setmana Santa / Semana Santa", description: "Marzo-abril 2027 (fecha variable). Procesiones, tradiciones y cierre de muchos negocios. Buena época para escapar a pueblos.", rating: 3, priceTier: "€", emoji: "✝️", done: false, priority: "baja", location: "Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-154", tripId: "barcelona", category: "Eventos", subcategory: "Enero-Junio 2027", title: "Festival de Música en el Recinte Modernista Sant Pau", description: "Mayo 2027. Ciclo de música clásica en el espacio modernista más impresionante de la ciudad.", rating: 3, priceTier: "€€", emoji: "🎻", done: false, priority: "baja", location: "Eixample", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-155", tripId: "barcelona", category: "Eventos", subcategory: "Enero-Junio 2027", title: "Primavera Sound", description: "Principios junio 2027. El festival de música más internacional de Barcelona. Headliners de primera línea mundial.", rating: 5, priceTier: "€€€", emoji: "🎶", done: false, priority: "alta", location: "Parc del Fòrum / Montjuïc", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-156", tripId: "barcelona", category: "Eventos", subcategory: "Enero-Junio 2027", title: "Sónar Festival", description: "Mediados junio 2027. Festival de música electrónica y arte digital. Referente mundial del género.", rating: 4, priceTier: "€€€", emoji: "🎛️", done: false, priority: "media", location: "Fira de Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null },
  { id: "bcn-157", tripId: "barcelona", category: "Eventos", subcategory: "Enero-Junio 2027", title: "Sant Joan — Nit del Foc", description: "23-24 junio 2027. La noche más mágica del año: hogueras en las playas, fuegos artificiales, crema de Sant Joan. Noche en blanco con toda la ciudad en la calle.", rating: 5, priceTier: "€", emoji: "🔥", done: false, priority: "alta", location: "Toda Barcelona", mapsUrl: null, tiktokUrl: null, contacto: null, pdfUrl: null, source: null }
];

// ── Viajes — Cancún Boda Yamile (Nov 24 – Dec 1, 2026) ──────────
export const VIAJES_TRIP_DATA = [
  {
    "id": "viajes-d1-0", "tripId": "viajes", "day": 1, "order": 0, "done": false,
    "date": "24 noviembre, martes", "city": "Tokio → Cancún", "time": "17:40",
    "title": "Vuelo Tokio → Toronto (AC2)",
    "description": "", "mapsUrl": null, "pdfUrl": null, "type": "transporte",
    "isSuggestion": false, "contacto": { "contactName": null, "contactPhone": null }
  },
  {
    "id": "viajes-d1-1", "tripId": "viajes", "day": 1, "order": 1, "done": false,
    "date": "24 noviembre, martes", "city": "Tokio → Cancún", "time": "20:00",
    "title": "Vuelo Toronto → Cancún (AC1814)",
    "description": "", "mapsUrl": null, "pdfUrl": null, "type": "transporte",
    "isSuggestion": false, "contacto": { "contactName": null, "contactPhone": null }
  },
  {
    "id": "viajes-d2-0", "tripId": "viajes", "day": 2, "order": 0, "done": false,
    "date": "25 noviembre, miércoles", "city": "Riviera Maya", "time": "17:00",
    "title": "Llegada y check-in — Grand Mayan at Vidanta",
    "description": "", "mapsUrl": null, "pdfUrl": null, "type": "hotel",
    "isSuggestion": false, "contacto": { "contactName": null, "contactPhone": null }
  },
  {
    "id": "viajes-d3-0", "tripId": "viajes", "day": 3, "order": 0, "done": false,
    "date": "26 noviembre, jueves", "city": "Riviera Maya", "time": "",
    "title": "Festividades de boda — reunión familiar",
    "description": "", "mapsUrl": null, "pdfUrl": null, "type": "boda",
    "isSuggestion": false, "contacto": { "contactName": null, "contactPhone": null }
  },
  {
    "id": "viajes-d4-0", "tripId": "viajes", "day": 4, "order": 0, "done": false,
    "date": "27 noviembre, viernes", "city": "Riviera Maya", "time": "",
    "title": "Festividades de boda",
    "description": "", "mapsUrl": null, "pdfUrl": null, "type": "boda",
    "isSuggestion": false, "contacto": { "contactName": null, "contactPhone": null }
  },
  {
    "id": "viajes-d5-0", "tripId": "viajes", "day": 5, "order": 0, "done": false,
    "date": "28 noviembre, sábado", "city": "Riviera Maya", "time": "",
    "title": "💍 Ceremonia de boda de Yamile",
    "description": "", "mapsUrl": null, "pdfUrl": null, "type": "boda",
    "isSuggestion": false, "contacto": { "contactName": null, "contactPhone": null }
  },
  {
    "id": "viajes-d6-0", "tripId": "viajes", "day": 6, "order": 0, "done": false,
    "date": "29 noviembre, domingo", "city": "Riviera Maya", "time": "",
    "title": "Festejo post-boda — tiempo libre en resort",
    "description": "", "mapsUrl": null, "pdfUrl": null, "type": "libre",
    "isSuggestion": false, "contacto": { "contactName": null, "contactPhone": null }
  },
  {
    "id": "viajes-d7-0", "tripId": "viajes", "day": 7, "order": 0, "done": false,
    "date": "30 noviembre, lunes", "city": "Riviera Maya", "time": "",
    "title": "Último día en Grand Mayan — resort",
    "description": "", "mapsUrl": null, "pdfUrl": null, "type": "descanso",
    "isSuggestion": false, "contacto": { "contactName": null, "contactPhone": null }
  },
  {
    "id": "viajes-d8-0", "tripId": "viajes", "day": 8, "order": 0, "done": false,
    "date": "1 diciembre, martes", "city": "Riviera Maya", "time": "10:00",
    "title": "Checkout — Grand Mayan at Vidanta",
    "description": "", "mapsUrl": null, "pdfUrl": null, "type": "hotel",
    "isSuggestion": false, "contacto": { "contactName": null, "contactPhone": null }
  },
  {
    "id": "viajes-d8-1", "tripId": "viajes", "day": 8, "order": 1, "done": false,
    "date": "1 diciembre, martes", "city": "Cancún → Tokio", "time": "13:30",
    "title": "Vuelo Cancún → Vancouver (AC2129)",
    "description": "", "mapsUrl": null, "pdfUrl": null, "type": "transporte",
    "isSuggestion": false, "contacto": { "contactName": null, "contactPhone": null }
  },
  {
    "id": "viajes-d8-2", "tripId": "viajes", "day": 8, "order": 2, "done": false,
    "date": "1 diciembre, martes", "city": "Cancún → Tokio", "time": "18:10",
    "title": "Vuelo Vancouver → Tokio (AC3)",
    "description": "", "mapsUrl": null, "pdfUrl": null, "type": "transporte",
    "isSuggestion": false, "contacto": { "contactName": null, "contactPhone": null }
  }
];

export const VIAJES_FLIGHTS_DATA = [
  {
    "id": "viajes-flight-1", "tripId": "viajes",
    "segment": "Tokio → Toronto",
    "type": "international",
    "from": { "code": "HND", "name": "Aeropuerto Internacional de Tokio-Haneda", "city": "Tokio", "country": "Japan" },
    "to":   { "code": "YYZ", "name": "Aeropuerto Internacional Pearson", "city": "Toronto", "country": "Canada" },
    "departureDate": "2026-11-24", "departureTime": "17:40",
    "arrivalDate":   "2026-11-24", "arrivalTime":   "14:20",
    "duration": "12h 40m",
    "airline": "Air Canada", "flightNumber": "AC2",
    "confirmationCode": "B4JAPJ",
    "status": "confirmed", "pdfUrl": null
  },
  {
    "id": "viajes-flight-2", "tripId": "viajes",
    "segment": "Toronto → Cancún",
    "type": "international",
    "from": { "code": "YYZ", "name": "Aeropuerto Internacional Pearson", "city": "Toronto", "country": "Canada" },
    "to":   { "code": "CUN", "name": "Aeropuerto Internacional de Cancún", "city": "Cancún", "country": "Mexico" },
    "departureDate": "2026-11-24", "departureTime": "20:00",
    "arrivalDate":   "2026-11-24", "arrivalTime":   "23:55",
    "duration": "5h 55m",
    "airline": "Air Canada", "flightNumber": "AC1814",
    "confirmationCode": "B4JAPJ",
    "status": "confirmed", "pdfUrl": null
  },
  {
    "id": "viajes-flight-3", "tripId": "viajes",
    "segment": "Cancún → Vancouver",
    "type": "international",
    "from": { "code": "CUN", "name": "Aeropuerto Internacional de Cancún", "city": "Cancún", "country": "Mexico" },
    "to":   { "code": "YVR", "name": "Aeropuerto Internacional de Vancouver", "city": "Vancouver", "country": "Canada" },
    "departureDate": "2026-12-01", "departureTime": "13:30",
    "arrivalDate":   "2026-12-01", "arrivalTime":   "16:20",
    "duration": "5h 50m",
    "airline": "Air Canada", "flightNumber": "AC2129",
    "confirmationCode": "B4JAPJ",
    "status": "confirmed", "pdfUrl": null
  },
  {
    "id": "viajes-flight-4", "tripId": "viajes",
    "segment": "Vancouver → Tokio",
    "type": "international",
    "from": { "code": "YVR", "name": "Aeropuerto Internacional de Vancouver", "city": "Vancouver", "country": "Canada" },
    "to":   { "code": "NRT", "name": "Aeropuerto Internacional de Tokio-Narita", "city": "Tokio", "country": "Japan" },
    "departureDate": "2026-12-01", "departureTime": "18:10",
    "arrivalDate":   "2026-12-02", "arrivalTime":   "21:30",
    "duration": "10h 20m",
    "airline": "Air Canada", "flightNumber": "AC3",
    "confirmationCode": "B4JAPJ",
    "status": "confirmed", "pdfUrl": null
  }
];

export const VIAJES_ACCOMMODATIONS_DATA = [
  {
    "id": "viajes-accom-1", "tripId": "viajes",
    "name": "Grand Mayan at Vidanta",
    "type": "resort",
    "address": "Blvd. Kukulcan km 25, Zona Hotelera, Cancún, Q.ROO",
    "region": "Riviera Maya",
    "province": "Quintana Roo",
    "country": "Mexico",
    "checkInDate": "2026-11-25",
    "checkOutDate": "2026-12-01",
    "bookingId": "RCI #00034",
    "note": "Boda de Yamile. Resort fee pendiente: $525–980 USD (pagar antes 25 oct 2026). Incluye yoga, internet, albercas.",
    "status": "partial",
    "statusNote": "Reservado — resort fee pendiente ($525–980 USD, vence oct 25)",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Grand+Mayan+at+Vidanta+Cancun",
    "pdfUrl": null
  }
];

export const VIAJES_DAY_NOTES_DATA = [
  {
    "id": "viajes-note-d1",
    "tripId": "viajes",
    "day": 1,
    "summary": "Día de viaje: Tokio → Toronto → Cancún (Air Canada, booking B4JAPJ)",
    "recommendations": "Día de viaje largo. Llegar al aeropuerto HND con 3h de anticipación para vuelo internacional. En YYZ tendrán ~4h de escala — pasar inmigración canadiense, recoger y recheck de equipaje al ser self-transfer. Llevar ropa cómoda y artículos de entretenimiento para el vuelo.",
    "criticalNote": "⚠️ Resort fee Grand Mayan pendiente: $525–980 USD — pagar antes del 25 oct 2026. Reservar traslado privado CUN ↔ Grand Mayan con anticipación (~30 min del aeropuerto)."
  }
];
