import type { Metadata } from "next";
import { COMPANY_BRAND_NAME, COMPANY_LEGAL_NAME } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsOfServicePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-32">
      <h1 className="mb-8 text-5xl font-extrabold tracking-tighter">
        Terms of Service
      </h1>
      <div className="space-y-6 text-stone-300">
        <p>
          Project timelines, deliverables, and payment terms are confirmed in
          signed statements of work between {COMPANY_LEGAL_NAME} trading as{" "}
          {COMPANY_BRAND_NAME} and each client.
        </p>
        <p>
          Portfolio materials may be publicly displayed unless confidentiality is
          contractually requested. Intellectual property transfer terms are
          defined per project agreement.
        </p>
        <p>
          By submitting an inquiry, you consent to communication regarding your
          requested services.
        </p>
      </div>
    </section>
  );
}

