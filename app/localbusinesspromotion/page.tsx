"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Utensils,
  ShoppingBag,
  Heart,
  GraduationCap,
  Home,
  Settings,
  Camera,
  Car,
  Search,
} from "lucide-react";

import Footer from "@/components/Footer";
import ProductionNavbar from "@/components/ProductionNavbar";
import Navbar from "@/components/Navbar";

const categories = [
  { name: "Food & Beverages", slug: "food-and-beverages", icon: Utensils },
  { name: "Fashion & Lifestyle", slug: "fashion-and-lifestyle", icon: ShoppingBag },
  { name: "Health & Wellness", slug: "health-and-wellness", icon: Heart },
  { name: "Education & Skills", slug: "education-and-skills", icon: GraduationCap },
  { name: "Home & Decor", slug: "home-and-decor", icon: Home },
  { name: "Services & Tech", slug: "services-and-tech", icon: Settings },
  { name: "Events & Media", slug: "events-and-media", icon: Camera },
  { name: "Automobiles", slug: "automobiles", icon: Car },
];

export default function LocalBusinessPromotion() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />


      {/* 🌈 SECTION WITH BLOB THEME */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#faf5ff] to-[#fff1f2]">
        {/* 🔮 Animated Gradient Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000" />
        </div>

        <main className="relative z-10 max-w-7xl mx-auto px-6 py-28 flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
               Search Top 10 Trusted Business Listings of Amravati
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700">
              Where{" "}
              <span className="font-semibold text-purple-600">Excellence</span>{" "}
              Meets{" "}
              <span className="font-semibold text-pink-600">Recognition</span> 🏆
            </p>

            <p className="mt-3 text-gray-500">
              Discover top local business categories ✨
            </p>
          </div>

          {/* 🔍 SEARCH BAR */}
          <div className="relative w-full max-w-xl mb-16">
            <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm px-4 py-3">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search business categories"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                className="w-full outline-none text-sm text-gray-700"
              />
            </div>

            {/* Dropdown */}
            {showDropdown && query && (
              <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-20">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/localbusinesspromotion/${cat.slug}`}
                      onClick={() => setShowDropdown(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      {cat.name}
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-400">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 🧩 CATEGORY GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 w-full">
            {filteredCategories.map(({ slug, name, icon: Icon }) => (
              <Link
                key={slug}
                href={`/localbusinesspromotion/${slug}`}
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center py-6"
              >
                <Icon className="h-7 w-7 text-purple-600 group-hover:text-pink-500 mb-3 transition-colors" />
                <span className="text-xs font-semibold text-gray-700 text-center px-2">
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </main>
      </section>

      <Footer />
    </div>
  );
}
