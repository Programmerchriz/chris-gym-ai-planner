import { Card } from "@/components/ui/Card";

export default function ProgressWidget() {
  return (
    <Card variant="glass" className="space-y-5">
      <div className="flex justify-between">
        <span>Weekly Goal</span>

        <span>78%</span>
      </div>

      <div className="h-3 rounded-full bg-white/10">
        <div className="gradient-primary h-full w-[78%] rounded-full" />
      </div>

      <p className="text-sm text-muted-foreground">
        4 of 5 workouts completed.
      </p>
    </Card>
  );
}
