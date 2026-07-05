"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  itineraryName: string;
}

export default function BookingModal({ isOpen, onClose, itineraryName }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfTravel: ""
  });

  const handlePayNow = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleClose = () => {
    setStep(1); // reset state
    setFormData({ fullName: "", email: "", phone: "", dateOfTravel: "" });
    onClose();
  };

  return (
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
                  {step === 1 ? "Book Your Trip" : "Complete Payment"}
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
                    
                    <div className="pt-4">
                      <button 
                        type="submit"
                        className="w-full bg-[#F59E0B] hover:bg-[#d98b09] text-[#06172E] py-4 rounded-xl font-700 text-lg transition-colors duration-300 shadow-md"
                      >
                        Pay Now
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-col items-center text-center py-4">
                    <p className="text-gray-600 mb-6">
                      Scan the QR code below or use the UPI ID to make your payment securely.
                    </p>
                    
                    {/* Mock QR Code (Using a generic placeholder SVG) */}
                    <div className="bg-white p-4 rounded-2xl border-2 border-gray-100 shadow-sm mb-6 inline-block">
                      <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="text-gray-800">
                        {/* A very simple mock QR pattern */}
                        <path d="M10 10 h25 v25 h-25 z M15 15 h15 v15 h-15 z M65 10 h25 v25 h-25 z M70 15 h15 v15 h-15 z M10 65 h25 v25 h-25 z M15 70 h15 v15 h-15 z" fill="currentColor"/>
                        <path d="M40 10 h5 v5 h-5 z M50 10 h10 v5 h-10 z M40 20 h15 v5 h-15 z M50 30 h5 v10 h-5 z M40 40 h15 v5 h-15 z M65 40 h10 v5 h-10 z M80 40 h10 v5 h-10 z M40 50 h5 v10 h-5 z M55 50 h15 v5 h-15 z M80 50 h10 v15 h-10 z M40 70 h10 v5 h-10 z M55 65 h10 v15 h-10 z M70 70 h5 v10 h-5 z M80 75 h10 v5 h-10 z M90 65 h5 v5 h-5 z" fill="currentColor"/>
                      </svg>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 mb-8 w-full">
                      <span className="block text-sm text-gray-500 mb-1 uppercase tracking-wider font-600">UPI ID</span>
                      <span className="block text-xl font-700 text-[#06172E] tracking-tight">nomado@axl</span>
                    </div>

                    <button 
                      onClick={handleClose}
                      className="w-full bg-[#06172E] hover:bg-[#0a2345] text-white py-4 rounded-xl font-700 transition-colors duration-300"
                    >
                      I have made the payment
                    </button>
                  </div>
                )}
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
