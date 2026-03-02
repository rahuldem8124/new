"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Team from "@/components/team/Team";

export default function MembersPage() {
  return (
    <main className="relative min-h-screen bg-[#3d2b1f] text-[#e5d3b3] overflow-hidden">
      {/* Old Film Visual Effect */}
      <div className="old-film-overlay opacity-20 pointer-events-none" />
      
      {/* Navigation */}
      <nav className="relative z-20 p-8 flex justify-between items-center">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-[#b85c38] hover:text-[#e5d3b3] transition-colors uppercase text-sm font-bold tracking-[0.3em]"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> 
          Back to Frontier
        </Link>
        <div className="text-[10px] uppercase tracking-[0.5em] opacity-40 hidden md:block">
          NOTHING • Internal Directory • 2026
        </div>
      </nav>

      {/* Header Section */}
      <div className="relative z-10 pt-10 pb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-8xl font-serif uppercase tracking-[0.25em] text-[#b85c38]">
            The Posse
          </h1>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="h-[1px] w-12 bg-[#b85c38]/40" />
            <p className="text-xs uppercase tracking-[1em] text-[#e5d3b3]/60">
              Agency Personnel
            </p>
            <div className="h-[1px] w-12 bg-[#b85c38]/40" />
          </div>
        </motion.div>
      </div>

      {/* Team Content */}
      <section className="relative z-10 max-w-7xl mx-auto pb-32">
        {/* This calls your existing Team component */}
        <Team />
      </section>

      {/* Footer Signature */}
      <footer className="relative z-10 py-12 text-center border-t border-[#2b1d15]/50 bg-[#1a120b]/80">
        <div className="mb-4 opacity-30 grayscale">🌵</div>
        <p className="text-[#b85c38] text-[10px] uppercase tracking-[1.5em] font-bold">
          STOP • NOTHING • STOP
        </p>
      </footer>
    </main>
  );
}