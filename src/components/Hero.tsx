"use client";
import { useRef } from "react";
import { asset } from "@/lib/asset";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scrimOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.45]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#06172E] font-switzerland">
      {/* Background Video */}
      <motion.div style={{ y }} className="absolute inset-0 h-[108%] w-full">
        <div className="relative h-full w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={asset("/images/hero-poster.jpg")}
            className="absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src={asset("/images/hero2-trimmed.mp4")} type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Scrim Overlay - Darker at the top for Navbar readability, and at the bottom for transitions */}
      <motion.div style={{ opacity: scrimOpacity }} className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#06172E]/90" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto w-full h-full pb-[10vh] md:pb-0 md:pt-[10vh]"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12px] md:text-[14px] tracking-[0.25em] font-900 text-white uppercase mb-4"
        >
          Curated Experiences
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.6rem,7.5vw,5.5rem)] font-800 text-[#F5F9FD] tracking-tight leading-[1.05] mb-6"
        >
          Kashmir & Ladakh<span className="text-[#F59E0B]">.</span>
        </motion.h1>



      </motion.div>

      {/* Call Now Button - Lower Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[22vh] md:bottom-[15vh] left-1/2 -translate-x-1/2 z-20"
      >
        <a
          href="tel:+917006712010"
          className="flex items-center gap-3 text-[12px] tracking-[0.2em] font-700 uppercase px-10 py-4 border border-white/30 text-white bg-white/10 hover:bg-white hover:text-[#06172E] rounded-full transition-all duration-500 shadow-lg hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] backdrop-blur-md"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          Call Now
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8 md:right-12 z-20 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.3em] font-700 uppercase text-[#C9D9E8]/50 [writing-mode:vertical-lr] select-none">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.2, 1, 0.2], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-[#F59E0B]/60"
        />
      </motion.div>
    </section>
  );
}
