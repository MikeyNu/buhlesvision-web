export type InquiryStatus = "new" | "in_review" | "responded" | "closed";

export interface PortfolioProject {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  scope: string;
  impact: string;
  focus: string;
  coverImage: string;
  excerpt: string;
  year: string;
  isCaseStudy: boolean;
  body: string[];
}

export interface InquiryInput {
  fullName: string;
  companyName?: string;
  inquiryType: string;
  message: string;
  sourcePage: string;
}

export interface InquiryRecord extends InquiryInput {
  id: string;
  status: InquiryStatus;
  createdAt: string;
}

