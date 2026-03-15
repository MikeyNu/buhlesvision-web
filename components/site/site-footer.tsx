import Link from "next/link";

import {
  COMPANY_EMAIL,
  COMPANY_EMAIL_MAILTO,
  COMPANY_LEGAL_NAME,
  COMPANY_PHONE,
  COMPANY_PHONE_TEL,
} from "@/lib/content/company";
import { socialLinks } from "@/lib/content/site-content";
import { BrandLockup } from "./brand-lockup";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-primary/10 bg-background-dark py-16 md:py-24">
      <div className="site-container">
        <div className="mb-14 grid grid-cols-1 gap-12 md:mb-24 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-8">
              <BrandLockup iconSize="sm" nameClassName="text-lg" />
            </div>
            <p className="max-w-md text-lg font-light text-stone-400 sm:text-xl">
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
              <li>
                <a className="transition-colors hover:text-primary" href={COMPANY_PHONE_TEL}>
                  {COMPANY_PHONE}
                </a>
              </li>
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
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest opacity-60 sm:gap-8 md:justify-start">
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
