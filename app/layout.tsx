import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; // Essential for the new nav
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grace Hung | Technical Founder",
  description: "Bio-Interfaces & Human Psychology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafafa] text-[#111]`}>
        
        {/* FLOATING NAV: This won't shift your Bento Grid */}
        <header className="w-full">
          <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
            <Link href="/" className="flex flex-col group">
              <span className="font-bold tracking-tighter text-xl group-hover:text-red-500 transition-colors uppercase">
                Grace Hung
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                Technical Founder
              </span>
            </Link>
            
            <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
              <Link href="/projects" className="hover:text-black transition-colors">Projects</Link>
              <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
              <a 
                href="mailto:your@email.com" 
                className="bg-black text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all text-xs font-semibold"
              >
                Get in touch
              </a>
            </div>
          </nav>
        </header>

        {/* This renders your Bento Grid or any other page */}
        {children}

        <footer className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-100 mt-20 text-xs text-slate-400 font-mono">
          © 2026 // Grace Hung // Built with Next.js
        </footer>
      </body>
    </html>
  );
}