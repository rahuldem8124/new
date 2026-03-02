"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Added Link for navigation
import Preloader from "@/components/Preloader";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Contact from "@/components/Contact";

const AmbientAtmosphere = () => {
  return (
    <div className="dust-particles">
      {/* Left Cactus Silhouette */}
      <div className="absolute left-[2%] top-[25%] opacity-10 hidden xl:block pointer-events-none">
         <div className="w-6 h-48 bg-[#2b1d15] rounded-full relative">
            <div className="absolute -left-6 top-10 w-8 h-12 bg-[#2b1d15] rounded-full border-b-4 border-[#b85c38]/20" />
            <div className="absolute -right-6 top-20 w-8 h-16 bg-[#2b1d15] rounded-full border-b-4 border-[#b85c38]/20" />
         </div>
      </div>

      {/* Right Cactus Silhouette */}
      <div className="absolute right-[5%] bottom-[15%] opacity-10 hidden xl:block pointer-events-none">
         <div className="w-5 h-32 bg-[#2b1d15] rounded-full relative">
            <div className="absolute -left-4 top-8 w-6 h-10 bg-[#2b1d15] rounded-full" />
         </div>
      </div>

      {/* Tumbleweed Physics */}
      <motion.div
        animate={{ x: ["-10vw", "110vw"], rotate: [0, 720] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 w-20 h-20 border-2 border-dashed border-[#b85c38]/20 rounded-full"
      />
    </div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Sync with Preloader Session Storage
  useEffect(() => {
    const isVisited = window.sessionStorage.getItem("visited");
    if (isVisited) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => setLoading(false), 4500); 
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Preloader />
      
      <main className={`relative min-h-screen bg-[#e5d3b3] transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="old-film-overlay" />
        <AmbientAtmosphere />
        
        <div className="relative z-10">
          <Hero />
          
          {/* Mexican Pattern Divider */}
          <div className="h-6 w-full bg-gradient-to-r from-[#e74c3c] via-[#f1c40f] via-[#2ecc71] via-[#3498db] to-[#9b59b6] opacity-40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" />
          
          <Services />
          
          {/* New CTA Section to go to the Team Page */}
          <div className="bg-[#3d2b1f] border-t-8 border-[#2b1d15] py-24 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto px-4"
            >
              <h2 className="text-[#e5d3b3] font-serif text-4xl md:text-5xl mb-6 uppercase tracking-[0.2em]">
                Meet The Posse
              </h2>
              <p className="text-[#b85c38] font-mono text-sm mb-10 tracking-widest uppercase">
                The finest minds in the frontier intelligence agency
              </p>
              
              <Link 
                href="/members" 
                className="inline-block group relative px-10 py-4 bg-transparent border-2 border-[#b85c38] text-[#e5d3b3] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:text-[#3d2b1f]"
              >
                <span className="relative z-10">Enter the Office</span>
                <div className="absolute inset-0 bg-[#b85c38] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          <Contact />
        </div>

        <footer className="py-20 text-center border-t-8 border-[#2b1d15] bg-[#1a120b] relative z-10">
          <div className="mb-6 flex justify-center gap-8 opacity-20 grayscale">
              <span className="text-2xl">💀</span>
              <span className="text-2xl">🌵</span>
              <span className="text-2xl">💀</span>
          </div>
          <p className="text-[#e5d3b3] text-xs uppercase tracking-[1.5em] font-serif">
            STOP • NOTHING • STOP
          </p>
          <p className="text-[#b85c38] text-[10px] uppercase mt-4 tracking-widest font-bold">
            Frontier Intelligence Agency
          </p>
        </footer>
      </main>
    </>
  );
}