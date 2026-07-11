import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function AIInsightWidget() {
  return (
    <Card variant="gradient" className="space-y-5">
      <div className="flex items-center gap-3">
        <Sparkles className="text-primary" size={20} />

        <span className="font-semibold">AI Coach</span>
      </div>

      <p className="text-sm leading-7 text-muted-foreground">
        Your recovery has improved by 18% this week. Increase upper-body volume
        next session while reducing rest time to maximize hypertrophy.
      </p>
    </Card>
  );
}
