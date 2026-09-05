/**
 * Authentication Store (Zustand)
 */

import { create } from 'zustand';
import { User } from '@/types';
import AuthService from '@/services/auth';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;

  // Actions
  registerUser: (email: string, password: string, name: string, timezone: string) => Promise<void>;
  signInUser: (email: string, password: string) => Promise<void>;
  signOutUser: () => Promise<void>;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  error: null,
  isAuthenticated: false,

  registerUser: async (email, password, name, timezone) => {
    set({ loading: true, error: null });
    try {
      const user = await AuthService.registerUser(email, password, name, timezone);
      set({ user, isAuthenticated: true, loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Registration failed',
        loading: false,
      });
      throw error;
    }
  },

  signInUser: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const user = await AuthService.signInUser(email, password);
      set({ user, isAuthenticated: true, loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Sign in failed',
        loading: false,
      });
      throw error;
    }
  },

  signOutUser: async () => {
    set({ loading: true, error: null });
    try {
      await AuthService.signOutUser();
      set({ user: null, isAuthenticated: false, loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Sign out failed',
        loading: false,
      });
      throw error;
    }
  },

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}));

export default useAuthStore;