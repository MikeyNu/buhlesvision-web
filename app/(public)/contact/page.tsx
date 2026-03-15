import type { Metadata } from "next";
import Image from "next/image";

import { ContactForm } from "@/components/site/contact-form";

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
    <div className="mx-auto min-h-screen max-w-7xl px-8 pb-20 pt-32">
      <header className="relative mb-24">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-primary">
          Get in touch
        </span>
        <h1 className="font-display text-7xl font-extrabold leading-none tracking-tighter md:text-9xl">
          LET&apos;S BUILD
          <br />
          <span className="text-primary">YOUR VISION.</span>
        </h1>
        <div className="pointer-events-none absolute -left-20 -top-10 -z-10 hidden text-[180px] font-black uppercase opacity-20 lg:block">
          <span className="text-transparent [text-shadow:0_0_0_rgba(255,255,255,0.08)]">
            Contact
          </span>
        </div>
      </header>

      <div className="grid items-start gap-20 lg:grid-cols-2">
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
                  className="break-all text-3xl font-medium transition-colors hover:text-primary md:text-4xl"
                  href="mailto:info@buhlesvision.com"
                >
                  info@buhlesvision.com
                </a>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-slate-400">
                  Social Hub
                </p>
                <a
                  className="text-3xl font-medium transition-colors hover:text-primary md:text-4xl"
                  href="https://instagram.com"
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
              Studio Presence
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-slate-400">
                  Global HQ
                </p>
                <p className="text-lg leading-relaxed">
                  Cape Town, SA
                  <br />
                  V&amp;A Waterfront
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-slate-400">
                  Local Office
                </p>
                <p className="text-lg leading-relaxed">
                  Johannesburg, SA
                  <br />
                  Sandton Central
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-64 w-full overflow-hidden rounded-xl border border-slate-800">
            <Image
              alt="Abstract dark minimalist map graphic of Cape Town"
              className="h-full w-full object-cover opacity-50 grayscale transition-all duration-700 hover:grayscale-0"
              fill
              src="/images/contact-map.jpg"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-4 w-4 animate-ping rounded-full bg-primary" />
              <div className="absolute h-4 w-4 rounded-full bg-primary" />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-brand-blue/30 bg-white/5 p-8 backdrop-blur-sm md:p-12">
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
