import React from 'react';

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tighter mb-4">Project: {id}</h1>
      <p className="text-slate-500">Case study details for {id}.</p>
    </main>
  );
}
