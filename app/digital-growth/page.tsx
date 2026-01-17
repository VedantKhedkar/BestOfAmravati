"use client";

import { motion } from "framer-motion";
import {
    TrendingUp,
    Target,
    Zap,
    BarChart4,
    MousePointer2,
    Binary,
    Rocket,
    LineChart,
    PieChart,
    Users,
    ArrowUpRight,
    Search,
    Fingerprint,
    Lightbulb,
    // NEW ICONS ADDED
    Shield,
    TrendingUp as GrowthIcon,
    Clock,
    DollarSign,
    Calendar,
    CheckCircle,
    Cpu,
    Brain,
    Target as TargetIcon,
    Globe,
    Smartphone,
    Video,
    Hash
} from "lucide-react";
import ProductionNavbar from "@/components/ProductionNavbar";
import Footer from "@/components/Footer";

// Animation Variants
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
};

export default function GrowthStrategyPage() {
    return (
        <>
            <ProductionNavbar />

            {/* THEME BACKGROUND: MAINTAINING CONSISTENCY */}
            <main className="pt-24 min-h-screen relative overflow-hidden bg-[#fffaf2]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
                </div>

                {/* HERO SECTION */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-6xl mx-auto px-6 text-center py-24 relative z-10"
                >
                    <div className="flex flex-col items-center gap-4 mb-8">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-200 bg-white/80 backdrop-blur-md shadow-sm"
                        >
                            <Binary size={16} className="text-orange-600" />
                            <span className="text-orange-600 font-bold text-[10px] uppercase tracking-[0.2em]">
                                Algorithm Intelligence Unit
                            </span>
                        </motion.div>
                    </div>

                    <div className="relative inline-block px-4 md:px-16">
                        {/* Velocity Badge */}
                        <div className="absolute -top-12 -right-2 md:-right-12 z-20 flex items-center gap-2 bg-white p-3 rounded-2xl shadow-xl border border-orange-50 animate-bounce">
                            <div className="bg-orange-100 p-1.5 rounded-lg">
                                <Rocket size={16} className="text-orange-600" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Velocity</p>
                                <p className="text-sm font-black text-gray-900">2.4x Growth</p>
                            </div>
                        </div>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-5xl md:text-8xl font-black text-gray-900 leading-[1.05] tracking-tight relative z-10"
                        >
                            Engineered To <br />
                            <span className="bg-gradient-to-r from-orange-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Scale Rapidly_
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-12 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        We move beyond "vanity metrics." Our <span className="font-extrabold text-gray-900">#GrowthArchitecture</span> combines consumer psychology with algorithmic precision to turn views into business revenue.
                    </motion.p>
                </motion.section>

                {/* THE RETENTION ENGINE - 3 PILLARS */}
                <section className="max-w-6xl mx-auto px-6 py-12 relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            { title: "The Hook", icon: Zap, color: "text-orange-600", bg: "bg-orange-50", desc: "Stopping the scroll in the first 1.5 seconds with visual triggers." },
                            { title: "Retention", icon: MousePointer2, color: "text-pink-600", bg: "bg-pink-50", desc: "Keeping high audience-watch-time through rhythmic editing." },
                            { title: "Conversion", icon: Target, color: "text-purple-600", bg: "bg-purple-50", desc: "Strategic Call-to-Actions that drive footfall and inquiries." }
                        ].map((item, i) => (
                            <motion.div variants={fadeInUp} key={i} className="bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all group">
                                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <item.icon className={item.color} size={28} />
                                </div>
                                <h3 className="font-black text-xl text-gray-900 tracking-tight">{item.title}</h3>
                                <p className="text-sm text-gray-600 mt-3 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* =========== NEW SECTION: TECHNOLOGY STACK =========== */}
                <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                            Precision Tech <br />
                            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                                Stack
                            </span>
                        </h2>
                        <p className="mt-6 max-w-2xl mx-auto text-gray-600 font-medium">
                            Cutting-edge tools and platforms engineered for maximum digital impact.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: Cpu, title: "AI Analytics", desc: "Predictive algorithms" },
                            { icon: Brain, title: "Behavioral AI", desc: "Pattern recognition" },
                            { icon: TargetIcon, title: "Precision Targeting", desc: "Audience segmentation" },
                            { icon: Globe, title: "Multi-Platform", desc: "Cross-channel sync" },
                            { icon: Smartphone, title: "Mobile-First", desc: "Responsive optimization" },
                            { icon: Video, title: "Content AI", desc: "Automated optimization" },
                            { icon: Hash, title: "Trend Intelligence", desc: "Real-time insights" },
                            { icon: Shield, title: "Data Security", desc: "Encrypted analytics" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-white/50 backdrop-blur-md p-6 rounded-3xl border border-white hover:shadow-lg transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon className="text-orange-600" size={22} />
                                </div>
                                <h4 className="font-black text-gray-900 text-sm">{item.title}</h4>
                                <p className="text-xs text-gray-500 mt-1 font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* =========== NEW SECTION: CASE STUDY RESULTS =========== */}
                <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                            Proven Results <br />
                            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                                In Real Campaigns
                            </span>
                        </h2>
                        <p className="mt-6 text-gray-600 font-medium max-w-2xl">
                            Actual metrics from businesses we've transformed in the Amravati region.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                category: "Fashion Retail",
                                metrics: [
                                    { label: "Instagram Growth", value: "312%" },
                                    { label: "Monthly Leads", value: "540+" },
                                    { label: "ROI", value: "8.2x" },
                                ],
                                color: "from-pink-500 to-rose-500"
                            },
                            {
                                category: "Restaurant Chain",
                                metrics: [
                                    { label: "Footfall Increase", value: "185%" },
                                    { label: "Online Orders", value: "320%" },
                                    { label: "Brand Searches", value: "410%" },
                                ],
                                color: "from-orange-500 to-amber-500"
                            },
                            {
                                category: "Professional Services",
                                metrics: [
                                    { label: "Website Traffic", value: "280%" },
                                    { label: "Lead Quality", value: "67%" },
                                    { label: "Conversion Rate", value: "24.5%" },
                                ],
                                color: "from-purple-500 to-indigo-500"
                            },
                        ].map((caseStudy, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 border border-white shadow-lg"
                            >
                                <h3 className="text-xl font-black text-gray-900 mb-6">{caseStudy.category}</h3>
                                <div className="space-y-6">
                                    {caseStudy.metrics.map((metric, idx) => (
                                        <div key={idx} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600 font-medium">{metric.label}</span>
                                                <span className={`text-2xl font-black bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}>
                                                    {metric.value}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Clock size={14} />
                                        <span className="font-medium">Results within 90 days</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ANALYTICS DASHBOARD SECTION */}
                <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                                Data-Driven <br />
                                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                                    Decision Intelligence
                                </span>
                            </h2>


                            <p className="text-gray-600 mb-10 text-lg font-medium">
                                We don't guess. We track 15+ KPIs across the <span className="text-gray-900 font-bold">Amravati digital ecosystem</span> to optimize your content's performance in real-time.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Fingerprint, t: "Persona Mapping", d: "Targeting your ideal client" },
                                    { icon: BarChart4, t: "Sentiment Analysis", d: "Monitoring brand perception" },
                                    { icon: Search, t: "Hashtag Clusters", d: "Local SEO optimization" },
                                    { icon: Lightbulb, t: "Trend Prediction", d: "Early adoption of viral hooks" },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-white/60 backdrop-blur-md rounded-[2rem] border border-white group">
                                        <item.icon className="text-orange-600" size={20} />
                                        <div>
                                            <h4 className="font-black text-gray-900 text-[11px] uppercase tracking-wider">{item.t}</h4>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* PREMIUM DATA CARD */}
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="bg-gray-900 rounded-[3.5rem] p-12 text-white relative shadow-2xl border border-white/10"
                        >
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/20 blur-[80px] rounded-full"></div>

                            <div className="flex justify-between items-start mb-12">
                                <h3 className="text-2xl font-black tracking-tight">Growth Metrics.</h3>
                                <LineChart className="text-orange-400" size={24} />
                            </div>

                            <div className="space-y-10 relative z-10">
                                <div>
                                    <p className="text-6xl font-black bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">+18.5%</p>
                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em] mt-2">Avg. Conversion Rate</p>
                                </div>

                                <div className="h-24 w-full flex items-end gap-1.5">
                                    {[30, 45, 35, 60, 80, 55, 90, 100].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex-1 bg-gradient-to-t from-orange-600 to-pink-500 rounded-t-sm"
                                        />
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                                    <div className="text-center">
                                        <p className="text-lg font-black">1.2M+</p>
                                        <p className="text-[8px] text-gray-500 uppercase font-black">Impressions</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-lg font-black">42K</p>
                                        <p className="text-[8px] text-gray-500 uppercase font-black">Interactions</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

              

                {/* =========== NEW SECTION: PROCESS TIMELINE =========== */}
                <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                            The Growth <br />
                            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                                Engine Timeline
                            </span>
                        </h2>
                        <p className="mt-6 text-gray-600 font-medium max-w-2xl">
                            A systematic approach that ensures consistent, scalable growth.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-300 via-pink-300 to-purple-300 transform -translate-x-1/2 hidden md:block"></div>

                        {[
                            {
                                phase: "Phase 01",
                                title: "Deep Dive Analysis",
                                duration: "Week 1-2",
                                tasks: ["Market Research", "Competitor Audit", "Audience Mapping"],
                                side: "left"
                            },
                            {
                                phase: "Phase 02",
                                title: "Strategy Formulation",
                                duration: "Week 3-4",
                                tasks: ["Content Blueprint", "Channel Strategy", "KPI Setting"],
                                side: "right"
                            },
                            {
                                phase: "Phase 03",
                                title: "Execution & Launch",
                                duration: "Week 5-8",
                                tasks: ["Content Production", "Campaign Launch", "Initial Optimization"],
                                side: "left"
                            },
                            {
                                phase: "Phase 04",
                                title: "Scale & Optimize",
                                duration: "Ongoing",
                                tasks: ["Performance Analysis", "A/B Testing", "Strategy Refinement"],
                                side: "right"
                            },
                        ].map((phase, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className={`relative mb-12 ${phase.side === 'left' ? 'md:pr-1/2 md:pr-8' : 'md:pl-1/2 md:pl-8'} ${phase.side === 'left' ? 'md:text-right' : ''}`}
                            >
                                <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] border border-white shadow-lg">
                                    <div className={`flex ${phase.side === 'left' ? 'md:justify-end' : ''}`}>
                                        <div className={`max-w-md ${phase.side === 'left' ? 'md:text-right' : ''}`}>
                                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 mb-4">
                                                <Calendar size={14} className="text-orange-600" />
                                                <span className="text-xs font-black text-orange-600">{phase.duration}</span>
                                            </div>
                                            <h3 className="text-2xl font-black text-gray-900 mb-2">{phase.title}</h3>
                                            <div className={`space-y-2 mt-4 ${phase.side === 'left' ? 'md:items-end' : ''}`}>
                                                {phase.tasks.map((task, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-gray-600">
                                                        {phase.side === 'right' && <CheckCircle size={14} className="text-green-500" />}
                                                        <span className="font-medium text-sm">{task}</span>
                                                        {phase.side === 'left' && <CheckCircle size={14} className="text-green-500" />}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Timeline Dot */}
                                <div className="absolute top-8 left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full border-4 border-white transform -translate-x-1/2 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* HOW WE EXECUTE GROWTH */}
                <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                            From Visibility <br />
                            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                                To Authority
                            </span>
                        </h2>
                    </motion.div>


                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                step: "01",
                                title: "Discovery",
                                desc: "Audience behavior, competitors & demand signals.",
                            },
                            {
                                step: "02",
                                title: "Content Architecture",
                                desc: "Hooks, narratives & CTAs aligned with intent.",
                            },
                            {
                                step: "03",
                                title: "Execution",
                                desc: "High-frequency, high-quality deployment.",
                            },
                            {
                                step: "04",
                                title: "Optimization",
                                desc: "Weekly iteration using performance data.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-white/50 backdrop-blur-md p-7 rounded-[2.25rem] border border-white hover:shadow-lg transition-all"
                            >
                                <p className="text-xs font-black text-orange-600 tracking-widest">
                                    STEP {item.step}
                                </p>
                                <h3 className="mt-4 text-lg font-black text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>


                {/* =========== NEW SECTION: EXPERTISE HIGHLIGHTS =========== */}
                <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                            Why We're <br />
                            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                                Different
                            </span>
                        </h2>
                        <p className="mt-6 max-w-2xl mx-auto text-gray-600 font-medium">
                            Unique capabilities that set our growth architecture apart.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Local Market Mastery",
                                desc: "Deep understanding of Amravati consumer behavior and cultural nuances.",
                                highlight: "100+ Local Campaigns"
                            },
                            {
                                title: "Algorithm Whisperers",
                                desc: "We don't just use platforms - we understand how their algorithms think.",
                                highlight: "Proprietary AI Models"
                            },
                            {
                                title: "Psychographic Targeting",
                                desc: "Targeting based on interests, values, and lifestyle, not just demographics.",
                                highlight: "Behavioral Clusters"
                            },
                            {
                                title: "Scalable Creativity",
                                desc: "Systematic creative production that maintains quality at scale.",
                                highlight: "Creative Assembly Line"
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-white hover:shadow-xl transition-all group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-black text-gray-900">{item.title}</h3>
                                    <div className="px-3 py-1 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full">
                                        <span className="text-xs font-black text-orange-600">{item.highlight}</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 font-medium">{item.desc}</p>
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-sm text-orange-600 font-medium">
                                        <ArrowUpRight size={16} />
                                        <span>Built for Amravati market</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* DIGITAL GROWTH STRATEGY */}
                <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                            Digital Growth <br />
                            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                                Strategy
                            </span>
                        </h2>
                        <p className="mt-6 max-w-3xl mx-auto text-gray-600 font-medium leading-relaxed">
                            We don't chase trends. We engineer repeatable growth systems that turn
                            attention into measurable business outcomes.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Psychology-First",
                                desc: "Understanding why users stop, watch, trust, and take action.",
                            },
                            {
                                title: "Algorithm-Aware",
                                desc: "Built around how platforms actually distribute reach.",
                            },
                            {
                                title: "Revenue-Focused",
                                desc: "Every campaign is tied to conversion and business impact.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-white hover:shadow-xl transition-all"
                            >
                                <h3 className="text-xl font-black text-gray-900">{item.title}</h3>
                                <p className="mt-3 text-sm text-gray-600 font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>


                {/* METRICS THAT MATTER */}
                <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                            Metrics That <br />
                            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                                Actually Matter
                            </span>
                        </h2>


                        <p className="mt-6 max-w-2xl mx-auto text-gray-600 font-medium">
                            Vanity metrics don't build businesses. We track what drives real growth.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Conversion Rate & Lead Quality",
                            "Watch Time & Retention Curves",
                            "Engagement-to-Reach Ratio",
                            "Cost per Acquisition (CPA)",
                            "Local Search & Discovery Signals",
                            "Content-to-Revenue Attribution",
                        ].map((text, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-gray-900 text-white p-8 rounded-[2.5rem] flex items-center gap-4"
                            >
                                <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center font-black">
                                    ✓
                                </div>
                                <p className="font-medium text-lg">{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>


                {/* BOTTOM CALL TO ACTION */}
                <section className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white/80 backdrop-blur-xl p-16 rounded-[4rem] border border-white shadow-2xl relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter italic">READY TO DOMINATE <br /> THE FEED?</h2>
                            <button className="bg-gray-900 text-white px-12 py-5 rounded-full font-black uppercase text-sm tracking-widest flex items-center gap-3 mx-auto hover:bg-black transition-all">
                                Request Strategy Audit <ArrowUpRight size={18} className="text-orange-400" />
                            </button>
                        </div>
                    </motion.div>
                </section>

                <Footer />
            </main>
        </>
    );
}