import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Container from "@/components/layout/landing/Container";
import HeroBackground from "@/components/layout/landing/HeroBackground";
import HeroPreview from "@/components/layout/landing/HeroPreview";
import FadeIn from "@/components/motion/FadeIn";
import SlideUp from "@/components/motion/SlideUp";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-28">
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          {/* Left */}

          <div className="max-w-2xl">
            <FadeIn>
              <Badge variant="primary">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                AI Powered Fitness Platform
              </Badge>
            </FadeIn>

            <SlideUp delay={0.1}>
              <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
                Train Smarter.
                <br />
                Reach Your Goals
                <br />
                <span className="gradient-primary bg-clip-text text-transparent">
                  With AI.
                </span>
              </h1>
            </SlideUp>

            <SlideUp delay={0.2}>
              <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
                Personalized workout plans, AI nutrition, adaptive
                recommendations, and powerful analytics; everything you need to
                build consistency and reach your fitness goals faster.
              </p>
            </SlideUp>

            <SlideUp delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                  Generate My Plan
                  <ArrowRight size={18} />
                </Button>

                <Button size="lg" variant="secondary">
                  <Play size={18} />
                  See Demo
                </Button>
              </div>
            </SlideUp>

            <SlideUp delay={0.4}>
              <div className="mt-12 flex flex-wrap gap-10">
                <div>
                  <p className="text-3xl font-bold">10K+</p>

                  <span className="text-muted-foreground">Plans Generated</span>
                </div>

                <div>
                  <p className="text-3xl font-bold">96%</p>

                  <span className="text-muted-foreground">Goal Completion</span>
                </div>

                <div>
                  <p className="text-3xl font-bold">AI</p>

                  <span className="text-muted-foreground">
                    Personalized Coaching
                  </span>
                </div>
              </div>
            </SlideUp>
          </div>

          {/* Right */}

          <FadeIn delay={0.3}>
            <HeroPreview />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
