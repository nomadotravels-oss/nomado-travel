export type Itinerary = {
  id: string;
  name: string;
  duration: string;
  desc: string;
  image: string;
  highlights: string[];
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
      },
      {
        id: "classic-kashmir-5-day",
        name: "5-Day Classic Kashmir Valley",
        duration: "5 Days / 4 Nights",
        desc: "Our most popular introductory tour covering the essential triad of Srinagar, Gulmarg, and Pahalgam.",
        image: "/images/pahalgam.jpg",
        highlights: ["Srinagar Old City", "Betaab Valley in Pahalgam", "Gulmarg Ski Slopes", "Aru Valley"],
      },
      {
        id: "alpine-lakes-trek-6-day",
        name: "6-Day Alpine Lakes Trek",
        duration: "6 Days / 5 Nights",
        desc: "For the adventurous soul. Trek through pristine pine forests to discover the hidden high-altitude lakes of Kashmir.",
        image: "/images/sonmarg.jpg",
        highlights: ["Sonmarg Base Camp", "Vishansar Lake", "Krishansar Lake", "Thajiwas Glacier"],
      },
      {
        id: "kashmir-grand-tour-7-day",
        name: "7-Day Kashmir Grand Tour",
        duration: "7 Days / 6 Nights",
        desc: "A comprehensive exploration taking you deeper into the lesser-known meadows of Doodhpathri and Yousmarg alongside the classics.",
        image: "/images/yousmarg.jpg",
        highlights: ["Yousmarg Meadows", "Doodhpathri Streams", "Pahalgam Valleys", "Houseboat Experience"],
      },
      {
        id: "winter-wonderland-5-day",
        name: "5-Day Winter Wonderland",
        duration: "5 Days / 4 Nights",
        desc: "Witness the valley covered in a blanket of white. Focuses heavily on snow activities and cozy winter experiences.",
        image: "/images/gulmarg.jpg",
        highlights: ["Skiing in Gulmarg", "Snowboarding", "Frozen Dal Lake views", "Kashmiri Kehwa & Wazwan"],
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
      },
      {
        id: "nubra-pangong-7-day",
        name: "7-Day Nubra & Pangong Adventure",
        duration: "7 Days / 6 Nights",
        desc: "Cross the mighty Khardung La into the valley of sand dunes, ending with a night by the turquoise waters of Pangong.",
        image: "/images/nubra.jpg",
        highlights: ["Khardung La Pass", "Bactrian Camels at Hunder", "Diskit Monastery", "Pangong Tso Camping"],
      },
      {
        id: "markha-valley-trek-8-day",
        name: "8-Day Markha Valley Trek",
        duration: "8 Days / 7 Nights",
        desc: "One of the most spectacular treks in the Himalayas, traversing high passes and passing through traditional Ladakhi villages.",
        image: "/images/pangong.jpg", // placeholder
        highlights: ["Hemis National Park", "Kongmaru La Pass", "Village Homestays", "Wildlife Spotting"],
      },
      {
        id: "ladakh-grand-circuit-10-day",
        name: "10-Day Ladakh Grand Circuit",
        duration: "10 Days / 9 Nights",
        desc: "The ultimate expedition. From Leh to Nubra, Turtuk, Pangong, and all the way to the remote Hanle observatory.",
        image: "/images/turtuk.jpg",
        highlights: ["Turtuk Village", "Hanle Dark Sky Reserve", "Pangong & Tso Moriri", "Cultural Immersion"],
      },
      {
        id: "monasteries-moonscapes-6-day",
        name: "6-Day Monasteries & Moonscapes",
        duration: "6 Days / 5 Nights",
        desc: "Focusing on the spiritual and stark geographical heritage of Ladakh. Ideal for culture enthusiasts and photographers.",
        image: "/images/hanle.jpg",
        highlights: ["Lamayuru Moonland", "Alchi Monastery", "Magnetic Hill", "Shanti Stupa Sunrise"],
      }
    ]
  }
};
