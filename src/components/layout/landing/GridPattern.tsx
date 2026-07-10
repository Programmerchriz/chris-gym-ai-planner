import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
}

export default function GridPattern({
  className,
}: GridPatternProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 opacity-[0.04]",
        "[background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]",
        "[background-size:40px_40px]",
        className
      )}
    />
  );
};
