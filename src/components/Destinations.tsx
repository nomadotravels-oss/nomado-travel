"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, AnimatePresence, useInView } from "framer-motion";

const regions = [
  {
    id: "kashmir",
    name: "Kashmir",
    tagline: "The Valley of Valleys",
    desc: "Houseboats on Dal Lake, saffron fields, Mughal gardens, and mountains that touch the clouds.",
    image: "/images/kashmir-tile.jpg",
    destinations: [
      { name: "Gulmarg", desc: "Ski slopes & alpine meadows", image: "/images/gulmarg.jpg" },
      { name: "Pahalgam", desc: "The shepherd's meadow", image: "/images/pahalgam.jpg" },
      { name: "Sonmarg", desc: "Gateway to the glaciers", image: "/images/sonmarg.jpg" },
      { name: "Srinagar", desc: "Houseboats & walled city", image: "/images/houses-lake.jpg" },
      { name: "Doodhpathri", desc: "Untouched rolling meadows", image: "/images/doodhpathri.jpg" },
      { name: "Yousmarg", desc: "Pine forests & wildflowers", image: "/images/yousmarg.jpg" },
    ],
  },
  {
    id: "ladakh",
    name: "Ladakh",
    tagline: "The Land of High Passes",
    desc: "Moonscapes, monasteries, turquoise lakes, and a silence that recalibrates something deep inside you.",
    image: "/images/ladakh.jpg",
    destinations: [
      { name: "Leh", desc: "Ancient monasteries under cobalt skies", image: "/images/leh.jpg" },
      { name: "Kargil", desc: "Where cultures converge", image: "/images/kargil.jpg" },
      { name: "Nubra Valley", desc: "Sand dunes & Bactrian camels", image: "/images/nubra.jpg" },
      { name: "Turtuk", desc: "A Balti village at the edge of the world", image: "/images/turtuk.jpg" },
      { name: "Pangong", desc: "The highest saltwater lake", image: "/images/pangong.jpg" },
      { name: "Hanle", desc: "Dark skies & ancient monastery", image: "/images/hanle.jpg" },
    ],
  },
];

type Region = typeof regions[0];

function RegionTile({ region, onClick, inView, delay }: { region: Region; onClick: () => void; inView: boolean; delay: number }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="relative w-full text-left group overflow-hidden rounded-3xl shadow-[0_16px_40px_-16px_rgba(0,0,0,0.65)] focus:outline-none"
    >
      <div className="relative h-[44vh] md:h-[52vh] overflow-hidden rounded-3xl">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image src={asset(region.image)} alt={region.name} fill className="object-cover" sizes="50vw" />
        </motion.div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06172E]/95 via-[#06172E]/30 to-[#06172E]/10 group-hover:from-[#06172E]/[0.98] transition-all duration-700" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 lg:p-12">
          <div className="flex items-center gap-4">
            <h3 className="font-clash text-[clamp(2.4rem,4.5vw,4rem)] font-600 text-[#F5F9FD] leading-none">
              {region.name}
            </h3>
            <svg viewBox="0 0 32 24" className="w-9 h-7 shrink-0 text-[#F59E0B] transition-transform duration-500 group-hover:translate-x-1.5 -translate-y-1" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h24M19 5l8 7-8 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function ExpandedRegion({ region, onClose }: { region: Region; onClose: () => void }) {
  const innerSliderRef = useRef<HTMLDivElement>(null);

  const scrollInner = (direction: "left" | "right") => {
    if (innerSliderRef.current) {
      const { scrollLeft, clientWidth } = innerSliderRef.current;
      const scrollAmount = clientWidth * 0.75;
      innerSliderRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      key="expanded"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="relative w-full overflow-hidden bg-white font-switzerland"
    >
      <div className="relative z-10 pt-1 pb-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-gray-100 gap-4">
          <div>
            <span className="text-[10px] tracking-[0.25em] font-800 text-[#D97706] uppercase mb-1 block">
              {region.tagline}
            </span>
            <h3 className="text-2xl md:text-3xl font-800 text-black tracking-tight leading-none">
              {region.name}
            </h3>
          </div>

          <div className="flex items-center gap-4 self-start sm:self-center">
            {/* Inner Slider Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollInner("left")}
                className="w-10 h-10 rounded-full border border-gray-250 flex items-center justify-center text-black bg-white hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm"
                aria-label="Previous Destinations"
              >
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10H5M10 15l-5-5 5-5" />
                </svg>
              </button>
              <button
                onClick={() => scrollInner("right")}
                className="w-10 h-10 rounded-full border border-gray-250 flex items-center justify-center text-black bg-white hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm"
                aria-label="Next Destinations"
              >
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10M10 5l5 5-5 5" />
                </svg>
              </button>
            </div>

            <div className="hidden sm:block h-6 w-px bg-gray-200" />

            <button
              onClick={onClose}
              className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#6B7280] hover:text-black transition-colors duration-300 font-800"
            >
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M15 5L5 15M5 5l10 10" />
              </svg>
              Close
            </button>
          </div>
        </div>

        {/* Destination Horizontal Slider (MySwitzerland.com Precise Dimensions & Bold Titles) */}
        <div
          ref={innerSliderRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full"
        >
          {region.destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group/card relative overflow-hidden rounded-2xl shadow-[0_12px_32px_-16px_rgba(0,0,0,0.18)] bg-gray-50 border border-gray-200/30 w-[280px] sm:w-[320px] md:w-[360px] shrink-0 snap-start"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl w-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={asset(dest.image)}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 280px, (max-width:1024px) 320px, 360px"
                  />
                </motion.div>

                {/* Soft bottom scrim gradient overlay inspired by MySwitzerland */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent group-hover/card:from-black/85 transition-all duration-300" />

                {/* Text overlaid inside the card (bottom-left) - Name Only in Extra Bold */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex flex-col items-start font-switzerland z-10">
                  <h4 className="text-base md:text-lg lg:text-xl font-800 text-white leading-snug tracking-tight">
                    {dest.name}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<string | null>(null);

  const activeRegion = regions.find(r => r.id === open) ?? null;

  return (
    <section id="destinations" ref={ref} className="bg-white py-20 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16 font-switzerland">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-switzerland text-[clamp(2.2rem,5vw,3.5rem)] font-800 leading-none text-black tracking-tight"
          >
            Destinations
          </motion.h2>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.div
              key="tiles"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 md:gap-12"
            >
              {regions.map((region, ri) => (
                <RegionTile
                  key={region.id}
                  region={region}
                  onClick={() => setOpen(region.id)}
                  inView={inView}
                  delay={ri * 0.15}
                />
              ))}
            </motion.div>
          ) : (
            activeRegion && (
              <ExpandedRegion
                key="expanded"
                region={activeRegion}
                onClose={() => setOpen(null)}
              />
            )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
