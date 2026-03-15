import { cn } from "@/lib/utils/cn";

type MaterialIconProps = {
  name: string;
  className?: string;
  outlined?: boolean;
};

export function MaterialIcon({
  name,
  className,
  outlined = false,
}: MaterialIconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(outlined ? "material-icons-outlined" : "material-icons", className)}
    >
      {name}
    </span>
  );
}

