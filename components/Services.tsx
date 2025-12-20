'use client';

import React from 'react';
import Image from 'next/image'; // <--- Added import
import { FaGem, FaArrowRight } from 'react-icons/fa';

export default function Services() {
  
  const services = [
    { 
      title: "Discover", 
      subtitle: "Ready To", 
      description: "Uncover hidden gems and showcase excellence through our curated features",
      icon: "🔍"
    },
    { 
      title: "Explore", 
      subtitle: "Ready To", 
      description: "Dive into innovative marketing strategies designed for local businesses",
      icon: "🚀",
      featured: true
    },
    { 
      title: "Celebrate", 
      subtitle: "Ready To", 
      description: "Join the community celebrating local success stories and achievements",
      icon: "🎉"
    },
    
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
      
      {/* --- ANIMATED BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
          
    
          {/* Floating Blobs */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-yellow-300/20 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>

          {/* Animated GIF 1 (Top Right) */}
          <div className="absolute top-0 right-0 md:-right-20 opacity-20 animate-float-slow mix-blend-overlay">
             <div className="w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] relative">
               <Image 
                 src="/bestofamravati.gif" 
                 alt="Background Animation" 
                 fill
                 className="object-contain"
               />
             </div>
          </div>

          {/* Animated GIF 2 (Bottom Left) */}
          <div className="absolute bottom-0 left-0 md:-left-20 opacity-20 animate-float-slow animation-delay-1000 mix-blend-overlay">
             <div className="w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] relative">
               <Image 
                 src="/bestofamravati.gif" 
                 alt="Background Animation" 
                 fill
                 className="object-contain"
               />
             </div>
          </div>
      </div>
      {/* ----------------------------------- */}

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/10">
            <FaGem className="text-yellow-300" />
            <span className="text-white font-semibold shadow-black drop-shadow-sm">Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Ready To Transform Our City.</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">Discover, explore, and celebrate success with us</p>
        </div>

        {/* --- CARDS CONTAINER --- */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            
          {services.map((card, index) => (
            <div 
              key={index}
              className="w-full max-w-[380px] flex-shrink-0" 
            >
              {/* Glassmorphism Card */}
              <div className="h-full flex flex-col bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] shadow-xl cursor-pointer group">
                <div className="text-5xl mb-4 drop-shadow-md transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">{card.icon}</div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                  {card.subtitle}
                </h3>
                
                <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-5 tracking-tight drop-shadow-sm">
                  {card.title}
                </h2>
                
                <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 line-clamp-3 font-medium">
                  {card.description}
                </p>

                <button className="mt-auto w-full bg-white/20 hover:bg-white/30 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-yellow-500/20 group/btn">
                  Learn More
                  <FaArrowRight className="transform transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}