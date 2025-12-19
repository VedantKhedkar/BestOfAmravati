"use client";

import { useState } from 'react';
import Image from 'next/image'; // <--- Added import
import { 
  FaVideo, FaCamera, FaEdit, FaUser, FaPhoneAlt, 
  FaLink, FaPaperPlane, FaBriefcase, FaLightbulb, 
  FaInstagram, FaYoutube, FaFacebook, FaEnvelope
} from 'react-icons/fa';

export default function HiringContentCreator() {
  // --- Form Logic ---
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '', 
    socialLink: '',
    portfolio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with pre-filled application details
    const message = `👋 Hi, I'm applying for the *Content Creator* role!%0A%0A*👤 Name:* ${formData.name}%0A*📞 Phone:* ${formData.phone}%0A*📧 Email:* ${formData.email}%0A*🔗 Social Profile:* ${formData.socialLink}%0A*📂 Portfolio:* ${formData.portfolio}`;
    window.open(`https://wa.me/918956727311?text=${message}`, '_blank');
  };

  return (
    // THEME: Primary Gradient Background
    <section id="career" className="py-20 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
      
      {/* --- ANIMATED BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Base Textures */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Animated GIF 1 (Right Side) */}
        <div className="absolute top-10 right-0 md:-right-20 opacity-20 animate-float-slow mix-blend-overlay">
           <div className="w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] relative">
             <Image 
               src="/bestofamravati.gif" 
               alt="Background Animation" 
               fill
               className="object-contain"
             />
           </div>
        </div>

        {/* Animated GIF 2 (Left Side) */}
        <div className="absolute bottom-10 left-0 md:-left-20 opacity-20 animate-float-slow animation-delay-1000 mix-blend-overlay">
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
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full mb-4 shadow-lg">
            <FaBriefcase className="text-yellow-300" />
            <span className="text-sm font-bold text-white uppercase tracking-wider shadow-sm">Join Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
            We Are Hiring <span className="text-yellow-300">Content Creators</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Passionate about storytelling, editing, and trends? Join Amravati's fastest-growing digital media agency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: Role & Responsibilities */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 animate-fade-up animation-delay-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                <FaVideo className="text-xl" />
              </div>
              Role & Responsibilities
            </h3>

            <div className="space-y-6 relative z-10">
              <p className="text-gray-600 leading-relaxed">
                We are looking for creative individuals who can shoot, edit, and produce engaging short-form content (Reels/Shorts) for local brands.
              </p>

              <div className="grid gap-4">
                {[
                  { icon: FaCamera, text: "Shoot High-Quality Video", desc: "Capture cinematic shots using mobile or camera." },
                  { icon: FaEdit, text: "Creative Editing", desc: "Edit engaging reels with trending audio & transitions." },
                  { icon: FaLightbulb, text: "Idea Generation", desc: "Brainstorm viral concepts for client promotions." },
                  { icon: FaUser, text: "On-Site Collaboration", desc: "Visit client locations and direct shoots confidently." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-purple-50 hover:border-purple-100 transition-all">
                    <div className="mt-1 text-purple-600 text-lg"><item.icon /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.text}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Application Form */}
          <div className="relative animate-fade-up animation-delay-400">
            {/* Holographic Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-[2.2rem] blur opacity-30"></div>
            
            <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-10 relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Apply Now</h3>
                <p className="text-sm text-gray-500">Send your profile directly to our hiring team.</p>
              </div>

              <form onSubmit={handleApply} className="space-y-5">
                
                {/* Name Field */}
                <div className="group">
                  <label className="text-xs font-bold text-purple-700 uppercase tracking-wider ml-3 mb-1 block">Full Name</label>
                  <div className="relative flex items-center">
                    <div className="absolute left-0 pl-4 text-gray-400 group-focus-within:text-purple-600 transition-colors">
                      <FaUser />
                    </div>
                    <input 
                      type="text" name="name" required placeholder="Your Full Name"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-100 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100/50 outline-none transition-all text-sm font-semibold text-gray-800 placeholder-gray-400"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="group">
                  <label className="text-xs font-bold text-purple-700 uppercase tracking-wider ml-3 mb-1 block">Phone Number</label>
                  <div className="relative flex items-center">
                    <div className="absolute left-0 pl-4 text-gray-400 group-focus-within:text-purple-600 transition-colors">
                      <FaPhoneAlt />
                    </div>
                    <input 
                      type="tel" name="phone" required placeholder="+91..."
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-100 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100/50 outline-none transition-all text-sm font-semibold text-gray-800 placeholder-gray-400"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="text-xs font-bold text-purple-700 uppercase tracking-wider ml-3 mb-1 block">Email Address</label>
                  <div className="relative flex items-center">
                    <div className="absolute left-0 pl-4 text-gray-400 group-focus-within:text-purple-600 transition-colors">
                      <FaEnvelope />
                    </div>
                    <input 
                      type="email" name="email" required placeholder="example@email.com"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-100 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100/50 outline-none transition-all text-sm font-semibold text-gray-800 placeholder-gray-400"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Social Links Field */}
                <div className="group">
                  <label className="text-xs font-bold text-purple-700 uppercase tracking-wider ml-3 mb-1 block">Social Profile Link</label>
                  <div className="relative flex items-center">
                    <div className="absolute left-0 pl-4 text-gray-400 group-focus-within:text-purple-600 transition-colors">
                      <FaInstagram />
                    </div>
                    <input 
                      type="url" name="socialLink" placeholder="Instagram / YouTube URL"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-100 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100/50 outline-none transition-all text-sm font-semibold text-gray-800 placeholder-gray-400"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex gap-2 mt-2 ml-2 text-gray-400 text-xs">
                    <FaInstagram /> <FaYoutube /> <FaFacebook />
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-4 flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                      Submit Application <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}