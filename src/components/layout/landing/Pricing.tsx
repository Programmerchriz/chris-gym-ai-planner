import {
  Check,
  Sparkles,
  Zap,
} from "lucide-react";

import Container from "@/components/layout/landing/Container";
import Section from "@/components/layout/landing/Section";

import SectionHeading from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import SlideUp from "@/components/motion/SlideUp";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description:
      "Perfect for getting started with AI-powered fitness planning.",
    button: "Start Free",
    variant: "glass" as const,
    features: [
      "AI workout generation",
      "Basic nutrition guidance",
      "2 active training plans",
      "Progress tracking",
      "Community updates",
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description:
      "Unlock the complete GymAI experience with smarter recommendations and unlimited plans.",
    button: "Upgrade to Pro",
    popular: true,
    variant: "gradient" as const,
    features: [
      "Unlimited AI workout plans",
      "Advanced nutrition planning",
      "Adaptive recommendations",
      "Weekly AI insights",
      "Priority plan regeneration",
      "Future mobile sync",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "Built for fitness coaches, gyms and organizations that need AI-powered training at scale.",
    button: "Contact Sales",
    variant: "glass" as const,
    features: [
      "Everything in Pro",
      "Multi-user team management",
      "Coach & client dashboards",
      "Custom AI training templates",
      "Organization analytics",
      "API & integrations",
      "Dedicated onboarding",
      "Priority enterprise support",
    ],
  },
];

export default function Pricing() {
  return (
    <Section
      id="pricing"
      className="relative overflow-hidden"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          badge="Pricing"
          title="Simple Pricing That Grows With You"
          description="Start free today and upgrade whenever you're ready for a more personalized AI fitness experience."
        />

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <SlideUp
              key={plan.name}
              className="h-full"
            >
              <Card
                variant={plan.variant}
                animate
                hover
                className={`relative h-full overflow-visible ${
                  plan.popular
                    ? "border-primary/30 shadow-2xl shadow-primary/15 lg:-translate-y-4"
                    : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <Badge
                      variant="primary"
                      className="px-5 py-2 shadow-lg"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="flex h-full flex-col">
                  <div>
                    <h3 className="text-3xl font-bold">
                      {plan.name}
                    </h3>

                    <p className="mt-4 leading-7 text-muted-foreground">
                      {plan.description}
                    </p>

                    <div className="mt-8 flex items-end gap-1">
                      <span className="gradient-primary bg-clip-text text-6xl font-black text-transparent">
                        {plan.price}
                      </span>

                      <span className="mb-2 text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <div className="my-10 h-px bg-border" />

                  <div className="flex-1 space-y-5">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-4 w-4 text-primary" />
                        </div>

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="mt-12 w-full"
                    variant={
                      (plan.popular || plan.name === "Enterprise")
                        ? "gradient"
                        : "secondary"
                    }
                  >
                    {plan.popular && (
                      <Zap className="mr-2 h-4 w-4" />
                    )}

                    {plan.button}
                  </Button>
                </div>
              </Card>
            </SlideUp>
          ))}
        </div>

        {/* Bottom Banner */}

        <SlideUp delay={0.25}>
          <Card
            variant="glass"
            className="mx-auto mt-16 max-w-5xl border-white/10"
          >
            <div className="flex flex-col items-center gap-6 text-center">
              <Badge variant="primary">
                No Hidden Fees
              </Badge>

              <h3 className="text-3xl font-bold tracking-tight">
                Start Free. Upgrade Only When You Need More.
              </h3>

              <p className="max-w-2xl leading-8 text-muted-foreground">
                We believe everyone should have access to intelligent fitness
                planning. Start with our free plan and unlock advanced AI
                features whenever you're ready.
              </p>
            </div>
          </Card>
        </SlideUp>
      </Container>
    </Section>
  );
};
