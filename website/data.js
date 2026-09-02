/* ============================================================
   A&B Tours and Travels — Default Data
   Edit packages from the Admin Panel (admin.html) — changes are
   saved in the browser. This file is only the factory default.
   ============================================================ */

const AB_DEFAULT_SETTINGS = {
  company: "A&B Tours and Travels",
  tagline: "Dindigul • Hill Station Tour Specialists",
  whatsapp: "919952953045",            // country code + number, no +
  phones: ["99529 53045", "81908 48210", "81100 01243"],
  address: "229, Mandipallivasal Complex, Madurai Road, Dindigul, Tamil Nadu",
  mapQuery: "229, Mandipallivasal Complex, Madurai Road, Dindigul, Tamil Nadu",
  instagram: "https://www.instagram.com/ab_tours_travels_",
  email: "",
  pickupPoints: ["Dindigul", "Kodai Road", "Palani", "Madurai", "Theni"],
  heroTitle: "Discover the Hills",
  heroSubtitle: "Kodaikanal, Munnar, Thekkady and Vagamon — cab, stay and food in one simple package.",
  adminPassword: "tours@123"
};

/* ============================================================
   DESTINATIONS
   Every package carries a `dest` key that matches an id below.
   Add a new destination here and it appears across the site.
   ============================================================ */
/* `image` — the photo shown on cards, banners and the gallery.
   `focus` — which part of the photo to keep when it's cropped into a wide
             card. Nudge the percentage up to show more sky, down for more
             foreground.
   `art`   — fallback illustration, used only if the photo is missing.      */
const AB_DESTINATIONS = [
  { id:"kodaikanal", name:"Kodaikanal", state:"Tamil Nadu", icon:"fa-mountain-sun",
    tag:"Princess of Hill Stations",
    blurb:"Misty lakes, pine forests and valley viewpoints, 2.5 hours from our Dindigul office.",
    image:"assets/kodaikanal.jpg", focus:"center 56%", art:"assets/kodaikanal.svg" },
  { id:"munnar", name:"Munnar", state:"Kerala", icon:"fa-mug-hot",
    tag:"Tea Garden Hills",
    blurb:"Endless tea estates, Eravikulam National Park and the cool air of the high Western Ghats.",
    image:"assets/munnar.jpg", focus:"center 36%", art:"assets/munnar.svg" },
  { id:"thekkady", name:"Thekkady", state:"Kerala", icon:"fa-paw",
    tag:"Wildlife & Spices",
    blurb:"Periyar Tiger Reserve boat safari, spice plantation walks and bamboo rafting.",
    image:"assets/thekkady.jpg", focus:"center 54%", art:"assets/thekkady.svg" },
  { id:"vagamon", name:"Vagamon", state:"Kerala", icon:"fa-paragliding",
    tag:"Meadows & Pine Forests",
    blurb:"Rolling green meadows, pine forest walks and one of India's top paragliding spots.",
    image:"assets/vagamon.jpg", focus:"center 48%", art:"assets/vagamon.svg" }
];

/* ---------- Kodaikanal itineraries ---------- */
const IT_ENROUTE = [
  "Manjalar Dam", "Thalaiyar Falls View Point", "Silver Cascade Falls",
  "Coaker's Walk", "Bryant Park", "Kodaikanal Lake (Boating)", "Echo Rock"
];
const IT_DAY_FULL_1 = [
  "Manjalar Dam", "Thalaiyar Falls View Point", "Silver Cascade Falls",
  "Dolphin's Nose", "Vattakanal Falls", "Coaker's Walk", "Bryant Park",
  "Kodaikanal Lake (Boating)", "Lion Cave", "Echo Rock"
];
const IT_UPPER = [
  "Pine Forest (Shooting Point)", "Gundar Falls (Neptune's Pool)",
  "Poombarai View Point", "Murugan Temple", "Palani View Point",
  "Rabbit Farm", "Mannavanur Lake", "Mannavanur Shooting Spot",
  "Parisal Boat Ride & Zipline"
];
const IT_TOWN = [
  "Upper Lake View", "Rose Garden", "Moir Point", "Pine Forest (Cine Shooting Spot)",
  "Guna Cave (Devil's Kitchen)", "Pillar Rocks", "Golf Course",
  "Green Valley View (Suicide Point)", "Pambar Falls",
  "Homemade Chocolate Shopping", "Museum"
];

/* ---------- Munnar itineraries ---------- */
const MU_DAY1 = [
  "Cheeyappara Waterfalls", "Valara Waterfalls", "Karadippara View Point",
  "Spice Plantation Visit", "Tea Museum", "Attukad Waterfalls",
  "Blossom Hydel Park", "Punarjani Traditional Village"
];
const MU_DAY2 = [
  "Mattupetty Dam (Boating)", "Echo Point", "Kundala Lake",
  "Top Station View Point", "Photo Point", "Tea Plantation Walk",
  "Honey Bee Tree", "Rose Garden"
];
const MU_DAY3 = [
  "Eravikulam National Park (Nilgiri Tahr)", "Lakkam Waterfalls",
  "Marayoor Sandalwood Forest", "Muniyara Dolmens",
  "Chinnar Wildlife Sanctuary View", "Tea Factory Visit", "Local Spice Shopping"
];

/* ---------- Thekkady itineraries ---------- */
const TH_DAY1 = [
  "Periyar Lake Boating (Wildlife Spotting)", "Periyar Tiger Reserve Entry",
  "Spice Plantation Tour", "Elephant Junction", "Kumily Spice Market",
  "Cardamom Estate Walk"
];
const TH_DAY2 = [
  "Bamboo Rafting", "Nature Walk in Periyar", "Mangala Devi Temple View Point",
  "Chellarkovil View Point", "Murikkady Spice Gardens",
  "Kadathanadan Kalari Centre (Kalaripayattu Show)", "Ayurvedic Spice Shopping"
];
const TH_DAY3 = [
  "Vandiperiyar Tea Estate", "Ottakathalamedu View Point",
  "Pandikuzhi Valley", "Deer Park", "Green Park", "Tribal Heritage Village"
];

/* ---------- Vagamon itineraries ---------- */
const VG_DAY1 = [
  "Vagamon Pine Forest", "Vagamon Meadows", "Suicide Point (V-Shaped Gorge)",
  "Mundakayam Ghat View Point", "Ulipooni Wildlife Sanctuary View",
  "Barren Hills Sunset Point"
];
const VG_DAY2 = [
  "Kurisumala Ashram", "Thangalpara", "Marmala Waterfalls",
  "Vagamon Lake", "Paragliding Point (Kolahalamedu)",
  "Tea Estate Walk", "Pattumala Church & Tea Gardens"
];

const INC_STD = [
  "Private cab for the entire trip",
  "Accommodation",
  "Breakfast & Dinner as mentioned",
  "Toll charges",
  "Parking charges",
  "Driver charges"
];
const EXC_STD = [
  "Lunch",
  "Campfire (available at extra cost)",
  "Personal expenses",
  "Driver food allowance – ₹300 per day"
];
const EXC_KERALA = [
  "Lunch",
  "Entry tickets & boating charges at parks and sanctuaries",
  "Interstate permit charges (if applicable)",
  "Campfire (available at extra cost)",
  "Personal expenses",
  "Driver food allowance – ₹300 per day"
];

/* ------------------------------------------------------------
   PACKAGE FIELDS
   id          unique key
   dest        destination id (see AB_DESTINATIONS)
   name        display name
   type        couple | family | offer | group
   days/nights trip length
   minPax/maxPax  group size this package suits
   priceType   'total'  -> price is for the whole group
               'person' -> price is per person
   price       number (₹)
   draft       true -> price is a placeholder, shows "On Request" on the site
   vehicle, room, breakfast, dinner, checkIn, checkOut
   badge       small ribbon text ('' for none)
   popular     true -> shown in the Home page featured row
   itinerary   [{day:'Day 1', places:[...]}, ...]
   includes / excludes  arrays
   note        extra line shown on the card
   active      show on site
   ------------------------------------------------------------ */

const AB_DEFAULT_PACKAGES = [

  /* ==================== KODAIKANAL (confirmed prices) ==================== */
  {
    id: "kodai-couple-2d1n", dest: "kodaikanal",
    name: "Kodaikanal Couple Package",
    type: "couple", days: 2, nights: 1, minPax: 2, maxPax: 2,
    priceType: "total", price: 11000, draft: false,
    vehicle: "Private 4-Seater Cab",
    room: "Single Room (Couple Stay)",
    breakfast: "2 Breakfasts — Idli / Dosa / Vada / Pongal / Poori (8:30 AM)",
    dinner: "1 Dinner — Chapathi + Chicken Gravy 150g (8:30 PM)",
    pickupTime: "5:00 AM", dropTime: "8:00 PM – 9:00 PM",
    checkIn: "10:00 AM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "Most Booked", popular: true, image: "",
    note: "Above 7 years children — food charges extra.",
    itinerary: [
      { day: "Enroute (Dindigul → Kodaikanal)", places: IT_ENROUTE },
      { day: "Day 1", places: IT_UPPER },
      { day: "Day 2", places: IT_TOWN }
    ],
    includes: INC_STD, excludes: EXC_STD, active: true
  },
  {
    id: "kodai-couple-3d2n", dest: "kodaikanal",
    name: "Kodaikanal Honeymoon Couple Package",
    type: "couple", days: 3, nights: 2, minPax: 2, maxPax: 2,
    priceType: "total", price: 17000, draft: false,
    vehicle: "Private 4-Seater Cab",
    room: "Single Room (Honeymoon Stay)",
    breakfast: "2 Breakfasts — Idli / Dosa / Vada / Pongal / Poori (8:30 AM)",
    dinner: "2 Dinners — Chapathi + Chicken Gravy 150g (8:30 PM)",
    pickupTime: "5:00 AM", dropTime: "8:00 PM – 9:00 PM",
    checkIn: "10:00 AM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "Honeymoon Special", popular: true, image: "", note: "",
    itinerary: [
      { day: "Day 1", places: IT_DAY_FULL_1 },
      { day: "Day 2", places: IT_UPPER },
      { day: "Day 3", places: IT_TOWN }
    ],
    includes: INC_STD, excludes: EXC_STD, active: true
  },
  {
    id: "kodai-family-2d1n", dest: "kodaikanal",
    name: "Kodaikanal Family Package",
    type: "family", days: 2, nights: 1, minPax: 3, maxPax: 4,
    priceType: "total", price: 12000, draft: false,
    vehicle: "Private 4-Seater Cab",
    room: "Single Room (Family Stay)",
    breakfast: "2 Breakfasts — Idli / Dosa / Vada / Pongal / Poori (8:30 AM)",
    dinner: "1 Dinner — Chapathi + Chicken Gravy 150g (8:30 PM)",
    pickupTime: "5:00 AM", dropTime: "8:00 PM – 9:00 PM",
    checkIn: "10:00 AM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "", popular: false, image: "", note: "",
    itinerary: [
      { day: "Enroute (Dindigul → Kodaikanal)", places: IT_ENROUTE },
      { day: "Day 1", places: IT_UPPER },
      { day: "Day 2", places: IT_TOWN }
    ],
    includes: INC_STD, excludes: EXC_STD, active: true
  },
  {
    id: "kodai-family-3d2n", dest: "kodaikanal",
    name: "Kodaikanal Family Package",
    type: "family", days: 3, nights: 2, minPax: 3, maxPax: 4,
    priceType: "total", price: 18000, draft: false,
    vehicle: "Private 4-Seater Cab",
    room: "Single Room (Family Stay)",
    breakfast: "2 Breakfasts — Idli / Dosa / Vada / Pongal / Poori (8:30 AM)",
    dinner: "2 Dinners — Chapathi + Chicken Gravy 150g (8:30 PM)",
    pickupTime: "5:00 AM", dropTime: "8:00 PM – 9:00 PM",
    checkIn: "10:00 AM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "Family Favourite", popular: true, image: "", note: "",
    itinerary: [
      { day: "Day 1", places: IT_DAY_FULL_1 },
      { day: "Day 2", places: IT_UPPER },
      { day: "Day 3", places: IT_TOWN }
    ],
    includes: INC_STD, excludes: EXC_STD, active: true
  },
  {
    id: "kodai-family-5to6-3d2n", dest: "kodaikanal",
    name: "Kodaikanal Family Package (5–6 Members)",
    type: "family", days: 3, nights: 2, minPax: 5, maxPax: 6,
    priceType: "total", price: 25000, draft: false,
    vehicle: "Private 7-Seater Cab", room: "Family Room",
    breakfast: "2 Breakfasts — Idli / Dosa / Vada / Pongal / Poori (8:30 AM)",
    dinner: "2 Dinners — Chapathi + Chicken Gravy 150g (8:30 PM)",
    pickupTime: "5:00 AM", dropTime: "8:00 PM – 9:00 PM",
    checkIn: "10:00 AM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "Big Family", popular: false, image: "", note: "",
    itinerary: [
      { day: "Day 1", places: IT_DAY_FULL_1 },
      { day: "Day 2", places: IT_UPPER },
      { day: "Day 3", places: IT_TOWN }
    ],
    includes: INC_STD, excludes: EXC_STD, active: true
  },
  {
    id: "kodai-group-2d1n", dest: "kodaikanal",
    name: "Kodaikanal Group Package",
    type: "group", days: 2, nights: 1, minPax: 5, maxPax: 6,
    priceType: "total", price: 16000, draft: false,
    vehicle: "Private Cab", room: "Family Room",
    breakfast: "2 Breakfasts — Idli / Dosa / Vada / Pongal / Poori (8:30 AM)",
    dinner: "1 Dinner — Chapathi + Chicken Gravy 150g (8:30 PM)",
    pickupTime: "5:00 AM", dropTime: "8:00 PM – 9:00 PM",
    checkIn: "10:00 AM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "", popular: false, image: "", note: "",
    itinerary: [
      { day: "Enroute (Dindigul → Kodaikanal)", places: IT_ENROUTE },
      { day: "Day 1", places: IT_UPPER },
      { day: "Day 2", places: IT_TOWN }
    ],
    includes: INC_STD, excludes: EXC_STD, active: true
  },
  {
    id: "kodai-offer-2d1n", dest: "kodaikanal",
    name: "Kodaikanal Offer Package — ₹2,500",
    type: "offer", days: 2, nights: 1, minPax: 7, maxPax: 40,
    priceType: "person", price: 2500, draft: false,
    vehicle: "Private Cab (Traveller / Tempo as per group size)", room: "Family Room",
    breakfast: "2 Breakfasts — Idli / Dosa / Vada / Pongal / Poori (8:30 AM)",
    dinner: "1 Dinner — Chapathi + Chicken Gravy 150g (8:30 PM)",
    pickupTime: "5:00 AM", dropTime: "8:00 PM – 9:00 PM",
    checkIn: "10:00 AM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "Best Value", popular: true, image: "",
    note: "Offer valid for groups of 7 members and above only.",
    itinerary: [
      { day: "Enroute (Dindigul → Kodaikanal)", places: IT_ENROUTE },
      { day: "Day 1", places: IT_UPPER },
      { day: "Day 2", places: IT_TOWN }
    ],
    includes: INC_STD, excludes: EXC_STD, active: true
  },
  {
    id: "kodai-offer-3d2n", dest: "kodaikanal",
    name: "Kodaikanal Offer Package — ₹3,700",
    type: "offer", days: 3, nights: 2, minPax: 7, maxPax: 40,
    priceType: "person", price: 3700, draft: false,
    vehicle: "Private Cab (Traveller / Tempo as per group size)", room: "Family Room",
    breakfast: "2 Breakfasts — Idli / Dosa / Vada / Pongal / Poori (8:30 AM)",
    dinner: "2 Dinners — Chapathi + Chicken Gravy 150g (8:30 PM)",
    pickupTime: "5:00 AM", dropTime: "8:00 PM – 9:00 PM",
    checkIn: "10:00 AM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "Group Offer", popular: true, image: "",
    note: "Offer valid for groups of 7 members and above only.",
    itinerary: [
      { day: "Day 1", places: IT_DAY_FULL_1 },
      { day: "Day 2", places: IT_UPPER },
      { day: "Day 3", places: IT_TOWN }
    ],
    includes: INC_STD, excludes: EXC_STD, active: true
  },

  /* ==================== MUNNAR (placeholder prices) ==================== */
  {
    id: "munnar-couple-2d1n", dest: "munnar",
    name: "Munnar Couple Package",
    type: "couple", days: 2, nights: 1, minPax: 2, maxPax: 2,
    priceType: "total", price: 14000, draft: true,
    vehicle: "Private 4-Seater Cab",
    room: "Deluxe Room (Couple Stay)",
    breakfast: "2 Breakfasts — South Indian / Kerala menu (8:30 AM)",
    dinner: "1 Dinner — Chapathi / Rice + Gravy (8:30 PM)",
    pickupTime: "4:00 AM", dropTime: "9:00 PM – 10:00 PM",
    checkIn: "12:00 PM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "New Destination", popular: true, image: "",
    note: "Kerala state permit and park entry tickets are extra.",
    itinerary: [
      { day: "Day 1 (Enroute + Munnar Town)", places: MU_DAY1 },
      { day: "Day 2 (Mattupetty Circuit)", places: MU_DAY2 }
    ],
    includes: INC_STD, excludes: EXC_KERALA, active: true
  },
  {
    id: "munnar-couple-3d2n", dest: "munnar",
    name: "Munnar Honeymoon Couple Package",
    type: "couple", days: 3, nights: 2, minPax: 2, maxPax: 2,
    priceType: "total", price: 21000, draft: true,
    vehicle: "Private 4-Seater Cab",
    room: "Deluxe Room (Honeymoon Stay)",
    breakfast: "2 Breakfasts — South Indian / Kerala menu (8:30 AM)",
    dinner: "2 Dinners — Chapathi / Rice + Gravy (8:30 PM)",
    pickupTime: "4:00 AM", dropTime: "9:00 PM – 10:00 PM",
    checkIn: "12:00 PM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "Honeymoon Special", popular: false, image: "",
    note: "Kerala state permit and park entry tickets are extra.",
    itinerary: [
      { day: "Day 1 (Enroute + Munnar Town)", places: MU_DAY1 },
      { day: "Day 2 (Mattupetty Circuit)", places: MU_DAY2 },
      { day: "Day 3 (Eravikulam & Marayoor)", places: MU_DAY3 }
    ],
    includes: INC_STD, excludes: EXC_KERALA, active: true
  },
  {
    id: "munnar-family-3d2n", dest: "munnar",
    name: "Munnar Family Package",
    type: "family", days: 3, nights: 2, minPax: 3, maxPax: 6,
    priceType: "total", price: 28000, draft: true,
    vehicle: "Private 7-Seater Cab", room: "Family Room",
    breakfast: "2 Breakfasts — South Indian / Kerala menu (8:30 AM)",
    dinner: "2 Dinners — Chapathi / Rice + Gravy (8:30 PM)",
    pickupTime: "4:00 AM", dropTime: "9:00 PM – 10:00 PM",
    checkIn: "12:00 PM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "", popular: false, image: "",
    note: "Kerala state permit and park entry tickets are extra.",
    itinerary: [
      { day: "Day 1 (Enroute + Munnar Town)", places: MU_DAY1 },
      { day: "Day 2 (Mattupetty Circuit)", places: MU_DAY2 },
      { day: "Day 3 (Eravikulam & Marayoor)", places: MU_DAY3 }
    ],
    includes: INC_STD, excludes: EXC_KERALA, active: true
  },
  {
    id: "munnar-offer-3d2n", dest: "munnar",
    name: "Munnar Group Offer Package",
    type: "offer", days: 3, nights: 2, minPax: 7, maxPax: 40,
    priceType: "person", price: 4500, draft: true,
    vehicle: "Traveller / Tempo as per group size", room: "Family Room",
    breakfast: "2 Breakfasts — South Indian / Kerala menu (8:30 AM)",
    dinner: "2 Dinners — Chapathi / Rice + Gravy (8:30 PM)",
    pickupTime: "4:00 AM", dropTime: "9:00 PM – 10:00 PM",
    checkIn: "12:00 PM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "Group Offer", popular: false, image: "",
    note: "Offer valid for groups of 7 members and above only. Park entry tickets extra.",
    itinerary: [
      { day: "Day 1 (Enroute + Munnar Town)", places: MU_DAY1 },
      { day: "Day 2 (Mattupetty Circuit)", places: MU_DAY2 },
      { day: "Day 3 (Eravikulam & Marayoor)", places: MU_DAY3 }
    ],
    includes: INC_STD, excludes: EXC_KERALA, active: true
  },

  /* ==================== THEKKADY (placeholder prices) ==================== */
  {
    id: "thekkady-couple-2d1n", dest: "thekkady",
    name: "Thekkady Couple Package",
    type: "couple", days: 2, nights: 1, minPax: 2, maxPax: 2,
    priceType: "total", price: 13000, draft: true,
    vehicle: "Private 4-Seater Cab", room: "Deluxe Room (Couple Stay)",
    breakfast: "2 Breakfasts — South Indian / Kerala menu (8:30 AM)",
    dinner: "1 Dinner — Chapathi / Rice + Gravy (8:30 PM)",
    pickupTime: "4:30 AM", dropTime: "9:00 PM – 10:00 PM",
    checkIn: "12:00 PM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "New Destination", popular: true, image: "",
    note: "Periyar boating and safari tickets are booked separately at the counter.",
    itinerary: [
      { day: "Day 1 (Periyar & Spices)", places: TH_DAY1 },
      { day: "Day 2 (Rafting & View Points)", places: TH_DAY2 }
    ],
    includes: INC_STD, excludes: EXC_KERALA, active: true
  },
  {
    id: "thekkady-family-3d2n", dest: "thekkady",
    name: "Thekkady Family Package",
    type: "family", days: 3, nights: 2, minPax: 3, maxPax: 6,
    priceType: "total", price: 26000, draft: true,
    vehicle: "Private 7-Seater Cab", room: "Family Room",
    breakfast: "2 Breakfasts — South Indian / Kerala menu (8:30 AM)",
    dinner: "2 Dinners — Chapathi / Rice + Gravy (8:30 PM)",
    pickupTime: "4:30 AM", dropTime: "9:00 PM – 10:00 PM",
    checkIn: "12:00 PM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "", popular: false, image: "",
    note: "Periyar boating and safari tickets are booked separately at the counter.",
    itinerary: [
      { day: "Day 1 (Periyar & Spices)", places: TH_DAY1 },
      { day: "Day 2 (Rafting & View Points)", places: TH_DAY2 },
      { day: "Day 3 (Tea Estates & Valleys)", places: TH_DAY3 }
    ],
    includes: INC_STD, excludes: EXC_KERALA, active: true
  },
  {
    id: "thekkady-offer-2d1n", dest: "thekkady",
    name: "Thekkady Group Offer Package",
    type: "offer", days: 2, nights: 1, minPax: 7, maxPax: 40,
    priceType: "person", price: 3200, draft: true,
    vehicle: "Traveller / Tempo as per group size", room: "Family Room",
    breakfast: "2 Breakfasts — South Indian / Kerala menu (8:30 AM)",
    dinner: "1 Dinner — Chapathi / Rice + Gravy (8:30 PM)",
    pickupTime: "4:30 AM", dropTime: "9:00 PM – 10:00 PM",
    checkIn: "12:00 PM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "Group Offer", popular: false, image: "",
    note: "Offer valid for groups of 7 members and above only. Boating tickets extra.",
    itinerary: [
      { day: "Day 1 (Periyar & Spices)", places: TH_DAY1 },
      { day: "Day 2 (Rafting & View Points)", places: TH_DAY2 }
    ],
    includes: INC_STD, excludes: EXC_KERALA, active: true
  },

  /* ==================== VAGAMON (placeholder prices) ==================== */
  {
    id: "vagamon-couple-2d1n", dest: "vagamon",
    name: "Vagamon Couple Package",
    type: "couple", days: 2, nights: 1, minPax: 2, maxPax: 2,
    priceType: "total", price: 12500, draft: true,
    vehicle: "Private 4-Seater Cab", room: "Deluxe Room (Couple Stay)",
    breakfast: "2 Breakfasts — South Indian / Kerala menu (8:30 AM)",
    dinner: "1 Dinner — Chapathi / Rice + Gravy (8:30 PM)",
    pickupTime: "4:30 AM", dropTime: "9:00 PM – 10:00 PM",
    checkIn: "12:00 PM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "New Destination", popular: true, image: "",
    note: "Paragliding is subject to weather and is charged separately.",
    itinerary: [
      { day: "Day 1 (Meadows & Pine Forest)", places: VG_DAY1 },
      { day: "Day 2 (Kurisumala & Waterfalls)", places: VG_DAY2 }
    ],
    includes: INC_STD, excludes: EXC_KERALA, active: true
  },
  {
    id: "vagamon-family-2d1n", dest: "vagamon",
    name: "Vagamon Family Package",
    type: "family", days: 2, nights: 1, minPax: 3, maxPax: 6,
    priceType: "total", price: 17500, draft: true,
    vehicle: "Private 7-Seater Cab", room: "Family Room",
    breakfast: "2 Breakfasts — South Indian / Kerala menu (8:30 AM)",
    dinner: "1 Dinner — Chapathi / Rice + Gravy (8:30 PM)",
    pickupTime: "4:30 AM", dropTime: "9:00 PM – 10:00 PM",
    checkIn: "12:00 PM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "", popular: false, image: "",
    note: "Paragliding is subject to weather and is charged separately.",
    itinerary: [
      { day: "Day 1 (Meadows & Pine Forest)", places: VG_DAY1 },
      { day: "Day 2 (Kurisumala & Waterfalls)", places: VG_DAY2 }
    ],
    includes: INC_STD, excludes: EXC_KERALA, active: true
  },
  {
    id: "vagamon-offer-2d1n", dest: "vagamon",
    name: "Vagamon Group Offer Package",
    type: "offer", days: 2, nights: 1, minPax: 7, maxPax: 40,
    priceType: "person", price: 2900, draft: true,
    vehicle: "Traveller / Tempo as per group size", room: "Family Room",
    breakfast: "2 Breakfasts — South Indian / Kerala menu (8:30 AM)",
    dinner: "1 Dinner — Chapathi / Rice + Gravy (8:30 PM)",
    pickupTime: "4:30 AM", dropTime: "9:00 PM – 10:00 PM",
    checkIn: "12:00 PM", checkOut: "10:00 AM", sightseeing: "9:00 AM – 6:00 PM",
    badge: "Group Offer", popular: false, image: "",
    note: "Offer valid for groups of 7 members and above only.",
    itinerary: [
      { day: "Day 1 (Meadows & Pine Forest)", places: VG_DAY1 },
      { day: "Day 2 (Kurisumala & Waterfalls)", places: VG_DAY2 }
    ],
    includes: INC_STD, excludes: EXC_KERALA, active: true
  }
];

const AB_DEFAULT_TESTIMONIALS = [
  { name: "Praveen & Divya", place: "Chennai", stars: 5,
    text: "Booked the 2 days Kodaikanal couple package. Driver was on time at 5 AM, room was clean and the food was really good. Coaker's Walk in the morning mist was unforgettable." },
  { name: "Ramesh Kumar", place: "Coimbatore", stars: 5,
    text: "We went as a family of 6. The 7-seater was comfortable and the whole trip was well planned. Mannavanur Lake was the highlight for our kids." },
  { name: "Anitha S.", place: "Madurai", stars: 5,
    text: "Our college group of 12 took the ₹2,500 offer package. Very affordable and they covered every spot we asked for. Highly recommend A&B." },
  { name: "Suresh & Meena", place: "Trichy", stars: 5,
    text: "Honeymoon 3 days package. Everything from pickup to drop was arranged properly. No hidden charges at all." }
];

/* ============================================================
   GALLERY — grouped by destination
   ============================================================ */
const AB_GALLERY = [
  /* Kodaikanal */
  { dest:"kodaikanal", name:"Kodaikanal Lake", tag:"Boating" },
  { dest:"kodaikanal", name:"Coaker's Walk", tag:"Valley View" },
  { dest:"kodaikanal", name:"Pillar Rocks", tag:"Landmark" },
  { dest:"kodaikanal", name:"Silver Cascade Falls", tag:"Waterfall" },
  { dest:"kodaikanal", name:"Pine Forest", tag:"Shooting Spot" },
  { dest:"kodaikanal", name:"Mannavanur Lake", tag:"Zipline" },
  { dest:"kodaikanal", name:"Guna Cave", tag:"Devil's Kitchen" },
  { dest:"kodaikanal", name:"Poombarai View Point", tag:"Sunrise" },
  { dest:"kodaikanal", name:"Bryant Park", tag:"Gardens" },
  { dest:"kodaikanal", name:"Green Valley View", tag:"Panorama" },
  { dest:"kodaikanal", name:"Dolphin's Nose", tag:"Trek" },
  { dest:"kodaikanal", name:"Rabbit Farm", tag:"Kids Favourite" },
  /* Munnar */
  { dest:"munnar", name:"Mattupetty Dam", tag:"Boating" },
  { dest:"munnar", name:"Echo Point", tag:"Lake View" },
  { dest:"munnar", name:"Eravikulam National Park", tag:"Nilgiri Tahr" },
  { dest:"munnar", name:"Top Station", tag:"Highest View Point" },
  { dest:"munnar", name:"Kundala Lake", tag:"Pedal Boating" },
  { dest:"munnar", name:"Attukad Waterfalls", tag:"Waterfall" },
  { dest:"munnar", name:"Tea Museum", tag:"Tea Tasting" },
  { dest:"munnar", name:"Lakkam Waterfalls", tag:"Marayoor Road" },
  { dest:"munnar", name:"Blossom Hydel Park", tag:"Gardens" },
  { dest:"munnar", name:"Cheeyappara Falls", tag:"Enroute" },
  { dest:"munnar", name:"Marayoor Sandalwood Forest", tag:"Nature" },
  { dest:"munnar", name:"Tea Plantations", tag:"Photo Point" },
  /* Thekkady */
  { dest:"thekkady", name:"Periyar Lake", tag:"Boat Safari" },
  { dest:"thekkady", name:"Periyar Tiger Reserve", tag:"Wildlife" },
  { dest:"thekkady", name:"Spice Plantation", tag:"Guided Walk" },
  { dest:"thekkady", name:"Bamboo Rafting", tag:"Adventure" },
  { dest:"thekkady", name:"Elephant Junction", tag:"Elephant Ride" },
  { dest:"thekkady", name:"Kumily Spice Market", tag:"Shopping" },
  { dest:"thekkady", name:"Kalaripayattu Show", tag:"Culture" },
  { dest:"thekkady", name:"Chellarkovil View Point", tag:"Valley View" },
  { dest:"thekkady", name:"Murikkady", tag:"Cardamom Estates" },
  { dest:"thekkady", name:"Pandikuzhi", tag:"Picnic Spot" },
  /* Vagamon */
  { dest:"vagamon", name:"Vagamon Meadows", tag:"Green Hills" },
  { dest:"vagamon", name:"Pine Forest", tag:"Nature Walk" },
  { dest:"vagamon", name:"Suicide Point", tag:"V-Shaped Gorge" },
  { dest:"vagamon", name:"Kurisumala", tag:"Hill Trek" },
  { dest:"vagamon", name:"Marmala Waterfalls", tag:"Waterfall" },
  { dest:"vagamon", name:"Vagamon Lake", tag:"Boating" },
  { dest:"vagamon", name:"Kolahalamedu", tag:"Paragliding" },
  { dest:"vagamon", name:"Pattumala Church", tag:"Tea Gardens" },
  { dest:"vagamon", name:"Thangalpara", tag:"Rock Formation" },
  { dest:"vagamon", name:"Mundakayam Ghat", tag:"View Point" }
];
