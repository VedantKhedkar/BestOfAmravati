"use client";

import Image from "next/image";
import { 
  FaStar, 
  FaInstagram, 
  FaFacebook, 
  FaYoutube, 
  FaChartLine, 
  FaArrowRight, 
  FaCrown, 
  FaVideo, 
  FaUsers, 
  FaRocket, 
  FaCheckCircle 
} from 'react-icons/fa';

export default function SuccessStories() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden">
      
      {/* --- ANIMATED BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Base Textures */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

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
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full mb-4 shadow-lg">
            <FaStar className="text-yellow-300" />
            <span className="text-sm font-bold text-white uppercase tracking-wider drop-shadow-sm">Client Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
            Real Stories, <span className="text-yellow-300">Real Growth</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto font-medium">
            See how we skyrocketed local businesses with our multi-platform viral reels strategies.
          </p>
        </div>

        {/* Success Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              business: "The Beanery Cafe",
              category: "Food & Beverage",
              logo: "/beanery-logo.png", // Replace with actual logo
              reach: "150k+",
              growth: "300%",
              desc: "Cinematic monsoon menu reel that went viral locally.",
              quote: "Best investment for our cafe!",
              badge: "Viral Hit"
            },
            {
              business: "Style Studio",
              category: "Fashion Boutique",
              logo: "/style-logo.png", // Replace with actual logo
              reach: "100k+",
              growth: "Fast",
              desc: "Festive collection transition reel led to massive DM inquiries.",
              quote: "Organic reach to target audience.",
              badge: "High Conversion"
            },
            {
              business: "TechSquare",
              category: "Electronics",
              logo: "/tech-logo.png", // Replace with actual logo
              reach: "500+",
              growth: "Leads",
              desc: "Storytelling reel for Diwali exchange offer drove record footfall.",
              quote: "Professional editing delivered.",
              badge: "Lead Gen"
            }
          ].map((story, index) => (
            <div 
              key={index} 
              className="group relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-300 hover:-translate-y-2 animate-fade-up flex flex-col"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8 flex-1 flex flex-col">
                {/* Header: Logo & Name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 relative rounded-full border-2 border-purple-100 shadow-sm overflow-hidden flex-shrink-0 bg-gray-50">
                    <Image 
                      src={story.logo} 
                      alt={`${story.business} Logo`}
                      fill
                      className="object-cover"
                      // Fallback logic
                      onError={(event) => {
                        const target = event.target as HTMLImageElement;
                        target.style.display = 'none'; // Hide the broken image
                        target.parentElement?.classList.add('bg-gradient-to-br', 'from-purple-400', 'to-pink-400'); // Add gradient to parent
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl pointer-events-none">
                      {story.business[0]}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-purple-600 transition-colors">
                      {story.business}
                    </h3>
                    <p className="text-sm text-gray-500">{story.category}</p>
                  </div>
                </div>

                {/* Platforms Row */}
                <div className="mb-6 bg-gray-50 rounded-xl p-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Promoted On</span>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-pink-600 hover:scale-110 transition-transform" title="Instagram Reel">
                      <FaInstagram />
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600 hover:scale-110 transition-transform" title="Facebook Video">
                      <FaFacebook />
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-red-600 hover:scale-110 transition-transform" title="YouTube Short">
                      <FaYoutube />
                    </div>
                  </div>
                </div>

                {/* Stats Box */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-3 text-center border border-purple-100">
                    <div className="text-2xl font-bold text-gray-900">{story.reach}</div>
                    <div className="text-[10px] md:text-xs text-purple-600 font-bold uppercase flex items-center justify-center gap-1">
                      <FaChartLine /> Total Reach
                    </div>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-3 text-center shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">{story.growth}</div>
                    <div className="text-[10px] md:text-xs text-green-600 font-bold uppercase flex items-center justify-center gap-1">
                      <FaArrowRight className="-rotate-45" /> Impact
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm flex-1 leading-relaxed">
                  "{story.desc}"
                </p>

                {/* Badge & Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full flex items-center gap-1">
                      <FaCrown className="text-yellow-600" /> {story.badge}
                    </span>
                    <div className="text-xs text-gray-400 italic">Verified Client</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Summary */}
        <div className="mt-20 bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-up animation-delay-600">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
             <div className="flex flex-col items-center px-4">
               <FaVideo className="text-4xl text-pink-500 mb-3" />
               <div className="text-3xl font-bold text-gray-900">500+</div>
               <div className="text-gray-500 text-sm font-medium">Reels Produced</div>
             </div>
             <div className="flex flex-col items-center px-4">
               <FaUsers className="text-4xl text-purple-600 mb-3" />
               <div className="text-3xl font-bold text-gray-900">10M+</div>
               <div className="text-gray-500 text-sm font-medium">Total Audience</div>
             </div>
             <div className="flex flex-col items-center px-4">
               <FaRocket className="text-4xl text-orange-400 mb-3" />
               <div className="text-3xl font-bold text-gray-900">200+</div>
               <div className="text-gray-500 text-sm font-medium">Brand Collaborations</div>
             </div>
             <div className="flex flex-col items-center px-4">
               <FaCheckCircle className="text-4xl text-green-500 mb-3" />
               <div className="text-3xl font-bold text-gray-900">100%</div>
               <div className="text-gray-500 text-sm font-medium">Delivery Rate</div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}