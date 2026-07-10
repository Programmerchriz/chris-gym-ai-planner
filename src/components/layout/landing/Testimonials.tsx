import {
  Quote,
  Star,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";

import Container from "@/components/layout/landing/Container";
import Section from "@/components/layout/landing/Section";

import SectionHeading from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

import SlideUp from "@/components/motion/SlideUp";
import Stagger from "@/components/motion/Stagger";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Weight Loss Journey",
    initials: "SJ",
    result: "-18kg",
    quote:
      "GymAI completely changed the way I train. Instead of spending hours searching online, I simply follow my personalized plan every week and the progress has been incredible.",
  },
  {
    name: "Michael Chen",
    role: "Strength Training",
    initials: "MC",
    result: "+32%",
    quote:
      "The adaptive recommendations are what impressed me most. My workouts evolve as I improve, making every session feel perfectly matched to my goals.",
  },
  {
    name: "Emily Carter",
    role: "Busy Professional",
    initials: "EC",
    result: "4x/week",
    quote:
      "Meal planning, workouts and progress tracking are finally in one place. GymAI helped me stay consistent despite having a demanding schedule.",
  },
];

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Plans Generated",
  },
  {
    icon: Trophy,
    value: "96%",
    label: "Goal Completion",
  },
  {
    icon: TrendingUp,
    value: "4.9/5",
    label: "Average Rating",
  },
];

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      className="relative overflow-hidden"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          badge="Testimonials"
          title="Fitness Journeys Powered By GymAI"
          description="Thousands of users rely on GymAI to build consistency, improve performance and achieve their fitness goals."
        />

        {/* Rating */}

        <SlideUp>
          <Card
            variant="gradient"
            className="border-primary/20"
          >
            <div className="flex flex-col items-center gap-6 text-center">
              <Badge variant="primary">
                Trusted By Fitness Enthusiasts
              </Badge>

              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-8 w-8 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              <h3 className="text-4xl font-bold tracking-tight">
                Rated 4.9/5 by Early Users
              </h3>

              <p className="max-w-2xl leading-8 text-muted-foreground">
                From beginners building healthy habits to experienced athletes
                optimizing performance, GymAI helps users train smarter every
                single day.
              </p>
            </div>
          </Card>
        </SlideUp>

        {/* Stats */}

        <SlideUp delay={0.15}>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <Card
                  key={stat.label}
                  variant="glass"
                  animate
                  hover
                  className="border-white/10 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary-diagonal shadow-lg shadow-primary/20">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <p className="mt-6 gradient-primary bg-clip-text text-4xl font-black text-transparent">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-muted-foreground">
                    {stat.label}
                  </p>
                </Card>
              );
            })}
          </div>
        </SlideUp>

        {/* Testimonials */}

        <Stagger className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card
              key={item.name}
              variant="glass"
              animate
              hover
              className="group border-white/10"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                <Quote className="h-10 w-10 text-primary/70" />

                <p className="mt-8 flex-1 leading-8 text-muted-foreground">
                  "{item.quote}"
                </p>

                <div className="mt-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full gradient-primary-diagonal font-bold text-white shadow-lg shadow-primary/20">
                      {item.initials}
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        {item.name}
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <Badge variant="primary">
                    {item.result}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
};
