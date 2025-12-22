'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { 
  FaRocket,
  FaArrowRight,
  FaGem 
} from 'react-icons/fa';

import { 
  Video, 
  Share2, 
  TrendingUp, 
  Store, 
  Megaphone, 
  Award,
  Handshake,
  Users,
  TrophyIcon
} from 'lucide-react';

const HeroSection = () => {

  const categories = [
    { icon: <Video size={22} />, label: "Content Production", href: "#" }, 
    { icon: <Share2 size={22} />, label: "Social Media Handling", href: "#" },
    { icon: <TrendingUp size={22} />, label: "Digital Growth Strategy", href: "#" },
    { icon: <Store size={22} />, label: "Local Business Promotion", href: "#" },
    { icon: <Handshake size={22} />, label: "Business Collaboration", href: "#" },
    { icon: <Megaphone size={22} />, label: "Brand Awareness", href: "#" },
    { icon: <Users size={22} />, label: "Influencer Marketing", href: "#" },
    { icon: <TrophyIcon size={22} />, label: "Awards & Recognition", href: "#" },
  ];

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
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-0 overflow-hidden w-full">
      
      {/* --- Animated Background (Global) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        
        <div className="absolute top-6 md:top-96 md:-right-[30rem] lg:-right-96 lg:top-6 opacity-10 animate-float-slow">
          <div className="w-[58rem] h-[120rem] md:w-[60rem] md:h-[80rem] lg:w-[44rem] lg:h-[72rem] relative">
            <Image 
              src="/bestofamravati.gif" 
              alt="Background Animation" 
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        <div className="absolute -left-24 md:-left-2/3 md:bottom-40 lg:-left-96 lg:bottom-6 opacity-10 animate-float-slow animation-delay-1000">
          <div className="w-44 h-80 sm:w-44 sm:h-80 md:w-[60rem] md:h-[110rem] lg:w-[44rem] lg:h-[72rem] relative">
            <Image 
              src="/bestofamravati.gif" 
              alt="Background Animation" 
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center space-y-8 flex-grow flex flex-col justify-center pb-8 px-4 md:px-8">
        
        <div className="flex justify-center animate-fade-up">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
              <Image 
                src="/boalogo.svg" 
                alt="Best Of Amravati Logo" 
                fill
                sizes="(max-width: 768px) 240px, 320px"
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-animate">
              Best of Amravati
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 leading-relaxed animate-fade-up animation-delay-200">
            Where <span className="font-bold text-purple-600">Excellence</span> Meets 
            <span className="font-bold text-pink-600"> Recognition</span> 
            <span className="ml-2 text-yellow-500 inline-block animate-bounce text-xl">🏆</span>
          </p>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-400">
            Bringing you the best of our city✨
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
             {[
               "Branding",
               "Collaboration",
               "Business Magazine",
               "Digital News",
               "Media"
             ].map((item, index) => (
               <div
                 key={index}
                 className="inline-flex items-center px-4 py-1.5 bg-transparent border border-purple-300 rounded-full transition-colors hover:bg-purple-50 cursor-default"
               >
                 <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2 animate-pulse"></span>
                 <span className="text-purple-900 font-bold text-xs tracking-wide uppercase">
                   {item}
                 </span>
               </div>
             ))}
           </div>

          <p className="text-sm md:text-base font-medium text-red-600 animate-fade-up animation-delay-600">
            #bestofamravati
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-2 animate-fade-up animation-delay-800">
            <Link 
              href="#proposal" 
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 shadow-md"
            >
              <FaRocket className="group-hover:rotate-12 transition-transform" />
              Start Your Journey
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none animate-float-slow"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none animate-float-slow animation-delay-2000"></div>

      <div className="text-center mb-2 relative z-10 pt-16">
        
        <div className="flex justify-center mb-4 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-purple-50/80 backdrop-blur-sm text-purple-900 font-bold text-xs uppercase tracking-widest shadow-sm">
             <FaGem className="text-pink-500 animate-pulse" />
             <span>Our Services</span>
          </div>
        </div>
        <br />
        <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-up">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-animate">
            What We Offer
          </span>
        </h2>
        
        <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-up animation-delay-200 leading-relaxed px-4">
          Premium digital services designed to make your business <span className="text-pink-600 font-bold">Grow </span> &
          <span className="text-pink-600 font-bold"> Recognize</span> in Amravati City.
        </p>
      </div>

        {/* --- GRID FOR CATEGORIES --- */}
        <div className="w-full pt-2 mb-0 animate-fade-up animation-delay-1000">
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 py-6 max-w-full mx-auto px-4 md:px-8">
             {categories.map((cat, index) => (
               <Link key={index} href={cat.href} className="w-full h-full">
                 <div 
                   className="group w-full h-full min-h-[120px] bg-white/80 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer border border-pink-300 hover:border-purple-400 hover:-translate-y-1 hover:scale-105 flex flex-col justify-between p-4 text-left"
                 >
                   <div className="text-purple-600 group-hover:text-pink-600 transition-colors transform group-hover:scale-110 duration-300 mb-2">
                     {cat.icon}
                   </div>
                   
                   {/* UPDATED: 
                     1. Added 'max-w-[100px]' to force wrapping on small screens.
                     2. Added 'line-clamp-2' to ensure it fits perfectly in 2 lines.
                   */}
                   <span className="text-xs sm:text-sm font-bold text-gray-700 leading-tight group-hover:text-purple-700 break-words line-clamp-2 max-w-[100px] sm:max-w-none block">
                     {cat.label}
                   </span>
                 </div>
               </Link>
             ))}
           </div>
        </div>
      </div>

      {/* --- READY TO TRANSFORM SECTION --- */}
      <section id="services" className="w-full mt-0 pt-6 pb-16 md:pb-24 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-yellow-300/20 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
          
          <div className="absolute top-0 right-0 md:-right-20 opacity-20 animate-float-slow mix-blend-overlay">
            <div className="w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] relative">
              <Image 
                src="/bestofamravati.gif" 
                alt="Background Animation" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain" 
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 md:-left-20 opacity-20 animate-float-slow animation-delay-1000 mix-blend-overlay">
            <div className="w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] relative">
              <Image 
                src="/bestofamravati.gif" 
                alt="Background Animation" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain" 
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-0"> 
          <div className="text-center mb-12">
            
            <div className="flex justify-center w-full">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10 shadow-lg">
                <FaGem className="text-yellow-300 animate-pulse" />
                <span className="text-white font-bold text-sm uppercase tracking-wider shadow-black drop-shadow-sm">Our Mission</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-md">
              Ready To Transform Our City.
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
              Discover, explore, and celebrate success with us
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {services.map((card, index) => (
              <div key={index} className="w-full max-w-[380px] flex-shrink-0">
                <div className="h-full flex flex-col bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] shadow-xl cursor-pointer group">
                  <div className="text-5xl mb-4 drop-shadow-md transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {card.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">{card.subtitle}</h3>
                  <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-5 tracking-tight drop-shadow-sm">{card.title}</h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 line-clamp-3 font-medium">{card.description}</p>
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
    </section>
  );
};

export default HeroSection;