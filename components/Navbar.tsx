"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0); 

  // Defined logo path here
  const logoPath = "/nav-logo.png";

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Business", href: "#proposal" },
    { name: "About Us", href: "#about" },
    { name: "Connect", href: "#footer" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-purple-100 shadow-sm transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          
        {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
           <div className="relative w-20 h-8 md:w-24 md:h-10 lg:w-32 lg:h-12">
              <Image 
                src={logoPath}  // Usage of variable in {}
                alt="Best Of Amravati Logo" 
                fill
                className="object-contain object-left group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Desktop Get Started Button */}
            <Link 
              href="#proposal"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm md:text-base"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-4 pb-4 border-t border-purple-50 pt-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="font-medium text-gray-700 hover:text-purple-600 pl-2 border-l-2 border-transparent hover:border-purple-600 transition-all"
                onClick={() => setIsOpen(false)} 
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Get Started Button */}
            <Link 
              href="#proposal"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md mt-2 block"
            >
              Get Started
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}