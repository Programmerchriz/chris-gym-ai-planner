import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Auth from "./pages/Auth";
import Navbar from "./components/layout/Navbar";
import { NeonAuthUIProvider } from "@neondatabase/neon-js/auth/react";
import { authClient } from "./lib/auth";
import AuthProvider from "./context/AuthContext";
import PlanHistory from "./pages/PlanHistory";
import PlanDetail from "./pages/plan/[version]";

function App() {
  return (
    <NeonAuthUIProvider
      authClient={authClient}
      defaultTheme="dark"
      theme={{
        colors: {
            background: "var(--color-dark-bg)",
            card: "var(--color-card)",

            primary: "#a855f7",

            border: "var(--border-white-20)",

            input: "var(--bg-white-5)",

            foreground: "var(--color-text-primary)",

            muted: "var(--color-text-secondary)",
        }
    }}
    >
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/plan-history" element={<PlanHistory />} />
                <Route path="/plan/:version" element={<PlanDetail />} />
                <Route path="/auth/:pathname" element={<Auth />} />
                <Route path="/account/:pathname" element={<Account />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </NeonAuthUIProvider>
  );
}

export default App;
