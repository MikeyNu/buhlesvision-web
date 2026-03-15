export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      inquiries: {
        Row: {
          id: string;
          full_name: string;
          company_name: string | null;
          inquiry_type: string;
          message: string;
          source_page: string;
          status: "new" | "in_review" | "responded" | "closed";
          created_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          company_name?: string | null;
          inquiry_type: string;
          message: string;
          source_page: string;
          status?: "new" | "in_review" | "responded" | "closed";
          created_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          company_name?: string | null;
          inquiry_type?: string;
          message?: string;
          source_page?: string;
          status?: "new" | "in_review" | "responded" | "closed";
          created_at?: string;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          id: string;
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
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
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
          body?: string[];
          is_case_study?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          subtitle?: string;
          industry?: string;
          scope?: string;
          impact?: string;
          focus?: string;
          cover_image?: string;
          excerpt?: string;
          year?: string;
          body?: string[];
          is_case_study?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

