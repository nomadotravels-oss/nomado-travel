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
          className="text-[clamp(2.6rem,7.5vw,5.5rem)] font-800 text-[#F5F9FD] tracking-tight leading-[1.05] mb-10"
        >
          Kashmir & Ladakh<span className="text-[#F59E0B]">.</span>
        </motion.h1>



      </motion.div>

      {/* WhatsApp Button - Lower Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[22vh] md:bottom-[20vh] left-1/2 -translate-x-1/2 z-20"
      >
        <a
          href="https://wa.me/917006712010?text=Hi%20Nomado!%20I'm%20interested%20in%20planning%20a%20trip."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-[12px] tracking-[0.2em] font-700 uppercase px-8 md:px-10 py-4 border border-[#25D366]/50 text-white bg-[#25D366]/20 hover:bg-[#25D366] hover:text-white rounded-full transition-all duration-500 shadow-lg hover:shadow-[0_8px_30px_rgba(37,211,102,0.35)] backdrop-blur-md whitespace-nowrap w-max"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us
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
