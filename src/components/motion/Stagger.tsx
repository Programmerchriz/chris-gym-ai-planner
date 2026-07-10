import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { staggerContainer, viewport } from "@/lib/animations";

interface StaggerProps extends HTMLMotionProps<"div"> {
  once?: boolean;
}

export default function Stagger({
  once = true,
  children,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        ...viewport,
        once,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
