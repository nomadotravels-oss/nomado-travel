export const regions = [
  {
    id: "kashmir",
    name: "Kashmir",
    tagline: "The Valley of Valleys",
    desc: "Houseboats on Dal Lake, saffron fields, Mughal gardens, and mountains that touch the clouds.",
    image: "/images/kashmir-tile.jpg",
    destinations: [
      { 
        id: "gulmarg", 
        name: "Gulmarg", 
        desc: "Ski slopes & alpine meadows", 
        image: "/images/gulmarg.jpg",
        longDesc: "Gulmarg, meaning 'Meadow of Flowers', is a cup-shaped valley nestled in the Pir Panjal Range of the Himalayas. Famous for its world-class ski slopes in winter and lush green meadows scattered with wildflowers in summer, it offers breathtaking views of Nanga Parbat.",
        highlights: ["Gondola Ride to Phase 2", "World's Highest Golf Course", "Apharwat Peak Trek", "Skiing and Snowboarding in Winter"],
        bestTime: "October to March for snow; April to June for flowers.",
        coordinates: { lat: 34.0494, lng: 74.3804 }
      },
      { 
        id: "pahalgam", 
        name: "Pahalgam", 
        desc: "The shepherd's meadow", 
        image: "/images/pahalgam.jpg",
        longDesc: "Situated at the confluence of the streams flowing from Sheshnag Lake and the Lidder River, Pahalgam is famously known as the 'Valley of Shepherds'. It is a pristine retreat known for its alpine beauty, pine forests, and as the starting point for the annual Amarnath Yatra.",
        highlights: ["Betaab Valley", "Aru Valley", "Baisaran (Mini Switzerland)", "Lidder River Rafting"],
        bestTime: "March to November.",
        coordinates: { lat: 34.0152, lng: 75.3217 }
      },
      { 
        id: "sonmarg", 
        name: "Sonmarg", 
        desc: "Gateway to the glaciers", 
        image: "/images/sonmarg.jpg",
        longDesc: "Sonmarg, or the 'Meadow of Gold', lies against a backdrop of snowy mountains and is a vital point on the historical Silk Road. It serves as a base camp for the holy Amarnath Yatra and various trekking routes leading to Himalayan lakes.",
        highlights: ["Thajiwas Glacier", "Zoji La Pass", "Vishansar Lake Trek", "Sindh River"],
        bestTime: "April to October.",
        coordinates: { lat: 34.3039, lng: 75.2973 }
      },
      { 
        id: "srinagar", 
        name: "Srinagar", 
        desc: "Houseboats & walled city", 
        image: "/images/houses-lake.jpg",
        longDesc: "The summer capital of Jammu and Kashmir, Srinagar is famous for its serene Dal Lake, traditional houseboats, and majestic Mughal Gardens. The city is a vibrant tapestry of culture, heritage, and timeless beauty.",
        highlights: ["Shikara Ride on Dal Lake", "Mughal Gardens (Shalimar & Nishat)", "Shankaracharya Temple", "Jamia Masjid"],
        bestTime: "April to October.",
        coordinates: { lat: 34.0837, lng: 74.7973 }
      },
      { 
        id: "doodhpathri", 
        name: "Doodhpathri", 
        desc: "Untouched rolling meadows", 
        image: "/images/doodhpathri.jpg",
        longDesc: "Doodhpathri, translating to 'Valley of Milk', is a gorgeous meadow with an emerald river flowing through it. It remains relatively untouched by heavy tourist traffic, making it a perfect spot for peaceful picnics and quiet nature walks.",
        highlights: ["Shaliganga River", "Rolling Alpine Meadows", "Pine Forest Trails", "Nomadic Gujjar Huts"],
        bestTime: "May to September.",
        coordinates: { lat: 33.8643, lng: 74.5684 }
      },
      { 
        id: "yousmarg", 
        name: "Yousmarg", 
        desc: "Pine forests & wildflowers", 
        image: "/images/yousmarg.jpg",
        longDesc: "Yousmarg is a tranquil meadow surrounded by dense pine forests and the snow-capped Pir Panjal range. It offers a sense of profound solitude and is ideal for short treks, such as the trail leading to the frozen Nilnag lake.",
        highlights: ["Nilnag Lake Trek", "Doodh Ganga River", "Sang-e-Safed Valley", "Horse Riding"],
        bestTime: "April to September.",
        coordinates: { lat: 33.8272, lng: 74.6644 }
      },
    ],
  },
  {
    id: "ladakh",
    name: "Ladakh",
    tagline: "The Land of High Passes",
    desc: "Moonscapes, monasteries, turquoise lakes, and a silence that recalibrates something deep inside you.",
    image: "/images/ladakh.jpg",
    destinations: [
      { 
        id: "leh", 
        name: "Leh", 
        desc: "Ancient monasteries under cobalt skies", 
        image: "/images/leh.jpg",
        longDesc: "Leh, the joint capital of Ladakh, is a high-desert city in the Himalayas characterized by its stunning barren landscapes, centuries-old Buddhist monasteries, and vibrant Tibetan culture.",
        highlights: ["Leh Palace", "Shanti Stupa", "Thiksey Monastery", "Leh Main Market"],
        bestTime: "May to September.",
        coordinates: { lat: 34.1526, lng: 77.5771 }
      },
      { 
        id: "kargil", 
        name: "Kargil", 
        desc: "Where cultures converge", 
        image: "/images/kargil.jpg",
        longDesc: "Kargil, situated midway between Srinagar and Leh, is a district of profound historical significance and rugged beauty. It acts as a cultural bridge between the Kashmir valley and the high altitude deserts of Ladakh.",
        highlights: ["Kargil War Memorial", "Suru Valley", "Mulbekh Monastery", "Hunderman Village"],
        bestTime: "June to September.",
        coordinates: { lat: 34.5539, lng: 76.1349 }
      },
      { 
        id: "nubra-valley", 
        name: "Nubra Valley", 
        desc: "Sand dunes & Bactrian camels", 
        image: "/images/nubra.jpg",
        longDesc: "Nubra Valley is a high-altitude cold desert famous for its striking sand dunes and double-humped Bactrian camels. Accessed via the world's highest motorable pass, Khardung La, it is a landscape of stark, otherworldly beauty.",
        highlights: ["Hunder Sand Dunes", "Diskit Monastery", "Bactrian Camel Safari", "Khardung La Pass"],
        bestTime: "June to September.",
        coordinates: { lat: 34.6863, lng: 77.5673 }
      },
      { 
        id: "turtuk", 
        name: "Turtuk", 
        desc: "A Balti village at the edge of the world", 
        image: "/images/turtuk.jpg",
        longDesc: "Turtuk is the northernmost village of India, located in the Nubra Valley region. Opened to tourists relatively recently, it offers a rare glimpse into unique Balti culture, distinct architecture, and lush apricot orchards.",
        highlights: ["Balti Heritage House", "Turtuk Waterfall", "Apricot Orchards", "Polo Grounds"],
        bestTime: "June to September.",
        coordinates: { lat: 34.8475, lng: 76.8258 }
      },
      { 
        id: "pangong", 
        name: "Pangong", 
        desc: "The highest saltwater lake", 
        image: "/images/pangong.jpg",
        longDesc: "Pangong Tso is an endorheic lake in the Himalayas situated at an elevation of about 4,350 m. Famous for its ever-changing hues of blue and pristine waters, the lake extends from India to Tibet, offering mesmerizing, panoramic views.",
        highlights: ["Sunrise by the Lake", "Camping at Spangmik", "Stargazing", "Bird Watching"],
        bestTime: "May to September.",
        coordinates: { lat: 33.7225, lng: 78.8986 }
      },
      { 
        id: "hanle", 
        name: "Hanle", 
        desc: "Dark skies & ancient monastery", 
        image: "/images/hanle.jpg",
        longDesc: "Hanle is a historic village in the Changthang region of Ladakh. It is home to the majestic Hanle Monastery and the Indian Astronomical Observatory, boasting some of the darkest skies in India perfect for astrophotography.",
        highlights: ["Indian Astronomical Observatory", "Hanle Monastery", "Astrophotography", "Umling La Pass"],
        bestTime: "June to September.",
        coordinates: { lat: 32.7758, lng: 78.9818 }
      },
    ],
  },
];
