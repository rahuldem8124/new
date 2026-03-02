"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WebDevProjectPage() {
  const [mounted, setMounted] = useState(false);

  // STEP 1: Fix Hydration Error by waiting for client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null until the browser is ready to prevent the red error screen
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-32 px-6 relative overflow-hidden selection:bg-[#b85c38] selection:text-[#e5d3b3]">
      {/* VINTAGE GRAIN OVERLAY */}
      <div className="old-film-overlay opacity-10 absolute inset-0 pointer-events-none fixed" />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] fixed" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* BACK BUTTON */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#b85c38] font-bold tracking-widest uppercase text-xs hover:-translate-x-2 transition-transform mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to The Saloon
        </Link>

        {/* HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center md:text-left"
        >
          <div className="inline-block px-4 py-1 border border-[#b85c38] text-[#b85c38] text-[10px] tracking-[0.3em] uppercase font-bold mb-4 bg-[#b85c38]/5">
            Development Agency
          </div>
          <h1 className="text-7xl font-black font-serif italic text-[#1a120b] mb-6 leading-[0.9]">
            Digital <span className="text-[#b85c38]">Architecture</span> <br />
            & Engineering
          </h1>
          <p className="text-xl text-gray-700 font-serif italic max-w-2xl leading-relaxed">
            Building robust structures in the wilderness of the web, combining high-performance frontends with sophisticated security logic.
          </p>
        </motion.div>

        {/* THE PROJECT CONTENT (Dossier Style) */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-[#e8e2d5] border-4 border-[#1a120b] p-8 md:p-12 shadow-2xl relative mb-20"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }}
        >
          <div className="absolute top-4 right-4 text-[#b85c38] font-mono text-[10px] uppercase font-bold">Case_File: SECUSCAN_08124</div>

          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* LEFT SIDE: VISUALS & TECH STACK */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-4xl font-black font-serif italic text-[#1a120b] mb-4 uppercase leading-none">SecuScan AI Dashboard</h2>
                <p className="text-gray-800 font-serif italic leading-relaxed">
                  A high-performance monitoring interface for real-time fraud detection, designed to visualize complex risk scores through abstract numerical features.
                </p>
              </div>

              {/* DASHBOARD IMAGES: Ensure files are moved to the root /public folder */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#1a120b] p-2 border-2 border-[#b85c38] shadow-xl group overflow-hidden">
                  {/* Updated path includes repository name */}
                  <img 
                    src="/new/1.png"
                    alt="Security Overview"
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <p className="text-[9px] text-[#e5d3b3] mt-2 text-center uppercase tracking-[0.4em] opacity-50 font-mono">Real-time Fraud Monitoring Dashboard</p>
                </div>
                <div className="bg-[#1a120b] p-2 border-2 border-[#b85c38] shadow-xl group overflow-hidden">
                  {/* Updated path includes repository name */}
                  <img
                    src="/new/2.png"
                    alt="Recent Transactions"
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <p className="text-[9px] text-[#e5d3b3] mt-2 text-center uppercase tracking-[0.4em] opacity-50 font-mono">Transaction Risk Scoring Feed</p>
                </div>
              </div>

              {/* TECHNOLOGY STACK */}
              <div className="pt-6 border-t border-[#1a120b]/10">
                <h4 className="text-[#b85c38] text-[10px] font-bold uppercase tracking-widest mb-4">Engineering Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Python XGBoost API"].map(s => (
                    <span key={s} className="px-4 py-1.5 bg-[#1a120b] text-[#e5d3b3] text-[9px] uppercase font-bold tracking-widest hover:bg-[#b85c38] transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: METHODOLOGY & ANALYSIS */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="space-y-6">
                <h3 className="text-[#b85c38] font-bold uppercase tracking-[0.3em] text-xs border-l-4 border-[#b85c38] pl-4">Execution Methodology</h3>
                <div className="space-y-4">
                  {[
                    { s: "01", t: "Data Ingestion & EDA", d: "Analyzing skewed distributions and PCA-anonymized numerical features." },
                    { s: "02", t: "Resampling (SMOTE)", d: "Creating synthetic fraud samples to intelligently balance training data sets." },
                    { s: "03", t: "Advanced Modeling", d: "Implementing XGBoost to capture complex non-linear relationships." },
                    { s: "04", t: "UI Integration", d: "Connecting the ML pipeline to a high-speed, reactive dashboard interface." }
                  ].map((item) => (
                    <div key={item.s} className="group p-4 bg-white/50 border border-[#1a120b]/5 shadow-sm">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-5 h-5 rounded-full bg-[#1a120b] text-[#e5d3b3] flex items-center justify-center text-[10px] font-bold">
                          {item.s}
                        </div>
                        <h5 className="text-sm font-black uppercase text-[#1a120b]">{item.t}</h5>
                      </div>
                      <p className="text-xs text-gray-600 font-serif pl-8 italic leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Metrics Summary */}
              <div className="bg-[#f5f5f5] p-6 border-2 border-[#1a120b] shadow-inner">
                <h4 className="text-[#b85c38] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border-b border-gray-300 pb-2 text-center">Critical Metrics</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div><p className="font-serif text-xl text-[#1a120b]">RECALL</p><p className="text-[8px] uppercase tracking-widest opacity-50">Sensitivity</p></div>
                  <div><p className="font-serif text-xl text-[#1a120b]">AUPRC</p><p className="text-[8px] uppercase tracking-widest opacity-50">Reliability</p></div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 🚧 BOTTOM CTA */}
        <div className="mt-24 mb-12 p-12 bg-[#1a120b] text-[#e5d3b3] flex flex-col md:flex-row items-center justify-between border-t-8 border-[#b85c38] relative overflow-hidden">
          <div className="relative z-10 mb-8 md:mb-0">
            <h2 className="text-4xl font-black font-serif italic mb-2 uppercase">Need a New Frontier?</h2>
            <p className="text-[#b85c38] tracking-widest uppercase text-xs font-bold">We build interfaces that don't break.</p>
          </div>
          <Link 
            href="/#contact" 
            className="relative z-10 inline-block px-10 py-4 bg-[#e5d3b3] text-[#1a120b] font-black uppercase tracking-widest hover:bg-[#b85c38] hover:text-[#f5f5f5] transition-all duration-300 shadow-[0_0_30px_rgba(229,211,179,0.2)]"
          >
            Start Project
          </Link>
          <div className="absolute inset-0 opacity-5 mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-scales.png')" }} />
        </div>
      </div>

      <footer className="py-20 text-center border-t border-[#2b1d15]/10 bg-[#1a120b]">
        <p className="text-[#b85c38] text-[10px] uppercase tracking-[1.5em] font-bold">NOTHING • FRONTIER • STOP</p>
      </footer>
    </main>
  );
}