import { useEffect, useState } from "react";
import { Dumbbell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { UserButton } from "@neondatabase/neon-js/auth/react";

import { Button } from "../../ui/Button";
import ThemeToggle from "../../shared/ThemeToggle";
import MobileNav from "./MobileNav";

import { useAuth } from "../../../context/AuthContext";
import { NAV_LINKS } from "../../../constants/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, isLoading } = useAuth();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isProfile =
    location.pathname.startsWith("/profile") ||
    location.pathname.startsWith("/plan");

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:px-6">
      <motion.div
        animate={{
          width: scrolled ? "92%" : "96%",
          y: scrolled ? -4 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className={`
          w-full
          max-w-7xl
          rounded-2xl
          border
          backdrop-blur-2xl
          transition-all
          duration-300

          ${
            scrolled
              ? "border-white/10 bg-background/90 shadow-2xl"
              : "border-white/10 bg-background/70"
          }
        `}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          {/* Logo */}

          <Link to="/" className="group flex items-center gap-3">
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                gradient-primary-diagonal
                shadow-lg
                shadow-primary/25
                transition-all
                duration-300
                group-hover:rotate-6
                group-hover:scale-105
              "
            >
              <Dumbbell className="h-5 w-5 text-white" />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight">GymAI</span>

              <span className="hidden text-xs text-muted-foreground sm:block">
                AI Training Planner
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  relative
                  text-sm
                  font-medium
                  text-muted-foreground
                  transition-colors
                  duration-300
                  hover:text-foreground

                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-0.5
                  after:w-0
                  after:rounded-full
                  after:bg-primary
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side */}

          <div className="hidden items-center gap-3 lg:flex">
            {!isLoading && user ? (
              <>
                <Link to="/profile">
                  <Button size="sm" variant={isProfile ? "primary" : "ghost"}>
                    My Plan
                  </Button>
                </Link>

                <div className="rounded-xl border border-white/10 bg-card/70 p-1 backdrop-blur-md">
                  <UserButton size="sm" />
                </div>
              </>
            ) : !isLoading ? (
              <>
                <Link to="/auth/sign-in">
                  <Button variant="secondary" size="sm">
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

            <ThemeToggle />
          </div>

          {/* Mobile */}

          <MobileNav
            open={open}
            setOpen={setOpen}
            links={NAV_LINKS}
            user={user}
            isLoading={isLoading}
            isProfile={isProfile}
          />
        </div>
      </motion.div>
    </header>
  );
}
