import { CheckCircle2, Circle } from "lucide-react";

import { Card } from "@/components/ui/Card";

const workouts = [
  ["Bench Press", true],
  ["Incline Press", true],
  ["Cable Fly", false],
  ["Shoulder Press", false],
] as const;

export default function WorkoutWidget() {
  return (
    <Card variant="glass" className="space-y-5">
      <h3 className="font-semibold">Today's Workout</h3>

      <div className="space-y-4">
        {workouts.map(([exercise, done]) => (
          <div key={exercise} className="flex items-center gap-3">
            {done ? (
              <CheckCircle2 className="text-green-400" size={18} />
            ) : (
              <Circle className="text-white/40" size={18} />
            )}

            <span>{exercise}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
