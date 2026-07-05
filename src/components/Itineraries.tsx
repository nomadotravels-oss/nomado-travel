"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { asset } from "@/lib/asset";

const itineraries = [
  {
    id: "kashmir-itinerary",
    name: "Classic Kashmir",
    duration: "5 Days / 4 Nights",
    desc: "A perfect introduction to the valley, covering Srinagar's lakes, Gulmarg's meadows, and Pahalgam's pristine valleys.",
    image: "/images/kashmir-tile.jpg",
    link: "#contact"
  },
  {
    id: "ladakh-itinerary",
    name: "Ladakh Explorer",
    duration: "7 Days / 6 Nights",
    desc: "Journey through high passes, ancient monasteries, the dunes of Nubra Valley, and the vast Pangong Lake.",
    image: "/images/ladakh.jpg",
    link: "#contact"
  }
];

export default function Itineraries() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="itineraries" ref={ref} className="bg-white py-20 md:py-24 px-6 md:px-12 lg:px-20 font-switzerland">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] md:text-[12px] tracking-[0.25em] font-700 uppercase text-[#F59E0B] mb-3"
          >
            Curated Journeys
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-clash text-[clamp(2.5rem,5vw,4rem)] font-600 text-black leading-[1.1] tracking-tight"
          >
            Quick Itineraries
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {itineraries.map((itinerary, index) => (
            <motion.div
              key={itinerary.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative h-[50vh] md:h-[60vh] overflow-hidden rounded-2xl mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={asset(itinerary.image)}
                    alt={itinerary.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-[#06172E]/10 group-hover:bg-[#06172E]/0 transition-colors duration-500" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                  <span className="text-[12px] tracking-[0.1em] font-700 text-[#083A7A] uppercase">
                    {itinerary.duration}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-grow px-2">
                <h3 className="font-clash text-2xl md:text-3xl font-600 text-black mb-3">
                  {itinerary.name}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  {itinerary.desc}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-6">
                  <span className="text-[12px] tracking-[0.15em] font-700 text-[#0F4C9C] uppercase group-hover:text-[#F59E0B] transition-colors duration-300">
                    View Details
                  </span>
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-white transition-all duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
