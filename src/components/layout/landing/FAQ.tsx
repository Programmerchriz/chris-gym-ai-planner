import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Minus,
  Plus,
  MessageCircleQuestion,
} from "lucide-react";

import Section from "@/components/layout/landing/Section";
import Container from "@/components/layout/landing/Container";

import SectionHeading from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import SlideUp from "@/components/motion/SlideUp";

const faqs = [
  {
    question: "How does GymAI generate workout plans?",
    answer:
      "GymAI analyzes your fitness goals, experience level, available equipment, training schedule and preferences to generate personalized workout programs that are tailored specifically to you.",
  },
  {
    question: "Can I regenerate my workout plan?",
    answer:
      "Yes. As your goals, schedule or available equipment change, GymAI can generate a completely new plan in seconds while keeping your progress in mind.",
  },
  {
    question: "Is GymAI suitable for beginners?",
    answer:
      "Absolutely. Whether you're just starting your fitness journey or you're an experienced athlete, GymAI adapts every recommendation to your current fitness level.",
  },
  {
    question: "Do I need access to a gym?",
    answer:
      "No. You can generate plans for home workouts, commercial gyms or limited equipment setups. Your available equipment is considered during plan generation.",
  },
  {
    question: "Can GymAI create nutrition plans?",
    answer:
      "Yes. GymAI provides personalized calorie recommendations and meal guidance designed to complement your fitness goals.",
  },
  {
    question: "Will my plan adapt as I improve?",
    answer:
      "Yes. Adaptive recommendations are one of GymAI's biggest strengths. As you progress, future plans and suggestions evolve alongside your performance.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <Section
      id="faq"
      className="relative overflow-hidden"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before starting your AI-powered fitness journey."
        />

        <div className="mx-auto max-w-4xl space-y-5">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <SlideUp
                key={faq.question}
                delay={index * 0.05}
              >
                <Card
                  variant="glass"
                  className="overflow-hidden border-white/10"
                >
                  <button
                    onClick={() =>
                      setOpen(active ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-6 p-7 text-left transition-colors hover:bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary-diagonal shadow-lg shadow-primary/20">
                        <MessageCircleQuestion className="h-5 w-5 text-white" />
                      </div>

                      <h3 className="text-lg font-semibold">
                        {faq.question}
                      </h3>
                    </div>

                    <motion.div
                      animate={{
                        rotate: active ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      {active ? (
                        <Minus className="h-5 w-5 text-primary" />
                      ) : (
                        <Plus className="h-5 w-5 text-muted-foreground" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 px-7 py-6">
                          <p className="leading-8 text-muted-foreground">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </SlideUp>
            );
          })}
        </div>

        {/* Bottom */}

        <SlideUp delay={0.3}>
          <Card
            variant="gradient"
            className="mx-auto mt-16 max-w-4xl border-primary/20 text-center"
          >
            <Badge
              variant="primary"
              className="mx-auto"
            >
              Still have questions?
            </Badge>

            <h3 className="mt-6 text-3xl font-bold tracking-tight">
              We're Here To Help
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted-foreground">
              Can't find the answer you're looking for?
              Reach out and we'll be happy to help you get started with GymAI.
            </p>

            <Button
              size="lg"
              className="mx-auto mt-10"
            >
              Contact Support
            </Button>
          </Card>
        </SlideUp>
      </Container>
    </Section>
  );
};
