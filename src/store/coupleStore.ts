/**
 * Couple Store (Zustand)
 */

import { create } from 'zustand';
import { Couple } from '@/types';

interface CoupleState {
  couple: Couple | null;
  loading: boolean;
  error: string | null;

  // Actions
  setCouple: (couple: Couple) => void;
  clearCouple: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useCoupleStore = create<CoupleState>((set) => ({
  couple: null,
  loading: false,
  error: null,

  setCouple: (couple) => set({ couple }),
  clearCouple: () => set({ couple: null }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}));

export default useCoupleStore;