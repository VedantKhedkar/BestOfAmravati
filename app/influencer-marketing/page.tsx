"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaRocket, FaUsers, FaChartBar, FaBullhorn, 
  FaArrowRight, FaInstagram, FaYoutube, FaPlay 
} from 'react-icons/fa';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplyForm from "@/components/ApplyForm";

export default function InfluencerMarketingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const stats = [
    { label: "Active Creators", value: "50+" },
    { label: "Total Reach", value: "1M+" },
    { label: "Campaigns Done", value: "200+" },
    { label: "Avg. Engagement", value: "8.5%" },
  ];

  const services = [
    {
      title: "Strategic Matchmaking",
      desc: "We don't just pick names; we find the face that aligns with your brand's DNA and target audience in Amravati.",
      icon: <FaUsers className="text-purple-600" />,
    },
    {
      title: "Viral Storytelling",
      desc: "Our scripts focus on high retention and local relatability, ensuring your message isn't just seen, but remembered.",
      icon: <FaBullhorn className="text-pink-600" />,
    },
    {
      title: "Data-Driven ROI",
      desc: "Detailed reports on impressions, clicks, and store walk-ins. We turn 'views' into measurable business growth.",
      icon: <FaChartBar className="text-blue-600" />,
    }
  ];

    function setIsExternalFormOpen(arg0: boolean): void {
        throw new Error('Function not implemented.');
    }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50 to-transparent -z-10 opacity-70"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-xs font-bold uppercase tracking-widest mb-6">
              <FaRocket /> Amravati's #1 Creator Network
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tighter">
              Turn Local Creators Into Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Sales Force.</span>
            </h1>
            <p className="text-gray-500 text-xl mb-10 leading-relaxed max-w-xl">
              Stop wasting money on ads that get scrolled past. Leverage the trust of Amravati's most influential voices to grow your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
                className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all flex items-center gap-3 shadow-xl"
              >
                Hire Creators <FaArrowRight />
              </button>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="px-8 py-4 border-2 border-gray-200 text-gray-900 font-bold rounded-2xl hover:border-purple-600 hover:text-purple-600 transition-all"
              >
                Join as Creator
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Floating Element Mockups */}
              <div className="absolute top-10 -left-10 bg-white p-4 rounded-3xl shadow-2xl z-20 animate-bounce transition-all">
                <FaInstagram className="text-pink-500 text-3xl" />
              </div>
              <div className="absolute bottom-20 -right-5 bg-white p-4 rounded-3xl shadow-2xl z-20 animate-pulse">
                <FaYoutube className="text-red-500 text-3xl" />
              </div>
              {/* Central Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-[3rem] overflow-hidden rotate-3 shadow-2xl relative">
                 <Image 
                  src="/influencer-hero.jpg" // Add your image here
                  alt="Amravati Influencers"
                  fill
                  className="object-cover -rotate-3 scale-110"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-5xl font-black text-purple-600 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (FOR BUSINESSES) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter">Everything Managed For You</h2>
          <p className="text-gray-500 text-lg">We bridge the gap between your brand and the city's talent.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-purple-50 transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE FUNNEL VISUALIZATION --- */}
      <section className="py-20 bg-purple-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 italic">The Influencer Funnel</h2>
            <p className="text-purple-200 text-lg mb-8">
              We guide the audience through a proven journey from seeing a familiar face to walking through your shop doors.
            </p>
            <ul className="space-y-4">
              {["1. Awareness via viral Reel content", "2. Trust building through local personality", "3. Desire via exclusive store offers", "4. Direct Conversion & Footfall"].map((step, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-semibold">
                  <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm">{i+1}</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
             
          </div>
        </div>
      </section>

      {/* --- DUAL CTA SECTION --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-[3.5rem] p-10 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Ready to make some noise?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="tel:8956727311" className="px-10 py-5 bg-white text-purple-600 font-black rounded-2xl hover:bg-gray-100 transition-all flex items-center justify-center gap-3">
              Book a Strategy Call
            </Link>
            <button 
              onClick={() => setIsExternalFormOpen(true)}
              className="px-10 py-5 bg-purple-900/40 backdrop-blur-md border border-white/30 text-white font-black rounded-2xl hover:bg-purple-900 transition-all flex items-center justify-center gap-3"
            >
              Apply as Influencer
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Reusing your high-end form */}
      <ApplyForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </main>
  );
}