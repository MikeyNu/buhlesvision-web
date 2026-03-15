"use client";

import { useActionState } from "react";

import { deleteProject, saveProject } from "@/lib/actions/projects";
import type { ActionState } from "@/lib/actions/schemas";
import type { PortfolioProject } from "@/lib/types";

const initialState: ActionState = { status: "idle" };

type ProjectEditorProps = {
  projects: PortfolioProject[];
};

export function ProjectEditor({ projects }: ProjectEditorProps) {
  const [state, action, pending] = useActionState(saveProject, initialState);

  return (
    <div className="space-y-8">
      <form
        action={action}
        className="grid gap-4 rounded-xl border border-stone-800 bg-background-dark p-6 md:grid-cols-2"
      >
        <h3 className="md:col-span-2 text-xl font-bold uppercase tracking-widest">
          Upsert Project
        </h3>
        {[
          ["slug", "Slug"],
          ["title", "Title"],
          ["subtitle", "Subtitle"],
          ["industry", "Industry"],
          ["scope", "Scope"],
          ["impact", "Impact"],
          ["focus", "Focus"],
          ["coverImage", "Cover Image Path"],
          ["excerpt", "Excerpt"],
          ["year", "Year"],
          ["sortOrder", "Sort Order"],
        ].map(([name, label]) => (
          <label className="text-[10px] uppercase tracking-widest text-stone-400" key={name}>
            {label}
            <input
              className="mt-2 h-11 w-full rounded border border-stone-700 bg-background-deep px-3 text-sm text-stone-100"
              defaultValue={name === "coverImage" ? "/images/" : name === "sortOrder" ? "0" : ""}
              name={name}
              required={name !== "sortOrder"}
            />
            {state.fieldErrors?.[name]?.[0] ? (
              <span className="mt-1 block text-xs text-primary">
                {state.fieldErrors[name]?.[0]}
              </span>
            ) : null}
          </label>
        ))}

        <label className="text-[10px] uppercase tracking-widest text-stone-400 md:col-span-2">
          Body (one paragraph per line)
          <textarea
            className="mt-2 min-h-28 w-full rounded border border-stone-700 bg-background-deep px-3 py-2 text-sm text-stone-100"
            name="body"
            required
          />
        </label>

        <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-300 md:col-span-2">
          <input className="h-4 w-4" name="isCaseStudy" type="checkbox" />
          Mark as Case Study
        </label>

        <button
          className="md:col-span-2 rounded bg-primary px-5 py-3 text-xs font-bold uppercase tracking-widest text-white"
          disabled={pending}
          type="submit"
        >
          {pending ? "Saving..." : "Save Project"}
        </button>

        {state.message ? (
          <p className={`md:col-span-2 text-sm ${state.status === "error" ? "text-primary" : "text-emerald-400"}`}>
            {state.message}
          </p>
        ) : null}
      </form>

      <div className="rounded-xl border border-stone-800 bg-background-dark p-6">
        <h3 className="mb-4 text-xl font-bold uppercase tracking-widest">Existing Projects</h3>
        <div className="space-y-3">
          {projects.map((project) => (
            <div
              className="flex flex-col justify-between gap-3 rounded border border-stone-800 p-3 md:flex-row md:items-center"
              key={project.slug}
            >
              <div>
                <p className="font-semibold">{project.title}</p>
                <p className="text-xs uppercase tracking-widest text-stone-500">{project.slug}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded border border-stone-700 px-2 py-1 text-[10px] uppercase tracking-widest text-stone-400">
                  {project.isCaseStudy ? "Case Study" : "Project"}
                </span>
                <form action={deleteProject}>
                  <input name="slug" type="hidden" value={project.slug} />
                  <button
                    className="rounded border border-primary/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary"
                    type="submit"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

