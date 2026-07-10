import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface DashboardWindowProps {
  children: ReactNode;
  className?: string;
}

export default function DashboardWindow({
  children,
  className,
}: DashboardWindowProps) {
  return (
    <Card
      variant="glass"
      padding="none"
      className={cn(
        "overflow-hidden rounded-[32px]",
        "border-white/10",
        "shadow-[0_30px_120px_rgba(0,0,0,.45)]",
        className
      )}
    >
      {/* Browser Bar */}

      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

        <div className="h-3 w-3 rounded-full bg-red-400" />

        <div className="h-3 w-3 rounded-full bg-yellow-400" />

        <div className="h-3 w-3 rounded-full bg-green-400" />

        <div className="ml-4 h-8 flex-1 rounded-full bg-white/5" />
      </div>

      <div className="p-6">

        {children}

      </div>
    </Card>
  );
};
