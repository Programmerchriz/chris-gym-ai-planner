import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "xl";
}

const spacing = {
  sm: "py-16",
  md: "py-20",
  lg: "py-28",
  xl: "py-36",
};

export default function Section({
  spacing: space = "lg",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        spacing[space],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
