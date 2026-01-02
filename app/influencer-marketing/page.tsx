"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Rocket,
  TrendingUp,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  BarChart2,
  Megaphone,
  Home,
  Handshake,
  Briefcase,
  Info,
  Mail,
  UserPlus,
  Sparkles,
  Smartphone,
  MapPin,
  Heart,
  Star,
  Zap,
  Check,
  Workflow,
  Lightbulb
} from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Footer from "@/components/Footer";

// --- Utility ---
function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const logo = {
    src: "/boanav.svg",
    alt: "Best Of Amravati Logo"
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const showNavbar = () => setIsVisible(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        showNavbar();
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Smooth scroll handler
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/') return;

    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/", icon: Home }, 
    { name: "Why Influencers?", href: "#why-us", icon: Lightbulb },
    { name: "How It Works", href: "#process", icon: Workflow },
    { name: "Benefits", href: "#benefits", icon: TrendingUp },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-purple-100/50 shadow-sm transition-transform duration-500 ease-in-out",
          isVisible ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group pl-2">
              <div className="relative transition-transform duration-300 group-hover:scale-105 w-32 h-10">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain object-left" priority />
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  link.href === '/' ? (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="font-medium text-[15px] text-slate-700 hover:text-[#D02898] transition-colors relative group cursor-pointer whitespace-nowrap"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D02898] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleScrollToSection(e, link.href)}
                      className="font-medium text-[15px] text-slate-700 hover:text-[#D02898] transition-colors relative group cursor-pointer whitespace-nowrap"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D02898] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  )
                ))}
              </div>
            </div>

            <button className="md:hidden text-slate-700 p-2 hover:bg-purple-50 rounded-lg" onClick={toggleMenu}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden",
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={toggleMenu}
      />

      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-[280px] bg-white/95 backdrop-blur-xl z-[70] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden flex flex-col border-r border-white/20",
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-6 flex items-center justify-between border-b border-purple-50">
          <div className="relative w-28 h-10 ml-2">
            <Image src={logo.src} alt={logo.alt} fill className="object-contain object-left" />
          </div>
          <button onClick={toggleMenu} className="p-2 text-slate-500 hover:bg-red-50 hover:text-red-500 rounded-full transition-all">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-grow py-6 px-4 space-y-2 overflow-y-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return link.href === '/' ? (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-4 px-4 py-3.5 text-slate-600 font-semibold rounded-2xl transition-all group hover:bg-purple-50 hover:text-[#D02898] active:scale-95 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-[#D02898]" />
                <span>{link.name}</span>
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="flex items-center gap-4 px-4 py-3.5 text-slate-600 font-semibold rounded-2xl transition-all group hover:bg-purple-50 hover:text-[#D02898] active:scale-95 cursor-pointer"
              >
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-[#D02898]" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      </aside>
    </>
  );
};

// --- Page Content ---
export default function InfluencerMarketingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-fuchsia-100 selection:text-fuchsia-900 overflow-x-hidden flex flex-col">
      
      {/* VIBRANT Background Mesh */}
     <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 flex-grow">
        
        {/* --- SECTION: HOME (#home) --- */}
        <section id="home" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center relative scroll-mt-32">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#D02898]/20 to-[#9543C0]/20 blur-[80px] rounded-full -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/50 text-[#D02898] text-sm font-bold mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4 fill-[#D02898]" />
            <span>Best of Amravati Exclusive</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]"
          >
            Turn Local Views into <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D02898] to-[#9543C0] animate-gradient-x">
              Real Customers
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
          >
            Stop wasting money on ads people ignore. Partner with Amravati's top content creators to tell your story authentically, maximize footfall, and drive real engagement.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <a href="#proposal" className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#D02898] to-[#9543C0] text-white rounded-full font-bold shadow-xl shadow-fuchsia-500/30 hover:shadow-fuchsia-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg">
              Start Your Campaign <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </section>

        {/* --- SECTION: BENEFITS (#benefits) (Compact) --- */}
        <section id="benefits" className="relative w-full py-12 mb-20 scroll-mt-24 overflow-hidden">
          
          {/* Dark Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-fuchsia-900/90" />
          
          {/* Decorative Glows */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px] translate-y-1/2 pointer-events-none" />

          {/* Container */}
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Verified Creators", value: "50+", icon: Users, color: "text-purple-300", border: "hover:border-purple-400/50", shadow: "hover:shadow-purple-500/30" },
                { label: "Monthly Reach", value: "2.5M+", icon: TrendingUp, color: "text-pink-300", border: "hover:border-pink-400/50", shadow: "hover:shadow-pink-500/30" },
                { label: "Growth Campaigns", value: "120+", icon: Target, color: "text-yellow-300", border: "hover:border-yellow-400/50", shadow: "hover:shadow-yellow-500/30" },
                { label: "Success Rate", value: "95%", icon: CheckCircle, color: "text-green-300", border: "hover:border-green-400/50", shadow: "hover:shadow-green-500/30" },
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "group relative flex flex-col items-center justify-center p-5 rounded-3xl transition-all duration-300",
                    "bg-white/10 backdrop-blur-md", 
                    "border border-white/20", 
                    stat.border, 
                    "shadow-md", 
                    stat.shadow, 
                    "hover:-translate-y-1 hover:bg-white/15"
                  )}
                >
                  {/* Icon Wrapper (Smaller) */}
                  <div className={cn("relative z-10 p-3 rounded-xl bg-white/5 border border-white/10 mb-3 group-hover:scale-110 transition-transform duration-300 shadow-inner", stat.color)}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Value Text (Compact) */}
                  <div className="relative z-10 text-2xl md:text-3xl font-black text-white mb-1 tracking-tight drop-shadow-sm">
                    {stat.value}
                  </div>
                  
                  {/* Label Text (Compact) */}
                  <div className="relative z-10 text-[10px] md:text-xs font-bold uppercase tracking-wider text-purple-200 group-hover:text-white transition-colors text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION: WHY INFLUENCERS (#why-us) --- */}
        <section id="why-us" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-16">
              
              {/* Topic 1: Why It Works */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#D02898] to-[#9543C0] w-fit">Why "Local" Influence Wins</h2>
                <div className="prose prose-lg text-slate-600 leading-relaxed space-y-6">
                  <p>
                    In a city like Amravati, word-of-mouth has always been the strongest marketing tool. 
                    Digital Influencer Marketing is simply <strong>word-of-mouth at scale</strong>.
                  </p>
                  <p>
                    When a national celebrity endorses a product, people see it as an "ad". But when a local Amravati creator—someone 
                    your customers might actually bump into at Tapadia Mall or Rajapeth—recommends your café or boutique, 
                    it feels like a recommendation from a friend.
                  </p>
                  <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 border-l-4 border-[#9543C0] p-6 rounded-r-2xl my-8 shadow-sm">
                    <h4 className="text-[#9543C0] font-bold mb-2 flex items-center gap-2"><Info className="w-5 h-5"/> The Trust Factor</h4>
                    <p className="text-purple-800 text-sm font-medium">
                      Studies show that <strong>82% of consumers</strong> are highly likely to follow a recommendation made by a micro-influencer, 
                      compared to just 73% for general celebrities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Topic 2: Micro-Influencers (UPDATED WITH PINK-PURPLE GRADIENT CARD) */}
              <div className="bg-gradient-to-br from-[#D02898] to-[#9543C0] p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden group hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
                {/* Optional Texture */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="p-3 bg-white rounded-2xl text-[#D02898] shadow-sm">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">The Power of Micro-Influencers</h3>
                </div>
                <div className="prose prose-lg text-purple-100 leading-relaxed space-y-6 relative z-10">
                  <p>
                    Don't get chased by follower counts in the millions. In local marketing, <strong className="text-white">engagement rate</strong> is king. 
                    Micro-influencers (10k - 50k followers) in Amravati typically have hyper-engaged audiences who actually live in the city.
                  </p>
                  <p>
                    These creators have built specific niches—whether it's food blogging, fashion, tech, or education. 
                    Partnering with them ensures your message reaches exactly the right people, not just random users across India.
                  </p>
                </div>
              </div>

              {/* Topic 3: Video Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-2xl text-[#9543C0]">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Short-Form Video is Essential</h3>
                </div>
                <div className="prose prose-lg text-slate-600 leading-relaxed space-y-6">
                  <p>
                    Instagram Reels and YouTube Shorts have changed the game. A static image of your product gets scrolled past in 1 second. 
                    A dynamic, 30-second Reel showing the <em>experience</em> of your service captures attention.
                  </p>
                  <ul className="grid grid-cols-1 gap-4 mt-6">
                    <li className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle className="w-5 h-5" /></div>
                      <span className="font-medium text-slate-700"><strong>Visual Proof:</strong> Let customers see the quality instantly.</span>
                    </li>
                    <li className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle className="w-5 h-5" /></div>
                      <span className="font-medium text-slate-700"><strong>Algorithm Love:</strong> Social platforms prioritize video content.</span>
                    </li>
                    <li className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl border border-white/50">
                      <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle className="w-5 h-5" /></div>
                      <span className="font-medium text-slate-700"><strong>Shareability:</strong> Easy to share on WhatsApp status.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 h-fit">
              
              {/* Premium Card 1 - Updated Gradient */}
              <div className="bg-gradient-to-br from-[#D02898] to-[#9543C0] p-8 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D02898]/30 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#9543C0]/20 blur-[80px] rounded-full -translate-x-1/3 translate-y-1/3" />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    The BOA Advantage
                  </h3>
                  <p className="text-slate-100 text-sm mb-8 font-medium">We don't just hand you a phone number. We manage the entire campaign.</p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10 backdrop-blur-sm">
                        <UserPlus className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">Curated Matching</h4>
                        <p className="text-xs text-slate-200 mt-1 leading-relaxed">We match your brand with creators who fit your specific vibe and values.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10 backdrop-blur-sm">
                        <Megaphone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">Creative Strategy</h4>
                        <p className="text-xs text-slate-200 mt-1 leading-relaxed">We help script the content to ensure it drives actual sales, not just likes.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10 backdrop-blur-sm">
                        <BarChart2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">Performance Tracking</h4>
                        <p className="text-xs text-slate-200 mt-1 leading-relaxed">Get detailed reports on reach, saves, shares, and audience engagement.</p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-8 w-full py-4 bg-white text-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors shadow-lg hover:shadow-xl">
                    Book a Free Consultation
                  </button>
                </div>
              </div>

              {/* Card 2: Categories */}
              <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-8 rounded-[2.5rem] shadow-lg shadow-fuchsia-100/50">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-red-500 fill-red-100" />
                  <h4 className="font-bold text-slate-900 text-lg">Who Are We Reaching?</h4>
                </div>
                <p className="text-sm text-slate-600 mb-6 font-medium">
                  Our network covers diverse demographics across Amravati city and nearby districts.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Foodies", "Students", "Fashion Lovers", "Tech Enthusiasts", "Home Owners", "Fitness Buffs", "Travelers"].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white border border-slate-200/80 rounded-full text-xs font-semibold text-slate-600 hover:border-[#D02898] hover:text-[#D02898] hover:bg-fuchsia-50 transition-all cursor-default shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* --- SECTION: PROCESS (#services) - UPDATED TO WHITE CARDS WITH BORDERS/SHADOWS --- */}
        <section id="process" className="relative overflow-hidden bg-gradient-to-br from-[#D02898] via-[#ae35ac] to-[#9543C0] py-24 scroll-mt-32">
          {/* Background Textures */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Simple Process, Big Impact</h2>
              <p className="text-white/80 mt-3 text-lg font-medium">From concept to viral in three steps.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector Line (Desktop Only) */}
              <div className="hidden md:block absolute top-16 left-0 w-full h-1 bg-white/20 -z-10 rounded-full" />

              {[
                { 
                  step: "01",
                  title: "Strategy & Selection", 
                  desc: "We analyze your business goals and shortlist the perfect influencers.", 
                  icon: Users, 
                  gradient: "from-blue-500 to-indigo-600",
                  border: "hover:border-blue-500/30",
                  shadow: "hover:shadow-blue-500/30"
                },
                { 
                  step: "02",
                  title: "Content Creation", 
                  desc: "Influencers visit your location to shoot high-quality, authentic reels.", 
                  icon: Sparkles, 
                  gradient: "from-[#D02898] to-[#9543C0]",
                  border: "hover:border-[#D02898]/30",
                  shadow: "hover:shadow-[#D02898]/30"
                },
                { 
                  step: "03",
                  title: "Launch & Amplify", 
                  desc: "Content goes live. We cross-promote it across our network for max reach.", 
                  icon: Rocket, 
                  gradient: "from-orange-500 to-red-600",
                  border: "hover:border-orange-500/30",
                  shadow: "hover:shadow-orange-500/30"
                },
              ].map((step, i) => (
                <div key={i} className={cn(
                  "group relative bg-white rounded-[2.5rem] p-8 pt-12 transition-all duration-500 overflow-hidden",
                  "border-2 border-slate-100", // Base border
                  step.border, // Colored border on hover
                  "shadow-xl hover:shadow-2xl", // Base shadow
                  step.shadow, // Colored shadow on hover
                  "hover:-translate-y-3"
                )}>
                  
                  {/* Step Number Watermark */}
                  <div className="absolute -right-4 -top-6 text-[8rem] font-black text-slate-50 group-hover:text-slate-100 transition-colors duration-500 select-none pointer-events-none opacity-50">
                    {step.step}
                  </div>

                  {/* Icon Container */}
                  <div className={cn("w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg bg-gradient-to-br transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10", step.gradient)}>
                    <step.icon className="w-9 h-9" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{step.desc}</p>
                  </div>
                  
                  {/* Bottom Highlight Line */}
                  <div className={cn("absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left", step.gradient)} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION: BUSINESS (#proposal) - UPDATED GRADIENT --- */}
        <section id="proposal" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-20 scroll-mt-32">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#D02898] via-[#ae35ac] to-[#9543C0] rounded-[3rem] px-8 py-16 md:p-20 text-white shadow-2xl shadow-purple-900/30">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#D02898] rounded-full blur-[150px] opacity-30" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#9543C0] rounded-full blur-[150px] opacity-30" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Content */}
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-yellow-300 text-sm font-semibold backdrop-blur-md">
                  <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" /> 
                  <span>Trusted by 100+ Amravati Businesses</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  Ready to Dominate <br/> the Local Feed?
                </h2>
                
                <p className="text-white/80 text-lg md:text-xl font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Join the digital revolution. Get paired with creators who drive real results, not just views.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                    Launch Campaign <Zap className="w-5 h-5 fill-slate-900" />
                  </button>
                  <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                    Talk to an Expert
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Checklist */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] relative">
                <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full">
                   <Rocket className="w-6 h-6 text-yellow-300" />
                </div>
                <ul className="space-y-4">
                  {[
                    "Custom Campaign Strategy",
                    "Video Production Assistance",
                    "Guaranteed Reach & Engagement",
                    "Monthly Performance Reports"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 bg-black/20 p-4 rounded-2xl border border-white/5 hover:bg-black/30 transition-colors">
                      <div className="bg-green-500/20 p-2 rounded-full shrink-0">
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                      <span className="font-semibold text-white/90 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

      </main>
      
      {/* --- SECTION: CONTACT (#contact) --- */}
      <footer id="contact" className="relative z-10 bg-slate-900 text-white scroll-mt-0">
         <Footer />
      </footer>
    </div>
  );
}