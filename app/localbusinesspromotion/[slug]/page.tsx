"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import {
  Star,
  ArrowLeft,
  Phone,
  MessageCircle,
  Send,
  PlayCircle,
  CheckCircle2,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import ProductionNavbar from "@/components/ProductionNavbar";

// All categories from the image
const ALL_CATEGORIES = [
  { slug: "food-and-beverages", label: "Food & Beverages" },
  { slug: "fashion-and-lifestyle", label: "Fashion & Lifestyle" },
  { slug: "health-and-wellness", label: "Health & Wellness" },
  { slug: "education-and-skills", label: "Education & Skills" },
  { slug: "home-and-decor", label: "Home & Decor" },
  { slug: "services-and-tech", label: "Services & Tech" },
  { slug: "events-and-media", label: "Events & Media" },
  { slug: "automobiles", label: "Automobiles" },
];

// Sub-categories for each main category
const SUB_CATEGORIES_MAP: Record<string, { id: string; label: string }[]> = {
  "food-and-beverages": [
    { id: "overview", label: "Overview" },
    { id: "restaurants", label: "Restaurants" },
    { id: "cafes", label: "Cafes" },
    { id: "bakeries", label: "Bakeries" },
    { id: "food-trucks", label: "Food Trucks" },
  ],
  "fashion-and-lifestyle": [
    { id: "overview", label: "Overview" },
    { id: "clothing", label: "Clothing" },
    { id: "accessories", label: "Accessories" },
    { id: "footwear", label: "Footwear" },
    { id: "jewelry", label: "Jewelry" },
  ],
  "health-and-wellness": [
    { id: "overview", label: "Overview" },
    { id: "gyms", label: "Gyms" },
    { id: "yoga-studios", label: "Yoga Studios" },
    { id: "spas", label: "Spas" },
    { id: "nutritionists", label: "Nutritionists" },
  ],
  "education-and-skills": [
    { id: "overview", label: "Overview" },
    { id: "tutoring", label: "Tutoring" },
    { id: "courses", label: "Courses" },
    { id: "workshops", label: "Workshops" },
    { id: "online-learning", label: "Online Learning" },
  ],
  "home-and-decor": [
    { id: "overview", label: "Overview" },
    { id: "furniture", label: "Furniture" },
    { id: "interior-design", label: "Interior Design" },
    { id: "home-improvement", label: "Home Improvement" },
    { id: "decoratives", label: "Decoratives" },
  ],
  "services-and-tech": [
    { id: "overview", label: "Overview" },
    { id: "it-services", label: "IT Services" },
    { id: "repairs", label: "Repairs" },
    { id: "consulting", label: "Consulting" },
    { id: "software", label: "Software" },
  ],
  "events-and-media": [
    { id: "overview", label: "Overview" },
    { id: "event-planners", label: "Event Planners" },
    { id: "photography", label: "Photography" },
    { id: "video-production", label: "Video Production" },
    { id: "social-media", label: "Social Media" },
  ],
  "automobiles": [
    { id: "overview", label: "Overview" },
    { id: "car-dealers", label: "Car Dealers" },
    { id: "service-centers", label: "Service Centers" },
    { id: "spare-parts", label: "Spare Parts" },
    { id: "accessories", label: "Accessories" },
  ],
};

// Business data for all categories (10+ per category)
const businessData: Record<string, any[]> = {
  "food-and-beverages": [
    {
      businessSlug: "spice-route-amravati",
      name: "Spice Route Amravati",
      brand: "Authentic Local Cuisine",
      rating: 4.8,
      reviewCount: 156,
      yearsInBusiness: "12 Years in Hospitality",
      location: "Ravi Kiran Colony, Amravati",
      status: "OPEN NOW",
      desc: "Professionally showcasing your business story through traditional spices and unique local flavors.",
      phone: "+91 7666266137",
      usp: "Top Rated",
      type: "restaurants"
    },
    {
      businessSlug: "the-caffeine-hub",
      name: "The Caffeine Hub",
      brand: "Premium Coffee Experience",
      rating: 4.5,
      reviewCount: 89,
      yearsInBusiness: "5 Years in Service",
      location: "Near DPS, Amravati",
      status: "CLOSING SOON",
      desc: "Modern store ambiance with the city's best roasted coffee, perfect for high-engagement reels.",
      phone: "+91 7666266137",
      usp: "Top Choice",
      type: "cafes"
    },
    {
      businessSlug: "urban-bakery",
      name: "Urban Bakery",
      brand: "Artisan Breads & Pastries",
      rating: 4.7,
      reviewCount: 203,
      yearsInBusiness: "8 Years in Business",
      location: "City Center, Amravati",
      status: "OPEN NOW",
      desc: "Freshly baked goods daily with Instagram-worthy presentation and customer experience.",
      phone: "+91 9876543210",
      usp: "Fresh Daily",
      type: "bakeries"
    },
    {
      businessSlug: "street-bites",
      name: "Street Bites",
      brand: "Authentic Street Food",
      rating: 4.3,
      reviewCount: 112,
      yearsInBusiness: "3 Years in Service",
      location: "Food Street, Amravati",
      status: "OPEN NOW",
      desc: "Bringing traditional street food to social media with vibrant, mouth-watering content.",
      phone: "+91 9876543211",
      usp: "Local Favorite",
      type: "food-trucks"
    },
    {
      businessSlug: "green-leaf-cafe",
      name: "Green Leaf Cafe",
      brand: "Healthy & Organic",
      rating: 4.6,
      reviewCount: 98,
      yearsInBusiness: "4 Years in Hospitality",
      location: "Gandhi Nagar, Amravati",
      status: "OPEN NOW",
      desc: "Health-conscious cafe with photogenic dishes perfect for lifestyle influencers.",
      phone: "+91 9876543212",
      usp: "Organic Focus",
      type: "cafes"
    },
    {
      businessSlug: "royal-darbar",
      name: "Royal Darbar",
      brand: "Fine Dining Experience",
      rating: 4.9,
      reviewCount: 267,
      yearsInBusiness: "15 Years in Hospitality",
      location: "VIP Road, Amravati",
      status: "OPEN NOW",
      desc: "Luxurious dining experience with traditional decor that creates stunning visual content.",
      phone: "+91 9876543213",
      usp: "Premium Dining",
      type: "restaurants"
    },
    {
      businessSlug: "juice-bar",
      name: "Fresh Juice Bar",
      brand: "100% Natural Juices",
      rating: 4.4,
      reviewCount: 76,
      yearsInBusiness: "2 Years in Service",
      location: "Market Area, Amravati",
      status: "OPEN NOW",
      desc: "Colorful, healthy juice combinations that are perfect for vibrant social media posts.",
      phone: "+91 9876543214",
      usp: "100% Natural",
      type: "cafes"
    },
    {
      businessSlug: "pizza-corner",
      name: "Pizza Corner",
      brand: "Italian Specialties",
      rating: 4.2,
      reviewCount: 145,
      yearsInBusiness: "6 Years in Business",
      location: "Mohan Nagar, Amravati",
      status: "OPEN NOW",
      desc: "Artisanal pizzas with cheese pulls that create viral food content opportunities.",
      phone: "+91 9876543215",
      usp: "Cheese Specialists",
      type: "restaurants"
    },
    {
      businessSlug: "dessert-paradise",
      name: "Dessert Paradise",
      brand: "Sweet Treats & More",
      rating: 4.7,
      reviewCount: 189,
      yearsInBusiness: "7 Years in Service",
      location: "Sai Nagar, Amravati",
      status: "CLOSING SOON",
      desc: "Decadent desserts that are visually stunning and perfect for dessert influencer content.",
      phone: "+91 9876543216",
      usp: "Sweet Experts",
      type: "bakeries"
    },
    {
      businessSlug: "bbq-nation",
      name: "BBQ Nation",
      brand: "Live Grill Experience",
      rating: 4.5,
      reviewCount: 223,
      yearsInBusiness: "10 Years in Hospitality",
      location: "Commercial Complex, Amravati",
      status: "OPEN NOW",
      desc: "Interactive dining with live grills that create engaging and shareable food moments.",
      phone: "+91 9876543217",
      usp: "Live Cooking",
      type: "restaurants"
    },
  ],
  "fashion-and-lifestyle": [
    {
      businessSlug: "style-studio",
      name: "Style Studio",
      brand: "Trendy Fashion Hub",
      rating: 4.6,
      reviewCount: 134,
      yearsInBusiness: "5 Years in Fashion",
      location: "Fashion Street, Amravati",
      status: "OPEN NOW",
      desc: "Latest fashion trends with perfect lighting for try-on haul videos and outfit inspiration.",
      phone: "+91 9876543218",
      usp: "Trend Leaders",
      type: "clothing"
    },
    {
      businessSlug: "accessory-world",
      name: "Accessory World",
      brand: "Fashion Accessories",
      rating: 4.4,
      reviewCount: 89,
      yearsInBusiness: "3 Years in Business",
      location: "Mall Road, Amravati",
      status: "OPEN NOW",
      desc: "Curated accessories that add the perfect finishing touch to any fashion influencer's content.",
      phone: "+91 9876543219",
      usp: "Style Finishers",
      type: "accessories"
    },
    // Add 8 more fashion businesses...
  ],
  "health-and-wellness": [
    {
      businessSlug: "fit-life-gym",
      name: "Fit Life Gym",
      brand: "Premium Fitness Center",
      rating: 4.7,
      reviewCount: 178,
      yearsInBusiness: "8 Years in Wellness",
      location: "Wellness Complex, Amravati",
      status: "OPEN NOW",
      desc: "State-of-the-art equipment and perfect lighting for fitness transformation content.",
      phone: "+91 9876543220",
      usp: "Modern Equipment",
      type: "gyms"
    },
    {
      businessSlug: "yoga-harmony",
      name: "Yoga Harmony",
      brand: "Peace & Balance Studio",
      rating: 4.9,
      reviewCount: 156,
      yearsInBusiness: "6 Years in Service",
      location: "Peace Avenue, Amravati",
      status: "OPEN NOW",
      desc: "Serene yoga studio with natural lighting perfect for mindfulness and wellness content.",
      phone: "+91 9876543221",
      usp: "Mindful Space",
      type: "yoga-studios"
    },
    // Add 8 more wellness businesses...
  ],
  "education-and-skills": [
    {
      businessSlug: "smart-learning",
      name: "Smart Learning",
      brand: "Educational Excellence",
      rating: 4.8,
      reviewCount: 245,
      yearsInBusiness: "10 Years in Education",
      location: "Education Hub, Amravati",
      status: "OPEN NOW",
      desc: "Modern learning environment perfect for educational content and student success stories.",
      phone: "+91 9876543222",
      usp: "Proven Results",
      type: "tutoring"
    },
    // Add 9 more education businesses...
  ],
  "home-and-decor": [
    {
      businessSlug: "home-elegance",
      name: "Home Elegance",
      brand: "Modern Home Solutions",
      rating: 4.5,
      reviewCount: 167,
      yearsInBusiness: "7 Years in Decor",
      location: "Home Decor Street, Amravati",
      status: "OPEN NOW",
      desc: "Beautifully staged home decor perfect for before-after transformation content.",
      phone: "+91 9876543223",
      usp: "Elegant Designs",
      type: "furniture"
    },
    // Add 9 more home decor businesses...
  ],
  "services-and-tech": [
    {
      businessSlug: "tech-support",
      name: "Tech Support Pro",
      brand: "IT Solutions Provider",
      rating: 4.6,
      reviewCount: 189,
      yearsInBusiness: "9 Years in Tech",
      location: "Tech Park, Amravati",
      status: "OPEN NOW",
      desc: "Professional tech services with visual explainer content that demystifies technology.",
      phone: "+91 9876543224",
      usp: "Expert Solutions",
      type: "it-services"
    },
    // Add 9 more tech businesses...
  ],
  "events-and-media": [
    {
      businessSlug: "event-masters",
      name: "Event Masters",
      brand: "Professional Event Planning",
      rating: 4.7,
      reviewCount: 203,
      yearsInBusiness: "12 Years in Events",
      location: "Event Street, Amravati",
      status: "OPEN NOW",
      desc: "Stunning event setups perfect for venue tours and behind-the-scenes event content.",
      phone: "+91 9876543225",
      usp: "Stress-Free Planning",
      type: "event-planners"
    },
    // Add 9 more events businesses...
  ],
  "automobiles": [
    {
      businessSlug: "auto-excellence",
      name: "Auto Excellence",
      brand: "Premium Car Dealership",
      rating: 4.8,
      reviewCount: 278,
      yearsInBusiness: "15 Years in Automobiles",
      location: "Auto Mile, Amravati",
      status: "OPEN NOW",
      desc: "Showroom with perfect lighting for car walkarounds and feature highlight videos.",
      phone: "+91 9876543226",
      usp: "Trusted Dealer",
      type: "car-dealers"
    },
    // Add 9 more automobile businesses...
  ],
};

// Helper function to generate business data for remaining categories
const generateBusinesses = (categorySlug: string, count: number) => {
  const categories = ALL_CATEGORIES;
  const currentCategory = categories.find(cat => cat.slug === categorySlug);
  
  if (!currentCategory) return [];
  
  const types = SUB_CATEGORIES_MAP[categorySlug]?.filter(t => t.id !== 'overview').map(t => t.id) || [];
  
  return Array.from({ length: count }, (_, i) => ({
    businessSlug: `${categorySlug}-business-${i + 1}`,
    name: `${currentCategory.label.split(' ')[0]} Business ${i + 1}`,
    brand: `${currentCategory.label} Excellence`,
    rating: 4.0 + Math.random() * 1.0,
    reviewCount: Math.floor(Math.random() * 200) + 50,
    yearsInBusiness: `${Math.floor(Math.random() * 15) + 1} Years in ${currentCategory.label.split('&')[0].trim()}`,
    location: `${["Main Street", "City Center", "Market Area", "Commercial Complex"][i % 4]}, Amravati`,
    status: i % 3 === 0 ? "OPEN NOW" : "CLOSING SOON",
    desc: `Professional ${currentCategory.label.toLowerCase()} services with perfect setup for engaging social media content and business storytelling.`,
    phone: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    usp: ["Top Rated", "Expert Service", "Quality Focus", "Best Value"][i % 4],
    type: types[i % types.length] || types[0]
  }));
};

// Fill all categories with businesses
ALL_CATEGORIES.forEach(category => {
  if (!businessData[category.slug] || businessData[category.slug].length < 10) {
    const existing = businessData[category.slug] || [];
    const needed = 10 - existing.length;
    businessData[category.slug] = [...existing, ...generateBusinesses(category.slug, needed)];
  }
});

export default function CategoryDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const [activeTab, setActiveTab] = useState("overview");

  const subCategories = SUB_CATEGORIES_MAP[slug] || [{ id: "overview", label: "Overview" }];
  
  const allBusinesses = businessData[slug] || [];
  const filteredBusinesses = activeTab === "overview" 
    ? allBusinesses 
    : allBusinesses.filter(biz => biz.type === activeTab);

  const displayTitle = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "Local Businesses";

  // Get the actual label from ALL_CATEGORIES
  const categoryLabel = ALL_CATEGORIES.find(cat => cat.slug === slug)?.label || displayTitle;

  return (
    <div className="min-h-screen flex flex-col">
      <style jsx global>{`
        @keyframes verified-shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          20%, 100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        .animate-shine { position: relative; overflow: hidden; }
        .animate-shine::after {
          content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.6), transparent);
          animation: verified-shine 3s infinite;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Trusted badge glow effect */
        .trusted-glow {
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.1);
          animation: pulse-glow 2s infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.1); }
          50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.5), 0 0 60px rgba(34, 197, 94, 0.2); }
        }
      `}</style>

      <ProductionNavbar />

      {/* Main Content */}
      <section className="relative overflow-hidden bg-[#FAF9FF] pt-24 md:pt-30">
        <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
          
          {/* Header Section */}
          <div className="mb-12">
            {/* Back Button */}
            <div className="mb-8 pt-4">
              <Link 
                href="/localbusinesspromotion" 
                className="inline-flex items-center text-gray-500 hover:text-gray-800 group transition-colors relative z-30">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-semibold">Back to Explore</span>
              </Link>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#D8328C] to-[#8E34D2] bg-clip-text text-transparent pb-4 leading-tight">
              {categoryLabel}
            </h1>

            {/* Tabs */}
            <div className="inline-flex items-center p-1.5 bg-white/60 backdrop-blur-md rounded-2xl border border-gray-100 shadow-sm mt-6 overflow-x-auto no-scrollbar">
              {subCategories.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 md:px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                      isActive 
                        ? "bg-gradient-to-r from-[#D8328C] to-[#8E34D2] text-white shadow-md scale-105" 
                        : "text-gray-500 hover:text-gray-800 hover:bg-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Business Cards */}
          <div className="space-y-10">
            {filteredBusinesses.length > 0 ? (
              filteredBusinesses.map((biz, idx) => (
                <Link key={idx} href={`/localbusinesspromotion/${slug}/${biz.businessSlug}`} className="block relative group">
                  
                  {/* TRUSTED BADGE */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 trusted-glow">
                    <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">
                      Trusted
                    </span>
                    <CheckCircle2 className="text-green-600" size={14} />
                  </div>

                  <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 relative">
                    
                    {/* Media Section */}
                    <div className="md:w-80 bg-[#E5E7EB] relative group overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                          <PlayCircle className="text-white w-8 h-8" />
                        </div>
                      </div>
                      <div className="min-h-[240px] flex flex-col items-center justify-center text-gray-500 px-6">
                        <span className="text-sm font-bold opacity-60">Creative Reel</span>
                        <span className="text-[10px] font-black tracking-tighter">30–60 SEC SHOT</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl md:text-2xl font-black text-[#111827] tracking-tight">{biz.name}</h3>
                          <div className="animate-shine rounded-full flex-shrink-0">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#0095f6]" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22.5 12.5c0-1.58-.8-3.04-2.12-3.88.45-1.5-.06-3.18-1.25-4.22-1.18-1.05-2.83-1.35-4.3-.82-.84-1.32-2.3-2.12-3.88-2.12-1.58 0-3.04.8-3.88 2.12-1.47-.53-3.12-.23-4.3.82-1.19 1.04-1.7 2.72-1.25 4.22C.3 9.46-.5 10.92-.5 12.5c0 1.58.8 3.04 2.12 3.88-.45 1.5.06 3.18 1.25 4.22 1.18 1.05 2.83 1.35 4.3.82.84 1.32 2.3 2.12 3.88 2.12 1.58 0 3.04-.8 3.88-2.12 1.47.53 3.12.23 4.3-.82 1.19-1.04 1.7-2.72 1.25-4.22 1.32-.84 2.12-2.3 2.12-3.88z" />
                              <path d="M10.3 16.5l-3.8-3.8 1.4-1.4 2.4 2.4 5.4-5.4 1.4 1.4-6.8 6.8z" fill="white" />
                            </svg>
                          </div>
                        </div>

                        <div className="space-y-2 mb-6 text-[13px] text-gray-500 font-bold uppercase tracking-wide">
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-blue-500" /> 
                            <span className="truncate">{biz.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={14} className="text-blue-500" />
                            <span className="text-[#16A34A]">{biz.status}</span>
                            <span className="text-gray-300">•</span> 
                            <span className="truncate">{biz.yearsInBusiness}</span>
                          </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed italic mb-6 border-l-4 border-gray-50 pl-4 font-medium">"{biz.desc}"</p>
                      </div>

                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                          <div className="bg-[#16A34A] text-white px-2.5 py-1 rounded-lg text-xs font-black flex items-center gap-1 shadow-sm">
                            {biz.rating.toFixed(1)} <Star size={10} fill="currentColor" />
                          </div>
                          <span className="text-gray-400 text-[11px] font-black uppercase tracking-widest">{biz.reviewCount} Verified Ratings</span>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              // WhatsApp functionality
                              window.open(`https://wa.me/${biz.phone.replace(/\D/g, '')}`, '_blank');
                            }}
                            className="bg-[#25D366] text-white px-4 md:px-6 py-3 rounded-2xl font-bold flex items-center gap-2 text-sm shadow-md hover:brightness-105 transition-all flex-1 md:flex-none justify-center"
                          >
                            <MessageCircle size={18} /> WhatsApp
                          </button>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              // Phone call functionality
                              window.location.href = `tel:${biz.phone}`;
                            }}
                            className="bg-[#111827] text-white px-4 md:px-6 py-3 rounded-2xl font-bold flex items-center gap-2 text-sm shadow-md hover:bg-black transition-all flex-1 md:flex-none justify-center"
                          >
                            <Phone size={18} /> Call Now
                          </button>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              // Enquiry functionality
                              const subject = `Enquiry for ${biz.name}`;
                              const body = `Hello, I'm interested in your services. Please contact me regarding ${biz.name}.`;
                              window.location.href = `mailto:info@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                            }}
                            className="md:ml-auto bg-[#2563EB] text-white px-6 md:px-8 py-3 rounded-2xl font-bold flex items-center gap-2 text-sm shadow-lg hover:bg-[#1D4ED8] transition-all w-full md:w-auto justify-center"
                          >
                            <Send size={18} /> Enquiry
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
              
            ) : (
              <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-gray-100">
                <p className="text-gray-400 font-bold uppercase tracking-widest">Coming soon to this category</p>
              </div>
            )}
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}