import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "px-3.5 py-1.5",
    "text-xs font-semibold",
    "transition-colors",
    "border",
    "w-fit",
    "select-none",
  ],
  {
    variants: {
      variant: {
        default: ["bg-muted", "text-muted-foreground", "border-border"],

        primary: ["bg-primary/10", "text-primary", "border-primary/20"],

        success: [
          "bg-emerald-500/10",
          "text-emerald-500",
          "border-emerald-500/20",
        ],

        warning: [
          "bg-orange-500/10",
          "text-orange-500",
          "border-orange-500/20",
        ],

        danger: ["bg-red-500/10", "text-red-500", "border-red-500/20"],

        outline: ["bg-transparent", "border-border", "text-foreground"],
      },

      size: {
        sm: "text-[11px] px-2.5 py-1",

        md: "text-xs px-3.5 py-1.5",

        lg: "text-sm px-4 py-2",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          badgeVariants({
            variant,
            size,
          }),
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Badge.displayName = "Badge";
