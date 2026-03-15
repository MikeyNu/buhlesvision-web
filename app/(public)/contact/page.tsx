import type { Metadata } from "next";

import { ContactForm } from "@/components/site/contact-form";
import { StudioMap } from "@/components/site/studio-map";
import {
  COMPANY_ADDRESS_LINE_1,
  COMPANY_ADDRESS_LINE_2,
  COMPANY_EMAIL,
  COMPANY_EMAIL_MAILTO,
  COMPANY_INSTAGRAM_URL,
} from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send an inquiry to Buhle's Vision.",
};

type ContactPageProps = {
  searchParams: Promise<{ inquiryType?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  return (
    <div className="site-container min-h-screen pb-20 pt-24 md:pt-32">
      <header className="relative mb-16 md:mb-24">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-primary">
          Get in touch
        </span>
        <h1 className="font-display text-5xl font-extrabold leading-none tracking-tighter sm:text-7xl md:text-9xl">
          LET&apos;S BUILD
          <br />
          <span className="text-primary">YOUR VISION.</span>
        </h1>
        <div className="pointer-events-none absolute -left-20 -top-10 -z-10 hidden text-[180px] font-black uppercase opacity-20 lg:block">
          <span className="contact-watermark-text text-transparent">
            Contact
          </span>
        </div>
      </header>

      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <section className="space-y-16">
          <div>
            <h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Direct Channels
            </h3>
            <div className="space-y-10">
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-slate-400">
                  Email us
                </p>
                <a
                  className="break-all text-2xl font-medium transition-colors hover:text-primary sm:text-3xl md:text-4xl"
                  href={COMPANY_EMAIL_MAILTO}
                >
                  {COMPANY_EMAIL}
                </a>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-slate-400">
                  Social Hub
                </p>
                <a
                  className="text-2xl font-medium transition-colors hover:text-primary sm:text-3xl md:text-4xl"
                  href={COMPANY_INSTAGRAM_URL}
                  rel="noreferrer"
                  target="_blank"
                >
                  @buhlesvision
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-10">
            <h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Address
            </h3>
            <p className="text-lg leading-relaxed text-slate-200">
              {COMPANY_ADDRESS_LINE_1}
              <br />
              {COMPANY_ADDRESS_LINE_2}
            </p>
          </div>

          <StudioMap />
        </section>

        <section className="rounded-2xl border border-brand-blue/30 bg-white/5 p-6 backdrop-blur-sm sm:p-8 md:p-12">
          <h2 className="mb-8 text-2xl font-bold">Send an inquiry</h2>
          <ContactForm
            initialInquiryType={params.inquiryType}
            sourcePage="/contact"
          />
        </section>
      </div>

    </div>
  );
}
