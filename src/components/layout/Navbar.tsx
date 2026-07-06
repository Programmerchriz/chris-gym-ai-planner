import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { useAuth } from "../../context/AuthContext";
import { UserButton } from "@neondatabase/neon-js/auth/react";

export default function Navbar() {
  const { user, isLoading } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-white-10)] bg-[var(--color-background)]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-[var(--color-text-primary)] hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--gradient-accent-primary)] flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-lg gradient-text-purple-pink">
            GymAI
          </span>
        </Link>

        <nav className="flex items-center gap-3">
          {!isLoading && user ? (
            <>
              <Link to="/profile">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[var(--color-text-secondary)]"
                >
                  My Plan
                </Button>
              </Link>
              <UserButton
                size="sm"
                className="bg-[var(--gradient-accent-primary)] text-white hover:bg-(--bg-white-20)"
              />
            </>
          ) : !isLoading ? (
            <>
              <Link to="/auth/sign-in">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[var(--color-text-secondary)]"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/sign-up">
                <Button variant="gradient" size="sm">
                  Sign Up
                </Button>
              </Link>
            </>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
