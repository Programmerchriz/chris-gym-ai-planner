import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, History, ArrowRight } from "lucide-react";
import { RedirectToSignIn } from "@neondatabase/neon-js/auth/react";

import { useAuth } from "../context/AuthContext";
import { api } from "../lib/api";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

interface PlanHistoryItem {
  id: string;
  version: number;
  createdAt: string;
}

export default function PlanHistory() {
  const { user } = useAuth();

  const [plans, setPlans] = useState<PlanHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadHistory() {
      if (!user?.id) {
        return;
      }

      try {
        setLoading(true);

        const history = await api.getPlanHistory(user.id);

        setPlans(history);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load plan history",
        );
      } finally {
        setLoading(false);
      }
    }

    loadHistory();
  }, [user]);

  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <div className="min-h-screen dark-gradient-bg pt-24 pb-12 px-6 fade-in">
      <div className="relative max-w-5xl mx-auto">
        <div className="blur-glow opacity-20 pointer-events-none" />

        <div className="relative">
          {/* Header */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-sm text-[var(--color-text-secondary)] mb-5">
              <History className="w-4 h-4 text-purple-400" />
              Previous Plans
            </span>

            <h1 className="text-5xl font-bold gradient-text mb-3">
              Plan History
            </h1>

            <p className="text-lg text-[var(--color-text-secondary)]">
              Browse every AI-generated training plan you've created.
            </p>
          </div>

          {loading && (
            <Card
              variant="glass"
              className="text-center py-20 border border-[var(--border-white-10)]"
            >
              <div className="gradient-icon w-20 h-20 rounded-full mx-auto mb-8 pulse-animation">
                <Loader2 className="w-10 h-10 text-white animate-spin" />
              </div>

              <h2 className="text-3xl font-bold gradient-text mb-3">
                Loading Plans
              </h2>

              <p className="text-[var(--color-text-secondary)]">
                Fetching your personalized training history...
              </p>
            </Card>
          )}

          {!loading && error && (
            <Card
              variant="glass"
              className="text-center py-14 border border-red-500/20"
            >
              <p className="text-red-400">{error}</p>
            </Card>
          )}

          {!loading && !error && plans.length === 0 && (
            <Card
              variant="glass"
              className="text-center py-20 border border-[var(--border-white-10)]"
            >
              <div className="gradient-icon w-16 h-16 rounded-2xl mx-auto mb-6">
                <History className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl font-semibold mb-3">No Plans Yet</h2>

              <p className="text-[var(--color-text-secondary)]">
                Generate your first AI workout plan to see it here.
              </p>
            </Card>
          )}

          {!loading && !error && plans.length > 0 && (
            <div className="space-y-5">
              {plans.map((plan) => (
                <Card
                  key={plan.id}
                  variant="glass"
                  className="border border-[var(--border-white-10)] hover:border-[var(--border-purple-30)] transition-all duration-300"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-5">
                      <div className="gradient-icon w-14 h-14 rounded-2xl">
                        <History className="w-7 h-7 text-white" />
                      </div>

                      <div>
                        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">
                          Version {plan.version}
                        </h2>

                        <p className="mt-1 text-[var(--color-text-secondary)]">
                          Generated{" "}
                          {new Date(plan.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <Link to={`/plan/v${plan.version}`}>
                      <Button variant="gradient" className="gap-2">
                        View Plan
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
