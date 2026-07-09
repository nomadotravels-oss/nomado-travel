export interface Experience {
  id: string;
  region: string;
  category: "walks" | "food" | "hikes" | "make-it-yourself" | "skiing";
  title: string;
  image: string;
  pos?: string;
  desc: string;
  longDesc: string;
  duration: string;
  location: string;
  difficulty: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  // walks
  { 
    id: "downtown-safari",
    region: "Kashmir", 
    category: "walks",
    title: "Downtown Safari",          
    image: "/images/downtown.jpg",     
    desc: "Guided walking tour through Srinagar's old city, exploring historic mosques, shrines, and bustling local bazaars.",
    longDesc: "Step into the heart of Srinagar's Old City (Downtown). This guided walking safari will take you through narrow cobblestone alleys lined with centuries-old brick and timber architecture. You'll visit the stunning Jamia Masjid with its towering wooden pillars, the tranquil Shah-e-Hamdan shrine, and navigate the vibrant copper and spice markets. This experience offers a deep dive into the rich cultural and spiritual heritage of Kashmir.",
    duration: "3 - 4 Hours",
    location: "Srinagar, Kashmir",
    difficulty: "Easy",
    highlights: ["Historic Jamia Masjid", "Traditional Copper Bazaars", "Shah-e-Hamdan Shrine", "Local Kashmiri Street Food"]
  },
  { 
    id: "craft-trail",
    region: "Kashmir", 
    category: "walks",
    title: "Craft Trail",              
    image: "/images/craft.jpg",        
    desc: "Visit artisan workshops to watch papier-mâché, walnut carving, and Kashmiri shawl weaving crafted by hand.",
    longDesc: "Kashmir is renowned worldwide for its intricate handicrafts. The Craft Trail takes you behind the scenes into the homes and workshops of master artisans. Watch as they meticulously weave Pashmina shawls, carve intricate floral motifs into walnut wood, and paint vibrant papier-mâché artifacts. You'll have the opportunity to interact with the creators, understand the generational techniques, and appreciate the immense patience required for each piece.",
    duration: "Half Day",
    location: "Srinagar, Kashmir",
    difficulty: "Easy",
    highlights: ["Pashmina Weaving", "Walnut Wood Carving", "Papier-Mâché Workshops", "Direct Artisan Interaction"]
  },
  { 
    id: "photo-walk",
    region: "Kashmir", 
    category: "walks",
    title: "Photo Walk",               
    image: "/images/oldcity.jpg",      
    desc: "Capture Srinagar's lanes, gardens, and lake life with a local photographer guiding light and composition.",
    longDesc: "Designed for both amateur and professional photographers, this curated walk explores the most photogenic spots of Srinagar. Guided by a local photographer, you'll chase the golden hour light across Dal Lake, frame the geometric beauty of Mughal Gardens, and capture the raw, candid moments of daily life in the Old City. Learn about composition, storytelling, and the unique lighting conditions of the Himalayan valley.",
    duration: "3 Hours",
    location: "Srinagar, Kashmir",
    difficulty: "Easy",
    highlights: ["Golden Hour at Dal Lake", "Candid Street Photography", "Expert Composition Guidance", "Mughal Garden Architecture"]
  },
  { 
    id: "floating-market",
    region: "Kashmir", 
    category: "walks",
    title: "Floating Market",          
    image: "/images/shikara.jpg",      
    desc: "Pre-dawn shikara ride to Dal Lake's vegetable market, watching farmers trade fresh produce boat-to-boat.",
    longDesc: "Wake up before the sun and glide across the silent, misty waters of Dal Lake in a traditional shikara. Your destination is the centuries-old floating vegetable market. Here, local farmers gather in their wooden boats to trade freshly harvested vegetables and flowers. It is a vibrant, chaotic, and incredibly photogenic spectacle that offers a rare glimpse into the unique aquatic lifestyle of the lake dwellers.",
    duration: "2 Hours",
    location: "Dal Lake, Srinagar",
    difficulty: "Easy",
    highlights: ["Pre-dawn Shikara Ride", "Boat-to-Boat Trading", "Sunrise over Zabarwan Hills", "Fresh Lotus Stems & Flowers"]
  },
  { 
    id: "sunset-shikara",
    region: "Kashmir", 
    category: "walks",
    title: "Sunset Shikara",           
    image: "/images/sunset-shikara.jpg", 
    desc: "Peaceful evening boat ride across Dal Lake as the sun sets behind the Zabarwan hills.",
    longDesc: "As the day winds down, step onto a luxurious, cushioned shikara for a tranquil journey across the mirror-like waters of Dal Lake. The setting sun paints the sky and the surrounding Zabarwan hills in brilliant shades of orange, pink, and purple. You'll glide past floating gardens, intricate houseboats, and perhaps enjoy a hot cup of saffron kehwa brewed right on the water by passing vendors.",
    duration: "1.5 Hours",
    location: "Dal Lake, Srinagar",
    difficulty: "Easy",
    highlights: ["Luxurious Shikara Boat", "Sunset Colors on the Lake", "Floating Gardens", "On-water Kehwa Tea"]
  },
  { 
    id: "turtuk-village",
    region: "Ladakh",  
    category: "walks",
    title: "Life at Turtuk",           
    image: "/images/turtuk.jpg",       
    desc: "Wander this Balti border village's apricot orchards and stone lanes along the scenic Shyok River.",
    longDesc: "Turtuk, the northernmost village of India, was only opened to tourists recently. It offers a fascinating shift in culture, landscape, and language as you enter the realm of the Balti people. Nestled along the Shyok River and surrounded by the Karakoram mountains, the village is lush with apricot and walnut orchards. Wander its stone lanes, visit the local heritage museum, and experience the warm Balti hospitality.",
    duration: "Full Day",
    location: "Nubra Valley, Ladakh",
    difficulty: "Easy",
    highlights: ["Balti Culture & Cuisine", "Lush Apricot Orchards", "Karakoram Mountain Views", "Border Village Heritage"]
  },
  { 
    id: "camel-safari",
    region: "Ladakh",  
    category: "walks",
    title: "Camel Safari",             
    image: "/images/camel-safari.jpg", 
    pos: "center 72%", 
    desc: "Ride double-humped Bactrian camels across Hunder's cold-desert sand dunes in Nubra Valley.",
    longDesc: "Experience the remnants of the ancient Silk Route in the high-altitude cold desert of Hunder. Here, amidst striking silver sand dunes framed by stark, snow-dusted mountains, you will ride the unique double-humped Bactrian camels. These gentle creatures are a living legacy of the trade caravans that once crossed these treacherous mountain passes centuries ago.",
    duration: "1 - 2 Hours",
    location: "Hunder, Nubra Valley",
    difficulty: "Easy",
    highlights: ["Bactrian Double-Humped Camels", "High Altitude Sand Dunes", "Silk Route History", "Stark Desert Landscapes"]
  },
  { 
    id: "hanle-stargazing",
    region: "Ladakh",  
    category: "walks",
    title: "Stargazing at Hanle",      
    image: "/images/stargazing.jpg",   
    desc: "Night sky viewing near India's highest observatory, under some of the darkest, clearest skies anywhere.",
    longDesc: "Located in the remote Changthang region, Hanle boasts some of the darkest and most unpolluted skies in the world. Designated as a Dark Sky Reserve, it is home to the Indian Astronomical Observatory. This experience allows you to gaze into the deep cosmos, clearly spotting the Milky Way, distant galaxies, and shooting stars with the naked eye. It's a humbling, awe-inspiring night under the universe.",
    duration: "Overnight",
    location: "Hanle, Ladakh",
    difficulty: "Easy",
    highlights: ["India's First Dark Sky Reserve", "Milky Way Visibility", "Astrophotography Opportunities", "High Altitude Observatory"]
  },

  // food
  { 
    id: "wazwan-feast",
    region: "Kashmir", 
    category: "food",
    title: "Wazwan Experience",     
    image: "/images/wazwan-new.jpg",   
    desc: "Elaborate multi-course Kashmiri banquet of slow-cooked meat dishes, shared communally in traditional style.",
    longDesc: "Wazwan is the ultimate culinary experience of Kashmir, deeply rooted in the region's hospitality and culture. You will be seated on traditional carpets and share a massive copper platter (trami) with others. The feast involves a sequence of over a dozen intricately spiced, slow-cooked meat delicacies, prepared overnight by master chefs (wazas). From the succulent Seekh Kababs to the signature Rogan Josh and creamy Gushtaba, it is a meal fit for royalty.",
    duration: "2 Hours",
    location: "Srinagar, Kashmir",
    difficulty: "Easy",
    highlights: ["Traditional Copper Trami", "Over 15 Meat Delicacies", "Authentic Waza Preparation", "Kashmiri Kehwa to Finish"]
  },

  // hikes
  { 
    id: "mamneth-hike",
    region: "Kashmir", 
    category: "walks",
    title: "Hiking to Mamneth", 
    image: "/images/mountain-lake.jpg", 
    desc: "Moderate ridge trek above Srinagar, rewarding hikers with sunset views over Dal Lake.",
    longDesc: "Escape the city's hum and ascend the Zabarwan mountain range bordering Srinagar. The hike to Mamneth is a moderate, picturesque trail winding through pine forests and alpine meadows. As you reach the ridge, you are rewarded with a breathtaking panoramic view of the entire Srinagar city, the sprawling Dal Lake, and the distant pir Panjal peaks. It is especially magical during the golden hour of sunset.",
    duration: "4 - 5 Hours",
    location: "Zabarwan Range, Srinagar",
    difficulty: "Moderate",
    highlights: ["Pine Forest Trails", "Panoramic City Views", "Sunset over Dal Lake", "Alpine Meadow Picnic"]
  },
  { 
    id: "ganda-la-hike",
    region: "Ladakh",  
    category: "walks",
    title: "Ganda La Hike",              
    image: "/images/kargil.jpg",       
    desc: "High-altitude trek likely toward Ganda La pass, offering rugged Himalayan scenery en route to Markha Valley.",
    longDesc: "For the adventurous soul, the hike towards Ganda La (nearly 4,900 meters) is a challenging but deeply rewarding trek. Part of the famous Markha Valley route, the trail takes you through arid gorges, colorful mountain folds, and remote high-altitude villages like Yurutse. The pass itself offers sweeping, wind-swept views of the Zanskar and Karakoram ranges.",
    duration: "Full Day",
    location: "Hemis National Park, Ladakh",
    difficulty: "Hard",
    highlights: ["High Altitude Pass (4,900m)", "Hemis National Park Scenery", "Remote Himalayan Villages", "Marmot and Blue Sheep Sightings"]
  },

  // make-it-yourself
  {
    id: "papier-mache",
    region: "Kashmir",
    category: "make-it-yourself",
    title: "Papier-Mâché",
    image: "/images/craft.jpg",
    desc: "Create and paint detailed paper pulp boxes, ornaments, and decor under master artisan guidance.",
    longDesc: "Immerse yourself in the meditative and historical art of Kashmiri Papier-Mâché. Guided by a veteran artisan whose family has practiced the art for generations, you will learn the step-by-step process of shaping wet paper pulp, smoothening it with local stone, applying natural base coats, and painting intricate Persian motifs (Naqash) with a fine brush. It's a journey of patience, focus, and artistic awakening.",
    duration: "3 - 4 Hours",
    location: "Srinagar, Kashmir",
    difficulty: "Easy",
    highlights: ["Meditation through Painting", "Srinagar Heritage Workshops", "Legacy Artisan Guidance", "Take Home Your Own Hand-Painted Box"]
  },
  {
    id: "pashmina-weaving",
    region: "Kashmir",
    category: "make-it-yourself",
    title: "Pashmina Weaving",
    image: "/images/weaving.jpg",
    desc: "Learn to operate a traditional handloom, weaving fine cashmere wool threads into iconic shawls.",
    longDesc: "Operate a traditional wooden handloom alongside master weavers. In this hands-on workshop, you'll learn the sheer coordination required to pass the shuttle through fine Cashmere warp threads. Learn how the world's most luxurious wool is spun, sorted, and woven, gaining a profound appreciation for slow fashion and heritage craftsmanship.",
    duration: "4 Hours",
    location: "Srinagar, Kashmir",
    difficulty: "Moderate",
    highlights: ["Handloom Operation", "Understanding Cashmere Grades", "Artisan Apprenticeship", "Tactile Handloom Coordination"]
  },
  {
    id: "walnut-wood-carving",
    region: "Kashmir",
    category: "make-it-yourself",
    title: "Walnut Wood Carving",
    image: "/images/wood-carving.jpg",
    desc: "Chisel intricate traditional patterns into solid, fragrant Kashmiri walnut wood blocks.",
    longDesc: "Work with hammer and chisels on local walnut wood blocks. You'll learn to carve traditional Kashmiri leaf and floral patterns from a master carver. This sensory experience is filled with the scent of aged walnut wood, the rhythm of woodcarving chisels, and the quiet satisfaction of seeing a flat block transform into layered art.",
    duration: "3 Hours",
    location: "Srinagar, Kashmir",
    difficulty: "Moderate",
    highlights: ["Fragrant Walnut Wood", "Chisel Techniques", "Traditional Carving Patterns", "Tactile Craftsmanship"]
  },
  {
    id: "sozni-embroidery",
    region: "Kashmir",
    category: "make-it-yourself",
    title: "Sozni Embroidery",
    image: "/images/textiles.jpg",
    desc: "Master the fine needlework of Sozni, embroidering complex paisley and floral designs.",
    longDesc: "Sozni is one of the most sophisticated needlework embroideries in the world. You will sit in a traditional workshop, learn how to hold the micro-needle, and practice the close, miniature chain stitches that make up Kashmir's signature paisley and floral designs. This workshop focuses on precision, focus, and quiet creativity.",
    duration: "3 Hours",
    location: "Srinagar, Kashmir",
    difficulty: "Easy",
    highlights: ["Legacy Micro-needle Techniques", "Traditional Paisley Outlining", "Focus and Patience Builder", "Create an Embroidered Fabric Panel"]
  },
  {
    id: "carpet-weaving",
    region: "Kashmir",
    category: "make-it-yourself",
    title: "Carpet Weaving",
    image: "/images/textiles.jpg",
    desc: "Tie traditional Persian knots on a vertical loom, chanting the rhythmic Taleem weavers' code.",
    longDesc: "Sit at a massive vertical carpet loom and learn the rhythmic process of tying knots. A master weaver will teach you how to read the 'Taleem'—the written song-like code that dictates the carpet design. You'll practice cutting the yarn, packing the knots, and discover the ancient mathematics behind some of the world's most intricate silk-on-cotton carpets.",
    duration: "4 Hours",
    location: "Srinagar, Kashmir",
    difficulty: "Hard",
    highlights: ["Reading the Taleem Code", "Persian Weaving Knot Techniques", "Vertical Loom Hands-on", "Weaving Guild Traditions"]
  },

  // skiing
  {
    id: "beginner-lessons",
    region: "Kashmir",
    category: "skiing",
    title: "Beginner Lessons",
    image: "/images/gulmarg.jpg",
    desc: "Master snow balancing, snowplow stops, and basic turning on Gulmarg's gentle beginner slopes.",
    longDesc: "Take your first steps onto the snow with our certified professional instructors. This beginner course is designed to build confidence on the slopes. You'll master the basics: carrying equipment, boot fitting, side-slipping, snowplow stops (the 'pizza' shape), and basic wedge turns on Gulmarg's gentle Baby Slopes. It is an exhilarating learning curve of physical balance, focus, and snow-filled fun.",
    duration: "3 - 5 Days",
    location: "Gulmarg, Kashmir",
    difficulty: "Easy",
    highlights: ["Certified Instructor Coaching", "Baby Slope Practice", "Basic Ski Balancing & Turning", "Ski Gear Rental Included"]
  },
  {
    id: "intermediate-lessons",
    region: "Kashmir",
    category: "skiing",
    title: "Intermediate Lessons",
    image: "/images/gondola.jpg",
    desc: "Progress to parallel turns, speed control, and navigating steeper blue slopes from Phase 1 Gondola.",
    longDesc: "Designed for those who have basic ski control and are ready to transition to higher slopes. Under the guidance of seasoned alpine guides, you will move from wedge turns to parallel turns. Learn to control your speed on steeper terrains, navigate the slopes from Gulmarg's Phase 1 Gondola, and improve your overall endurance and athletic stance on the snow.",
    duration: "5 - 7 Days",
    location: "Gulmarg, Kashmir",
    difficulty: "Moderate",
    highlights: ["Parallel Turning Techniques", "Gondola Phase 1 Slope Runs", "Speed & Carving Control", "Endurance & Stance Alignment"]
  },
  {
    id: "snowboarding",
    region: "Kashmir",
    category: "skiing",
    title: "Snowboarding",
    image: "/images/snow.jpg",
    desc: "Learn to edge, carve, and float down powder runs on a snowboard with expert coaches.",
    longDesc: "If skiing isn't your speed, learn to ride a snowboard. This course covers everything from strapping in and skating on flat ground, to falling safely, heel-side and toe-side slipping, and carving clean parallel turns. Enjoy the incredible feeling of floating down Gulmarg's famous dry powder snow under the close watch of expert instructors.",
    duration: "4 - 6 Days",
    location: "Gulmarg, Kashmir",
    difficulty: "Moderate",
    highlights: ["Snowboard Edge Control", "Powder Carving Mechanics", "Certified Snowboard Coaching", "Freeride Techniques"]
  }
];

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find(exp => exp.id === id);
}
