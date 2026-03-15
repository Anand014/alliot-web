import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL ?? "/api/v1";

export const apiClient = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("supabase.auth.token") : null;
  if (token) {
    try {
      const parsed = JSON.parse(token);
      const accessToken = parsed?.currentSession?.access_token ?? parsed?.access_token;
      if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    } catch {
      // ignore
    }
  }
  return config;
});
