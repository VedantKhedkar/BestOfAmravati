"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaBriefcase, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import ApplyForm from '@/components/ApplyForm';

export default function HiringContentCreator() {
  // --- Modal State ---
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      id="hiring"
      className="py-24 bg-gray-50 overflow-hidden relative"
    >
      {/* --- Background Atmosphere --- */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-200/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* 1. Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white border border-purple-100 px-5 py-2 rounded-full shadow-sm mb-2 hover:shadow-md transition-shadow">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-purple-900 font-bold text-xs tracking-wide uppercase">
              We are Hiring
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Creative Team
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Help us bring the best of our city to the world. We're looking for
            passionate creators to lead our next phase of growth.
          </p>
        </div>

        {/* 2. Job Post Card */}
        <div className="relative group animate-fade-up animation-delay-200">
          {/* Gradient Border Effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-[2.5rem] opacity-30 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>

          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Subtle Background Pattern inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-10 lg:gap-16">
              
              {/* Left Side: Role Info */}
              <div className="flex-1 space-y-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm">
                    <FaBriefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Content Creator
                    </h3>
                    <p className="text-gray-500 mt-1 font-medium">
                      Best of Amravati • Media Team
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs md:text-sm font-bold border border-gray-200 uppercase tracking-wide">
                    Full-Time
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs md:text-sm font-bold border border-purple-100 uppercase tracking-wide">
                    On-site / Hybrid
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs md:text-sm font-bold border border-green-100 uppercase tracking-wide">
                    Immediate
                  </span>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  We are looking for a talented Content Creator to craft
                  engaging visuals for local businesses. You'll be the
                  creative force behind our{" "}
                  <span className="font-bold text-purple-600">
                    Creative Reel Promotion Concept
                  </span>.
                </p>

                {/* Desktop Button */}
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="hidden md:inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-purple-600 hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300 group/btn"
                >
                  Apply Now
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Side: Responsibilities */}
              <div className="flex-1 bg-gray-50/80 rounded-3xl p-8 border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  Key Responsibilities
                </h4>
                <ul className="space-y-4">
                  {[                  
                  "Script & direct viral-worthy reels.",
                  "Execute professional on-site shoots.",
                  "High-quality editing (Premiere/CapCut).",
                  "Collaborate on content strategy.",
                  "Ensure brand consistency.",
                  "Use trending music, hooks & styles.",
                  "Enhance visuals with dynamic motion graphics.", // New
                  "Professional color grading for cinematic looks.", // New
                  "Optimize content for maximum algorithm reach.", // New
                  "Capture authentic behind-the-scenes moments." // New
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <FaCheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Mobile-only Button */}
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="w-full mt-8 md:hidden inline-flex justify-center items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
                >
                  Apply Now
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* --- MODAL INJECTION --- */}
        <ApplyForm 
          isOpen={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
        />

      </div>
    </section>
  );
}