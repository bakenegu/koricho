export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 text-sm text-slate-400">
        <p>
          © {year} Zikre Sematat – Ethiopian Martyrs of ISIS.
        </p>
        <p className="mt-2">
          This memorial respects privacy, centers dignity, and honors the
          deceased with care.
        </p>
      </div>
    </footer>
  );
}
