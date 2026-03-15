import Image from "next/image";

import { cn } from "@/lib/utils/cn";

type BrandLockupProps = {
  className?: string;
  nameClassName?: string;
  subtitleClassName?: string;
  iconSize?: "sm" | "md" | "lg";
};

const iconSizeMap = {
  sm: 32,
  md: 40,
  lg: 52,
} as const;

export function BrandLockup({
  className,
  nameClassName,
  subtitleClassName,
  iconSize = "md",
}: BrandLockupProps) {
  const size = iconSizeMap[iconSize];

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        alt="Buhle's Vision logo symbol"
        height={size}
        src="/logos/buhles-vision-logo-symbol.png"
        width={size}
      />
      <span className="flex flex-col leading-[1]">
        <span
          className={cn(
            "font-brand text-xl font-extrabold uppercase tracking-tight text-stone-100",
            nameClassName,
          )}
        >
          Buhle&apos;s Vision
        </span>
        <span
          className={cn(
            "pt-0.5 text-[7px] font-extrabold uppercase tracking-[0.16em] text-stone-400",
            subtitleClassName,
          )}
        >
          DIGITAL MARKETING AGENCY
        </span>
      </span>
    </span>
  );
}
