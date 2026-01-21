import Link from "next/link";
import AboutSection from "./components/AboutSection";
import ContributeSection from "./components/ContributeSection";
import Hero from "./components/Hero";
import MartyrsSection from "./components/MartyrsSection";
import { martyrs } from "@/data/martyrs";

export default function Home() {
  const featuredMartyrs = martyrs.slice(0, 3);

  return (
    <main>
      <Hero />
      <section className="bg-slate-900/60 py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">
              Why This Memorial
            </p>
            <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
              A place for remembrance and responsibility
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Preserve Names",
                text: "Safeguard the identities and stories of those lost, with care and clarity.",
              },
              {
                title: "Educate Future Generations",
                text: "Offer a trusted resource that helps communities remember and teach.",
              },
              {
                title: "Honor Faith",
                text: "Recognize steadfast belief and the dignity of every life taken.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-950 py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">
              Featured Martyrs
            </p>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
                Remembered in community
              </h2>
              <Link
                className="text-sm font-medium text-emerald-200 transition hover:text-emerald-100"
                href="/martyrs"
              >
                View All Martyrs →
              </Link>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300">
              Featured names are placeholders until verified records are shared.
              Each story deserves dignity and accuracy.
            </p>
          </div>
          <MartyrsSection items={featuredMartyrs} />
        </div>
      </section>
      <section className="bg-slate-900/60 py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { label: "Martyrs Remembered", value: "21" },
              { label: "Month of Loss", value: "April 2015" },
              { label: "Legacy", value: "Ongoing" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 text-center"
              >
                <p className="text-3xl font-semibold text-slate-100">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="scroll-mt-24 bg-slate-950">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),_transparent_55%)]" />
          <div className="relative">
            <AboutSection />
          </div>
        </div>
      </section>
      <section id="contribute" className="scroll-mt-24 bg-slate-950">
        <div className="bg-slate-900/60 py-24">
          <div className="mx-auto w-full max-w-4xl px-6">
            <ContributeSection compact showHeading />
            <div className="mt-8">
              <Link
                className="inline-flex rounded-full bg-emerald-500/80 px-8 py-4 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
                href="/contribute"
              >
                Share a Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
