"use client";

// --- Components ---
import HomeLogo from '@/components/HeroSection';
import HiringContentCreator from '@/components/HiringContentCreator';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import BusinessProposal from '@/components/BusinessProposal';
import SuccessStories from '@/components/SuccessStories';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';


// --- Libraries ---
import Image from "next/image"
import Link from 'next/link'
// 1. IMPORT TOASTER
import { Toaster } from 'react-hot-toast'; 
import { 
  FaRocket, 
  FaArrowRight, 
  FaVideo, 
  FaUsers, 
  FaStar, 
  FaShieldAlt, 
  FaChartLine, 
  FaWhatsapp
} from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden font-sans selection:bg-purple-100 selection:text-purple-900">
      
      {/* 2. ADD TOASTER CONTAINER */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* 1. Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section */}
      {/* Note: Ensure this component contains your full Hero section or just the Logo depending on your preference */}
      <HomeLogo />
      
     

      {/* 3. Services Section */}
   
      {/* 4. Business Proposal (Includes Workflow & Booking Form) */}
      <BusinessProposal />

      {/* 5. Success Stories */}
      <AboutUs />
      
      {/* 6. Hiring Creator Component */}
      <HiringContentCreator />

      {/* 7. Footer / Connect */}
      <Footer />

      {/* 8. Floating Whatsapp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/918956727311" 
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-full font-bold shadow-2xl hover:shadow-green-500/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 animate-bounce-slow border-2 border-white/20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
            <FaWhatsapp className="text-white text-2xl relative z-10" />
          </div>
          <span className="hidden sm:inline">Let's Chat</span>
        </a>
      </div>

      {/* 9. Global Styles for Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(3deg); }
          66% { transform: translateY(10px) rotate(-3deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-fade-up { animation: fade-up 0.8s ease-out forwards; opacity: 0; }
        .bg-animate { background-size: 200% auto; animation: gradient 3s linear infinite; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </main>
  )
}