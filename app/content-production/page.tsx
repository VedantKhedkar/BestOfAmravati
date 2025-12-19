'use client';

import React, { useState } from 'react'; 
import Image from 'next/image'; 
import toast, { Toaster } from 'react-hot-toast'; // <--- 1. Imported Toast
import { 
  FaPlay, FaFingerprint, FaArrowRight, FaYoutube, FaInstagram, FaFacebook, 
  FaCheckCircle, FaStar, FaTimes, FaUser, FaPhoneAlt, FaEnvelope, FaLock 
} from 'react-icons/fa';
import { 
  Clapperboard, Lightbulb, Rocket, Zap, Target, ShieldCheck, Microscope, MonitorPlay, BarChart3
} from 'lucide-react';

import ProductionNavbar from '@/components/ProductionNavbar'; 
import Footer from '@/components/Footer';

export default function ContentProductionPage() {
  
  // --- STATE FOR MODAL & FORM ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- 2. UPDATED SUBMIT LOGIC WITH TOASTER ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show Loading Toast
    const loadingId = toast.loading('Processing Secure Payment...');

    // Simulate Network Delay (2 seconds)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Dismiss Loading & Show Success
    toast.dismiss(loadingId);
    toast.success(`Payment Successful! Receipt sent to ${formData.email}`, {
      duration: 5000,
      style: {
        border: '1px solid #4ade80',
        padding: '16px',
        color: '#1f2937',
      },
      iconTheme: {
        primary: '#4ade80',
        secondary: '#FFFAEE',
      },
    });

    setIsModalOpen(false);
    setFormData({ name: '', phone: '', email: '' }); // Reset form
  };

  const productionDetails = [
    { 
      step: "01",
      title: "The Hook (Scripting)", 
      desc: "We engineer the first 3 seconds using psychological triggers and visual pattern interrupts. We don't just write scripts; we design 'retention traps' that stop the scroll instantly.",
      icon: <Lightbulb size={28} />, 
      color: "text-yellow-600", 
      bg: "bg-yellow-100" 
    },
    { 
      step: "02",
      title: "The Shoot (Production)", 
      desc: "Cinematic 4K capture using professional gimbals and lighting kits. We direct your body language, tone, and pacing to ensure you look authoritative and confident on camera.",
      icon: <Clapperboard size={28} />, 
      color: "text-pink-600", 
      bg: "bg-pink-100" 
    },
    { 
      step: "03",
      title: "The Edit (Post-Production)", 
      desc: "This is where retention is guaranteed. We use fast-paced cuts, trending audio synchronization, dynamic B-roll, and motion graphics to keep the viewer glued until the very last second.",
      icon: <MonitorPlay size={28} />, 
      color: "text-purple-600", 
      bg: "bg-purple-100" 
    },
    { 
      step: "04",
      title: "The Launch (Distribution)", 
      desc: "We don't just upload. We deploy your content with SEO-optimized captions, niche-specific hashtags, and strategic timing to maximize organic reach beyond your current followers.",
      icon: <Rocket size={28} />, 
      color: "text-cyan-600", 
      bg: "bg-cyan-100" 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden font-sans selection:bg-purple-100 selection:text-purple-900 relative text-gray-900">
      
      <ProductionNavbar />

      {/* --- ANIMATED BACKGROUND --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        
        {/* Animated GIF Backgrounds */}
        <div className="absolute top-6 md:top-96 md:-right-[30rem] lg:-right-96 lg:top-6 opacity-10 animate-float-slow">
          <div className="w-[58rem] h-[120rem] md:w-[60rem] md:h-[80rem] lg:w-[44rem] lg:h-[72rem] relative">
            <Image 
              src="/bestofamravati.gif" 
              alt="Background Animation" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        <div className="absolute -left-24 md:-left-2/3 md:bottom-40 lg:-left-96 lg:bottom-6 opacity-10 animate-float-slow animation-delay-1000">
          <div className="sm:w-44 sm:h-80 md:w-[60rem] md:h-[110rem] lg:w-[44rem] lg:h-[72rem] relative">
            <Image 
              src="/bestofamravati.gif" 
              alt="Background Animation" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      {/* -------------------------------------------------- */}

      <div className="relative z-10 flex flex-col gap-16 md:gap-24 pb-20">

        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex items-center justify-center pt-24 lg:pt-0 px-4 lg:px-8 relative overflow-hidden">
  
          <div className="container mx-auto max-w-7xl h-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 h-full">
              
              {/* Text Content */}
              <div className="lg:w-[45%] text-center lg:text-left animate-fade-up z-20">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
                  <FaFingerprint className="text-pink-500 animate-pulse text-xs" />
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-900">Architects of Short-Form</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight text-gray-900">
                  Dominate The <br />
                  <span className="relative whitespace-nowrap">
                    <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent"> Endless Feed.</span>
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                  One plan. One price. Infinite impact. We turn your brand into a viral engine with our complete production workflow.
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-base text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                    <Rocket className="w-5 h-5" /> 
                    <span>Start Production</span>
                  </button>
                </div>
              </div>

              {/* Right Hero Visual */}
              <div className="w-full lg:w-[55%] relative animate-fade-up animation-delay-200 flex justify-center lg:justify-end mt-12 lg:mt-0 z-10">
                <div className="relative w-full max-w-md h-[400px] flex justify-center items-center lg:scale-110 xl:scale-125 origin-center lg:origin-right transition-transform duration-500">
                  
                  {/* Screen 1: YouTube */}
                  <div className="absolute left-0 top-10 w-40 h-72 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl border-[3px] border-red-600 shadow-xl transform -rotate-12 translate-y-4 z-10 overflow-hidden group hover:z-40 hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <FaYoutube className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-white drop-shadow-md opacity-90" />
                    <div className="absolute bottom-4 left-0 right-0 text-center text-white text-xs font-bold tracking-wider">Shorts</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Screen 2: Facebook */}
                  <div className="absolute right-0 top-10 w-40 h-72 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl border-[3px] border-blue-600 shadow-xl transform rotate-12 translate-y-4 z-10 overflow-hidden group hover:z-40 hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <FaFacebook className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-white drop-shadow-md opacity-90" />
                    <div className="absolute bottom-4 left-0 right-0 text-center text-white text-xs font-bold tracking-wider">Reels</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Screen 3: Instagram */}
                  <div className="relative z-30 w-48 h-80 bg-gradient-to-bl from-purple-600 via-pink-500 to-yellow-500 rounded-[2.5rem] border-[5px] border-pink-500/80 shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                    <video 
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-90" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    >
                      <source src="https://assets.mixkit.co/videos/preview/mixkit-recording-a-travel-vlog-with-a-mobile-phone-3444-large.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none"></div>
                    <FaInstagram className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white drop-shadow-lg opacity-90 animate-pulse-slow" />
                    
                    <div className="absolute bottom-4 left-0 right-0 text-center text-pink-100 text-xs font-bold tracking-wider z-20">Reels</div>

                    <div className="absolute bottom-6 right-4 flex flex-col gap-3 items-center">
                        <div className="w-8 h-8 bg-white/30 rounded-full backdrop-blur-md flex items-center justify-center border border-white/50">
                          <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                        </div>
                        <div className="w-8 h-8 bg-white/30 rounded-full backdrop-blur-md border border-white/50"></div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* --- WHY THIS MATTERS (Benefits) --- */}
        <section id="benefits" className="w-full py-24 lg:py-32 relative">
          
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50 -skew-y-2 transform origin-top-left scale-110 z-0"></div>

          <div className="container mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left Column */}
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 leading-tight">
                  Why Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Production Suite</span> Works?
                </h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  Most businesses struggle because they post randomly. Our process isn't just "making videos"—it's a systematic approach to growth tailored for Amravati's audience.
                </p>
                
                <div className="space-y-8">
                   <div className="flex gap-5 group">
                     <div className="mt-1 bg-yellow-100 p-3.5 rounded-2xl h-fit group-hover:bg-yellow-200 transition-colors shadow-sm"><Zap className="text-yellow-600 w-6 h-6"/></div>
                     <div>
                       <h4 className="text-xl font-bold text-gray-900 mb-2">Algorithm Native</h4>
                       <p className="text-base text-gray-600">We edit specifically for retention (fast cuts, subtitles) that signals the algorithm to push your content.</p>
                     </div>
                   </div>
                   <div className="flex gap-5 group">
                     <div className="mt-1 bg-pink-100 p-3.5 rounded-2xl h-fit group-hover:bg-pink-200 transition-colors shadow-sm"><Target className="text-pink-600 w-6 h-6"/></div>
                     <div>
                       <h4 className="text-xl font-bold text-gray-900 mb-2">Hyper-Local Relevance</h4>
                       <p className="text-base text-gray-600">We use Amravati-specific references and trends to build a loyal local community instantly.</p>
                     </div>
                   </div>
                   <div className="flex gap-5 group">
                     <div className="mt-1 bg-cyan-100 p-3.5 rounded-2xl h-fit group-hover:bg-cyan-200 transition-colors shadow-sm"><ShieldCheck className="text-cyan-600 w-6 h-6"/></div>
                     <div>
                       <h4 className="text-xl font-bold text-gray-900 mb-2">Done-For-You Peace</h4>
                       <p className="text-base text-gray-600">You focus on your business. We handle the lights, camera, and action.</p>
                     </div>
                   </div>
                </div>
              </div>
              
              {/* Right Column - Large Visual (Expanded Content) */}
              <div className="relative order-1 lg:order-2 h-full flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-[3rem] blur-3xl opacity-40 animate-pulse-slow"></div>
                 
                 <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2.5rem] p-8 lg:p-10 relative shadow-2xl w-full transform hover:scale-[1.02] transition-transform duration-500">
                    
                    {/* Header */}
                    <div className="flex items-center gap-5 mb-8 border-b border-gray-100 pb-6">
                       <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-3xl text-white shadow-lg">🚀</div>
                       <div>
                         <div className="font-bold text-2xl text-gray-800">Growth Trajectory</div>
                         <div className="text-sm font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full inline-block mt-1">+450% Reach in 30 Days</div>
                       </div>
                    </div>
                    
                    {/* Metrics Bars */}
                    <div className="space-y-5 mb-8">
                       {/* Metric 1 */}
                       <div>
                          <div className="flex justify-between text-sm font-bold text-gray-600 mb-2"><span>👁️ Monthly Views</span> <span>45.2K</span></div>
                          <div className="h-3 bg-gray-100 rounded-full w-full overflow-hidden shadow-inner"><div className="h-full bg-purple-500 w-[85%] rounded-full animate-width-grow"></div></div>
                       </div>
                       {/* Metric 2 */}
                       <div>
                          <div className="flex justify-between text-sm font-bold text-gray-600 mb-2"><span>🔥 Engagement Rate</span> <span>12.4%</span></div>
                          <div className="h-3 bg-gray-100 rounded-full w-full overflow-hidden shadow-inner"><div className="h-full bg-pink-500 w-[65%] rounded-full animate-width-grow" style={{animationDelay: '150ms'}}></div></div>
                       </div>
                       {/* Metric 3 */}
                       <div>
                          <div className="flex justify-between text-sm font-bold text-gray-600 mb-2"><span>👥 New Followers</span> <span>+850</span></div>
                          <div className="h-3 bg-gray-100 rounded-full w-full overflow-hidden shadow-inner"><div className="h-full bg-blue-500 w-[75%] rounded-full animate-width-grow" style={{animationDelay: '300ms'}}></div></div>
                       </div>
                       {/* Metric 4 */}
                       <div>
                          <div className="flex justify-between text-sm font-bold text-gray-600 mb-2"><span>🚀 Shares & Saves</span> <span>1.2K</span></div>
                          <div className="h-3 bg-gray-100 rounded-full w-full overflow-hidden shadow-inner"><div className="h-full bg-orange-500 w-[50%] rounded-full animate-width-grow" style={{animationDelay: '450ms'}}></div></div>
                       </div>
                    </div>
                    
                    {/* Trend Graph Simulation */}
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">
                       <div className="flex justify-between items-end h-16 gap-2 px-2">
                          {[30, 45, 35, 60, 50, 75, 65, 90, 100].map((h, i) => (
                             <div key={i} className="w-full bg-purple-200 hover:bg-purple-400 transition-colors rounded-t-sm" style={{height: `${h}%`}}></div>
                          ))}
                       </div>
                       <div className="text-center mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">30 Day Trend Analysis</div>
                    </div>
                    
                    <p className="mt-6 text-xs text-center text-gray-400 italic font-medium">"Consistently creates the highest ROI for local brands."</p>
                 </div>
              </div>
            </div>
          </div>
        </section>


        {/* --- PRICING PLAN --- */}
        <section id="pricing" className="px-4 py-10 relative">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">One Plan. <span className="text-pink-600">Total Domination.</span></h2>
            </div>

            <div className="relative group rounded-[2.5rem] p-[3px] bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg z-30 flex items-center gap-2">
                <FaStar className="text-yellow-300" /> Best Seller
              </div>
              
              <div className="bg-white rounded-[2.3rem] p-8 md:p-12 flex flex-col items-center relative overflow-hidden">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 text-center">Production Suite</h3>
                <p className="text-pink-600 font-bold tracking-wide uppercase text-sm mb-8">All-Inclusive Content Package</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl md:text-7xl font-bold text-gray-900">₹3,500</span>
                  <span className="text-gray-500 font-medium">/reel</span>
                </div>

                <div className="w-full h-px bg-gray-100 mb-8"></div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 w-full mb-10">
                  {[
                    "Conceptualization & Scripting",
                    "Professional 4K Shooting",
                    "Advanced Viral Editing",
                    "Trending Audio Selection",
                    "Thumbnail Design",
                    "Strategic Hashtag Research",
                    "2 Revisions Included",
                    "Raw Footage Access"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <FaCheckCircle className="text-green-500 shrink-0 text-lg" /> 
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* MODAL TRIGGER BUTTON */}
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full md:w-auto px-12 py-4 rounded-full font-bold text-lg bg-gray-900 text-white hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center gap-3 group/btn"
                >
                  <span className="relative z-10">Book This Slot</span>
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform"/>
                </button>
                
                <p className="mt-6 text-gray-400 text-xs uppercase tracking-widest">Limited slots available per month</p>
              </div>
            </div>
          </div>
        </section>


        {/* --- INTEL & INSIGHTS --- */}
        <section id="blueprint" className="px-4">
          <div className="container mx-auto max-w-5xl border-t border-gray-200 pt-16">
            
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-900 mb-2">Intel & Insights</h2>
               <p className="text-gray-500">The Blueprint Declassified</p>
            </div>

            {/* The BIG CARD */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-purple-50 to-pink-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

               <div className="p-8 md:p-16 relative z-10">
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                      
                      <div className="lg:w-1/3">
                         <div className="w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <Microscope size={32} />
                         </div>
                         <h3 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                            The Production <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Lifecycle</span>
                         </h3>
                         <p className="text-gray-600 mb-8 leading-relaxed">
                            We treat every video like a mini-movie. Here is exactly what happens from the moment you book, ensuring every second of footage serves a purpose.
                         </p>
                         
                         <div className="hidden lg:block p-6 bg-gray-50 rounded-3xl border border-gray-100">
                            <div className="flex items-center gap-3 mb-2 font-bold text-gray-900">
                               <BarChart3 className="text-green-500"/>
                               The Result
                            </div>
                            <p className="text-sm text-gray-500">
                               This rigid process is why our client reels average 40% higher retention than DIY phone videos.
                            </p>
                         </div>
                      </div>

                      <div className="lg:w-2/3 space-y-8">
                         {productionDetails.map((item, idx) => (
                            <div key={idx} className="flex gap-6 group">
                               <div className="flex flex-col items-center gap-2">
                                  <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                     {item.icon}
                                  </div>
                                  {idx !== productionDetails.length - 1 && (
                                     <div className="w-0.5 h-full bg-gray-100 group-hover:bg-gray-200 transition-colors"></div>
                                  )}
                               </div>

                               <div className="pb-8">
                                  <div className="flex items-center gap-3 mb-2">
                                     <span className="text-xs font-extrabold text-gray-300 tracking-wider">0{idx + 1}</span>
                                     <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                                  </div>
                                  <p className="text-gray-600 text-sm leading-relaxed">
                                     {item.desc}
                                  </p>
                               </div>
                            </div>
                         ))}
                      </div>
                  </div>
               </div>
            </div>

          </div>
        </section>

        {/* --- HAPPY CUSTOMERS --- */}
        <section id="testimonials" className="px-4 pb-24 lg:pb-32 relative overflow-hidden">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

          <div className="container mx-auto max-w-7xl">
            
            <div className="text-center mb-16 animate-fade-up">
               <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-100 px-4 py-1.5 rounded-full mb-4">
                  <FaStar className="text-yellow-500 w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-yellow-800">Wall of Love</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                 Amravati's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Favorite</span> Creators
               </h2>
               <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                 Don't just take our word for it. Here is what local business owners are saying about our production services.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: "The Beanery Cafe",
                  handle: "@thebeanery_amt",
                  image: "/beanery-logo.png", 
                  color: "bg-orange-100 text-orange-600",
                  quote: "We used to get 200 views. After the monsoon reel, we hit 15k views in 2 days. The cinematic shots made our coffee look irresistible!",
                  stat: "15k+ Views",
                  platform: <FaInstagram />
                },
                {
                  name: "Style Studio",
                  handle: "@stylestudio_official",
                  image: "/style-logo.png",
                  color: "bg-pink-100 text-pink-600",
                  quote: "The transitions were so smooth! We got more DM inquiries for the Navratri collection in one week than we usually get in a month.",
                  stat: "100+ Leads",
                  platform: <FaInstagram />
                },
                {
                  name: "TechSquare Gadgets",
                  handle: "@techsquare_hub",
                  image: "/tech-logo.png",
                  color: "bg-blue-100 text-blue-600",
                  quote: "Professionalism at its peak. They scripted the whole unboxing video, and the pacing was perfect for retention. Highly recommended!",
                  stat: "Viral Hit",
                  platform: <FaYoutube />
                }
              ].map((client, idx) => (
                <div key={idx} className="group relative h-full">
                   <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-purple-900/10"></div>
                   
                   <div className="relative p-8 flex flex-col h-full z-10">
                      
                      <div className="flex items-center gap-4 mb-6">
                         <div className={`w-12 h-12 rounded-full ${client.color} flex items-center justify-center font-bold text-xl shadow-inner`}>
                            {client.name[0]}
                         </div>
                         <div>
                            <h4 className="font-bold text-gray-900 leading-tight">{client.name}</h4>
                            <span className="text-xs text-gray-400 font-medium">{client.handle}</span>
                         </div>
                         <div className="ml-auto text-gray-300">
                            {client.platform}
                         </div>
                      </div>

                      <div className="flex gap-1 mb-4 text-yellow-400 text-sm">
                         {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-8 flex-grow italic relative">
                         <span className="text-4xl text-purple-100 absolute -top-4 -left-2 -z-10 font-serif">“</span>
                         {client.quote}
                      </p>

                      <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                         <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Result</span>
                         <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 ${client.color.replace('text-', 'bg-').replace('bg-', 'bg-opacity-20 text-')}`}>
                            <FaCheckCircle className="text-sm" />
                            {client.stat}
                         </div>
                      </div>

                   </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>

      {/* --- POP-UP MODAL (BOOKING FORM) --- */}
     {/* --- POP-UP MODAL (BOOKING FORM) --- */}
{isModalOpen && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in">
    
    {/* Backdrop */}
    <div 
      className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
      onClick={() => setIsModalOpen(false)}
    ></div>

    {/* Modal Content */}
    <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all animate-fade-up border border-white/20">
      
      {/* Modal Header */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-8 pb-10 text-white text-center">
         <button 
           onClick={() => setIsModalOpen(false)} 
           className="absolute top-6 right-6 text-white/70 hover:text-white hover:rotate-90 transition-all p-2 bg-white/10 rounded-full"
         >
           <FaTimes size={18} />
         </button>
         <h3 className="text-2xl font-bold mb-1">Secure Your Spot</h3>
         <p className="text-purple-100 text-sm">Fill in details to proceed to payment</p>
         
         {/* Floating Price Tag */}
         <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-2 rounded-full font-extrabold shadow-lg border-4 border-purple-50 text-lg flex items-center gap-1">
           ₹3,500 <span className="text-xs font-normal text-gray-400 uppercase">/ Total</span>
         </div>
      </div>

      {/* Modal Body (Form) */}
      <div className="pt-12 pb-8 px-8">
         <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Business Name Input (NEW) */}
            <div className="group">
              <label className="text-xs font-bold text-gray-500 uppercase ml-3 mb-1 block">Business Name</label>
              <div className="relative flex items-center">
                <FaStar className="absolute left-4 text-purple-400" /> {/* Using FaStar or any icon */}
                <input 
                  type="text" 
                  name="businessName" 
                  required 
                  placeholder="Your Brand / Shop Name"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-100 focus:bg-white focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all font-semibold text-gray-700"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Name Input */}
            <div className="group">
              <label className="text-xs font-bold text-gray-500 uppercase ml-3 mb-1 block">Full Name</label>
              <div className="relative flex items-center">
                <FaUser className="absolute left-4 text-purple-400" />
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-100 focus:bg-white focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all font-semibold text-gray-700"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="group">
              <label className="text-xs font-bold text-gray-500 uppercase ml-3 mb-1 block">Phone Number</label>
              <div className="relative flex items-center">
                <FaPhoneAlt className="absolute left-4 text-purple-400" />
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  placeholder="+91 98765 43210"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-100 focus:bg-white focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all font-semibold text-gray-700"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="group">
              <label className="text-xs font-bold text-gray-500 uppercase ml-3 mb-1 block">Business Email</label>
              <div className="relative flex items-center">
                <FaEnvelope className="absolute left-4 text-purple-400" />
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="business@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-100 focus:bg-white focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all font-semibold text-gray-700"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Pay ₹3,500 & Submit</span>
              <FaArrowRight className="text-yellow-400" />
            </button>

            <div className="text-center">
              <p className="text-[10px] text-gray-400 font-medium flex items-center justify-center gap-1">
                <FaLock className="text-green-500" /> 256-bit SSL Secure Payment
              </p>
            </div>

         </form>
      </div>

    </div>
  </div>
)}
         
       
      

      <Toaster position="top-center" /> 
      <Footer />
    </div>
  );
}