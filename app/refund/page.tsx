"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/components/Footer";

const content = [
  { heading: "1. Payment Terms", text: "Full payment of ₹3,500 is required for the 'Creative Reel Promotion Package' to book a slot and initiate the creative process." },
  { heading: "2. Performance-Based Refund", text: "Refunds are not issued for low performance; instead, the promotion is extended until the guaranteed reach targets are met." },
  { heading: "3. Cancellation Post-Shoot", text: "Once the media content collection phase (the shoot) has occurred, no refunds will be issued due to incurred labor and travel costs." },
  { heading: "4. Cancellation Pre-Shoot", text: "Cancellations before the media team visit may be subject to a small processing fee or rescheduling at management discretion." },
  { heading: "5. Force Majeure", text: "We are not liable for refunds due to service interruptions caused by platform outages (Instagram/Facebook/YouTube) or natural disasters." },
  { heading: "6. Approval Delays", text: "No refunds will be processed if timeline extensions are caused by client delays in providing feedback or approvals." },
  { heading: "7. Content Rejection", text: "Rejection based on creative preference after the initial concept agreement does not constitute grounds for a financial refund." },
  { heading: "8. Technical Issues", text: "Technical file corruption or distribution errors will be resolved with a replacement file or re-upload, not a financial refund." },
  { heading: "9. Business Closure", text: "If a business closes permanently during an active campaign, the service is considered fulfilled if the reel was already produced or posted." },
  { heading: "10. Dispute Resolution", text: "Financial disputes must be raised within 7 days of the invoice date for official review by BiZONANCE INDIA PVT LTD." }
];

export default function RefundPage() {
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
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Refund Policy</h1>
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