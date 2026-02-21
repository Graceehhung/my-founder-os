export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Spike Theory: Why VCs Love Range</h1>
        <p className="text-slate-400 font-mono text-sm uppercase">Published Feb 2026 • 5 min read</p>
      </header>

      <article className="prose prose-slate lg:prose-xl leading-relaxed text-slate-700 space-y-6">
        <p className="font-medium text-black italic text-xl">
          "The future belongs to the polymaths who can bridge the gap between hard engineering and human desire."
        </p>
        
        <p>
          In the venture world, we are often told to "pick a lane." But the most successful founders don't have a lane; they have a <strong>Spike</strong>. A spike is a deep, world-class excellence in one area (like your BCI work) supported by a wide range of disparate interests (like Psychology and Fortune Telling).
        </p>

        <h2 className="text-2xl font-bold text-black pt-8">The Arbitrage of Knowledge</h2>
        <p>
          By applying high-level engineering principles to "irrational" consumer markets, you create a moat that pure software engineers can't see and pure marketers can't build. This is the <strong>Love-Brain Arbitrage</strong>.
        </p>
      </article>
    </main>
  );
}