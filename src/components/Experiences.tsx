"use client";
import { useRef } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion } from "framer-motion";
import Link from "next/link";

const CATEGORIES = [
  { id: "walks", label: "Walks & Hikes", image: "/images/downtown.jpg" },
  { id: "food", label: "Food", image: "/images/wazwan-new.jpg" },
  { id: "do-it-yourself", label: "Do It Yourself", image: "/images/craft.jpg" },
  { id: "skiing", label: "Skiing", image: "/images/gulmarg.jpg" }
] as const;

export default function Experiences() {
  const containerRef = useRef(null);

  return (
    <section id="experiences" ref={containerRef} className="bg-[#FAFAF8] py-20 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-switzerland">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl font-switzerland">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-800 text-black tracking-tight leading-none">
              Experiences
            </h2>
          </div>

          {/* Premium Category Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mt-2">
            {CATEGORIES.map((tab, i) => {
              return (
                <Link
                  href={`/experiences/category/${tab.id}`}
                  key={tab.id}
                  className="relative aspect-square overflow-hidden rounded-2xl text-left transition-all duration-300 cursor-pointer select-none group focus:outline-none hover:scale-[1.02] shadow-[0_12px_28px_-16px_rgba(0,0,0,0.12)]"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={asset(tab.image)}
                      alt={tab.label}
                      fill
                      className="object-cover"
                      sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
                    />
                    {/* Bottom Dark Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />
                  </div>

                  {/* Overlaid Title on Card Bottom-Left */}
                  <div className="absolute bottom-0 left-0 p-4 sm:p-5 w-full text-left z-10 pointer-events-none">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-800 text-white font-switzerland tracking-tight leading-tight group-hover:text-[#F59E0B] transition-colors duration-300">
                      {tab.label}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
