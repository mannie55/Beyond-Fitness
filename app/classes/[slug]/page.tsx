export default function ClassDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <main className="w-full min-h-screen bg-black text-white px-padding-global py-padding-section-large">
      <h1 className="text-heading-2 font-bold mb-6">Class Detail</h1>
      <p className="text-text-regular text-white/60">Class page for slug.</p>
    </main>
  );
}