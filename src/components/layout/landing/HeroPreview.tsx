import { Activity, Flame, Trophy } from "lucide-react";

import DashboardWindow from "@/components/layout/landing/DashboardWindow";
import ProgressWidget from "@/components/layout/landing/ProgressWidget";
import StatWidget from "@/components/layout/landing/StatWidget";
import WorkoutWidget from "@/components/layout/landing/WorkoutWidget";
import AIInsightWidget from "@/components/layout/landing/AIInsightWidget";

import Floating from "@/components/motion/Floating";

export default function HeroPreview() {
  return (
    <Floating>
      <DashboardWindow>
        <div className="grid gap-5">
          <div className="grid grid-cols-3 gap-5">
            <StatWidget title="Calories" value={2160} icon={Flame} />

            <StatWidget
              title="Workout Streak"
              value={28}
              suffix="d"
              icon={Activity}
            />

            <StatWidget title="Goals" value={91} suffix="%" icon={Trophy} />
          </div>

          <WorkoutWidget />

          <ProgressWidget />

          <AIInsightWidget />
        </div>
      </DashboardWindow>
    </Floating>
  );
}
