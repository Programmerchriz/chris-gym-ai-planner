import type { ReactNode } from "react";
import Floating from "@/components/motion/Floating";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: ReactNode;

  className?: string;
}

export default function FloatingCard({
  children,
  className,
}: FloatingCardProps) {
  return (
    <Floating>
      <Card
        variant="glass"
        padding="md"
        animate
        hover
        className={cn("border-white/10 shadow-2xl", className)}
      >
        {children}
      </Card>
    </Floating>
  );
}
