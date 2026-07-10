import {
  Brain,
  Dumbbell,
  HeartPulse,
  RefreshCcw,
  Sparkles,
  TrendingUp,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

import Section from "@/components/layout/landing/Section";
import Container from "@/components/layout/landing/Container";

import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

import SlideUp from "@/components/motion/SlideUp";
import Stagger from "@/components/motion/Stagger";

const capabilities = [
  {
    icon: Dumbbell,
    title: "Workout Generation",
    description:
      "Create structured workout programs based on your goals, equipment and experience.",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutrition Planning",
    description:
      "Receive calorie targets and meal suggestions personalized to your fitness journey.",
  },
  {
    icon: HeartPulse,
    title: "Recovery Analysis",
    description:
      "Balance training intensity with recovery recommendations for sustainable progress.",
  },
  {
    icon: TrendingUp,
    title: "Weekly Insights",
    description:
      "Understand your consistency, progress and performance with intelligent reports.",
  },
  {
    icon: RefreshCcw,
    title: "Plan Regeneration",
    description:
      "Instantly rebuild your training plan whenever your schedule or goals change.",
  },
  {
    icon: Sparkles,
    title: "Adaptive Recommendations",
    description:
      "GymAI continuously improves future plans based on your ongoing progress.",
  },
];

const stats = [
  {
    value: "<30s",
    label: "Plan Generation",
  },
  {
    value: "24/7",
    label: "AI Availability",
  },
  {
    value: "100%",
    label: "Personalized",
  },
  {
    value: "∞",
    label: "Continuous Learning and Adaptability",
  },
];

export default function AICapabilities() {
  return (
    <Section id="ai-capabilities" className="relative overflow-hidden">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          badge="AI Capabilities"
          title="An AI Coach That Evolves With Every Workout"
          description="GymAI doesn't simply generate plans—it analyzes your progress, adapts recommendations and continuously improves your training experience."
        />

        <div className="grid gap-10 xl:grid-cols-[420px_1fr]">
          {/* Left */}

          <SlideUp>
            <Card
              variant="gradient"
              animate
              hover
              className="group h-full border-primary/20"
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/15 blur-3xl transition duration-500 group-hover:scale-110" />

              <div className="relative flex h-full flex-col">
                <Badge variant="primary">
                  AI Engine
                </Badge>

                <div className="mt-8 flex h-24 w-24 items-center justify-center rounded-3xl gradient-primary-diagonal shadow-xl shadow-primary/20 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Brain className="h-12 w-12 text-white" />
                </div>

                <h3 className="mt-8 text-3xl font-bold tracking-tight">
                  Smarter Than A Static Workout Plan
                </h3>

                <p className="mt-6 leading-8 text-muted-foreground">
                  Traditional workout plans never change.
                  GymAI learns from your goals, training history and progress to
                  create recommendations that become increasingly personalized
                  over time.
                </p>

                <div className="mt-10 space-y-4">
                  {[
                    "Personalized training recommendations",
                    "Adaptive nutrition guidance",
                    "Automatic plan optimization",
                    "Performance-driven insights",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-background/30 p-3 backdrop-blur-xl"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>

                      <span className="text-sm font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className="mt-10 w-full"
                  size="lg"
                >
                  Experience GymAI
                </Button>
              </div>
            </Card>
          </SlideUp>

          {/* Right */}

          <Stagger className="grid gap-6 md:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  variant="glass"
                  animate
                  hover
                  className="group border-white/10"
                >
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary-diagonal shadow-lg shadow-primary/20 transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="mt-8 text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </Stagger>
        </div>

        {/* Bottom Stats */}

        <SlideUp delay={0.3}>
          <div className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                variant="glass"
                animate
                hover
                className="border-white/10 text-center"
              >
                <p className="gradient-primary bg-clip-text text-5xl font-black text-transparent">
                  {stat.value}
                </p>

                <p className="mt-3 text-muted-foreground">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </SlideUp>
      </Container>
    </Section>
  );
};
