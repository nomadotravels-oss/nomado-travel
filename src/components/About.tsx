"use client";
import { useRef } from"react";
import Image from"next/image";
import { asset } from"@/lib/asset";
import { motion, useScroll, useTransform, useInView } from"framer-motion";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin:"-120px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end","end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%","6%"]);

  return (
    <section id="about" ref={ref} className="relative bg-white py-20 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-center">
        
        {/* Image Column (Balanced 6-column Layout) */}
        <div className="md:col-span-6 flex flex-col">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_16px_40px_-20px_rgba(0,0,0,0.18)] border border-gray-200/30">
            <motion.div style={{ y: imgY }} className="absolute inset-0 h-[114%] -top-[7%]">
              <Image
                src={asset("/images/shikara.jpg")}
                alt="A vendor selling fruit from a shikara on Dal Lake"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
          
          {/* Caption Placed Cleanly Underneath (MySwitzerland Minimalist Style) */}
          <p className="text-xs text-[#6B7280] mt-4 font-medium italic flex items-center gap-2 px-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D97706] shrink-0" />
            The floating market of Dal Lake, before sunrise.
          </p>
        </div>

        {/* Text Column (Balanced 6-column Layout) */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-[10px] tracking-[0.25em] font-700 text-[#D97706] uppercase block mb-6 md:mb-8"
          >
            01 — About Nomado
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-800 text-black tracking-tight leading-[1.15] mb-8"
          >
            Designed around{""}
            <span className="italic font-400 text-[#D97706] tracking-normal">experiences</span>,
            not checklists.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[#374151] text-base md:text-lg leading-relaxed mb-6 font-medium"
          >
            The best journeys are not measured by the number of places visited,
            but by the moments that stay with you long after you return home.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-[#4B5563] text-sm md:text-base leading-relaxed font-normal"
          >
            We create thoughtfully curated experiences that connect travellers
            with Kashmir&apos;s living heritage — its communities, crafts, cuisine,
            and breathtaking landscapes. Every itinerary is handcrafted to offer a
            deeper understanding of the region while keeping the comfort modern
            travellers seek.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
