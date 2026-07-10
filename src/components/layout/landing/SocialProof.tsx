import { Brain, Database, Server, Smartphone } from "lucide-react";

import Container from "@/components/layout/landing/Container";
import Section from "@/components/layout/landing/Section";
import FadeIn from "@/components/motion/FadeIn";

const stack = [
  {
    icon: Brain,
    name: "AI Powered",
  },
  {
    icon: Smartphone,
    name: "Responsive",
  },
  {
    icon: Server,
    name: "Express API",
  },
  {
    icon: Database,
    name: "PostgreSQL",
  },
];

export default function SocialProof() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="rounded-3xl border border-border bg-card p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-primary">
                  Trusted Platform
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  Built for modern fitness.
                </h2>

                <p className="mt-4 max-w-2xl text-muted-foreground">
                  GymAI combines intelligent planning, adaptive recommendations
                  and modern web technologies to help users train consistently.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stack.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-border bg-background p-5"
                  >
                    <item.icon className="mb-4 h-6 w-6 text-primary" />

                    <p className="font-medium">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
