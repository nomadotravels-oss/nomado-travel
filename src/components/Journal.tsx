"use client";
import { useRef } from"react";
import Image from"next/image";
import Link from"next/link";
import { asset } from"@/lib/asset";
import { posts } from"@/lib/journal";
import { motion, useInView } from"framer-motion";

export default function Journal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin:"-80px" });

  return (
    <section id="journal" ref={ref} className="bg-white py-20 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-800 text-black tracking-tight leading-none"
          >
            Stories from <span className="italic font-400 text-[#D97706] tracking-normal">the valley.</span>
          </motion.h2>
        </div>

        {/* Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10">
          {posts.map((post, idx) => {
            // Configure layout properties based on index to create a beautiful collage
            let colSpanClass ="lg:col-span-4 sm:col-span-1";
            let aspectClass ="aspect-[4/3]";
            let titleClass ="text-lg md:text-xl";
            let sizes ="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

            if (idx === 0) {
              // First post - Large Featured
              colSpanClass ="lg:col-span-8 sm:col-span-2";
              aspectClass ="aspect-[16/10]";
              titleClass ="text-xl md:text-2xl lg:text-3xl";
              sizes ="(max-width: 1024px) 100vw, 66vw";
            }

            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className={`group flex flex-col bg-transparent ${colSpanClass}`}
              >
                <Link href={`/journal/${post.slug}`} className="flex flex-col h-full">
                  {/* Image Card Container */}
                  <div className={`relative overflow-hidden rounded-2xl border border-gray-200/40 bg-gray-50 shadow-[0_12px_28px_-16px_rgba(0,0,0,0.12)] mb-4 shrink-0 ${aspectClass}`}>
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={asset(post.image)}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes={sizes}
                      />
                    </motion.div>
                  </div>

                  {/* Text block underneath */}
                  <div className="pt-2 flex flex-col items-start px-1">
                    <span className="text-[10px] tracking-[0.2em] font-700 text-[#D97706] uppercase mb-1.5 block">
                      {post.region}
                    </span>
                    <h3 className={`text-black group-hover:text-[#D97706] transition-colors duration-300 font-800 leading-snug mb-2 ${titleClass}`}>
                      {post.title}
                    </h3>
                    <p className="text-[#4B5563] text-xs md:text-sm leading-relaxed font-normal">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* CTA Button to Explore Journal */}
        <div className="flex justify-center mt-16">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-black/30 text-black hover:bg-black hover:text-white rounded-full font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-md"
          >
            Explore Journal
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current" stroke="currentColor" strokeWidth="0.5">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
