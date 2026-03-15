"use client";

import { useActionState } from "react";

import { submitInquiry } from "@/lib/actions/inquiries";
import type { ActionState } from "@/lib/actions/schemas";
import { MaterialIcon } from "./material-icon";

const initialState: ActionState = {
  status: "idle",
};

type ContactFormProps = {
  sourcePage: string;
  initialInquiryType?: string;
};

export function ContactForm({ sourcePage, initialInquiryType }: ContactFormProps) {
  const [state, action, pending] = useActionState(submitInquiry, initialState);

  return (
    <form action={action} className="space-y-8">
      <input name="sourcePage" type="hidden" value={sourcePage} />
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label
            className="mb-2 block text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="w-full border-0 border-b-2 border-brand-blue/30 bg-transparent px-0 py-3 text-base placeholder:text-slate-700 transition-colors focus:border-primary focus:ring-0 dark:placeholder:text-slate-500 sm:text-lg"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            type="text"
          />
          {state.fieldErrors?.fullName?.[0] ? (
            <p className="mt-2 text-xs text-primary">{state.fieldErrors.fullName[0]}</p>
          ) : null}
        </div>

        <div>
          <label
            className="mb-2 block text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            className="w-full border-0 border-b-2 border-brand-blue/30 bg-transparent px-0 py-3 text-base placeholder:text-slate-700 transition-colors focus:border-primary focus:ring-0 dark:placeholder:text-slate-500 sm:text-lg"
            id="companyName"
            name="companyName"
            placeholder="Visionary Inc."
            type="text"
          />
        </div>
      </div>

      <div>
        <label
          className="mb-2 block text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400"
          htmlFor="inquiryType"
        >
          Inquiry Type
        </label>
        <select
          className="w-full appearance-none border-0 border-b-2 border-brand-blue/30 bg-transparent px-0 py-3 text-base transition-colors focus:border-primary focus:ring-0 sm:text-lg"
          defaultValue={initialInquiryType ?? "Brand Identity"}
          id="inquiryType"
          name="inquiryType"
        >
          <option className="bg-background-dark">Brand Identity</option>
          <option className="bg-background-dark">Digital Marketing</option>
          <option className="bg-background-dark">Editorial Design</option>
          <option className="bg-background-dark">UI/UX Design</option>
          <option className="bg-background-dark">TikTok Trial</option>
          <option className="bg-background-dark">Strategy Session</option>
        </select>
        {state.fieldErrors?.inquiryType?.[0] ? (
          <p className="mt-2 text-xs text-primary">
            {state.fieldErrors.inquiryType[0]}
          </p>
        ) : null}
      </div>

      <div>
        <label
          className="mb-2 block text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400"
          htmlFor="message"
        >
          Your Message
        </label>
        <textarea
          className="w-full resize-none border-0 border-b-2 border-brand-blue/30 bg-transparent px-0 py-3 text-base placeholder:text-slate-700 transition-colors focus:border-primary focus:ring-0 dark:placeholder:text-slate-500 sm:text-lg"
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          rows={4}
        />
        {state.fieldErrors?.message?.[0] ? (
          <p className="mt-2 text-xs text-primary">{state.fieldErrors.message[0]}</p>
        ) : null}
      </div>

      <button
        className="group flex w-full items-center justify-center gap-3 rounded-lg bg-primary py-5 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary/90"
        disabled={pending}
        type="submit"
      >
        <span className="text-sm uppercase tracking-widest">
          {pending ? "Sending..." : "Send Inquiry"}
        </span>
        <MaterialIcon className="group-hover:translate-x-1" name="arrow_forward" />
      </button>

      <p className="text-center text-[10px] uppercase tracking-tighter text-slate-500">
        {state.status === "success"
          ? state.message
          : state.status === "error"
            ? state.message
            : "Typically responds within 24 business hours."}
      </p>
    </form>
  );
}

