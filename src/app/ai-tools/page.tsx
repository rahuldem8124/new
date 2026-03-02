"use client";
import { ArrowLeft, Brain, Bot, Terminal, Database, Cpu, Compass, Anchor, BarChart3, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AiTools() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const capabilities = [
    {
      title: "LLM Integration",
      desc: "Harnessing OpenAI & Anthropic models to power your applications.",
      icon: <Brain className="w-8 h-8 text-[#b85c38]" />
    },
    {
      title: "Custom RAG",
      desc: "Vector databases that let your AI learn from your own private archives.",
      icon: <Database className="w-8 h-8 text-[#b85c38]" />
    },
    {
      title: "Auto-Agents",
      desc: "Autonomous Python scripts that work while you sleep.",
      icon: <Bot className="w-8 h-8 text-[#b85c38]" />
    },
    {
      title: "Geospatial AI",
      desc: "Mapping and pathfinding algorithms for complex maritime logistics.",
      icon: <Compass className="w-8 h-8 text-[#b85c38]" />
    }
  ];

  const projectData = {
    title: "Optimal Ship Routing System",
    description: "A machine learning and GIS-based pathfinding system designed to minimize fuel waste, distance, and transit time by analyzing dynamic marine conditions.",
    stack: ["Python", "OpenStreetMap", "RandomForest", "Folium"],
    methodology: [
      { t: "Data Preprocessing", d: "Cleaning AIS records and structured geospatial data into navigable nodes." },
      { t: "Feature Engineering", d: "Identifying critical variables like wind speed, wave height, and fuel cost." },
      { t: "ML Modeling", d: "RandomForestRegressor predicting travel time with high precision." },
      { t: "Dynamic Routing", d: "Optimizing paths in real-time to avoid hazards and restricted zones." }
    ]
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-32 px-6 relative overflow-hidden">
      <div className="old-film-overlay opacity-10 absolute inset-0 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#b85c38] font-bold tracking-widest uppercase text-xs hover:-translate-x-2 transition-transform mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to The Saloon
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center md:text-left"
        >
          <div className="inline-block px-4 py-1 border border-[#b85c38] text-[#b85c38] text-[10px] tracking-[0.3em] uppercase font-bold mb-4 bg-[#b85c38]/5">
            Intelligence Agency
          </div>
          <h1 className="text-7xl font-black font-serif italic text-[#1a120b] mb-6 leading-[0.9]">
            Artificial <span className="text-[#b85c38]">Intelligence</span> <br />
            & Automation
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {capabilities.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 p-8 bg-[#e8e2d5] border-2 border-[#1a120b] shadow-[8px_8px_0px_#b85c38] relative group"
            >
              <div className="shrink-0 w-16 h-16 bg-[#1a120b] flex items-center justify-center border-2 border-[#e5d3b3]">
                {c.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black font-serif italic text-[#1a120b] mb-2 uppercase tracking-tight">{c.title}</h3>
                <p className="text-sm text-gray-800 font-serif leading-relaxed opacity-90">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🕵️‍♂️ REFINED PROJECT CASE FILE */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-[#e8e2d5] border-4 border-[#1a120b] p-8 md:p-12 shadow-2xl relative"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }}
        >
          <div className="absolute top-4 right-4 text-[#b85c38] font-mono text-[10px] uppercase font-bold">Case_File: ML_MARITIME_01</div>
          
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* LEFT SIDE: VISUALS & TECH STACK */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-4xl font-black font-serif italic text-[#1a120b] mb-4 uppercase leading-none">Optimal Ship Routing</h2>
                <p className="text-gray-800 font-serif italic leading-relaxed">
                  {projectData.description}
                </p>
              </div>

              {/* MAP VISUALIZATION */}
              <div className="bg-[#1a120b] p-2 border-2 border-[#b85c38] shadow-xl group overflow-hidden">
                <img 
                  src="/s.jpeg" 
                  alt="Optimal Ship Routing Map Visualization" 
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="bg-[#b85c38] py-1 text-center">
                  <p className="text-[9px] text-[#e5d3b3] uppercase tracking-[0.4em] font-bold">Geospatial Intelligence Visualization</p>
                </div>
              </div>

              {/* TECHNOLOGY STACK (Now on Left) */}
              <div className="pt-6 border-t border-[#1a120b]/10">
                <h4 className="text-[#b85c38] text-[10px] font-bold uppercase tracking-widest mb-4">Intelligence Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {projectData.stack.map(s => (
                    <span key={s} className="px-4 py-1.5 bg-[#1a120b] text-[#e5d3b3] text-[9px] uppercase font-bold tracking-widest hover:bg-[#b85c38] transition-colors cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: METHODOLOGY & ROUTE ANALYSIS */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              
              <div className="space-y-6">
                <h3 className="text-[#b85c38] font-bold uppercase tracking-[0.3em] text-xs border-l-4 border-[#b85c38] pl-4">Core Intelligence</h3>
                <div className="space-y-4">
                  {projectData.methodology.map((m, i) => (
                    <div key={i} className="group p-4 bg-white/50 border border-[#1a120b]/10 hover:border-[#b85c38]/30 transition-all duration-300 shadow-sm">
                      <div className="flex items-center gap-3 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-[#b85c38]" />
                        <h5 className="text-sm font-black uppercase text-[#1a120b]">{m.t}</h5>
                      </div>
                      <p className="text-xs text-gray-600 font-serif pl-7 leading-relaxed italic">{m.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROUTE ANALYSIS TABLE (Now on Right) */}
              <div className="bg-[#f5f5f5] p-6 border-2 border-[#1a120b] shadow-inner">
                <h4 className="text-[#b85c38] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border-b border-gray-300 pb-2 text-center">Route Analysis Comparison</h4>
                <div className="grid grid-cols-3 gap-2 text-center items-center">
                  <div className="text-left font-bold text-[8px] uppercase text-gray-400">Metric</div>
                  <div className="font-bold text-[8px] uppercase text-gray-400">Normal</div>
                  <div className="font-bold text-[8px] uppercase text-[#b85c38]">Optimized</div>
                  
                  <div className="text-left py-2 border-b border-gray-200 font-serif text-xs">Distance</div>
                  <div className="py-2 border-b border-gray-200 text-xs italic">X Miles</div>
                  <div className="py-2 border-b border-gray-200 text-xs font-bold text-[#b85c38]">A Miles</div>
                  
                  <div className="text-left py-2 border-b border-gray-200 font-serif text-xs">Time</div>
                  <div className="py-2 border-b border-gray-200 text-xs italic">Y Hours</div>
                  <div className="py-2 border-b border-gray-200 text-xs font-bold text-[#b85c38]">B Hours</div>
                  
                  <div className="text-left py-2 font-serif text-xs">Cost</div>
                  <div className="py-2 text-xs italic">Z Dollars</div>
                  <div className="py-2 text-xs font-bold text-[#b85c38]">C Dollars</div>
                </div>
              </div>

            </div>
          </div>
        </motion.section>

        <div className="mt-24 mb-12 p-12 bg-[#1a120b] text-[#e5d3b3] flex flex-col md:flex-row items-center justify-between border-t-8 border-[#b85c38] relative overflow-hidden">
          <div className="relative z-10 mb-8 md:mb-0">
            <h2 className="text-4xl font-black font-serif italic mb-2 uppercase">Need a Smart Agent?</h2>
            <p className="text-[#b85c38] tracking-widest uppercase text-xs font-bold">
              We build bots that don't miss.
            </p>
          </div>
          <Link 
            href="/#contact" 
            className="relative z-10 inline-block px-10 py-4 bg-[#e5d3b3] text-[#1a120b] font-black uppercase tracking-widest hover:bg-[#b85c38] hover:text-[#f5f5f5] transition-all duration-300 shadow-[0_0_30px_rgba(229,211,179,0.2)]"
          >
            Deploy AI
          </Link>
          <div className="absolute inset-0 opacity-5 mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-scales.png')" }} />
        </div>

      </div>
    </main>
  );
}