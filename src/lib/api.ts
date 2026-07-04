import { useId } from "react";
import { UserProfile } from "../types";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

async function post(path: string, body: object) {
  const res = await fetch(`${BASE_URL}/api/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(
      (await res.json().catch(() => ({}))).error || "Request failed",
    );
  }    
  return res.json();
}

async function get(path: string) {
  const res = await fetch(`${BASE_URL}/api/${path}`);

  console.log(
    "URL:",
    `${BASE_URL}/api/${path}`
  );

  console.log(
    "status:",
    res.status
  );

  console.log(
    "content-type:",
    res.headers.get("content-type")
  );

  const text = await res.text();
  console.log(text);

  return JSON.parse(text);
}

export const api = {
  saveProfile: (userId: string, profile: Omit<UserProfile, "userId" | "updatedAt">) => {
    return post("profile", {
      userId,
      goal: profile.goal,
      experience: profile.experience,
      days_per_week: profile.days_per_week,
      session_length: profile.session_length,
      equipment: profile.equipment,
      injuries: profile.injuries,
      preferred_split: profile.preferred_split,
    });
  },

  generatePlan: (userId: string) => {
    return post("plan/generate", { userId });
  },

  getCurrentPlan: (userId: string) => {
    return (get(`plan/current?userId=${userId}`));
  },

  getPlanHistory: (userId: string) => {
    return (get(`plan/history?userId=${userId}`));
  },

  getPlan: (userId: string, id: string) => {
    return (get(`plan/${id}?userId=${userId}`));
  }
};
