"use client";

import { useState } from "react";
// Imports kept to ensure no breaking changes if used elsewhere or re-added later
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri'; 
import {
  TrendingUp,
  Award,
  Globe,
  Target,
  Layers,
  Star,
  Camera,
  ShieldCheck,
  BarChart4,
  CheckCircle,
  Users,
  RefreshCw,
  Shield,
  MessageSquare,
  ChevronDown,
  Search,
  Clock,
  Rocket,
  MessageCircle,
  Calendar,
  BarChart,
  Target as TargetIcon,
  Cpu,
  PieChart,
  Sparkles,
  MapPin,
  Heart
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function SocialMediaHandlingPage() {
  // STATE
  const [activePlan, setActivePlan] = useState("premium");

  // Case Studies/Results
  const caseStudies = [
    {
      business: "Café Delight",
      industry: "Food & Beverage",
      growth: "320%",
      metric: "Instagram Followers",
      period: "3 Months",
      highlights: ["10 Viral Reels", "5K+ New Customers", "₹8L+ Additional Revenue"],
      color: "bg-gradient-to-br from-amber-400 to-orange-500"
    },
    {
      business: "Urban Fitness",
      industry: "Health & Wellness",
      growth: "450%",
      metric: "Lead Generation",
      period: "4 Months",
      highlights: ["15K Video Views Avg.", "200+ New Members", "₹12L+ MRR Increase"],
      color: "bg-gradient-to-br from-emerald-400 to-teal-600"
    },
    {
      business: "Style Hub",
      industry: "Fashion Retail",
      growth: "280%",
      metric: "Online Sales",
      period: "2 Months",
      highlights: ["8 Product Launch Campaigns", "12K+ Engagement Rate", "₹15L+ Sales Boost"],
      color: "bg-gradient-to-br from-pink-400 to-rose-600"
    }
  ];

  // Tools & Technology
  const tools = [
    { icon: <BarChart />, name: "Analytics", tools: ["Google Analytics", "Sprout Social", "Hootsuite Insights"] },
    { icon: <TargetIcon />, name: "Scheduling", tools: ["Buffer", "Later", "Meta Business Suite"] },
    { icon: <Cpu />, name: "Design", tools: ["Adobe Creative Suite", "Canva Pro", "Figma"] },
    { icon: <PieChart />, name: "Monitoring", tools: ["Brandwatch", "Mention", "Social Mention"] },
    { icon: <Sparkles />, name: "AI Tools", tools: ["ChatGPT", "Midjourney", "Descript"] }
  ];

  return (
    <>
    <Navbar />
      {/* --- MAIN CONTENT --- */}
      <main className="pt-24 min-h-screen relative overflow-hidden bg-[#fffaf2]">
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        {/* HERO SECTION */}
        <motion.section
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto px-6 text-center py-24 relative z-10"
        >
          <div className="flex flex-col items-center gap-4 mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-200 bg-white/80 backdrop-blur-md shadow-sm"
            >
              <Award size={16} className="text-purple-600" />
              <span className="text-purple-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
                Advertising & Marketing
              </span>
            </motion.div>
            <div className="flex gap-3">
              {["Built for Growth. Powered by Performance."].map((word, i) => (
                <motion.span key={word} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + (i * 0.1) }} className="text-[10px] font-black uppercase tracking-widest text-gray-600">
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="relative inline-block px-4 md:px-16">
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-5xl md:text-8xl font-black text-gray-900 leading-[1.05] tracking-tight relative z-10">
              Build Your Brand <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent text-6xl">
                with the help of Digital Media
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            As a premier digital media initiative,
            <span className="font-extrabold text-gray-900 relative pb-1">
              <span className="relative z-10"> Best Of Amravati </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-full"></span>
            </span>
            orchestrates multi-platform content strategies that elevate local entrepreneurs into authoritative, digitally-native brands.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-20"
          >
            <div className="relative">
              {/* Results Showcase Card - WIDENED TO max-w-6xl */}
              <div className="bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-xl rounded-[3rem] p-10 border border-white/80 shadow-2xl max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-6 shadow-sm">
                    <BarChart className="text-blue-600" size={20} />
                    <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Real Results, Real Impact</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                    Transform Your Social Presence with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Management</span>
                  </h3>
                  <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    We don't just post content—we build communities, drive conversations, and deliver measurable business growth across every platform.
                  </p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4">
                  {/* Card 1: Strategic Content Planning */}
                  <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Rocket className="text-white" size={28} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-extrabold text-gray-900 text-xl tracking-tight">Strategic Content Planning</h4>
                      <span className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-wider mb-2">
                        Data-driven calendars
                      </span>
                      <p className="text-gray-600 leading-relaxed pt-2">
                        Weekly optimized posting schedules tailored to your audience's peak engagement times and platform algorithms.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Performance Analytics */}
                  <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <TrendingUp className="text-white" size={28} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-extrabold text-gray-900 text-xl tracking-tight">Performance Analytics</h4>
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2">
                        Monthly Reporting
                      </span>
                      <p className="text-gray-600 leading-relaxed pt-2">
                        Comprehensive performance tracking with actionable insights to continually optimize your social strategy.
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Community Engagement */}
                  <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <MessageCircle className="text-white" size={28} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-extrabold text-gray-900 text-xl tracking-tight">Community Engagement</h4>
                      <span className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-2">
                        Daily Interaction
                      </span>
                      <p className="text-gray-600 leading-relaxed pt-2">
                        Real-time response to comments, messages, and mentions to build authentic relationships with your audience.
                      </p>
                    </div>
                  </div>

                  {/* Card 4: Campaign Management */}
                  <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Target className="text-white" size={28} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-extrabold text-gray-900 text-xl tracking-tight">Campaign Management</h4>
                      <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-2">
                        Strategic Ad Spend
                      </span>
                      <p className="text-gray-600 leading-relaxed pt-2">
                        Target advertising and promotional campaigns designed to reach your ideal customers and drive conversions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-10 flex items-center">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
                  <div className="px-8">
                    <div className="flex items-center gap-2">
                      <Globe className="text-blue-500" size={20} />
                      <span className="text-blue-600 font-semibold text-sm">Complete Platform Coverage</span>
                    </div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
                </div>

              {/* Platform Badges - FIXED TO ONE LINE */}
              <div className="flex flex-row justify-center items-center gap-4 mt-6 overflow-x-auto pb-4 no-scrollbar">
                {[
                  { name: "Instagram", icon: <FaInstagram size={18} />, color: "purple" },
                  { name: "Facebook", icon: <FaFacebookF size={18} />, color: "blue" },
                  { name: "YouTube", icon: <FaYoutube size={18} />, color: "red" },
                  { name: "LinkedIn", icon: <FaLinkedinIn size={18} />, color: "blue" },
                  { name: "Google", icon: <FaGoogle size={18} />, color: "green" },
                  { name: "X", icon: <RiTwitterXFill size={18} />, color: "blue" }
                ].map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex-shrink-0"
                  >
                    <div
                      className={`
                        flex items-center gap-3 px-5 py-3 rounded-full 
                        bg-white/80 backdrop-blur-md border border-gray-200
                        shadow-md hover:shadow-xl hover:-translate-y-1 
                        transition-all duration-300
                      `}
                    >
                      <div
                        className={`
                          w-10 h-10 rounded-full flex items-center justify-center 
                          transition-all duration-300 group-hover:scale-110
                          ${platform.color === "purple" ? "bg-purple-100 group-hover:bg-purple-600" : ""}
                          ${platform.color === "blue" ? "bg-blue-100 group-hover:bg-blue-600" : ""}
                          ${platform.color === "red" ? "bg-red-100 group-hover:bg-red-600" : ""}
                          ${platform.color === "green" ? "bg-green-100 group-hover:bg-green-600" : ""}
                        `}
                      >
                        <span className="text-gray-700 group-hover:text-white transition-all">
                          {platform.icon}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-800 text-sm group-hover:tracking-wide transition-all">
                        {platform.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              </div>

            </div>
          </motion.div>
        </motion.section>

        {/* DIGITAL MEDIA PILLARS SECTION */}
        <section id="pillars" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-purple-100 mb-6">
              <Layers className="text-purple-600" size={18} />
              <span className="text-purple-600 font-black text-xs uppercase tracking-[0.3em]">Core Competencies</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Digital Edge</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto font-medium">
              Three pillars that define our comprehensive digital media approach
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Pillar 1: Content Creation */}
            <motion.div variants={fadeInUp} className="bg-white/60 backdrop-blur-md p-10 rounded-[2.5rem] border border-white shadow-xl transition-all hover:-translate-y-3 hover:shadow-2xl group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-purple-700 transition-all">
                <div className="relative">
                  <Camera className="text-purple-600 group-hover:text-white transition-colors" size={32} />

                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <span className="text-purple-600 font-black text-xs uppercase tracking-[0.3em]">Pillar 01</span>
              </div>
              <h3 className="font-black text-2xl text-gray-900 tracking-tight mb-4">Premium Content Creation</h3>
              <p className="text-gray-600 mt-3 leading-relaxed font-medium">
                Studio-grade video production, professional photography, and strategic content design that captures your brand's essence and converts viewers into customers.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs font-bold rounded-full">4K Cinematic</span>
                  <span className="px-3 py-1.5 bg-pink-50 text-pink-700 text-xs font-bold rounded-full">Professional Editing</span>
                  <span className="px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold rounded-full">Brand Storytelling</span>
                </div>
              </div>
            </motion.div>

            {/* Pillar 2: Strategy & Distribution */}
            <motion.div variants={fadeInUp} className="bg-white/60 backdrop-blur-md p-10 rounded-[2.5rem] border border-white shadow-xl transition-all hover:-translate-y-3 hover:shadow-2xl group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-pink-600 group-hover:to-pink-700 transition-all">
                <div className="relative">
                  <TrendingUp className="text-pink-600 group-hover:text-white transition-colors" size={32} />

                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[3px] bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
                <span className="text-pink-600 font-black text-xs uppercase tracking-[0.3em]">Pillar 02</span>
              </div>
              <h3 className="font-black text-2xl text-gray-900 tracking-tight mb-4">Strategic Distribution</h3>
              <p className="text-gray-600 mt-3 leading-relaxed font-medium">
                Multi-platform optimization, algorithm mastery, and data-driven distribution ensuring your content reaches the right audience at the right time for maximum impact.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">Platform Strategy</span>
                  <span className="px-3 py-1.5 bg-green-50 text-green-700 text-xs font-bold rounded-full">Audience Growth</span>
                  <span className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs font-bold rounded-full">Performance Analytics</span>
                </div>
              </div>
            </motion.div>

            {/* Pillar 3: Management & Optimization */}
            <motion.div variants={fadeInUp} className="bg-white/60 backdrop-blur-md p-10 rounded-[2.5rem] border border-white shadow-xl transition-all hover:-translate-y-3 hover:shadow-2xl group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-orange-600 group-hover:to-orange-700 transition-all">
                <div className="relative">
                  <ShieldCheck className="text-orange-600 group-hover:text-white transition-colors" size={32} />

                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[3px] bg-gradient-to-r from-orange-500 to-purple-500 rounded-full"></div>
                <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em]">Pillar 03</span>
              </div>
              <h3 className="font-black text-2xl text-gray-900 tracking-tight mb-4">Complete Management</h3>
              <p className="text-gray-600 mt-3 leading-relaxed font-medium">
                End-to-end social media management including community engagement, performance monitoring, and continuous optimization to build lasting brand authority.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">Community Building</span>
                  <span className="px-3 py-1.5 bg-teal-50 text-teal-700 text-xs font-bold rounded-full">Engagement Strategy</span>
                  <span className="px-3 py-1.5 bg-red-50 text-red-700 text-xs font-bold rounded-full">ROI Optimization</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Media Impact Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {/* Metric 1 - Engagement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center p-7 bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-lg rounded-3xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                <Heart className="text-white" size={20} />
              </div>
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">3.7x</div>
              <p className="text-gray-800 font-semibold text-sm mb-1">Higher Engagement</p>
              <p className="text-gray-500 text-xs">Than industry average</p>
            </motion.div>

            {/* Metric 2 - Growth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center p-7 bg-gradient-to-br from-white/90 to-green-50/50 backdrop-blur-lg rounded-3xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                <TrendingUp className="text-white" size={20} />
              </div>
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">42%</div>
              <p className="text-gray-800 font-semibold text-sm mb-1">Follower Growth</p>
              <p className="text-gray-500 text-xs">Monthly average increase</p>
            </motion.div>

            {/* Metric 3 - Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center p-7 bg-gradient-to-br from-white/90 to-orange-50/50 backdrop-blur-lg rounded-3xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                <Calendar className="text-white" size={20} />
              </div>
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">500+</div>
              <p className="text-gray-800 font-semibold text-sm mb-1">Content Pieces</p>
              <p className="text-gray-500 text-xs">Monthly across platforms</p>
            </motion.div>

            {/* Metric 4 - Response */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center p-7 bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-lg rounded-3xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                <Clock className="text-white" size={20} />
              </div>
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">30 min</div>
              <p className="text-gray-800 font-semibold text-sm mb-1">Response Time</p>
              <p className="text-gray-500 text-xs">Average customer response</p>
            </motion.div>
          </motion.div>

          {/* Supporting Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-4">
              <CheckCircle className="text-blue-600" size={16} />
              <span className="text-blue-600 font-semibold text-sm">Trusted by industry leaders</span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our data-driven approach to social media management consistently delivers measurable results that translate to real business growth.
            </p>
          </motion.div>
        </section>

        {/* UPDATED PLATFORMS SHOWCASE SECTION */}
        <section id="platforms" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          {/* Animated Background */}
          <div className="absolute inset-0 rounded-[4rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 via-pink-100/30 to-blue-100/20"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-100/20 to-yellow-100/10"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-green-100/10 to-emerald-100/5"></div>

            {/* Animated particles/dots */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, width: `${Math.random() * 40 + 20}px`,
                    height: `${Math.random() * 40 + 20}px`, background: `radial-gradient(circle, 
                        ${['rgba(168, 85, 247, 0.15)', 'rgba(236, 72, 153, 0.15)', 'rgba(59, 130, 246, 0.15)', 'rgba(34, 197, 94, 0.15)'][Math.floor(Math.random() * 4)]}
                        0%, transparent 70%)`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content Container with Glass Effect */}
          <div className="relative bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-2xl rounded-[4rem] p-8 md:p-12 border border-white/50 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-purple-200/50 mb-8">
                <Globe className="text-purple-600" size={20} />
                <span className="text-purple-600 font-black text-sm uppercase tracking-[0.3em]">Local Market Reach</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8">
                Connect with Amravati's <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">Digital Audience</span>
              </h2>
              <p className="text-gray-700 text-xl max-w-3xl mx-auto font-medium">
                We tap into Maharashtra's active social media user base to grow your local presence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Instagram",
                  icon: <FaInstagram className="text-white" size={28} />,
                  stats: "25,000+ Active Users",
                  location: "In Amravati, Maharashtra",
                  desc: "Visual Storytelling & Reels for Local Engagement",
                  color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500",
                  bgColor: "bg-gradient-to-br from-purple-50/80 to-pink-50/80",
                  borderColor: "border-purple-200/50"
                },
                {
                  name: "Facebook",
                  icon: <FaFacebookF className="text-white" size={28} />,
                  stats: "45,000+ Monthly Active",
                  location: "Across Maharashtra",
                  desc: "Community Building & Local Business Ads",
                  color: "bg-gradient-to-br from-blue-600 to-blue-800",
                  bgColor: "bg-gradient-to-br from-blue-50/80 to-indigo-50/80",
                  borderColor: "border-blue-200/50"
                },
                {
                  name: "YouTube",
                  icon: <FaYoutube className="text-white" size={28} />,
                  stats: "18,000+ Daily Viewers",
                  location: "Maharashtra Region",
                  desc: "Video Content & Local Business Shorts",
                  color: "bg-gradient-to-br from-red-600 to-red-700",
                  bgColor: "bg-gradient-to-br from-red-50/80 to-orange-50/80",
                  borderColor: "border-red-200/50"
                },
                {
                  name: "LinkedIn",
                  icon: <FaLinkedinIn className="text-white" size={28} />,
                  stats: "12,000+ Professionals",
                  location: "Maharashtra Network",
                  desc: "B2B & Professional Networking",
                  color: "bg-gradient-to-br from-blue-500 to-blue-700",
                  bgColor: "bg-gradient-to-br from-blue-50/80 to-cyan-50/80",
                  borderColor: "border-blue-200/50"
                },
                {
                  name: "X", 
                  icon: <RiTwitterXFill className="text-white" size={28} />,
                  stats: "8,000+ Local Engagements",
                  location: "Amravati Conversations",
                  desc: "Real-time Updates & Local Digital Trends",
                  color: "bg-gradient-to-br from-black to-gray-800",
                  bgColor: "bg-gradient-to-br from-gray-50/80 to-gray-100/80",
                  borderColor: "border-gray-200/50"
                },

              ].map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`${platform.bgColor} backdrop-blur-xl rounded-[2.5rem] p-8 border ${platform.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 h-full hover:-translate-y-3 flex flex-col`}>
                    <div className="flex items-start gap-6 mb-8">
                      <div className={`${platform.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0`}>
                        {platform.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-black text-2xl text-gray-900 mb-3">{platform.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="text-green-500" size={18} />
                          <span className="font-black text-gray-900 text-sm md:text-base">{platform.stats}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="text-purple-500" size={14} />
                          <span className="text-gray-600 text-sm font-medium">{platform.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="mt-6">
                      <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50">
                        <p className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">{platform.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* GOOGLE ANALYTICS HIGHLIGHT SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-xl rounded-[3rem] p-10 border border-blue-200/50 shadow-xl">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 mb-6">
                      <Search className="text-blue-600" size={20} />
                      <span className="text-blue-600 font-black text-sm uppercase tracking-wider">Google Ecosystem Integration</span>
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-6">
                      Complete Google Platform Optimization
                    </h3>
                    <p className="text-gray-700 font-medium text-lg mb-8">
                      We leverage Google's complete suite of tools to track, analyze, and optimize your digital presence across all touchpoints in Amravati.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { label: "Search Console", value: "SEO Monitoring", icon: <BarChart4 className="text-blue-500" size={18} /> },
                        { label: "Google Tag Manager", value: "Event Tracking", icon: <Layers className="text-blue-500" size={18} /> },
                        { label: "Google Maps", value: "Local Visibility", icon: <MapPin className="text-blue-500" size={18} /> },
                        { label: "Google Reviews", value: "Reputation Management", icon: <Star className="text-blue-500" size={18} /> }
                      ].map((item, i) => (
                        <div key={i} className="bg-white/80 p-5 rounded-2xl border border-blue-100 flex items-center gap-4">
                          {item.icon}
                          <div>
                            <h4 className="font-black text-gray-900">{item.label}</h4>
                            <p className="text-gray-600 text-sm">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[2.5rem] p-10 text-white shadow-2xl">
                      <div className="text-center mb-8">
                        <div className="text-5xl font-black mb-3">Google Impact</div>
                        <p className="text-blue-100 text-lg">Amravati Market Performance Metrics</p>
                      </div>
                      <div className="space-y-5">
                        {[
                          { label: "Local Search Visibility", value: "94%", color: "from-blue-900 to-blue-700" },
                          { label: "Maps Click-Through Rate", value: "42%", color: "from-blue-900 to-blue-700" },
                          { label: "Review Response Time", value: "< 6h", color: "from-blue-900 to-blue-700" },
                          { label: "Ad Conversion Rate", value: "18.7%", color: "from-blue-900 to-blue-700" }
                        ].map((stat, i) => (
                          <div key={i} className="flex items-center justify-between p-4 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/15 transition-colors">
                            <span className="font-medium text-base">{stat.label}</span>
                            <span className={`font-black text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Platform Strategy Grid */}
        <section id="strategy" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-100 mb-6">
              <Layers className="text-purple-600" size={18} />
              <span className="text-purple-700 font-bold text-sm">PLATFORM SPECIALIZATION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Platform-Perfect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Strategies</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We don't use a one-size-fits-all approach. Each platform receives customized strategies for maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                platform: "Instagram",
                strategy: "Visual Storytelling & Reels",
                color: "from-purple-500 to-pink-500",
                icon: <FaInstagram className="text-white" size={20} />,
                focus: ["Reels Optimization", "Story Engagement", "Carousel Education", "IG Shopping"],
                stat: "89% engagement increase"
              },
              {
                platform: "LinkedIn",
                strategy: "B2B Authority Building",
                color: "from-blue-500 to-blue-700",
                icon: <FaLinkedinIn className="text-white" size={20} />,
                focus: ["Thought Leadership", "Industry Networking", "Lead Generation", "Recruitment"],
                stat: "3x more qualified leads"
              },
              {
                platform: "Facebook",
                strategy: "Community & Conversion",
                color: "from-blue-600 to-blue-800",
                icon: <FaFacebookF className="text-white" size={20} />,
                focus: ["Group Management", "Local Targeting", "Event Promotion", "Reviews & Testimonials"],
                stat: "67% conversion lift"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900">{item.platform}</h3>
                    <p className="text-gray-500 text-sm">{item.strategy}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Strategy Focus:</h4>
                  <ul className="space-y-2">
                    {item.focus.map((focusItem, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></div>
                        <span className="text-sm">{focusItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Average Result:</span>
                    <span className="font-bold text-green-600">{item.stat}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}