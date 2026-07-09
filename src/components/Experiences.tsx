"use client";
// Trigger rebuild for collage layout
import { useRef } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const CATEGORIES = [
  { id: "walks", label: "Walks & Hikes", image: "/images/downtown.jpg" },
  { id: "food", label: "Food", image: "/images/wazwan-new.jpg" },
  { id: "do-it-yourself", label: "Do It Yourself", image: "/images/craft.jpg" },
  { id: "skiing", label: "Skiing", image: "/images/gulmarg.jpg" }
] as const;

export default function Experiences() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  const renderCard = (tab: typeof CATEGORIES[number], titleSizeClass: string) => (
    <Link
      href={`/experiences/category/${tab.id}`}
      className="relative w-full h-full overflow-hidden rounded-3xl text-left transition-all duration-500 cursor-pointer select-none group focus:outline-none hover:scale-[1.01] shadow-[0_16px_40px_-16px_rgba(0,0,0,0.18)] block"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={asset(tab.image)}
          alt={tab.label}
          fill
          className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
          sizes="(max-width:768px) 50vw, 50vw"
        />
        {/* Bottom Dark Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none group-hover:from-black/100 transition-colors duration-300" />
      </div>

      {/* Overlaid Title on Card Bottom-Left */}
      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full text-left z-10 pointer-events-none">
        <h3 className={`font-800 text-white font-switzerland tracking-tight leading-tight group-hover:text-[#F59E0B] transition-colors duration-300 ${titleSizeClass}`}>
          {tab.label}
        </h3>
      </div>
    </Link>
  );

  return (
    <section id="experiences" ref={containerRef} className="bg-[#FAFAF8] py-20 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-switzerland">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 md:mb-16 font-switzerland">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-switzerland text-[clamp(2.2rem,5vw,3.5rem)] font-800 leading-none text-black tracking-tight"
          >
            Experiences
          </motion.h2>
        </div>

        {/* Mobile View: 2-column grid layout with aspect-square */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {CATEGORIES.map((tab, i) => (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-square"
            >
              {renderCard(tab, "text-lg sm:text-xl")}
            </motion.div>
          ))}
        </div>

        {/* PC View: Premium collage form with asymmetrical spans */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-6 h-[500px] lg:h-[580px]">
          {/* Walks & Hikes (Featured block: 2 cols wide, 2 rows high) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-2 row-span-2 relative"
          >
            {renderCard(CATEGORIES[0], "text-2xl md:text-3xl lg:text-4xl")}
          </motion.div>

          {/* Food (Landscape block: 2 cols wide, 1 row high) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-2 row-span-1 relative"
          >
            {renderCard(CATEGORIES[1], "text-xl md:text-2xl lg:text-3xl")}
          </motion.div>

          {/* Do It Yourself (Square block: 1 col wide, 1 row high) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 row-span-1 relative"
          >
            {renderCard(CATEGORIES[2], "text-lg md:text-xl lg:text-2xl")}
          </motion.div>

          {/* Skiing (Square block: 1 col wide, 1 row high) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 row-span-1 relative"
          >
            {renderCard(CATEGORIES[3], "text-lg md:text-xl lg:text-2xl")}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
