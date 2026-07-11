import { RedirectToSignIn } from "@neondatabase/neon-js/auth/react";
import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui/Card";
import { Select } from "../components/ui/Select";
import { useState } from "react";
import { Textarea } from "../components/ui/Textarea";
import { Button } from "../components/ui/Button";
import { ArrowRight, Loader2, Zap } from "lucide-react";
import { UserProfile } from "../types";
import { useNavigate } from "react-router-dom";

const goalOptions = [
  { value: "bulk", label: "Build Muscle (Bulk)" },
  { value: "cut", label: "Lose Fat (Cut)" },
  { value: "recomp", label: "Body Recomposition" },
  { value: "strength", label: "Build Strength" },
  { value: "endurance", label: "Improve Endurance" },
];

const experienceOptions = [
  { value: "beginner", label: "Beginner (0-1 years)" },
  { value: "intermediate", label: "Intermediate (1-3 years)" },
  { value: "advanced", label: "Advanced (3+ years)" },
];

const daysOptions = [
  { value: "2", label: "2 days per week" },
  { value: "3", label: "3 days per week" },
  { value: "4", label: "4 days per week" },
  { value: "5", label: "5 days per week" },
  { value: "6", label: "6 days per week" },
];

const sessionOptions = [
  { value: "30", label: "30 minutes" },
  { value: "45", label: "45 minutes" },
  { value: "60", label: "60 minutes" },
  { value: "90", label: "90 minutes" },
];

const equipmentOptions = [
  { value: "full_gym", label: "Full Gym Access" },
  { value: "home", label: "Home Gym" },
  { value: "dumbbells", label: "Dumbbells Only" },
];

const splitOptions = [
  { value: "full_body", label: "Full Body" },
  { value: "upper_lower", label: "Upper/Lower Split" },
  { value: "ppl", label: "Push/Pull/Legs" },
  { value: "custom", label: "Let AI Decide" },
];

export default function Onboarding() {
  const { user, saveProfile, generatePlan } = useAuth();
  const [formData, setFormData] = useState({
    goal: "bulk",
    experience: "intermediate",
    daysPerWeek: "4",
    sessionLength: "60",
    equipment: "full_gym",
    injuries: "",
    preferredSplit: "upper_lower",
  });

  const [error, setError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  function updateForm(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleQuestionnaire(e: React.SubmitEvent) {
    e.preventDefault();
    setError("");
    setIsGenerating(true);

    const profile: Omit<UserProfile, "userId" | "updatedAt"> = {
      goal: formData.goal as UserProfile["goal"],
      experience: formData.experience as UserProfile["experience"],
      days_per_week: parseInt(formData.daysPerWeek),
      session_length: parseInt(formData.sessionLength),
      equipment: formData.equipment as UserProfile["equipment"],
      injuries: formData.injuries || undefined,
      preferred_split:
        formData.preferredSplit as UserProfile["preferred_split"],
    };

    try {
      await saveProfile(profile);
      setIsGenerating(true);
      await generatePlan();
      navigate("/profile");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save profile");
    } finally {
      setIsGenerating(false);
    }
  }

  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <div className="min-h-screen dark-gradient-bg pt-24 pb-12 px-6 fade-in">
      <div className="relative max-w-2xl mx-auto">
        <div className="blur-glow opacity-20 pointer-events-none" />

        <div className="relative">
          {!isGenerating ? (
            <Card
              variant="glass"
              className="border border-[var(--border-white-10)]"
            >
              {/* Header */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-sm text-[var(--color-text-secondary)] mb-5">
                  <Zap className="w-4 h-4 text-purple-400" />
                  AI Questionnaire
                </span>

                <h1 className="text-4xl font-bold gradient-text mb-3">
                  Tell Us About Yourself
                </h1>

                <p className="text-[var(--color-text-secondary)] leading-7">
                  Answer a few quick questions so GymAI can generate a training
                  program tailored to your goals, experience, schedule, and
                  available equipment.
                </p>
              </div>

              <form onSubmit={handleQuestionnaire} className="space-y-6">
                <Select
                  id="goal"
                  label="Primary Fitness Goal"
                  options={goalOptions}
                  value={formData.goal}
                  onChange={(e) => updateForm("goal", e.target.value)}
                />

                <Select
                  id="experience"
                  label="Training Experience"
                  options={experienceOptions}
                  value={formData.experience}
                  onChange={(e) => updateForm("experience", e.target.value)}
                />

                <div className="grid md:grid-cols-2 gap-5">
                  <Select
                    id="daysPerWeek"
                    label="Days Per Week"
                    options={daysOptions}
                    value={formData.daysPerWeek}
                    onChange={(e) => updateForm("daysPerWeek", e.target.value)}
                  />

                  <Select
                    id="sessionLength"
                    label="Session Length"
                    options={sessionOptions}
                    value={formData.sessionLength}
                    onChange={(e) =>
                      updateForm("sessionLength", e.target.value)
                    }
                  />
                </div>

                <Select
                  id="equipment"
                  label="Equipment Access"
                  options={equipmentOptions}
                  value={formData.equipment}
                  onChange={(e) => updateForm("equipment", e.target.value)}
                />

                <Select
                  id="preferredSplit"
                  label="Preferred Training Split"
                  options={splitOptions}
                  value={formData.preferredSplit}
                  onChange={(e) => updateForm("preferredSplit", e.target.value)}
                />

                <Textarea
                  id="injuries"
                  label="Injuries or Limitations (Optional)"
                  placeholder="e.g. Lower back pain, shoulder impingement..."
                  rows={4}
                  value={formData.injuries}
                  onChange={(e) => updateForm("injuries", e.target.value)}
                />

                {error && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isGenerating}
                >
                  Generate My Plan
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </Card>
          ) : (
            <Card
              variant="glass"
              className="text-center py-20 border border-[var(--border-white-10)]"
            >
              <div className="gradient-icon w-20 h-20 rounded-full mx-auto mb-8 pulse-animation">
                <Loader2 className="w-10 h-10 text-white animate-spin" />
              </div>

              <h1 className="text-4xl font-bold gradient-text mb-4">
                Building Your Plan
              </h1>

              <p className="max-w-md mx-auto text-[var(--color-text-secondary)] leading-7">
                Our AI is analyzing your responses and creating a personalized
                training program designed specifically for your goals.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
