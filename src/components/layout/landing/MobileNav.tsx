import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Dumbbell, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import ThemeToggle from "@/components/shared/ThemeToggle";

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;

  links: ReadonlyArray<NavLink>;

  user: unknown;
  isLoading: boolean;
  isProfile: boolean;
}

export default function MobileNav({
  open,
  setOpen,
  links,
  user,
  isLoading,
  isProfile,
}: MobileNavProps) {
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleScroll = (href: string) => {
    close();

    if (!href.startsWith("#")) return;

    requestAnimationFrame(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <>
      {/* Right Controls */}

      <div className="flex items-center gap-2 lg:hidden">
        <ThemeToggle />

        <button
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-border
            bg-card/60
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-primary/40
            hover:bg-muted
          "
        >
          <Menu className="h-5 w-5 hover:cursor-pointer" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={close}
              className="
                fixed
                inset-0
                z-50
                bg-black/60
                backdrop-blur-sm
                lg:hidden
              "
            />

            {/* Drawer */}

            <motion.aside
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="
                fixed
                right-0
                top-0
                z-[60]
                flex
                h-screen
                w-[320px]
                flex-col
                border-l
                border-white/10
                bg-background
                shadow-2xl
                lg:hidden
              "
            >
              {/* Header */}

              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <Link
                  to="/"
                  onClick={close}
                  className="group flex items-center gap-3"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl gradient-primary-diagonal shadow-lg shadow-orange-500/25 transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
                    <Dumbbell className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="font-bold text-foreground">GymAI</p>

                    <p className="text-xs text-muted-foreground">
                      AI Training Planner
                    </p>
                  </div>
                </Link>

                <button
                  onClick={close}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    transition-colors
                    hover:bg-muted
                  "
                >
                  <X className="h-5 w-5 bg-muted text-popover hover:cursor-pointer" />
                </button>
              </div>

              {/* Navigation */}

              <motion.nav
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="flex flex-col gap-2 p-6"
              >
                {links.map((link) => (
                  <motion.button
                    key={link.href}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 20,
                      },
                      show: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    whileHover={{
                      x: 6,
                    }}
                    onClick={() => handleScroll(link.href)}
                    className="
                      bg-popover
                      border
                      border-border
                      rounded-xl
                      px-4
                      py-3
                      text-left
                      text-base
                      font-medium
                      transition-all
                      hover:text-foreground
                      hover:cursor-pointer
                      hover:bg-muted
                    "
                  >
                    {link.label}
                  </motion.button>
                ))}
              </motion.nav>

              <div className="mx-6 my-2 h-px bg-border" />

              {/* Bottom */}

              <div className="mt-auto space-y-3 p-6">
                {!isLoading && user ? (
                  <Link to="/profile" onClick={close}>
                    <Button
                      size="lg"
                      variant={isProfile ? "primary" : "secondary"}
                      className="w-full"
                    >
                      My Plan
                    </Button>
                  </Link>
                ) : !isLoading ? (
                  <div className="flex flex-col gap-y-4">
                    <Link to="/auth/sign-in" onClick={close}>
                      <Button variant="secondary" size="lg" className="w-full">
                        Sign In
                      </Button>
                    </Link>

                    <Link to="/auth/sign-up" onClick={close}>
                      <Button size="lg" className="w-full">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="h-12 animate-pulse rounded-2xl bg-muted" />
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
