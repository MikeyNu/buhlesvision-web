import { z } from "zod";

export const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required."),
  companyName: z.string().trim().optional(),
  inquiryType: z.string().trim().min(2, "Inquiry type is required."),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
  sourcePage: z.string().trim().min(1),
});

export const projectSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(2)
    .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and hyphens."),
  title: z.string().trim().min(2),
  subtitle: z.string().trim().min(2),
  industry: z.string().trim().min(2),
  scope: z.string().trim().min(2),
  impact: z.string().trim().min(2),
  focus: z.string().trim().min(2),
  coverImage: z.string().trim().min(2),
  excerpt: z.string().trim().min(10),
  year: z.string().trim().min(4),
  body: z.string().trim().min(10),
  isCaseStudy: z.boolean(),
  sortOrder: z.number().int().min(0),
});

export type ActionState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

