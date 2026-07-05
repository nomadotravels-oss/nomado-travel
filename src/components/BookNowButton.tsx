"use client";
import { useState } from "react";
import BookingModal from "./BookingModal";

interface BookNowButtonProps {
  itineraryName: string;
  className?: string;
}

export default function BookNowButton({ itineraryName, className }: BookNowButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className={className || "block text-center bg-[#F59E0B] hover:bg-white text-[#06172E] w-full py-4 rounded-xl font-700 transition-colors duration-300 shadow-md"}
      >
        Book Now
      </button>
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        itineraryName={itineraryName}
      />
    </>
  );
}
