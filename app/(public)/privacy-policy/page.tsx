import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-32">
      <h1 className="mb-8 text-5xl font-extrabold tracking-tighter">Privacy Policy</h1>
      <div className="space-y-6 text-stone-300">
        <p>
          Buhle&apos;s Vision collects inquiry information submitted through contact
          and campaign forms to respond to project requests and manage client
          communication.
        </p>
        <p>
          Data may include name, company, inquiry type, and project details.
          Information is stored in Supabase and accessed by authorized internal
          admin users only.
        </p>
        <p>
          For deletion or correction requests, contact{" "}
          <a className="text-primary" href="mailto:hello@buhlevision.com">
            hello@buhlevision.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

