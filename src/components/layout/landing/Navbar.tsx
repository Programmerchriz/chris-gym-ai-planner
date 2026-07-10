import { Dumbbell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../ui/Button";
import { useAuth } from "../../../context/AuthContext";
import { UserButton } from "@neondatabase/neon-js/auth/react";

export default function Navbar() {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  const isProfile =
    location.pathname.startsWith("/profile") ||
    location.pathname.startsWith("/plan");

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-background/70 px-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 sm:px-6">
        {/* Logo */}

        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 shadow-lg shadow-orange-500/25 transition-all duration-300 group-hover:scale-105 group-hover:rotate-6">
            <Dumbbell className="h-5 w-5 text-white" />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-foreground">
              GymAI
            </span>

            <span className="hidden text-xs text-muted-foreground sm:block">
              AI Training Planner
            </span>
          </div>
        </Link>

        {/* Navigation */}

        <nav className="flex items-center gap-2 sm:gap-3">
          {!isLoading && user ? (
            <>
              <Link to="/profile">
                <Button variant={isProfile ? "primary" : "ghost"} size="sm">
                  My Plan
                </Button>
              </Link>

              <div className="ml-1 rounded-xl border border-white/10 bg-card/70 p-1 backdrop-blur-md">
                <UserButton size="sm" />
              </div>
            </>
          ) : !isLoading ? (
            <>
              <Link to="/auth/sign-in">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>

              <Link to="/auth/sign-up">
                <Button variant="primary" size="sm">
                  Get Started
                </Button>
              </Link>
            </>
          ) : (
            <div className="h-10 w-24 animate-pulse rounded-xl bg-muted" />
          )}
        </nav>
      </div>
    </header>
  );
}
