import type { ReactNode } from "react";
import CountUp from "react-countup";
import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/Card";
import SlideUp from "@/components/motion/SlideUp";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;

  value: number;

  suffix?: string;

  prefix?: string;

  decimals?: number;

  description?: string;

  icon?: ReactNode;

  delay?: number;

  className?: string;
}

export default function StatCard({
  title,
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  description,
  icon,
  delay = 0,
  className,
}: StatCardProps) {
  return (
    <SlideUp
      delay={delay}
      className={className}
    >
      <Card
        variant="glass"
        hover
        animate
        className="h-full"
      >
        <div className="flex items-start justify-between">
          <div className="space-y-6">

            <div
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-2xl",
                "bg-gradient-to-br",
                "from-orange-500",
                "via-amber-500",
                "to-yellow-400",
                "text-white",
                "shadow-lg shadow-orange-500/20"
              )}
            >
              {icon ?? <TrendingUp size={26} />}
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-bold tracking-tight">

                {prefix}

                <CountUp
                  end={value}
                  decimals={decimals}
                  duration={2.4}
                  separator=","
                />

                {suffix}

              </div>

              <h3 className="font-semibold text-lg">
                {title}
              </h3>

              {description && (
                <p className="text-sm leading-7 text-muted-foreground">
                  {description}
                </p>
              )}
            </div>

          </div>
        </div>
      </Card>
    </SlideUp>
  );
};
