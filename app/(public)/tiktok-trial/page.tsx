import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { MaterialIcon } from "@/components/site/material-icon";

export const metadata: Metadata = {
  title: "TikTok Trial",
  description: "30-day TikTok marketing trial program by Buhle's Vision.",
};

export default function TikTokTrialPage() {
  return (
    <div>
      <section className="relative min-h-[80vh] overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-background-dark via-background-dark/70 to-transparent" />
          <Image
            alt="Modern smartphone displaying viral TikTok video interface"
            className="h-full w-full object-cover opacity-25 grayscale"
            fill
            src="/images/tiktok-hero.jpg"
          />
        </div>
        <div className="relative z-20 mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-3xl">
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Exclusive Trial Program
            </span>
            <h1 className="mb-8 text-7xl font-extrabold leading-[0.9] tracking-tighter md:text-8xl">
              TIKTOK
              <br />
              <span className="italic text-primary">MARKETING</span>
              <br />
              TRIAL.
            </h1>
            <p className="mb-10 max-w-xl text-xl leading-relaxed text-stone-400">
              Precision-engineered campaigns for brands that demand cultural
              relevance. Elevate your narrative through our proprietary 30-day
              algorithmic acceleration.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                className="flex items-center justify-center gap-3 rounded-lg bg-primary px-10 py-5 text-lg font-bold uppercase tracking-tighter text-white"
                href="/contact?inquiryType=TikTok%20Trial"
              >
                Apply for Trial <MaterialIcon name="arrow_forward" />
              </Link>
              <a
                className="flex items-center justify-center rounded-lg bg-background-deepest px-10 py-5 text-lg font-bold uppercase tracking-tighter"
                href="#roadmap"
              >
                View Methodology
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-deepest py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-16 px-6 lg:flex-row">
          <div className="lg:w-1/3">
            <h2 className="mb-6 text-4xl font-bold tracking-tighter">
              Hyper-Targeted
              <br />
              Selection.
            </h2>
            <p className="mb-8 text-stone-400">
              Customize your trial focus. We don&apos;t just broadcast; we aim with
              precision to reach your ideal audience where they are most
              attentive.
            </p>
            <div className="mb-8 h-px bg-gradient-to-r from-primary to-transparent" />
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary">
                <MaterialIcon className="text-sm" name="check_circle" />
                Demographic Calibration
              </li>
              <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-stone-400">
                <MaterialIcon className="text-sm" name="circle" />
                Psychographic Mapping
              </li>
              <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-stone-400">
                <MaterialIcon className="text-sm" name="circle" />
                Interest Graph Optimization
              </li>
            </ul>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:w-2/3">
            <article className="rounded-xl border border-stone-800 bg-background-dark p-8 shadow-xl shadow-primary/5">
              <MaterialIcon className="mb-4 text-4xl text-primary" name="person_search" />
              <h3 className="mb-4 text-xl font-bold">Audience Persona</h3>
              <div className="space-y-4">
                {[
                  { label: "Gen Z / Alpha", selected: true },
                  { label: "Tech Enthusiasts", selected: false },
                  { label: "Eco-Conscious", selected: false },
                ].map((item) => (
                  <div
                    className="flex h-12 items-center justify-between rounded border border-stone-700 bg-background-deepest px-4"
                    key={item.label}
                  >
                    <span className="text-xs font-bold uppercase">{item.label}</span>
                    <MaterialIcon
                      className={item.selected ? "text-primary" : "text-stone-400"}
                      name={
                        item.selected
                          ? "radio_button_checked"
                          : "radio_button_unchecked"
                      }
                    />
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-xl border border-stone-800 bg-background-dark p-8 shadow-xl shadow-primary/5">
              <MaterialIcon className="mb-4 text-4xl text-primary" name="map" />
              <h3 className="mb-4 text-xl font-bold">Regional Reach</h3>
              <div className="relative h-48 overflow-hidden rounded-lg border border-stone-700 bg-background-deepest">
                <Image
                  alt="Abstract dark world map with orange pin indicators"
                  className="h-full w-full object-cover opacity-60"
                  fill
                  src="/images/tiktok-map.jpg"
                />
              </div>
              <div className="mt-4 flex justify-between text-[10px] font-black uppercase tracking-widest text-stone-500">
                <span>Global Tier 1</span>
                <span className="italic text-primary">Live Selection</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-background-dark py-24">
        <div className="mx-auto mb-16 max-w-7xl px-6 text-center">
          <h2 className="mb-4 text-5xl font-extrabold uppercase italic tracking-tighter">
            Unlocking the Power
          </h2>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
            TikTok Marketing Optimization
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Viral Growth",
              text: "Leverage organic trends before they peak and position your brand at the center of the conversation.",
            },
            {
              number: "02",
              title: "Algo-Ready",
              text: "Every frame, hook, and caption is tuned for retention and engagement under current algorithm signals.",
            },
            {
              number: "03",
              title: "Authenticity",
              text: "Editorial-grade content that feels native, building trust with hard-to-reach demographics.",
            },
          ].map((item) => (
            <article className="group" key={item.number}>
              <div className="mb-6 h-px bg-stone-800 transition-colors group-hover:bg-primary" />
              <span className="mb-4 block text-6xl font-black italic text-stone-700">
                {item.number}
              </span>
              <h3 className="mb-4 text-2xl font-bold uppercase">{item.title}</h3>
              <p className="leading-relaxed text-stone-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-t border-stone-800 py-24" id="roadmap">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative mb-20">
            <h2 className="pointer-events-none absolute -translate-y-16 text-6xl font-black tracking-tighter text-stone-900 md:text-8xl">
              ROADMAP
            </h2>
            <h2 className="mb-4 text-4xl font-bold tracking-tighter">
              30-Day Accelerator <span className="italic text-primary">Blueprint</span>
            </h2>
            <p className="text-stone-500">Six stages of radical brand transformation.</p>
          </div>

          <div className="space-y-0">
            {[
              ["01", "Account Audit", "analytics"],
              ["02", "Trend Research", "trending_up"],
              ["03", "Content Strategy", "edit_note"],
              ["04", "Production Management", "movie_filter"],
              ["05", "Ad Spend Allocation", "payments"],
              ["06", "Weekly Analytics", "query_stats"],
            ].map(([number, title, icon]) => (
              <div
                className="group grid grid-cols-1 gap-6 border-b border-stone-800 px-4 py-12 transition-colors hover:bg-white/5 md:grid-cols-12"
                key={number}
              >
                <div className="md:col-span-1">
                  <span className="text-3xl font-black italic text-primary">{number}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{title}</h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-stone-400">
                    Operational stage aligned to campaign execution, audience
                    calibration, and performance reporting.
                  </p>
                </div>
                <div className="flex justify-end md:col-span-2">
                  <MaterialIcon
                    className="text-stone-700 transition-colors group-hover:text-primary"
                    name={icon}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-32">
        <div className="mx-auto max-w-7xl px-6 text-center text-white">
          <h2 className="mb-8 text-5xl font-extrabold uppercase italic tracking-tighter md:text-7xl">
            Ready for the Spotlight?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl opacity-90">
            Limited trial slots available per quarter. Secure your brand&apos;s
            digital vision today.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Link
              className="rounded-lg bg-white px-12 py-6 text-xl font-black uppercase tracking-tighter text-primary"
              href="/contact?inquiryType=TikTok%20Trial"
            >
              Claim Your Trial
            </Link>
            <Link
              className="rounded-lg border-2 border-white/30 px-12 py-6 text-xl font-black uppercase tracking-tighter text-white hover:border-white"
              href="/contact?inquiryType=TikTok%20Strategy%20Call"
            >
              Talk to a Strategist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
