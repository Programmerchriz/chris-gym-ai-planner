import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "../components/ui/Button";
import {
  Calendar,
  Dumbbell,
  RefreshCcw,
  Target,
  TrendingUp,
  Loader2,
} from "lucide-react";
import { Card } from "../components/ui/Card";
import { PlanDisplay } from "../components/plan/PlanDisplay";

export default function Profile() {
  const { user, isLoading, plan, generatePlan } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen dark-gradient-bg pt-24 pb-12 px-6 flex items-center justify-center fade-in">
        <div className="max-w-lg w-full">
          <Card
            variant="glass"
            className="text-center py-20 border border-[var(--border-white-10)]"
          >
            <div className="gradient-icon w-20 h-20 rounded-full mx-auto mb-8 pulse-animation">
              <Loader2 className="w-10 h-10 text-white animate-spin" />
            </div>

            <h1 className="text-4xl font-bold gradient-text mb-4">
              Loading Your Plan
            </h1>

            <p className="text-[var(--color-text-secondary)]">
              Fetching your personalized AI workout plan...
            </p>
          </Card>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  // if (!plan) {
  //   return <Navigate to="/onboarding" replace />;
  // }

  if (!plan) {
    return (
      <div className="min-h-screen dark-gradient-bg pt-24 pb-12 px-6 fade-in">
        <div className="max-w-3xl mx-auto">
          <Card
            variant="glass"
            className="text-center py-20 border border-[var(--border-white-10)]"
          >
            <div className="gradient-icon w-20 h-20 rounded-full mx-auto mb-8">
              <Target className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl font-bold gradient-text mb-4">
              No Training Plan Yet
            </h1>

            <p className="max-w-xl mx-auto text-[var(--color-text-secondary)] leading-7 mb-8">
              Complete the onboarding questionnaire and let GymAI generate a
              personalized training program tailored specifically to your goals.
            </p>

            <Button
              variant="gradient"
              size="lg"
              onClick={() => (window.location.href = "/onboarding")}
              className="gap-2"
            >
              <Target className="w-5 h-5" />
              Create My Plan
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="min-h-screen dark-gradient-bg pt-24 pb-12 px-6 fade-in">
      <div className="relative max-w-6xl mx-auto">
        <div className="blur-glow opacity-20 pointer-events-none" />

        <div className="relative">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-sm text-[var(--color-text-secondary)] mb-5">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                Version {plan.version}
              </span>

              <h1 className="text-5xl font-bold gradient-text mb-3">
                Your Training Plan
              </h1>

              <p className="text-[var(--color-text-secondary)]">
                Created {formatDate(plan.createdAt)}
              </p>
            </div>

            <Button
              variant="gradient-outline"
              size="lg"
              className="gap-2"
              onClick={async () => await generatePlan()}
            >
              <RefreshCcw className="w-5 h-5" />
              Regenerate Plan
            </Button>
          </div>

          {/* Overview */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 mb-10">
            {[
              {
                icon: Target,
                title: "Goal",
                value: plan.overview.goal,
                iconClass: "gradient-icon-blue-cyan",
              },
              {
                icon: Calendar,
                title: "Frequency",
                value: plan.overview.frequency,
                iconClass: "gradient-icon-purple-pink",
              },
              {
                icon: Dumbbell,
                title: "Split",
                value: plan.overview.split,
                iconClass: "gradient-icon-orange-red",
              },
              {
                icon: TrendingUp,
                title: "Version",
                value: plan.version,
                iconClass: "gradient-icon-green-emerald",
              },
            ].map((item) => (
              <Card
                key={item.title}
                variant="glass"
                className="flex items-center gap-4"
              >
                <div
                  className={`${item.iconClass} w-14 h-14 rounded-2xl flex items-center justify-center`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                    {item.title}
                  </p>

                  <p className="font-semibold text-[var(--color-text-primary)]">
                    {item.value}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Notes */}
          <Card variant="glass" className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 gradient-text-purple-pink">
              Program Notes
            </h2>

            <p className="leading-8 text-[var(--color-text-secondary)]">
              {plan.overview.notes}
            </p>
          </Card>

          {/* Weekly Schedule */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Weekly Schedule
            </h2>

            <PlanDisplay weeklySchedule={plan.weeklySchedule} />
          </div>

          {/* Progression */}
          <Card variant="glass">
            <h2 className="text-2xl font-semibold mb-4 gradient-text-purple-pink">
              Progression Strategy
            </h2>

            <p className="leading-8 text-[var(--color-text-secondary)]">
              {plan.progression}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};
