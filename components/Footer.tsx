"use client";

import Link from "next/link";
import Image from "next/image";
import { MdVerified } from 'react-icons/md';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaWhatsapp,
  FaInstagram, 
  FaFacebookF, 
  FaYoutube 
} from 'react-icons/fa';

export default function Footer() {
  // Navigation mapping for the separate TermsPage.tsx
  const policyLinks = [
    { name: 'Terms & Conditions', href: '/TermsPage#terms' },
    { name: 'Privacy Policy', href: '/TermsPage#privacy' },
    { name: 'Refund Policy', href: '/TermsPage#refund' }
  ];

  return (
    <section id="footer" className="relative h-auto w-full px-4 md:px-8 py-16 md:py-24 overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating GIF Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-4xl max-h-4xl relative">
            <Image 
              src="/bestofamravati.gif" 
              alt="Background Animation" 
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Logo & Header */}
        <div className="mb-12">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <Image 
              src="/boalogo.svg" 
              alt="Best of Amravati Logo" 
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4  tracking-tighter">Connect with us</h2>
          <p className="text-lg md:text-xl text-white/90 font-medium">Let's grow your business together</p>
        </div>

        {/* --- CONTACT CARDS SECTION --- */}
       <div className="space-y-4 max-w-2xl mx-auto mb-12">
  
  {/* Phone Row */}
  <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg">
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-green-500/20">
        <FaPhoneAlt className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 text-left text-center md:text-left">
        <div className="text-xs text-white/70 mb-1 uppercase tracking-widest font-normal">Call Us Now</div>
        <a href="tel:7666266137" className="text-xl md:text-2xl text-white font-normal hover:text-yellow-300 transition-colors">
           +91 7666266137
        </a>
        <div className="text-white/60 mt-1 text-xs font-normal italic">Available for business inquiries</div>
      </div>
    </div>
  </div>

  {/* WhatsApp Row */}
  <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg">
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-green-500/20">
        <FaWhatsapp className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 text-left text-center md:text-left">
        <div className="text-xs text-white/70 mb-1 uppercase tracking-widest font-normal">WhatsApp Business</div>
        <a href="https://wa.me/917666266137" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl text-white font-normal hover:text-yellow-300 transition-colors">
          +91 7666266137
        </a>
        <div className="text-white/60 mt-1 text-xs font-normal italic">Message us for quick assistance</div>
      </div>
    </div>
  </div>

  {/* Email Row */}
  <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg">
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-800 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
        <FaEnvelope className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 text-left text-center md:text-left">
        <div className="text-xs text-white/70 mb-1 uppercase tracking-widest font-normal">Email Address</div>
        <a href="mailto:bestofamravati@gmail.com" className="text-xl md:text-2xl text-white font-normal hover:text-yellow-300 transition-colors break-all">
          bestofamravati@gmail.com
        </a>
        <div className="text-white/60 mt-1 text-xs font-normal italic">Get personalized consultation via email</div>
      </div>
    </div>
  </div>
</div>

        {/* Social Media Section */}
     {/* Social Media Section */}
<div className="pt-10 animate-fade-up">
  <div className="relative inline-block mb-8 text-center">
    <h3 className="text-2xl font-extrabold text-white relative z-10  tracking-tighter">Follow us on</h3>
    {/* Decorative Underline */}
    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-70"></div>
  </div>

  <div className="flex justify-center flex-wrap gap-8">

    {/* 1. Instagram */}
    <a href="https://Instagram.com/bestofamravati/" className="group flex flex-col items-center gap-3" target="_blank" aria-label="Instagram">
      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-pink-500/50 shadow-lg">
        {/* Glass Ring Effect */}
        <div className="absolute -inset-1 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
        {/* Brand Gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
        <FaInstagram className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
      <span className="text-xs font-normal text-white/80 tracking-widest uppercase group-hover:text-white transition-colors"></span>
    </a>

    {/* 2. Facebook */}
    <a href="https://facebook.com/bestofamravatimh/" className="group flex flex-col items-center gap-3" target="_blank" aria-label="Facebook">
      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-blue-500/50 shadow-lg">
        <div className="absolute -inset-1 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-blue-700 opacity-90 group-hover:opacity-100 transition-opacity"></div>
        <FaFacebookF className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
      <span className="text-xs font-normal text-white/80 tracking-widest uppercase group-hover:text-white transition-colors"></span>
    </a>

    {/* 3. YouTube */}
    <a href="https://youtube.com/@bestofamravati/" className="group flex flex-col items-center gap-3" target="_blank" aria-label="YouTube">
      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-red-500/50 shadow-lg">
        <div className="absolute -inset-1 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500 to-red-700 opacity-90 group-hover:opacity-100 transition-opacity"></div>
        <FaYoutube className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
      <span className="text-xs font-normal text-white/80 tracking-widest uppercase group-hover:text-white transition-colors"></span>
    </a>

    {/* 4. WhatsApp Channel */}
    <a href="https://whatsapp.com/channel/0029Vb7Jc1t8qIzzoz7THn1o" className="group flex flex-col items-center gap-3" target="_blank" aria-label="WhatsApp">
      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-green-500/50 shadow-lg">
        <div className="absolute -inset-1 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400 via-green-500 to-green-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
        <FaWhatsapp className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
      <span className="text-xs font-normal text-white/80 tracking-widest uppercase group-hover:text-white transition-colors"></span>
    </a>

  </div>
</div>

        {/* Legal Redirect Pill Buttons */}
    <div className="mt-16 text-white flex flex-wrap justify-center gap-4 border-t border-white/10 pt-10">
  {policyLinks.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className="group relative px-6 py-2.5 rounded-full text-[10px] font-normal uppercase tracking-widest transition-all duration-500 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white hover:text-purple-800 hover:scale-105 shadow-lg hover:shadow-purple-500/20"
    >
      <span className="relative z-10 transition-colors duration-300">
        {link.name}
      </span>
    </Link>
  ))}
</div>

        {/* Footer Bottom Branding */}
            <div className="mt-16 pt-8 border-t border-white/20 animate-fade-up animation-delay-400">
  <div className="text-center">
    {/* MODIFIED LINE: Added flex, items-center, justify-center and the icon */}
    <p className="text-white/80 text-base md:text-lg mb-2 flex items-center justify-center gap-1">
      © {new Date().getFullYear()} Best Of Amravati
      {/* The Blue Tick Icon */}
      <MdVerified className="text-white text-lg" />
    </p>
    <p className="text-white/60 text-sm md:text-base">
      Owned & Managed by BiZONANCE INDIA PVT LTD 
    </p>
  </div>
</div>
      </div>
    </section>
  );
}