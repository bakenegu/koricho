import Link from "next/link";
import { notFound } from "next/navigation";
import { martyrs } from "@/data/martyrs";

export function generateStaticParams() {
  return martyrs.map((martyr) => ({ id: String(martyr.id) }));
}

type MartyrPageProps = {
  params: { id: string };
};

export default function MartyrPage({ params }: MartyrPageProps) {
  const martyr = martyrs.find((item) => String(item.id) === params.id);

  if (!martyr) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-20">
      <Link
        className="text-sm text-emerald-200 hover:text-emerald-100"
        href="/martyrs"
      >
        ← Back to martyrs
      </Link>

      <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="h-48 w-full rounded-2xl border border-white/10 bg-slate-950/70 md:h-60 md:w-56" />
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">
              {martyr.year}
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-100">
              {martyr.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              {martyr.description}
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8">
          <h2 className="text-2xl font-semibold text-slate-100">
            Read Full Story
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            A longer account of {martyr.name}&apos;s life and legacy will be
            added once verified details are shared by family and community
            members. This space is reserved for careful, respectful
            storytelling.
          </p>
        </div>
      </div>
    </main>
  );
}
