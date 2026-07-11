import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import SlideUp from "@/components/motion/SlideUp";

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  description?: ReactNode;

  align?: "left" | "center";

  maxWidth?: "sm" | "md" | "lg";

  action?: ReactNode;

  className?: string;
}

const widths = {
  sm: "max-w-xl",
  md: "max-w-2xl",
  lg: "max-w-3xl",
};

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  maxWidth = "md",
  action,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <SlideUp
      className={cn(
        "mb-16 flex flex-col gap-6",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {badge && <Badge variant="primary">{badge}</Badge>}

      <div className={cn("space-y-5", widths[maxWidth])}>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="text-lg leading-8 text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {action}
    </SlideUp>
  );
}
