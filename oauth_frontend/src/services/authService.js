// src/services/authService.js

import axios from "axios";

const BASE_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,   
});

export const authService = {

  getCurrentUser: async () => {
    try {
      const response = await api.get("/api/auth/getcurrentuser");
      return response.data;
    } catch (error) {
      console.error("Error fetching current user:", error);
      return { authenticated: false };
    }
  },

  logout: async () => {
    try {
      // Spring logout endpoint
      await api.post("/api/auth/logout", {}, { withCredentials: true });

      // Also trigger Spring Security logout
      await api.post("/logout", {}, { withCredentials: true });

      // Redirect to frontend login
      window.location.href = "http://localhost:5173/login";
    } catch (error) {
      console.error("Error logging out user:", error);
    }
  },

  loginWithGoogle: () => {
    window.location.href = `${BASE_URL}/oauth2/authorization/google`;
  },

  loginWithGitHub: () => {
    window.location.href = `${BASE_URL}/oauth2/authorization/github`;
  },
};
