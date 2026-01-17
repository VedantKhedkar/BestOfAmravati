// app/business-collaboration/page.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle,
  Handshake,
  Target,
  Users,

  TrendingUp,
  Award,
  Send,
  Building,
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Zap,
  Sparkles,
  BarChart3,
  Globe,
  ShieldCheck,
  LayoutGrid,
  Star,
  ArrowUpRight,
  Plus,
  ChevronDown,
  HelpCircle
} from 'lucide-react';

export default function BusinessCollaborationPage() {
  // State for form
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    collaborationType: '',
    message: ''
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Collaboration request submitted! We will contact you soon.');
    setFormData({
      name: '',
      business: '',
      email: '',
      phone: '',
      collaborationType: '',
      message: ''
    });
  };

  // Handle form changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Benefits data
  const [openFaq, setOpenFaq] = useState(null);

const faqs = [
  { q: "Is there a membership fee for partners?", a: "We offer both free community partnerships and premium featured collaborations depending on your brand's needs and desired visibility level." },
  { q: "How long does the onboarding take?", a: "Once your proposal is accepted, our team typically develops the initial strategy and integration plan within 5-7 business days." },
  { q: "Can small startups collaborate too?", a: "Absolutely. We are committed to growing the local Amravati ecosystem. We have specific frameworks designed for early-stage startups and local artisans." },
  { q: "What data/reporting do you provide?", a: "Partners receive a monthly performance summary highlighting reach, engagement metrics, and referral traffic generated through the collaboration." }
];
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Mutual Growth',
      description: 'Expand your market reach through shared resources and combined expertise'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Network Expansion',
      description: 'Connect with new business partners and potential clients in Amravati'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Partnerships',
      description: 'Align with businesses that complement your offerings and values'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Brand Credibility',
      description: 'Enhance your reputation through trusted collaborations'
    }
  ];

  // Collaboration types data
  const collaborationTypes = [
    'Joint Marketing Campaigns',
    'Cross-Promotion Initiatives',
    'Event Partnerships',
    'Product/Service Bundling',
    'Referral Programs',
    'Community Projects',
    'Industry Alliances',
    'Co-branded Ventures'
  ];

  // Process steps data
  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We discuss your business goals and identify collaboration opportunities'
    },
    {
      number: '02',
      title: 'Partner Matching',
      description: 'We connect you with suitable businesses in Amravati'
    },
    {
      number: '03',
      title: 'Strategy Development',
      description: 'Create a customized collaboration plan'
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'Execute the collaboration with ongoing support'
    },
    {
      number: '05',
      title: 'Growth & Recognition',
      description: 'Measure success and celebrate achievements together'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Amravati Food Court',
      quote: 'The collaboration helped us reach 40% more customers in just 3 months.',
      initial: 'R'
    },
    {
      name: 'Priya Sharma',
      business: 'Urban Fashion Store',
      quote: 'Our partnership increased brand awareness across Amravati significantly.',
      initial: 'P'
    },
    {
      name: 'Amit Patel',
      business: 'Tech Solutions Inc.',
      quote: 'Strategic collaboration opened doors to new markets and opportunities.',
      initial: 'A'
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900">

      {/* --- NEW THEME BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>


      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Modern Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-200/30 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-200/30 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Column: Content */}
            <div className="text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/50 border border-purple-200 text-purple-700 backdrop-blur-sm">
                <Handshake className="w-4 h-4" />
                <span className="text-[11px] font-bold tracking-widest uppercase">Growth Network 2024</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
                Grow Together. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  Win Together.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Unlock exclusive B2B opportunities in Amravati. We connect your brand with
                strategic partners to amplify your reach and double your impact.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {/* Primary Action: Gradient with subtle inner glow and slide-up effect */}
                <Link
                  href="#collaboration-form"
                  className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl transition-all duration-300 ease-out hover:shadow-[0_10px_20px_-10px_rgba(147,51,234,0.5)] hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  {/* Subtle Shine Overlay */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                  <span className="relative flex items-center gap-2">
                    Partner With Us
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>

                {/* Secondary Action: Minimalist border-trace effect */}
                <Link
                  href="#explore"
                  className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-gray-700 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:border-purple-300 hover:bg-purple-50/30 hover:text-purple-700 active:scale-[0.98]"
                >
                  Explore Network
                </Link>
              </div>

              {/* Quick Proof Points */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Partner" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  Joined by <span className="text-purple-600 font-bold">50+ Local Brands</span>
                </p>
              </div>
            </div>

            {/* Right Column: Visual Elements */}
            <div className="relative lg:block hidden">
              {/* Main "Glass" Card */}
              <div className="relative z-10 p-8 rounded-3xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-gray-500 text-sm">Monthly Reach</p>
                    <h3 className="text-3xl font-bold text-gray-900">+125% Growth</h3>
                  </div>
                  <div className="p-3 bg-green-100 rounded-2xl text-green-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="font-semibold text-gray-700">Verified Partnerships</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                      <Users className="w-5 h-5" />
                    </div>
                    <p className="font-semibold text-gray-700">Shared Audience Access</p>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Circles */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }} />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600 rounded-full opacity-10 animate-pulse" />
            </div>

          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">

          {/* Section Header with "Floating" Element */}
          <div className="relative text-center mb-20">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-10 blur-3xl bg-purple-500 w-64 h-64 rounded-full -z-10" />

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-sm border border-purple-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-gray-600 uppercase">
                The Network Advantage
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              High-Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500">Growth Tools</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
              Everything you need to dominate the local market and build a brand that lasts.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

            {/* 1. Large Feature Card (Spans 3 columns) */}
            <div className="md:col-span-3 group relative bg-gradient-to-br from-purple-600 to-indigo-700 p-10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <Target className="w-40 h-40 text-white" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Precision Targeting</h3>
                <p className="text-purple-100 text-base max-w-sm leading-relaxed">
                  Reach the exact audience you need. Our partnership network uses local data to put your brand in front of high-intent customers in Amravati.
                </p>
              </div>
            </div>

            {/* 2. Standard Card (Spans 3 columns) */}
            <div className="md:col-span-3 group relative bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2">
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-pink-500 group-hover:text-white transition-all duration-500 shadow-inner">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Revenue Acceleration</h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  Convert collaborations into capital. Our partners see an average 40% increase in referral traffic within the first three months.
                </p>
              </div>
            </div>

            {/* 3. Small Feature Card (Spans 2 columns) */}
            <div className="md:col-span-2 group bg-gray-50/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white hover:bg-white transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900">Local Authority</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Gain instant credibility by aligning with Amravati's most trusted business names.
              </p>
            </div>

            {/* 4. Small Feature Card (Spans 2 columns) */}
            <div className="md:col-span-2 group bg-gray-50/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white hover:bg-white transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900">Verified Safety</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Every partner is vetted to ensure your brand reputation remains protected and prestigious.
              </p>
            </div>

            {/* 5. Small Feature Card (Spans 2 columns) */}
            <div className="md:col-span-2 group bg-gradient-to-br from-pink-500 to-rose-500 p-8 rounded-[2.5rem] transition-all duration-300">
              <div className="flex flex-col justify-center h-full text-center items-center">
                <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2">Ready to grow?</p>
                <h3 className="text-xl font-bold text-white mb-4">Join 50+ Partners</h3>
                <button className="px-6 py-2 bg-white text-pink-600 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                  Get Started
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Collaboration Types - Clean Glass Version */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* The background glows you already have - keeping them as the base */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/20 blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200/20 blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Types of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Collaborations</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Choose the partnership model that best fits your business goals in Amravati.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationTypes.map((type, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl border border-white/60 bg-white/40 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{type}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Strategic partnership focusing on mutual growth and local brand awareness through {type.toLowerCase()} initiatives.
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Modern Simple CTA Card */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-xl flex flex-col justify-center items-center text-center overflow-hidden">
              {/* Subtle internal glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />

              <h3 className="text-xl font-bold mb-2">Have a unique idea?</h3>
              <p className="text-purple-50 text-sm mb-6 opacity-90">We are open to custom collaboration models.</p>
              <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>



{/* Process Section */}
<section id="how-it-works" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-24">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full mb-6">
        <span className="text-[10px] font-black tracking-[0.2em] text-purple-600 uppercase">Our Strategy</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
        The Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Success</span>
      </h2>
    </div>

    <div className="relative">
      {/* Central Timeline Line */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-200 via-pink-400 to-transparent"></div>

      <div className="space-y-20">
        {processSteps.map((step, index) => (
          <div key={index} className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            
            {/* Card Content */}
            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-20 lg:text-right' : 'lg:pl-20'}`}>
              <div className="relative group bg-white/60 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(147,51,234,0.1)] transition-all duration-500">
                <div className={`text-sm font-black text-purple-600 mb-3 uppercase tracking-widest`}>Step {step.number}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{step.description}</p>
                
                {/* Subtle Decorative Gradient on Hover */}
                <div className="absolute top-0 left-0 w-2 h-0 bg-gradient-to-b from-purple-600 to-pink-500 group-hover:h-full transition-all duration-500 rounded-l-[2.5rem]" />
              </div>
            </div>

            {/* Central Circle Indicator */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-purple-50 shadow-xl z-20 hidden lg:flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center animate-pulse-slow">
                <span className="text-white text-[10px] font-bold">{step.number.replace('0', '')}</span>
              </div>
            </div>

            {/* Spacer for Desktop */}
            <div className="hidden lg:block lg:w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  {/* FAQ Section - Clean Accordion Style */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50 relative">
  <div className="max-w-3xl mx-auto">
    
    {/* Minimalist Header */}
    <div className="text-center mb-16">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-purple-50 rounded-2xl text-purple-600">
          <HelpCircle className="w-6 h-6" />
        </div>
      </div>
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Questions & Clarity</h2>
      <p className="text-gray-500 mt-2 font-medium">Everything you need to know about partnering with us.</p>
    </div>

    {/* Accordion List */}
    <div className="space-y-3">
      {faqs.map((item, i) => (
        <div 
          key={i} 
          className={`group border rounded-3xl transition-all duration-300 ${
            openFaq === i 
              ? "border-purple-200 bg-white shadow-xl shadow-purple-100/20" 
              : "border-gray-100 bg-gray-50/30 hover:border-gray-200"
          }`}
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left outline-none"
          >
            <span className={`font-bold text-sm sm:text-base transition-colors ${
              openFaq === i ? "text-purple-600" : "text-gray-700"
            }`}>
              {item.q}
            </span>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
              openFaq === i ? "rotate-180 text-purple-500" : "group-hover:text-gray-600"
            }`} />
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}>
            <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4 mx-2">
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Small Note */}
    <p className="text-center mt-12 text-gray-400 text-xs font-medium">
      Have a different question? <Link href="#collaboration-form" className="text-purple-600 hover:underline">Ask us directly</Link>
    </p>
  </div>
</section>

{/* Collaboration Form Section */}
<section id="collaboration-form" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
  <div className="max-w-4xl mx-auto">
    {/* Clean Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-600 rounded-full mb-4 text-[10px] font-bold tracking-widest uppercase border border-purple-100">
        <MessageSquare className="w-3 h-3" /> Get in Touch
      </div>
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Start a Collaboration</h2>
      <p className="text-lg text-gray-500 font-medium">Let's build something great together in Amravati</p>
    </div>

    {/* Refined Professional Form */}
    <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-xl p-8 md:p-14 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Name Field */}
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
            <input
              type="text" name="name" value={formData.name} onChange={handleChange} required
              className="w-full pl-12 pr-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/10 focus:border-purple-400 transition-all outline-none text-gray-700 placeholder:text-gray-300"
              placeholder="Enter your name"
            />
          </div>
        </div>

        {/* Business Name Field */}
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">Business Name</label>
          <div className="relative group">
            <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
            <input
              type="text" name="business" value={formData.business} onChange={handleChange} required
              className="w-full pl-12 pr-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-500/10 focus:border-pink-400 transition-all outline-none text-gray-700 placeholder:text-gray-300"
              placeholder="e.g. Amravati Retail"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Email Field */}
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
            <input
              type="email" name="email" value={formData.email} onChange={handleChange} required
              className="w-full pl-12 pr-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/10 focus:border-purple-400 transition-all outline-none text-gray-700 placeholder:text-gray-300"
              placeholder="name@company.com"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
            <input
              type="tel" name="phone" value={formData.phone} onChange={handleChange} required
              className="w-full pl-12 pr-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-500/10 focus:border-pink-400 transition-all outline-none text-gray-700 placeholder:text-gray-300"
              placeholder="+91 00000-00000"
            />
          </div>
        </div>
      </div>

      {/* Message Field */}
      <div className="mb-10 space-y-2">
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">Collaboration Idea</label>
        <textarea
          name="message" value={formData.message} onChange={handleChange} required rows="4"
          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/10 focus:border-purple-400 transition-all outline-none text-gray-700 placeholder:text-gray-300 resize-none"
          placeholder="Briefly describe how you'd like to partner with us..."
        ></textarea>
      </div>

      {/* Professional Submit Button */}
      <button
        type="submit"
        className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-2xl shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
      >
        <Send className="w-5 h-5" />
        Send Proposal
      </button>
      
      <p className="text-center mt-6 text-xs text-gray-400">
        Our strategy team usually responds within 24-48 business hours.
      </p>
    </form>
  </div>
</section>

      {/* Final CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8">Ready to Grow Together?</h2>
          <p className="text-xl text-gray-500 mb-12">Join hands with Amravati's leading businesses and unlock new opportunities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#collaboration-form"
              className="px-12 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xl hover:shadow-purple-200 transition-all transform hover:-translate-y-1"
            >
              Start a Partnership Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}