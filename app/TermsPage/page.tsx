"use client";

import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaShieldAlt, FaFileContract, FaUndoAlt, FaCheckCircle, FaLock } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Footer from "@/components/Footer";

export default function LegalPolicies() {
  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-900 font-sans">
      
      {/* --- TOP NAVIGATION --- */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-6 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 relative overflow-hidden rounded-full border border-purple-100 shadow-sm">
            <Image 
              src="/boalogo.svg" 
              alt="Best of Amravati Logo" 
              fill 
              className="object-cover" 
            />
          </div>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 hidden sm:block uppercase tracking-tight">
            Best Of Amravati
          </span>
        </Link>

        <Link 
          href="/" 
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-purple-700 border border-purple-100 hover:bg-purple-600 hover:text-white transition-all duration-300 text-xs font-bold shadow-sm"
        >
          <FaChevronLeft className="text-[10px]" /> BACK TO HOME
        </Link>
      </nav>

      {/* --- HEADER SECTION --- */}
      <header className="bg-gradient-to-br from-purple-700 via-purple-600 to-pink-600 py-24 px-6 text-center text-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
             <FaLock className="text-[10px]" />
             <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Secure Framework</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">Legal Framework</h1>
          <p className="text-purple-100 max-w-2xl mx-auto font-medium text-sm md:text-base leading-relaxed">
            Official guidelines for the Best of Amravati Local Business Growth Initiative, professionally managed by <span className="text-white font-bold underline decoration-white/30 underline-offset-4">BIZONANCE INDIA PVT LTD</span>.
          </p>
        </div>
      </header>

      {/* --- MAIN CARDS SECTION --- */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        
        {/* CARD 1: TERMS & CONDITIONS */}
        <section id="terms" className="scroll-mt-28 group">
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-purple-900/5 hover:shadow-purple-900/10 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-[5rem] -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 shadow-inner">
                <FaFileContract className="text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-purple-900 uppercase">Terms & Conditions</h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed relative z-10">
              <p className="font-bold text-sm uppercase tracking-widest text-purple-600">Operational & Service Standards</p>
              <ul className="grid gap-5">
                {[
                  "Best of Amravati is a city-focused digital platform committed to empowering businesses through high-impact digital visibility.",
                  "The platform and trademark are exclusively owned and managed by BIZONANCE INDIA PVT LTD.",
                  "Service deliverables include a professionally shot and edited 30-60 second Creative Reel.",
                  "Promotion is guaranteed across Instagram, Facebook, and YouTube Shorts official handles.",
                  "The process involves 7 stages: Briefing, Media Collection, Creative Editing, Owner Approval, Platform Posting, Promotion, and Insight Sharing."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start group/item">
                    <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className="text-sm md:text-base font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CARD 2: PRIVACY POLICY */}
        <section id="privacy" className="scroll-mt-28 group">
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-pink-900/5 hover:shadow-pink-900/10 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-[5rem] -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 shadow-inner">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-pink-900 uppercase">Privacy Policy</h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed relative z-10">
              <p className="font-bold text-sm uppercase tracking-widest text-pink-600">Information Management & Security</p>
              <ul className="grid gap-5">
                {[
                  "We collect business identifiers and contact numbers strictly for campaign coordination and professional branding.",
                  "Media content captured during business visits is used exclusively for promotional reel production.",
                  "All briefings and media assets are managed securely through the BIZONANCE INDIA PVT LTD infrastructure.",
                  "Campaign reach metrics are shared directly with the business owner to maintain total transparency."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start group/item">
                    <FaCheckCircle className="text-pink-500 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className="text-sm md:text-base font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CARD 3: REFUND POLICY */}
        <section id="refund" className="scroll-mt-28 group">
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-indigo-900/5 hover:shadow-indigo-900/10 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[5rem] -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 shadow-inner">
                <FaUndoAlt className="text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-indigo-900 uppercase">Refund Policy</h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed relative z-10">
              <p className="font-bold text-sm uppercase tracking-widest text-indigo-600">Pricing, Performance & Fulfillment</p>
              <ul className="grid gap-5">
                {[
                  "The Creative Reel Promotion Package is a fixed investment of ₹3,500 per reel.",
                  "Payments are non-refundable once media collection or the shoot phase has commenced.",
                  "We provide a Guaranteed Minimum Combined Reach of 1,00,000+ views.",
                  "If the reach target is not achieved initially, promotion continues at no extra cost until fulfilled."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start group/item">
                    <FaCheckCircle className="text-indigo-500 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className="text-sm md:text-base font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER COMPONENT --- */}
      <Footer />
    </div>
  );
}