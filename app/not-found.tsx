import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background-dark px-6 text-center text-stone-100">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">404</p>
      <h1 className="text-5xl font-extrabold uppercase tracking-tighter">
        Page Not Found
      </h1>
      <p className="max-w-md text-stone-400">
        The requested route does not exist in the reconstructed platform.
      </p>
      <Link
        className="rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-white"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}

