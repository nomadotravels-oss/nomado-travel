"use client";
import { useRef } from"react";
import Image from"next/image";
import { asset } from"@/lib/asset";
import { motion, useInView } from"framer-motion";

import Link from"next/link";
import { experiences } from"@/data/experiences";

export default function Experiences() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin:"-80px" });
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction:"left" |"right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.75;
      sliderRef.current.scrollTo({
        left: direction ==="left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior:"smooth",
      });
    }
  };

  return (
    <section id="experiences" ref={ref} className="bg-[#FAFAF8] py-20 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block with Navigation Controls in Top Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-800 text-black tracking-tight leading-none"
            >
              Experiences
            </motion.h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-start sm:self-end">
            <button
              onClick={() => scrollSlider("left")}
              className="w-10 h-10 rounded-full border border-gray-255 flex items-center justify-center text-black bg-white hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm"
              aria-label="Previous Experiences"
            >
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10H5M10 15l-5-5 5-5" />
              </svg>
            </button>
            <button
              onClick={() => scrollSlider("right")}
              className="w-10 h-10 rounded-full border border-gray-255 flex items-center justify-center text-black bg-white hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm"
              aria-label="Next Experiences"
            >
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10M10 5l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Continuous Horizontal Scroll Track */}
        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full"
        >
          {experiences.map((exp, i) => (
            <Link href={`/experiences/${exp.id}`} key={exp.id} className="shrink-0 snap-start">
              <motion.article
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col bg-transparent w-[280px] sm:w-[320px] md:w-[360px]"
              >
                {/* Image Container - Square Aspect Ratio with Overlaid Text */}
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-200/40 bg-gray-50 shadow-[0_12px_28px_-16px_rgba(0,0,0,0.12)]">
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
                      style={{ objectPosition: exp.pos ??"center" }}
                      sizes="(max-width:640px) 280px, (max-width:1024px) 320px, 360px"
                    />
                  </motion.div>
                  
                  {/* Bottom Dark Gradient Scrim */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  {/* Overlaid Title on Card Bottom-Left */}
                  <div className="absolute bottom-0 left-0 p-5 sm:p-6 w-full text-left pointer-events-none">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-800 text-white  tracking-tight leading-tight">
                      {exp.title}
                    </h3>
                  </div>

                  {/* View Details Hover Icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
