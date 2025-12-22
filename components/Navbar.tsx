"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaHandshake, FaBriefcase, FaInfoCircle, FaEnvelope, FaUserPlus, FaTimes } from 'react-icons/fa';

// Custom Modern Menu Icon
const CustomMenuIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="4" cy="6" r="1" fill="currentColor" stroke="none" />
    <line x1="9" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="15" y2="18" />
    <circle cx="20" cy="18" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const logo = {
    src: "/boanav.svg",
    alt: "Best Of Amravati Logo"
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const showNavbar = () => setIsVisible(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        showNavbar();
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', showNavbar);
    window.addEventListener('mousedown', showNavbar);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', showNavbar);
      window.removeEventListener('mousedown', showNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home", icon: FaHome },
    { name: "Services", href: "#services", icon: FaHandshake },
    { name: "Business", href: "#proposal", icon: FaBriefcase },
    { name: "About Us", href: "#about", icon: FaInfoCircle },
    { name: "Contact", href: "#footer", icon: FaEnvelope },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm transition-transform duration-500 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <div className="relative transition-transform duration-300 group-hover:scale-105 w-24 h-9 lg:w-28 lg:h-10">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain object-left" priority />
              </div>
            </Link>

            {/* Desktop & Tablet Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <div className="flex items-center gap-4 lg:gap-8 mr-2 lg:mr-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-medium text-[14px] lg:text-[15px] text-gray-700 hover:text-purple-600 transition-colors relative group whitespace-nowrap"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
              
              <div className="flex items-center gap-2 lg:gap-3">
                <Link
                  href="#hiring"
                  className="text-purple-600 border-2 border-purple-600 px-3 lg:px-5 py-1.5 rounded-full font-semibold hover:bg-purple-50 transition-all text-xs lg:text-sm whitespace-nowrap"
                >
                  Join Us
                </Link>

                <Link
                  href="#proposal"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 lg:px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-200/50 hover:-translate-y-0.5 transition-all text-xs lg:text-sm whitespace-nowrap"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <button className="md:hidden text-gray-700 p-2 hover:bg-purple-50 rounded-lg" onClick={toggleMenu}>
              <CustomMenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[60] transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* HEADER SWAPPED: Logo is now first (left) and Cross button is second (right) */}
        <div className="p-6 flex items-center justify-between border-b border-purple-50">
          <div className="relative w-24 h-8">
            <Image src={logo.src} alt={logo.alt} fill className="object-contain object-left" />
          </div>
          <button onClick={toggleMenu} className="p-2 text-gray-500 hover:bg-red-50 hover:text-red-500 rounded-full transition-all">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-grow py-6 px-4 space-y-2 overflow-y-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-4 px-4 py-3.5 text-gray-600 font-semibold rounded-2xl transition-all group hover:bg-purple-100/80 hover:text-purple-700 active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-600" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="p-6 border-t border-purple-50 flex flex-col gap-3">
          <Link
            href="#hiring"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full border-2 border-purple-600 text-purple-600 px-6 py-3.5 rounded-2xl font-bold active:scale-95 transition-all"
          >
            <FaUserPlus className="mr-2" />
            Join Us
          </Link>

          <Link
            href="#proposal"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-purple-200/40 active:scale-95 transition-all"
          >
            Get Started
          </Link>
        </div>
      </aside>
    </>
  );
}