"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaAward, FaBullhorn, FaMicrophone, FaStar, 
  FaCheckCircle, FaArrowRight, FaTrophy, FaLightbulb 
} from 'react-icons/fa';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AwarenessRecognitionPage() {
  const categories = [
    {
      title: "Brand Awareness",
      desc: "We turn unknown local shops into household names through aggressive digital storytelling and viral visibility.",
      icon: <FaBullhorn className="text-purple-600" />,
    },
    {
      title: "Business Awards",
      desc: "Official recognition from Best of Amravati that validates your quality and builds instant trust with customers.",
      icon: <FaTrophy className="text-yellow-500" />,
    },
    {
      title: "PR & Media",
      desc: "Featured spots in our digital magazine and news segments, positioning you as an industry leader in the city.",
      icon: <FaMicrophone className="text-pink-600" />,
    }
  ];

  const milestones = [
    { year: "2023", event: "Best of Amravati Launched" },
    { year: "2024", event: "100+ Businesses Certified" },
    { year: "2025", event: "Reached 1 Million+ Combined Views" },
    { year: "2026", event: "Amravati's #1 Media Growth Agency" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-8">
            <FaStar /> Building Amravati's Biggest Brands
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8 tracking-tighter">
            Awareness that <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Commands Respect.</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
            In a crowded market, being "good" isn't enough. You need to be **recognized**. We provide the platform to make your brand the talk of the town.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="#get-recognized" className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black rounded-2xl hover:shadow-[0_20px_40px_rgba(147,51,234,0.4)] transition-all flex items-center gap-3">
              Get Certified <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SERVICE CATEGORIES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <div key={i} className="group p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-4xl mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">{cat.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE IMPACT DIAGRAM --- */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter">The Recognition Lifecycle</h2>
          <p className="text-gray-500 text-xl mb-12">How we take your business from local shop to city icon.</p>
          
          {/* Informative Image Tag */}
          
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
            {["Massive Discovery", "Customer Trust", "Expert Authority", "Brand Legacy"].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span className="font-bold text-gray-800">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TIMELINE/MILESTONES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-5xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">
              A Legacy of <br/> <span className="text-purple-600">Excellence.</span>
            </h2>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-0 before:h-full before:w-[2px] before:bg-gray-100">
              {milestones.map((m, i) => (
                <div key={i} className="relative pl-10 flex flex-col group">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-4 border-purple-600 z-10 group-hover:scale-125 transition-transform"></div>
                  <span className="text-purple-600 font-black text-xl mb-1">{m.year}</span>
                  <span className="text-gray-500 font-bold text-lg">{m.event}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full bg-gradient-to-tr from-purple-100 to-pink-100 rounded-[4rem] aspect-video flex items-center justify-center p-12 relative rotate-2 shadow-2xl">
              <div className="bg-white p-8 rounded-3xl shadow-xl -rotate-2 flex flex-col items-center text-center">
                  <FaAward className="text-6xl text-yellow-500 mb-4 animate-pulse" />
                  <h4 className="text-2xl font-black text-gray-900">BOA Certified 2026</h4>
                  <p className="text-gray-400 mt-2">Awarded to Amravati's most trusted businesses.</p>
              </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section id="get-recognized" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-[3.5rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-purple-500/10 rounded-full blur-[120px]"></div>
          <FaLightbulb className="text-5xl text-yellow-400 mx-auto mb-8 animate-bounce" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter italic">Is your business the "Best of Amravati"?</h2>
          <p className="text-purple-200 text-xl mb-12 max-w-2xl mx-auto">
            Apply for our Recognition Program and let us tell your story to the entire city.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="tel:8956727311" className="px-12 py-5 bg-white text-purple-900 font-black rounded-2xl hover:bg-gray-100 transition-all">
              Apply for Recognition
            </Link>
            <Link href="mailto:bestofamravati@gmail.com" className="px-12 py-5 border-2 border-white/30 text-white font-black rounded-2xl hover:bg-white/10 transition-all">
              Sponsor an Award
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}