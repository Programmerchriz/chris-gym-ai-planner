import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import SlideUp from "@/components/motion/SlideUp";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <SlideUp>
        <Badge variant="primary">
          <Sparkles className="mr-2 h-3.5 w-3.5" />
          AI Powered Fitness
        </Badge>
      </SlideUp>

      <SlideUp delay={0.1}>
        <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
          Train Smarter.
          <br />
          Reach Your Goals
          <span className="gradient-primary bg-clip-text text-transparent">
            {" "}
            With AI.
          </span>
        </h1>
      </SlideUp>

      <SlideUp delay={0.2}>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          GymAI creates intelligent workout plans, personalized nutrition,
          adaptive recommendations, and detailed analytics tailored to your
          goals.
        </p>
      </SlideUp>

      <SlideUp delay={0.3}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button size="lg">
            Generate My Plan
            <ArrowRight size={18} />
          </Button>

          <Button size="lg" variant="secondary">
            See Demo
          </Button>
        </div>
      </SlideUp>

      <SlideUp delay={0.4}>
        <div className="mt-12 flex flex-wrap gap-8 text-sm">
          <div>
            <p className="font-semibold">Personalized</p>

            <span className="text-muted-foreground">AI Plans</span>
          </div>

          <div>
            <p className="font-semibold">Nutrition</p>

            <span className="text-muted-foreground">Meal Planning</span>
          </div>

          <div>
            <p className="font-semibold">Progress</p>

            <span className="text-muted-foreground">Smart Analytics</span>
          </div>
        </div>
      </SlideUp>
    </div>
  );
}
