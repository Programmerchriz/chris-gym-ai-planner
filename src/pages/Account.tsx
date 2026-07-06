import { AccountView } from "@neondatabase/neon-js/auth/react";
import { useParams } from "react-router-dom";

export default function Account() {
  const { pathname } = useParams();
  return (
    <div className="min-h-screen dark-gradient-bg pt-24 pb-12 px-6 fade-in">
      <div className="max-w-5xl mx-auto relative">
        {/* Background Glow */}
        <div className="blur-glow opacity-20 pointer-events-none" />

        <div className="relative">
          <AccountView pathname={pathname} />
        </div>
      </div>
    </div>
  );
};
