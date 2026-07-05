import { type HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "glass" | "gradient";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-[var(--color-card)]",
      bordered:
        "bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--border-white-30)] transition-colors",
      glass: "glass-card hover:bg-[var(--bg-white-10)] transition-colors",
      gradient:
        "bg-[var(--gradient-dark-bg)] border border-[var(--border-purple-30)]",
    };

    return (
      <div
        ref={ref}
        className={`rounded-2xl p-6 transition-all duration-300 ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
