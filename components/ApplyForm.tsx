"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaBriefcase,
  FaMapMarkerAlt,
  FaLink,
  FaCheckCircle,
  FaArrowRight,
  FaRocket
} from "react-icons/fa";

interface ApplyFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyForm({ isOpen, onClose }: ApplyFormProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    address: '',
    portfolio: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = "hidden";
      }
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsSubmitted(false);
        setIsLoading(false);
      }, 300);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = "unset";
      }
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (!mounted || (!isVisible && !isOpen)) return null;

  return createPortal(
    <div className={`fixed inset-0 z-[999999] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
      
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-all" 
        onClick={onClose}
      />

      {/* Main Modal Container */}
      <div 
        className={`relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[700px] transform transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-12"
        }`}
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 z-50 w-10 h-10 bg-white/10 hover:bg-black/5 backdrop-blur-md rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 transition-all duration-200"
        >
          <FaTimes size={18} />
        </button>

        {/* ---------------- LEFT PANEL (Branding) ---------------- */}
        <div className="hidden md:flex w-[40%] bg-gradient-to-br from-purple-600 via-pink-600 to-pink-600 p-10 flex-col justify-between relative overflow-hidden text-white">
            
            <div className="absolute top-[-20%] right-[-20%] w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-60 h-60 bg-purple-900/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 mt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-8">
                 <FaRocket className="text-yellow-300" />
                 <span className="font-bold text-xs uppercase tracking-widest">Join The Team</span>
              </div>
              
              <h2 className="text-5xl font-black leading-[1.1] mb-6">
                Join the <br/>
                <span className="text-white/90">Revolution.</span>
              </h2>
              <p className="text-purple-100 text-lg leading-relaxed font-medium">
                Become part of Amravati's fastest-growing digital media powerhouse. We don't just create content; we create culture.
              </p>
            </div>

            <div className="relative z-10 space-y-6">
               <div className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <div className="flex -space-x-3 mb-3">
                      {[1,2,3,4].map(i => (
                       <div key={i} className={`w-8 h-8 rounded-full border-2 border-purple-500 bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 bg-cover`} style={{backgroundImage: `url('https://i.pravatar.cc/100?img=${i + 10}')`}}></div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-purple-500 bg-white flex items-center justify-center text-[10px] font-bold text-purple-600">+12</div>
                  </div>
                  <p className="text-sm font-semibold">Join 20+ Creatives & Strategists</p>
               </div>
            </div>
        </div>

        {/* ---------------- RIGHT PANEL (Form) ---------------- */}
        <div className="w-full md:w-[60%] bg-white flex flex-col relative">
          
          {isSubmitted ? (
            <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-sm ring-4 ring-green-50">
                <FaCheckCircle className="text-green-500 text-5xl animate-bounce" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-3">Application Sent!</h3>
              <p className="text-gray-500 max-w-sm mx-auto mb-8 text-lg">
                Thanks, <span className="font-bold text-purple-600">{formData.name}</span>. Our team will review your profile and get back to you within 48 hours.
              </p>
              <button 
                onClick={onClose}
                className="px-10 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all hover:scale-105 shadow-xl"
              >
                Back to Website
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-6 md:p-12">
              
              <div className="md:hidden mb-8">
                <h2 className="text-3xl font-black text-gray-900 mb-2">Apply Now</h2>
                <p className="text-gray-500">Let's start your journey.</p>
              </div>

              <div className="mb-8 hidden md:block">
                <h3 className="text-2xl font-bold text-gray-900">Your Details</h3>
                <p className="text-gray-400 text-sm mt-1">Please fill out the form carefully.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="group space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 group-focus-within:text-purple-600 transition-colors">Full Name</label>
                    <div className="relative">
                      <FaUser className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="John Doe"
                        className="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:bg-white focus:border-purple-200 rounded-2xl outline-none transition-all shadow-sm font-semibold text-gray-800 placeholder-gray-300 focus:shadow-purple-100"
                        onChange={handleChange}
                        value={formData.name}
                      />
                    </div>
                  </div>
                  
                  <div className="group space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 group-focus-within:text-purple-600 transition-colors">Email Address</label>
                    <div className="relative">
                      <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="hello@example.com"
                        className="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:bg-white focus:border-purple-200 rounded-2xl outline-none transition-all shadow-sm font-semibold text-gray-800 placeholder-gray-300 focus:shadow-purple-100"
                        onChange={handleChange}
                        value={formData.email}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="group space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 group-focus-within:text-purple-600 transition-colors">Phone Number</label>
                    <div className="relative">
                      <FaPhoneAlt className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        placeholder="+91 999..."
                        className="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:bg-white focus:border-purple-200 rounded-2xl outline-none transition-all shadow-sm font-semibold text-gray-800 placeholder-gray-300 focus:shadow-purple-100"
                        onChange={handleChange}
                        value={formData.phone}
                      />
                    </div>
                  </div>

                  <div className="group space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 group-focus-within:text-purple-600 transition-colors">Applying For</label>
                    <div className="relative">
                      <FaBriefcase className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 z-10 group-focus-within:text-purple-500 transition-colors" />
                      <select 
                        name="role" 
                        required
                        className="w-full pl-11 pr-8 py-4 bg-gray-50 border-2 border-transparent focus:bg-white focus:border-purple-200 rounded-2xl outline-none transition-all shadow-sm font-semibold text-gray-800 appearance-none cursor-pointer focus:shadow-purple-100"
                        onChange={handleChange}
                        value={formData.role}
                      >
                        <option value="" disabled>Select Position</option>
                        <option value="video-creator">Video Creator</option>
                        <option value="video-editor">Video Editor</option>
                        <option value="script-writer">Script Writer</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="graphic-designer">Graphic Designer</option>
                        <option value="anchor">Anchor</option>
                        <option value="voice-artist">Voice Artist</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">▼</span>
                    </div>
                  </div>
                </div>

                <div className="group space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 group-focus-within:text-purple-600 transition-colors">Current Location</label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                    <input 
                      type="text" 
                      name="address" 
                      placeholder="e.g. Rajapeth, Amravati"
                      className="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:bg-white focus:border-purple-200 rounded-2xl outline-none transition-all shadow-sm font-semibold text-gray-800 placeholder-gray-300 focus:shadow-purple-100"
                      onChange={handleChange}
                      value={formData.address}
                    />
                  </div>
                </div>

                <div className="group space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 group-focus-within:text-purple-600 transition-colors">Portfolio / Resume Link</label>
                  <div className="relative">
                    <FaLink className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                    <input 
                      type="url" 
                      name="portfolio" 
                      placeholder="https://behance.net/yourprofile"
                      className="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:bg-white focus:border-purple-200 rounded-2xl outline-none transition-all shadow-sm font-semibold text-gray-800 placeholder-gray-300 focus:shadow-purple-100"
                      onChange={handleChange}
                      value={formData.portfolio}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="group w-full bg-gradient-to-r from-purple-600 via-pink-600 to-pink-600 text-white font-black text-lg py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <span className="relative z-10">Submit Application</span>
                        <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}