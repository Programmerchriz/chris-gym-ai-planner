import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "gradient" | "gradient-outline";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover-scale";

    const variants = {
      primary:
        "bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-hover)] shadow-lg hover:shadow-xl",
      secondary:
        "bg-[var(--color-card)] text-[var(--color-foreground)] border border-[var(--color-border)] hover:bg-[var(--color-border)] hover:border-[var(--border-white-30)]",
      ghost:
        "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-glass-hover)]",
      gradient:
        "bg-[var(--gradient-accent-primary)] text-white shadow-lg hover:shadow-xl hover:opacity-90",
      "gradient-outline":
        "bg-transparent text-white border border-[var(--border-purple-50)] hover:bg-[var(--bg-purple-10)]",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "px-8 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
