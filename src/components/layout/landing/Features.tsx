import {
  Activity,
  BarChart3,
  Brain,
  Dumbbell,
  Smartphone,
  UtensilsCrossed,
} from "lucide-react";

import Section from "@/components/layout/landing/Section";
import Container from "@/components/layout/landing/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import Stagger from "@/components/motion/Stagger";

const features = [
  {
    title: "AI Workout Plans",
    description:
      "Generate intelligent workout programs tailored to your goals, experience level, available equipment and weekly schedule.",
    icon: Dumbbell,
    size: "large",
  },
  {
    title: "AI Nutrition",
    description:
      "Receive personalized calorie targets and meal recommendations that adapt to your fitness journey.",
    icon: UtensilsCrossed,
    size: "large",
  },
  {
    title: "Progress Tracking",
    description:
      "Track workouts, monitor consistency and visualize your improvements over time.",
    icon: Activity,
  },
  {
    title: "Smart Analytics",
    description:
      "Understand your performance through actionable insights and training trends.",
    icon: BarChart3,
  },
  {
    title: "Personalized Recommendations",
    description:
      "GymAI continuously adapts your plans based on recovery, progress and performance.",
    icon: Brain,
    size: "wide",
  },
  {
    title: "Cross-device Sync",
    description:
      "Access your plans seamlessly across desktop, tablet and future mobile applications.",
    icon: Smartphone,
  },
];

export default function Features() {
  return (
    <Section id="features">
      <Container>
        <SectionHeading
          badge="Features"
          title="Everything You Need To Reach Your Fitness Goals"
          description="GymAI combines artificial intelligence, analytics and personalized planning into one modern fitness platform."
          align="center"
        />

        <Stagger className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const gridClass =
              feature.size === "large"
                ? "xl:col-span-2"
                : feature.size === "wide"
                  ? "md:col-span-2 xl:col-span-3"
                  : "";

            return (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className={gridClass}
              />
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
