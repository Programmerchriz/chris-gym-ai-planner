import CountUp from "react-countup";
import IconBox from "@/components/ui/IconBox";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatWidgetProps {
  title: string;

  value: number;

  suffix?: string;

  icon: LucideIcon;

  className?: string;
}

export default function StatWidget({
  title,
  value,
  suffix,
  icon: Icon,
  className,
}: StatWidgetProps) {
  return (
    <Card variant="glass" className={cn("space-y-5", className)}>
      <IconBox size="sm">
        <Icon size={18} />
      </IconBox>

      <div>
        <p className="text-sm text-muted-foreground">{title}</p>

        <div className="mt-2 text-3xl font-bold">
          <CountUp end={value} duration={2} />

          {suffix}
        </div>
      </div>
    </Card>
  );
}
