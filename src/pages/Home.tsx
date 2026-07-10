import { Link, Navigate } from "react-router-dom";
import {
  Zap,
  Target,
  Calendar,
  ArrowRight,
  Sparkles,
  Clock,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useAuth } from "../context/AuthContext";
import Hero from "../components/layout/landing/Hero";
import SocialProof from "../components/layout/landing/SocialProof";
import Features from "../components/layout/landing/Features";
import DashboardPreview from "../components/layout/landing/DashboardPreview";
import HowItWorks from "../components/layout/landing/HowItWorks";
import AICapabilities from "../components/layout/landing/AICapabilities";
import Benefits from "../components/layout/landing/Benefits";
import Testimonials from "../components/layout/landing/Testimonials";
import Pricing from "../components/layout/landing/Pricing";
import FAQ from "../components/layout/landing/FAQ";
import FinalCTA from "../components/layout/landing/FinalCTA";
import Footer from "../components/layout/landing/Footer";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Plans",
    description:
      "Get a training program tailored to your goals, experience, and schedule.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description:
      "Whether you want to build muscle, lose fat, or get stronger — we optimize for your goal.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Plans that fit your lifestyle. Train 2 days or 6 — we adapt to you.",
  },
  {
    icon: Clock,
    title: "Time-Efficient",
    description:
      "Every workout is designed to maximize results in your available time.",
  },
];

export default function Home() {
  const { user, isLoading } = useAuth();

  // Redirect authenticated users to profile
  if (!isLoading && user) {
    return <Navigate to="/profile" replace />;
  }

  return (
    // <div className="min-h-screen overflow-hidden bg-background">

    //   {/* Background */}

    //   <div className="pointer-events-none fixed inset-0 overflow-hidden">

    //     <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

    //     <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[120px]" />

    //     <div className="absolute -right-40 top-32 h-[420px] w-[420px] rounded-full bg-orange-600/10 blur-[120px]" />

    //   </div>

    //   {/* HERO */}

    //   <section className="relative px-6 pt-32 pb-24">

    //     <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

    //       {/* Left */}

    //       <div className="text-center lg:text-left">

    //         <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 backdrop-blur-md">

    //           <Sparkles className="h-4 w-4 text-orange-400" />

    //           <span className="text-sm text-muted-foreground">

    //             AI Powered Training Platform

    //           </span>

    //         </div>

    //         <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">

    //           Your Personal

    //           <br />

    //           <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">

    //             AI Fitness Coach

    //           </span>

    //         </h1>

    //         <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground mx-auto lg:mx-0">

    //           Generate intelligent workout plans customized to your goals,

    //           experience, equipment and available training days.

    //           No spreadsheets. No guesswork.

    //           Just smarter training.

    //         </p>

    //         <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:items-center lg:justify-start">

    //           <Link
    //             to="/onboarding"
    //             className="inline-flex w-auto self-center sm:self-auto"
    //           >
    //             <Button size="lg">
    //               Get Started
    //               <ArrowRight className="ml-2 h-5 w-5" />
    //             </Button>
    //           </Link>

    //           <Link
    //             to="/auth/sign-in"
    //             className="inline-flex w-auto self-center sm:self-auto"
    //           >
    //             <Button variant="secondary" size="lg">
    //               Sign In
    //             </Button>
    //           </Link>

    //         </div>

    //       </div>

    //       {/* Right */}

    //       <div className="relative">

    //         <Card
    //           variant="glass"
    //           className="overflow-hidden rounded-3xl p-0 shadow-2xl"
    //         >

    //           <div className="border-b border-border/50 bg-gradient-to-r from-orange-500/20 to-amber-400/10 px-6 py-5">

    //             <div className="flex items-center justify-between">

    //               <div>

    //                 <p className="font-semibold">

    //                   AI Generated Plan

    //                 </p>

    //                 <p className="text-sm text-muted-foreground">

    //                   Personalized in seconds

    //                 </p>

    //               </div>

    //               <Zap className="h-6 w-6 text-orange-400" />

    //             </div>

    //           </div>

    //           <div className="space-y-5 p-6">

    //             {[
    //               ["Goal", "Build Muscle"],
    //               ["Frequency", "5 Days / Week"],
    //               ["Split", "Push • Pull • Legs"],
    //               ["Duration", "60 Minutes"],
    //             ].map(([label, value]) => (

    //               <div
    //                 key={label}
    //                 className="flex items-center justify-between rounded-xl border border-border/40 bg-background/40 px-4 py-4"
    //               >
    //                 <span className="text-muted-foreground">

    //                   {label}

    //                 </span>

    //                 <span className="font-semibold">

    //                   {value}

    //                 </span>

    //               </div>

    //             ))}

    //             <div
    //                 className="flex items-center justify-center rounded-xl border border-border/40 bg-background/40 px-4 py-4"
    //               >
    //             {/* <Button className="mt-3 w-full"> */}

    //               <p>Generate Plan</p>

    //             {/* </Button> */}
    //             </div>

    //           </div>

    //         </Card>

    //       </div>

    //     </div>

    //   </section>

    //   {/* FEATURES */}

    //   <section className="relative px-6 pb-28">

    //     <div className="mx-auto max-w-7xl">

    //       <div className="mb-16 text-center">

    //         <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">

    //           Features

    //         </span>

    //         <h2 className="mt-5 text-4xl font-bold sm:text-5xl">

    //           Built for Serious Progress

    //         </h2>

    //         <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">

    //           Every recommendation is tailored around your fitness profile,

    //           helping you stay consistent and achieve measurable results.

    //         </p>

    //       </div>

    //       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    //         {features.map((feature) => (

    //           <Card
    //             key={feature.title}
    //             variant="glass"
    //             className="group h-full p-8"
    //           >

    //             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 shadow-lg transition-all duration-300 group-hover:scale-110">

    //               <feature.icon className="h-7 w-7 text-white" />

    //             </div>

    //             <h3 className="mb-3 text-xl font-semibold">

    //               {feature.title}

    //             </h3>

    //             <p className="leading-7 text-muted-foreground">

    //               {feature.description}

    //             </p>

    //           </Card>

    //         ))}

    //       </div>

    //     </div>

    //   </section>

    // </div>
    <>
      <Hero />
      {/* <SocialProof /> */}
      <Features />
      <DashboardPreview />
      <HowItWorks />
      {/* <AICapabilities /> */}
      <Benefits />
      {/* <Testimonials /> */}
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
