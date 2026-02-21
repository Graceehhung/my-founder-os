import Link from 'next/link';

export default function BlogIndex() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tighter mb-12">Writing</h1>
      <Link href="/blog/spike-theory" className="group block border-b border-slate-100 pb-4">
        <h2 className="text-xl font-medium group-hover:text-red-500 transition-colors">Spike Theory: Why VCs Love Range</h2>
        <p className="text-sm text-slate-400 font-mono mt-2">FEB 2026</p>
      </Link>
    </main>
  );
}