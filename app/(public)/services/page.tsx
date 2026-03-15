import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { MaterialIcon } from "@/components/site/material-icon";

const plans = [
  {
    label: "Foundation",
    name: "Starter",
    price: "$1,200",
    suffix: "/mo",
    description:
      "Essential digital presence for emerging luxury brands and boutiques.",
    features: ["8 Static Posts", "Basic Strategy", "Community Mgmt"],
    highlighted: false,
  },
  {
    label: "Scalability",
    name: "Growth",
    price: "$2,800",
    suffix: "/mo",
    description:
      "Aggressive growth tactics focusing on community and video reach.",
    features: ["12 Static + 4 Reels", "Monthly Audit", "Influencer Outreach"],
    highlighted: false,
  },
  {
    label: "Expansion",
    name: "Premium",
    price: "$4,500",
    suffix: "/mo",
    description:
      "Comprehensive high-frequency content strategy with premium assets.",
    features: ["20 Posts + 8 Reels", "Weekly Analytics", "Paid Ad Management"],
    highlighted: true,
  },
  {
    label: "Custom",
    name: "Enterprise",
    price: "Custom",
    suffix: "/starting",
    description:
      "Bespoke 360° strategy for established industry leaders and global brands.",
    features: [
      "Dedicated Account Mgr",
      "On-site Content Days",
      "Global PR Sync",
    ],
    highlighted: false,
  },
] as const;

export const metadata: Metadata = {
  title: "Services",
  description:
    "Pricing tiers, comparison matrix, and additional service offerings.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background-deepest pb-20 pt-32 text-off-white">
      <section className="mx-auto mb-24 max-w-7xl px-6 text-center">
        <h1 className="mb-8 text-6xl font-light tracking-tight md:text-8xl">
          Packages <span className="italic text-primary">&amp;</span> Services
        </h1>
        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-off-white/60 md:text-xl">
          Elevating your digital presence through strategic high-end editorial
          design and content management tailored for the modern luxury market.
        </p>
      </section>

      <section className="mx-auto mb-32 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              className={`relative flex flex-col border p-8 ${
                plan.highlighted
                  ? "border-2 border-primary bg-primary/10"
                  : "border-off-white/10 hover:border-primary/50"
              }`}
              key={plan.name}
            >
              {plan.highlighted ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Most Popular
                </div>
              ) : null}
              <span className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-off-white/40">
                {plan.label}
              </span>
              <h3 className="mb-6 text-2xl font-bold">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-off-white/40">{plan.suffix}</span>
              </div>
              <p className="mb-8 text-sm leading-relaxed text-off-white/70">
                {plan.description}
              </p>
              <div className="mb-8 mt-auto space-y-4">
                {plan.features.map((feature) => (
                  <div className="flex items-center text-sm" key={feature}>
                    <MaterialIcon
                      className={`mr-2 text-sm ${plan.highlighted ? "text-white" : "text-primary"}`}
                      name="check_circle"
                      outlined
                    />
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                className={`w-full py-4 text-center text-xs font-bold uppercase tracking-widest ${
                  plan.highlighted
                    ? "bg-primary text-white"
                    : "border border-primary text-primary hover:bg-primary hover:text-white"
                }`}
                href={`/contact?inquiryType=${encodeURIComponent(`${plan.name} Plan`)}`}
              >
                {plan.name === "Enterprise" ? "Contact Us" : "Select Plan"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-32 max-w-7xl px-6">
        <h2 className="mb-16 text-4xl font-light tracking-tight">
          Comprehensive <span className="italic text-primary">Comparison</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-off-white/10 text-left">
                <th className="w-1/4 py-8 text-xs font-normal uppercase tracking-widest text-off-white/40">
                  Features
                </th>
                <th className="py-8 text-center text-sm font-bold uppercase tracking-widest">
                  Starter
                </th>
                <th className="py-8 text-center text-sm font-bold uppercase tracking-widest">
                  Growth
                </th>
                <th className="py-8 text-center text-sm font-bold uppercase tracking-widest text-primary">
                  Premium
                </th>
                <th className="py-8 text-center text-sm font-bold uppercase tracking-widest">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-off-white/10">
              <tr>
                <td className="py-6 text-sm font-semibold uppercase tracking-tight text-off-white/40">
                  Content &amp; Visuals
                </td>
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td className="py-6 text-sm">Static Posts (Monthly)</td>
                <td className="py-6 text-center text-off-white/60">8</td>
                <td className="py-6 text-center text-off-white/60">12</td>
                <td className="py-6 text-center font-bold text-white">20</td>
                <td className="py-6 text-center text-off-white/60">Unlimited</td>
              </tr>
              <tr>
                <td className="py-6 text-sm">Video Content / Reels</td>
                <td className="py-6 text-center text-off-white/60">—</td>
                <td className="py-6 text-center text-off-white/60">4</td>
                <td className="py-6 text-center font-bold text-white">8</td>
                <td className="py-6 text-center text-off-white/60">Custom</td>
              </tr>
              <tr>
                <td className="py-6 text-sm">Professional Editing</td>
                <td className="py-6 text-center text-off-white/20">✕</td>
                <td className="py-6 text-center text-primary">✓</td>
                <td className="py-6 text-center text-primary">✓</td>
                <td className="py-6 text-center text-primary">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto mb-32 max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 text-4xl font-light tracking-tight">
              Additional <span className="italic text-primary">Offerings</span>
            </h2>
            <p className="max-w-xl text-off-white/60">
              A-la-carte services for brands looking for specific creative
              interventions beyond monthly management.
            </p>
          </div>
          <Link
            className="border-b border-primary pb-1 text-sm font-bold uppercase tracking-widest text-primary"
            href="/contact?inquiryType=Additional%20Offerings"
          >
            View Full Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Brand Identity",
              price: "Starting from $3,500",
              image: "/images/services-branding.jpg",
              description:
                "Logo suites, typography, color systems, and comprehensive brand guidelines for luxury positioning.",
            },
            {
              title: "Creative Direction",
              price: "Starting from $2,000",
              image: "/images/services-photoshoot.jpg",
              description:
                "Full-day editorial photoshoots, UGC curation, and high-fashion creative conceptualization.",
            },
            {
              title: "Web Experiences",
              price: "Starting from $5,000",
              image: "/images/services-web.jpg",
              description:
                "Immersive, high-performance web design and development for premium digital storefronts.",
            },
          ].map((offering) => (
            <article className="group cursor-pointer" key={offering.title}>
              <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-off-white/5">
                <Image
                  alt={offering.title}
                  className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                  height={500}
                  src={offering.image}
                  width={700}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-xl font-bold">{offering.title}</h4>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-primary">
                    {offering.price}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-off-white/60">
                {offering.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-20 max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-xl bg-primary p-12 text-center md:p-20">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0 100 L100 0 L100 100 Z" fill="white" />
            </svg>
          </div>
          <h2 className="relative mb-8 text-4xl font-bold tracking-tighter text-white md:text-6xl">
            Ready to redefine
            <br />
            your vision?
          </h2>
          <p className="relative mx-auto mb-12 max-w-xl text-lg text-white/80">
            Join the ranks of high-performing luxury brands. Let&apos;s build
            something exceptional together.
          </p>
          <div className="relative flex flex-col items-center justify-center gap-6 md:flex-row">
            <Link
              className="bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-primary hover:scale-105"
              href="/contact?inquiryType=Strategy%20Session"
            >
              Book a Strategy Session
            </Link>
            <Link
              className="border border-white/40 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10"
              href="/contact?inquiryType=Rate%20Card%20Request"
            >
              Download Rate Card
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

