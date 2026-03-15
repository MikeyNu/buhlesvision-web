import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { InquiryRecord } from "@/lib/types";

export async function getInquiries(): Promise<InquiryRecord[]> {
  const supabase = await getSupabaseServerClient();
  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("inquiries")
    .select(
      "id,full_name,company_name,inquiry_type,message,source_page,status,created_at",
    )
    .order("created_at", { ascending: false });

  if (error || !data) {
    return [];
  }

  return data.map((row) => ({
    id: row.id,
    fullName: row.full_name,
    companyName: row.company_name ?? undefined,
    inquiryType: row.inquiry_type,
    message: row.message,
    sourcePage: row.source_page,
    status: row.status,
    createdAt: row.created_at,
  }));
}

