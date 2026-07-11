import { Github, Instagram, Twitter, Dumbbell } from "lucide-react";

import Container from "@/components/layout/landing/Container";

const footerLinks = {
  Product: ["Features", "AI Capabilities", "Pricing", "FAQ"],

  Company: ["About", "Blog", "Careers", "Contact"],

  Resources: ["Documentation", "Help Center", "Community", "API"],

  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socials = [
  {
    name: "Github",
    icon: Github,
  },
  {
    name: "Twitter",
    icon: Twitter,
  },
  {
    name: "Instagram",
    icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <Container>
        <div className="py-16">
          {/* Top */}

          <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(4,1fr)]">
            {/* Brand */}

            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl gradient-primary-diagonal shadow-lg shadow-primary/20">
                  <Dumbbell className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-bold tracking-tight">GymAI</h3>

                  <p className="text-xs text-muted-foreground">
                    AI Training Planner
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-7 text-muted-foreground">
                {/* Personalized workouts, smarter nutrition and AI-powered
                recommendations to help you reach your fitness goals faster. */}
              </p>

              {/* Socials */}

              <div className="mt-8 flex gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href="#"
                      aria-label={social.name}
                      className="
                        flex h-10 w-10 items-center justify-center
                        rounded-xl
                        border border-white/10
                        bg-background/50
                        text-muted-foreground
                        transition-all duration-300
                        hover:border-primary/30
                        hover:bg-primary/10
                        hover:text-primary
                      "
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links */}

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold">{title}</h4>

                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="
                            text-sm
                            text-muted-foreground
                            transition-colors
                            hover:text-primary
                          "
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}

          <div
            className="
              mt-16
              flex
              flex-col
              gap-4
              border-t
              border-white/10
              pt-8
              text-sm
              text-muted-foreground
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <p>© {new Date().getFullYear()} GymAI. All rights reserved.</p>

            <p>{/* Built with React, Express, PostgreSQL & AI. */}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
