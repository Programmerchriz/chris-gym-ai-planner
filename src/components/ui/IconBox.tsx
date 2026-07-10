import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IconBoxProps {
  children: ReactNode;

  size?: "sm" | "md" | "lg";

  rounded?: "xl" | "2xl" | "full";

  animate?: boolean;

  className?: string;
}

const sizes = {
  sm: "h-10 w-10",

  md: "h-14 w-14",

  lg: "h-16 w-16",
};

const radius = {
  xl: "rounded-xl",

  "2xl": "rounded-2xl",

  full: "rounded-full",
};

export default function IconBox({
  children,
  size = "md",
  rounded = "2xl",
  animate = true,
  className,
}: IconBoxProps) {
  return (
    <motion.div
      whileHover={
        animate
          ? {
              scale: 1.08,
              rotate: 4,
            }
          : undefined
      }
      transition={{
        duration: 0.25,
      }}
      className={cn(
        "gradient-primary-diagonal",
        "flex items-center justify-center",
        "text-white",
        "shadow-lg shadow-orange-500/20",
        sizes[size],
        radius[rounded],
        className
      )}
    >
      {children}
    </motion.div>
  );
};
