"use client";
import { useRef, useState, useEffect } from"react";
import { motion, useInView, AnimatePresence } from"framer-motion";

const testimonials = [
  { quote:"We had a lovely experience in Kashmir.. From hotel to pick up, the driver and food, everything was taken utmost care. We just decided 2 days ahead of travelling and Nomado gave us a very good package !! Thanks for making our trip a memorable one !! Will surely recommend friends and relatives.", name:"Fatima Em",          place:"Mangalore, India"  },
  { quote:"The team's attentiveness and commitment to customer satisfaction truly set them apart. We highly recommend their services for anyone planning a trip to Kashmir or anywhere else!",                                                                                                                       name:"Japnam Kaur Bindra", place:"Delhi, India"      },
  { quote:"Traveling in Kashmir can be challenging due to unpredictable weather and road conditions, but with nomado.travel, we felt completely at ease and entire family including my kids were comfortable.",                                                                                                       name:"Pranesh Panoli",     place:"Kerala, India"     },
  { quote:"Kashmir is definitely a beautiful place and can be enjoyed only through these kind of people who keeps customer experience as their top priority.",                                                                                                                                                        name:"Jithin Jawahar",     place:"Hyderabad, India"  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-3 h-3" fill="#D97706">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.1l-4.94 2.6.94-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </div>
  );
}

function NavBtn({ dir, onClick }: { dir:"prev" |"next"; onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label={dir} className="w-10 h-10 rounded-full border border-gray-250 flex items-center justify-center text-black bg-white hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm">
      {dir ==="prev"
        ? <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10H5M10 15l-5-5 5-5" /></svg>
        : <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10M10 5l5 5-5 5" /></svg>}
    </button>
  );
}

function usePerPage() {
  const [perPage, setPerPage] = useState(3);
  useEffect(() => {
    const update = () => setPerPage(window.innerWidth < 768 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return perPage;
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin:"-80px" });
  const [page, setPage] = useState(0);
  const perPage = usePerPage();
  const pageCount = Math.ceil(testimonials.length / perPage);
  const safePage = Math.min(page, pageCount - 1);
  const shown = testimonials.slice(safePage * perPage, safePage * perPage + perPage);

  return (
    <section ref={ref} className="bg-[#FAFAF8] py-20 md:py-24 px-6 md:px-12 lg:px-20">
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
              Words from <span className="italic font-400 text-[#D97706] tracking-normal">our travellers.</span>
            </motion.h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-start sm:self-end">
            <NavBtn dir="prev" onClick={() => setPage(() => (safePage - 1 + pageCount) % pageCount)} />
            <NavBtn dir="next" onClick={() => setPage(() => (safePage + 1) % pageCount)} />
          </div>
        </div>

        {/* Testimonials Grid Row */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className={`flex-1 grid gap-6 md:gap-8 ${perPage === 1 ?"grid-cols-1" :"grid-cols-3"}`}>
          <AnimatePresence mode="wait">
            {shown.map((t, i) => (
              <motion.figure key={`t-${safePage}-${i}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white border border-gray-100 rounded-3xl shadow-[0_16px_36px_-24px_rgba(8,58,122,0.1)] hover:shadow-[0_24px_48px_-24px_rgba(8,58,122,0.16)] transition-all duration-500 p-6 md:p-8 flex flex-col justify-between min-h-[300px]">
                
                <div>
                  {/* Top Section: Profile Details + Stars */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D97706]/10 text-[#D97706] flex items-center justify-center font-800 text-sm shrink-0 uppercase">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs md:text-sm font-800 text-black leading-tight">{t.name}</div>
                        <div className="text-[9px] tracking-[0.12em] font-700 uppercase text-gray-400 mt-1">{t.place}</div>
                      </div>
                    </div>
                    <Stars />
                  </div>

                  {/* Quote Body */}
                  <blockquote className="italic text-gray-700 text-base md:text-lg leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

              </motion.figure>
            ))}
          </AnimatePresence>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: pageCount }, (_, p) => (
            <button key={p} onClick={() => setPage(p)} aria-label={`Page ${p + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${p === safePage ?"w-8 bg-[#D97706]" :"w-4 bg-gray-200"}`} />
          ))}
        </div>

      </div>
    </section>
  );
}
