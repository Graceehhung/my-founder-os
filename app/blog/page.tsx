import React from 'react';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tighter mb-4">Post: {slug}</h1>
      <p className="text-slate-500">Content for {slug} is being drafted.</p>
    </main>
  );
}