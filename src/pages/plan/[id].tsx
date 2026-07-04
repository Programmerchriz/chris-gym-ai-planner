import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import {
  Calendar,
  Dumbbell,
  Target,
  TrendingUp,
  Clock,
  Zap,
  ArrowLeft,
  Info,
  ChevronDown,
  ChevronUp,
  Play,
  CheckCircle2,
  Flame,
} from "lucide-react";
import { TrainingPlan } from "../../types";

// Mock data - replace with actual API call
const mockPlan: TrainingPlan = {
  id: "776fb0d1-0418-4604-a29f-917d1f4a7caa",
  userId: "53c82b54-326b-4366-863b-f36cecd262be",
  overview: {
    goal: "Build muscle mass and increase overall size through hypertrophy-focused resistance training.",
    notes:
      "Each session is designed to fit within 45 minutes using minimal equipment (dumbbells, bench, and bodyweight). Focus on mastering form and progressive overload. Rest 2-3 minutes between sets for compound lifts, shorter for isolation.",
    split: "Full-body (rotating emphasis each session)",
    frequency: "3 days per week",
  },
  weeklySchedule: [
    {
      day: "Monday",
      focus: "Lower body strength and hypertrophy",
      exercises: [
        {
          rpe: 8,
          name: "Goblet Squat",
          reps: "8-10",
          rest: "2-3 min",
          sets: 4,
          notes: "Keep chest up, elbows inside knees",
          alternatives: ["Dumbbell Squat", "Bodyweight Squat"],
        },
        {
          rpe: 7,
          name: "Romanian Deadlift (dumbbell)",
          reps: "10-12",
          rest: "2 min",
          sets: 3,
          notes: "Hinge at hips, slight knee bend",
          alternatives: ["Single-leg RDL", "Kettlebell Swing"],
        },
        {
          rpe: 7,
          name: "Walking Lunges",
          reps: "12 each leg",
          rest: "90 sec",
          sets: 3,
          notes: "Step forward, knee over toe",
          alternatives: ["Static Lunges", "Reverse Lunges"],
        },
        {
          rpe: 6,
          name: "Standing Calf Raise",
          reps: "15-20",
          rest: "60 sec",
          sets: 4,
          notes: "Full range, pause at top",
          alternatives: ["Seated Calf Raise (if bench)", "Jump Rope"],
        },
        {
          rpe: 6,
          name: "Plank",
          reps: "30-45 sec",
          rest: "60 sec",
          sets: 3,
          notes: "Maintain neutral spine",
          alternatives: ["Side Plank", "Dead Bug"],
        },
      ],
    },
    {
      day: "Wednesday",
      focus: "Upper body push",
      exercises: [
        {
          rpe: 8,
          name: "Dumbbell Bench Press",
          reps: "8-10",
          rest: "2-3 min",
          sets: 4,
          notes: "Feet flat, scapula retracted",
          alternatives: ["Floor Press", "Push-ups"],
        },
        {
          rpe: 7,
          name: "Overhead Dumbbell Press",
          reps: "8-12",
          rest: "2 min",
          sets: 3,
          notes: "Core tight, avoid excessive arch",
          alternatives: ["Arnold Press", "Seated Dumbbell Press"],
        },
        {
          rpe: 7,
          name: "Push-ups",
          reps: "AMRAP up to 20",
          rest: "90 sec",
          sets: 3,
          notes: "Keep body straight",
          alternatives: ["Incline Push-ups", "Decline Push-ups"],
        },
        {
          rpe: 6,
          name: "Dumbbell Fly",
          reps: "12-15",
          rest: "60 sec",
          sets: 3,
          notes: "Slight bend in elbows, stretch chest",
          alternatives: ["Cable Fly (if bands)", "Pec Deck"],
        },
        {
          rpe: 6,
          name: "Triceps Overhead Extension",
          reps: "12-15",
          rest: "60 sec",
          sets: 3,
          notes: "Elbows close to head",
          alternatives: ["Triceps Kickback", "Close-grip Push-ups"],
        },
      ],
    },
    {
      day: "Friday",
      focus: "Upper body pull and core",
      exercises: [
        {
          rpe: 8,
          name: "Bent-over Dumbbell Row",
          reps: "8-10",
          rest: "2-3 min",
          sets: 4,
          notes: "Hinge at hips, pull to ribcage",
          alternatives: ["Inverted Row (under table)", "Seated Row with bands"],
        },
        {
          rpe: 8,
          name: "Pull-ups (or assisted)",
          reps: "6-10",
          rest: "2-3 min",
          sets: 3,
          notes: "Full range, avoid swinging",
          alternatives: ["Band-assisted Pull-ups", "Negative Pull-ups"],
        },
        {
          rpe: 6,
          name: "Face Pull (with resistance band)",
          reps: "15-20",
          rest: "60 sec",
          sets: 3,
          notes: "Pull to forehead, elbows high",
          alternatives: ["Band Pull-apart", "Rear Delt Fly"],
        },
        {
          rpe: 6,
          name: "Dumbbell Biceps Curl",
          reps: "10-12",
          rest: "60 sec",
          sets: 3,
          notes: "Control eccentric, avoid swinging",
          alternatives: ["Hammer Curl", "Cable Curl"],
        },
        {
          rpe: 6,
          name: "Hanging Leg Raise (or knee raise)",
          reps: "10-15",
          rest: "60 sec",
          sets: 3,
          notes: "Control movement, avoid momentum",
          alternatives: ["Reverse Crunch", "Plank Knee-to-Elbow"],
        },
      ],
    },
  ],
  progression:
    "Increase weight by 2.5-5lbs when you can complete all sets with good form. Track your progress weekly.",
  version: 5,
  createdAt: "2026-07-04T10:39:50.769Z",
};

export default function PlanDetail() {
  const { id } = useParams<{ id: string }>();
  // const { plan } = useAuth();
  const plan = mockPlan; // Replace with actual data fetching
  const [expandedDay, setExpandedDay] = useState<number | null>(0);
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(
    new Set(),
  );
  const [showNotes, setShowNotes] = useState(true);

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function getRPEColor(rpe: number) {
    if (rpe >= 8) return "from-red-500 to-orange-500";
    if (rpe >= 7) return "from-orange-500 to-yellow-500";
    return "from-green-500 to-emerald-500";
  }

  function getRPETextColor(rpe: number) {
    if (rpe >= 8) return "text-red-700";
    if (rpe >= 7) return "text-orange-700";
    return "text-green-700";
  }

  function toggleExerciseCompletion(dayIndex: number, exerciseIndex: number) {
    const key = `${dayIndex}-${exerciseIndex}`;
    const newCompleted = new Set(completedExercises);
    if (newCompleted.has(key)) {
      newCompleted.delete(key);
    } else {
      newCompleted.add(key);
    }
    setCompletedExercises(newCompleted);
  }

  const totalExercises = plan.weeklySchedule.reduce(
    (acc, day) => acc + day.exercises.length,
    0,
  );
  const completedCount = completedExercises.size;
  const progressPercentage =
    totalExercises > 0 ? (completedCount / totalExercises) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div className="relative mb-12 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
          <div className="relative">
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="mb-6 text-white/70 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    Training Plan v{plan.version}
                  </h1>
                </div>
                <p className="text-white/60 text-lg">
                  Created on {formatDate(plan.createdAt)}
                </p>
              </div>

              {/* Progress Ring */}
              <div className="relative w-24 h-24">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${progressPercentage * 2.51} 251`}
                    strokeLinecap="round"
                    className="transition-all duration-500 ease-out"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: Target,
              label: "Goal",
              value: plan.overview.goal,
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: Calendar,
              label: "Frequency",
              value: plan.overview.frequency,
              color: "from-purple-500 to-pink-500",
            },
            {
              icon: Dumbbell,
              label: "Split",
              value: plan.overview.split,
              color: "from-orange-500 to-red-500",
            },
            {
              icon: TrendingUp,
              label: "Version",
              value: plan.version,
              color: "from-green-500 to-emerald-500",
            },
          ].map((stat, index) => (
            <Card
              key={index}
              variant="bordered"
              className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div className="relative flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/60 uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="font-semibold text-white truncate">
                    {stat.value}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Expandable Program Notes */}
        <Card
          variant="bordered"
          className="mb-8 bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden"
        >
          <button
            onClick={() => setShowNotes(!showNotes)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Info className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-semibold text-lg text-white">
                Program Notes
              </h2>
            </div>
            {showNotes ? (
              <ChevronUp className="w-5 h-5 text-white/60" />
            ) : (
              <ChevronDown className="w-5 h-5 text-white/60" />
            )}
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-300 ${showNotes ? "max-h-96 pb-6" : "max-h-0"}`}
          >
            <p className="text-white/70 leading-relaxed">
              {plan.overview.notes}
            </p>
          </div>
        </Card>

        {/* Interactive Weekly Schedule */}
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Play className="w-6 h-6 text-purple-400" />
          Weekly Schedule
        </h2>
        <div className="space-y-4 mb-8">
          {plan.weeklySchedule.map((day, dayIndex) => {
            const dayCompleted =
              day.exercises.length > 0 &&
              day.exercises.every((_, exIndex) =>
                completedExercises.has(`${dayIndex}-${exIndex}`),
              );

            return (
              <Card
                key={dayIndex}
                variant="bordered"
                className={`bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden transition-all duration-300 ${
                  expandedDay === dayIndex
                    ? "ring-2 ring-purple-500/50"
                    : "hover:bg-white/10"
                }`}
              >
                <button
                  onClick={() =>
                    setExpandedDay(expandedDay === dayIndex ? null : dayIndex)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        dayCompleted
                          ? "bg-gradient-to-br from-green-500 to-emerald-500"
                          : "bg-gradient-to-br from-purple-500 to-pink-500"
                      }`}
                    >
                      {dayCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      ) : (
                        <Dumbbell className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">
                        {day.day}
                      </h3>
                      <p className="text-sm text-white/60">{day.focus}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-white/60">
                        {day.exercises.length} exercises
                      </p>
                      {day.exercises.length > 0 && (
                        <p className="text-xs text-white/40">
                          {
                            day.exercises.filter((_, exIndex) =>
                              completedExercises.has(`${dayIndex}-${exIndex}`),
                            ).length
                          }{" "}
                          completed
                        </p>
                      )}
                    </div>
                    {expandedDay === dayIndex ? (
                      <ChevronUp className="w-5 h-5 text-white/60" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white/60" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedDay === dayIndex
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 space-y-3">
                    {day.exercises.length > 0 ? (
                      day.exercises.map((exercise, exIndex) => {
                        const isCompleted = completedExercises.has(
                          `${dayIndex}-${exIndex}`,
                        );
                        return (
                          <div
                            key={exIndex}
                            className={`group relative p-4 rounded-xl transition-all duration-300 ${
                              isCompleted
                                ? "bg-green-500/10 border border-green-500/30"
                                : "bg-white/5 border border-white/10 hover:bg-white/10"
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <button
                                onClick={() =>
                                  toggleExerciseCompletion(dayIndex, exIndex)
                                }
                                className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                  isCompleted
                                    ? "bg-green-500 border-green-500"
                                    : "border-white/30 hover:border-purple-500"
                                }`}
                              >
                                {isCompleted && (
                                  <CheckCircle2 className="w-4 h-4 text-white" />
                                )}
                              </button>

                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <h4
                                    className={`font-medium ${isCompleted ? "text-green-400 line-through" : "text-white"}`}
                                  >
                                    {exercise.name}
                                  </h4>
                                  <div
                                    className={`flex items-center gap-2 px-3 py-1 rounded-full bg-white bg-opacity-20`}
                                  >
                                    <Zap
                                      className={`w-4 h-4 ${getRPETextColor(exercise.rpe)}`}
                                    />
                                    <span
                                      className={`text-sm font-bold ${getRPETextColor(exercise.rpe)}`}
                                    >
                                      RPE {exercise.rpe}
                                    </span>
                                  </div>
                                </div>

                                {exercise.notes && (
                                  <p className="text-sm text-white/60 mb-3">
                                    {exercise.notes}
                                  </p>
                                )}

                                <div className="flex flex-wrap gap-4 text-sm">
                                  <div className="flex items-center gap-2 text-white/70">
                                    <span className="font-semibold text-white">
                                      {exercise.sets} sets
                                    </span>
                                    <span>×</span>
                                    <span className="font-semibold text-white">
                                      {exercise.reps} reps
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2 text-white/70">
                                    <Clock className="w-4 h-4" />
                                    <span>{exercise.rest}</span>
                                  </div>
                                </div>

                                {exercise.alternatives &&
                                  exercise.alternatives.length > 0 && (
                                    <div className="mt-3">
                                      <p className="text-xs text-white/50 mb-2">
                                        Alternatives:
                                      </p>
                                      <div className="flex flex-wrap gap-2">
                                        {exercise.alternatives.map(
                                          (alt, altIndex) => (
                                            <span
                                              key={altIndex}
                                              className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-white/80 transition-colors cursor-pointer"
                                            >
                                              {alt}
                                            </span>
                                          ),
                                        )}
                                      </div>
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-white/40 italic">Rest day 🎉</p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Progression Strategy */}
        <Card
          variant="bordered"
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-purple-500/30"
        >
          <div className="flex items-start gap-4 p-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-lg text-white mb-2">
                Progression Strategy
              </h2>
              <p className="text-white/70 leading-relaxed">
                {plan.progression}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
