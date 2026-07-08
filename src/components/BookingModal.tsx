"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  itineraryName: string;
}

export default function BookingModal({ isOpen, onClose, itineraryName }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [reservationNumber, setReservationNumber] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfTravel: ""
  });
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isEnquiryMode = formData.dateOfTravel && new Date(formData.dateOfTravel).getTime() > new Date("2026-10-20").getTime();

  const handleEnquireClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handlePayNow = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentComplete = () => {
    const resNumber = "RES-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setReservationNumber(resNumber);
    setStep(3);
  };

  const handleClose = () => {
    setStep(1);
    setReservationNumber("");
    setFormData({ fullName: "", email: "", phone: "", dateOfTravel: "" });
    onClose();
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-[#06172E]/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl w-full max-w-lg shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-[#06172E] text-white p-6 md:p-8 relative">
                <button 
                  onClick={handleClose}
                  className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h3 className="font-clash text-2xl md:text-3xl font-600 mb-2">
                  {step === 1 ? "Reserve Your Trip" : "Request Received"}
                </h3>
                <p className="text-white/80 text-sm md:text-base font-switzerland">
                  {itineraryName}
                </p>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                {step === 1 ? (
                  <form onSubmit={handlePayNow} className="space-y-5">
                    <div>
                      <label className="block text-sm font-600 text-gray-700 mb-1.5 ml-1">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 focus:border-[#F59E0B] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-600 text-gray-700 mb-1.5 ml-1">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 focus:border-[#F59E0B] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-600 text-gray-700 mb-1.5 ml-1">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 focus:border-[#F59E0B] transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-600 text-gray-700 mb-1.5 ml-1">Date of Travel</label>
                      <input 
                        required 
                        type="date" 
                        value={formData.dateOfTravel}
                        onChange={(e) => setFormData({...formData, dateOfTravel: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 focus:border-[#F59E0B] transition-all text-gray-800"
                      />
                    </div>
                    
                    <div className="pt-4 relative">
                      {!isEnquiryMode ? (
                        <div className="space-y-3">
                          <button 
                            type="submit"
                            className="w-full bg-[#F59E0B] hover:bg-[#d98b09] text-[#06172E] py-4 rounded-xl font-700 text-lg transition-colors duration-300 shadow-md"
                          >
                            Request Reservation
                          </button>
                        </div>
                      ) : (
                        <div className="relative">
                          <button 
                            type="button"
                            onClick={handleEnquireClick}
                            className="w-full bg-[#F59E0B] hover:bg-[#d98b09] text-[#06172E] py-4 rounded-xl font-700 text-lg transition-colors duration-300 shadow-md flex items-center justify-center gap-2"
                          >
                            Enquire Now
                            <svg className={`w-5 h-5 transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </button>
                          
                          <AnimatePresence>
                            {showDropdown && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute bottom-full left-0 right-0 mb-3 bg-white border border-gray-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden flex flex-col z-[120]"
                              >
                                <a 
                                  href={`https://wa.me/917006712010?text=${encodeURIComponent(`Hi, I would like to enquire about the ${itineraryName} itinerary for travel on ${formData.dateOfTravel}.`)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-5 py-4 flex items-center gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
                                >
                                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                                  </svg>
                                  <span className="font-600 text-gray-800">Enquire via WhatsApp</span>
                                </a>
                                <a 
                                  href={`mailto:hello@nomado.travel?subject=${encodeURIComponent(`Enquiry: ${itineraryName}`)}&body=${encodeURIComponent(`Hi team,\n\nI would like to enquire about the ${itineraryName} itinerary for travel on ${formData.dateOfTravel}.\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\n\nPlease let me know the details.`)}`}
                                  className="px-5 py-4 flex items-center gap-3 hover:bg-gray-50 transition-colors"
                                >
                                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                  </svg>
                                  <span className="font-600 text-gray-800">Enquire via Email</span>
                                </a>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-col items-center text-center py-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-xl font-700 text-gray-900 mb-2 tracking-tight">Request Received!</p>
                    <p className="text-gray-600 mb-8">We will get back to you soon!</p>

                    <button 
                      onClick={handleClose}
                      className="w-full bg-[#06172E] hover:bg-[#0a2345] text-white py-4 rounded-xl font-700 transition-colors duration-300"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
