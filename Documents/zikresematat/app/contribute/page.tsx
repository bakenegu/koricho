import ContributeSection from "@/app/components/ContributeSection";

export default function ContributePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">
            Share with care
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-100">
            Contribute
          </h1>
        </div>
        <ContributeSection compact />
        <form className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <div className="grid gap-4">
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Name
              </label>
              <input
                className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                placeholder="Your name"
                type="text"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Email
              </label>
              <input
                className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                placeholder="you@example.com"
                type="email"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Story or source details
              </label>
              <textarea
                className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                placeholder="Share verified information or sources"
                rows={5}
              />
            </div>
            <button
              className="w-full rounded-full bg-emerald-500/80 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
              type="button"
            >
              Submit (coming soon)
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
