"use server";

import { revalidatePath } from "next/cache";

import { getSupabaseServiceClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { InquiryStatus } from "@/lib/types";
import { type ActionState, inquirySchema } from "./schemas";

export async function submitInquiry(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = inquirySchema.safeParse({
    fullName: formData.get("fullName"),
    companyName: formData.get("companyName"),
    inquiryType: formData.get("inquiryType"),
    message: formData.get("message"),
    sourcePage: formData.get("sourcePage"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const supabase = getSupabaseServiceClient();
  if (!supabase) {
    return {
      status: "error",
      message:
        "Supabase is not configured. Add environment variables to enable submissions.",
    };
  }

  const { error } = await supabase.from("inquiries").insert({
    full_name: parsed.data.fullName,
    company_name: parsed.data.companyName || null,
    inquiry_type: parsed.data.inquiryType,
    message: parsed.data.message,
    source_page: parsed.data.sourcePage,
  });

  if (error) {
    return {
      status: "error",
      message: "Submission failed. Please try again.",
    };
  }

  revalidatePath("/admin/inquiries");

  return {
    status: "success",
    message: "Inquiry received. We will respond within 24 business hours.",
  };
}

export async function updateInquiryStatus(formData: FormData): Promise<void> {
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "") as InquiryStatus;

  if (!id || !status) {
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

  await supabase.from("inquiries").update({ status }).eq("id", id);
  revalidatePath("/admin/inquiries");
}

