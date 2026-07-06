import { AuthView } from '@neondatabase/neon-js/auth/react';
import { useParams } from 'react-router-dom';

export default function Auth() {
  const { pathname } = useParams();

  return (
    <div className="min-h-screen dark-gradient-bg pt-24 pb-12 px-6 flex items-center justify-center fade-in">
      <div className="relative w-full max-w-md">
        {/* Ambient Glow */}
        <div className="blur-glow opacity-20 pointer-events-none" />

        <div className="relative">
          <AuthView pathname={pathname} />
        </div>
      </div>
    </div>
  );
};
