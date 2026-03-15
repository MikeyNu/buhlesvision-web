import Image from "next/image";
import Link from "next/link";

import { MaterialIcon } from "@/components/site/material-icon";
import {
  COMPANY_EMAIL,
  COMPANY_EMAIL_MAILTO,
  COMPANY_FACEBOOK_URL,
  COMPANY_INSTAGRAM_URL,
} from "@/lib/content/company";
import { homeBrands, homeServices } from "@/lib/content/site-content";

export default function HomePage() {
  return (
    <>
      <section className="site-container relative flex min-h-[75vh] flex-col justify-center overflow-hidden pb-12 pt-20 sm:min-h-[82vh]">
        <div className="editorial-grid gap-y-12">
          <div className="col-span-12 lg:col-span-10">
            <h1 className="mb-8 text-5xl font-extrabold uppercase leading-[0.85] tracking-tighter sm:text-6xl md:text-8xl lg:text-[9rem]">
              High-End
              <br />
              <span className="text-primary">Digital</span>
              <br />
              Editorial.
            </h1>
            <p className="max-w-2xl text-base font-light leading-relaxed text-stone-400 sm:text-lg md:text-2xl">
              Buhle&apos;s Vision is a premier digital marketing agency crafting
              sophisticated narratives for brands that refuse to be ordinary.
              We blend editorial precision with high-performance strategy.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-white sm:w-auto sm:px-10 sm:py-5"
                href="/contact"
              >
                Start Your Project
                <MaterialIcon className="text-sm group-hover:translate-x-1" name="arrow_forward" />
              </Link>
              <Link
                className="w-full rounded-lg border border-stone-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-widest hover:bg-stone-800 sm:w-auto sm:px-10 sm:py-5"
                href="/portfolio"
              >
                View Showreel
              </Link>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </section>

      <div className="border-y border-stone-800 bg-background-deepest py-8">
        <div className="site-container flex flex-wrap items-center justify-between gap-8 opacity-40 grayscale">
          {homeBrands.map((brand) => (
            <span className="text-2xl font-extrabold tracking-tighter" key={brand}>
              {brand}
            </span>
          ))}
        </div>
      </div>

      <section className="site-container section-space-y">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Our Expertise
            </span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Meticulously Crafted Digital Solutions.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-stone-500">
            Each service is tailored to elevate your brand presence through an
            editorial lens, ensuring every pixel tells a story of luxury and
            intent.
          </p>
        </div>

        <div className="grid gap-px border border-stone-800 bg-background-deepest md:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((service) => (
            <article
              className="group bg-background-dark p-7 transition-colors hover:bg-primary/5 sm:p-10"
              key={service.title}
            >
              <MaterialIcon className="mb-6 text-4xl text-primary" name={service.icon} />
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tighter">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-500 group-hover:text-stone-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space-y overflow-hidden bg-background-deepest">
        <div className="site-container editorial-grid">
          <div className="col-span-12 mb-12 lg:col-span-5 lg:mb-0">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl font-extrabold uppercase leading-none tracking-tighter md:text-6xl">
                Why Choose
                <br />
                <span className="italic text-primary">The Vision?</span>
              </h2>
              <div className="mt-12 h-px w-24 bg-primary" />
              <div className="mt-12 space-y-6">
                {[
                  { number: "01", title: "Bespoke Approach" },
                  { number: "02", title: "Metric-Driven Results" },
                  { number: "03", title: "Cultural Relevance" },
                ].map((item) => (
                  <div className="flex gap-4" key={item.number}>
                    <span className="font-bold text-primary">{item.number}</span>
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 space-y-12 lg:col-span-7 lg:pl-12">
            <div className="space-y-6">
              <p className="text-2xl font-medium leading-snug md:text-3xl">
                At Buhle&apos;s Vision, we believe digital marketing is more than
                just algorithms. It&apos;s an art form that requires a curator&apos;s
                eye and a strategist&apos;s mind.
              </p>
              <p className="text-lg leading-relaxed text-stone-400">
                We don&apos;t believe in one-size-fits-all solutions. Your brand is
                unique, and its digital presence should reflect that. We immerse
                ourselves in your brand&apos;s world, understanding its nuances,
                heritage, and aspirations.
              </p>
              <p className="text-lg leading-relaxed text-stone-400">
                Our team brings together veterans from the luxury fashion,
                architectural, and tech worlds to provide a perspective that is
                rare in the digital marketing space.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 sm:gap-8 sm:pt-12">
              <div className="group relative aspect-square overflow-hidden rounded-lg bg-background-deepest">
                <Image
                  alt="Creative team collaborating in a modern studio"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  height={500}
                  src="/images/home-team-collab.jpg"
                  width={500}
                />
              </div>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-background-deepest sm:translate-y-12">
                <Image
                  alt="High-end digital interface on a screen"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  height={600}
                  src="/images/home-digital-work.jpg"
                  width={450}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container section-space-y">
        <div className="mb-20 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Selected Works
          </h2>
          <Link
            className="border-b border-primary pb-1 text-xs font-bold uppercase tracking-widest"
            href="/portfolio"
          >
            All Projects
          </Link>
        </div>
        <div className="space-y-0 border-t border-stone-800">
          {[
            {
              index: "01",
              name: "Plushy Plated",
              type: "Visual Identity & Web",
              meta: "2023 — Luxury Catering",
              slug: "plushy-plated",
            },
            {
              index: "02",
              name: "Sparche",
              type: "Content Direction",
              meta: "2023 — Interior Design",
              slug: "sparche",
            },
            {
              index: "03",
              name: "Lumina",
              type: "E-Commerce Strategy",
              meta: "2024 — Fine Jewelry",
              slug: "cifoods",
            },
          ].map((project) => (
            <Link
              className="group block border-b border-stone-800 py-12"
              href={`/portfolio/${project.slug}`}
              key={project.index}
            >
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div className="flex items-center gap-8">
                  <span className="text-sm font-bold text-stone-500">
                    {project.index}
                  </span>
                  <h3 className="text-3xl font-extrabold uppercase tracking-tighter transition-colors group-hover:text-primary sm:text-4xl md:text-6xl">
                    {project.name}
                  </h3>
                </div>
                <div className="flex flex-col gap-2 md:items-end">
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {project.type}
                  </span>
                  <span className="text-xs text-stone-500">{project.meta}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary pb-16 pt-20 text-white md:pt-32">
        <div className="site-container">
          <div className="editorial-grid mb-24 gap-12">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="mb-12 text-4xl font-extrabold uppercase leading-[0.85] tracking-tighter sm:text-5xl md:text-9xl">
                Ready To
                <br />
                Transform?
              </h2>
              <a
                className="border-b-4 border-white pb-2 text-2xl font-bold md:text-4xl"
                href={COMPANY_EMAIL_MAILTO}
              >
                {COMPANY_EMAIL}
              </a>
            </div>
            <div className="col-span-12 flex flex-col justify-end lg:col-span-4">
              <p className="mb-8 text-xl font-light">
                Join our exclusive network of forward-thinking brands.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest sm:gap-6">
                <a href={COMPANY_INSTAGRAM_URL} rel="noreferrer" target="_blank">
                  Instagram
                </a>
                <a href="https://linkedin.com" rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
                <a href="https://behance.net" rel="noreferrer" target="_blank">
                  Behance
                </a>
                <a href={COMPANY_FACEBOOK_URL} rel="noreferrer" target="_blank">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
