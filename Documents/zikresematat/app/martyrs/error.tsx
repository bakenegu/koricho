"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-20">
      <h2 className="text-3xl font-semibold text-slate-100">
        We could not load the martyrs list.
      </h2>
      <p className="mt-4 text-sm text-slate-300">
        {error.message || "Please try again in a moment."}
      </p>
      <button
        className="mt-6 rounded-full border border-emerald-200/40 px-5 py-2 text-sm text-emerald-100 transition hover:border-emerald-200"
        onClick={reset}
        type="button"
      >
        Try again
      </button>
    </div>
  );
}
