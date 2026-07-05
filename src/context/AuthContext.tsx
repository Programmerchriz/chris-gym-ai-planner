import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { TrainingPlan, User, UserProfile } from "../types";
import { authClient } from "../lib/auth";
import { api } from "../lib/api";

interface AuthContextType {
  user: User | null;
  plan: TrainingPlan | null;
  isLoading: boolean;
  saveProfile: (
    profile: Omit<UserProfile, "userId" | "updatedAt">,
  ) => Promise<void>;
  generatePlan: () => Promise<void>;
  refreshData: () => Promise<void>;
  getPlan: (planId: string, version: number) => Promise<TrainingPlan>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [neonUser, setNeonUser] = useState<any>(null);
  const [plan, setPlan] = useState<TrainingPlan | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // const isRefreshingRef = useRef(false);

  const refreshData = useCallback(async () => {
    if (!neonUser?.id) {
      setPlan(null);
      return;
    }

    const planData = await api.getCurrentPlan(neonUser.id).catch(() => null);
    setPlan(planData);
  }, [neonUser?.id]);

  useEffect(() => {
    let cancelled = false;

    async function loadUserAndPlan() {
      setIsLoading(true);

      try {
        const result = await authClient.getSession();
        const currentUser = result?.data?.user ?? null;

        if (cancelled) return;

        setNeonUser(currentUser);

        if (currentUser?.id) {
          let planData;
          try {
            planData = await api.getCurrentPlan(currentUser.id);
          } catch (err) {
            console.error("getCurrentPlan failed:", err);
            planData = null; // Explicitly set to null on error
          }

          if (!cancelled) {
            setPlan(planData);
          }
        } else {
          setPlan(null);
        }
      } catch (err) {
        if (!cancelled) {
          setNeonUser(null);
          setPlan(null);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadUserAndPlan();

    return () => {
      cancelled = true;
    };
  }, []);

  async function saveProfile(
    profileData: Omit<UserProfile, "userId" | "updatedAt">,
  ) {
    if (!neonUser) {
      throw new Error("User must be authenticated to save profile");
    }

    await api.saveProfile(neonUser.id, profileData);
    await refreshData();
  }

  async function generatePlan() {
    if (!neonUser) {
      throw new Error("User must be authenticated to generate plan");
    }

    const planData = await api.generatePlan(neonUser.id);
    setPlan(planData);
  }

  async function getPlan(planId: string, version: number) {
    if (!neonUser) {
      throw new Error("User must be authenticated to view plan");
    }

    const planData = await api.getPlan(neonUser.id, planId, version);
    return planData;
  }

  return (
    <AuthContext.Provider
      value={{
        user: neonUser,
        plan,
        isLoading,
        saveProfile,
        generatePlan,
        refreshData,
        getPlan,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
