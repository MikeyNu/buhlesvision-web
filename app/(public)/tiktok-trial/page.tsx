import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { MaterialIcon } from "@/components/site/material-icon";

const targetingPillars = [
  {
    title: "Niche Audience Reach",
    text: "Identify and engage specific audience segments through targeted content so your brand resonates with the right demographics for maximum impact and relevance.",
  },
  {
    title: "Trends Integration",
    text: "Integrate current trends into your content strategy to leverage what is popular and increase visibility and engagement on TikTok.",
  },
  {
    title: "Campaign Timeline",
    text: "Establish a clear campaign timeline with key milestones and activities, giving your team full visibility into execution and expected outcomes.",
  },
  {
    title: "Hashtag Strategies",
    text: "Use targeted hashtag and keyword frameworks to improve discoverability and reach users who are most likely to engage and convert.",
  },
] as const;

const keyBenefits = [
  {
    number: "01",
    title: "Brand Awareness",
    text: "TikTok significantly boosts brand visibility, reaching large active audiences and elevating your presence in the digital landscape.",
  },
  {
    number: "02",
    title: "Engagement Boosts",
    text: "The platform enables high interactive engagement, helping brands build stronger customer relationships and loyalty.",
  },
  {
    number: "03",
    title: "Lead Generation",
    text: "Well-structured TikTok campaigns drive targeted traffic and convert engaged viewers into potential customers.",
  },
] as const;

const trialPackageItems = [
  {
    number: "01",
    title: "Strategy & Planning",
    icon: "analytics",
    details: [
      "Development of a monthly TikTok content strategy aligned with brand goals.",
      "Competitor and industry analysis for positioning.",
    ],
  },
  {
    number: "02",
    title: "Content Creation & Production",
    icon: "movie_filter",
    details: [
      "Creation of 4 TikTok videos for the trial.",
      "Basic video editing: cuts, captions, transitions, music selection, and branded elements.",
      "Creative concept development for each video plus royalty-free music sourcing where applicable.",
    ],
  },
  {
    number: "03",
    title: "Content Management",
    icon: "edit_note",
    details: [
      "Optimization of posts with targeted hashtags and keywords.",
      "Caption writing tailored for TikTok's algorithm and audience.",
    ],
  },
  {
    number: "04",
    title: "Account Growth & Optimization",
    icon: "trending_up",
    details: [
      "Profile optimization including bio enhancement, link management, and branding elements.",
      "Growth tactics through active engagement with trends, niches, and community content.",
    ],
  },
  {
    number: "05",
    title: "Analytics & Reporting",
    icon: "query_stats",
    details: [
      "Monthly performance report covering views, engagement, and follower growth.",
      "Best-performing content insights and improvement recommendations.",
    ],
  },
  {
    number: "06",
    title: "Optional Add-Ons (Billed Separately)",
    icon: "add_circle",
    details: [
      "Paid ads management (TikTok Ads).",
      "Influencer search and collaboration management.",
      "Content shoots requiring travel or special equipment.",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "TikTok Trial",
  description: "30-day TikTok marketing trial program by Buhle's Vision.",
};

export default function TikTokTrialPage() {
  return (
    <div>
      <section className="relative min-h-[70vh] overflow-hidden border-b border-stone-800 md:min-h-[80vh]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-background-dark via-background-dark/70 to-transparent" />
          <Image
            alt="Modern smartphone displaying viral TikTok video interface"
            className="h-full w-full object-cover opacity-25 grayscale"
            fill
            src="/images/tiktok-hero.jpg"
          />
        </div>
        <div className="site-container relative z-20 py-20 md:py-28">
          <div className="max-w-4xl">
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              TikTok Marketing Package — 30 Day Trial
            </span>
            <h1 className="mb-8 text-5xl font-extrabold leading-[0.9] tracking-tighter sm:text-6xl md:text-8xl">
              TIKTOK
              <br />
              <span className="italic text-primary">MARKETING</span>
              <br />
              TRIAL.
            </h1>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-stone-400 sm:text-xl">
              A focused 30-day trial designed to improve visibility, engagement,
              and lead generation through strategy, content production, optimization,
              and reporting.
            </p>
            <div className="mb-6 inline-flex rounded-full border border-primary/40 px-5 py-2 text-sm font-bold uppercase tracking-widest text-primary">
              Cost Of Service: R1 500
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-primary px-6 py-4 text-base font-bold uppercase tracking-tighter text-white sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
                href="/contact?inquiryType=TikTok%20Trial"
              >
                Apply for Trial <MaterialIcon name="arrow_forward" />
              </Link>
              <a
                className="flex w-full items-center justify-center rounded-lg bg-background-deepest px-6 py-4 text-base font-bold uppercase tracking-tighter sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
                href="#package-breakdown"
              >
                View Package
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-y-tight bg-background-deepest">
        <div className="site-container">
          <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl">
                Customization <span className="italic text-primary">&amp; Targeting</span>
              </h2>
              <p className="max-w-2xl text-stone-400">
                Built around audience relevance, trend timing, and content discoverability.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {targetingPillars.map((item, index) => (
              <article
                className="rounded-xl border border-stone-800 bg-background-dark p-8 shadow-xl shadow-primary/5"
                key={item.title}
              >
                <span className="mb-4 inline-flex rounded-full border border-primary/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                  Pillar {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-4 text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="leading-relaxed text-stone-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-y-tight bg-background-dark">
        <div className="site-container mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold uppercase italic tracking-tighter sm:text-4xl md:text-5xl">
            Key Benefits
          </h2>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
            Unlocking the Power of TikTok Marketing
          </p>
        </div>
        <div className="site-container grid grid-cols-1 gap-12 md:grid-cols-3">
          {keyBenefits.map((item) => (
            <article className="group" key={item.number}>
              <div className="mb-6 h-px bg-stone-800 transition-colors group-hover:bg-primary" />
              <span className="mb-4 block text-5xl font-black italic text-stone-700 md:text-6xl">
                {item.number}
              </span>
              <h3 className="mb-4 text-2xl font-bold uppercase">{item.title}</h3>
              <p className="leading-relaxed text-stone-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space-y-tight overflow-hidden border-t border-stone-800" id="package-breakdown">
        <div className="site-container">
          <div className="relative mb-20">
            <h2 className="pointer-events-none absolute -translate-y-16 hidden text-6xl font-black tracking-tighter text-stone-900 md:block md:text-8xl">
              PACKAGE
            </h2>
            <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              30-Day Trial <span className="italic text-primary">Breakdown</span>
            </h2>
            <p className="text-stone-500">
              Six delivery modules included in the TikTok Marketing Trial.
            </p>
          </div>

          <div className="space-y-0">
            {trialPackageItems.map((item) => (
              <div
                className="group grid grid-cols-1 gap-6 border-b border-stone-800 px-4 py-12 transition-colors hover:bg-white/5 md:grid-cols-12"
                key={item.number}
              >
                <div className="md:col-span-1">
                  <span className="text-3xl font-black italic text-primary">{item.number}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{item.title}</h3>
                </div>
                <div className="md:col-span-5">
                  <ul className="space-y-3">
                    {item.details.map((detail) => (
                      <li className="text-stone-400" key={detail}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end md:col-span-2">
                  <MaterialIcon
                    className="text-stone-700 transition-colors group-hover:text-primary"
                    name={item.icon}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-20 md:py-32">
        <div className="site-container text-center text-white">
          <h2 className="mb-8 text-4xl font-extrabold uppercase italic tracking-tighter sm:text-5xl md:text-7xl">
            Ready for the Spotlight?
          </h2>
          <p className="mx-auto mb-4 max-w-2xl text-xl opacity-90">
            TikTok Marketing Trial — 30 Days
          </p>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-bold opacity-95">
            Cost Of Service: R1 500
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Link
              className="w-full rounded-lg bg-white px-8 py-4 text-base font-black uppercase tracking-tighter text-primary sm:w-auto sm:px-12 sm:py-6 sm:text-xl"
              href="/contact?inquiryType=TikTok%20Trial"
            >
              Claim Your Trial
            </Link>
            <Link
              className="w-full rounded-lg border-2 border-white/30 px-8 py-4 text-base font-black uppercase tracking-tighter text-white hover:border-white sm:w-auto sm:px-12 sm:py-6 sm:text-xl"
              href="/contact?inquiryType=TikTok%20Trial%20Consultation"
            >
              Talk to a Strategist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
