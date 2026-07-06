"use client";
import { useRef, useState } from"react";
import Image from"next/image";
import { asset } from"@/lib/asset";
import { motion, useInView } from"framer-motion";

const SHEET_URL = process.env.NEXT_PUBLIC_SHEET_URL ??"";
const interests = ["Culture & Heritage","Food & Culinary","Photography","Nature & Trekking","Craft & Artisan","Village Life","Winter Kashmir","Spiritual Trails"];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin:"-80px" });
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const toggle = (item: string) =>
    setSelected(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = {
      name:      (form.elements.namedItem("name")  as HTMLInputElement).value,
      email:     (form.elements.namedItem("email") as HTMLInputElement).value,
      phone:     (form.elements.namedItem("phone") as HTMLInputElement).value,
      message:   (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      interests: selected.join(","),
      timestamp: new Date().toISOString(),
    };
    if (SHEET_URL) {
      try {
        await fetch(SHEET_URL, {
          method:"POST",
          mode:"no-cors",
          headers: {"Content-Type":"application/json" },
          body: JSON.stringify(data),
        });
      } catch (_) {}
    }
    setSending(false);
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setSelected([]);
  };

  return (
    <section id="contact" ref={ref} className="bg-[#FAFAF8] lg:bg-white">
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        
        {/* Left: Image Container */}
        <div className="relative h-[45vh] lg:h-auto overflow-hidden flex items-end">
          <Image
            src={asset("/images/snow.jpg")}
            alt="Snow-capped mountains of Kashmir"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06172E]/90 via-[#06172E]/20 to-[#06172E]/25" />
          <div className="relative p-8 md:p-12 lg:p-16 z-10">
            <span className="block w-12 h-px bg-[#F59E0B] mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
              className="italic text-[clamp(1.5rem,2.4vw,2.3rem)] text-[#F5F9FD] leading-[1.3] max-w-sm"
            >
              Every great journey begins with a single conversation.
            </motion.p>
          </div>
        </div>

        {/* Right: Form Block Container */}
        <div className="px-6 md:px-16 lg:px-20 py-12 md:py-16 flex flex-col justify-center bg-[#FAFAF8] lg:bg-white h-full">
          <div className="max-w-xl mx-auto w-full">
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl font-800 leading-tight text-black mb-4"
            >
              Tell us what <span className="italic font-400 text-[#D97706] tracking-normal">inspires you.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-[#6B7280] text-sm md:text-base leading-relaxed mb-8 font-normal"
            >
              Culture, food, photography, nature, or simply Kashmir at a slower
              pace — we&apos;d love to craft a journey that&apos;s entirely yours.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-[#D97706]/40 bg-[#FAFAF8] rounded-3xl p-8 text-center shadow-sm"
              >
                <div className="text-4xl text-[#D97706] mb-4">✦</div>
                <h3 className="text-xl font-800 text-black mb-2">We&apos;ve received your enquiry.</h3>
                <p className="italic text-gray-500 text-base mb-6">
                  Someone from the team will reach out within 48 hours.
                </p>
                <button
                  onClick={reset}
                  className="text-[11px] tracking-[0.2em] font-700 uppercase px-8 py-3.5 border border-[#D97706] text-[#D97706] hover:bg-[#D97706] hover:text-white rounded-full transition-all duration-300 shadow-sm"
                >
                  Make Another Enquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25, duration: 0.7 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { id:"name",  label:"Your Name",  placeholder:"James Wilson",       type:"text"  },
                    { id:"email", label:"Email",       placeholder:"james@example.com",  type:"email" },
                  ].map(f => (
                    <div key={f.id} className="flex flex-col">
                      <label htmlFor={f.id} className="text-[10px] tracking-[0.2em] font-700 uppercase text-gray-400 mb-1.5 block">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        className="bg-white border border-gray-200 focus:border-black focus:ring-1 focus:ring-black px-4 py-2.5 rounded-2xl text-[#1F2937] placeholder-gray-400 text-sm outline-none transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-[10px] tracking-[0.2em] font-700 uppercase text-gray-400 mb-1.5 block">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    className="bg-white border border-gray-200 focus:border-black focus:ring-1 focus:ring-black px-4 py-2.5 rounded-2xl text-[#1F2937] placeholder-gray-400 text-sm outline-none transition-all duration-300"
                  />
                </div>

                {/* Interests */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] tracking-[0.2em] font-700 uppercase text-gray-400 block">
                    What interests you?
                  </span>
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {interests.map(item => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggle(item)}
                        className={`text-[10px] tracking-[0.05em] font-700 uppercase px-3.5 py-1.5 border rounded-full transition-all duration-300 ${
                          selected.includes(item)
                            ?"border-black bg-black text-white"
                            :"border-gray-200 bg-white text-gray-500 hover:border-black hover:text-black"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-[10px] tracking-[0.2em] font-700 uppercase text-gray-400 mb-1.5 block">
                    Tell Us About Your Trip <span className="normal-case tracking-normal font-400 text-gray-300">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="E.g. We're a group of 4 arriving on Aug 15, interested in Gulmarg + Pahalgam for 5 days…"
                    className="bg-white border border-gray-200 focus:border-black focus:ring-1 focus:ring-black px-4 py-2.5 rounded-2xl text-[#1F2937] placeholder-gray-400 text-sm outline-none transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="self-start text-[11px] tracking-[0.2em] font-700 uppercase px-10 py-3.5 bg-[#D97706] text-white hover:bg-[#F59E0B] rounded-full disabled:opacity-60 transition-all duration-300 mt-2 shadow-sm hover:shadow-md"
                >
                  {sending ?"Sending…" :"Send Enquiry →"}
                </button>
              </motion.form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
