"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
  Target,
  Users,
  Zap,
  Globe,
  BarChart3,
  MessageSquare,
  Newspaper,
  Sparkles,
  Rocket,
  ArrowRight,
  Crown,
  BadgeCheck,
  ChartNoAxesCombined,
  Megaphone,
  Video,
  Search,
  Star,
  Lightbulb,
  Calendar,
  PieChart,
  Award,
  Building,
  Quote,
  BarChart4,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Helper Component for Check Icon to resolve the undefined error
const CheckIcon = () => (
  <svg 
    className="w-4 h-4 text-purple-600 flex-shrink-0" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
  </svg>
);

// Animation Presets
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

export default function DigitalGrowthPR() {
  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
        
        {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        {/* =========================== */}
        {/* HERO SECTION */}
        {/* =========================== */}
        <section className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
            <div className="text-center">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-purple-200/50 mb-8"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  INTELLIGENT GROWTH PLATFORM
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
              >
                <span className="block text-gray-900">Digital Growth</span>
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Reimagined For the New Era
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
              >
                We merge <span className="font-bold text-gray-900">AI-driven analytics</span>, 
                <span className="font-bold text-gray-900"> strategic PR frameworks</span>, 
                and <span className="font-bold text-gray-900">high-performance storytelling</span> 
                to build brands that lead markets—not chase them.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Start Growth Journey
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </button>

                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-purple-200 text-gray-900 font-bold rounded-full hover:bg-white hover:border-purple-300 transition-all duration-300">
                  View Case Studies
                </button>
              </motion.div>

            </div>
          </div>
        </section>

        {/* =========================== */}
        {/* STRATEGIC PILLARS */}
        {/* =========================== */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <BrainCircuit className="text-purple-600" size={18} />
                <span className="text-sm font-bold text-purple-600">STRATEGIC PILLARS</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                The Four Pillars of  
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Next-Gen Growth
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[ 
                {
                  icon: Target,
                  title: "Precision Targeting",
                  desc: "AI-powered persona detection and audience segmentation",
                  stat: "92% Accuracy",
                },
                {
                  icon: Zap,
                  title: "Velocity Deployment",
                  desc: "Faster content-to-distribution pipelines with algorithmic optimization",
                  stat: "3.2x Faster",
                },
                {
                  icon: ShieldCheck,
                  title: "Trust Engineering",
                  desc: "Narrative design, PR placement, and credibility frameworks",
                  stat: "71% Trust Lift",
                },
                {
                  icon: TrendingUp,
                  title: "Exponential Scaling",
                  desc: "Automated growth loops and performance ecosystems",
                  stat: "412% Growth",
                },
              ].map((item, i) => (
                <motion.div  
                  key={i}
                  variants={scaleIn}
                  className="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
                >
                  <div className="w-16 h-16 p-3 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 mb-6">
                    <item.icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-sm">
                    {item.stat}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
{/* =========================== */}


{/* =========================== */}
{/* FULL-FUNNEL BREAKDOWN */}
{/* =========================== */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Gradient Container With Rounded Corners */}
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 rounded-[3rem] p-1">

      {/* Inner White Container (For Clean Borders) */}
      <div className="rounded-[2.7rem] bg-white/30 backdrop-blur-lg p-12">

        {/* Heading Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full mb-6">
            <BarChart3 className="text-white" size={18} />
            <span className="text-sm font-bold text-white">GROWTH FUNNEL</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white">
            The Full-Funnel  
            <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent ml-2">
              Growth Architecture
            </span>
          </h2>

          <p className="text-white/85 text-lg max-w-3xl mx-auto mt-4 font-medium">
            A complete mapping of Awareness → Engagement → Conversion → Advocacy.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              stage: "Awareness",
              icon: Megaphone,
              points: ["Mass visibility", "Media features", "Influencer push", "Top-of-funnel ads"],
              color: "from-purple-500 to-pink-500"
            },
            {
              stage: "Engagement",
              icon: MessageSquare,
              points: ["High-retention content", "Storytelling", "Community interaction", "Trust hooks"],
              color: "from-pink-500 to-rose-500"
            },
            {
              stage: "Conversion",
              icon: TrendingUp,
              points: ["Offer design", "Landing pages", "Retargeting", "Lead nurturing"],
              color: "from-purple-600 to-indigo-600"
            },
            {
              stage: "Advocacy",
              icon: Users,
              points: ["Testimonials", "UGC", "Referral loops", "Loyalty programs"],
              color: "from-pink-600 to-purple-600"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              initial="initial"
              whileInView="whileInView"
              className="p-8 bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all"
            >
              <div className={`w-14 h-14 p-3 bg-gradient-to-br ${item.color} rounded-xl text-white mb-4 flex items-center justify-center`}>
                <item.icon size={26} />
              </div>

              <h3 className="font-bold text-xl text-gray-900 mb-2">{item.stage}</h3>

              <ul className="space-y-2 mt-3">
                {item.points.map((p, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckIcon />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </div>

  </div>
</section>



{/* PR PLAYBOOKS – ADVANCED STRATEGY */}
{/* =========================== */}
<section className="py-24 bg-gradient-to-b from-white to-purple-50/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      className="text-center mb-20"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-6">
        <Sparkles className="text-pink-600" size={18} />
        <span className="text-sm font-bold text-pink-600">PR PLAYBOOKS</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-black text-gray-900">
        Strategic Playbooks  
        <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent ml-2">
          That Build Market Leaders
        </span>
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">
        Proven frameworks used by top-performing brands to dominate media,
        shape public perception, and engineer long-term trust.
      </p>
    </motion.div>

    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      className="grid md:grid-cols-3 gap-10"
    >
      {[
        {
          title: "Authority Acceleration",
          desc: "Turn your founders and brand into industry voices with PR placements, interviews & thought-leadership systems.",
          icon: Newspaper
        },
        {
          title: "Reputation Mastery",
          desc: "Psychology-backed trust signals, high-authority media mentions, influencer referencing & reputation loops.",
          icon: ShieldCheck
        },
        {
          title: "Market Penetration Engine",
          desc: "Localized PR, hyper-geo segmentation, cultural storytelling & regional media dominance.",
          icon: Globe
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={scaleIn}
          className="bg-white/80 backdrop-blur-md p-10 border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-2xl mb-6 flex items-center justify-center">
            <item.icon className="text-white" size={28} />
          </div>

          <h3 className="text-2xl font-black text-gray-900 mb-3">{item.title}</h3>
          <p className="text-gray-600 text-sm font-medium leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>





{/* =========================== */}
{/* BLOG / INSIGHTS SECTION */}
{/* =========================== */}
<section className="py-24 w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      className="text-center mb-20"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6">
        <Lightbulb className="text-white" size={18} />
        <span className="text-sm font-bold text-white">INSIGHTS</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-black text-white">
        Latest Insights &  
        <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent ml-2">
          Market Analysis
        </span>
      </h2>

      <p className="text-white/80 text-lg max-w-3xl mx-auto mt-4 font-medium">
        Expert breakdowns on PR, consumer psychology, market shifts, and emerging digital ecosystems.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          title: "PR is the New SEO: Why Authority Beats Keywords",
          tag: "PR Strategy",
        },
        {
          title: "Consumer Behavior in Tier-2 & Tier-3 Cities 2026",
          tag: "Market Research",
        },
        {
          title: "The Secret Psychology Behind Viral Storytelling",
          tag: "Content Psychology",
        },
      ].map((blog, index) => (
        <motion.div
          key={index}
          variants={scaleIn}
          initial="initial"
          whileInView="whileInView"
          className="bg-white/90 backdrop-blur-md border border-white/40 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
        >
          <span className="px-3 py-1 bg-purple-100 text-purple-600 font-bold text-xs rounded-full">
            {blog.tag}
          </span>

          <h3 className="mt-4 text-xl font-black text-gray-900 group-hover:text-purple-600 transition">
            {blog.title}
          </h3>

          <div className="mt-5 flex items-center gap-2 text-purple-600 font-bold">
            Read More <ArrowRight size={16} />
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

{/* =========================== */}
{/* MEDIA PUBLICATIONS */}
{/* =========================== */}
<section className="py-24 bg-gradient-to-b from-purple-50/40 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      className="text-center mb-20"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
        <Newspaper className="text-purple-600" size={18} />
        <span className="text-sm font-bold text-purple-600">FEATURED ON</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-black text-gray-900">
        Brands Featured In  
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-2">
          Top Media Publications
        </span>
      </h2>
    </motion.div>

    {/* Media Logo Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center opacity-90">
      {[
        "Forbes",
        "Times of India",
        "Economic Times",
        "Hindustan Times",
        "Business Today",
        "YourStory",
        "Mint",
        "NDTV"
      ].map((brand, idx) => (
        <motion.div
          key={idx}
          variants={scaleIn}
          initial="initial"
          whileInView="whileInView"
          className="text-gray-700 font-extrabold text-xl md:text-2xl opacity-70 hover:opacity-100 transition cursor-pointer text-center"
        >
          {brand}
        </motion.div>
      ))}
    </div>

  </div>
</section>


{/* =========================== */}
{/* AWARDS & RECOGNITIONS */}
{/* =========================== */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      className="text-center mb-20"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-6">
        <Award className="text-yellow-600" size={18} />
        <span className="text-sm font-bold text-yellow-600">AWARDS</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-black text-gray-900">
        Recognized By  
        <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent ml-2">
          Industry Leaders
        </span>
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          title: "Best Digital Strategy Developer 2025",
          org: "Startup India",
        },
        {
          title: "Top PR Transformation Agency",
          org: "Media Innovators Award",
        },
        {
          title: "Excellence in Brand Growth",
          org: "CXO Global Forum",
        },
      ].map((award, idx) => (
        <motion.div
          key={idx}
          variants={scaleIn}
          initial="initial"
          whileInView="whileInView"
          className="bg-white/80 backdrop-blur-md p-10 border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
        >
          <h3 className="text-2xl font-black mb-3 text-gray-900">
            {award.title}
          </h3>
          <p className="text-gray-600 font-medium">{award.org}</p>
        </motion.div>
      ))}
    </div>

  </div>
</section>


{/* =========================== */}
{/* TESTIMONIALS SLIDER */}
{/* =========================== */}
<section className="py-24 bg-gradient-to-b from-white to-purple-50/40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
        <Quote className="text-purple-600" size={18} />
        <span className="text-sm font-bold text-purple-600">TESTIMONIALS</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-black text-gray-900">
        Trusted By  
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-2">
          High-Growth Brands
        </span>
      </h2>
    </motion.div>

    {/* Carousel */}
    <motion.div
      className="flex overflow-x-auto no-scrollbar gap-6 pb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {[
        {
          name: "Rohit Sharma",
          role: "Founder - TechScale",
          msg: "Their PR + growth system helped us scale from 12k to 180k monthly traffic within 3 months.",
        },
        {
          name: "Ayushi Verma",
          role: "CEO - UrbanWell",
          msg: "We appeared in 14+ publications in 60 days. Our brand authority skyrocketed.",
        },
        {
          name: "Manav Kapoor",
          role: "Marketing Head - EcoLuxe",
          msg: "The storytelling frameworks and growth loops changed everything for us.",
        },
      ].map((t, idx) => (
        <motion.div
          key={idx}
          variants={scaleIn}
          initial="initial"
          whileInView="whileInView"
          className="min-w-[320px] md:min-w-[400px] 
                     bg-[#FFF9D9]/80 backdrop-blur-lg
                     border border-yellow-200/60
                     rounded-3xl p-8 shadow-xl
                     hover:shadow-2xl hover:scale-[1.02]
                     transition-all"
        >
          <p className="text-gray-800 text-lg leading-relaxed mb-4 font-medium">
            “{t.msg}”
          </p>

          <h4 className="text-xl font-bold text-gray-900">{t.name}</h4>
          <p className="text-sm text-gray-600">{t.role}</p>
        </motion.div>
      ))}
    </motion.div>

  </div>
</section>



{/* =========================== */}
{/* FAQ SECTION */}
{/* =========================== */}
<section className="py-24">
  <div className="max-w-5xl mx-auto px-6">

    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
        <Lightbulb className="text-purple-600" size={18} />
        <span className="text-sm font-bold text-purple-600">FAQ</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-black text-gray-900">
        Frequently Asked  
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-2">
          Questions
        </span>
      </h2>
    </motion.div>

    <div className="space-y-6">
      {[
        {
          q: "How long does it take to see measurable growth?",
          a: "Most brands see early visibility within 14 days, PR traction within 30–45 days, and exponential growth between 60–90 days.",
        },
        {
          q: "Do you offer PR + Digital Growth combined?",
          a: "Yes — our system is built as a unified engine mixing PR, content, storytelling, distribution, and growth analytics.",
        },
        {
          q: "Is this suitable for startups?",
          a: "Absolutely. We have dedicated playbooks for early-stage, seed, and scaling startups.",
        },
      ].map((f, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className="p-6 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md"
        >
          <h3 className="font-bold text-gray-900 text-lg mb-2">{f.q}</h3>
          <p className="text-gray-600">{f.a}</p>
        </motion.div>
      ))}
    </div>

  </div>
</section>


{/* =========================== */}
{/* FINAL CTA */}
{/* =========================== */}
<section className="py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="whileInView"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800 p-16 text-center shadow-2xl"
    >
      <Crown className="w-16 h-16 mx-auto mb-8 text-white/90" />

      <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
        Ready to Transform  
        <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent ml-2">
          Your Brand?
        </span>
      </h2>

      <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
        Join the fast-growing businesses who scaled visibility, authority, and revenue with our AI-powered PR + Growth ecosystem.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center">
          Schedule Strategy Call
          <ArrowRight size={20} />
        </button>

        <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/40 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300">
          Download Growth Blueprint
        </button>
      </div>
    </motion.div>
  </div>
</section>
    
    
        <Footer />
      </main>

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}