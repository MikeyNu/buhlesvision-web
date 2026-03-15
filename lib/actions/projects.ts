"use server";

import { revalidatePath } from "next/cache";

import { getSupabaseServerClient } from "@/lib/supabase/server";
import { type ActionState, projectSchema } from "./schemas";

function parseBoolean(value: FormDataEntryValue | null): boolean {
  return String(value) === "on";
}

function parseNumber(value: FormDataEntryValue | null): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

export async function saveProject(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = projectSchema.safeParse({
    slug: formData.get("slug"),
    title: formData.get("title"),
    subtitle: formData.get("subtitle"),
    industry: formData.get("industry"),
    scope: formData.get("scope"),
    impact: formData.get("impact"),
    focus: formData.get("focus"),
    coverImage: formData.get("coverImage"),
    excerpt: formData.get("excerpt"),
    year: formData.get("year"),
    body: formData.get("body"),
    isCaseStudy: parseBoolean(formData.get("isCaseStudy")),
    sortOrder: parseNumber(formData.get("sortOrder")),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Project validation failed.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const supabase = await getSupabaseServerClient();
  if (!supabase) {
    return {
      status: "error",
      message: "Supabase is not configured.",
    };
  }

  const { data } = await supabase.auth.getUser();
  if (!data.user) {
    return {
      status: "error",
      message: "You must be signed in to update projects.",
    };
  }

  const { error } = await supabase.from("projects").upsert(
    {
      slug: parsed.data.slug,
      title: parsed.data.title,
      subtitle: parsed.data.subtitle,
      industry: parsed.data.industry,
      scope: parsed.data.scope,
      impact: parsed.data.impact,
      focus: parsed.data.focus,
      cover_image: parsed.data.coverImage,
      excerpt: parsed.data.excerpt,
      year: parsed.data.year,
      body: parsed.data.body
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
      is_case_study: parsed.data.isCaseStudy,
      sort_order: parsed.data.sortOrder,
    },
    { onConflict: "slug" },
  );

  if (error) {
    return {
      status: "error",
      message: "Unable to save project.",
    };
  }

  revalidatePath("/portfolio");
  revalidatePath("/admin/projects");

  return {
    status: "success",
    message: "Project saved successfully.",
  };
}

export async function deleteProject(formData: FormData): Promise<void> {
  const slug = String(formData.get("slug") ?? "");
  if (!slug) {
    return;
  }

  const supabase = await getSupabaseServerClient();
  if (!supabase) {
    return;
  }

  const { data } = await supabase.auth.getUser();
  if (!data.user) {
    return;
  }

  await supabase.from("projects").delete().eq("slug", slug);
  revalidatePath("/portfolio");
  revalidatePath("/admin/projects");
}

