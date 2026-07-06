import { Dumbbell, Info, Zap } from "lucide-react";
import type { DaySchedule, Exercise } from "../../types";
import { Card } from "../ui/Card";

interface PlanDisplayProps {
  weeklySchedule: DaySchedule[];
}

function getRPEStyles(rpe: number) {
  if (rpe >= 8) {
    return {
      badge: "rpe-badge rpe-badge-high",
      text: "text-[var(--color-rpe-high)]",
      dot: "bg-red-500",
    };
  }

  if (rpe >= 7) {
    return {
      badge: "rpe-badge rpe-badge-medium",
      text: "text-[var(--color-rpe-medium)]",
      dot: "bg-orange-500",
    };
  }

  return {
    badge: "rpe-badge rpe-badge-low",
    text: "text-[var(--color-rpe-low)]",
    dot: "bg-green-500",
  };
}

function ExerciseRow({
  exercise,
  index,
}: {
  exercise: Exercise;
  index: number;
}) {
  const rpe = getRPEStyles(exercise.rpe);

  return (
    <tr className="border-b border-[var(--border-white-10)] last:border-0 hover:bg-[var(--bg-white-5)] transition-colors">
      <td className="py-5 pr-6 align-top">
        <div className="flex gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--bg-white-10)] text-xs font-semibold text-[var(--color-text-secondary)] shrink-0">
            {index + 1}
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-[var(--color-text-primary)]">
              {exercise.name}
            </h4>

            {exercise.notes && (
              <div className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]">
                <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>{exercise.notes}</span>
              </div>
            )}
          </div>
        </div>
      </td>

      <td className="py-5 px-4 text-center whitespace-nowrap">
        <div className="font-semibold text-[var(--color-text-primary)]">
          {exercise.sets}
          <span className="mx-1 text-[var(--color-text-muted)]">×</span>
          {exercise.reps}
        </div>
      </td>

      <td className="py-5 px-4 text-center">
        <span className="text-[var(--color-text-secondary)]">
          {exercise.rest}
        </span>
      </td>

      <td className="py-5 px-4">
        <div className="flex justify-center">
          <div className={`${rpe.badge}`}>
            <span className={`w-2 h-2 rounded-full ${rpe.dot}`} />

            <Zap className={`w-3.5 h-3.5 ${rpe.text}`} />

            <span className={`font-semibold ${rpe.text}`}>
              {exercise.rpe}
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
}

function getExercises(schedule: DaySchedule & { exercise?: Exercise[] }) {
  return Array.isArray(schedule.exercises)
    ? schedule.exercises
    : Array.isArray(schedule.exercise)
      ? schedule.exercise
      : [];
}

function DayCard({ schedule }: { schedule: DaySchedule }) {
  const exercises = getExercises(schedule);

  return (
    <Card
      variant="glass"
      className="group overflow-hidden border border-[var(--border-white-10)] hover:border-[var(--border-purple-30)] hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="gradient-icon w-14 h-14 rounded-2xl shadow-lg">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              {schedule.day}
            </h3>

            <p className="text-sm gradient-text-purple-pink font-medium mt-1">
              {schedule.focus}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-white-10)] border border-[var(--border-white-20)] px-4 py-2 text-sm text-[var(--color-text-secondary)]">
          <Dumbbell className="w-4 h-4" />
          <span>
            {exercises.length}{" "}
            {exercises.length === 1 ? "Exercise" : "Exercises"}
          </span>
        </div>
      </div>

      {exercises.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[var(--border-white-20)] py-12 text-center">
          <div className="gradient-icon-green-emerald w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>

          <h4 className="font-semibold text-[var(--color-text-primary)]">
            Recovery Day
          </h4>

          <p className="text-sm text-[var(--color-text-secondary)] mt-2">
            No exercises scheduled. Focus on recovery, mobility and rest.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto custom-scrollbar -mx-6 px-6">
          <table className="w-full min-w-[720px]">
            <thead>
              <tr className="border-b border-[var(--border-white-10)]">
                <th className="py-4 pr-6 text-left text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  Exercise
                </th>

                <th className="py-4 px-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  Sets × Reps
                </th>

                <th className="py-4 px-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  Rest
                </th>

                <th className="py-4 px-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  Intensity
                </th>
              </tr>
            </thead>

            <tbody>
              {exercises.map((exercise, index) => (
                <ExerciseRow
                  key={`${exercise.name}-${index}`}
                  exercise={exercise}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}

export function PlanDisplay({ weeklySchedule }: PlanDisplayProps) {
  const schedule = Array.isArray(weeklySchedule) ? weeklySchedule : [];

  return (
    <section className="space-y-6 fade-in">
      {schedule.map((day, index) => (
        <DayCard
          key={`${day.day}-${index}`}
          schedule={day}
        />
      ))}
    </section>
  );
}