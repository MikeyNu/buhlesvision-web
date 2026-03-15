import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, getProjects } from "@/lib/data/projects";

type PortfolioDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PortfolioDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await getProjectBySlug(resolvedParams.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: project.title,
    description: project.excerpt,
  };
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const resolvedParams = await params;
  const project = await getProjectBySlug(resolvedParams.slug);
  if (!project) {
    notFound();
  }

  return (
    <article className="bg-background-dark pb-24 pt-32 text-slate-100">
      <header className="mx-auto max-w-7xl px-6">
        <Link
          className="mb-8 inline-flex text-xs font-bold uppercase tracking-widest text-primary"
          href="/portfolio"
        >
          ← Back to portfolio
        </Link>
        <h1 className="mb-6 text-6xl font-extrabold uppercase tracking-tighter md:text-8xl">
          {project.title}
        </h1>
        <p className="mb-12 max-w-3xl border-l-2 border-primary pl-4 text-xl italic text-slate-400">
          {project.subtitle}
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-6">
        <div className="relative mb-12 aspect-[21/9] overflow-hidden border border-white/10">
          <Image
            alt={project.title}
            className="h-full w-full object-cover opacity-70 grayscale"
            fill
            src={project.coverImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          {project.body.map((paragraph) => (
            <p className="text-lg leading-relaxed text-slate-300" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <aside className="space-y-6 border border-white/10 bg-background-deepest p-6">
          <dl className="space-y-5 text-[10px] uppercase tracking-[0.2em]">
            <div>
              <dt className="mb-2 text-slate-600">Industry</dt>
              <dd className="font-bold text-white">{project.industry}</dd>
            </div>
            <div>
              <dt className="mb-2 text-slate-600">Scope</dt>
              <dd className="font-bold text-white">{project.scope}</dd>
            </div>
            <div>
              <dt className="mb-2 text-slate-600">Impact</dt>
              <dd className="font-bold text-primary">{project.impact}</dd>
            </div>
            <div>
              <dt className="mb-2 text-slate-600">Focus</dt>
              <dd className="font-bold text-white">{project.focus}</dd>
            </div>
            <div>
              <dt className="mb-2 text-slate-600">Year</dt>
              <dd className="font-bold text-white">{project.year}</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6">
        <Link
          className="inline-flex rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:brightness-110"
          href={`/contact?inquiryType=${encodeURIComponent(`${project.title} Project`)}`}
        >
          Start a Similar Project
        </Link>
      </section>
    </article>
  );
}
