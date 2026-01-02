// components/ApplyForm.tsx
"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom"; // Import createPortal
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaLink,
  FaPhoneAlt,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCheck,
  FaSpinner,
  FaArrowRight,
  FaLock
} from "react-icons/fa";

interface ApplyFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyForm({ isOpen, onClose }: ApplyFormProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false); // New state to check if we are on client

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    address: '',
    portfolio: ''
  });

  // 1. Ensure code only runs on client-side to avoid hydration errors with Portals
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsSubmitted(false);
        setIsLoading(false);
      }, 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  // If not mounted or closed/invisible, render nothing
  if (!mounted || (!isVisible && !isOpen)) return null;

  // 2. Use createPortal to teleport this Modal to document.body
  // This bypasses all stacking contexts of the Footer or Parent components
  return createPortal(
    <div className={`fixed inset-0 z-[999999] flex items-center justify-center px-4 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-all" 
        onClick={onClose}
      />

      {/* Modal Card */}
      <div 
        className={`relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl flex flex-col max-h-[85vh] transform transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1) ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-10"
        }`}
      >
        
        {isSubmitted ? (
          // ================= SUCCESS STATE =================
          <div className="p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <FaCheck className="text-purple-600 text-3xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Application Sent!</h3>
            <p className="text-gray-600 mb-8 max-w-xs mx-auto">
              We've received your details. Our creative team will review and contact you shortly.
            </p>
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          // ================= FORM STATE =================
          <>
            {/* Header */}
            <div className="relative shrink-0 bg-gradient-to-r from-purple-600 to-pink-600 p-6 md:p-8 text-white text-center rounded-t-[2rem]">
               <button 
                 onClick={onClose} 
                 className="absolute top-5 right-5 text-white/70 hover:text-white hover:rotate-90 transition-all p-2 bg-white/10 rounded-full z-10"
               >
                 <FaTimes size={16} />
               </button>
               <h3 className="text-xl md:text-2xl font-bold mb-1">Join the Team</h3>
               <p className="text-purple-100 text-sm">Best of Amravati • Media</p>
               
               <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-2 rounded-full font-extrabold shadow-lg border-4 border-purple-50 text-xs md:text-sm flex items-center gap-2 whitespace-nowrap z-20">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Join Now
               </div>
            </div>

            {/* Form Body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 pt-10 md:p-10 bg-white rounded-b-[2rem]">
               <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                 
                 {/* Row 1: Name & Email */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                   <div className="group">
                     <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase ml-3 mb-1 block">Full Name</label>
                     <div className="relative flex items-center">
                       <FaUser className="absolute left-4 text-purple-400" />
                       <input 
                         type="text" 
                         name="name" 
                         required 
                         placeholder="John Doe"
                         className="w-full pl-10 pr-4 py-3 bg-gray-50/50 rounded-xl border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all font-semibold text-gray-700 text-sm md:text-base"
                         onChange={handleChange}
                       />
                     </div>
                   </div>

                   <div className="group">
                     <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase ml-3 mb-1 block">Email Address</label>
                     <div className="relative flex items-center">
                       <FaEnvelope className="absolute left-4 text-purple-400" />
                       <input 
                         type="email" 
                         name="email" 
                         required 
                         placeholder="john@example.com"
                         className="w-full pl-10 pr-4 py-3 bg-gray-50/50 rounded-xl border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all font-semibold text-gray-700 text-sm md:text-base"
                         onChange={handleChange}
                       />
                     </div>
                   </div>
                 </div>

                 {/* Row 2: Phone & Role */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div className="group">
                      <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase ml-3 mb-1 block">Phone</label>
                      <div className="relative flex items-center">
                        <FaPhoneAlt className="absolute left-4 text-purple-400" />
                        <input 
                          type="tel" 
                          name="phone" 
                          required 
                          placeholder="+91..."
                          className="w-full pl-10 pr-4 py-3 bg-gray-50/50 rounded-xl border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all font-semibold text-gray-700 text-sm md:text-base"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase ml-3 mb-1 block">Role</label>
                      <div className="relative flex items-center">
                        <FaBriefcase className="absolute left-4 text-purple-400 z-10" />
                        <select 
                          name="role" 
                          required
                          defaultValue=""
                          className="w-full pl-10 pr-8 py-3 bg-gray-50/50 rounded-xl border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all font-semibold text-gray-700 text-sm md:text-base appearance-none cursor-pointer"
                          onChange={handleChange}
                        >
                          <option value="" disabled>Select Role</option>
                          <option value="video-editing">Video Editing</option>
                          <option value="content-creation">Content Creation</option>
                          <option value="social-media">Social Media</option>
                        </select>
                        <span className="absolute right-3 text-gray-400 text-xs pointer-events-none">▼</span>
                      </div>
                    </div>
                 </div>

                 {/* Address Input */}
                 <div className="group">
                   <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase ml-3 mb-1 block">Current Address</label>
                   <div className="relative flex items-center">
                     <FaMapMarkerAlt className="absolute left-4 text-purple-400" />
                     <input 
                       type="text" 
                       name="address" 
                       placeholder="e.g. Rajapeth, Amravati"
                       className="w-full pl-10 pr-4 py-3 bg-gray-50/50 rounded-xl border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all font-semibold text-gray-700 text-sm md:text-base"
                       onChange={handleChange}
                     />
                   </div>
                 </div>

                 {/* Portfolio Link */}
                 <div className="group">
                   <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase ml-3 mb-1 block">Portfolio Link</label>
                   <div className="relative flex items-center">
                     <FaLink className="absolute left-4 text-purple-400" />
                     <input 
                       type="url" 
                       name="portfolio" 
                       placeholder="Instagram / Behance / Drive"
                       className="w-full pl-10 pr-4 py-3 bg-gray-50/50 rounded-xl border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all font-semibold text-gray-700 text-sm md:text-base"
                       onChange={handleChange}
                     />
                   </div>
                 </div>

                 {/* Submit Button */}
                 <button 
                   type="submit" 
                   disabled={isLoading}
                   className="w-full mt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                 >
                   {isLoading ? (
                     <><FaSpinner className="animate-spin" /> Sending...</>
                   ) : (
                     <><span>Submit Application</span> <FaArrowRight className="text-yellow-400" /></>
                   )}
                 </button>

                 <div className="text-center pb-2">
                   <p className="text-[10px] text-gray-400 font-medium flex items-center justify-center gap-1">
                     <FaLock className="text-green-500" /> Secure Application via Best of Amravati
                   </p>
                 </div>

               </form>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body // This is the key: we attach the modal to the body, not the footer!
  );
}