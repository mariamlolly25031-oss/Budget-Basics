import React from 'react'
import { FaAngleUp } from "react-icons/fa";

function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#FACC15] text-[#0F172A] shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#EAB308] focus:outline-none focus:ring-4 focus:ring-[#FACC15]/50"
    >
      <FaAngleUp className="h-5 w-5" />
    </button>
  )
}

export default BackToTop