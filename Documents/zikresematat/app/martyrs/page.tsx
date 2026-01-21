"use client";

import { useMemo, useState } from "react";
import MartyrsSection from "@/app/components/MartyrsSection";
import { martyrs } from "@/data/martyrs";

const ITEMS_PER_PAGE = 6;

export default function MartyrsPage() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");
  const [page, setPage] = useState(1);

  const years = useMemo(() => {
    const uniqueYears = new Set(martyrs.map((item) => item.year));
    return ["all", ...Array.from(uniqueYears)];
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return martyrs.filter((item) => {
      const matchesYear = year === "all" || item.year === year;
      const matchesQuery =
        normalized.length === 0 ||
        item.name.toLowerCase().includes(normalized) ||
        item.description.toLowerCase().includes(normalized);
      return matchesYear && matchesQuery;
    });
  }, [query, year]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE
  );

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const handleYearChange = (value: string) => {
    setYear(value);
    setPage(1);
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">
            Names and remembrance
          </p>
          <h1 className="text-4xl font-semibold text-slate-100">Martyrs</h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300">
            These names are placeholders until verified records can be shared by
            families and communities. Each story deserves care and accuracy.
          </p>
        </div>

      <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:flex-row sm:items-center">
        <div className="flex-1">
          <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Search
          </label>
          <input
            className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
            placeholder="Search by name or description"
            value={query}
            onChange={(event) => handleQueryChange(event.target.value)}
          />
        </div>
        <div className="sm:w-48">
          <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Year
          </label>
          <select
            className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-emerald-300 focus:outline-none"
            value={year}
            onChange={(event) => handleYearChange(event.target.value)}
          >
            {years.map((value) => (
              <option key={value} value={value}>
                {value === "all" ? "All years" : value}
              </option>
            ))}
          </select>
        </div>
      </div>

      {paged.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-sm text-slate-300">
          No martyrs match this search yet.
        </div>
      ) : (
        <MartyrsSection items={paged} />
      )}

      <div className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
        <span>
          Page {safePage} of {totalPages}
        </span>
        <div className="flex gap-3">
          <button
            className="rounded-full border border-white/10 px-4 py-2 text-slate-200 transition hover:border-emerald-200/50 disabled:cursor-not-allowed disabled:text-slate-600"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={safePage === 1}
            type="button"
          >
            Previous
          </button>
          <button
            className="rounded-full border border-white/10 px-4 py-2 text-slate-200 transition hover:border-emerald-200/50 disabled:cursor-not-allowed disabled:text-slate-600"
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={safePage === totalPages}
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
