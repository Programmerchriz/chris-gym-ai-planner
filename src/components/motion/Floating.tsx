import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { floatingAnimation } from "@/lib/animations";

interface FloatingProps extends HTMLMotionProps<"div"> {}

export default function Floating({ children, ...props }: FloatingProps) {
  return (
    <motion.div animate={floatingAnimation} {...props}>
      {children}
    </motion.div>
  );
}
