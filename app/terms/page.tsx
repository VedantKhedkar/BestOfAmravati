"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/components/Footer";

const content = [
  { heading: "1. Service Agreement", text: "By booking a slot, the client agrees to engage BIZONANCE INDIA PVT LTD for the creation and promotion of a 'Creative Reel' intended for digital distribution." },
  { heading: "2. Scope of Deliverables", text: "The service is strictly limited to one professionally shot and edited reel (30-60 seconds), professional caption writing, and a hashtag strategy." },
  { heading: "3. Platform Distribution", text: "The content will be distributed exclusively on the official 'Best of Amravati' handles for Instagram, Facebook, and YouTube Shorts." },
  { heading: "4. Reach Guarantee", text: "The company guarantees a minimum combined reach of 1,00,000+ views. This is a performance commitment to continue promotion until this metric is achieved." },
  { heading: "5. Client Cooperation", text: "The client must provide access to the business premises for the 'Business Visit' and 'Shoot' phases to facilitate the highlighting of store ambiance and products." },
  { heading: "6. Approval Process", text: "The edited content will be sent to the Business Owner for approval prior to posting." },
  { heading: "7. Pricing Validity", text: "The price of ₹3,500 per reel is fixed for the 'Creative Reel Promotion Package', with a guarantee of no hidden charges." },
  { heading: "8. Ownership of Reach", text: "The '1,00,000+ Reach' is defined as a cumulative figure across all utilized platforms." },
  { heading: "9. External Usage", text: "Upon completion, the client receives the reel file and is granted the right to post it on their own accounts." },
  { heading: "10. Management & Jurisdiction", text: "All services are professionally managed by BIZONANCE INDIA PVT LTD under the jurisdiction of Amravati, Maharashtra." }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-sans flex flex-col">
      <header className="bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="relative w-24 h-9 lg:w-28 lg:h-10">
              <Image src="/boanav.svg" alt="Logo" fill className="object-contain" priority />
            </div>
          </Link>
          <Link href="/" className="text-[12px] font-bold bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full border border-white/10 flex items-center gap-2 tracking-widest">
            <FaArrowLeft className="text-[10px]" /> BACK TO HOME
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 flex-grow w-full">
        <div className="bg-white border border-gray-200 p-8 md:p-16 rounded-2xl shadow-sm">
          <div className="border-b border-gray-100 pb-8 mb-10 text-center md:text-left">
            <span className="text-purple-600 font-bold uppercase tracking-widest text-xs">Legal Documentation</span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Terms of Service</h1>
            <p className="text-gray-500">Effective Date: <span className="font-medium">December 30, 2025</span></p>
          </div>
          <div className="space-y-12">
            {content.map((block, i) => (
              <div key={i}>
                <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">{block.heading}</h2>
                <p className="text-gray-600 text-lg leading-relaxed text-justify">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}