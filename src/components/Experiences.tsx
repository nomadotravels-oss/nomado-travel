"use client";
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

  return (
    <section id="experiences" ref={containerRef} className="bg-[#FAFAF8] py-20 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-switzerland">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block matched exactly to Destinations */}
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

        {/* Category Tiles - Sized so 3 fit on screen at once (3-column grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES.map((tab, i) => {
            return (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <Link
                  href={`/experiences/category/${tab.id}`}
                  className="relative aspect-square overflow-hidden rounded-3xl text-left transition-all duration-300 cursor-pointer select-none group focus:outline-none hover:scale-[1.02] shadow-[0_16px_40px_-16px_rgba(0,0,0,0.18)] block"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={asset(tab.image)}
                      alt={tab.label}
                      fill
                      className="object-cover"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                    {/* Bottom Dark Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />
                  </div>

                  {/* Overlaid Title on Card Bottom-Left */}
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full text-left z-10 pointer-events-none">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-800 text-white font-switzerland tracking-tight leading-tight group-hover:text-[#F59E0B] transition-colors duration-300">
                      {tab.label}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
