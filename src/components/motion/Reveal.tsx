import { motion } from "framer-motion";
import type { HTMLMotionProps, Variants } from "framer-motion";
import { fadeIn, scaleIn, slideDown, slideUp, viewport } from "@/lib/animations";

type RevealVariant =
  | "fade"
  | "slideUp"
  | "slideDown"
  | "scale";

interface RevealProps extends HTMLMotionProps<"div"> {
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const variants: Record<RevealVariant, Variants> = {
  fade: fadeIn,
  slideUp,
  slideDown,
  scale: scaleIn,
};

export default function Reveal({
  variant = "slideUp",
  delay = 0,
  duration,
  once = true,
  children,
  ...props
}: RevealProps) {
  const selected = variants[variant];

  return (
    <motion.div
      variants={selected}
      initial="hidden"
      whileInView="visible"
      viewport={{
        ...viewport,
        once,
      }}
      transition={{
        delay,
        ...(duration ? { duration } : {}),
        ...props.transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
