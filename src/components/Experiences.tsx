"use client";
// Trigger rebuild for deployment
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

  const renderCard = (tab: typeof CATEGORIES[number], i: number) => (
    <Link
      href={`/experiences/category/${tab.id}`}
      className="relative aspect-square overflow-hidden rounded-3xl text-left transition-all duration-300 cursor-pointer select-none group focus:outline-none hover:scale-[1.02] shadow-[0_16px_40px_-16px_rgba(0,0,0,0.18)] block w-full h-full"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={asset(tab.image)}
          alt={tab.label}
          fill
          className="object-cover"
          sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 33vw"
        />
        {/* Bottom Dark Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />
      </div>

      {/* Overlaid Title on Card Bottom-Left */}
      <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 w-full text-left z-10 pointer-events-none">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-800 text-white font-switzerland tracking-tight leading-tight group-hover:text-[#F59E0B] transition-colors duration-300">
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

        {/* Mobile View: 2-column grid layout as before */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {CATEGORIES.map((tab, i) => (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {renderCard(tab, i)}
            </motion.div>
          ))}
        </div>

        {/* PC View: Horizontal slider displaying exactly 3 tiles at once */}
        <div className="hidden md:flex gap-6 lg:gap-8 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full snap-x snap-mandatory">
          {CATEGORIES.map((tab, i) => (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-[calc((100%-2*1.5rem)/3)] lg:w-[calc((100%-2*2rem)/3)] shrink-0 snap-start"
            >
              {renderCard(tab, i)}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
