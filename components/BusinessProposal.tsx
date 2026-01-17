"use client";

import { useState } from 'react';
import Image from 'next/image'; 
import toast from 'react-hot-toast'; 
import Link from 'next/link'; // Required for redirection

import { 
  FaVideo, FaCamera, FaEdit, FaChartLine, FaShareAlt, 
  FaFileDownload, FaCheckCircle, FaInstagram, FaFacebook, 
  FaYoutube, FaCrown, FaGem, FaUsers, FaPhoneAlt, 
  FaEnvelope, FaArrowRight, FaLayerGroup, FaLock, FaTimes 
} from 'react-icons/fa';

export default function BusinessProposal() {
  const [isLoading, setIsLoading] = useState(false);

  // --- Form Logic ---
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    email: '',
    acceptedTerms: false // Fixed: Initialized to false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const loadingId = toast.loading("Processing Secure Payment...");

    try {
      console.log("Initiating Payment for:", formData);
      await new Promise(resolve => setTimeout(resolve, 2000)); 

      toast.dismiss(loadingId);

      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-2xl rounded-2xl pointer-events-auto flex ring-1 ring-black ring-opacity-5 overflow-hidden border-l-8 border-green-500`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                   <FaCheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-bold text-gray-900">
                  Payment Successful!
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Amount: <span className="font-bold text-gray-800">₹3,500</span>
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Receipt sent to {formData.email}
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-purple-600 hover:text-purple-500 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      ), {
        duration: 5000,
        position: 'top-center',
      });
      
      setFormData({ businessName: '', ownerName: '', phone: '', email: '', acceptedTerms: false });

    } catch (error) {
      toast.dismiss(loadingId);
      toast.error("Payment Failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Adjusted Workflow Data to 7 Stages
  const workflowSteps = [
    { title: "Briefing", desc: "Understanding your business goals and unique selling points." },
    { title: "Media Collection", desc: "Professional on-site high-quality visual capture." },
    { title: "Creative Editing", desc: "Advanced post-production for maximum engagement." },
    { title: "Owner Approval", desc: "Review the final draft before we launch across platforms." },
    { title: "Platform Posting", desc: "Strategic launch on Instagram, Facebook, and YouTube." },
    { title: "Active Promotion", desc: "Targeted distribution until 100k+ reach is achieved." },
    { title: "Insight Sharing", desc: "Detailed performance metrics delivered to you." }
  ];

  return (
    <section id="proposal" className="pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 relative overflow-hidden text-white">
      
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>

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

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 shadow-sm rounded-full px-4 py-1 mb-4 animate-bounce-slow">
            <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">
            Grow your business
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3 text-white drop-shadow-lg">
            Local Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Growth Initiative</span>
          </h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto font-light">
            Empowering Amravati brands with high-impact digital visibility through our exclusive <span className="font-extrabold text-white">Creative Reel Promotion Concept</span>. 
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-start max-w-6xl mx-auto">
          
          <div className="lg:col-span-7 flex flex-col gap-6 h-full">
            
            <div className="bg-white/95 backdrop-blur-sm text-black rounded-3xl shadow-2xl overflow-hidden group relative transform transition-all duration-500 hover:scale-[1.01] animate-fade-up animation-delay-200">
              <div className="p-6 relative">
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl shadow-md animate-pulse">POPULAR</div>
                  
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-black">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shadow-inner group-hover:rotate-12 transition-transform duration-500">
                      <FaVideo className="text-lg" />
                    </div>
                    Creative Reel Concept
                  </h3>
                  
                  <p className="text-purple-950/80 mb-6 leading-relaxed text-base">
                    We create professionally designed promotional reels that highlight your business story, ambiance, products, and exclusive offers using modern creative techniques.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { icon: FaCamera, text: "Professional Shooting", sub: "30-60 sec content" },
                      { icon: FaEdit, text: "Creative Editing", sub: "Enhanced visuals" },
                      { icon: FaChartLine, text: "1,00,000+ Reach", sub: "Guaranteed views" },
                      { icon: FaShareAlt, text: "Multi-Platform", sub: "Instagram, Facebook, Youtube" },
                      { icon: FaCheckCircle, text: "Caption Strategy", sub: "Hashtags included" },
                      { icon: FaFileDownload, text: "Raw File Delivery", sub: "For your own use" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white hover:bg-purple-50 transition-all duration-300 border-2 border-purple-100 group-hover:border-purple-200 hover:-translate-y-1 hover:shadow-lg">
                        <item.icon className="text-purple-600 mt-1 flex-shrink-0 text-base" />
                        <div>
                          <div className="font-bold text-purple-950 text-sm">{item.text}</div>
                          <div className="text-xs text-purple-700/70">{item.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm text-black rounded-3xl shadow-xl p-6 relative overflow-hidden flex-grow animate-fade-up animation-delay-400 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                     <FaLayerGroup className="text-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-950 uppercase">7-Stage Workflow</h3>
                </div>
                
                <div className="relative space-y-4">
                  <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-purple-100 group-hover:bg-purple-300 transition-colors duration-500"></div>

                  {workflowSteps.map((step, idx) => (
                    <div key={idx} className="relative flex items-start gap-4 group/step hover:pl-2 transition-all duration-300">
                      <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center font-bold text-purple-700 group-hover/step:border-pink-500 group-hover/step:text-white group-hover/step:bg-pink-500 transition-all duration-300 shadow-sm text-sm">
                        {idx + 1}
                      </div>
                      <div className="bg-white p-3 rounded-xl border-2 border-purple-50 flex-grow shadow-sm group-hover/step:border-purple-200 group-hover/step:shadow-md transition-all">
                        <h5 className="font-bold text-purple-950 text-base mb-0.5">{step.title}</h5>
                        <p className="text-purple-800/70 text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>


          <div className="lg:col-span-5 relative sticky top-8 flex flex-col gap-6 h-full">
            
            <div className="relative p-[3px] rounded-[2rem] bg-gradient-to-b from-pink-400 via-purple-500 to-indigo-600 shadow-2xl shadow-purple-900/50 animate-fade-up animation-delay-600 group hover:shadow-purple-500/40 transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] group-hover:animate-shimmer rounded-[2rem] pointer-events-none"></div>

              <div className="bg-purple-950 rounded-[1.8rem] overflow-hidden relative">
                
                <div className="p-6 pb-4 border-b border-white/10 relative z-10 bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <FaCrown className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] animate-pulse" />
                    <span className="text-[10px] font-bold text-purple-200 tracking-[0.2em] uppercase">Limited Offer</span>
                  </div>
                  <div className="flex items-center">
                    <h3 className="text-3xl font-extrabold text-white leading-none tracking-tight">
                      BOOK<br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">YOUR SLOT</span>
                    </h3>

                    <div className="ml-auto flex flex-col items-center px-5 py-2 rounded-3xl bg-yellow-500/20 border-2 border-yellow-400/50 backdrop-blur-sm shadow-xl drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]">
                      <div className="flex items-center gap-2 -mb-1">
                        <span className="text-xs line-through text-white/50 font-bold">₹7,000</span>
                        <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter animate-pulse">50% OFF</span>
                      </div>
                      <span className="text-3xl font-extrabold text-yellow-400 leading-tight">₹3,500</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-bold">
                    <div className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30 backdrop-blur-sm shadow-inner uppercase text-[10px]">100k+ Reach</div>
                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-400/30 backdrop-blur-sm shadow-inner uppercase text-[10px]">100% Growth</div>
                  </div>
                </div>

                <div className="p-6 pt-6 bg-white text-black relative z-10">
                  <form onSubmit={handlePayment} className="space-y-4">
                    <div className="text-center mb-6">
                      <h4 className="font-bold text-lg mb-1 text-purple-950 uppercase tracking-tighter">Booking Details</h4>
                      <p className="text-[10px] text-purple-700 uppercase tracking-widest font-semibold">
                        Secure Payment Gateway
                      </p>
                    </div>

                    {['Business Name', 'Owner Name', 'Phone Number', 'Business Email'].map((placeholder, idx) => {
                      const icons = [FaGem, FaUsers, FaPhoneAlt, FaEnvelope];
                      const names = ['businessName', 'ownerName', 'phone', 'email'] as const;
                      const Icon = icons[idx];
                      
                      return (
                        <div key={idx} className="group/input">
                          <label className="text-[10px] font-bold text-purple-800 uppercase tracking-wider ml-3 mb-1 block group-focus-within/input:text-pink-600 transition-colors">
                            {placeholder}
                          </label>
                          <div className="relative flex items-center">
                            <div className="absolute left-0 pl-4 text-purple-400 group-focus-within/input:text-pink-600 transition-colors">
                              <Icon className="text-sm" />
                            </div>
                            <input 
                              type={names[idx] === 'email' ? 'email' : names[idx] === 'phone' ? 'tel' : 'text'} 
                              name={names[idx]} 
                              required 
                              placeholder={`Enter ${placeholder}`}
                              value={formData[names[idx]] || ""} 
                              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border-2 border-purple-100 focus:border-pink-500 focus:ring-4 focus:ring-pink-100/50 outline-none transition-all text-sm font-bold text-purple-950 placeholder-purple-200 shadow-sm"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      );
                    })}

                    <div className="flex items-start gap-3 px-2 py-2 group/terms">
                      <div className="relative flex items-center mt-0.5">
                        <input 
                          type="checkbox" 
                          id="acceptedTerms"
                          name="acceptedTerms"
                          required
                          checked={!!formData.acceptedTerms} 
                          onChange={handleChange}
                          className="w-4 h-4 rounded border-2 border-purple-200 text-purple-600 focus:ring-purple-500 accent-purple-600 cursor-pointer transition-all"
                        />
                      </div>
                      <label htmlFor="acceptedTerms" className="text-[11px] leading-tight font-bold text-purple-900 cursor-pointer select-none">
                        I agree to the <Link href="/terms" className="text-pink-600 hover:underline decoration-pink-300 decoration-2 underline-offset-2">Terms & Conditions</Link> and <Link href="/privacy" className="text-pink-600 hover:underline decoration-pink-300 decoration-2 underline-offset-2">Privacy Policy</Link> of Best of Amravati.
                      </label>
                    </div>

                    <button 
                      type="submit"
                      disabled={isLoading || !formData.acceptedTerms}
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-xl shadow-purple-900/20 hover:shadow-purple-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale"
                    >
                      {!isLoading && (
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                      )}
                      
                      <span className="relative z-10 flex items-center gap-2 text-base">
                         {isLoading ? "Processing..." : <>Pay ₹3,500 <FaArrowRight className="group-hover:translate-x-1 transition-transform" /></>}
                      </span>
                    </button>
                    <div className="text-center mt-3">
                      <p className="text-[10px] text-purple-700 font-bold uppercase flex items-center justify-center gap-1.5"><FaLock className="text-green-500" /> SSL Encrypted Payment</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden border border-white/20 flex-grow flex flex-col justify-center animate-fade-up animation-delay-800 hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 blur-3xl rounded-full pointer-events-none animate-pulse"></div>
              <h4 className="font-bold mb-6 text-lg text-center relative z-10 uppercase tracking-widest">Your Brand Featured On</h4>
              
              <div className="flex justify-center items-center gap-8 relative z-10">
                <div className="flex flex-col items-center gap-2 group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 transition-all duration-300 shadow-lg border border-white/30 hover:scale-110">
                    <FaInstagram className="text-2xl" />
                  </div>
                  <span className="text-[10px] opacity-90 font-bold uppercase tracking-wider">Instagram</span>
                </div>

                <div className="flex flex-col items-center gap-2 group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg border border-white/30 hover:scale-110">
                      <FaFacebook className="text-2xl" />
                  </div>
                  <span className="text-[10px] opacity-90 font-bold uppercase tracking-wider">Facebook</span>
                </div>

                <div className="flex flex-col items-center gap-2 group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:text-red-600 transition-all duration-300 shadow-lg border border-white/30 hover:scale-110">
                    <FaYoutube className="text-2xl" />
                  </div>
                  <span className="text-[10px] opacity-90 font-bold uppercase tracking-wider">Shorts</span>
                </div>
              </div>
              
              <div className="mt-6 text-center text-xs text-purple-100 border-t border-white/20 pt-4 relative z-10 font-bold uppercase tracking-widest">
                Combined Reach: <span className="text-yellow-300 font-extrabold text-base ml-1 animate-pulse">1,00,000+ Views</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(150%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes enter {
          from { opacity: 0; transform: scale(0.9) translateY(-20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes leave {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.9); }
        }
        .animate-enter { animation: enter 0.5s ease-out forwards; }
        .animate-leave { animation: leave 0.5s ease-in forwards; }
      `}</style>
    </section>
  );
}
