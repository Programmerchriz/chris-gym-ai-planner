import {
  Brain,
  Check,
  CheckCircle2,
  Clock3,
  Dumbbell,
  Sparkles,
  Target,
} from "lucide-react";

import Container from "@/components/layout/landing/Container";
import Section from "@/components/layout/landing/Section";

import SectionHeading from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

import SlideUp from "@/components/motion/SlideUp";
import Stagger from "@/components/motion/Stagger";

const benefits = [
  {
    icon: Clock3,
    title: "Save Hours Every Week",
    description:
      "Stop searching for routines and meal plans. GymAI generates everything you need in seconds.",
  },
  {
    icon: Brain,
    title: "Train Smarter",
    description:
      "Receive intelligent recommendations that adapt to your progress instead of following generic templates.",
  },
  {
    icon: Dumbbell,
    title: "Stay Consistent",
    description:
      "Structured plans make it easier to build sustainable habits and maintain momentum.",
  },
  {
    icon: Target,
    title: "Reach Goals Faster",
    description:
      "Every recommendation is aligned with your goals, experience and available equipment.",
  },
];

const comparison = [
  {
    old: "Searching YouTube for workouts",
    ai: "Instant personalized plans",
  },
  {
    old: "Generic meal plans",
    ai: "Nutrition tailored to you",
  },
  {
    old: "Manual progress tracking",
    ai: "Automatic AI insights",
  },
  {
    old: "Restarting every few weeks",
    ai: "Continuous improvement",
  },
];

export default function Benefits() {
  return (
    <Section
      id="benefits"
      className="relative overflow-hidden"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          badge="Benefits"
          title="Everything You Need To Stay Consistent And Make Progress"
          description="GymAI removes the guesswork from fitness so you can spend less time planning and more time improving."
        />

        <div className="grid gap-12 xl:grid-cols-[1.05fr_.95fr]">
          {/* LEFT */}

          <SlideUp>
            <Card
              variant="gradient"
              animate
              hover
              className="group h-full border-primary/20"
            >
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl transition duration-500 group-hover:scale-110" />

              <div className="relative">
                <Badge variant="primary">
                  Why GymAI?
                </Badge>

                <h3 className="mt-6 text-3xl font-bold tracking-tight">
                  Focus On Training.
                  <br />
                  Let AI Handle The Planning.
                </h3>

                <p className="mt-6 leading-8 text-muted-foreground">
                  GymAI combines artificial intelligence, nutrition planning,
                  progress tracking and adaptive recommendations into one
                  seamless experience—helping you stay consistent while removing
                  the complexity of fitness planning.
                </p>

                <div className="mt-10 space-y-4">
                  {[
                    "Personalized workouts",
                    "Adaptive nutrition guidance",
                    "Weekly AI insights",
                    "Smarter recommendations over time",
                    "Everything in one platform",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-background/40 p-4 backdrop-blur-xl"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary" />

                      <span className="font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </SlideUp>

          {/* RIGHT */}

          <Stagger className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <Card
                  key={benefit.title}
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
                      {benefit.title}
                    </h3>

                    <p className="mt-4 leading-7 text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </Stagger>
        </div>

        {/* Comparison */}

        <SlideUp delay={0.35}>
          <Card
            variant="glass"
            className="mt-20 border-white/10 overflow-hidden"
          >
            <div className="border-b border-white/10 px-8 py-6">
              <h3 className="text-2xl font-bold tracking-tight">
                Traditional Fitness vs GymAI
              </h3>

              <p className="mt-2 text-muted-foreground">
                See how AI transforms the way you train.
              </p>
            </div>

            <div className="divide-y divide-white/10">
              {comparison.map((row) => (
                <div
                  key={row.old}
                  className="grid gap-6 px-8 py-6 md:grid-cols-2"
                >
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                      ×
                    </span>

                    {row.old}
                  </div>

                  <div className="flex items-center gap-3 font-medium">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
                      {/* <Sparkles className="h-4 w-4 text-primary" /> */}
                      <Check className="h-4 w-4 text-primary" />
                    </span>

                    {row.ai}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </SlideUp>
      </Container>
    </Section>
  );
};
