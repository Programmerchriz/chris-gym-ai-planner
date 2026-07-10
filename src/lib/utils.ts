import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional Tailwind classes safely.
 *
 * Example:
 * cn(
 *   "px-4 py-2",
 *   isActive && "bg-primary",
 *   className
 * )
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Clamp a number between a minimum and maximum.
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Format large numbers.
 *
 * 1200 -> 1.2K
 * 2500000 -> 2.5M
 */
export function formatNumber(value: number) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

/**
 * Delay helper.
 */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
