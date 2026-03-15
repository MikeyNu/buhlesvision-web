import {
  COMPANY_ADDRESS_LINE_1,
  COMPANY_ADDRESS_LINE_2,
  COMPANY_MAP_EMBED_URL,
  COMPANY_MAPS_URL,
} from "@/lib/content/company";
import { MaterialIcon } from "./material-icon";

export function StudioMap() {
  return (
    <div className="rounded-xl border border-slate-800 bg-background-deepest/40 p-3">
      <div className="relative h-72 overflow-hidden rounded-lg border border-slate-800">
        <iframe
          allowFullScreen
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={COMPANY_MAP_EMBED_URL}
          title="Buhles Vision office map"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background-dark/35 via-transparent to-transparent" />
      </div>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-widest text-slate-400">
          {COMPANY_ADDRESS_LINE_1} {COMPANY_ADDRESS_LINE_2}
        </p>
        <a
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:brightness-110"
          href={COMPANY_MAPS_URL}
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
