import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex flex-col">
          <span className="text-lg font-semibold tracking-wide text-slate-100">
            Zikre Sematat
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Ethiopian Martyrs of ISIS
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-200 sm:gap-6 sm:text-sm">
          <Link className="transition hover:text-emerald-300" href="/">
            Home
          </Link>
          <Link className="transition hover:text-emerald-300" href="/martyrs">
            Martyrs
          </Link>
          <Link
            className="transition hover:text-emerald-300"
            href="/contribute"
          >
            Contribute
          </Link>
        </div>
      </div>
    </nav>
  );
}
