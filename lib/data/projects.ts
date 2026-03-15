import { cache } from "react";

import { portfolioSeedProjects } from "@/lib/content/site-content";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { PortfolioProject } from "@/lib/types";

function mapProjectRowToModel(row: {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  scope: string;
  impact: string;
  focus: string;
  cover_image: string;
  excerpt: string;
  year: string;
  body: string[];
  is_case_study: boolean;
}): PortfolioProject {
  return {
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle,
    industry: row.industry,
    scope: row.scope,
    impact: row.impact,
    focus: row.focus,
    coverImage: row.cover_image,
    excerpt: row.excerpt,
    year: row.year,
    body: row.body,
    isCaseStudy: row.is_case_study,
  };
}

export const getProjects = cache(async (): Promise<PortfolioProject[]> => {
  const supabase = await getSupabaseServerClient();
  if (!supabase) {
    return portfolioSeedProjects;
  }

  const { data, error } = await supabase
    .from("projects")
    .select(
      "slug,title,subtitle,industry,scope,impact,focus,cover_image,excerpt,year,body,is_case_study,sort_order",
    )
    .order("sort_order", { ascending: true });

  if (error || !data || data.length === 0) {
    return portfolioSeedProjects;
  }

  return data.map(mapProjectRowToModel);
});

export async function getProjectBySlug(
  slug: string,
): Promise<PortfolioProject | null> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug) ?? null;
}

