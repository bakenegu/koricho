import Link from "next/link";
import type { Martyr } from "@/data/martyrs";

type MartyrsSectionProps = {
  items: Martyr[];
};

export default function MartyrsSection({ items }: MartyrsSectionProps) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((martyr) => (
        <article
          key={martyr.id}
          className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-black/20"
        >
          <div className="space-y-3">
            <div className="text-sm uppercase tracking-[0.25em] text-emerald-200">
              {martyr.year}
            </div>
            <h3 className="text-xl font-semibold text-slate-100">
              {martyr.name}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              {martyr.description}
            </p>
          </div>
          <Link
            className="mt-6 text-sm font-medium text-emerald-200 transition hover:text-emerald-100"
            href={`/martyrs/${martyr.id}`}
          >
            Read story
          </Link>
        </article>
      ))}
    </div>
  );
}
