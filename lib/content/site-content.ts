import type { PortfolioProject } from "@/lib/types";

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const socialLinks = [
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://www.behance.net", label: "Behance" },
  { href: "https://x.com", label: "Twitter (X)" },
] as const;

export const homeBrands = [
  "PLUSHY PLATED",
  "SPARCHE",
  "LUMINA",
  "VELVET ERA",
  "OBSIDIAN",
] as const;

export const homeServices = [
  {
    icon: "auto_awesome",
    title: "Brand Identity",
    description:
      "Visual systems that communicate prestige. We define the soul of your brand through color, type, and form.",
  },
  {
    icon: "insights",
    title: "Content Strategy",
    description:
      "Data-driven narratives that engage and convert. We don't just post; we publish masterpieces.",
  },
  {
    icon: "art_track",
    title: "Editorial Design",
    description:
      "Website and digital experiences that feel like high-end magazine spreads, optimized for modern screens.",
  },
  {
    icon: "campaign",
    title: "Paid Media",
    description:
      "Surgical precision in digital advertising. We place your brand exactly where it needs to be seen.",
  },
] as const;

export const philosophyPillars = [
  {
    number: "01",
    title: "Strategic Depth",
    description:
      "We begin every journey with rigorous research. Aesthetics mean nothing without a foundation built on market intelligence and user behavior.",
  },
  {
    number: "02",
    title: "Editorial Excellence",
    description:
      "Treating every interface like a high-end magazine. We prioritize typography, negative space, and visual rhythm.",
  },
  {
    number: "03",
    title: "Radical Clarity",
    description:
      "Stripping away the noise. Our designs are intuitive, purposeful, and focused on converting visitors into lifelong brand advocates.",
  },
  {
    number: "04",
    title: "Future Proofing",
    description:
      "We build for where the world is going, not where it is today. Scalable systems that evolve with your growing enterprise.",
  },
] as const;

export const coreServicesList = [
  "Creative Direction",
  "Brand Identity",
  "UI/UX Design",
  "Motion Graphics",
  "Content Production",
  "Digital Strategy",
] as const;

export const portfolioSeedProjects: PortfolioProject[] = [
  {
    slug: "plushy-plated",
    title: "Plushy Plated",
    subtitle: "Luxury Dining Brand Redefinition",
    industry: "Hospitality",
    scope: "Branding",
    impact: "40% Growth",
    focus: "Visual Identity",
    coverImage: "/images/portfolio-plushy-plated.jpg",
    excerpt:
      "A full visual and editorial repositioning for a luxury catering studio entering a younger premium market.",
    year: "2023",
    isCaseStudy: true,
    body: [
      "We rebuilt the visual language around restraint, contrast, and tactile cues inspired by fine print editorials.",
      "The rollout delivered stronger booking intent and clearer premium differentiation in the first campaign cycle.",
    ],
  },
  {
    slug: "sparche",
    title: "Sparche",
    subtitle: "Tech-driven strategic evolution",
    industry: "Tech / SaaS",
    scope: "Digital Strategy",
    impact: "High Awareness",
    focus: "Digital Strategy",
    coverImage: "/images/portfolio-sparche.jpg",
    excerpt:
      "An audience-calibrated content strategy that reframed the brand from feature-centric to narrative-centric.",
    year: "2023",
    isCaseStudy: true,
    body: [
      "Our strategy shifted performance from broad reach to qualified engagement anchored in editorial storytelling.",
      "The new publishing framework aligned launches, social distribution, and paid amplification under one voice.",
    ],
  },
  {
    slug: "mags-event",
    title: "MAGS EVENT",
    subtitle: "High-impact entertainment marketing",
    industry: "Entertainment",
    scope: "Campaign Direction",
    impact: "Sold Out",
    focus: "Event Marketing",
    coverImage: "/images/portfolio-mags-event.jpg",
    excerpt:
      "A fast-turn campaign system built for event momentum, social proof, and conversion under strict timelines.",
    year: "2024",
    isCaseStudy: false,
    body: [
      "By sequencing teaser, reveal, and urgency assets across channels, we sustained demand through launch week.",
      "The campaign visual system improved recall and delivered full-capacity attendance ahead of schedule.",
    ],
  },
  {
    slug: "touched-by-neilwe",
    title: "TOUCHED BY NEILWE",
    subtitle: "Elevating beauty through content storytelling",
    industry: "Beauty",
    scope: "Content Creation",
    impact: "Viral Reach",
    focus: "UGC Editorial",
    coverImage: "/images/portfolio-neilwe.jpg",
    excerpt:
      "A creator-led visual framework designed to keep authenticity while increasing polish and consistency.",
    year: "2024",
    isCaseStudy: false,
    body: [
      "We introduced a repeatable story arc model for every short-form release to improve viewer retention.",
      "The content series unlocked sustained organic reach and higher quality inbound inquiries.",
    ],
  },
  {
    slug: "cifoods",
    title: "CIFOODS",
    subtitle: "FMCG Performance Marketing",
    industry: "FMCG",
    scope: "Performance",
    impact: "ROI Increase",
    focus: "Performance",
    coverImage: "/images/portfolio-cifoods.jpg",
    excerpt:
      "A blended creative-performance framework connecting campaign ideas to measurable downstream conversion.",
    year: "2024",
    isCaseStudy: true,
    body: [
      "We paired editorial creative with tightly segmented paid distribution to reduce waste and improve return.",
      "The outcome was a stronger conversion baseline and cleaner reporting for future campaign planning.",
    ],
  },
];

