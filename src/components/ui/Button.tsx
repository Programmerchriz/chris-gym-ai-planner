import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 text-white shadow-lg shadow-orange-500/30 hover:brightness-110",
        secondary: "bg-card border border-border hover:bg-muted",
        ghost: "hover:bg-muted text-muted-foreground hover:text-foreground",
        outline: "border border-orange-400/30 hover:bg-orange-500/10",
        gradient:
          "bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 text-white border border-orange-300/20 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:brightness-110 active:scale-[0.98]",

        "gradient-outline":
          "border border-orange-400/30 bg-orange-500/5 text-orange-300 hover:bg-orange-500/10 hover:border-orange-400/50",
      },

      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          className,
          "hover:cursor-pointer",
        )}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  },
);

Button.displayName = "Button";
