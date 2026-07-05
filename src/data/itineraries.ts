export type DayPlan = {
  day: number;
  title: string;
  activities: string[];
};

export type Itinerary = {
  id: string;
  name: string;
  duration: string;
  desc: string;
  image: string;
  highlights: string[];
  days: DayPlan[];
  inclusions: string[];
  exclusions: string[];
};

export const regionItineraries: Record<string, {
  name: string;
  tagline: string;
  heroImage: string;
  itineraries: Itinerary[];
}> = {
  kashmir: {
    name: "Kashmir",
    tagline: "The Valley of Valleys",
    heroImage: "/images/kashmir-tile.jpg",
    itineraries: [
      {
        id: "srinagar-gulmarg-4-day",
        name: "4-Day Srinagar & Gulmarg",
        duration: "4 Days / 3 Nights",
        desc: "A quick getaway into the heart of Kashmir. Experience the floating life on Dal Lake and the snowy heights of Gulmarg.",
        image: "/images/houses-lake.jpg",
        highlights: ["Dal Lake Shikara Ride", "Houseboat Stay", "Gulmarg Gondola", "Mughal Gardens"],
        days: [
          { day: 1, title: "Arrival in Srinagar & Dal Lake", activities: ["Arrive at Srinagar Airport.", "Transfer to a traditional Houseboat.", "Enjoy an evening Shikara ride on Dal Lake."] },
          { day: 2, title: "Srinagar Local Sightseeing", activities: ["Visit the famous Mughal Gardens (Shalimar & Nishat Bagh).", "Explore Shankaracharya Temple.", "Stroll through the Old City markets."] },
          { day: 3, title: "Day Trip to Gulmarg", activities: ["Drive to the meadow of flowers, Gulmarg.", "Experience the Gondola ride to Phase 1 or 2.", "Return to Srinagar in the evening."] },
          { day: 4, title: "Departure", activities: ["Enjoy a Kashmiri Kehwa breakfast.", "Transfer to Srinagar Airport for your onward journey."] }
        ],
        inclusions: ["Airport Transfers", "Houseboat & Hotel Accommodation", "Daily Breakfast & Dinner", "Shikara Ride (1 Hour)"],
        exclusions: ["Flights", "Lunch", "Gondola Tickets", "Personal Expenses"]
      },
      {
        id: "classic-kashmir-5-day",
        name: "5-Day Classic Kashmir Valley",
        duration: "5 Days / 4 Nights",
        desc: "Our most popular introductory tour covering the essential triad of Srinagar, Gulmarg, and Pahalgam.",
        image: "/images/pahalgam.jpg",
        highlights: ["Srinagar Old City", "Betaab Valley in Pahalgam", "Gulmarg Ski Slopes", "Aru Valley"],
        days: [
          { day: 1, title: "Welcome to Srinagar", activities: ["Arrival and transfer to hotel.", "Visit Mughal Gardens.", "Evening walk along Boulevard Road."] },
          { day: 2, title: "Excursion to Gulmarg", activities: ["Drive to Gulmarg.", "Take the Gondola ride or enjoy skiing.", "Drive back to Srinagar."] },
          { day: 3, title: "Srinagar to Pahalgam", activities: ["Drive to Pahalgam via Pampore saffron fields.", "Check-in to your resort by the Lidder River.", "Evening at leisure."] },
          { day: 4, title: "Pahalgam Exploration", activities: ["Visit Betaab Valley and Aru Valley.", "Enjoy pony rides or short treks.", "Drive back to Srinagar and stay in a Houseboat."] },
          { day: 5, title: "Farewell Kashmir", activities: ["Morning Shikara ride on Dal Lake.", "Transfer to the airport for departure."] }
        ],
        inclusions: ["Airport Transfers", "Accommodation in Srinagar & Pahalgam", "Daily Breakfast & Dinner", "Private Transport"],
        exclusions: ["Flights", "Aru/Betaab Valley Cab (Local Union)", "Gondola Tickets"]
      },
      {
        id: "alpine-lakes-trek-6-day",
        name: "6-Day Alpine Lakes Trek",
        duration: "6 Days / 5 Nights",
        desc: "For the adventurous soul. Trek through pristine pine forests to discover the hidden high-altitude lakes of Kashmir.",
        image: "/images/sonmarg.jpg",
        highlights: ["Sonmarg Base Camp", "Vishansar Lake", "Krishansar Lake", "Thajiwas Glacier"],
        days: [
          { day: 1, title: "Arrival & Transfer to Sonmarg", activities: ["Arrive in Srinagar and drive directly to Sonmarg.", "Acclimatization and briefing."] },
          { day: 2, title: "Trek to Nichnai", activities: ["Start the trek towards Nichnai via Shokdari.", "Camp overnight in the alpine meadows."] },
          { day: 3, title: "Nichnai to Vishansar Lake", activities: ["Cross the Nichnai Pass.", "Descend into the valley of Vishansar Lake.", "Camp by the lake."] },
          { day: 4, title: "Explore Krishansar & Return", activities: ["Hike up to Krishansar Lake for panoramic views.", "Begin descent back towards basecamp."] },
          { day: 5, title: "Return to Srinagar", activities: ["Finish trek at Sonmarg.", "Drive back to Srinagar for a relaxing Houseboat stay."] },
          { day: 6, title: "Departure", activities: ["Transfer to Srinagar Airport."] }
        ],
        inclusions: ["Trekking Permits", "Tents & Sleeping Bags", "Trek Guide & Cook", "All Meals during trek"],
        exclusions: ["Flights", "Personal Porter", "Trekking Gear (Shoes/Jackets)"]
      },
      {
        id: "kashmir-grand-tour-7-day",
        name: "7-Day Kashmir Grand Tour",
        duration: "7 Days / 6 Nights",
        desc: "A comprehensive exploration taking you deeper into the lesser-known meadows of Doodhpathri and Yousmarg alongside the classics.",
        image: "/images/yousmarg.jpg",
        highlights: ["Yousmarg Meadows", "Doodhpathri Streams", "Pahalgam Valleys", "Houseboat Experience"],
        days: [
          { day: 1, title: "Arrival in Srinagar", activities: ["Srinagar arrival and Houseboat check-in.", "Evening Shikara ride."] },
          { day: 2, title: "Doodhpathri Excursion", activities: ["Day trip to the 'Valley of Milk'.", "Picnic by the Shaliganga River.", "Return to Srinagar."] },
          { day: 3, title: "Srinagar to Pahalgam", activities: ["Drive to Pahalgam.", "Explore local markets and Lidder river banks."] },
          { day: 4, title: "Pahalgam Sightseeing", activities: ["Visit Chandanwari and Betaab Valley.", "Relaxing evening in Pahalgam."] },
          { day: 5, title: "Gulmarg Day Tour", activities: ["Drive from Pahalgam to Gulmarg.", "Gondola ride and snow activities.", "Drive to Srinagar for overnight stay."] },
          { day: 6, title: "Yousmarg Exploration", activities: ["Day trip to Yousmarg.", "Trek to Doodh Ganga or Nilnag lake.", "Return to Srinagar."] },
          { day: 7, title: "Departure", activities: ["Transfer to airport."] }
        ],
        inclusions: ["All Transfers & Sightseeing", "Accommodation with Breakfast & Dinner", "Shikara Ride"],
        exclusions: ["Flights", "Local Cabs in Pahalgam", "Gondola Tickets"]
      },
      {
        id: "winter-wonderland-5-day",
        name: "5-Day Winter Wonderland",
        duration: "5 Days / 4 Nights",
        desc: "Witness the valley covered in a blanket of white. Focuses heavily on snow activities and cozy winter experiences.",
        image: "/images/gulmarg.jpg",
        highlights: ["Skiing in Gulmarg", "Snowboarding", "Frozen Dal Lake views", "Kashmiri Kehwa & Wazwan"],
        days: [
          { day: 1, title: "Arrival in Winter Srinagar", activities: ["Arrive in Srinagar.", "Check-in to a centrally heated hotel.", "Visit local markets for winter wear if needed."] },
          { day: 2, title: "Srinagar to Gulmarg", activities: ["Drive to Gulmarg, the winter capital.", "Check-in to a cozy resort.", "Basic skiing lessons in the afternoon."] },
          { day: 3, title: "Gulmarg Snow Activities", activities: ["Gondola ride to Phase 1 (Kongdoori).", "Snowboarding, sledging, or snow-biking.", "Evening by the bonfire."] },
          { day: 4, title: "Return to Srinagar", activities: ["Morning at leisure in Gulmarg.", "Drive back to Srinagar.", "Enjoy traditional Wazwan dinner."] },
          { day: 5, title: "Departure", activities: ["Transfer to airport."] }
        ],
        inclusions: ["Centrally Heated Accommodation", "Breakfast & Dinner", "Skiing Basics (1 Hour)"],
        exclusions: ["Flights", "Advanced Ski Gear", "Gondola Tickets"]
      }
    ]
  },
  ladakh: {
    name: "Ladakh",
    tagline: "The Land of High Passes",
    heroImage: "/images/ladakh.jpg",
    itineraries: [
      {
        id: "leh-pangong-5-day",
        name: "5-Day Leh & Pangong Highlights",
        duration: "5 Days / 4 Nights",
        desc: "A short but breathtaking introduction to Ladakh, featuring ancient monasteries and the legendary Pangong Tso.",
        image: "/images/leh.jpg",
        highlights: ["Leh Palace", "Thiksey Monastery", "Chang La Pass", "Pangong Lake"],
        days: [
          { day: 1, title: "Arrival in Leh", activities: ["Arrive at Kushok Bakula Rimpochee Airport.", "Strict full-day rest for acclimatization.", "Short evening walk to Leh Market."] },
          { day: 2, title: "Leh Local Sightseeing", activities: ["Visit Leh Palace and Shanti Stupa.", "Explore Thiksey Monastery and Shey Palace.", "Return to Leh."] },
          { day: 3, title: "Leh to Pangong Tso", activities: ["Drive to Pangong Lake via Chang La Pass.", "Spend the afternoon admiring the changing colors of the lake.", "Overnight stay in a camp near the lake."] },
          { day: 4, title: "Pangong to Leh", activities: ["Wake up to a stunning sunrise over Pangong.", "Drive back to Leh.", "Evening free for souvenir shopping."] },
          { day: 5, title: "Departure", activities: ["Early morning transfer to Leh Airport."] }
        ],
        inclusions: ["Airport Transfers", "Accommodation in Leh & Pangong", "Inner Line Permits", "Breakfast & Dinner"],
        exclusions: ["Flights", "Lunch", "Oxygen Cylinders (Personal)"]
      },
      {
        id: "nubra-pangong-7-day",
        name: "7-Day Nubra & Pangong Adventure",
        duration: "7 Days / 6 Nights",
        desc: "Cross the mighty Khardung La into the valley of sand dunes, ending with a night by the turquoise waters of Pangong.",
        image: "/images/nubra.jpg",
        highlights: ["Khardung La Pass", "Bactrian Camels at Hunder", "Diskit Monastery", "Pangong Tso Camping"],
        days: [
          { day: 1, title: "Arrival & Acclimatization", activities: ["Arrive in Leh and rest completely."] },
          { day: 2, title: "Leh Sightseeing", activities: ["Visit Hall of Fame, Magnetic Hill, and Sangam (Confluence of Zanskar & Indus)."] },
          { day: 3, title: "Leh to Nubra Valley", activities: ["Drive over Khardung La, the highest motorable road.", "Reach Nubra Valley and visit Hunder sand dunes.", "Double-humped camel ride."] },
          { day: 4, title: "Turtuk Excursion", activities: ["Day trip to the border village of Turtuk.", "Experience Balti culture and apricot orchards.", "Return to Hunder for the night."] },
          { day: 5, title: "Nubra to Pangong Tso", activities: ["Travel from Nubra to Pangong via the Shyok River route.", "Overnight camping at Pangong."] },
          { day: 6, title: "Pangong to Leh", activities: ["Drive back to Leh via Chang La Pass.", "Farewell dinner in Leh."] },
          { day: 7, title: "Departure", activities: ["Transfer to Leh Airport."] }
        ],
        inclusions: ["All Transport in SUV/Tempo", "Accommodation & Camps", "Inner Line Permits", "Breakfast & Dinner"],
        exclusions: ["Flights", "Camel Ride Fees", "Monument Entry Fees"]
      },
      {
        id: "markha-valley-trek-8-day",
        name: "8-Day Markha Valley Trek",
        duration: "8 Days / 7 Nights",
        desc: "One of the most spectacular treks in the Himalayas, traversing high passes and passing through traditional Ladakhi villages.",
        image: "/images/pangong.jpg",
        highlights: ["Hemis National Park", "Kongmaru La Pass", "Village Homestays", "Wildlife Spotting"],
        days: [
          { day: 1, title: "Arrival in Leh", activities: ["Rest and acclimatize."] },
          { day: 2, title: "Drive to Chilling & Trek to Skiu", activities: ["Drive to the trek start point.", "Cross the Zanskar river on a cable car.", "Trek to Skiu village."] },
          { day: 3, title: "Skiu to Markha", activities: ["Trek through the Markha valley along the river.", "Spot local wildlife and ancient ruins."] },
          { day: 4, title: "Markha to Thochuntse", activities: ["Pass the Techa monastery.", "Trek through Umlung to the high pastures of Thochuntse."] },
          { day: 5, title: "Thochuntse to Nimaling", activities: ["Trek up to the Nimaling plateau.", "Enjoy views of Mt. Kang Yatse."] },
          { day: 6, title: "Cross Kongmaru La & Return to Leh", activities: ["Steep climb to Kongmaru La (5,200m).", "Descend to Shang Sumdo and drive back to Leh."] },
          { day: 7, title: "Leh Rest Day", activities: ["Rest, recover, and explore Leh town."] },
          { day: 8, title: "Departure", activities: ["Transfer to Leh Airport."] }
        ],
        inclusions: ["Trek Guide & Mules", "Homestay/Camp Accommodation", "All Meals during Trek", "Trekking Permits"],
        exclusions: ["Flights", "Personal Trekking Gear", "Emergency Evacuation"]
      },
      {
        id: "ladakh-grand-circuit-10-day",
        name: "10-Day Ladakh Grand Circuit",
        duration: "10 Days / 9 Nights",
        desc: "The ultimate expedition. From Leh to Nubra, Turtuk, Pangong, and all the way to the remote Hanle observatory.",
        image: "/images/turtuk.jpg",
        highlights: ["Turtuk Village", "Hanle Dark Sky Reserve", "Pangong & Tso Moriri", "Cultural Immersion"],
        days: [
          { day: 1, title: "Arrival", activities: ["Arrive in Leh. Rest."] },
          { day: 2, title: "Sham Valley Tour", activities: ["Magnetic Hill, Sangam, Alchi Monastery."] },
          { day: 3, title: "Leh to Nubra", activities: ["Khardung La pass, Hunder dunes."] },
          { day: 4, title: "Turtuk Excursion", activities: ["Explore Turtuk village."] },
          { day: 5, title: "Nubra to Pangong", activities: ["Via Shyok route. Camp at Pangong."] },
          { day: 6, title: "Pangong to Hanle", activities: ["Drive to Hanle. Visit the Indian Astronomical Observatory."] },
          { day: 7, title: "Hanle to Tso Moriri", activities: ["Drive to the high altitude lake of Tso Moriri.", "Overnight at Korzok village."] },
          { day: 8, title: "Tso Moriri to Leh", activities: ["Drive back to Leh via Chumathang hot springs."] },
          { day: 9, title: "Leh Leisure", activities: ["Rest day, shopping, cafes."] },
          { day: 10, title: "Departure", activities: ["Transfer to airport."] }
        ],
        inclusions: ["Comprehensive Transport", "All Permits including Hanle", "Accommodation", "Breakfast & Dinner"],
        exclusions: ["Flights", "Lunch", "Personal Expenses"]
      },
      {
        id: "monasteries-moonscapes-6-day",
        name: "6-Day Monasteries & Moonscapes",
        duration: "6 Days / 5 Nights",
        desc: "Focusing on the spiritual and stark geographical heritage of Ladakh. Ideal for culture enthusiasts and photographers.",
        image: "/images/hanle.jpg",
        highlights: ["Lamayuru Moonland", "Alchi Monastery", "Magnetic Hill", "Shanti Stupa Sunrise"],
        days: [
          { day: 1, title: "Arrival & Rest", activities: ["Arrive in Leh and acclimatize."] },
          { day: 2, title: "Indus Valley Monasteries", activities: ["Visit Hemis, Thiksey, and Shey palaces.", "Attend morning prayers if possible."] },
          { day: 3, title: "Leh to Lamayuru", activities: ["Drive to Lamayuru.", "Witness the surreal 'Moonland' landscapes.", "Visit Lamayuru Monastery."] },
          { day: 4, title: "Lamayuru to Leh via Alchi", activities: ["Visit the ancient Alchi Choskor.", "Stop at Magnetic Hill and Sangam.", "Return to Leh."] },
          { day: 5, title: "Stok Palace & Shanti Stupa", activities: ["Explore the royal museum at Stok Palace.", "Sunset at Shanti Stupa."] },
          { day: 6, title: "Departure", activities: ["Transfer to Leh Airport."] }
        ],
        inclusions: ["Airport Transfers", "Hotel Accommodation", "Monastery Entry Fees", "Breakfast & Dinner"],
        exclusions: ["Flights", "Lunch", "Camera Fees at Monasteries"]
      }
    ]
  }
};
