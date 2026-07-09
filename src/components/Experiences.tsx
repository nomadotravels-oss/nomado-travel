"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { experiences } from "@/data/experiences";

const CATEGORIES = [
  { id: "walks", label: "Walks & Hikes" },
  { id: "food", label: "Food" },
  { id: "hikes", label: "Hikes" },
  { id: "make-it-yourself", label: "Make It Yourself" },
  { id: "skiing", label: "Skiing" }
] as const;

export default function Experiences() {
  const [activeTab, setActiveTab] = useState<typeof CATEGORIES[number]["id"]>("walks");
  const containerRef = useRef(null);

  const filteredExperiences = experiences.filter(exp => exp.category === activeTab);

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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 mt-2">
            {CATEGORIES.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-28 cursor-pointer select-none ${
                    isActive 
                      ? "bg-[#06172E] border-[#06172E] text-white shadow-[0_12px_24px_-10px_rgba(6,23,46,0.2)]" 
                      : "bg-white border-gray-255 text-[#06172E] hover:border-gray-300 hover:shadow-sm"
                  }`}
                >
                  <span className={`text-[9px] font-700 uppercase tracking-widest ${isActive ? "text-[#F59E0B]" : "text-gray-400"}`}>
                    Category
                  </span>
                  <span className="text-sm md:text-base font-750 tracking-tight mt-auto leading-tight">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Categorized Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                key={exp.id}
                className="w-full"
              >
                <Link href={`/experiences/${exp.id}`} className="group block">
                  <article className="flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-gray-200/60 transition-all duration-500">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                      <motion.div
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={asset(exp.image)}
                          alt={exp.title}
                          fill
                          className="object-cover"
                          style={{ objectPosition: exp.pos ?? "center" }}
                          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                        />
                      </motion.div>
                      
                      {/* Region Badge */}
                      <span className="absolute top-4 left-4 bg-white/85 backdrop-blur-md text-[#06172E] text-[10px] font-700 tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                        {exp.region}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <span className="text-[10px] font-700 text-[#F59E0B] uppercase tracking-widest block mb-2">
                          {exp.duration}
                        </span>
                        <h3 className="text-xl md:text-2xl font-750 text-[#06172E] leading-tight mb-2 group-hover:text-[#F59E0B] transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                          {exp.desc}
                        </p>
                      </div>

                      {/* Footer Link Indicator */}
                      <div className="flex items-center gap-1.5 text-xs font-700 text-[#06172E] uppercase tracking-wide mt-6 border-t border-gray-50 pt-4 group-hover:gap-2.5 transition-all duration-300">
                        <span>Learn More</span>
                        <svg className="w-3.5 h-3.5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
