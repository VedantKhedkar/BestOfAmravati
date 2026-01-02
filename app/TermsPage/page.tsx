
    "use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function LegalPolicies() {
  const [activeSection, setActiveSection] = useState("terms");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (["terms", "privacy", "refund"].includes(hash)) {
      setActiveSection(hash);
    }
  }, []);

  const handleTabClick = (id: string) => {
    setActiveSection(id);
    window.history.pushState(null, "", `#${id}`);
  };

  const policyData = {
    terms: {
      title: "Terms of Service",
      updated: "December 30, 2025",
      content: [
        {
          heading: "1. Service Agreement",
          text: "By booking a slot, the client agrees to engage BIZONANCE INDIA PVT LTD for the creation and promotion of a 'Creative Reel' intended for digital distribution."
        },
        {
          heading: "2. Scope of Deliverables",
          text: "The service is strictly limited to one professionally shot and edited reel (30-60 seconds), professional caption writing, and a hashtag strategy."
        },
        {
          heading: "3. Platform Distribution",
          text: "The content will be distributed exclusively on the official 'Best of Amravati' handles for Instagram, Facebook, and YouTube Shorts."
        },
        {
          heading: "4. Reach Guarantee",
          text: "The company guarantees a minimum combined reach of 1,00,000+ views. This is a performance commitment to continue promotion until this metric is achieved."
        },
        {
          heading: "5. Client Cooperation",
          text: "The client must provide access to the business premises for the 'Business Visit' and 'Shoot' phases to facilitate the highlighting of store ambiance and products."
        },
        {
          heading: "6. Approval Process",
          text: "The edited content will be sent to the Business Owner for approval prior to posting. Any requested changes must be communicated immediately at this stage."
        },
        {
          heading: "7. Pricing Validity",
          text: "The price of ₹3,500 per reel is fixed for the 'Creative Reel Promotion Package', with a guarantee of no hidden charges. This includes shooting, editing, and posting."
        },
        {
          heading: "8. Ownership of Reach",
          text: "The '1,00,000+ Reach' is defined as a cumulative figure across all utilized platforms (Instagram, Facebook, YouTube), not a guarantee for a single specific platform."
        },
        {
          heading: "9. External Usage",
          text: "Upon completion, the client receives the reel file and is granted the right to post it on their own personal or business social media accounts."
        },
        {
          heading: "10. Management & Jurisdiction",
          text: "All services are professionally managed by BIZONANCE INDIA PVT LTD. Any disputes arising from this service agreement fall under the jurisdiction of Amravati, Maharashtra."
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      updated: "December 30, 2025",
      content: [
        {
          heading: "1. Data Collection",
          text: "We collect the Business Name, Owner Name, and Contact Number solely for the purpose of campaign coordination, invoicing, and verification."
        },
        {
          heading: "2. Public Disclosure",
          text: "By agreeing to this service, the client consents to having their business location, products, and specific offers publicly showcased to a local audience."
        },
        {
          heading: "3. Media Rights",
          text: "The client grants BIZONANCE INDIA PVT LTD the right to film their premises, staff, and products for the specific purpose of creating promotional content."
        },
        {
          heading: "4. Third-Party Platforms",
          text: "Content will be hosted on third-party platforms (Instagram, Facebook, YouTube); therefore, data interaction on those specific posts is subject to the privacy policies of Meta and Google."
        },
        {
          heading: "5. Insight Sharing",
          text: "We are committed to transparency and will share performance insights and reach metrics directly with the business owner."
        },
        {
          heading: "6. Payment Information",
          text: "Payment details processed via our official UPI ID (bizonanceindiapvtltd@sbi) are handled securely and used strictly for transaction verification."
        },
        {
          heading: "7. Content Authenticity",
          text: "The client warrants that all products, offers, and services featured in the reel are genuine and available as advertised to maintain the platform's trusted community status."
        },
        {
          heading: "8. Archival Rights",
          text: "BIZONANCE INDIA PVT LTD retains the right to keep the produced reel on its digital channels indefinitely to maintain the guaranteed reach and brand awareness."
        },
        {
          heading: "9. Brand Association",
          text: "The client acknowledges their brand will be associated with the 'Best of Amravati' trademark for the duration of the promotion."
        },
        {
          heading: "10. Communication Consent",
          text: "The client agrees to receive communications regarding the campaign status via the provided contact number or email (bestofamravati@gmail.com)."
        }
      ]
    },
    refund: {
      title: "Refund Policy",
      updated: "December 30, 2025",
      content: [
        {
          heading: "1. Payment Terms",
          text: "Full payment of ₹3,500 is expected regarding the 'Creative Reel Promotion Package' and serves as a slot booking fee."
        },
        {
          heading: "2. Performance-Based Refund",
          text: "As the package includes a 'Guaranteed Minimum Reach', refunds are not issued for low performance. Instead, the promotion period is extended until the 1,00,000+ reach target is achieved."
        },
        {
          heading: "3. Cancellation Post-Shoot",
          text: "Once the 'Shoot or Media Content Collection' phase has taken place, no refunds will be issued as labor and travel costs have already been incurred."
        },
        {
          heading: "4. Cancellation Pre-Shoot",
          text: "Cancellations made after booking but before the media team visits may be subject to a cancellation fee or rescheduling, at the discretion of the management."
        },
        {
          heading: "5. Force Majeure",
          text: "BIZONANCE INDIA PVT LTD is not liable for refunds due to service interruptions caused by platform outages (e.g., Instagram server down) or natural disasters in Amravati."
        },
        {
          heading: "6. Approval Delays",
          text: "No refunds will be processed if the project timeline is extended due to the client's delay in providing 'Approval from Business Owner'."
        },
        {
          heading: "7. Content Rejection",
          text: "If a client rejects the final edited reel based on creative preference after previously agreeing to the concept, a revision may be offered, but a monetary refund is not standard."
        },
        {
          heading: "8. Technical Issues",
          text: "If the reel file provided to the client is technically corrupt or unusable, a replacement file will be provided; this does not constitute grounds for a financial refund."
        },
        {
          heading: "9. Business Closure",
          text: "If the client's business permanently closes during the promotion campaign, the service is considered fulfilled if the reel was already posted."
        },
        {
          heading: "10. Dispute Resolution",
          text: "Any financial disputes regarding the 'value-focused' pricing must be raised within 7 days of the invoice date for review by BIZONANCE INDIA PVT LTD."
        }
      ]
    }
  };

  const activeData = policyData[activeSection as keyof typeof policyData];

  return (
      <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-sans flex flex-col">
      {/* --- COLORED HEADER --- */}
      <header className="bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-10 h-10 relative rounded-full border border-white/30 bg-white/10 p-1">
              <Image 
                src="/boalogo.svg" 
                alt="Logo" 
                fill 
                className="object-cover rounded-full p-0.5" 
              />
            </div>
            <span className="font-bold text-base tracking-widest uppercase text-white group-hover:opacity-90 transition-opacity">
              Best Of Amravati
            </span>
          </Link>

          <Link 
            href="/" 
            className="text-sm font-bold bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full transition-all flex items-center gap-2 border border-white/10"
          >
            <FaArrowLeft className="text-xs" /> BACK TO HOME
          </Link>
        </div>
      </header>

      {/* --- MAIN DOCUMENT LAYOUT --- */}
      <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16 flex-grow w-full">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="sticky top-28">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 px-4">
              Legal Documents
            </h3>
            <nav className="flex flex-col space-y-2">
              {['terms', 'privacy', 'refund'].map((key) => (
                <button
                  key={key}
                  onClick={() => handleTabClick(key)}
                  className={`text-left px-4 py-4 rounded-lg text-base font-medium transition-colors capitalize border-l-4
                    ${activeSection === key 
                      ? "bg-white border-purple-600 text-purple-700 shadow-md" 
                      : "border-transparent text-gray-500 hover:bg-white hover:shadow-sm hover:text-gray-900"
                    }`}
                >
                  {key === 'terms' ? 'Terms of Service' : key + ' Policy'}
                </button>
              ))}
            </nav>

            <div className="mt-10 px-4 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 leading-relaxed">
                Managed by<br/>
                <strong className="text-gray-800 text-base">Bizonance India Pvt Ltd</strong><br/>
                Amravati, Maharashtra
              </p>
            </div>
          </div>
        </aside>

        {/* DOCUMENT CONTENT */}
        <section className="flex-grow min-h-[600px]">
          <div className="bg-white border border-gray-200 p-10 md:p-16 rounded-xl shadow-sm h-full">
            
            {/* Doc Header */}
            <div className="border-b border-gray-100 pb-8 mb-10">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                {activeData.title}
              </h1>
              <p className="text-base text-gray-500">
                Effective Date: <span className="font-medium text-gray-700">{activeData.updated}</span>
              </p>
            </div>

            {/* Doc Body */}
            <div className="space-y-12">
              {activeData.content.map((block, i) => (
                <div key={i}>
                  <h2 className="text-base md:text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    {block.heading}
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg leading-8 text-justify">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Doc Footer */}
            <div className="mt-16 pt-10 border-t border-gray-100 flex items-center justify-center gap-3 text-sm text-gray-400">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              Official Policy Document • Verified by Legal
            </div>

          </div>
        </section>

      </main>
      
      {/* Footer */}
      <div className="border-t border-gray-200 bg-white">
        <Footer />
      </div>
    </div>
  );
}