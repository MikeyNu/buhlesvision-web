"use client";

export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  void _error;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background-dark px-6 text-center text-stone-100">
      <h1 className="text-4xl font-extrabold uppercase tracking-tighter">
        Unexpected Error
      </h1>
      <p className="max-w-md text-stone-400">
        An unexpected issue occurred while rendering the page.
      </p>
      <button
        className="rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-white"
        onClick={reset}
        type="button"
      >
        Retry
      </button>
    </div>
  );
}
