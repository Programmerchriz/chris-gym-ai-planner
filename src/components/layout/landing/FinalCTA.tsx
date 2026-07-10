import {
  ArrowRight,
  Brain,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import Section from "@/components/layout/landing/Section";
import Container from "@/components/layout/landing/Container";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

import FadeIn from "@/components/motion/FadeIn";
import SlideUp from "@/components/motion/SlideUp";

export default function FinalCTA() {
  return (
    <Section
      id="cta"
      className="relative overflow-hidden pb-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[180px]" />

        <div className="absolute left-20 top-24 h-60 w-60 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <Card
          variant="gradient"
          className="relative overflow-hidden border-primary/20 px-8 py-16 md:px-14 md:py-20"
        >
          {/* Decorative Orbs */}

          <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-primary/10 blur-[120px]" />

          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[150px]" />

          {/* Floating Cards */}

          <FadeIn delay={0.2}>
            <Card
              variant="glass"
              padding="sm"
              className="absolute left-10 top-10 hidden border-white/10 lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary-diagonal">
                  <Brain className="h-5 w-5 text-white" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    AI Ready
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Personalized Plans
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>

          <FadeIn delay={0.35}>
            <Card
              variant="glass"
              padding="sm"
              className="absolute bottom-12 right-10 hidden border-white/10 lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Secure
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Your Data Protected
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Content */}

          <div className="relative mx-auto max-w-4xl text-center">
            <SlideUp>
              <Badge
                variant="primary"
                className="mx-auto"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Start Your Fitness Journey Today
              </Badge>
            </SlideUp>

            <SlideUp delay={0.1}>
              <h2 className="mt-8 text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Let AI Build Your
                <br />

                <span className="gradient-primary bg-clip-text text-transparent">
                  Perfect Workout Plan.
                </span>
              </h2>
            </SlideUp>

            <SlideUp delay={0.2}>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
                Stop guessing.
                Stop wasting time.
                Generate personalized workouts, smarter nutrition plans and
                adaptive recommendations in seconds with GymAI.
              </p>
            </SlideUp>

            {/* Buttons */}

            <SlideUp delay={0.3}>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  variant="gradient"
                >
                  Generate My Plan

                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                >
                  View Demo
                </Button>
              </div>
            </SlideUp>

            {/* Stats */}

            <SlideUp delay={0.4}>
              <div className="mt-16 flex flex-wrap justify-center gap-5">
                {[
                  {
                    icon: Brain,
                    text: "AI Personalized",
                  },
                  {
                    icon: Zap,
                    text: "<30s Generation",
                  },
                  {
                    icon: ShieldCheck,
                    text: "Secure Platform",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 rounded-full border border-white/10 bg-background/40 px-5 py-3 backdrop-blur-xl"
                    >
                      <Icon className="h-5 w-5 text-primary" />

                      <span className="text-sm font-medium">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </SlideUp>
          </div>
        </Card>
      </Container>
    </Section>
  );
};
