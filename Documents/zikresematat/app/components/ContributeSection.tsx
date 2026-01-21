type ContributeSectionProps = {
  compact?: boolean;
  showHeading?: boolean;
};

export default function ContributeSection({
  compact,
  showHeading,
}: ContributeSectionProps) {
  const containerClass = compact
    ? "w-full"
    : "mx-auto w-full max-w-4xl px-6 py-20";
  const shouldShowHeading = showHeading ?? !compact;

  return (
    <div className={containerClass}>
      <div className="space-y-6 text-slate-200">
        {shouldShowHeading ? (
          <h2 className="text-3xl font-semibold text-slate-100">Contribute</h2>
        ) : null}
        <p className="text-base leading-relaxed text-slate-300">
          Families, churches, and community historians will soon be able to
          submit verified information to preserve each story with care.
        </p>
        <div className="rounded-2xl border border-emerald-200/20 bg-slate-900/60 p-6">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-200">
            Contact
          </p>
          <p className="mt-3 text-base text-slate-100">
            contact@ethiopianmartyrs.org
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Please include sources or references so each account can be
            honored accurately.
          </p>
        </div>
      </div>
    </div>
  );
}
