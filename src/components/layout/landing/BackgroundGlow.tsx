import { cn } from "@/lib/utils";

interface BackgroundGlowProps {
  className?: string;
}

export default function BackgroundGlow({ className }: BackgroundGlowProps) {
  return (
    <>
      <div
        className={cn(
          "absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/20 blur-[120px]",
          className,
        )}
      />

      <div
        className={cn(
          "absolute right-0 bottom-0 h-72 w-72 rounded-full bg-amber-400/20 blur-[120px]",
          className,
        )}
      />
    </>
  );
}
