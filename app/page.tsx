"use client";

// --- Libraries ---
import { useState } from 'react'; // 1. Import useState
import Image from "next/image"
import Link from 'next/link'
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

// --- Components ---
import HomeLogo from '@/components/HeroSection';
import HiringContentCreator from '@/components/HiringContentCreator';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import BusinessProposal from '@/components/BusinessProposal';
import SuccessStories from '@/components/SuccessStories';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';
import ApplyForm from '@/components/ApplyForm';
import Chatbot from '@/components/Chatbot';
import FloatingChatButton from '@/components/FloatingChatButton'; // 2. Import the button

export default function Home() {
  // 3. Create state to control Chatbot visibility
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden font-sans selection:bg-purple-100 selection:text-purple-900">
      
      <Toaster position="top-center" reverseOrder={false} />

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HomeLogo />

      {/* Business Proposal */}
      <BusinessProposal />

      {/* Success Stories */}
      <AboutUs />
      
      {/* Hiring Creator Component */}
      <HiringContentCreator />

      {/* Footer */}
      <Footer />

      {/* 4. Chatbot Integration */}
      {/* The button sets state to TRUE to open the drawer */}
      <FloatingChatButton onClick={() => setIsChatOpen(true)} />

      {/* The Chatbot receives the state and a function to set it to FALSE to close */}
      <Chatbot 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />

      {/* Global Styles for Animations */}
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