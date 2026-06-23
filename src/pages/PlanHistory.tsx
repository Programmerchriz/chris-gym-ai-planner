import { useEffect, useState } from "react";
import { RedirectToSignIn } from "@neondatabase/neon-js/auth/react";

import { useAuth } from "../context/AuthContext";
import { api } from "../lib/api";
import { Card } from "../components/ui/Card";

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
          err instanceof Error
            ? err.message
            : "Failed to load plan history"
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
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Plan History
        </h1>

        <p className="text-[var(--color-muted)] mb-8">
          View all previously generated training plans.
        </p>

        {loading && (
          <Card
            variant="bordered"
            className="text-center py-10"
          >
            <p>Loading plan history...</p>
          </Card>
        )}

        {!loading && error && (
          <Card
            variant="bordered"
            className="text-center py-10"
          >
            <p className="text-red-500">
              {error}
            </p>
          </Card>
        )}

        {!loading &&
          !error &&
          plans.length === 0 && (
            <Card
              variant="bordered"
              className="text-center py-10"
            >
              <p className="text-[var(--color-muted)]">
                No plans generated yet.
              </p>
            </Card>
          )}

        {!loading &&
          !error &&
          plans.length > 0 && (
            <div className="space-y-4">
              {plans.map((plan) => (
                <Card
                  key={plan.id}
                  variant="bordered"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold">
                        Version {plan.version}
                      </h2>

                      <p className="text-sm text-[var(--color-muted)] mt-1">
                        Generated on{" "}
                        {new Date(
                          plan.createdAt
                        ).toLocaleDateString()}
                      </p>
                    </div>

                    <button
                      className="px-4 py-2 rounded-lg border hover:bg-gray-50 transition"
                    >
                      View Plan
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
