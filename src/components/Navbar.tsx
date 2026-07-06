"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Destinations", "Experiences", "Journal", "Contact"];
const linkHrefs: Record<string, string> = { Contact: "/#contact" };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 transition-all duration-500 ease-in-out ${
          scrolled
            ? "py-4 bg-[#083A7A]/80 backdrop-blur-md border-b border-[#F5F9FD]/10 shadow-sm"
            : "py-6 md:py-8 bg-transparent border-b border-transparent"
        }`}
      >
        {/* Brand */}
        <a href="/" className="text-[1.15rem] md:text-[1.3rem] tracking-wide select-none">
          <span className="font-century-bold text-[#F59E0B]">nomado</span><span className="font-century text-[#F5F9FD]">.travel</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9 lg:gap-11">
          {links.map(link => (
            <a
              key={link}
              href={linkHrefs[link] ?? `/#${link.toLowerCase()}`}
              className={`font-clash text-[12px] tracking-[0.2em] uppercase transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-[#F59E0B] hover:after:w-full after:transition-all after:duration-300 ${
                scrolled ? "text-[#C9D9E8] hover:text-[#F5F9FD]" : "text-white/90 hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}
          <a
            href="tel:+917006712010"
            className={`font-clash text-[12px] tracking-[0.18em] uppercase px-6 py-2.5 border rounded-full transition-all duration-500 ${
              scrolled
                ? "border-[#F59E0B]/40 text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white hover:border-[#F59E0B]"
                : "border-white/30 text-white hover:bg-white hover:text-black hover:border-white"
            }`}
          >
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 z-50">
          <span className={`block w-6 h-0.5 bg-[#F5F9FD] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F5F9FD] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F5F9FD] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#083A7A] flex flex-col items-center justify-center gap-9"
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={linkHrefs[link] ?? `/#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-clash text-4xl font-600 text-[#F5F9FD] tracking-widest uppercase"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
