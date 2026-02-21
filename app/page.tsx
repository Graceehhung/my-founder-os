import React from 'react';
import Link from 'next/link';
import { Brain, Coins, Zap, Cpu, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-emerald-700 uppercase tracking-wider">
            Shipping: Fortune App v2.1
          </span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
          Technical Founder exploring <span className="text-slate-400">Bio-Interfaces</span> & <span className="text-red-500">Human Psychology.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
          I build high-latency moats in BCI and high-margin engines in consumer tech. 
          Obsessed with the systems that drive human decision-making.
        </p>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* HYGIEA BCI - Links to /projects */}
        <Link 
          href="/projects" 
          className="md:col-span-7 group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex justify-between items-start mb-12">
            <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform">
              <Brain size={32} />
            </div>
            <ArrowUpRight className="text-slate-300 group-hover:text-black transition-colors" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Hygiea BCI</h3>
            <p className="text-slate-500 mb-6 max-w-md">
              Custom hardware-software interface for metabolic tracking. 98% accuracy in signal processing via OpenCV.
            </p>
            <div className="flex gap-4 items-center">
              <span className="text-xs font-mono bg-slate-50 px-2 py-1 rounded text-slate-400">14ms latency</span>
              <span className="text-xs font-mono text-slate-300">C++ / Python</span>
            </div>
          </div>
        </Link>

        {/* FORTUNE APP - Links to /projects */}
        <Link 
          href="/projects" 
          className="md:col-span-5 group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex justify-between items-start mb-12">
            <div className="p-3 bg-orange-50 rounded-2xl text-orange-600 group-hover:scale-110 transition-transform">
              <Coins size={32} />
            </div>
            <ArrowUpRight className="text-slate-300 group-hover:text-black transition-colors" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Love-Brain Arbitrage</h3>
            <p className="text-slate-500 mb-6">
              High-margin Chinese Fortune Telling engine. Monetizing irrational behavior.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Conversion</p>
                <p className="text-lg font-bold">4.2%</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Daily Revenue</p>
                <p className="text-lg font-bold text-orange-600">$1,240</p>
              </div>
            </div>
          </div>
        </Link>

        {/* SPIKE THEORY - Links to /blog */}
        <Link 
          href="/blog" 
          className="md:col-span-4 group rounded-3xl border border-slate-100 bg-white p-8 hover:shadow-2xl transition-all"
        >
          <Zap className="text-yellow-500 mb-6" />
          <h3 className="text-xl font-bold mb-2">Spike Theory</h3>
          <p className="text-sm text-slate-500">Why VCs love range over specialization. A thesis on founder optionality.</p>
        </Link>

        {/* THE PIPELINE - Links to /projects */}
        <Link 
          href="/projects" 
          className="md:col-span-8 group rounded-3xl border border-slate-100 bg-white p-8 hover:shadow-2xl transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-6">
            <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
              <Cpu size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold">The Pipeline</h3>
              <p className="text-sm text-slate-500">Automated deployment engine for MVPs.</p>
            </div>
          </div>
          <div className="flex gap-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-1 h-8 bg-emerald-100 rounded-full group-hover:bg-emerald-400 transition-colors" style={{ transitionDelay: `${i * 50}ms` }} />
            ))}
          </div>
        </Link>

      </div>
    </main>
  );
}
