import Link from "next/link";

import { COMPANY_EMAIL, COMPANY_EMAIL_MAILTO, COMPANY_LEGAL_NAME } from "@/lib/content/company";
import { socialLinks } from "@/lib/content/site-content";
import { BrandLockup } from "./brand-lockup";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-primary/10 bg-background-dark py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-8">
              <BrandLockup iconSize="sm" nameClassName="text-lg" />
            </div>
            <p className="max-w-md text-xl font-light text-stone-400">
              Designing for the bold. Creating for the future. Based digitally,
              working globally.
            </p>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-widest">
              Connect
            </h4>
            <ul className="space-y-4 text-stone-400">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="transition-colors hover:text-primary"
                    href={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-widest">
              Studio
            </h4>
            <ul className="space-y-4 text-stone-400">
              <li>
                <a className="transition-colors hover:text-primary" href={COMPANY_EMAIL_MAILTO}>
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li>+27 (0) 11 000 0000</li>
              <li className="pt-4 text-xs opacity-60">
                © 2026 {COMPANY_LEGAL_NAME}
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-6 border-t border-primary/5 pt-12 md:flex-row">
          <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none text-[12vw] font-black uppercase leading-none opacity-[0.03]">
            Aesthetic Future
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-60">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
          <div className="text-xs font-bold uppercase tracking-widest opacity-60">
            Crafted with Intent
          </div>
        </div>
      </div>
    </footer>
  );
}
