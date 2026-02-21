export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold">Project: {id}</h1>
      <p className="mt-4 text-slate-500">Deep dive content coming soon.</p>
    </div>
  );
}
