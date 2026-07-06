import { Link, Navigate } from "react-router-dom";
import {
  Zap,
  Target,
  Calendar,
  ArrowRight,
  Sparkles,
  Clock,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useAuth } from "../context/AuthContext";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Plans",
    description:
      "Get a training program tailored to your goals, experience, and schedule.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description:
      "Whether you want to build muscle, lose fat, or get stronger — we optimize for your goal.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Plans that fit your lifestyle. Train 2 days or 6 — we adapt to you.",
  },
  {
    icon: Clock,
    title: "Time-Efficient",
    description:
      "Every workout is designed to maximize results in your available time.",
  },
];

export default function Home() {
  const { user, isLoading } = useAuth();

  // Redirect authenticated users to profile
  if (!isLoading && user) {
    return <Navigate to="/profile" replace />;
  }
  
  return (
    <div className="min-h-screen dark-gradient-bg overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6">
        {/* Ambient Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="blur-glow opacity-20" />
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-[var(--bg-purple-10)] blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Zap className="w-4 h-4 text-purple-400 pulse-animation" />
            <span className="text-sm text-[var(--color-text-secondary)]">
              AI-powered training plans
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-8">
            Build Your
            <br />
            <span className="gradient-text">Perfect Gym Plan</span>
            <br />
            <span className="text-[var(--color-text-secondary)]">in Seconds</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-8 text-[var(--color-text-secondary)] mb-12">
            Skip the spreadsheets and generic workout plans. Let AI generate a
            personalized program based on your goals, experience level, available
            equipment, and weekly schedule.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/onboarding">
              <Button variant="gradient" size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            <Link to="/onboarding">
              <Button variant="gradient-outline" size="lg">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-purple-400 mb-4">
              Why GymAI
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Everything You Need To
              <br />
              <span className="gradient-text-purple-pink">
                Train Smarter
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-[var(--color-text-secondary)]">
              A premium AI fitness experience designed to help you make consistent
              progress with less guesswork.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                variant="glass"
                className="group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="gradient-icon w-14 h-14 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                  {feature.title}
                </h3>

                <p className="leading-7 text-[var(--color-text-secondary)]">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
