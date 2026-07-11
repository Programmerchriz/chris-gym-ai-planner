import {
  ArrowRight,
  Brain,
  ChartColumn,
  ClipboardList,
  Sparkles,
  Target,
} from "lucide-react";

import Section from "@/components/layout/landing/Section";
import Container from "@/components/layout/landing/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

import SlideUp from "@/components/motion/SlideUp";
import Stagger from "@/components/motion/Stagger";

const steps = [
  {
    icon: ClipboardList,
    title: "Create Your Profile",
    description:
      "Tell GymAI about your fitness level, available equipment, schedule and personal goals so every recommendation starts with the right foundation.",
    badge: "Step 01",
  },
  {
    icon: Brain,
    title: "AI Builds Your Plan",
    description:
      "Our AI analyzes your profile and instantly creates a personalized workout and nutrition strategy tailored specifically to you.",
    badge: "Step 02",
  },
  {
    icon: Target,
    title: "Train With Confidence",
    description:
      "Follow structured workouts, stay consistent and receive actionable guidance that keeps you moving toward your goals.",
    badge: "Step 03",
  },
  {
    icon: ChartColumn,
    title: "Improve Every Week",
    description:
      "Track progress, monitor performance and let GymAI continuously adapt your plans as your body and goals evolve.",
    badge: "Step 04",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="relative overflow-hidden">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          badge="How It Works"
          title="Your AI Fitness Journey In Four Simple Steps"
          description="From understanding your goals to adapting every workout, GymAI becomes your intelligent fitness partner every step of the way."
        />

        <div className="relative mx-auto mt-20 max-w-6xl">
          {/* Desktop Timeline */}

          <Stagger className="grid gap-8 md:grid-cols-2 items-center justify-center">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <SlideUp key={step.title} className="h-full w-full">
                  {/* Card */}

                  <Card
                    variant="glass"
                    animate
                    hover
                    className="group relative h-full overflow-hidden border-white/10 p-8"
                  >
                    {/* Glow */}

                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      <Badge variant="primary" size="sm">
                        {step.badge}
                      </Badge>

                      <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary-diagonal shadow-lg shadow-primary/20 transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="mt-8 text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
                        {step.title}
                      </h3>

                      <p className="mt-5 leading-8 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </SlideUp>
              );
            })}
          </Stagger>
        </div>

        {/* Bottom Summary */}

        <SlideUp delay={0.35}>
          <Card
            variant="gradient"
            padding="lg"
            className="mx-auto mt-24 max-w-5xl border-primary/20"
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <Badge variant="primary">Intelligent Personalization</Badge>

                <h3 className="mt-6 text-3xl font-bold tracking-tight">
                  Every Workout Gets Smarter
                </h3>

                <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
                  Unlike static fitness programs, GymAI continuously learns from
                  your progress, training consistency and evolving goals to
                  recommend better workouts, smarter recovery strategies and
                  optimized nutrition over time.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    value: "30s",
                    label: "Plan Generation",
                  },
                  {
                    value: "24/7",
                    label: "AI Support",
                  },
                  {
                    value: "100%",
                    label: "Personalized",
                  },
                  {
                    value: "∞",
                    label: "Adaptability",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-background/40 p-5 text-center backdrop-blur-xl"
                  >
                    <p className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideUp>
      </Container>
    </Section>
  );
}
