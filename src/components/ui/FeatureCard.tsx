import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import SlideUp from "@/components/motion/SlideUp";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;

  title: string;

  description: string;

  badge?: string;

  cta?: string;

  onClick?: () => void;

  className?: string;

  delay?: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  badge,
  cta,
  onClick,
  className,
  delay = 0,
}: FeatureCardProps) {
  return (
    <SlideUp delay={delay} className={className}>
      <Card
        variant="glass"
        animate
        hover
        onClick={onClick}
        className={cn(
          "group h-full overflow-hidden",
          "cursor-default",
          "border-white/10",
          "transition-all duration-500",
          "hover:border-primary/30",
          "hover:shadow-2xl hover:shadow-primary/10",
          onClick && "cursor-pointer"
        )}
      >
        {/* Background Glow */}

        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-full flex-col">

          {/* Top */}

          <div className="flex items-start justify-between">

            <div
              className={cn(
                "relative flex h-16 w-16 items-center justify-center rounded-2xl",
                "gradient-primary-diagonal",
                "shadow-lg shadow-primary/20",
                "transition-all duration-500",
                "group-hover:scale-110",
                "group-hover:-translate-y-1",
                "group-hover:rotate-3"
              )}
            >
              <Icon
                size={30}
                className="text-white transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {badge && (
              <Badge variant="primary" size="sm">
                {badge}
              </Badge>
            )}
          </div>

          {/* Content */}

          <div className="mt-8 flex-1">

            <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
              {title}
            </h3>

            <p className="mt-4 leading-7 text-muted-foreground">
              {description}
            </p>
          </div>

          {/* CTA */}

          {cta && (
            <div className="mt-8">

              <button
                type="button"
                className="inline-flex items-center gap-2 font-semibold text-primary transition-all duration-300 group-hover:gap-3"
              >
                {cta}

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

            </div>
          )}
        </div>
      </Card>
    </SlideUp>
  );
};
