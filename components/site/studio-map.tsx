"use client";

import { useState } from "react";

import { cn } from "@/lib/utils/cn";
import { MaterialIcon } from "./material-icon";

const studioMaps = [
  {
    id: "cape-town",
    label: "Cape Town HQ",
    address: "V&A Waterfront, Cape Town, South Africa",
    embedUrl:
      "https://www.google.com/maps?q=V%26A%20Waterfront%2C%20Cape%20Town%2C%20South%20Africa&z=14&output=embed",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=V%26A+Waterfront%2C+Cape+Town%2C+South+Africa",
  },
  {
    id: "johannesburg",
    label: "Johannesburg Office",
    address: "Sandton Central, Johannesburg, South Africa",
    embedUrl:
      "https://www.google.com/maps?q=Sandton%20Central%2C%20Johannesburg%2C%20South%20Africa&z=14&output=embed",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sandton+Central%2C+Johannesburg%2C+South+Africa",
  },
] as const;

type StudioId = (typeof studioMaps)[number]["id"];

export function StudioMap() {
  const [activeStudioId, setActiveStudioId] = useState<StudioId>("cape-town");
  const activeStudio =
    studioMaps.find((studio) => studio.id === activeStudioId) ?? studioMaps[0];

  return (
    <div className="rounded-xl border border-slate-800 bg-background-deepest/40 p-3">
      <div className="mb-3 flex flex-wrap gap-2">
        {studioMaps.map((studio) => (
          <button
            className={cn(
              "rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-colors",
              activeStudioId === studio.id
                ? "border-primary bg-primary text-white"
                : "border-slate-700 text-slate-300 hover:border-primary hover:text-primary",
            )}
            key={studio.id}
            onClick={() => setActiveStudioId(studio.id)}
            type="button"
          >
            {studio.label}
          </button>
        ))}
      </div>

      <div className="relative h-72 overflow-hidden rounded-lg border border-slate-800">
        <iframe
          allowFullScreen
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={activeStudio.embedUrl}
          title={`${activeStudio.label} map`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background-dark/35 via-transparent to-transparent" />
      </div>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-widest text-slate-400">
          {activeStudio.address}
        </p>
        <a
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:brightness-110"
          href={activeStudio.mapsUrl}
          rel="noreferrer"
          target="_blank"
        >
          Open in Maps
          <MaterialIcon className="text-sm" name="open_in_new" />
        </a>
      </div>
    </div>
  );
}
