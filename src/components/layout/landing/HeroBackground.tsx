import BackgroundGlow from "@/components/layout/landing/BackgroundGlow";
import GradientMesh from "@/components/layout/landing/GradientMesh";
import GridPattern from "@/components/layout/landing/GridPattern";

export default function HeroBackground() {
  return (
    <>
      <GradientMesh />

      <GridPattern className="opacity-[0.03]" />

      <BackgroundGlow />

      {/* Top glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-[140px]" />

      {/* Bottom glow */}

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-400/10 blur-[120px]" />

      {/* Radial */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_60%)]" />
    </>
  );
}
