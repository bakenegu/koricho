export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="h-6 w-32 animate-pulse rounded bg-slate-800" />
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`skeleton-${index}`}
            className="h-48 rounded-2xl border border-white/10 bg-slate-900/60"
          />
        ))}
      </div>
    </div>
  );
}
