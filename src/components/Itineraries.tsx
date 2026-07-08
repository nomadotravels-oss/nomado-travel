"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { asset } from "@/lib/asset";

const MotionLink = motion(Link);

const itineraries = [
  {
    id: "kashmir",
    name: "Kashmir",
    duration: "View 5 Itineraries",
    desc: "A perfect introduction to the valley, covering Srinagar's lakes, Gulmarg's meadows, and Pahalgam's pristine valleys.",
    image: "/images/kashmir-tile.jpg",
  },
  {
    id: "ladakh",
    name: "Ladakh",
    duration: "View 5 Itineraries",
    desc: "Journey through high passes, ancient monasteries, the dunes of Nubra Valley, and the vast Pangong Lake.",
    image: "/images/ladakh.jpg",
  }
];

export default function Itineraries() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="itineraries" ref={ref} className="bg-white py-20 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-switzerland">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-switzerland text-[clamp(2.2rem,5vw,3.5rem)] font-800 leading-none text-black tracking-tight"
          >
            Quick Itineraries
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {itineraries.map((itinerary, index) => (
            <MotionLink
              key={itinerary.id}
              href={`/itineraries/${itinerary.id}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full text-left group overflow-hidden rounded-3xl shadow-[0_16px_40px_-16px_rgba(0,0,0,0.65)] focus:outline-none block"
            >
              <div className="relative h-[44vh] md:h-[52vh] overflow-hidden rounded-3xl">
                <motion.div
                  whileHover={{ scale: 1.04 }}
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

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06172E]/95 via-[#06172E]/30 to-[#06172E]/10 group-hover:from-[#06172E]/[0.98] transition-all duration-700" />

                <div className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="text-[11px] md:text-[13px] tracking-[0.1em] font-600 text-white uppercase shadow-sm">
                    {itinerary.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 lg:p-12">
                  <div className="flex flex-col gap-3 md:gap-4">
                    <div className="flex items-center gap-4">
                      <h3 className="font-clash text-[clamp(2rem,4vw,3.2rem)] font-600 text-[#F5F9FD] leading-none">
                        {itinerary.name}
                      </h3>
                      <svg viewBox="0 0 32 24" className="w-8 h-6 md:w-9 md:h-7 shrink-0 text-[#F59E0B] transition-transform duration-500 group-hover:translate-x-1.5 translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h24M19 5l8 7-8 7" />
                      </svg>
                    </div>
                    <p className="text-white/80 font-switzerland text-sm md:text-base lg:text-lg leading-relaxed max-w-sm line-clamp-2 md:line-clamp-none">
                      {itinerary.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-4 text-white/90">
                      <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/10" title="Hotels">
                        <svg className="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v2H9V7zm0 4h1v2H9v-2zm0 4h1v2H9v-2zm-2 4h5v-4H7v4zm10-12h1v2h-1V7zm0 4h1v2h-1v-2zm0 4h1v2h-1v-2z"></path></svg>
                        <span className="text-xs font-500 tracking-wide">Hotels</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/10" title="Cabs">
                        <svg className="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8a2 2 0 012 2v7a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2zm0 0l-3 4m11-4l3 4M5 14h14M8 11h8"></path></svg>
                        <span className="text-xs font-500 tracking-wide">Cabs</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/10" title="Meals">
                        <svg className="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4M7 21v-4a2 2 0 00-2-2H1a2 2 0 00-2 2v4"></path></svg>
                        <span className="text-xs font-500 tracking-wide">Meals</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/10" title="Sightseeing">
                        <svg className="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span className="text-xs font-500 tracking-wide">Sightseeing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionLink>
          ))}
        </div>

      </div>
    </section>
  );
}
