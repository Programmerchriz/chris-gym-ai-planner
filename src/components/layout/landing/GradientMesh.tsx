import { cn } from "@/lib/utils";

interface GradientMeshProps {
  className?: string;
}

export default function GradientMesh({
  className,
}: GradientMeshProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10",
        "[background:radial-gradient(circle_at_top_left,rgba(249,115,22,.14),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,.14),transparent_40%),radial-gradient(circle_at_center,rgba(255,255,255,.03),transparent_70%)]",
        className
      )}
    />
  );
};
