"use client";

import Image from "next/image";
import { MdVerified } from 'react-icons/md';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube,
  FaCheckCircle,
   
} from 'react-icons/fa';


export default function Footer() {
  return (
    // CHANGE: Replaced 'min-h-screen flex items-center' with 'h-auto'
    // This allows the footer to fit its content naturally without stretching.
    <section id="footer" className="relative h-auto w-full px-4 md:px-8 py-16 md:py-24 overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800">
      
      {/* Background Elements */}
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
        {/* Logo & Title */}
        <div className="mb-12 animate-fade-up">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <Image 
              src="/boalogo.svg" 
              alt="Logo" 
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Connect with us</h2>
          <p className="text-lg md:text-xl text-white/90">Let's grow your business together</p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-6 max-w-2xl mx-auto animate-fade-up animation-delay-200">
          {/* Email Card */}
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-800 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaEnvelope className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="flex-1 text-left text-center md:text-left">
                <div className="text-sm text-white/70 mb-1">Email Address</div>
                <a 
                  href="mailto:bestofamravati@gmail.com"
                  className="text-xl md:text-2xl font-semibold text-white hover:text-yellow-300 transition-colors break-all"
                >
                  bestofamravati@gmail.com
                </a>
                <div className="text-white/80 mt-2 text-sm md:text-base">Get personalized consultation via email</div>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaPhoneAlt className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="flex-1 text-left text-center md:text-left">
                <div className="text-sm text-white/70 mb-1">Call Us Now</div>
                <a 
                  href="tel:8956727311"
                  className="text-xl md:text-2xl font-semibold text-white hover:text-yellow-300 transition-colors"
                >
                  +91 89567 27311
                </a>
                <div className="text-white/80 mt-2 text-sm md:text-base">Available 24/7 for business inquiries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
       <div className="pt-10 animate-fade-up">
          <div className="relative inline-block mb-8">
            <h3 className="text-2xl font-bold text-white relative z-10">Follow Our Journey</h3>
            {/* Decorative Underline */}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-70"></div>
          </div>

          <div className="flex justify-center gap-6">

            {/* 1. Instagram Icon */}
            <a href="https://Instagram.com/bestofamravati/" className="group flex flex-col items-center gap-3" aria-label="Instagram">
              {/* Removed rotate, kept vertical pop (-translate-y-2) */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-pink-500/50 hover:shadow-xl">
                {/* Glass Ring */}
                <div className="absolute -inset-1 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
                {/* Background Gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                {/* Icon (No Rotation) */}
                <FaInstagram className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300" />
              </div>
              <span className="text-xs font-semibold text-white/80 tracking-wide uppercase group-hover:text-white transition-colors">Instagram</span>
            </a>

            {/* 2. Facebook Icon */}
            <a href="https://facebook.com/bestofamravatimh/" className="group flex flex-col items-center gap-3" aria-label="Facebook">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-blue-500/50 hover:shadow-xl">
                {/* Glass Ring */}
                <div className="absolute -inset-1 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
                {/* Background Gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-blue-700 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                {/* Icon (No Rotation) */}
                <FaFacebookF className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300" />
              </div>
              <span className="text-xs font-semibold text-white/80 tracking-wide uppercase group-hover:text-white transition-colors">Facebook</span>
            </a>

            {/* 3. YouTube Icon */}
            <a href="https://youtube.com/@bestofamravati/" className="group flex flex-col items-center gap-3" aria-label="YouTube">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-red-500/50 hover:shadow-xl">
                {/* Glass Ring */}
                <div className="absolute -inset-1 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
                {/* Background Gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500 to-red-700 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                {/* Icon (No Rotation) */}
                <FaYoutube className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300" />
              </div>
              <span className="text-xs font-semibold text-white/80 tracking-wide uppercase group-hover:text-white transition-colors">YouTube</span>
            </a>

          </div>
        </div>

        {/* Footer Note */}
      <div className="mt-16 pt-8 border-t border-white/20 animate-fade-up animation-delay-400">
  <div className="text-center">
    {/* MODIFIED LINE: Added flex, items-center, justify-center and the icon */}
    <p className="text-white/80 text-base md:text-lg mb-2 flex items-center justify-center gap-1">
      © {new Date().getFullYear()} Best Of Amravati
      {/* The Blue Tick Icon */}
      <MdVerified className="text-blue-500 text-sm" />
    </p>
    <p className="text-white/60 text-sm md:text-base">
      Owned & Managed by BIZONANCE INDIA PVT LTD 
    </p>
  </div>
</div>
      </div>
    </section>
  );
}