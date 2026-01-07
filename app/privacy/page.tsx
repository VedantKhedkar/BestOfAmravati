"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/components/Footer";

const content = [
  { heading: "1. Data Collection", text: "We collect the Business Name, Owner Name, and Contact Number solely for the purpose of campaign coordination and invoicing." },
  { heading: "2. Public Disclosure", text: "The client consents to having their business location, products, and specific offers publicly showcased to a local audience via social media." },
  { heading: "3. Media Rights", text: "The client grants BIZONANCE INDIA PVT LTD the right to film their premises, staff, and products for promotional purposes." },
  { heading: "4. Third-Party Platforms", text: "Content interaction is subject to the privacy policies of Meta (Instagram/Facebook) and Google (YouTube)." },
  { heading: "5. Insight Sharing", text: "We share performance insights and reach metrics directly with the business owner for full transparency regarding the campaign." },
  { heading: "6. Payment Information", text: "Payment details processed via our official UPI ID are handled securely for transaction verification." },
  { heading: "7. Content Authenticity", text: "The client warrants that all products and offers featured are genuine and available as advertised to the public." },
  { heading: "8. Archival Rights", text: "We retain the right to keep produced reels on digital channels to maintain guaranteed reach and portfolio records." },
  { heading: "9. Brand Association", text: "The client acknowledges their brand association with the 'Best of Amravati' trademark during the promotion period." },
  { heading: "10. Communication Consent", text: "The client agrees to receive campaign status communications via contact number or email until the completion of the service." }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] flex flex-col">
      <header className="bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="relative w-24 h-9 lg:w-28 lg:h-10">
              <Image src="/boanav.svg" alt="Best Of Amravati" fill className="object-contain" priority />
            </div>
          </Link>
          <Link href="/" className="text-[12px] font-bold bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full border border-white/10 flex items-center gap-2 tracking-widest transition-all">
            <FaArrowLeft className="text-[10px]" /> BACK TO HOME
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 flex-grow w-full">
        <div className="bg-white border border-gray-200 p-8 md:p-16 rounded-2xl shadow-sm">
          <div className="border-b border-gray-100 pb-8 mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-gray-500 italic">Last Updated: December 30, 2025</p>
          </div>
          <div className="space-y-10">
            {content.map((item, i) => (
              <div key={i}>
                <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">{item.heading}</h2>
                <p className="text-gray-600 text-lg leading-relaxed text-justify">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}