"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setError("Supabase environment variables are missing.");
      setLoading(false);
      return;
    }

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    router.replace("/admin");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-deep">
      <div className="site-container-reading w-full">
        <div className="w-full rounded-xl border border-stone-800 bg-background-dark p-6 sm:p-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">
          Admin Access
        </p>
        <h1 className="mb-8 text-3xl font-extrabold uppercase tracking-tighter text-stone-100">
          Sign In
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-stone-400"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="h-11 w-full rounded-md border border-stone-700 bg-background-deep px-3 text-sm text-stone-100 focus:border-primary focus:outline-none"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              value={email}
            />
          </div>

          <div>
            <label
              className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-stone-400"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="h-11 w-full rounded-md border border-stone-700 bg-background-deep px-3 text-sm text-stone-100 focus:border-primary focus:outline-none"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              value={password}
            />
          </div>

          <button
            className="w-full rounded-md bg-primary px-4 py-3 text-xs font-bold uppercase tracking-widest text-white hover:brightness-110"
            disabled={loading}
            type="submit"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {reason === "supabase-not-configured" ? (
          <p className="mt-4 text-sm text-primary">
            Supabase is not configured. Add environment variables before signing
            in.
          </p>
        ) : null}
        {error ? <p className="mt-4 text-sm text-primary">{error}</p> : null}
        </div>
      </div>
    </div>
  );
}

