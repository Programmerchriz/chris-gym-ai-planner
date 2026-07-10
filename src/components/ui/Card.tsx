import { forwardRef, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  [
    "relative overflow-hidden rounded-3xl",
    "border",
    "backdrop-blur-xl",
    "transition-all duration-300",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-card",
          "border-border",
        ],

        bordered: [
          "bg-card",
          "border-border",
          "hover:border-primary/40",
        ],

        glass: [
          "bg-background/60",
          "border-white/10",
          "backdrop-blur-2xl",
          "supports-[backdrop-filter]:bg-background/40",
        ],

        elevated: [
          "bg-card",
          "border-border",
          "shadow-xl",
          "shadow-black/5",
        ],

        gradient: [
          "border-primary/20",
          "bg-gradient-to-br",
          "from-card",
          "via-card",
          "to-primary/10",
        ],
      },

      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },

      hover: {
        true: "hover:-translate-y-1 hover:shadow-2xl",
        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "md",
      hover: false,
    },
  }
);

interface CardProps
  extends Omit<
      HTMLMotionProps<"div">,
      "children" | "className"
    >,
    VariantProps<typeof cardVariants> {
  children?: ReactNode;

  className?: string;

  animate?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant,
      padding,
      hover,
      animate = false,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          animate
            ? {
                y: -6,
                scale: 1.01,
              }
            : undefined
        }
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className={cn(
          cardVariants({
            variant,
            padding,
            hover,
          }),
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
