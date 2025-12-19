import React from 'react';
import Image from 'next/image';
import { FaBullseye, FaRocket, FaAward, FaPercentage, FaFingerprint, FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      
      {/* --- ANIMATED BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Colorful Blobs */}
         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/50 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/50 rounded-full blur-3xl animate-pulse delay-1000"></div>

         {/* Animated GIF 1 */}
         <div className="absolute top-0 right-0 md:-right-20 opacity-10 animate-float-slow">
            <div className="w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] relative">
              <Image 
                src="/bestofamravati.gif" 
                alt="Background Animation" 
                fill
                className="object-contain"
              />
            </div>
         </div>

         {/* Animated GIF 2 */}
         <div className="absolute bottom-0 left-0 md:-left-20 opacity-10 animate-float-slow animation-delay-1000">
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="px-4 py-1.5 bg-purple-50 border border-purple-200 text-purple-600 rounded-full text-xs font-bold uppercase tracking-widest">
              Who We Are
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Empowering Amravati's Excellence
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            "A dedicated digital stage for Amravati, committed to uncovering hidden gems and turning local ventures into recognized brands."
          </p>
        </div>

        {/* --- MAIN GRID START --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-50 hover:shadow-purple-100 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-pink-500 p-4 rounded-2xl shadow-lg">
                  <FaBullseye className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our vision is to empower local brands with high-impact digital visibility through 
                    creative content and strategic distribution across all major social media platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-pink-50 hover:shadow-pink-100 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-pink-500 to-yellow-500 p-4 rounded-2xl shadow-lg">
                  <FaRocket className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To support local businesses and help them grow faster through professionally produced 
                    promotional reels and verified brand positioning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Card Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Card 1: Branding */}
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-3xl text-center text-white shadow-2xl transform hover:scale-105 transition-transform overflow-hidden group">
              <FaFingerprint className="absolute -top-6 -right-6 text-[8rem] text-white/10 group-hover:text-white/20 group-hover:rotate-12 transition-all duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-2">Branding</div>
                <div className="text-purple-100 text-sm font-medium uppercase tracking-wider">Brand Building</div>
              </div>
            </div>

            {/* Card 2: Excellence */}
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-3xl text-center text-white shadow-2xl transform hover:scale-105 transition-transform overflow-hidden group">
              <FaAward className="absolute -top-6 -right-6 text-[8rem] text-white/10 group-hover:text-white/20 group-hover:rotate-12 transition-all duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-2">Excellence</div>
                <div className="text-purple-100 text-sm font-medium uppercase tracking-wider">Recognized Excellence</div>
              </div>
            </div>

            {/* Card 3: Community */}
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-3xl text-center text-white shadow-2xl transform hover:scale-105 transition-transform overflow-hidden group">
              <FaUsers className="absolute -top-6 -right-6 text-[8rem] text-white/10 group-hover:text-white/20 group-hover:rotate-12 transition-all duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-2">Community</div>
                <div className="text-purple-100 text-sm font-medium uppercase tracking-wider">Trusted Community</div>
              </div>
            </div>

            {/* Card 4: Value */}
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-3xl text-center text-white shadow-2xl transform hover:scale-105 transition-transform overflow-hidden group">
              <FaPercentage className="absolute -top-6 -right-6 text-[8rem] text-white/10 group-hover:text-white/20 group-hover:rotate-12 transition-all duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-purple-100 text-sm font-medium uppercase tracking-wider">Value Focused</div>
              </div>
            </div>
          </div>
        </div> 
        {/* ^^^ THIS CLOSING DIV WAS MISSING IN YOUR CODE */}

       
      </div>
    </section>
  );
};

export default AboutUs;