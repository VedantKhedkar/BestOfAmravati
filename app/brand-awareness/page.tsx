"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaArrowRight, 
  FaPlay, 
  FaInstagram, 
  FaQuoteRight,
  FaStar,
  FaPlus,
  FaMinus,
  FaTimes,
  FaCheckCircle,
  FaBuilding,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaRocket
} from "react-icons/fa";
import { 
  Zap, 
  TrendingUp, 
  Target, 
  Fingerprint, 
  Sparkles, 
  Megaphone,
  Globe,
  BarChart3,
  Users,
  CheckCircle2
} from "lucide-react";

// Imports
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function BrandAwarenessPage() {
  const brands = ['Urban Cafe', 'TechFlow', 'StyleStudio', 'FitLife Gym', 'Green Eat', 'Amravati Kart', 'Spice Route', 'Pixel Perfect'];

  // State
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls the Modal

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      <Head>
        <title>Brand Awareness | Best of Amravati</title>
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[#fffaf2] overflow-hidden relative selection:bg-purple-100 selection:text-purple-900">
        
        {/* --- GLOBAL BACKGROUND BLOBS --- */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
           <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-purple-100 shadow-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-gray-600 font-bold text-[10px] uppercase tracking-widest">
                Brand Awareness 
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6"
            >
              Make Them <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
                Remember You.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-gray-500 max-w-xl mx-auto font-medium leading-relaxed mb-10"
            >
              We craft visual identities and viral campaigns that turn Amravati's local businesses into household names without the noise.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative px-6 py-3 bg-gray-900 rounded-full text-white font-semibold text-sm md:text-base overflow-hidden shadow-lg shadow-purple-200/50 hover:shadow-purple-300/50 transition-all"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  Start Your Legacy <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs"/>
                </span>
              </button>
              <button className="px-6 py-3 rounded-full bg-white/80 text-gray-900 border border-gray-200 font-semibold text-sm md:text-base hover:bg-white transition-all flex items-center gap-2 backdrop-blur-sm">
                <FaPlay className="text-[10px]" /> Watch Showreel
              </button>
            </motion.div>
          </div>
        </section>

        {/* --- MARQUEE SECTION --- */}
        <section className="py-12 border-y border-gray-100/50 overflow-hidden relative z-10 backdrop-blur-[2px] mb-12">
          <p className="text-center text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Trusted by Amravati's Best</p>
          <div className="flex overflow-hidden space-x-8 group mask-linear-gradient">
            <div className="flex space-x-6 animate-marquee">
              {brands.map((brand, i) => (
                <div key={i} className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm flex items-center justify-center min-w-[160px] hover:border-purple-300 hover:shadow-purple-100 hover:scale-105 transition-all duration-300 cursor-default">
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wide whitespace-nowrap">{brand}</span>
                </div>
              ))}
            </div>
            <div className="flex space-x-6 animate-marquee" aria-hidden="true">
              {brands.map((brand, i) => (
                <div key={`dup-${i}`} className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm flex items-center justify-center min-w-[160px] hover:border-purple-300 hover:shadow-purple-100 hover:scale-105 transition-all duration-300 cursor-default">
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wide whitespace-nowrap">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- BENTO GRID (SEPARATED VISUALLY) --- */}
        <section className="relative z-20 py-24 my-12 mx-4 md:mx-8 bg-white rounded-[3rem] shadow-2xl shadow-purple-100/50 border border-white/50 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-50/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="mb-12 md:flex justify-between items-end">
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">The Growth <span className="text-purple-600">Matrix</span></h2>
                  <p className="text-gray-500 text-sm md:text-base mt-2 max-w-sm">Our multi-dimensional approach to dominating the local market.</p>
               </div>
               <div className="hidden md:block">
                  <Globe className="w-10 h-10 text-gray-200" strokeWidth={1.5} />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(160px,auto)]">
               <motion.div variants={fadeInUp} className="md:col-span-2 row-span-2 bg-gray-900 rounded-[2rem] p-8 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500 rounded-full mix-blend-overlay filter blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                 <div className="relative z-10 h-full flex flex-col justify-between">
                   <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-lg mb-4">
                     <Fingerprint className="text-purple-300" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold mb-3">Brand Identity</h3>
                     <p className="text-gray-400 text-sm leading-relaxed mb-4">We strip your brand down to its core and rebuild it with a visual language that screams premium.</p>
                     <div className="flex gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-white/10 text-[10px] font-medium tracking-wide">Logo</span>
                        <span className="px-2.5 py-1 rounded-md bg-white/10 text-[10px] font-medium tracking-wide">Packaging</span>
                     </div>
                   </div>
                 </div>
               </motion.div>
               {/* ... (Other bento items remain same) ... */}
               <motion.div variants={fadeInUp} className="md:col-span-1 bg-gray-50 border border-gray-100 rounded-[2rem] p-6 flex flex-col justify-between hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                 <TrendingUp className="text-green-500 w-8 h-8 mb-2" />
                 <div>
                   <div className="text-3xl font-black text-gray-900">350%</div>
                   <div className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mt-1">Avg. Visibility Growth</div>
                 </div>
               </motion.div>
               <motion.div variants={fadeInUp} className="md:col-span-1 bg-gradient-to-br from-pink-500 to-orange-500 rounded-[2rem] p-6 text-white flex flex-col justify-between relative overflow-hidden group">
                 <FaInstagram className="text-3xl text-white/80 group-hover:scale-110 transition-transform" />
                 <div className="relative z-10 mt-4">
                   <h3 className="text-lg font-bold">Viral Content</h3>
                   <p className="text-white/80 text-xs mt-1">Reels & Posts that stop the scroll.</p>
                 </div>
               </motion.div>
               <motion.div variants={fadeInUp} className="md:col-span-1 bg-gray-50 border border-gray-100 rounded-[2rem] p-6 hover:bg-white transition-colors">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-3">
                    <Megaphone size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">PR & Buzz</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">Getting you featured in local conversations.</p>
               </motion.div>
               <motion.div variants={fadeInUp} className="md:col-span-1 bg-purple-50 rounded-[2rem] p-6 border border-purple-100 flex flex-col justify-center items-center text-center group">
                 <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="text-purple-600 w-6 h-6" />
                 </div>
                 <h3 className="text-base font-bold text-gray-900">The "Wow" Factor</h3>
               </motion.div>
            </div>
          </div>
        </section>

        {/* --- RIPPLE EFFECT --- */}
        <section className="py-20 relative z-10">
          <div className="max-w-5xl mx-auto px-6">
             <div className="text-center mb-16">
               <span className="text-pink-500 font-bold text-xs uppercase tracking-widest">Why it matters</span>
               <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">The Visibility <span className="text-purple-600">Ripple Effect</span></h2>
             </div>

             <div className="grid md:grid-cols-3 gap-10 text-center relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 z-0"></div>

                {[
                  { title: "Seen", desc: "Customers notice you first in a crowded market.", icon: <Users size={24}/> },
                  { title: "Trusted", desc: "Consistency creates familiarity and credibility.", icon: <CheckCircle2 size={24}/> },
                  { title: "Chosen", desc: "When they need a service, they think of you.", icon: <Zap size={24}/> },
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="relative z-10 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white"
                  >
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-50 to-pink-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg text-purple-600">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* --- PROCESS SECTION (SEPARATED VISUALLY) --- */}
        <section className="relative z-20 py-24 my-12 mx-4 md:mx-8 bg-white rounded-[3rem] shadow-2xl shadow-pink-100/50 border border-white/50 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-50/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">From Unknown to <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Unmissable</span></h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Audit", desc: "Analyze standing.", icon: <BarChart3 /> },
                  { step: "02", title: "Strategy", desc: "Build roadmap.", icon: <Target /> },
                  { step: "03", title: "Execute", desc: "Deploy content.", icon: <Zap /> },
                  { step: "04", title: "Scale", desc: "Dominate market.", icon: <TrendingUp /> },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="bg-gray-50/50 backdrop-blur-sm p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center text-center group transition-all duration-300 hover:bg-white hover:shadow-lg"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-900 mb-4 shadow-sm group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
                      {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" } as React.SVGProps<SVGSVGElement>)}
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">Step {item.step}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-xs font-medium">{item.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* --- SUCCESS STORIES --- */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden z-10">
           <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-overlay filter blur-[128px] opacity-20"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-overlay filter blur-[128px] opacity-20"></div>
           
           <div className="max-w-7xl mx-auto px-6 relative z-10">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold mb-4">Real Business. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Real Impact.</span></h2>
               <p className="text-gray-400">Don't just take our word for it.</p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
                >
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(i => <FaStar key={i} className="text-yellow-400 text-sm"/>)}
                  </div>
                  <FaQuoteRight className="text-4xl text-purple-500 mb-6 opacity-50" />
                  <p className="text-lg text-gray-200 font-medium leading-relaxed mb-8">
                    "Best of Amravati didn't just design our logo, they gave our business a soul. Our footfall increased by 40% in just two months."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center font-bold text-white">R</div>
                    <div>
                      <div className="font-bold">Rajesh Verma</div>
                      <div className="text-gray-400 text-xs">Owner, The Urban Spice</div>
                    </div>
                  </div>
                </motion.div>
                {/* ... (Other Reviews) ... */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
                >
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(i => <FaStar key={i} className="text-yellow-400 text-sm"/>)}
                  </div>
                  <FaQuoteRight className="text-4xl text-pink-500 mb-6 opacity-50" />
                  <p className="text-lg text-gray-200 font-medium leading-relaxed mb-8">
                    "We struggled with visibility for years. Their social media strategy put us on the map. Now, weekends are fully booked days in advance."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white">S</div>
                    <div>
                      <div className="font-bold">Sneha Patil</div>
                      <div className="text-gray-400 text-xs">Manager, Amravati Textiles</div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
                >
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(i => <FaStar key={i} className="text-yellow-400 text-sm"/>)}
                  </div>
                  <FaQuoteRight className="text-4xl text-purple-500 mb-6 opacity-50" />
                  <p className="text-lg text-gray-200 font-medium leading-relaxed mb-8">
                    "Professional, creative, and data-driven. They understood our brand voice perfectly and amplified it across all channels."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center font-bold text-white">A</div>
                    <div>
                      <div className="font-bold">Amit Deshmukh</div>
                      <div className="text-gray-400 text-xs">Founder, TechVision</div>
                    </div>
                  </div>
                </motion.div>
             </div>
           </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-24 bg-gray-50/50 backdrop-blur-sm relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-purple-600 font-bold text-xs uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full">
                Support
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-4">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Questions</span>
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* --- LEFT COLUMN --- */}
              <div className="w-full md:w-1/2 space-y-4">
                {[
                  { q: "How long until we see results?", a: "While brand identity work is immediate, awareness campaigns typically show significant traction within 30-60 days." },
                  { q: "Do you work with small businesses?", a: "Absolutely. We have tailored packages specifically for local Amravati startups and SMEs." },
                  { q: "Do you handle content creation?", a: "Yes! From photography to reels and copywriting, we handle the entire production pipeline in-house." },
                ].map((faq, index) => {
                  const realIndex = index;
                  return (
                    <FAQCard 
                      key={realIndex} 
                      faq={faq} 
                      isOpen={openFaq === realIndex} 
                      onClick={() => toggleFaq(realIndex)} 
                    />
                  );
                })}
              </div>

              {/* --- RIGHT COLUMN --- */}
              <div className="w-full md:w-1/2 space-y-4">
                {[
                  { q: "What makes you different?", a: "We are hyper-local. We understand the Amravati market, culture, and consumer behavior better than anyone else." },
                  { q: "Can we customize the packages?", a: "Yes, every business is unique. We start with a consultation to build a strategy that fits your specific goals and budget." },
                  { q: "How do we get started?", a: "Simply click the 'Book Consultation' button below. We'll schedule a quick call to audit your current presence and propose a roadmap." },
                ].map((faq, index) => {
                  const realIndex = index + 3;
                  return (
                    <FAQCard 
                      key={realIndex} 
                      faq={faq} 
                      isOpen={openFaq === realIndex} 
                      onClick={() => toggleFaq(realIndex)} 
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-20 px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-[2.5rem] p-[2px] shadow-2xl shadow-purple-200/50">
              <div className="bg-white rounded-[2.4rem] py-16 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-50 opacity-50 pointer-events-none"></div>
                <div className="relative z-10">
                   <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                     Ready to be seen?
                   </h2>
                   <p className="text-base md:text-lg text-gray-500 mb-8 max-w-lg mx-auto">
                     Stop hiding in the shadows. Let's build a brand that Amravati can't ignore.
                   </p>
                   <motion.button 
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     onClick={() => setIsModalOpen(true)}
                     className="px-8 py-4 bg-gray-900 text-white text-base font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                   >
                     Book Free Consultation
                   </motion.button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />

      {/* --- CONSULTATION MODAL --- */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* --- STYLES --- */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .mask-linear-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </>
  );
}

// --- HELPER COMPONENT: FAQ CARD ---
function FAQCard({ faq, isOpen, onClick }: { faq: { q: string, a: string }, isOpen: boolean, onClick: () => void }) {
  return (
    <motion.div 
      layout
      onClick={onClick}
      className={`group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden relative
        ${isOpen 
          ? "bg-white border-purple-200 shadow-xl shadow-purple-100/50" 
          : "bg-white border-gray-100 shadow-sm hover:border-purple-100 hover:shadow-md"
        }`}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className="p-6 flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>
            {faq.q}
          </h3>
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <p className="text-gray-500 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-purple-100 text-purple-600 rotate-45' : 'bg-gray-50 text-gray-400 group-hover:bg-purple-50 group-hover:text-purple-500'}`}>
          <FaPlus className="transition-transform duration-300" size={12} />
        </div>
      </div>
    </motion.div>
  );
}

// --- HELPER COMPONENT: CONSULTATION MODAL ---
function ConsultationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
    if(isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setIsSubmitted(true); }, 1500);
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[700px]"
      >
        <button onClick={onClose} className="absolute top-5 right-5 z-50 w-10 h-10 bg-white/10 hover:bg-black/5 backdrop-blur-md rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 transition-all"><FaTimes /></button>

        {/* Left Panel */}
        <div className="hidden md:flex w-[40%] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-10 flex-col justify-between relative overflow-hidden text-white">
           <div className="absolute top-[-20%] right-[-20%] w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
           <div className="relative z-10 mt-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-8">
                <FaRocket className="text-yellow-300" />
                <span className="font-bold text-xs uppercase tracking-widest">Let's Grow</span>
             </div>
             <h2 className="text-5xl font-black leading-tight mb-6">Scale Your <br/><span className="text-white/90">Brand.</span></h2>
             <p className="text-purple-100 text-lg font-medium">Ready to dominate the local market? Fill out the form and our strategists will build your roadmap.</p>
           </div>
           <div className="relative z-10">
              <div className="flex items-center gap-4 text-sm font-medium opacity-80"><div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div> Response time: 24 Hours</div>
           </div>
        </div>

        {/* Right Panel (Form) */}
        <div className="w-full md:w-[60%] bg-white flex flex-col relative">
          {isSubmitted ? (
            <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-sm ring-4 ring-green-50">
                <FaCheckCircle className="text-green-500 text-5xl animate-bounce" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-3">Request Received!</h3>
              <p className="text-gray-500 max-w-sm mx-auto mb-8 text-lg">We'll analyze your brand and contact you within 24 hours.</p>
              <button onClick={onClose} className="px-10 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:scale-105 transition-all">Close</button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12">
              <div className="mb-8"><h3 className="text-2xl font-bold text-gray-900">Project Details</h3><p className="text-gray-400 text-sm mt-1">Tell us about your business goals.</p></div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2"><label className="text-xs font-bold text-gray-500 uppercase ml-1">Your Name</label><div className="relative"><FaUser className="absolute top-4 left-4 text-gray-400"/><input required type="text" placeholder="John Doe" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 rounded-xl focus:bg-white focus:ring-2 focus:ring-purple-100 outline-none font-semibold text-gray-800"/></div></div>
                  <div className="space-y-2"><label className="text-xs font-bold text-gray-500 uppercase ml-1">Brand Name</label><div className="relative"><FaBuilding className="absolute top-4 left-4 text-gray-400"/><input required type="text" placeholder="Urban Spice" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 rounded-xl focus:bg-white focus:ring-2 focus:ring-purple-100 outline-none font-semibold text-gray-800"/></div></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2"><label className="text-xs font-bold text-gray-500 uppercase ml-1">Phone</label><div className="relative"><FaPhoneAlt className="absolute top-4 left-4 text-gray-400"/><input required type="tel" placeholder="+91..." className="w-full pl-11 pr-4 py-3.5 bg-gray-50 rounded-xl focus:bg-white focus:ring-2 focus:ring-purple-100 outline-none font-semibold text-gray-800"/></div></div>
                  <div className="space-y-2"><label className="text-xs font-bold text-gray-500 uppercase ml-1">Email</label><div className="relative"><FaEnvelope className="absolute top-4 left-4 text-gray-400"/><input required type="email" placeholder="hello@brand.com" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 rounded-xl focus:bg-white focus:ring-2 focus:ring-purple-100 outline-none font-semibold text-gray-800"/></div></div>
                </div>
                <div className="space-y-2"><label className="text-xs font-bold text-gray-500 uppercase ml-1">Primary Goal</label>
                  <select className="w-full px-4 py-3.5 bg-gray-50 rounded-xl focus:bg-white focus:ring-2 focus:ring-purple-100 outline-none font-semibold text-gray-800 appearance-none cursor-pointer">
                    <option>Increase Brand Awareness</option>
                    <option>Drive More Sales/Footfall</option>
                    <option>Rebrand / New Identity</option>
                    <option>Social Media Management</option>
                  </select>
                </div>
                <div className="pt-4"><button type="submit" disabled={loading} className="w-full bg-gray-900 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2">{loading ? "Processing..." : <>Book Consultation <FaArrowRight/></>}</button></div>
              </form>
            </div>
          )}
        </div>
      </motion.div>
    </div>,
    document.body
  );
}