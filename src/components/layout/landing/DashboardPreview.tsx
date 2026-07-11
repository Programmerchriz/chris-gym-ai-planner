import { useState } from "react";
import CountUp from "react-countup";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Award,
  BarChart3,
  Brain,
  Beef,
  Calendar,
  CheckCircle2,
  Clock3,
  Droplets,
  Dumbbell,
  Flame,
  HeartPulse,
  Salad,
  Smartphone,
  Target,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";

import Container from "@/components/layout/landing/Container";
import Section from "@/components/layout/landing/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "workout",
    label: "Workout",
  },
  {
    id: "nutrition",
    label: "Nutrition",
  },
  {
    id: "analytics",
    label: "Analytics",
  },
  {
    id: "mobile",
    label: "Mobile",
  },
] as const;

type Tab = (typeof tabs)[number]["id"];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<Tab>("workout");

  return (
    <Section id="dashboard-showcase">
      <Container>
        <SectionHeading
          badge="Dashboard"
          title="Everything You Need In One Intelligent Dashboard"
          description="Manage workouts, nutrition, analytics and AI recommendations from one beautiful interface."
          align="center"
        />

        <div className="mt-14 flex justify-center">
          <div className="inline-flex gap-8 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative pb-4 text-sm font-medium transition-colors duration-300",
                  activeTab === tab.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {tab.label}

                {activeTab === tab.id && (
                  <motion.div
                    layoutId="dashboard-tab"
                    className="absolute inset-x-0 -bottom-px h-[3px] rounded-full bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.35 }}
            >
              {activeTab === "workout" && <WorkoutDashboard />}
              {activeTab === "nutrition" && <NutritionDashboard />}
              {activeTab === "analytics" && <AnalyticsDashboard />}
              {activeTab === "mobile" && <MobilePreview />}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}

function WorkoutDashboard() {
  return (
    <Card
      variant="glass"
      padding="lg"
      className="overflow-hidden rounded-[32px]"
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr]">
        {/* LEFT */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Badge variant="primary">Today's Workout</Badge>
              <h3 className="mt-4 text-3xl font-bold">Push Day</h3>
              <p className="mt-2 text-muted-foreground">
                Chest • Shoulders • Triceps
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card px-5 py-4">
              <div className="text-xs text-muted-foreground">
                Estimated Time
              </div>

              <div className="mt-2 flex items-center gap-2 text-lg font-semibold">
                <Clock3 size={18} />
                62 mins
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {[
              {
                name: "Barbell Bench Press",
                sets: "4 × 8",
              },
              {
                name: "Incline Dumbbell Press",
                sets: "3 × 10",
              },
              {
                name: "Cable Fly",
                sets: "3 × 12",
              },
              {
                name: "Shoulder Press",
                sets: "4 × 10",
              },
              {
                name: "Tricep Pushdown",
                sets: "3 × 15",
              },
            ].map((exercise, index) => (
              <motion.div
                key={exercise.name}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Dumbbell size={18} />
                  </div>

                  <div>
                    <div className="font-semibold">{exercise.name}</div>

                    <div className="mt-1 text-sm text-muted-foreground">
                      {exercise.sets}
                    </div>
                  </div>
                </div>

                <CheckCircle2 size={20} className="text-emerald-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <DashboardMetric
            icon={Target}
            title="Weekly Progress"
            value={82}
            suffix="%"
          />
          <DashboardMetric icon={Flame} title="Calories Burned" value={3480} />
          <DashboardMetric
            icon={Activity}
            title="Workout Streak"
            value={16}
            suffix=" days"
          />

          <Card variant="gradient" padding="md">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Brain size={24} />
              </div>

              <div>
                <div className="font-semibold">AI Coach</div>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  You're recovering well. Increase Bench Press by 2.5kg next
                  session.
                </p>
              </div>
            </div>
          </Card>

          <Card variant="bordered" padding="md">
            <div className="flex items-center gap-3">
              <Calendar size={18} />

              <span className="font-medium">Next Workout</span>
            </div>

            <div className="mt-5 rounded-xl bg-primary/8 p-4">
              <div className="font-semibold">Pull Day</div>

              <div className="mt-1 text-sm text-muted-foreground">
                Tomorrow • 7:00 AM
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
}

function NutritionDashboard() {
  return (
    <Card
      variant="glass"
      padding="lg"
      className="overflow-hidden rounded-[32px]"
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr]">
        {/* LEFT */}

        <div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Badge variant="primary">Today's Nutrition</Badge>

              <h3 className="mt-4 text-3xl font-bold">2,180 kcal Target</h3>

              <p className="mt-2 text-muted-foreground">
                Balanced for lean muscle growth
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card px-5 py-4">
              <div className="text-xs text-muted-foreground">Meals Today</div>

              <div className="mt-2 text-lg font-semibold">5 Planned</div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {[
              {
                meal: "Breakfast",
                food: "Oats, Eggs & Banana",
                calories: "520 kcal",
              },
              {
                meal: "Lunch",
                food: "Chicken Rice Bowl",
                calories: "710 kcal",
              },
              {
                meal: "Snack",
                food: "Greek Yogurt",
                calories: "220 kcal",
              },
              {
                meal: "Dinner",
                food: "Salmon & Potatoes",
                calories: "610 kcal",
              },
            ].map((meal, index) => (
              <motion.div
                key={meal.meal}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Salad size={18} />
                  </div>

                  <div>
                    <div className="font-semibold">{meal.meal}</div>

                    <div className="mt-1 text-sm text-muted-foreground">
                      {meal.food}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-semibold">{meal.calories}</div>

                  <div className="mt-1 text-xs text-emerald-500">Planned</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div className="space-y-6">
          <DashboardMetric icon={Flame} title="Calories" value={2180} />

          <DashboardMetric
            icon={Beef}
            title="Protein"
            value={165}
            suffix=" g"
          />

          <DashboardMetric
            icon={Droplets}
            title="Water"
            value={78}
            suffix="%"
          />

          <Card variant="gradient" padding="md">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Brain size={24} />
              </div>

              <div>
                <div className="font-semibold">AI Nutrition Coach</div>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Increase your protein intake by 20g after today's workout to
                  optimize muscle recovery.
                </p>
              </div>
            </div>
          </Card>

          <Card variant="bordered" padding="md">
            <div className="flex items-center gap-3">
              <Calendar size={18} />

              <span className="font-medium">Next Meal</span>
            </div>

            <div className="mt-5 rounded-xl bg-primary/8 p-4">
              <div className="font-semibold">Post-Workout Shake</div>

              <div className="mt-1 text-sm text-muted-foreground">
                Whey • Banana • Oats
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
}

function AnalyticsDashboard() {
  return (
    <Card
      variant="glass"
      padding="lg"
      className="overflow-hidden rounded-[32px]"
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr]">
        <div>
          <Badge variant="primary">Performance Analytics</Badge>

          <h3 className="mt-4 text-3xl font-bold">Your Progress This Month</h3>

          <p className="mt-2 text-muted-foreground">
            AI-powered insights based on your workouts, nutrition and recovery.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Workout Consistency",
                value: "92%",
                icon: CheckCircle2,
              },
              {
                title: "Strength Growth",
                value: "+18%",
                icon: TrendingUp,
              },
              {
                title: "Recovery Score",
                value: "87%",
                icon: HeartPulse,
              },
              {
                title: "Goals Completed",
                value: "14",
                icon: Trophy,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>

                    <BarChart3 size={18} className="text-muted-foreground" />
                  </div>

                  <div className="mt-5 text-3xl font-bold">{item.value}</div>

                  <div className="mt-2 text-sm text-muted-foreground">
                    {item.title}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <Card variant="bordered" padding="md" className="mt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">Weekly Activity</div>

                <div className="mt-1 text-sm text-muted-foreground">
                  Training frequency
                </div>
              </div>

              <Activity size={22} className="text-primary" />
            </div>

            <div className="mt-6 flex h-32 items-end gap-3">
              {[45, 70, 55, 90, 75, 100, 82].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{
                    height: `${height}%`,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.05,
                  }}
                  className="flex-1 rounded-t-xl bg-primary/60"
                />
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <DashboardMetric
            icon={Zap}
            title="Training Intensity"
            value={86}
            suffix="%"
          />

          <DashboardMetric
            icon={Target}
            title="Goal Progress"
            value={74}
            suffix="%"
          />

          <Card variant="gradient" padding="md">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Brain size={24} />
              </div>

              <div>
                <div className="font-semibold">AI Insight</div>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Your upper body strength has improved significantly. Consider
                  increasing your training load next week.
                </p>
              </div>
            </div>
          </Card>

          <Card variant="bordered" padding="md">
            <div className="flex items-center gap-3">
              <Award size={18} />

              <span className="font-medium">Achievement</span>
            </div>

            <div className="mt-5 rounded-xl bg-primary/8 p-4">
              <div className="font-semibold">30 Day Streak</div>

              <div className="mt-1 text-sm text-muted-foreground">
                Consistency unlocked
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
}

function MobilePreview() {
  return (
    <Card
      variant="glass"
      padding="lg"
      className="overflow-hidden rounded-[32px]"
    >
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-[40px] bg-primary/20 blur-3xl" />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative h-[420px] w-[220px] rounded-[38px] border border-border bg-card p-4 shadow-2xl"
          >
            <div className="flex h-full flex-col rounded-[28px] bg-background p-5">
              <div className="flex items-center justify-between">
                <Smartphone size={18} />

                <div className="h-2 w-12 rounded-full bg-muted" />
              </div>

              <div className="mt-10">
                <div className="text-left text-sm text-muted-foreground">
                  Today's Goal
                </div>

                <div className="mt-2 text-left text-3xl font-bold">82%</div>

                <div className="mt-6 h-2 rounded-full bg-muted">
                  <div className="h-full w-[82%] rounded-full bg-primary" />
                </div>
              </div>

              <div className="mt-auto rounded-2xl border border-border p-4 text-left">
                <div className="font-semibold">AI Coach</div>

                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  Your next workout is ready.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <h3 className="mt-10 text-2xl font-bold">Mobile App Coming Soon</h3>

        <p className="mt-3 max-w-lg text-muted-foreground">
          GymAI is designed to extend beyond the browser with seamless
          cross-device fitness tracking.
        </p>
      </div>
    </Card>
  );
}

interface MetricProps {
  icon: React.ElementType;
  title: string;
  value: number;
  suffix?: string;
}

function DashboardMetric({ icon: Icon, title, value, suffix }: MetricProps) {
  return (
    <Card variant="bordered" padding="md">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-muted-foreground">{title}</div>

          <div className="mt-3 text-3xl font-bold">
            <CountUp end={value} duration={2} />

            {suffix}
          </div>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon size={22} />
        </div>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${Math.min(value, 100)}%`,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="gradient-primary-horizontal h-full rounded-full"
        />
      </div>
    </Card>
  );
}
